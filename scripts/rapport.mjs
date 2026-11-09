// Bilan chiffré du jeu, sans aucun nom de joueur (le journal du robot est lisible par tous).
// Lancé à la demande par .github/workflows/rapport.yml ; ne fait que LIRE la base.
// Usage : FIREBASE_SERVICE_ACCOUNT='{...}' node scripts/rapport.mjs <dunes|aventure|tout> <jours> [prod|dev]
// (ou FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 GCLOUD_PROJECT=demo-bousier pour l'émulateur)
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const [type = 'tout', jours = '7', env = 'prod'] = process.argv.slice(2);
const N = Math.max(1, Math.min(60, parseInt(jours, 10) || 7));
const sa = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!sa && !process.env.FIRESTORE_EMULATOR_HOST) { console.error('Secret FIREBASE_SERVICE_ACCOUNT manquant.'); process.exit(1); }
initializeApp(sa ? { credential: cert(JSON.parse(sa)) } : { projectId: process.env.GCLOUD_PROJECT });
const db = getFirestore();

// --- Outils ---------------------------------------------------------------------
const pad = n => String(n).padStart(2, '0');
const key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;  // TZ=Europe/Paris dans le robot
const JOURS = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'];
const fmtDay = k => { const [y, m, d] = k.split('-').map(Number); return `${JOURS[new Date(y, m - 1, d).getDay()]} ${d}/${m}`; };
const size = cm => cm == null ? '—' : cm >= 100 ? (cm / 100).toFixed(2).replace('.', ',') + ' m' : cm.toFixed(1).replace('.', ',') + ' cm';
const pct = (a, b) => b ? Math.round(100 * a / b) + ' %' : '—';
const avg = a => a.length ? a.reduce((s, v) => s + v, 0) / a.length : null;
const med = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y), i = s.length >> 1; return s.length % 2 ? s[i] : (s[i - 1] + s[i]) / 2; };
const r1 = v => v == null ? '—' : (Math.round(v * 10) / 10).toString().replace('.', ',');
// petits groupes masqués : on ne doit pas pouvoir deviner qui c'est
const m = n => n > 0 && n < 3 ? '<3' : String(n);
const today = new Date(), days = [];
for (let i = N - 1; i >= 0; i--) { const d = new Date(today); d.setDate(d.getDate() - i); days.push(key(d)); }
const inRange = k => k >= days[0] && k <= days[days.length - 1];
const out = [];
const line = (s = '') => out.push(s);

// --- Lecture -------------------------------------------------------------------
const base = db.collection('envs').doc(env);
const profiles = (await base.collection('profiles').get()).docs
  .map(d => { try { return JSON.parse(d.get('data')); } catch (e) { return null; } }).filter(Boolean);
line(`BILAN BOUSIER (${env}) du ${fmtDay(days[0])} au ${fmtDay(days[days.length - 1])} (${N} jours), calculé le ${today.toLocaleString('fr-FR')}`);
line(`Profils dans la base : ${profiles.length}`);

// --- Dune du jour --------------------------------------------------------------
async function dunes() {
  line(); line('=== DUNE DU JOUR ===');
  line('Jour      | Météo          | Joueurs | Essais | Terrier | Taille médiane | Meilleure | Chocs murs/essai | Objets/essai');
  const played = new Map();  // profil -> nombre de jours joués
  const winners = new Set(), bestTry = [0, 0, 0, 0], tries = [0, 0, 0, 0];
  let allRuns = 0, allTerr = 0;
  for (const k of days) {
    const scores = (await base.collection('days').doc(k).collection('scores').get()).docs.map(d => d.data());
    let att = 0, runs = [], wx = {};
    profiles.forEach((p, i) => {
      const d = p.days && p.days[k];
      if (!d || !(d.runs || []).length) return;
      played.set(i, (played.get(i) || 0) + 1);
      att += d.attempts || d.runs.length;
      runs.push(...d.runs);
      d.runs.forEach(r => { if (r.weather) wx[r.weather] = (wx[r.weather] || 0) + 1; });
      const n = Math.min(3, d.runs.length); tries[n]++;
      let bi = 0; d.runs.forEach((r, j) => { if ((r.score || 0) > (d.runs[bi].score || 0)) bi = j; });
      if (d.runs.length >= 2) bestTry[Math.min(3, bi + 1)]++;
    });
    const bests = scores.map(s => s.score || 0).filter(v => v > 0);
    if (scores.length) { const top = scores.reduce((a, b) => (b.score || 0) > (a.score || 0) ? b : a); winners.add(top.name); }
    const terr = runs.filter(r => r.terrier).length;
    allRuns += runs.length; allTerr += terr;
    const w = Object.entries(wx).sort((a, b) => b[1] - a[1])[0];
    line([fmtDay(k).padEnd(9), (w ? w[0] : '—').padEnd(14), String(scores.length).padStart(7), String(att).padStart(6),
      pct(terr, runs.length).padStart(7), size(med(bests)).padStart(14), size(bests.length ? Math.max(...bests) : null).padStart(9),
      r1(avg(runs.map(r => r.wallHits || 0))).padStart(16), r1(avg(runs.map(r => r.absorbed || 0))).padStart(12)].join(' | '));
  }
  const counts = [...played.values()];
  line();
  line(`Joueurs différents sur la période : ${counts.length} ; en moyenne ${r1(avg(counts))} jours joués chacun`);
  line(`Jours joués par joueur : ${Array.from({ length: N }, (_, i) => `${i + 1} j : ${m(counts.filter(c => c === i + 1).length)}`).join(' · ')}`);
  line(`Profils qui n'ont pas joué de la période : ${m(profiles.length - counts.length)}`);
  line(`Terrier réussi : ${pct(allTerr, allRuns)} des ${allRuns} essais`);
  const tt = tries[1] + tries[2] + tries[3];
  line(`Essais utilisés dans une journée : 1 seul ${pct(tries[1], tt)} · 2 ${pct(tries[2], tt)} · 3 ou plus ${pct(tries[3], tt)}`);
  const bt = bestTry[1] + bestTry[2] + bestTry[3];
  line(`Meilleur essai du jour (quand 2 essais ou plus) : 1er ${pct(bestTry[1], bt)} · 2e ${pct(bestTry[2], bt)} · 3e ou après ${pct(bestTry[3], bt)}`);
  line(`Gagnants différents (1er du jour) : ${winners.size} sur ${N} jours`);
}

// --- Aventure ------------------------------------------------------------------
const WORLD_NAMES = ['Désert', 'Oasis', 'Rivière sauvage', 'Monde 4', 'Monde 5', 'Monde 6', 'Monde 7', 'Monde 8'];
function aventure() {
  line(); line('=== AVENTURE ===');
  const games = [], players = new Set(), clr0 = [];
  profiles.forEach((p, i) => {
    const a = p.adv; if (!a) return;
    const log = (a.log || []).filter(e => !e.short && e.d && inRange(e.d));
    if (log.length) players.add(i);
    games.push(...log);
    const c = a.st && a.st.clr && a.st.clr[0];
    if (c && c.d && inRange(c.d)) clr0.push(c.k || c.n);
  });
  line(`Joueurs : ${players.size} · parties : ${games.length} · parties par joueur : ${r1(players.size ? games.length / players.size : null)}`);
  if (!games.length) return;
  line(`Durée médiane d'une partie : ${r1(med(games.map(g => g.s || 0)) / 60)} min · niveau médian : ${r1(med(games.map(g => g.L || 0)))}`);
  const ends = {}; games.forEach(g => { ends[g.end] = (ends[g.end] || 0) + 1; });
  const NOMS = { faim: 'faim', animal: 'animal', abandon: 'abandon', fini: 'monde fini', fin: 'fin des mondes' };
  line(`Causes de fin : ${Object.entries(ends).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${NOMS[k] || k} ${pct(v, games.length)}`).join(' · ')}`);
  line(`Désert fini pour la 1re fois pendant la période : ${m(clr0.length)} joueurs ; parties nécessaires (médiane) : ${r1(med(clr0))} (objectif 3 ou 4)`);
  line();
  line('Monde            | Parties | Finies | Distance médiane dans le monde | Chocs d\'animaux/partie');
  for (let w = 0; w < WORLD_NAMES.length; w++) {
    const gs = games.filter(g => g.w0 === w); if (!gs.length) continue;
    line([WORLD_NAMES[w].padEnd(16), String(gs.length).padStart(7), pct(gs.filter(g => g.end === 'fini' || g.w > w).length, gs.length).padStart(6),
      (Math.round(med(gs.map(g => g.wm ?? g.m ?? 0))) + ' m').padStart(30), r1(avg(gs.map(g => g.hits || 0))).padStart(22)].join(' | '));
  }
  const off = {}, pick = {};
  games.forEach(g => { (g.offers || []).flat().forEach(c => { off[c] = (off[c] || 0) + 1; }); (g.picks || []).forEach(c => { pick[c] = (pick[c] || 0) + 1; }); });
  const cards = Object.keys(off).map(c => [c, off[c], pick[c] || 0]).sort((a, b) => b[2] - a[2]);
  line();
  line(`Cartes (choisies / proposées) : ${cards.map(([c, o, p]) => `${c} ${p}/${o}`).join(' · ')}`);
}

if (type === 'dunes' || type === 'tout') await dunes();
if (type === 'aventure' || type === 'tout') aventure();
line(); line('Fin du bilan.');
console.log(out.join('\n'));

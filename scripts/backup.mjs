// Sauvegarde de toute la base Firestore dans un fichier JSON.
// Lancée chaque semaine par .github/workflows/backup.yml (le fichier est ensuite chiffré).
// Usage : FIREBASE_SERVICE_ACCOUNT='{...}' node scripts/backup.mjs sortie.json
// (ou FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 GCLOUD_PROJECT=demo-bousier pour l'émulateur)
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { writeFileSync } from 'node:fs';

const sa = process.env.FIREBASE_SERVICE_ACCOUNT;
if (!sa && !process.env.FIRESTORE_EMULATOR_HOST) {
  console.error('Secret FIREBASE_SERVICE_ACCOUNT manquant (voir README, « Sauvegarde »).');
  process.exit(1);
}
initializeApp(sa ? { credential: cert(JSON.parse(sa)) } : { projectId: process.env.GCLOUD_PROJECT });
const db = getFirestore();

// Parcourt une collection et toutes ses sous-collections. listDocuments() renvoie
// aussi les documents « vides » qui ne servent qu'à porter des sous-collections
// (ex. envs/prod, envs/prod/days/2026-10-21).
let count = 0;
async function dump(col) {
  const out = {};
  for (const ref of await col.listDocuments()) {
    const snap = await ref.get(), entry = {};
    if (snap.exists) { entry.data = snap.data(); count++; }
    for (const sub of await ref.listCollections()) (entry.sub ||= {})[sub.id] = await dump(sub);
    out[ref.id] = entry;
  }
  return out;
}

const backup = { at: new Date().toISOString(), collections: {} };
for (const col of await db.listCollections()) backup.collections[col.id] = await dump(col);
writeFileSync(process.argv[2] || 'backup.json', JSON.stringify(backup));
console.log(`Sauvegarde terminée : ${count} documents.`);

// Vérifie que les scripts de index.html et admin.html n'ont pas d'erreur de syntaxe.
// Usage : node scripts/check-syntax.mjs   (code de sortie 1 si une erreur est trouvée)
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const dossier = mkdtempSync(join(tmpdir(), 'bousier-'));
let erreurs = 0;
for (const fichier of ['index.html', 'admin.html']) {
  const html = readFileSync(fichier, 'utf8');
  const re = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi; // scripts en ligne seulement
  let m, n = 0;
  while ((m = re.exec(html))) {
    const type = (/type\s*=\s*["']?([^"'\s>]+)/i.exec(m[1]) || [])[1] || '';
    if (type && !/javascript|module/i.test(type)) continue; // ignore le JSON, etc.
    n++;
    const f = join(dossier, `s${n}.${/module/i.test(type) ? 'mjs' : 'js'}`);
    writeFileSync(f, m[2]);
    try {
      execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' });
    } catch (e) {
      erreurs++;
      console.error(`ERREUR dans ${fichier} (script n°${n}) :\n${String(e.stderr).split('\n').slice(0, 6).join('\n')}`);
    }
  }
  console.log(`${fichier} : ${n} script(s) vérifié(s)`);
}
rmSync(dossier, { recursive: true, force: true });
process.exit(erreurs ? 1 : 0);

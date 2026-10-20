# vendor/

`firebase.js` : le SDK Firebase (app, auth, firestore/lite) en un seul fichier,
pour que le jeu ne dépende d'aucun CDN. Version : firebase@13.0.0.

Pour le reconstruire (ex. mise à jour de version) :

```sh
npm i firebase@13.0.0 esbuild
npx esbuild vendor/firebase-entry.js --bundle --format=esm --minify --legal-comments=none --outfile=vendor/firebase.js
```

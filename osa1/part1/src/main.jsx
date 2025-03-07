/*
 * 📌 React-projektin luominen Vite:llä
 * --------------------------------------
 * Helpoin tapa päästä alkuun on Vite-nimisen työkalun käyttö.
 * Seuraavat komennot luovat uuden React-projektin Vite-työkalulla,
 * asentavat tarvittavat riippuvuudet ja käynnistävät kehitysympäristön.
 *
 * 1️⃣ Luo uusi projekti:
 *    npm create vite@latest my-react-app -- --template react
 *    
 *    🔹 `npm create vite@latest` hakee ja suorittaa uusimman Vite-generaattorin.
 *    🔹 `my-react-app` on projektin nimi (voit muuttaa sen haluamaksesi).
 *    🔹 `--template react` valitsee React-pohjan (Vite tukee myös muita teknologioita).
 * 
 * 2️⃣ Siirry projektihakemistoon:
 *    cd my-react-app
 * 
 * 3️⃣ Asenna tarvittavat riippuvuudet:
 *    npm install
 * 
 * 4️⃣ Käynnistä kehitysympäristö:
 *    npm run dev
 * 
 * 🚀 **Sovellus on nyt käynnissä!**
 * --------------------------------------
 * 🖥️ Konsoli kertoo, että sovellus toimii osoitteessa: http://localhost:5173/
 * 
 * 🔥 Avaa selain ja käy testaamassa!
 */

import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
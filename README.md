# EpiMeteo

**EpiMeteo** è un'app React che fornisce informazioni meteo (attuale + previsioni ora-per-ora) per la città selezionata. I dati vengono recuperati dall'API di **OpenWeather** (geocoding per ottenere lat/lon e One Call / endpoint forecast per le previsioni orarie). Questo progetto è stato realizzato come esercizio pratico per mettere in pratica conoscenze su React e Vite.

---

## Cosa fa l'app
- Permette di selezionare o cercare una città e mostra le condizioni meteo aggiornate.  
- Restituisce la previsione **ora per ora**. 
- Presenta visualizzazioni e una UI pensata per componentizzazione e hooks di React.

---

## Tech stack rilevato
- React (Functional Components + Hooks)  
- Vite 
- JavaScript, HTML, CSS  
- Chiamate HTTP tramite `fetch` verso le API di OpenWeather.

---

## Struttura del repository

```
/public
  /assets
/src
  /components
    WeatherCard.jsx
    HourlyList.jsx
    SearchBar.jsx
    Header.jsx
  /pages
    Home.jsx
  /services
    weatherService.js
  /hooks
    useWeather.js
  main.jsx
  App.jsx
package.json
vite.config.js
README.md
```

---

## Setup locale

1. Clona il repo:
```bash
git clone https://github.com/Gianlu201/EpiMeteo.git
cd EpiMeteo
```

2. Installa le dipendenze:
```bash
npm install
# oppure
# yarn
```

3. Avvia il server di sviluppo:
```bash
npm run dev
# oppure yarn dev
```

4. Apri il browser su `http://localhost:5173`.

---

## API utilizzate & note tecniche

- **One Call / Forecast ora-per-ora**: `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=minutely,daily,alerts&units=metric&appid={API_KEY}`

---

## Deployment
- Build production:
```bash
npm run build
npm run preview
```
- Puoi deployare su Vercel / Netlify / Surge. Ricorda di impostare la variabile d'ambiente `VITE_OPENWEATHER_API_KEY`.

---

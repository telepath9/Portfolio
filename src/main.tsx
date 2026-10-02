import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'



//crea la base (root) e renderizza di tutta l'app React!!!
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// i tag <StrictMode> si eliminano da soli quando si carica il sito.
// servono per avere più verbosità negli errori/ecc durante lo sviluppo.
// <StrictMode> comprende anche l'elemento <App /> importato da /App.tsx


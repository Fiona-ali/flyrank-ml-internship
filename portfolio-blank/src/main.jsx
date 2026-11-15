import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Fiona Ali home">
          <span className="monogram">FA</span>
          <span>Fiona Ali</span>
        </a>
        <span className="status"><i /> Portfolio in progress</span>
      </header>

      <section className="hero" id="home" aria-labelledby="headline">
        <p className="eyebrow">SOFTWARE · AI · MACHINE LEARNING</p>
        <h1 id="headline">A little space<br />for <span>what I build.</span></h1>
        <p className="intro">This portfolio is taking shape. Check back soon.</p>
        <div className="rule"><span /></div>
        <p className="signature">Fiona Ali <span>—</span> 2026</p>
      </section>

      <footer>Built with React + Vite <span>·</span> Deployed on GitHub Pages</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);

function load_elevator(mainContainer) {
  mainContainer.innerHTML = `
    <section id="elevator-section">
      <h2>Elevator Pitch</h2>
      <div class="pitch-card">
        <p class="pitch-text">
          A fire‑safe solid‑state sodium–sulfur battery platform — zero lithium, cobalt, or nickel. 
          Targets 200–450 Wh/kg using abundant sodium and sulfur, enabling secure long‑range energy storage 
          for EVs, defence, and grid applications. Currently TRL‑2, moving toward lab validation TRL-3.
        </p>
      </div>
    </section>
  `;

  if (!document.getElementById('elevator-style')) {
    const style = document.createElement('style');
    style.id = 'elevator-style';
    style.textContent = `
      .pitch-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 36px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.04);
        max-width: 750px;
        margin: 0 auto;
      }
      .pitch-text {
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 1.6;
        color: #1a1a1a;
      }
      @media (max-width: 600px) {
        .pitch-card { padding: 20px; }
        .pitch-text { font-size: 1rem; }
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_elevator = load_elevator;
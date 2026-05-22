function load_elevator(mainContainer) {
  mainContainer.innerHTML = `
    <section id="elevator-section">
      <h2>Elevator Pitch</h2>
      <div class="pitch-card">
        <p class="pitch-text">
          Non‑flammable sodium–sulfur solid‑state battery platform. Zero lithium, cobalt, and nickel dependency. 
          Theoretical potential >700 Wh/kg. Phased target: 200‑450 Wh/kg. Power density up to 450‑700 W/kg 
          using abundant materials for EV, aerospace, defense, and grid‑storage applications — no critical 
          mineral dependency. Currently at TRL‑2, validated through first‑principles engineering and public 
          chemistry data. Next milestone: lab prototype.
        </p>
      </div>
      <p style="margin-top: 14px; font-size: 0.85rem; color: var(--text-muted);">
        This pitch distills the platform’s unique value: safety, supply chain freedom, and high energy density — 
        a combination absent from any commercial battery today.
      </p>
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
      }
      .pitch-text {
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 1.6;
        color: #1a1a1a;
        max-width: 900px;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_elevator = load_elevator;
function load_current_status(mainContainer) {
  mainContainer.innerHTML = `
    <section id="status-section">
      <h2>Current Status / Stage</h2>
      <div class="status-card">
        <span class="trl-badge">TRL 2 – Idea / Concept Stage</span>
        <ul class="status-list">
          <li>Research‑stage solid‑state sodium battery concept.</li>
          <li>Feasibility modeling and first‑principles energy density projections completed.</li>
          <li>No laboratory prototype exists; all performance figures are targets.</li>
          <li>Experimental validation planned for TRL‑3 upon lab access.</li>
          <li>Seeking incubation, grant funding, and early‑stage validation support.</li>
        </ul>
      </div>
      <p style="margin-top:18px;font-size:0.85rem;color:var(--text-muted);">
        Immediate goal: transition from concept (TRL‑2) to controlled lab validation (TRL‑3) via coin‑cell and pouch‑cell testing.
      </p>
    </section>
  `;
  
  if (!document.getElementById('status-style')) {
    const style = document.createElement('style');
    style.id = 'status-style';
    style.textContent = `
      .status-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 28px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      }
      .trl-badge {
        display: inline-block;
        background: #0d1117;
        color: #e0e0e0;
        padding: 5px 14px;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        margin-bottom: 18px;
      }
      .status-list {
        list-style: none;
        padding: 0;
      }
      .status-list li {
        padding: 6px 0 6px 20px;
        position: relative;
        font-size: 0.92rem;
        color: #333;
        line-height: 1.5;
      }
      .status-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
      }
    `;
    document.head.appendChild(style);
  }
}

// Alias for sidebar link (data-section="status")
window.load_status = load_current_status;
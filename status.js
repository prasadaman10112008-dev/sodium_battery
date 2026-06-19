function load_current_status(mainContainer) {
  mainContainer.innerHTML = `
    <section id="status-section">
      <h2>Current Status / Stage</h2>
      <div class="status-card">
        <span class="trl-badge">TRL 2 – Concept & Formulation Complete</span>

        <p style="margin-top:12px; font-size:0.95rem; color:#333;">
          All paper‑based design, engineering calculations, and process definitions have been completed. The platform is ready for experimental validation (TRL‑3). No physical prototype exists yet — every figure below is a <strong>documented design target</strong>.
        </p>

        <h3 style="margin-top:24px;">Completed TRL‑2 Deliverables</h3>
        <ul class="status-list">
          <li>Raw material selection finalised for anode, electrolyte, and cathode (masked as A‑, B‑, C‑Series)</li>
          <li>Full cell architecture defined (5 cm × 5 cm × 2 cm pouch, stack pressure 30‑45 PSI)</li>
          <li>Component formulations and protective layers fully documented</li>
          <li>Complete step‑by‑step process flow chart from assembly to pouch activation</li>
          <li>Equipment and machinery inventory locked (Micro‑Scale Tooling & Atmospheric Control Infrastructure)</li>
          <li>Operating temperature window set at -20 °C to +65 °C (passive thermal design)</li>
          <li>Safety protocols and emergency handling procedures established</li>
          <li>Energy‑density math derived from public theoretical capacities (Na ~1166 mAh/g, S ~1675 mAh/g) and standard engineering weight‑penalty rules (target 350‑420 Wh/kg)</li>
          <li>First‑cycle efficiency buffer (15‑20%) incorporated into practical projections</li>
          <li>35+ pages of detailed documentation (exact masses, temperatures, timings, masking)</li>
          <li>Initial IP protection via industrial masking; trade secrets secured</li>
        </ul>

        <h3 style="margin-top:24px;">Next Immediate Goal</h3>
        <p>
          Secure incubation and a prototyping grant (₹9‑12 lakhs) to access a dry‑room, procure raw materials, and begin coin‑cell and single‑layer pouch‑cell testing. Target: achieve ≥200 Wh/kg and a successful safety (no‑ignition) screen within 6‑9 months of lab access.
        </p>
      </div>
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
        padding: 7px 0 7px 24px;
        position: relative;
        font-size: 0.92rem;
        color: #333;
        line-height: 1.5;
      }
      .status-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        top: 5px;
        color: #10b981;
        font-weight: bold;
        font-size: 1rem;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_status = load_current_status;
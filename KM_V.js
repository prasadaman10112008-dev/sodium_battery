function load_metrics(mainContainer) {
  mainContainer.innerHTML = `
    <section id="metrics-section">
      <h2>Key Metrics & Validation</h2>
      <p class="metrics-intro">
        We track a small set of <strong>non‑proprietary, commercially relevant milestones</strong> to
        measure progress from concept (TRL‑2) to lab prototype (TRL‑4). All targets are derived from
        public‑domain chemistry and standard cell‑engineering rules — no secret formulas.
      </p>

      <!-- Part 1: Progress Tracking -->
      <h3>1. What We Will Measure (Progress Tracking)</h3>
      <ul class="bullet-list">
        <li><strong>Gravimetric energy density (Wh/kg)</strong> — from lab coin‑cell → prototype pouch → pilot cell.</li>
        <li><strong>Active‑material weight fraction</strong> — target 35–40% of total cell mass (industry‑standard pouch design).</li>
        <li><strong>First‑cycle coulombic efficiency</strong> — a 15–20% efficiency drop is already deducted from our practical target.</li>
        <li><strong>Cycle life stability</strong> — after initial interface formation, capacity retention will be monitored.</li>
        <li><strong>Safety under abuse</strong> — nail penetration and thermal abuse to confirm no ignition.</li>
      </ul>

      <!-- Part 2: Validation of Problem & Proposed Approach -->
      <h3 style="margin-top:30px;">2. Validation of Problem & Proposed Approach</h3>
      <p><strong>Target Projection – Why 350–420 Wh/kg Is Realistic (Non‑Proprietary)</strong></p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Theoretical Potential</th>
              <th>Practical Target</th>
              <th>Validation Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Gravimetric Energy Density</strong></td>
              <td>&gt;1200 Wh/kg (Na‑S system)</td>
              <td>350–420 Wh/kg</td>
              <td>Public‑domain capacities (Na: ~1166 mAh/g, S: ~1675 mAh/g) × standard voltage, then ~65% dead‑weight penalty for inactive components (current collectors, casing, solid electrolyte).</td>
            </tr>
            <tr>
              <td><strong>Active‑Weight Fraction</strong></td>
              <td>100% (pure chemicals)</td>
              <td>35–40% of total cell mass</td>
              <td>Inactive parts (foils, casing, electrolyte) = 60–65% of total cell weight in standard pouch/blade design.</td>
            </tr>
            <tr>
              <td><strong>Steady‑State Performance</strong></td>
              <td>Un‑degraded theoretical</td>
              <td>Stabilised after initial drop</td>
              <td>15–20% first‑cycle efficiency loss already deducted; projection is steady‑state post‑formation value.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Panel-Ready Quote -->
      <div class="panel-quote">
        <p>
          <em>“Sir, yeh numbers publicly known chemical capacities, standard cell‑engineering weight penalties, aur first‑cycle efficiency buffers par base hain. Koi secret formula nahi, sirf phase‑wise prototyping se validate karenge.”</em>
        </p>
      </div>

      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:16px;">
        <em>All performance targets are projected (TRL‑2). No experimental validation has been conducted yet. The above logic demonstrates the engineering rationale behind our claims without revealing any proprietary process details.</em>
      </p>
    </section>
  `;

  // Inject styles once
  if (!document.getElementById('metrics-style')) {
    const style = document.createElement('style');
    style.id = 'metrics-style';
    style.textContent = `
      .metrics-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 28px;
        max-width: 900px;
        line-height: 1.6;
      }
      .bullet-list {
        list-style: none;
        padding: 0;
      }
      .bullet-list li {
        padding: 6px 0 6px 20px;
        position: relative;
        font-size: 0.9rem;
        color: #555;
        line-height: 1.5;
      }
      .bullet-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
      }
      .panel-quote {
        background: #fdf8f0;
        border-left: 4px solid var(--accent);
        padding: 16px 20px;
        border-radius: 0 12px 12px 0;
        margin: 24px 0;
        font-size: 0.92rem;
        color: #5a4620;
        line-height: 1.5;
      }
      #metrics-section h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 20px 0 10px;
        color: #1a1a1a;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_metrics = load_metrics;
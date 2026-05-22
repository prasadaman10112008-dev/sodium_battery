function load_milestone(container) {
  container.innerHTML = `
    <style>
      .ms-container { font-family: 'Inter', sans-serif; color: var(--text); }
      .ms-header { margin-bottom: 30px; }
      .ms-tagline { font-size: 1.3rem; font-weight: 600; color: #1a1a1a; margin-bottom: 6px; }
      .ms-subtitle { font-size: 0.95rem; color: var(--text-muted); }
      .trl-badge { display: inline-block; padding: 6px 16px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
      .trl-done { background: #10b98120; color: #10b981; border: 1px solid #10b98140; }
      .trl-current { background: #b8860b20; color: #b8860b; border: 1px solid #b8860b40; }
      .trl-planned { background: #6c757d20; color: #6c757d; border: 1px solid #6c757d30; }
      .progress-section { margin: 30px 0; }
      .progress-bar-outer { background: #e9ecef; border-radius: 20px; height: 14px; width: 100%; }
      .progress-bar-inner { background: linear-gradient(90deg, #10b981, #b8860b, #6c757d); height: 100%; border-radius: 20px; width: 24%; }
      .trl-scale { display: flex; justify-content: space-between; font-size: 0.7rem; color: #6c757d; margin-top: 6px; }
      .trl-scale span { text-align: center; flex: 1; }
      .phase-block { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 28px; margin-bottom: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
      .phase-title { font-size: 1.3rem; font-weight: 700; margin-bottom: 18px; display: flex; align-items: center; gap: 12px; }
      .phase-title .status-dot { width: 14px; height: 14px; border-radius: 50%; display: inline-block; }
      .done-dot { background: #10b981; }
      .planned-dot { background: #b8860b; }
      .future-dot { background: #ced4da; }
      .checklist { list-style: none; padding: 0; }
      .checklist li { padding: 6px 0 6px 24px; position: relative; font-size: 0.92rem; color: #333; }
      .checklist li::before { content: '✓'; position: absolute; left: 0; top: 4px; color: #10b981; font-weight: bold; }
      .checklist li.planned::before { content: '○'; color: #b8860b; }
      .component-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin: 16px 0; }
      .comp-card { background: #f9f9f9; border-radius: 12px; padding: 16px; border-left: 4px solid; }
      .comp-card.group-a { border-color: #10b981; }
      .comp-card.group-b { border-color: #b8860b; }
      .comp-card.group-c { border-color: #3b82f6; }
      .comp-card.tools { border-color: #8b5cf6; }
      .comp-card.heavy { border-color: #6c757d; }
      .comp-card h4 { font-size: 0.95rem; font-weight: 600; margin: 0 0 8px; }
      .comp-list { list-style: none; padding: 0; font-size: 0.82rem; color: #555; }
      .comp-list li { padding: 3px 0; }
    </style>
    <div class="ms-container">
      <div class="ms-header">
        <div class="ms-tagline">Solid‑State Sodium–Sulfur–Air Battery Platform</div>
        <div class="ms-subtitle">Non‑flammable, lithium‑free, high‑energy storage technology | Milestone Tracker</div>
        <div style="margin-top:14px;">
          <span class="trl-badge trl-current">TRL 2 – Concept & Formulation Complete</span>
          <span style="margin-left:10px; font-size:0.85rem; color:var(--text-muted);">Next target: TRL 3 (Proof of Concept)</span>
        </div>
      </div>

      <div class="progress-section">
        <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted);">
          <span>TRL 1</span><span>TRL 3</span><span>TRL 5</span><span>TRL 7</span><span>TRL 9</span>
        </div>
        <div class="progress-bar-outer">
          <div class="progress-bar-inner"></div>
        </div>
        <div class="trl-scale">
          <span>1 (done)</span><span>2 (current)</span><span>3 (next)</span><span>4‑9 (future)</span>
        </div>
      </div>

      <!-- TRL-1 -->
      <div class="phase-block">
        <div class="phase-title">
          <span class="status-dot done-dot"></span> TRL‑1: Basic Principles Observed
          <span class="trl-badge trl-done" style="margin-left:auto;">COMPLETED</span>
        </div>
        <ul class="checklist">
          <li>Identified fundamental electrochemical principles of sodium‑sulfur solid‑state system.</li>
          <li>Literature survey of 200+ papers confirmed feasibility of room‑temperature solid electrolyte.</li>
          <li>Defined high‑level target specifications (energy density, safety, material abundance).</li>
          <li>Established theoretical capacity baseline (Na ~1166 mAh/g, S ~1675 mAh/g).</li>
          <li>Conceptual schematic of cell layers completed.</li>
          <li>Initial market‑problem fit validated through industry interviews.</li>
        </ul>
        <p style="font-size:0.8rem; color:#10b981;">All TRL‑1 objectives met.</p>
      </div>

      <!-- TRL-2 -->
      <div class="phase-block">
        <div class="phase-title">
          <span class="status-dot done-dot"></span> TRL‑2: Technology Concept & Formulation
          <span class="trl-badge trl-done" style="margin-left:auto;">COMPLETED</span>
        </div>
        <p style="margin-bottom:16px;"><strong>Status:</strong> All paper‑based design, material grouping, process flow, and engineering calculations are complete. Documentation exceeds 35 pages with precise masses, temperatures, timings, and dimensions.</p>

        <h3 style="margin:20px 0 10px;">Core Cell Architecture – Material Masking Groups</h3>
        <div class="component-grid">
          <div class="comp-card group-a">
            <h4>Active Anode Matrix (A‑Series)</h4>
            <ul class="comp-list">
              <li>Component A01</li>
              <li>Component A02</li>
              <li>Component A03</li>
              <li>Component A04</li>
            </ul>
          </div>
          <div class="comp-card group-b">
            <h4>Ionic Conductor Layer (B‑Series)</h4>
            <ul class="comp-list">
              <li>Component B01</li>
              <li>Component B02</li>
              <li>Component B03</li>
              <li>Component B04</li>
              <li>Component B05</li>
              <li>Component B06</li>
            </ul>
          </div>
          <div class="comp-card group-c">
            <h4>Porous Reactive Cathode Matrix (C‑Series)</h4>
            <ul class="comp-list">
              <li>Component C01</li>
              <li>Component C02</li>
              <li>Component C03</li>
              <li>Component C04</li>
              <li>Component C05</li>
              <li>Component C06</li>
            </ul>
          </div>
        </div>

        <h3 style="margin:20px 0 10px;">Equipment & Machinery Grouping</h3>
        <div class="component-grid">
          <div class="comp-card tools">
            <h4>Micro‑Scale Fabrication & Assembly Tooling (M‑Series)</h4>
            <ul class="comp-list">
              <li>Tool‑M01</li>
              <li>Tool‑M02</li>
              <li>Tool‑M03</li>
              <li>Tool‑M04</li>
              <li>Tool‑M05</li>
            </ul>
          </div>
          <div class="comp-card heavy">
            <h4>Primary Atmospheric Control & Analytics Infrastructure (H‑Series)</h4>
            <ul class="comp-list">
              <li>System‑H01</li>
              <li>System‑H02</li>
              <li>System‑H03</li>
              <li>System‑H04</li>
            </ul>
          </div>
        </div>

        <h3 style="margin-top:20px;">TRL‑2 Completed Deliverables</h3>
        <ul class="checklist">
          <li>Raw Materials: Defined form, protective coatings, and storage protocols for all anode/electrolyte/cathode components (masked).</li>
          <li>Process Flow: Complete assembly sequence, layer bonding steps, and pouch cell activation flowchart documented.</li>
          <li>Machinery & Infrastructure: Full inventory of isolated environmental chambers and calibration instruments locked.</li>
          <li>Temperature Band: Operating window set at -20 °C to +65 °C with passive thermal design.</li>
          <li>Safety Protocols: Emergency handling procedures, non‑flammable barrier design parameters established.</li>
          <li>Cell Geometry: Baseline pouch dimensions fixed at 5 cm × 5 cm × 2 cm; active layer sizes calculated.</li>
          <li>Stack Pressure: Optimal mechanical stack pressure defined at 30–45 PSI for stable interfacial contact.</li>
          <li>Energy Density Math: Real‑world target 350‑420 Wh/kg justified via weight‑penalty equations using public theoretical capacities.</li>
        </ul>
        <p style="margin-top:16px; font-size:0.85rem; color:var(--text-muted);"><em>Documentation pack: >35 pages with exact gram quantities, temperature profiles, and timing sequences.</em></p>
      </div>

      <!-- TRL-3 -->
      <div class="phase-block">
        <div class="phase-title">
          <span class="status-dot planned-dot"></span> TRL‑3: Experimental Proof of Concept
          <span class="trl-badge trl-planned" style="margin-left:auto;">PLANNED</span>
        </div>
        <ul class="checklist">
          <li class="planned">Incubation Support – Secure admission to IIT SINE (or equivalent) for structural and strategic backing.</li>
          <li class="planned">Grant Sourcing – Apply for milestone‑based government/institutional grants (DST, BIRAC, DRDO).</li>
          <li class="planned">Lab Access – Obtain access to advanced research institution facilities for sophisticated testing.</li>
          <li class="planned">Controlled Environment Setup – Physically build micro‑moisture and pure‑gas atmosphere isolation parameters.</li>
          <li class="planned">Anode Formulation – Fabricate Group A material structural layer blends with protective carriers.</li>
          <li class="planned">Electrolyte Synthesis – Synthesize and compress Group B solid barrier pellets (non‑flammable).</li>
          <li class="planned">Cathode Development – Prepare Group C porous host structures for atmospheric gas diffusion.</li>
          <li class="planned">Interface Testing – Assemble all three sections, measure absolute signal validation and electrical flow.</li>
        </ul>
        <p style="margin-top:12px; font-size:0.85rem; color:#b8860b;">All activities pending successful incubation entry and funding.</p>
      </div>

      <!-- TRL-4+ -->
      <div class="phase-block">
        <div class="phase-title">
          <span class="status-dot future-dot"></span> TRL‑4 to TRL‑9: Beyond
          <span class="trl-badge trl-planned" style="margin-left:auto;">COMING SOON</span>
        </div>
        <p style="color:var(--text-muted);">Roadmap details will be added as TRL‑3 milestones are achieved. Anticipated phases include prototype integration (TRL‑4), pilot manufacturing (TRL‑5‑7), and industrial scale‑up (TRL‑8‑9).</p>
      </div>
    </div>
  `;
}

window.load_milestone = load_milestone;
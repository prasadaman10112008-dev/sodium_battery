function load_plan(mainContainer) {
  mainContainer.innerHTML = `
    <section id="plan-section">
      <h2>18‑Month Plan</h2>
      <p class="plan-intro">
        The immediate goal is to move from <strong>TRL‑2 (concept)</strong> to <strong>TRL‑4/5 (lab‑validated prototype)</strong>.
        This requires institutional access, systematic experimental validation, and a small, focused team.
        The plan is divided into three 6‑month phases with clear go/no‑go gates.
      </p>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Timeline</th>
              <th>Key Activities</th>
              <th>Milestones & Deliverables</th>
              <th>TRL Progression</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Phase 1 – Setup & Early Validation</strong></td>
              <td>Months 1–6</td>
              <td>
                • Incubator onboarding & legal setup<br>
                • Lab access finalisation (dry room, glove box, basic tools)<br>
                • Procurement of anode, electrolyte, cathode raw materials<br>
                • Initial coin‑cell assembly & electrochemical testing<br>
                • Safety screening (thermal abuse on small cells)
              </td>
              <td>
                • Operational lab workspace<br>
                • First coin‑cell data (capacity, voltage, efficiency)<br>
                • Preliminary safety pass (no fire/ignition)<br>
                • Material procurement SOP ready
              </td>
              <td><strong>TRL 2 → 3</strong></td>
            </tr>
            <tr>
              <td><strong>Phase 2 – Subsystem Optimisation & Pouch Cells</strong></td>
              <td>Months 7–12</td>
              <td>
                • Electrolyte composition refinement<br>
                • Electrode‑electrolyte interface optimisation<br>
                • Scale‑up to single‑layer pouch cells (1‑5 Ah)<br>
                • Cycle life testing (target >500 cycles initial)<br>
                • Coulombic efficiency and self‑discharge measurement
              </td>
              <td>
                • Stable electrolyte with acceptable room‑temperature conductivity<br>
                • Pouch cell energy density ≥150 Wh/kg (lab scale)<br>
                • Cycle life data (≥500 cycles with ≥80% capacity)<br>
                • First‑cycle loss within projected 15‑20% buffer
              </td>
              <td><strong>TRL 3 → 4</strong></td>
            </tr>
            <tr>
              <td><strong>Phase 3 – Integrated Prototype & Pre‑Pilot Preparation</strong></td>
              <td>Months 13–18</td>
              <td>
                • Multi‑layer pouch cell fabrication (5‑10 layers)<br>
                • Performance benchmarking (energy density, power, cycle life)<br>
                • Abuse testing (nail penetration, overcharge, crush)<br>
                • Pre‑certification documentation (UN38.3 readiness)<br>
                • Seed/Series‑A fundraising preparation
              </td>
              <td>
                • Prototype cell with ≥200 Wh/kg demonstrated<br>
                • Safety data package for partner discussions<br>
                • IP filings (provisional/complete)<br>
                • Investor‑ready data room & pitch deck updated<br>
                • Clear path to TRL‑5 (pilot line)
              </td>
              <td><strong>TRL 4 → 5 pathway</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 30px;">Funding Requirement (Indicative)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Phase</th><th>Estimated Cost (₹)</th><th>Primary Source</th></tr>
          </thead>
          <tbody>
            <tr><td>Phase 1</td><td>₹9 - 12 Lakhs</td><td>Incubator seed, government grants (DST, BIRAC)</td></tr>
            <tr><td>Phase 2</td><td>₹6 - 8 Lakhs</td><td>Grant + Angel/Seed equity</td></tr>
            <tr><td>Phase 3</td><td>₹13-15 Lakhs</td><td>Seed equity + strategic co‑development advances</td></tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:16px;">
        <em>Total estimated cost for 18‑month plan: <strong>₹23 – 35 Lakhs</strong>. This covers lab access, materials, small equipment, and a lean team of 2‑3 researchers. All timelines assume continuous lab access and no fundamental technical dead‑ends.</em>
      </p>

      <p style="font-size:0.8rem; color:var(--text-muted);">
        <em>The plan is designed to be milestone‑driven. If a critical metric (e.g., energy density) is not met at a gate, the next phase will be delayed until the issue is resolved.</em>
      </p>
    </section>
  `;

  if (!document.getElementById('plan-style')) {
    const style = document.createElement('style');
    style.id = 'plan-style';
    style.textContent = `
      .plan-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 28px;
        max-width: 900px;
        line-height: 1.6;
      }
      #plan-section h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 24px 0 12px;
        color: #1a1a1a;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_plan = load_plan;
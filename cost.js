function load_costs(mainContainer) {
  mainContainer.innerHTML = `
    <section id="costs-section">
      <h2>Costs</h2>
      <p class="costs-intro">
        We are at <strong>TRL‑2</strong> and have not yet built a lab prototype. The following is a realistic
        <strong>estimated cost breakdown</strong> for the next immediate step — moving to <strong>TRL‑3</strong>
        (controlled lab validation). All figures are approximate and subject to change based on actual lab access
        and material procurement.
      </p>

      <h3>Estimated TRL‑2 → TRL‑3 Transition Cost (Approx. ₹9 – ₹12 Lakhs)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Cost Category</th>
              <th>Description</th>
              <th>Estimated Range (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>Environment Setup</strong></td>
              <td>Basic dry‑room access, glove box, lab consumables, safety equipment, rent for a small workspace.</td>
              <td>4,00,000 – 5,00,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td><strong>Anode Raw Materials & Components</strong></td>
              <td>Sodium‑based anode precursors, current collectors, small fabrication accessories.</td>
              <td>1,00,000 – 2,00,000</td>
            </tr>
            <tr>
              <td>3</td>
              <td><strong>Electrolyte Raw Materials & Components</strong></td>
              <td>Solid‑state electrolyte precursors, processing chemicals, small‑scale synthesis tools.</td>
              <td>2,00,000 – 2,50,000</td>
            </tr>
            <tr>
              <td>4</td>
              <td><strong>Cathode Raw Materials & Components</strong></td>
              <td>Sulfur‑based cathode active materials, conductive additives, small fabrication parts.</td>
              <td>50,000 – 1,00,000</td>
            </tr>
            <tr>
              <td>5</td>
              <td><strong>Assembly & Testing</strong></td>
              <td>Coin‑cell crimping, pouch‑cell fabrication jig, electrochemical testing (cycler, potentiostat), safety screening.</td>
              <td>1,00,000 – 1,40,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="font-size:0.9rem; color:var(--text-muted); margin-top:12px;">
        <em>Note: These estimates assume access to shared institutional characterization tools (XRD, SEM, etc.) through an incubator like SINE/IIT Bombay. If such access is not available, equipment rental or third‑party testing costs would increase the budget by ₹2‑4 lakhs.</em>
      </p>

      <h3 style="margin-top: 30px;">Long‑Term Cost Advantage (Post‑Scale)</h3>
      <p>
        Sodium and sulfur are industrial commodities — globally abundant and cheap. At scale, the raw material
        basket is expected to be <strong>structurally 30‑40% cheaper</strong> than lithium‑ion NMC. This is not
        a projection; it's a material fact. The challenge is reaching that scale. All cell‑level cost parity
        claims will remain hypothetical until pilot manufacturing is demonstrated.
      </p>

      <p style="margin-top: 20px; font-size:0.85rem; color: var(--text-muted);">
        <em>No detailed financial projections are provided, as the platform is pre‑revenue and pre‑prototype. The above cost estimates are based on current Indian market rates for lab‑scale procurement and have been derived from informal vendor discussions.</em>
      </p>
    </section>
  `;

  // Inject styles once
  if (!document.getElementById('costs-style')) {
    const style = document.createElement('style');
    style.id = 'costs-style';
    style.textContent = `
      .costs-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 24px;
        max-width: 900px;
        line-height: 1.6;
      }
      #costs-section h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 24px 0 12px;
        color: #1a1a1a;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_costs = load_costs;
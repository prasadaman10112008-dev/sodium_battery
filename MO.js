function load_section8(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section8">
      <h2>8. Market Opportunity</h2>
      <p class="section-intro">
        The global battery market is projected to exceed <strong>$450–500 billion annually by 2035</strong>, driven by electrification of transport, renewable energy integration, and new demand from data centres, aerospace, and defence. The proposed platform targets the intersection of high safety, high energy density, and complete lithium/cobalt/nickel independence — a niche that remains unoccupied at commercial scale. All figures are long‑term projections based on public sources (IEA, BNEF, IESA, McKinsey). The serviceable obtainable market (SOM) assumes successful technical validation and phased entry starting with premium niches.
      </p>

      <h3>8.1 Global Total Addressable Market (TAM)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Segment</th><th>2035 Demand (GWh)</th><th>Revenue at $100/kWh (Illustrative)</th></tr>
          </thead>
          <tbody>
            <tr><td>Electric Vehicles</td><td>5,500</td><td>$550 B</td></tr>
            <tr><td>Grid & Industrial Storage</td><td>800</td><td>$80 B</td></tr>
            <tr><td>Aerospace, Defence & Specialty</td><td>60</td><td>$6 B</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>~6,360</strong></td><td><strong>~$636 B</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">
        Note: Revenue estimate uses a blended average price; actual TAM revenue depends on cell pricing. IEA, BNEF, McKinsey projections.
      </p>

      <h3>8.2 Serviceable Addressable Market (SAM) – Sodium Solid‑State Applicable Segments</h3>
      <p>
        Not all battery demand is addressable. The platform can only serve segments where its unique attributes (safety, material independence, high energy density) are valued at a premium, or where lithium dependency is a pain point.
      </p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Application Segment</th><th>Total Demand (GWh, 2035)</th><th>Assumed Addressable Share</th><th>Addressable Demand (GWh)</th><th>Rationale</th></tr>
          </thead>
          <tbody>
            <tr><td>EV – High Safety / Entry</td><td>2,000</td><td>20%</td><td>400</td><td>Segments where safety & cost trump max range</td></tr>
            <tr><td>Stationary Storage – Fire‑Sensitive</td><td>400</td><td>30%</td><td>120</td><td>Urban BESS, data centres, C&I microgrids</td></tr>
            <tr><td>Aerospace / eVTOL / Drones</td><td>30</td><td>40%</td><td>12</td><td>High power, safety‑critical, premium pricing</td></tr>
            <tr><td>Defence & Strategic</td><td>30</td><td>50%</td><td>15</td><td>Supply chain security paramount</td></tr>
            <tr><td><strong>Total SAM</strong></td><td></td><td></td><td><strong>~547 GWh</strong></td><td></td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.85rem; color:var(--text-muted);">
        At a conservative long‑term cell price of $80–100/kWh for sodium solid‑state, this SAM translates to a revenue pool of <strong>$45–55 billion annually</strong> by 2035.
      </p>

      <h3>8.3 Serviceable Obtainable Market (SOM) – Realistic Early‑Stage Capture</h3>
      <p>
        Given TRL 2 and a 6–8 year development timeline to industrial scale, early SOM will be a small fraction of SAM, concentrated in high‑margin niches.
      </p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Scenario</th><th>Assumed Market Share of SAM</th><th>SOM (GWh)</th><th>Revenue at $90/kWh</th></tr>
          </thead>
          <tbody>
            <tr><td>Conservative</td><td>2%</td><td>~11 GWh</td><td>~$1.0 B</td></tr>
            <tr><td>Moderate</td><td>5%</td><td>~27 GWh</td><td>~$2.4 B</td></tr>
            <tr><td>Optimistic (validated scale)</td><td>10%</td><td>~55 GWh</td><td>~$4.9 B</td></tr>
          </tbody>
        </table>
      </div>

      <h3>8.4 India‑Specific Market Opportunity</h3>
      <p>India’s battery demand is forecast to reach <strong>800–900 GWh annually by 2035</strong> (IESA). With negligible domestic cell production today, a localised sodium solid‑state platform can capture a meaningful share under the PLI‑ACC and Atmanirbhar Bharat push.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Parameter</th><th>Estimate (2035 Lens)</th></tr>
          </thead>
          <tbody>
            <tr><td>India Total Battery Demand</td><td>~800–900 GWh</td></tr>
            <tr><td>Addressable SAM (Safety + Strategic Segments)</td><td>~20% → 160–180 GWh</td></tr>
            <tr><td>Conservative SOM (5–7% of India SAM)</td><td>8–13 GWh</td></tr>
            <tr><td>Revenue Potential (at $90/kWh)</td><td><strong>$720 M – $1.2 B</strong></td></tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin-top: 30px;">Market Growth Catalysts</h3>
      <ul class="bullet-list">
        <li><strong>Regulatory push on battery safety:</strong> UN R100, EU Battery Regulation, India’s AIS‑048 tighten fire safety norms.</li>
        <li><strong>Supply chain diversification policies:</strong> US IRA, EU CRMA, India’s PLI schemes reward lithium‑free, locally sourced chemistries.</li>
        <li><strong>Corporate ESG mandates:</strong> Automakers and data centre operators face pressure to eliminate cobalt and reduce supply chain risk.</li>
        <li><strong>Defence modernisation:</strong> Sovereign nations seek domestically sourced, safe, high‑performance batteries.</li>
      </ul>

      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:12px;">
        All market figures are projections based on third‑party data. The platform is pre‑revenue and pre‑prototype (TRL 2). Realistic market capture depends entirely on technical success and manufacturing scale‑up.
      </p>
    </section>
  `;

  // Shared styles should already exist, but ensure they do
  if (!document.getElementById('report-section-style')) {
    const style = document.createElement('style');
    style.id = 'report-section-style';
    style.textContent = `
      .section-intro {
        font-size: 0.95rem;
        color: #444;
        margin-bottom: 24px;
        line-height: 1.6;
      }
      .bullet-list {
        list-style: none;
        padding: 0;
        margin-bottom: 16px;
      }
      .bullet-list li {
        padding: 5px 0 5px 18px;
        position: relative;
        font-size: 0.9rem;
        color: #333;
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
      .sub-list {
        list-style: none;
        padding-left: 20px;
        margin-top: 4px;
      }
      .sub-list li {
        font-size: 0.85rem;
        padding: 3px 0 3px 16px;
        position: relative;
      }
      .sub-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 5px;
        height: 5px;
        background: #ccc;
        border-radius: 50%;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section8 = load_section8;
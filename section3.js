function load_section3(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section3">
      <h2>3. Existing Battery Landscape</h2>

      <h3>3.1 Incumbent Technologies</h3>

      <div class="tech-block">
        <h4>Lithium‑ion – NMC (Nickel Manganese Cobalt)</h4>
        <ul class="bullet-list">
          <li>Primary chemistry for premium EVs and high‑performance consumer electronics.</li>
          <li>Gravimetric energy density: 200–280 Wh/kg.</li>
          <li>Mature, globally scaled supply chain with established manufacturing infrastructure.</li>
          <li><strong>Key vulnerabilities:</strong>
            <ul class="sub-list">
              <li>High dependence on cobalt and nickel; volatile raw material pricing.</li>
              <li>Moderate safety profile due to flammable liquid electrolyte.</li>
              <li>Thermal runaway risk persists despite advanced battery management systems.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="tech-block">
        <h4>Lithium‑ion – LFP (Lithium Iron Phosphate)</h4>
        <ul class="bullet-list">
          <li>Cost‑leader for mainstream EVs and stationary storage applications.</li>
          <li>Energy density: 150–180 Wh/kg.</li>
          <li><strong>Advantages:</strong>
            <ul class="sub-list">
              <li>Long cycle life (3,000–6,000 cycles to 80% SOH).</li>
              <li>Excellent thermal stability and inherent safety.</li>
              <li>Cobalt‑free composition.</li>
            </ul>
          </li>
          <li><strong>Limitations:</strong>
            <ul class="sub-list">
              <li>Energy density ceiling restricts use in long‑range, weight‑sensitive platforms.</li>
              <li>Still entirely dependent on lithium supply chains.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="tech-block">
        <h4>Sodium‑ion (Early Commercial)</h4>
        <ul class="bullet-list">
          <li>Recently commercialised at scale by CATL and others (Prussian white / layered oxide cathodes).</li>
          <li>Energy density: 100–160 Wh/kg in currently available cells.</li>
          <li><strong>Key strengths:</strong>
            <ul class="sub-list">
              <li>Material abundance: sodium is cheap and globally available.</li>
              <li>Low geopolitical supply chain risk.</li>
              <li>Generally good safety characteristics.</li>
            </ul>
          </li>
          <li><strong>Current constraints:</strong>
            <ul class="sub-list">
              <li>Lower energy density limits addressable market (low‑speed EVs, two‑wheelers, stationary storage).</li>
              <li>Immature supply chain compared to lithium‑ion.</li>
            </ul>
          </li>
        </ul>
      </div>

      <h3>3.2 Next‑Generation Lithium Solid‑State</h3>
      <ul class="bullet-list">
        <li>Pursued by QuantumScape, Solid Power, Toyota, and others using lithium‑metal anodes with sulfide/oxide electrolytes.</li>
        <li>Target gravimetric energy density: 400–500 Wh/kg.</li>
        <li>Intended safety advantage: elimination of flammable liquid electrolytes.</li>
        <li>Status: pilot to pre‑commercial scale (TRL 5–6).</li>
        <li><strong>Unresolved challenges:</strong>
          <ul class="sub-list">
            <li>Long‑term interface stability and dendrite suppression.</li>
            <li>Scalable, cost‑effective manufacturing processes.</li>
            <li>Supply chain dependency on lithium and specialty materials remains.</li>
            <li>Cost structure highly uncertain at volume.</li>
          </ul>
        </li>
      </ul>

      <h3>3.3 Comparative Landscape Matrix</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Energy Density (Wh/kg)</th>
              <th>Cycle Life (to 80%)</th>
              <th>Safety Profile</th>
              <th>Raw Material Risk</th>
              <th>Maturity</th>
              <th>Cost Trend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Li‑ion NMC</td>
              <td>200–280</td>
              <td>1,000–2,000</td>
              <td>Moderate (liquid electrolyte)</td>
              <td>High (Co, Ni, Li)</td>
              <td>Mature (TRL 9)</td>
              <td>Declining slowly; material‑dependent</td>
            </tr>
            <tr>
              <td>Li‑ion LFP</td>
              <td>150–180</td>
              <td>3,000–6,000</td>
              <td>Good (thermally stable)</td>
              <td>Medium (Li)</td>
              <td>Mature (TRL 9)</td>
              <td>Approaching $80/kWh at pack level</td>
            </tr>
            <tr>
              <td>Sodium‑ion</td>
              <td>100–160</td>
              <td>2,000–5,000</td>
              <td>Good</td>
              <td>Very Low (Na)</td>
              <td>Early commercial (TRL 7–8)</td>
              <td>Cost‑advantaged vs. LFP at scale</td>
            </tr>
            <tr>
              <td>Li‑metal Solid‑State</td>
              <td>400–500 (target)</td>
              <td>Not validated</td>
              <td>Potentially Excellent</td>
              <td>High (Li, specialty materials)</td>
              <td>Pilot (TRL 5–6)</td>
              <td>Initially premium; parity unproven</td>
            </tr>
            <tr>
              <td><strong>Proposed Na‑S Solid‑State</strong></td>
              <td><strong>200–450 (phased)</strong></td>
              <td><strong>1,500–3,000 (target)</strong></td>
              <td><strong>Excellent (solid‑state)</strong></td>
              <td><strong>Very Low (Na, S)</strong></td>
              <td><strong>TRL 2</strong></td>
              <td><strong>Targeting LFP parity at scale</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>3.4 Identified Technology White Space</h3>
      <ul class="bullet-list">
        <li>No existing commercial or near‑commercial battery technology simultaneously offers:
          <ul class="sub-list">
            <li>High energy density enabling long‑range EVs, aerospace, and defence mobility.</li>
            <li>Inherent, electrolyte‑level safety via solid‑state architecture.</li>
            <li>Complete independence from lithium, cobalt, and nickel supply chains.</li>
          </ul>
        </li>
        <li>Incumbents force a choice between performance, safety, and material security.</li>
        <li>The proposed platform conceptually targets this white space: if validated and scaled, it could serve applications where safety and supply chain resilience are valued as highly as incremental performance gains.</li>
      </ul>
    </section>
  `;

  // Inject styles once
  if (!document.getElementById('report-section-style')) {
    const style = document.createElement('style');
    style.id = 'report-section-style';
    style.textContent = `
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
      .tech-block {
        margin-bottom: 20px;
      }
      .tech-block h4 {
        font-size: 0.95rem;
        font-weight: 600;
        margin: 0 0 6px;
        color: var(--accent-dark);
      }
      #report-section3 h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 20px 0 8px;
        color: #1a1a1a;
      }
      #report-section3 h2 {
        margin-bottom: 20px;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section3 = load_section3;
function load_section2(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section2">
      <h2>2. Industry Background</h2>
      <p class="section-intro">
        The global energy storage sector is undergoing a fundamental restructuring, driven by the electrification
        of transport, the rapid build‑out of renewable energy, and new demands from data centres, aerospace, and
        defence. These forces are collectively pushing battery demand to unprecedented levels while exposing the
        structural weaknesses of the dominant lithium‑ion supply chain.
      </p>

      <h3>2.1 The EV‑Driven Demand Surge</h3>
      <ul class="bullet-list">
        <li>Global EV sales surpassed 13 million units in 2023; projected to reach 40–45 million units annually by 2030 (IEA, BNEF).</li>
        <li>Annual battery production capacity requirement from EVs alone: ~3,500 GWh by 2030 (4× current levels).</li>
        <li>Demand spans light‑duty passenger vehicles, commercial trucks, buses, and 2/3‑wheelers — each with distinct duty cycles and safety needs.</li>
      </ul>

      <h3>2.2 The Grid‑Scale Storage Build‑Out</h3>
      <ul class="bullet-list">
        <li>Stationary energy storage installations: ~60 GWh in 2023, forecast to exceed 600 GWh by 2035 (BNEF, McKinsey).</li>
        <li>Key drivers: integration of intermittent renewables, grid stability, and new 24/7 reliability demands from data centres / AI compute.</li>
        <li>Performance priorities for stationary storage: calendar life, idle loss, fire safety, and total cost of ownership.</li>
      </ul>

      <h3>2.3 Persistent Structural Limitations of Lithium‑Ion</h3>
      <ul class="bullet-list">
        <li><strong>Critical mineral concentration:</strong> >70% of lithium processing concentrated in China; cobalt heavily dependent on DRC.</li>
        <li><strong>Price volatility:</strong> Lithium carbonate prices swung from ~$6,000/ton to >$80,000/ton in a two‑year window.</li>
        <li><strong>Safety incidents:</strong> Organic liquid electrolytes remain the primary root cause of thermal runaway and battery fires.</li>
        <li><strong>ESG scrutiny:</strong> Hard‑rock mining and water‑intensive brine extraction face increasing regulatory and social pushback.</li>
        <li>These factors create a strategic imperative for alternative chemistries that decouple from scarce, geographically concentrated materials and flammable components.</li>
      </ul>

      <h3>2.4 The India‑Specific Opportunity</h3>
      <ul class="bullet-list">
        <li>India's battery demand projected to cross 150 GWh annually by 2030 (EVs + grid + industrial).</li>
        <li>Currently, nearly all lithium‑ion cells are imported — annual import bill could reach $10–15 billion by decade's end.</li>
        <li>Government schemes: PLI‑ACC (INR 18,100 Cr), Make in India, Atmanirbhar Bharat explicitly incentivise alternative, import‑independent cell manufacturing.</li>
        <li>A sodium‑based solid‑state platform, using domestically abundant raw materials, aligns directly with India's energy security and localisation goals.</li>
      </ul>

      <h3>2.5 Market Growth Snapshot</h3>
      <div class="section2-table-scroll">
        <table class="section2-table">
          <thead>
            <tr><th>Segment</th><th>2023 (Est.)</th><th>2030 (Projected)</th><th>2035 (Projected)</th><th>Approx. CAGR</th></tr>
          </thead>
          <tbody>
            <tr><td>Electric Vehicles</td><td>700 GWh</td><td>3,500 GWh</td><td>5,500 GWh</td><td>~20%</td></tr>
            <tr><td>Grid & Industrial Storage</td><td>60 GWh</td><td>400 GWh</td><td>800 GWh</td><td>~25%</td></tr>
            <tr><td>Aerospace, Defense & Specialty</td><td>5 GWh</td><td>30 GWh</td><td>60 GWh</td><td>~25%</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>765 GWh</strong></td><td><strong>3,930 GWh</strong></td><td><strong>6,360 GWh</strong></td><td><strong>~21%</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px;">
        Source: Aggregated from IEA, BNEF, McKinsey Battery Insights; conservative estimates.
      </p>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:12px;">
        Even a modest technology penetration in high‑safety, high‑energy niche applications translates into a commercially meaningful opportunity.
      </p>
    </section>
  `;

  // Inject consistent styles (once) – with scrollable table
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
      /* Scrollable table for mobile */
      .section2-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .section2-table {
        min-width: 650px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .section2-table th {
        background: #0d1117;
        color: #e0e0e0;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        white-space: nowrap;
      }
      .section2-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }
      .section2-table tr:last-child td {
        border-bottom: none;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section2 = load_section2;
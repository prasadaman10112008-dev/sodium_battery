function load_section10(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section10">
      <h2>10. India Opportunity</h2>
      <p class="section-intro">
        India’s battery demand is set to explode, driven by the country’s EV ambitions, grid modernisation, and industrial digitisation. Currently, >90% of lithium‑ion cells are imported, creating a strategic vulnerability. A sodium‑based solid‑state platform built in India can directly address this dependency while aligning with flagship government programmes. All projections are based on public reports (NITI Aayog, IESA, BNEF). Our platform is TRL 2 and has no commercial product yet; the opportunity below is a market landscape, not a guarantee of capture.
      </p>

      <h3>10.1 India Battery Demand Trajectory</h3>
      <div class="chart-container">
        <canvas id="indiaDemandChart" width="600" height="300"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:4px;">
          Source: IESA, NITI Aayog, CEEW estimates. Figures in GWh annual demand.
        </p>
      </div>

      <h3>10.2 Import Dependency Snapshot</h3>
      <ul class="bullet-list">
        <li>Current annual lithium‑ion cell import bill: <strong>$2–3 billion</strong>; could exceed <strong>$10–15 billion by 2030</strong> without domestic manufacturing (IESA).</li>
        <li>India has no commercial‑scale lithium reserves; nearly all processed lithium, cobalt, and nickel are imported.</li>
        <li>This exposes India’s entire EV and renewable energy roadmap to supply disruptions and price volatility.</li>
      </ul>

      <h3>10.3 Government Policy Alignment</h3>
      <ul class="bullet-list">
        <li><strong>PLI‑ACC Scheme:</strong> INR 18,100 Cr ($2.2 B) allocated to set up 50 GWh of advanced chemistry cell manufacturing in India.</li>
        <li><strong>Atmanirbhar Bharat & Make in India:</strong> Explicit mandates to reduce import dependence across critical sectors, including energy storage.</li>
        <li><strong>Battery Waste Management Rules (2022):</strong> Extended Producer Responsibility framework that favours simpler, recyclable chemistries.</li>
        <li><strong>National Programme on ACC Battery Storage:</strong> Targets large‑scale grid‑connected storage manufacturing within the country.</li>
      </ul>

      <h3>10.4 Raw Material Localisation Potential</h3>
      <ul class="bullet-list">
        <li><strong>Sodium:</strong> Vast salt production in Gujarat, Rajasthan, Tamil Nadu; globally the 6th most abundant element.</li>
        <li><strong>Sulfur:</strong> Domestic by‑product from petroleum refining; India is a significant producer.</li>
        <li>Neither material requires complex geopolitically sensitive extraction. Local sourcing reduces freight, forex risk, and supply‑chain vulnerability.</li>
      </ul>

      <h3>10.5 Potential Early Adopter Segments in India</h3>
      <ul class="bullet-list">
        <li><strong>Defence & Strategic:</strong> DRDO, Indian Army, Navy need safe, lightweight, supply‑independent batteries for soldier systems, UAVs, and naval platforms. Willing to pay premium for indigenous, secure technology.</li>
        <li><strong>State Transport Undertakings (STUs):</strong> Large bus fleet operators prioritising fire safety; government mandates can accelerate adoption of indigenous chemistries.</li>
        <li><strong>Data Centres & Telecom Towers:</strong> Fire risk is catastrophic; insurance and regulatory pressures favour solid‑state.</li>
        <li><strong>Renewable Energy Parks (SECI, NTPC):</strong> Large‑scale storage tenders increasingly emphasise safety and supply chain resilience alongside cost.</li>
        <li><strong>Indian Railways:</strong> Electrification and on‑board energy storage for safety‑critical applications.</li>
      </ul>

      <h3>10.6 India Market Sizing Recap (2035 Projection)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Parameter</th><th>Estimate</th></tr>
          </thead>
          <tbody>
            <tr><td>India Total Battery Demand (2035)</td><td>~800–900 GWh</td></tr>
            <tr><td>Addressable SAM (Safety + Strategic Segments)</td><td>~20% → 160–180 GWh</td></tr>
            <tr><td>Conservative SOM (5–7% of India SAM)</td><td>8–13 GWh</td></tr>
            <tr><td>Revenue Potential (at $90/kWh)</td><td>$720 M – $1.2 B</td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:12px;">
        All market numbers are aspirational and depend on successful technology validation and commercialisation. No revenue is guaranteed at this stage (TRL 2).
      </p>
    </section>
  `;

  // Render India demand bar chart
  const canvas = document.getElementById('indiaDemandChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2023', '2025', '2030', '2035'],
        datasets: [{
          label: 'India Battery Demand (GWh)',
          data: [15, 50, 200, 850],
          backgroundColor: [
            '#d4a843',
            '#b8860b',
            '#8b6508',
            '#5a3e06'
          ],
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'India Advanced Battery Demand Forecast (GWh)',
            font: { size: 14, weight: '600' }
          },
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'GWh' }
          }
        }
      }
    });
  }

  // Ensure report styles exist
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
      .chart-container {
        max-width: 650px;
        margin: 0 auto 30px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section10 = load_section10;
function load_section17(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section17">
      <h2>16. National Impact & Energy Independence</h2>
      <p class="section-intro">
        <em>Scenario‑Based Projection</em> — This section illustrates the <strong>potential</strong> macro‑level benefits if the solid‑state sodium‑sulfur battery achieves commercial production by 2032‑35 and captures a moderate share of India’s EV and stationary storage demand. All figures are illustrative, based on public data (IEA, NITI Aayog, MoPNG), and depend entirely on successful technology validation, scaling, and supportive policies.
      </p>

      <h3>17.1 How Oil Imports Could Be Reduced (2035 Outlook)</h3>
      <div class="chart-container" style="max-width:600px; margin:0 auto 30px;">
        <canvas id="oilImportChart" style="display:block; width:100%; height:auto;"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          India's crude oil import bill: actual 2024 vs. projected 2035 business‑as‑usual vs. a scenario with widespread EV adoption powered by indigenous sodium batteries.
        </p>
      </div>

      <h3>17.2 Pathway to Reduced Petrol/Diesel Demand</h3>
      <ul class="bullet-list">
        <li>Transport consumes ~60% of India’s crude oil (~$84 billion in 2024).</li>
        <li>If 50% of new vehicle sales in 2035 are electric and a significant portion use domestic sodium batteries, gasoline/diesel demand <strong>could</strong> fall by 30‑40%.</li>
        <li>Stationary storage replacing diesel generators would further reduce diesel imports.</li>
      </ul>

      <h3>17.3 Phased Benefits (Illustrative Timeline)</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Phase</th><th>Period</th><th>Potential Benefit</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Proof‑of‑Concept</strong></td><td>2025‑2027</td><td>Investor confidence, government grants, IP filed</td></tr>
            <tr><td><strong>Pilot & Niche Market</strong></td><td>2027‑2030</td><td>First revenue from defence/data centres; manufacturing ecosystem seeds planted</td></tr>
            <tr><td><strong>Early Mass Adoption</strong></td><td>2030‑2033</td><td>EV OEM tie‑ups; GWh‑scale factory; oil import bill starts to visibly dip</td></tr>
            <tr><td><strong>Full Market Penetration</strong></td><td>2033‑2035</td><td>Potential $30‑50 billion annual forex savings, cleaner cities, energy independence</td></tr>
          </tbody>
        </table>
      </div>

      <h3>17.4 Possible India‑Wide Benefits (If Validated & Scaled)</h3>
      <ul class="bullet-list">
        <li><strong>Energy Sovereignty:</strong> Reduced dependence on crude oil imports; local sodium‑sulfur supply chain.</li>
        <li><strong>Forex Savings:</strong> Up to $30‑50 billion/year that could be reinvested into health, education, and infrastructure.</li>
        <li><strong>Environmental:</strong> Significant cut in vehicular emissions; improved urban air quality.</li>
        <li><strong>Grid Stability:</strong> Battery storage enables 24/7 renewable integration, reducing coal reliance.</li>
        <li><strong>Jobs & Exports:</strong> GWh‑scale manufacturing could create millions of jobs; India may become a battery exporter for the Global South.</li>
        <li><strong>Defence Independence:</strong> Indigenous batteries for military vehicles, drones, and submarines.</li>
      </ul>

      <div class="highlight-box" style="margin-top:24px;">
        <p><strong>Important:</strong> This is a <strong>scenario‑based projection</strong>. All benefits depend on successful lab validation, pilot production, cost parity, and adoption by automakers and grid operators. The platform is currently at <strong>TRL‑2</strong>; the first prototype is expected in 18‑24 months.</p>
      </div>
    </section>
  `;
  
  // Chart with scenario label
  const canvas = document.getElementById('oilImportChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2024 (Actual)', '2035 BAU*', '2035 Na‑S Scenario'],
        datasets: [{
          label: 'Crude Oil Import Bill ($ Billion)',
          data: [140, 170, 120],
          backgroundColor: ['#6c757d', '#dc2626', '#10b981'],
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          title: { display: true, text: 'India Crude Oil Import Bill: Potential Reduction (Scenario)' },
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: '$ Billion' } }
        }
      }
    });
  }
  
  // Ensure basic styles
  if (!document.getElementById('report-section-style')) {
    const style = document.createElement('style');
    style.id = 'report-section-style';
    style.textContent = `
      .section-intro { font-size:0.95rem; color:#444; margin-bottom:24px; line-height:1.6; }
      .bullet-list { list-style:none; padding:0; margin-bottom:16px; }
      .bullet-list li { padding:5px 0 5px 18px; position:relative; font-size:0.9rem; color:#333; line-height:1.5; }
      .bullet-list li::before { content:''; position:absolute; left:0; top:10px; width:6px; height:6px; background:var(--accent); border-radius:50%; }
      .chart-container { max-width:600px; margin:0 auto 30px; background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.03); }
      .highlight-box { background:#fdf8f0; border-left:4px solid var(--accent); padding:16px 20px; border-radius:0 12px 12px 0; margin:16px 0; font-size:0.9rem; color:#5a4620; }
    `;
    document.head.appendChild(style);
  }
}
window.load_section17 = load_section17;
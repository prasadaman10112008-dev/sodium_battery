function load_section13(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section13">
      <h2>13. Risk Analysis</h2>
      <p class="section-intro">
        Every deep‑tech platform carries uncertainties. Identifying and mitigating them early is essential. 
        The analysis below is structured across the most critical risk categories — from technical to market — 
        and is based on the current TRL 2 status. All assessments are qualitative and will be updated as 
        experimental data becomes available.
      </p>

      <h3>13.1 Risk Matrix Overview</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Risk Category</th><th>Specific Risk</th><th>Probability</th><th>Impact</th><th>Mitigation Strategy</th></tr>
          </thead>
          <tbody>
            <tr><td>Technical</td><td>Electrolyte fails to achieve target ionic conductivity at room temperature</td><td>Medium</td><td>Very High</td><td>Parallel electrolyte sub‑chemistries; academic partnerships; clear go/no‑go gates</td></tr>
            <tr><td>Technical</td><td>Energy density progression stalls below 250 Wh/kg</td><td>Medium</td><td>High</td><td>Iterative cell architecture optimisation; composite cathodes</td></tr>
            <tr><td>Scale‑Up</td><td>Performance degrades when moving from coin‑cell to pouch‑cell</td><td>High</td><td>Very High</td><td>Early pilot‑scale trials; in‑situ metrology; experienced process engineers</td></tr>
            <tr><td>Scale‑Up</td><td>Manufacturing yield remains uneconomically low (&lt;70%)</td><td>Medium</td><td>High</td><td>Incremental scaling; rigorous SPC; hire battery production experts</td></tr>
            <tr><td>Certification</td><td>Automotive / aerospace certifications take 2‑3+ years</td><td>High</td><td>High</td><td>Pre‑certification engagement; dedicated regulatory team</td></tr>
            <tr><td>Funding</td><td>Capital‑intensive development with limited Indian deep‑tech VC appetite</td><td>High</td><td>Very High</td><td>Non‑dilutive government grants; international climate‑tech funds; milestone‑based equity rounds</td></tr>
            <tr><td>Competition</td><td>Incumbents improve cost/safety, narrowing white space</td><td>High</td><td>Medium</td><td>Focus on lithium‑free and material sovereignty; avoid competing on $/kWh only</td></tr>
            <tr><td>Competition</td><td>A competitor commercialises sodium solid‑state first</td><td>Medium</td><td>High</td><td>Accelerate IP filings; secure lighthouse customers early</td></tr>
            <tr><td>Market Adoption</td><td>OEMs demand 5‑10 years of field data before qualifying new chemistry</td><td>High</td><td>Medium</td><td>Enter via non‑automotive, safety‑critical niches first</td></tr>
            <tr><td>Raw Material</td><td>Battery‑grade Na/S processing proves costlier than expected</td><td>Low‑Medium</td><td>Medium</td><td>Multiple supplier relationships; in‑house purification process development</td></tr>
            <tr><td>Talent</td><td>Limited domestic pool of solid‑state battery engineers</td><td>Medium</td><td>Medium</td><td>Partner with IITs/IISc; ESOP incentives; selective international hiring</td></tr>
          </tbody>
        </table>
      </div>

      <h3>13.2 Risk Severity Chart (Probability × Impact)</h3>
      <div class="chart-container">
        <canvas id="riskChart" width="600" height="400"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          Scored: Probability (Low=1, Medium=2, High=3) × Impact (Medium=2, High=3, Very High=4). Higher bar = greater overall risk.
        </p>
      </div>

      <h3>13.3 Risk Management Philosophy</h3>
      <ul class="bullet-list">
        <li>Focus resources on derisking "bet‑the‑company" technical and scale‑up uncertainties first.</li>
        <li>Maintain a lean, milestone‑driven approach with clear go/no‑go points at each TRL gate.</li>
        <li>Treat the risk matrix as a living document, updated quarterly as validation data accumulates.</li>
      </ul>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        This analysis reflects the venture's current TRL 2 stage. Many risks will reduce with experimental validation and pilot data.
      </p>
    </section>
  `;

  // Render risk severity bar chart
  const canvas = document.getElementById('riskChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Electrolyte Conductivity',
          'Energy Density Stalling',
          'Scale‑Up Loss',
          'Yield &lt;70%',
          'Certification Delays',
          'Funding Gap',
          'Incumbent Improvement',
          'Competitor First',
          'Market Adoption Lag',
          'Raw Material Cost',
          'Talent Shortage'
        ],
        datasets: [{
          label: 'Risk Severity (Probability × Impact)',
          data: [
            2*4,  // Medium * Very High = 8
            2*3,  // Medium * High = 6
            3*4,  // High * Very High = 12
            2*3,  // Medium * High = 6
            3*3,  // High * High = 9
            3*4,  // High * Very High = 12
            3*2,  // High * Medium = 6
            2*3,  // Medium * High = 6
            3*2,  // High * Medium = 6
            1.5*2, // Low-Medium * Medium ≈ 3
            2*2   // Medium * Medium = 4
          ],
          backgroundColor: [
            '#b8860b', '#b8860b', '#dc2626', '#b8860b', '#dc2626',
            '#dc2626', '#8b6508', '#b8860b', '#8b6508', '#d4a843', '#8b6508'
          ],
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Risk Severity by Category (Higher is riskier)',
            font: { size: 14, weight: '600' }
          },
          legend: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true,
            title: { display: true, text: 'Score (1‑12)' }
          }
        }
      }
    });
  }

  // Ensure shared styles exist
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
        max-width: 700px;
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

window.load_section13 = load_section13;
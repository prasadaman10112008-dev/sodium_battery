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
      <div class="section13-table-scroll">
        <table class="section13-table">
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
      <div class="section13-chart-wrap">
        <canvas id="riskChart" style="display: block; width: 100%; height: 100%;"></canvas>
      </div>
      <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:8px;">
        Scored: Probability (Low=1, Medium=2, High=3) × Impact (Medium=2, High=3, Very High=4). Higher bar = greater overall risk.
      </p>

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

  // Render risk severity bar chart – stable height, no auto‑stretch
  const canvas = document.getElementById('riskChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Electrolyte\nConductivity',
          'Energy Density\nStalling',
          'Scale‑Up\nLoss',
          'Yield <70%',
          'Certification\nDelays',
          'Funding\nGap',
          'Incumbent\nImprovement',
          'Competitor\nFirst',
          'Market\nAdoption Lag',
          'Raw Material\nCost',
          'Talent\nShortage'
        ],
        datasets: [{
          label: 'Risk Severity (Probability × Impact)',
          data: [8, 6, 12, 6, 9, 12, 6, 6, 6, 3, 4],
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
        maintainAspectRatio: false,   // fills the fixed container height
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
            max: 12,
            title: { display: true, text: 'Score (1‑12)' }
          },
          y: {
            ticks: { font: { size: 10 }, autoSkip: false },
            grid: { drawBorder: false }
          }
        },
        layout: { padding: { left: 5, right: 5 } }
      }
    });
  }

  // Inject dedicated styles (unique ID to avoid conflicts)
  if (!document.getElementById('section13-style')) {
    const style = document.createElement('style');
    style.id = 'section13-style';
    style.textContent = `
      .section-intro {
        font-size: 0.95rem; color: #444; margin-bottom: 24px; line-height: 1.6;
      }
      .bullet-list {
        list-style: none; padding: 0; margin-bottom: 16px;
      }
      .bullet-list li {
        padding: 5px 0 5px 18px; position: relative;
        font-size: 0.9rem; color: #333; line-height: 1.5;
      }
      .bullet-list li::before {
        content: ''; position: absolute; left: 0; top: 10px;
        width: 6px; height: 6px; background: var(--accent); border-radius: 50%;
      }

      /* Scrollable risk matrix table */
      .section13-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .section13-table {
        min-width: 750px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .section13-table th {
        background: #0d1117;
        color: #e0e0e0;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        white-space: nowrap;
        border: 1px solid var(--border);
      }
      .section13-table td {
        padding: 10px 12px;
        border: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }

      /* Fixed‑height chart wrapper – prevents stretching and overlap */
      .section13-chart-wrap {
        position: relative;
        width: 100%;
        max-width: 700px;
        margin: 0 auto 20px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        height: 480px;
      }
      @media (max-width: 600px) {
        .section13-chart-wrap {
          height: 420px;
          padding: 14px 10px;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section13 = load_section13;
function load_section15(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section15">
      <h2>15. Future Outlook</h2>
      <p class="section-intro">
        The global energy storage sector is entering a period of chemistry diversification and application expansion. No single battery technology will dominate all use‑cases. The following macro‑level transitions will shape demand for advanced batteries over the next two decades — and define the strategic relevance of the proposed platform. All outlooks are based on current trends and public forecasts; the platform is at TRL 2 and has not yet been validated.
      </p>

      <h3>15.1 Deepening Electrification of Transport</h3>
      <ul class="bullet-list">
        <li>Global EV fleet projected to exceed 300 million units by 2035; two/three‑wheelers, buses, and heavy trucks will join passenger cars in volume.</li>
        <li>Price‑sensitive, safety‑conscious markets (India, Southeast Asia, Africa, Latin America) will seek lithium‑independent solutions to avoid import volatility.</li>
        <li>Safety regulations for EV batteries will tighten post high‑profile thermal incidents, favouring inherently safe solid‑state designs.</li>
        <li>Long‑haul trucking and commercial fleets will demand higher energy density and faster charging — both part of the platform's long‑term target envelope.</li>
      </ul>

      <h3>15.2 AI & Data Centre Energy Demand Surge</h3>
      <ul class="bullet-list">
        <li>AI compute and hyperscale data centres are expected to double their power consumption by 2030, creating massive demand for reliable, fire‑safe backup storage.</li>
        <li>Battery fires in data centres cause billion‑dollar outages; operators will pay a premium for solid‑state safety and reduced thermal management complexity.</li>
        <li>Space‑constrained urban data centres value high volumetric energy density (650–700 Wh/L target) and minimal fire suppression infrastructure.</li>
        <li>24/7 carbon‑free energy mandates will drive pairing of backup storage with on‑site renewables, favouring long‑calendar‑life, low‑self‑discharge systems.</li>
      </ul>

      <h3>15.3 Aviation & Advanced Air Mobility Electrification</h3>
      <ul class="bullet-list">
        <li>Electric Vertical Take‑Off and Landing (eVTOL) aircraft and drones are progressing toward commercial certification (FAA, EASA, DGCA).</li>
        <li>Power density and absolute safety are non‑negotiable for passenger‑carrying air vehicles — a direct match with the platform's intended attributes.</li>
        <li>Regional electric aircraft for 50–100 seat segments will require energy densities exceeding 400 Wh/kg, well‑aligned with the long‑term industrial target.</li>
        <li>Defence UAVs and high‑altitude pseudo‑satellites demand long endurance, low self‑discharge, and supply chain independence.</li>
      </ul>

      <h3>15.4 Grid Decentralisation & Long‑Duration Storage</h3>
      <ul class="bullet-list">
        <li>Global renewable capacity is set to triple by 2030, increasing the need for storage that can firm variable generation over 4–24 hours.</li>
        <li>Microgrids and community energy systems will proliferate in developing nations and remote regions, valuing batteries that are safe, locally sourcable, and easy to recycle.</li>
        <li>Sodium‑based systems, with abundant raw materials, are well‑positioned for the multi‑terawatt‑hour scale that deep decarbonisation demands — lithium alone may be insufficient or too geopolitically constrained.</li>
        <li>Regulatory push for non‑flammable urban battery installations (building codes, fire norms) will direct stationary storage procurement toward solid‑state options.</li>
      </ul>

      <h3>15.5 Geopolitical Reshaping of Battery Supply Chains</h3>
      <ul class="bullet-list">
        <li>US Inflation Reduction Act, EU Critical Raw Materials Act, and India's PLI schemes are explicitly de‑risking away from concentrated lithium/cobalt supply chains.</li>
        <li>Nations are designating batteries as strategic assets; domestic production of lithium‑free chemistries offers sovereign energy security.</li>
        <li>Supply chain localisation trends will favour platforms that can use locally abundant materials (sodium, sulfur) and be manufactured in‑country without complex imported precursors.</li>
        <li>The proposed platform, if developed in India, could become a strategic asset for India's energy diplomacy — exporting cells to other Global South nations seeking lithium‑free alternatives.</li>
      </ul>

      <h3>15.6 Macro Trends & Platform Relevance (Chart)</h3>
      <div class="section15-chart-wrap">
        <canvas id="macroRelevanceChart" style="display: block; width: 100%; height: 100%;"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          Qualitative scores based on how strongly each macro trend aligns with the platform's projected capabilities (TRL 2). All scores are indicative.
        </p>
      </div>

      <h3>15.7 Summary: Trends & Platform Relevance</h3>
      <div class="section15-table-scroll">
        <table class="section15-table">
          <thead>
            <tr><th>Macro Trend</th><th>Key Requirement</th><th>Platform Relevance (If Validated)</th></tr>
          </thead>
          <tbody>
            <tr><td>Mass EV adoption in price‑sensitive markets</td><td>Cost, safety, lithium‑free supply chain</td><td>High — early‑phase energy density competitive; material cost structurally low</td></tr>
            <tr><td>AI / data centre power demand</td><td>Fire safety, high volumetric density, long life</td><td>Very High — solid‑state safety; compact cell architecture</td></tr>
            <tr><td>eVTOL & aviation electrification</td><td>Extreme power density, zero thermal risk, energy density</td><td>Very High — target 450‑700 W/kg; 400+ Wh/kg; intrinsic safety</td></tr>
            <tr><td>Grid decentralisation & microgrids</td><td>Local materials, safety, long life, recyclability</td><td>High — sodium/sulfur abundant; simpler recycling</td></tr>
            <tr><td>Supply chain de‑risking & localisation</td><td>Freedom from Li/Co/Ni; domestic manufacturability</td><td>Very High — platform's core material independence</td></tr>
          </tbody>
        </table>
      </div>

      <div class="highlight-box" style="margin-top: 24px;">
        <p><strong>Important:</strong> All value is contingent on successful technical validation and scale‑up. The future outlook is an opportunity landscape, not a guarantee. At TRL 2, the platform has not yet demonstrated any of the performance attributes required to capture these opportunities.</p>
      </div>
    </section>
  `;

  // Render chart – stable, no auto‑stretch
  const canvas = document.getElementById('macroRelevanceChart');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Supply Chain\nLocalisation',
          'AI / Data\nCentre Demand',
          'eVTOL /\nAviation',
          'Grid\nDecentralisation',
          'Mass EV\nAdoption',
        ],
        datasets: [{
          label: 'Platform Relevance (if validated)',
          data: [95, 90, 88, 85, 80],
          backgroundColor: ['#b8860b', '#8b6508', '#8b6508', '#d4a843', '#d4a843'],
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Macro Trend Alignment with Platform Capabilities (Score out of 100)',
            font: { size: 14, weight: '600' },
            padding: 16
          },
          legend: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            title: { display: true, text: 'Alignment Score' }
          },
          y: {
            ticks: { font: { size: 11 }, autoSkip: false },
            grid: { drawBorder: false }
          }
        },
        layout: { padding: { left: 5, right: 5 } }
      }
    });
  }

  // ───── Inject section‑specific styles (unique ID) ─────
  if (!document.getElementById('section15-style')) {
    const style = document.createElement('style');
    style.id = 'section15-style';
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

      /* Fixed‑height chart container – no auto‑scroll causing stretch */
      .section15-chart-wrap {
        position: relative;
        width: 100%;
        max-width: 650px;
        margin: 0 auto 30px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        height: 380px;
      }
      @media (max-width: 600px) {
        .section15-chart-wrap {
          height: 320px;
          padding: 14px 10px;
        }
      }

      /* Summary table – swipeable on mobile */
      .section15-table-scroll {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .section15-table {
        min-width: 650px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .section15-table th {
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
      .section15-table td {
        padding: 10px 12px;
        border: 1px solid var(--border, #dee2e6);
        vertical-align: top;
      }
      .highlight-box {
        background: #fdf8f0;
        border-left: 4px solid var(--accent);
        padding: 16px 20px;
        border-radius: 0 12px 12px 0;
        margin: 16px 0;
        font-size: 0.9rem;
        color: #5a4620;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section15 = load_section15;
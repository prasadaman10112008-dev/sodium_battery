function load_section9(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section9">
      <h2>9. Competitor Analysis (Expanded Global Landscape)</h2>
      <p class="section-intro">
        The advanced battery sector is intensely competitive. Incumbents defend scale, while well‑funded disruptors pursue technology leaps. Below is a broad scan of 20+ global players. All data is from public sources (2024‑2025). Our platform scores are projected (TRL 2).
      </p>

      <h3>9.1 Comparative Performance Chart (Key Players)</h3>
      <div class="radar-chart-wrap" style="position: relative; width: 100%; max-width: 900px; margin: 0 auto 30px; background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 28px 20px 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); height: 600px; overflow-x: auto; -webkit-overflow-scrolling: touch;">
        <canvas id="competitorRadarChart" style="display: block; width: 100%; height: 100%;"></canvas>
        <p style="text-align:center; font-size:0.75rem; color:var(--text-muted); margin-top:6px;">
          Scores out of 100. Our Platform & WeLion: projected/lab targets. Others: commercial or pilot (2024‑2025 data). Based on public information.
        </p>
      </div>

      <h3>9.2 Global Competitive Landscape Table (20+ Players)</h3>
      <div class="table-scroll-wrap">
        ${generateCompetitorTable()}
      </div>

      <h3>9.3 Strategic Group Map (Conceptual)</h3>
      <ul class="bullet-list">
        <li><strong>Scale Incumbents (Li‑ion):</strong> CATL, BYD, CALB, Gotion, EVE, SVOLT, Northvolt — dominate cost and manufacturing, but locked in lithium‑ion safety/material trade‑offs.</li>
        <li><strong>Lithium Solid‑State Aspirants:</strong> QuantumScape, Solid Power, SES, Factorial Energy, Blue Solutions — push energy and safety frontiers, but retain lithium dependency and face manufacturing hurdles.</li>
        <li><strong>Silicon‑Anode / Fast‑Charge Specialists:</strong> Amprius, Enovix, StoreDot — niche high‑energy or ultra‑fast charge, but premium cost and cycle life questions.</li>
        <li><strong>Sodium‑ion / Material Abundance Players:</strong> CATL Na‑ion, Natron Energy, Altris, Faradion (Reliance) — leverage sodium abundance, but sacrifice energy density, limiting mobility potential.</li>
        <li><strong>Sodium‑Sulfur (High‑Temp):</strong> NGK Insulators — proven, but high‑temperature operation restricts applications.</li>
      </ul>

      <h3>9.4 Competitive Positioning of Proposed Platform vs. Key Categories</h3>
      <div class="table-scroll-wrap">
        <table>
          <thead>
            <tr><th>Attribute</th><th>vs. Li‑ion Incumbents</th><th>vs. Li Solid‑State</th><th>vs. Na‑ion</th><th>vs. Na‑S High‑Temp</th></tr>
          </thead>
          <tbody>
            <tr><td>Energy Density Potential</td><td>Advantage long‑term (400+ vs 280)</td><td>Comparable (both 400‑500 target)</td><td>Significant advantage (200‑450 vs 100‑160)</td><td>Advantage (room‑temp vs high‑temp; higher ceiling)</td></tr>
            <tr><td>Safety (Thermal Runaway)</td><td>Superior (solid‑state vs liquid)</td><td>Similar (both solid‑state)</td><td>Superior (solid‑state vs liquid/aqueous)</td><td>Similar (sulfur inherent) but room‑temp advantage</td></tr>
            <tr><td>Raw Material Risk</td><td>Major advantage (no Li/Co/Ni)</td><td>Major advantage (no Li/Co/Ni)</td><td>Similar (both sodium‑based)</td><td>Similar (both sodium‑sulfur)</td></tr>
            <tr><td>Manufacturing Maturity</td><td>Severe disadvantage (TRL 2 vs 9)</td><td>Disadvantage (TRL 2 vs 5‑6)</td><td>Disadvantage (TRL 2 vs 6‑8)</td><td>Severe disadvantage (TRL 2 vs 9)</td></tr>
            <tr><td>Cost Potential at Scale</td><td>Potentially competitive (abundant Na/S)</td><td>Likely lower raw mat cost, processing TBD</td><td>Similar (both sodium)</td><td>Potentially much lower (no high‑temp operation)</td></tr>
            <tr><td>Time to Market</td><td>6‑8+ years behind</td><td>4‑6 years behind</td><td>4‑6 years behind</td><td>Mature competitor in stationary, but not mobile</td></tr>
          </tbody>
        </table>
      </div>

      <h3>9.5 Key Takeaways</h3>
      <ul class="bullet-list">
        <li>The competitive field is crowded and well‑funded; no single player dominates all dimensions simultaneously.</li>
        <li>The proposed platform's "white space" — <strong>room‑temperature sodium solid‑state with high energy density</strong> — remains unoccupied in commercial form.</li>
        <li>The primary challenge is not product superiority but <strong>time to market and manufacturing development</strong>.</li>
        <li>Strategic partnerships with OEMs or industrial players in the early pilot phase can accelerate validation and narrow the maturity gap.</li>
        <li>Given TRL 2, the realistic path is to focus initially on niche applications (defence, aerospace, critical backup) where safety and supply chain security command a premium.</li>
      </ul>
    </section>
  `;

  // ─────────────── Render STABLE radar chart ───────────────
  const radarCanvas = document.getElementById('competitorRadarChart');
  if (radarCanvas) {
    const ctx = radarCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Energy Density', 'Safety', 'Material Independence', 'Scalability', 'Supply Chain Resilience', 'Recyclability'],
        datasets: [
          {
            label: 'Our Platform (Projected)',
            data: [55, 90, 100, 10, 100, 45],
            backgroundColor: 'rgba(184, 134, 11, 0.25)',
            borderColor: '#b8860b',
            borderWidth: 3,
            pointBackgroundColor: '#b8860b',
            pointRadius: 6,
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          },
          {
            label: 'CATL (Li‑ion/NMC)',
            data: [80, 40, 20, 95, 20, 30],
            backgroundColor: 'rgba(107, 114, 128, 0.1)',
            borderColor: '#6b7280',
            borderWidth: 2,
            pointBackgroundColor: '#6b7280',
            pointRadius: 4
          },
          {
            label: 'BYD (LFP)',
            data: [45, 70, 40, 90, 40, 50],
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            borderColor: '#10b981',
            borderWidth: 2,
            pointBackgroundColor: '#10b981',
            pointRadius: 4
          },
          {
            label: 'QuantumScape (Li Solid-State)',
            data: [80, 90, 15, 30, 15, 30],
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderColor: '#8b5cf6',
            borderWidth: 2,
            pointBackgroundColor: '#8b5cf6',
            pointRadius: 4
          },
          {
            label: 'CATL (Na-ion)',
            data: [25, 65, 90, 70, 80, 70],
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderColor: '#3b82f6',
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6',
            pointRadius: 4
          },
          {
            label: 'WeLion (Li Solid-State, 824 Wh/kg)',
            data: [98, 90, 15, 35, 15, 25],
            backgroundColor: 'rgba(220, 38, 38, 0.15)',
            borderColor: '#dc2626',
            borderWidth: 2,
            pointBackgroundColor: '#dc2626',
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Competitive Radar: Key Battery Platforms (Scores out of 100)',
            font: { size: 16, weight: '600' },
            padding: 20
          },
          legend: {
            position: 'bottom',
            labels: { usePointStyle: true, padding: 20, font: { size: 12 } }
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            pointLabels: { font: { size: 13 } },
            ticks: { font: { size: 11 }, stepSize: 20 }
          }
        }
      }
    });
  }

  // ───── Inject required CSS (once) ─────
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

      /* ── RADAR CHART WRAPPER (stable, fixed height) ── */
      .radar-chart-wrap {
        position: relative;
        width: 100%;
        max-width: 900px;
        margin: 0 auto 30px;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 14px;
        padding: 28px 20px 20px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
        height: 600px;                     /* FIXED HEIGHT – stops infinite stretch */
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
      }
      .radar-chart-wrap canvas {
        display: block;
        width: 100% !important;
        height: 100% !important;
      }

      /* ── TABLE SCROLL WRAPPER ── */
      .table-scroll-wrap {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        margin-bottom: 24px;
        border-radius: 10px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .table-scroll-wrap table {
        min-width: 900px;
        width: 100%;
        border-collapse: collapse;
        background: var(--surface);
        font-size: 0.82rem;
      }
      .table-scroll-wrap th,
      .table-scroll-wrap td {
        border: 1px solid var(--border);
        padding: 10px 12px;
        text-align: left;
      }
      .table-scroll-wrap th {
        background: #0d1117;
        color: #e0e0e0;
        font-weight: 600;
        font-size: 0.72rem;
        text-transform: uppercase;
        white-space: nowrap;
      }

      /* ── RESPONSIVE ── */
      @media (max-width: 600px) {
        .radar-chart-wrap {
          height: 420px;
          padding: 16px 10px 12px;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Keep generateCompetitorTable() unchanged
function generateCompetitorTable() {
  return `
    <table>
      <thead>
        <tr><th>Company</th><th>Country</th><th>Technology</th><th>Energy Density (Wh/kg)</th><th>Cost Position</th><th>Scalability</th><th>TRL</th><th>Key Strength</th><th>Key Vulnerability</th></tr>
      </thead>
      <tbody>
        <tr><td>CATL</td><td>China</td><td>Na-ion, LFP, NMC</td><td>Na-ion 160, LFP 180, NMC 280</td><td>Cost leader</td><td>100+ GWh</td><td>7-9</td><td>Unmatched scale, R&D breadth</td><td>Li-dependent in high-energy; Na-ion ceiling</td></tr>
        <tr><td>BYD</td><td>China</td><td>LFP Blade, Na-ion R&D</td><td>LFP 150-180</td><td>Extremely competitive</td><td>Massive in-house</td><td>9 (LFP), 4-5 (Na-ion)</td><td>Vertical integration</td><td>Na-ion not scaled; no solid-state</td></tr>
        <tr><td>CALB</td><td>China</td><td>LFP, NMC, semi-solid</td><td>LFP 180, NMC 260</td><td>Competitive</td><td>50+ GWh</td><td>9 (Li-ion), 5-6 (semi)</td><td>Fast scaling, OEM ties</td><td>Lithium supply chain exposure</td></tr>
        <tr><td>Gotion High-Tech</td><td>China</td><td>LFP, LMFP, semi-solid</td><td>LFP 190, LMFP 230 (target)</td><td>Competitive; <$80/kWh target</td><td>30+ GWh</td><td>9 (LFP), 5-6 (semi)</td><td>LMFP innovation, VW backing</td><td>LMFP cycle life concerns</td></tr>
        <tr><td>EVE Energy</td><td>China</td><td>LFP, NMC, large cylindrical</td><td>LFP 180, NMC 280</td><td>Competitive</td><td>50+ GWh</td><td>9</td><td>Large-format cylindrical expertise</td><td>Limited solid-state roadmap</td></tr>
        <tr><td>SVOLT</td><td>China</td><td>LFP, NMC, cobalt-free, solid-state R&D</td><td>LFP 180, NMC 240</td><td>Competitive</td><td>20+ GWh</td><td>9 (Li-ion), 5-6 (solid-state)</td><td>Cobalt-free cathode innovation</td><td>Young company, still ramping</td></tr>
        <tr><td>QuantumScape</td><td>USA</td><td>Li-metal solid-state</td><td>400-500 (target)</td><td>Initially premium</td><td>Pilot line</td><td>5-6</td><td>Highest energy density potential</td><td>Lithium supply; manufacturing complexity</td></tr>
        <tr><td>Solid Power</td><td>USA</td><td>Sulfide Li solid-state</td><td>350-400 (target)</td><td>Targeting parity</td><td>Pilot; SK On partnership</td><td>5-6</td><td>Strong partnerships, scalable sulfide</td><td>Lithium-reliant; moisture sensitivity</td></tr>
        <tr><td>SES AI</td><td>USA/Singapore</td><td>Li-metal hybrid electrolyte</td><td>400+ (target)</td><td>Premium initially</td><td>Pilot; GM, Hyundai backing</td><td>5-6</td><td>Hybrid approach, OEM support</td><td>Lithium dependency; hybrid safety questions</td></tr>
        <tr><td>Amprius Technologies</td><td>USA</td><td>Silicon anode Li-ion</td><td>450-500 (validated)</td><td>Very high (niche)</td><td>Small-scale commercial</td><td>7-8</td><td>Highest energy density today</td><td>Extreme cost; cycle life limited; lithium supply</td></tr>
        <tr><td>Enovix</td><td>USA</td><td>3D silicon anode Li-ion</td><td>300-350 (consumer); 400+ roadmap</td><td>Premium but declining</td><td>Small-scale; EV factory planned</td><td>7-8</td><td>3D architecture, safety</td><td>Silicon anode scaling challenges</td></tr>
        <tr><td>Factorial Energy</td><td>USA</td><td>Solid-state with lithium metal</td><td>350-400 (target)</td><td>Premium; targeting parity</td><td>Pilot</td><td>5-6</td><td>Auto OEM consortium (Mercedes, Stellantis)</td><td>Lithium supply chain; timeline</td></tr>
        <tr><td>StoreDot</td><td>Israel</td><td>Extreme fast charging Li-ion</td><td>300+ (target)</td><td>Premium due to silicon</td><td>Pilot; EVE Energy, Volvo</td><td>6-7</td><td>5-min charge capability</td><td>Still lithium-ion; cost; cycle life</td></tr>
        <tr><td>Northvolt</td><td>Sweden</td><td>LFP, NMC, Na-ion R&D</td><td>LFP 160, NMC 260</td><td>Premium for sustainability</td><td>16 GWh operational; 60 GWh planned</td><td>9 (Li-ion), 3-4 (Na-ion)</td><td>European green battery champion</td><td>Scaling, lithium dependency for now</td></tr>
        <tr><td>Natron Energy</td><td>USA</td><td>Sodium-ion (Prussian blue, aqueous)</td><td>50-100</td><td>Low raw material cost</td><td>Small-scale; Michigan factory</td><td>7-8</td><td>Fire-safe, abundant materials</td><td>Very low energy density; not for mobility</td></tr>
        <tr><td>Faradion (Reliance)</td><td>UK/India</td><td>Sodium-ion (layered oxide)</td><td>140-160</td><td>Potentially very low</td><td>Pilot; Reliance backing</td><td>6-7</td><td>IP in Na-ion; Reliance deep pockets</td><td>Low energy density; not solid-state; timeline</td></tr>
        <tr><td>NGK Insulators</td><td>Japan</td><td>Sodium-sulfur (NAS) high-temp</td><td>~150-200 (system)</td><td>Competitive for long-duration</td><td>720 MW installed</td><td>9 (mature)</td><td>Proven durability, Na-S chemistry</td><td>~300°C operation; not for mobility</td></tr>
        <tr><td>WeLion (New Energy)</td><td>China</td><td>Solid-state lithium (sulfide)</td><td>824 (lab), 1,000 target</td><td>High (sulfide cost barrier)</td><td>28.2 GWh current; 100+ GWh target</td><td>6-7</td><td>Extreme energy density demonstrated</td><td>Lithium/nickel dependent; high cost</td></tr>
        <tr><td><strong>Our Platform</strong></td><td>India</td><td>Na-S solid-state</td><td>200-450 (phased target)</td><td>Targeting LFP parity</td><td>Not yet scaled</td><td>2</td><td>Abundant materials, safety, energy potential</td><td>Early-stage; manufacturing unproven</td></tr>
      </tbody>
    </table>
  `;
}

window.load_section9 = load_section9;
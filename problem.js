function load_problem(mainContainer) {
  mainContainer.innerHTML = `
    <section id="problem-section">
      <h2>Problem / Opportunity</h2>
      <p class="problem-intro">
        Lithium‑ion batteries power the modern world, but they carry three fundamental flaws that no amount of incremental improvement has fixed: they catch fire, they depend on a fragile supply chain, and their safest versions cannot deliver the energy density needed for long‑range transport or aerospace. For India, these flaws become a strategic and economic crisis.
      </p>

      <!-- PROBLEM 1 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">01</span>
          <h3>Fire & Thermal Runaway</h3>
        </div>
        <div class="feature-body">
          <p>
            Flammable liquid electrolytes are the single biggest cause of EV and grid‑storage fires. Even the “safe” LFP chemistry still contains a combustible liquid. In India’s hot climate, the risk of thermal runaway is amplified, leading to vehicle fires, building evacuations, and regulatory backlash.
          </p>
          <ul class="feature-points">
            <li>Liquid electrolytes ignite when overcharged, punctured, or overheated</li>
            <li>Battery fires burn at extreme temperatures and are difficult to extinguish</li>
            <li>Urban charging stations and residential storage face growing safety concerns</li>
          </ul>
        </div>
      </div>

      <!-- PROBLEM 2 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">02</span>
          <h3>Critical Mineral Dependency</h3>
        </div>
        <div class="feature-body">
          <p>
            Over 70% of the world’s lithium is processed in China. Cobalt is mined in the DRC under severe human‑rights concerns. Nickel supply is equally concentrated. India imports nearly every gram of these materials — a single geopolitical shock can halt the entire EV industry.
          </p>
          <ul class="feature-points">
            <li>Lithium carbonate prices fluctuated from $6,000/ton to >$80,000/ton in two years</li>
            <li>Cobalt supply chain linked to child labour and conflict zones</li>
            <li>No domestic lithium reserves in India — complete import dependency</li>
          </ul>
        </div>
      </div>

      <!-- PROBLEM 3 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">03</span>
          <h3>Energy Density Ceiling</h3>
        </div>
        <div class="feature-body">
          <p>
            The safest commercial lithium chemistry (LFP) maxes out at 180 Wh/kg. Long‑range electric cars, eVTOL aircraft, and high‑endurance defence drones remain out of reach without heavier, more expensive, and less safe battery packs.
          </p>
          <ul class="feature-points">
            <li>LFP cannot deliver 600+ km range without massive weight penalty</li>
            <li>Aerospace and defence applications demand >400 Wh/kg — no commercial option exists</li>
            <li>Increasing energy density without sacrificing safety has proven extremely difficult</li>
          </ul>
        </div>
      </div>

      <!-- PROBLEM 4 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">04</span>
          <h3>India’s Crude Oil & Battery Import Burden</h3>
        </div>
        <div class="feature-body">
          <p>
            India spends roughly $140 billion a year on crude oil imports and an additional $2–3 billion on lithium‑ion cells. A domestically manufactured, high‑energy battery can slash both bills simultaneously — cutting petrol/diesel demand while replacing imported cells.
          </p>
          <ul class="feature-points">
            <li>Transport sector accounts for ~60% of India’s crude oil consumption</li>
            <li>Lithium‑ion import bill projected to reach $10–15 billion by 2030</li>
            <li>A local battery ecosystem reduces both oil and cell import dependency</li>
          </ul>
        </div>
      </div>

      <!-- PROBLEM 5 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">05</span>
          <h3>Recycling & Waste Crisis</h3>
        </div>
        <div class="feature-body">
          <p>
            Multi‑metal NMC cathodes are notoriously difficult to recycle economically. As the first wave of EV batteries retires, India faces a looming mountain of hazardous waste with no scalable recovery infrastructure.
          </p>
          <ul class="feature-points">
            <li>Complex cathode chemistry makes separation expensive</li>
            <li>Landfilling lithium‑ion cells causes toxic leaks and fire hazards</li>
            <li>Simpler chemistries are needed to enable circular economy</li>
          </ul>
        </div>
      </div>

      <!-- PROBLEM 6 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">06</span>
          <h3>Absence of Domestic Advanced Cell Manufacturing</h3>
        </div>
        <div class="feature-body">
          <p>
            Despite the PLI‑ACC scheme, India still lacks true R&D‑driven, advanced‑chemistry cell manufacturing. Most “local” production is assembly of imported components, leaving the country permanently dependent on foreign technology.
          </p>
          <ul class="feature-points">
            <li>No Indian company currently manufactures sodium solid‑state cells</li>
            <li>Deep‑tech battery R&D requires lab infrastructure currently absent</li>
            <li>Without homegrown innovation, India will remain an assembler, not an inventor</li>
          </ul>
        </div>
      </div>

      <!-- EXISTING ALTERNATIVES TABLE -->
      <h3 style="margin-top: 36px;">Current Alternatives & Their Shortcomings</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Technology</th><th>Fire Safety</th><th>Energy Density</th><th>Critical Mineral Risk</th><th>India Availability</th></tr>
          </thead>
          <tbody>
            <tr><td>Li‑ion NMC</td><td>Moderate – flammable liquid</td><td>200‑280 Wh/kg</td><td>High (Co, Ni, Li)</td><td>Fully imported</td></tr>
            <tr><td>Li‑ion LFP</td><td>Good – but still liquid</td><td>150‑180 Wh/kg</td><td>Medium (Li)</td><td>Imported cells</td></tr>
            <tr><td>Sodium‑ion (aqueous)</td><td>Good – liquid/aqueous</td><td>100‑160 Wh/kg</td><td>Very Low</td><td>Some R&D, no mass mfg</td></tr>
            <tr><td>Lithium Solid‑State</td><td>Excellent – solid</td><td>400‑824 Wh/kg (lab)</td><td>High (Li, specialty)</td><td>Not available</td></tr>
            <tr><td>Sodium‑Sulfur (High‑Temp)</td><td>Good – but ~300 °C</td><td>150‑200 Wh/kg</td><td>Very Low</td><td>Imported (NGK)</td></tr>
            <tr><td><strong>Our Na‑S Solid‑State</strong></td><td><strong>Excellent – solid, no fire</strong></td><td><strong>200→450 Wh/kg (target)</strong></td><td><strong>None – Na & S abundant</strong></td><td><strong>Can be fully domestic</strong></td></tr>
          </tbody>
        </table>
      </div>

      <!-- WHITE SPACE OPPORTUNITY (styled like solution-summary) -->
      <div class="solution-summary">
        <h3>The Undisputed White Space</h3>
        <p>
          No commercial battery simultaneously delivers <strong>intrinsic fire safety, high energy density, and complete freedom from critical minerals</strong> — 
          all with materials that are abundantly available in India. This platform is the first to target that precise intersection, 
          turning a $450 B global market vulnerability into a generational opportunity for Atmanirbhar Bharat.
        </p>
      </div>

      <p style="margin-top:24px;font-size:0.85rem;color:var(--text-muted);font-style:italic;">
        <strong>Note:</strong> All problem assessments are based on publicly available data (2024‑2025). The proposed platform is at TRL‑2; no physical prototype exists yet.
      </p>
    </section>
  `;
  
  // Inject styles (same as solution.js, plus minimal problem overrides if needed)
  if (!document.getElementById('problem-style')) {
    const style = document.createElement('style');
    style.id = 'problem-style';
    style.textContent = `
      .problem-intro {
        font-size: 1rem;
        line-height: 1.7;
        color: #333;
        margin-bottom: 32px;
        max-width: 900px;
      }
      .solution-feature {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 28px;
        margin-bottom: 20px;
        box-shadow: 0 1px 4px rgba(0,0,0,0.03);
      }
      .feature-head {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 14px;
      }
      .feature-number {
        background: var(--accent);
        color: white;
        font-weight: 700;
        font-size: 0.8rem;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .feature-head h3 {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 600;
        color: #1a1a1a;
      }
      .feature-body p {
        font-size: 0.9rem;
        color: #444;
        line-height: 1.6;
        margin-bottom: 10px;
      }
      .feature-points {
        list-style: none;
        padding: 0;
        margin-top: 10px;
      }
      .feature-points li {
        padding: 4px 0 4px 18px;
        position: relative;
        font-size: 0.85rem;
        color: #555;
        line-height: 1.5;
      }
      .feature-points li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 9px;
        width: 6px;
        height: 6px;
        background: var(--accent);
        border-radius: 50%;
        opacity: 0.7;
      }
      .solution-summary {
        background: #fdf8f0;
        border: 1px solid #e8d9b8;
        border-radius: 14px;
        padding: 24px;
        margin-top: 28px;
      }
      .solution-summary h3 {
        margin: 0 0 14px;
        font-size: 1.05rem;
        font-weight: 700;
        color: #1a1a1a;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_problem = load_problem;
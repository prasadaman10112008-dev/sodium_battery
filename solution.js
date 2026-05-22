function load_solution(mainContainer) {
  mainContainer.innerHTML = `
    <section id="solution-section">
      <h2>Solution / Technology</h2>
      <p class="solution-intro">
        A solid‑state sodium–sulfur battery platform <strong>designed to target</strong> the core pain points 
        of current energy storage: fire risk, critical mineral dependency, energy density limits, 
        supply‑chain vulnerability, and recycling complexity. <strong>All performance figures are phased 
        development targets based on first‑principles modeling and public‑domain chemistry data.</strong> 
        The platform is at TRL‑2 — concept and feasibility study complete; no lab prototype exists yet. 
        The following outlines the projected pathway and intended advantages.
      </p>

      <!-- FEATURE 1 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">01</span>
          <h3>Projected Inherent Thermal Safety — Fireproof by Design</h3>
        </div>
        <div class="feature-body">
          <p>
            The solid‑state electrolyte <strong>is designed to eliminate</strong> the flammable organic liquid 
            found in conventional lithium‑ion cells. This would remove the primary root cause of thermal 
            runaway. Unlike software‑based battery management systems, the architecture <strong>aims to make 
            combustion physically impossible</strong> at the cell level — a fundamental safety advantage 
            for EVs, data centers, defence, and urban storage.
          </p>
          <ul class="feature-points">
            <li>Target: no flammable liquid electrolyte — fire cannot initiate inside the cell</li>
            <li>Designed for zero‑tolerance thermal event applications (aerospace, defence, dense urban areas)</li>
            <li>Potential to reduce or eliminate complex cooling systems, lowering pack‑level cost and weight</li>
            <li>Projected to meet tightening global battery safety regulations (UN R100, EU Battery Regulation, India AIS‑048)</li>
          </ul>
        </div>
      </div>

      <!-- FEATURE 2 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">02</span>
          <h3>Targeted High Energy Density Pathway — Breaking the LFP Ceiling</h3>
        </div>
        <div class="feature-body">
          <p>
            <strong>All energy density numbers are phased targets, not demonstrated values.</strong>
            Early lab validation aims for 150–200 Wh/kg. Advanced prototypes are projected to reach 
            200–350 Wh/kg. A long‑term industrial target is 400–450 Wh/kg. These projections derive 
            from publicly known theoretical capacities (Na: ~1166 mAh/g, S: ~1675 mAh/g) and the 
            standard engineering rule that practical cells achieve ~30–35% of theoretical maximum 
            after accounting for inactive components (casing, current collectors, electrolyte).
          </p>
          <ul class="feature-points">
            <li>Early‑phase target 200 Wh/kg — would match current LFP packs for urban EVs</li>
            <li>Mid‑phase target 350 Wh/kg — could enable 600+ km range for premium passenger vehicles</li>
            <li>Long‑term target 400–450 Wh/kg — necessary for long‑haul trucking, eVTOL, aerospace</li>
            <li>Volumetric target 650–700 Wh/L — designed for existing EV pack architectures</li>
          </ul>
        </div>
      </div>

      <!-- FEATURE 3 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">03</span>
          <h3>Complete Critical Mineral Independence (Material Choice)</h3>
        </div>
        <div class="feature-body">
          <p>
            The platform is based on <strong>zero lithium, zero cobalt, and zero nickel</strong>. Sodium is the 
            6th most abundant element in Earth's crust; sulfur is a widely available industrial by‑product. 
            This material basket is intended to decouple the battery from geopolitically concentrated, 
            price‑volatile supply chains.
          </p>
          <ul class="feature-points">
            <li>Sodium: abundant in India (Gujarat, Rajasthan, Tamil Nadu salt production)</li>
            <li>Sulfur: domestic by‑product from Indian refineries — no import required</li>
            <li>Eliminates exposure to lithium price swings ($6,000 to >$80,000/ton in 2 years)</li>
            <li>No artisanal cobalt mining, no nickel laterite deforestation — ESG‑clean supply chain</li>
            <li>Aligned with Atmanirbhar Bharat, Make in India, and PLI‑ACC scheme objectives</li>
          </ul>
        </div>
      </div>

      <!-- FEATURE 4 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">04</span>
          <h3>Projected Power Density & Fast Charge (Conservative Targets)</h3>
        </div>
        <div class="feature-body">
          <p>
            The <strong>projected peak power density is 450–700 W/kg</strong>, a realistic early‑stage 
            target that is competitive with many Li‑ion systems. This range is intended to support 
            standard fast‑charge operations (60–90 min full charge, with future fast‑charge potential 
            of 20–30 min) without the thermal stress that liquid‑electrolyte cells suffer.
          </p>
          <ul class="feature-points">
            <li>Projected peak power: 450–700 W/kg — comparable to Li‑ion for initial applications</li>
            <li>Target fast‑charge: 20–30 min under development; standard charge 60–90 min</li>
            <li>Solid electrolyte expected to remain stable under moderate‑to‑high current loads</li>
            <li>Suited for defence portable power, drones, and urban delivery EVs where power matters</li>
          </ul>
        </div>
      </div>

      <!-- FEATURE 5 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">05</span>
          <h3>Targeted Operational Life & Low Self‑Discharge</h3>
        </div>
        <div class="feature-body">
          <p>
            Projected cycle life: 1,500–3,000 cycles (to 80% state of health) and calendar life of 
            6–10 years under standard automotive conditions. Self‑discharge is projected at <1% per month, 
            making the platform suitable for standby power, defence readiness, and long‑duration grid storage.
          </p>
          <ul class="feature-points">
            <li>1,500–3,000 cycle target — competitive with NMC, fits daily fleet operations</li>
            <li>6–10 year calendar life target for automotive and industrial use</li>
            <li>Projected self‑discharge <1% per month — ready after months of storage</li>
            <li>Coulombic efficiency target ~99.9% — excellent charge reversibility expected</li>
            <li>Operating temperature target: -20°C to 65°C — rugged deployment without complex thermal systems</li>
          </ul>
        </div>
      </div>

      <!-- FEATURE 6 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">06</span>
          <h3>Simplified Recycling Potential</h3>
        </div>
        <div class="feature-body">
          <p>
            Unlike multi‑metal NMC cathodes that produce complex “black mass,” the Na‑S system contains 
            fewer critical elements. Sodium and sulfur can potentially be recovered through standard 
            industrial processes. The simpler chemistry is designed from the outset for compliance with 
            India’s Battery Waste Management Rules (2022) and the EU Battery Regulation (2027).
          </p>
          <ul class="feature-points">
            <li>Fewer critical elements — simpler separation, lower recycling cost expected</li>
            <li>Sodium and sulfur recoverable through proven chemical routes</li>
            <li>Potential for closed‑loop manufacturing: recovered Na and S fed back into new cells</li>
            <li>Avoids toxic leachate and fire hazards of landfilled Li‑ion cells</li>
          </ul>
        </div>
      </div>

      <!-- FEATURE 7 -->
      <div class="solution-feature">
        <div class="feature-head">
          <span class="feature-number">07</span>
          <h3>Supply Chain Resilience — Globally Diversified, Locally Sourceable</h3>
        </div>
        <div class="feature-body">
          <p>
            Sodium and sulfur are globally abundant, produced at massive scale for industries unrelated to 
            batteries. Unlike lithium (processing concentrated in China) or cobalt (mining concentrated 
            in DRC), these materials can be sourced from dozens of countries, including India. This 
            drastically reduces single‑point failure risk.
          </p>
          <ul class="feature-points">
            <li>Sodium: 6th most abundant element — seawater, rock salt, global production >300 million tons/year</li>
            <li>Sulfur: >80 million tons produced annually — petroleum refining by‑product</li>
            <li>No dependency on any single country or cartel for raw materials</li>
            <li>India can domestically source both Na and S — zero forex outflow for raw materials</li>
          </ul>
        </div>
      </div>

      <!-- SUMMARY TABLE -->
      <div class="solution-summary">
        <h3>How the Platform Targets Each Core Problem (Projected)</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Core Problem</th><th>Targeted Solution (TRL‑2 projection)</th></tr>
            </thead>
            <tbody>
              <tr><td>Fire & Thermal Runaway</td><td>Solid‑state electrolyte — physically impossible for liquid fire to occur inside cell (target)</td></tr>
              <tr><td>Energy Density Ceiling</td><td>Lightweight Na‑S chemistry with projected 400–450 Wh/kg long‑term</td></tr>
              <tr><td>Critical Mineral Dependency</td><td>Zero lithium, cobalt, nickel — uses abundant sodium and sulfur</td></tr>
              <tr><td>Charging & Power</td><td>Projected 450–700 W/kg with target fast charge 20–30 min</td></tr>
              <tr><td>Supply Chain Vulnerability</td><td>Diversified, localizable supply chain — India can source all materials</td></tr>
              <tr><td>Recycling Complexity</td><td>Simpler Na‑S chemistry — easier material recovery, circular‑ready</td></tr>
              <tr><td>Geopolitical Risk</td><td>No dependence on China (lithium processing) or DRC (cobalt mining)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <p style="margin-top:24px;font-size:0.85rem;color:var(--text-muted);font-style:italic;">
        <strong>Important:</strong> All figures are development targets derived from public‑domain chemistry and standard 
        engineering weight‑penalty rules. They have not yet been experimentally validated. The platform 
        is at TRL‑2 — concept stage. The next step is to secure lab access and funding to begin 
        physical validation (TRL‑2 → TRL‑3).
      </p>
    </section>
  `;

  // Inject styles once
  if (!document.getElementById('solution-style')) {
    const style = document.createElement('style');
    style.id = 'solution-style';
    style.textContent = `
      .solution-intro {
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

window.load_solution = load_solution;
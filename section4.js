function load_section4(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section4">
      <h2>4. Problem Statement</h2>
      <p class="section-intro">
        The global transition to electrified mobility and renewable‑integrated grids is fundamentally constrained by persistent, unresolved pain points in current battery technology. Despite two decades of incremental lithium‑ion improvement, six structural problems continue to create risk for automakers, grid operators, defence users, and national energy planners.
      </p>

      <h3>4.1 Energy Density & Range Limitations</h3>
      <ul class="bullet-list">
        <li>Mainstream LFP cells are capped at 150–180 Wh/kg, restricting EV range and payload capacity.</li>
        <li>Even premium NMC systems (~250–280 Wh/kg) are reaching practical ceilings without major chemistry shifts.</li>
        <li>Aerospace, eVTOL, and long‑haul trucking applications require substantially higher energy density that current commercial systems cannot reliably deliver.</li>
        <li>Range anxiety remains a primary barrier to mass EV adoption in price‑sensitive and infrastructure‑limited markets.</li>
      </ul>

      <h3>4.2 Safety & Thermal Runaway Risk</h3>
      <ul class="bullet-list">
        <li>Organic liquid electrolytes in conventional Li‑ion cells remain the dominant root cause of battery fires.</li>
        <li>Thermal runaway events, though statistically rare, carry severe consequences: vehicle fires, building evacuations, reputational damage.</li>
        <li>Safety risks increase under fast charging, mechanical stress, and elevated ambient temperatures.</li>
        <li>Dense urban charging stations and residential storage installations face growing regulatory scrutiny over fire safety.</li>
        <li>Defence and aerospace applications demand zero‑tolerance for thermal events — a bar that liquid‑electrolyte systems struggle to meet.</li>
      </ul>

      <h3>4.3 Charging Time & Infrastructure Constraints</h3>
      <ul class="bullet-list">
        <li>Standard full charges still require 60–90 minutes for most EVs, far longer than internal combustion refuelling.</li>
        <li>Fast charging (20–30 minutes) accelerates degradation, stresses thermal management systems, and can reduce cycle life.</li>
        <li>High‑power charging infrastructure is capital‑intensive and grid‑straining, especially in developing markets.</li>
        <li>Slow recharge remains a psychological and operational barrier for fleet operators and long‑distance travellers.</li>
      </ul>

      <h3>4.4 Critical Mineral Supply Chain Dependency</h3>
      <ul class="bullet-list">
        <li>Lithium‑ion chemistries depend heavily on lithium, cobalt, and nickel — minerals with concentrated extraction and processing geographies.</li>
        <li>Cobalt supply: ~70% from the Democratic Republic of Congo, associated with artisanal mining and human rights concerns.</li>
        <li>Lithium processing: >70% controlled by China, creating single‑point failure risk for global supply chains.</li>
        <li>Supply disruptions, trade restrictions, or logistical shocks can cascade across the entire battery value chain within weeks.</li>
      </ul>

      <h3>4.5 Cost Volatility & Escalation Risk</h3>
      <ul class="bullet-list">
        <li>Lithium carbonate prices fluctuated from ~$6,000/ton to >$80,000/ton between 2020 and 2023.</li>
        <li>Raw material cost spikes rapidly erase the industry's hard‑won progress toward the $100/kWh pack‑level target.</li>
        <li>Long‑term offtake agreements and cell pricing contracts become extremely difficult to underwrite under such volatility.</li>
        <li>Price shocks undermine the business case for large‑scale grid storage projects with thin margins.</li>
      </ul>

      <h3>4.6 End‑of‑Life & Recycling Complexity</h3>
      <ul class="bullet-list">
        <li>Complex multi‑metal NMC cathodes make economic recycling technically demanding and capital‑intensive.</li>
        <li>Current recycling rates for lithium‑ion batteries remain low globally; most end‑of‑life cells are not economically recoverable.</li>
        <li>Looming volumes of retired EV batteries pose environmental and regulatory risks without scalable, cost‑effective recovery pathways.</li>
        <li>Landfilling or improper disposal of lithium‑ion cells creates fire hazards and toxic leachate concerns.</li>
      </ul>

      <h3>4.7 Geopolitical & Energy Security Vulnerability</h3>
      <ul class="bullet-list">
        <li>Nations without domestic lithium reserves or processing capacity face strategic dependence on a small number of supplier countries.</li>
        <li>India, for example, imports nearly all its lithium‑ion cells, creating a direct link between its EV ambitions and external supply chain stability.</li>
        <li>Trade tensions, export controls, or regional conflicts can abruptly disrupt battery material availability — a risk not present with domestically abundant raw materials.</li>
        <li>Energy storage is now a matter of national security; dependency on imported critical minerals is increasingly viewed as a strategic liability.</li>
      </ul>

      <h3>Summary of Core Problems</h3>
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Problem Dimension</th><th>Impact</th><th>Affected Sectors</th></tr>
          </thead>
          <tbody>
            <tr><td>Energy Density Ceiling</td><td>Limits vehicle range, aerospace viability</td><td>EV, Aerospace, Defence</td></tr>
            <tr><td>Fire & Thermal Runaway</td><td>Safety liability, regulatory risk</td><td>All sectors</td></tr>
            <tr><td>Long Charge Times</td><td>User inconvenience, fleet downtime</td><td>EV, Industrial</td></tr>
            <tr><td>Mineral Dependency</td><td>Supply chain fragility, price volatility</td><td>All sectors</td></tr>
            <tr><td>Cost Volatility</td><td>Unpredictable economics, margin erosion</td><td>Automotive, Grid Storage</td></tr>
            <tr><td>Recycling Complexity</td><td>Environmental burden, material loss</td><td>All sectors</td></tr>
            <tr><td>Geopolitical Risk</td><td>National energy security exposure</td><td>Strategic/Defence</td></tr>
          </tbody>
        </table>
      </div>
      <p style="font-size:0.9rem; color:var(--text-muted); margin-top:12px;">
        The proposed platform conceptually addresses the full spectrum of these problems — not just one or two in isolation.
      </p>
    </section>
  `;

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
      #report-section4 h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 20px 0 8px;
        color: #1a1a1a;
      }
      #report-section4 h2 {
        margin-bottom: 20px;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section4 = load_section4;
function load_section5(mainContainer) {
  mainContainer.innerHTML = `
    <section id="report-section5">
      <h2>5. Proposed Battery Platform (High Level)</h2>
      <p class="section-intro">
        The platform combines a non‑flammable solid‑state electrolyte with sodium‑ and sulfur‑based active materials.
        All descriptions are <strong>conceptual and intended to explain the architecture at a commercial level</strong>;
        no proprietary synthesis methods, material compositions, or engineering procedures are disclosed.
      </p>

      <h3>5.1 Conceptual Architecture Overview</h3>
      <ul class="bullet-list">
        <li><strong>Chemistry basis:</strong> Sodium and sulfur active materials combined with a solid‑state electrolyte architecture.</li>
        <li><strong>Electrolyte type:</strong> Non‑flammable solid‑state separator — eliminates conventional liquid organic electrolytes.</li>
        <li><strong>Design philosophy:</strong> Decouple energy storage performance from lithium, cobalt, and nickel supply chains while retaining high energy density potential.</li>
        <li><strong>Form factor flexibility:</strong> Conceptual design targets compatibility with pouch, prismatic, and cylindrical cell formats.</li>
        <li><strong>Current maturity:</strong> TRL 2 — early‑stage laboratory concept with initial material‑level validation.</li>
      </ul>

      <h3>5.2 Intended Differentiated Advantages</h3>
      <ul class="bullet-list">
        <li><strong>Inherent Safety:</strong> Solid‑state electrolyte designed to virtually eliminate thermal runaway and flammability risk associated with liquid‑electrolyte systems.</li>
        <li><strong>Material Independence:</strong> Uses globally abundant sodium and sulfur — no lithium, cobalt, or nickel required.</li>
        <li><strong>Energy Density Headroom:</strong> Clear performance progression pathway: 150–200 Wh/kg (early validation) → 350 Wh/kg (advanced prototype) → 400–450 Wh/kg (long‑term industrial target).</li>
        <li><strong>High Power Capability:</strong> Conceptual design allows peak power density of 450–700 W/kg, suitable for fast‑charge and high‑discharge applications (aerospace, defence).</li>
        <li><strong>Supply Chain Resilience:</strong> Raw materials sourced from diversified, geopolitically stable regions — drastically reduces single‑point failure risk.</li>
        <li><strong>Simplified Recycling Potential:</strong> Sodium‑sulfur system with fewer critical elements simplifies end‑of‑life material recovery.</li>
      </ul>

      <h3>5.3 Conceptual Positioning in the Battery Landscape</h3>
      <ul class="bullet-list">
        <li>Positions at the intersection of three high‑value attributes currently unavailable in a single commercial system:
          <ul class="sub-list">
            <li><strong>High energy density</strong> (eventually 400+ Wh/kg).</li>
            <li><strong>Solid‑state safety</strong> (no flammable liquid electrolyte).</li>
            <li><strong>Material abundance</strong> (complete freedom from lithium/cobalt/nickel).</li>
          </ul>
        </li>
        <li>Not intended to compete directly with mature, low‑cost LFP in the near term; instead targets applications where safety, supply chain security, and energy density are premium requirements.</li>
        <li>Could serve as a platform technology spanning multiple verticals — from high‑safety EV packs to aerospace power systems to stationary storage in high‑risk environments.</li>
      </ul>

      <h3>5.4 Key Assumptions & Development Levers</h3>
      <ul class="bullet-list">
        <li>Performance targets assume successful resolution of solid‑state electrolyte conductivity and interface stability at scale.</li>
        <li>Cost competitiveness hinges on achieving manufacturing scale and leveraging bulk sodium‑sulfur supply chains.</li>
        <li>Timeline to commercial readiness is contingent on sustained R&D investment and manufacturing process innovation.</li>
      </ul>

      <p style="font-size:0.85rem; color:var(--text-muted); margin-top:20px;">
        All performance figures are phased development targets derived from first‑principles modelling and public‑domain data. No experimental validation has been conducted yet (TRL‑2).
      </p>
    </section>
  `;

  // Inject shared report styles once
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
      .sub-list {
        list-style: none;
        padding-left: 20px;
        margin-top: 4px;
      }
      .sub-list li {
        font-size: 0.85rem;
        padding: 3px 0 3px 16px;
        position: relative;
      }
      .sub-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 5px;
        height: 5px;
        background: #ccc;
        border-radius: 50%;
      }
      #report-section5 h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 20px 0 8px;
        color: #1a1a1a;
      }
      #report-section5 h2 {
        margin-bottom: 20px;
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_section5 = load_section5;
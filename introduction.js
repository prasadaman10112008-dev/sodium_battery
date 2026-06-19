// introduction.js — Responsive Sodium Battery Intro

function load_intro(container) {
  container.innerHTML = `
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 75vh;
      padding: 20px;
      background: #0d1117;
      border-radius: 16px;
      margin: -20px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    ">
      <div style="max-width: 760px; text-align: center; color: #f0f0f0;">
        <!-- TRL Badge -->
        <div style="
          display: inline-block;
          background: rgba(184,134,11,0.15);
          color: #b8860b;
          padding: 6px 20px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 24px;
        ">
          TRL 2 — Concept & Formulation Complete
        </div>

        <!-- Main Headline -->
        <h1 style="font-size: 2.8rem; font-weight: 700; margin: 0 0 12px; line-height: 1.2; color: white;">
          Solid‑State Sodium‑Sulfur<br>Battery Platform
        </h1>

        <!-- Unique Value Proposition -->
        <p style="font-size: 1.1rem; color: #c9d1d9; margin: 0 0 24px; line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto;">
          The only room‑temperature sodium solid‑state architecture targeting <strong style="color: white;">400+ Wh/kg</strong> 
          with <strong style="color: white;">zero lithium, cobalt, or nickel</strong>. 
          Built entirely from globally abundant sodium and sulfur — for a secure, independent energy future.
        </p>

        <!-- Key Stats -->
        <div style="margin-bottom: 28px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
          <div style="background: #1c2128; border-radius: 12px; padding: 18px 24px; min-width: 140px;">
            <div style="font-size: 1.8rem; font-weight: 700; color: #b8860b;">200→450</div>
            <div style="font-size: 0.8rem; color: #8b949e;">Energy Density (Wh/kg)</div>
          </div>
          <div style="background: #1c2128; border-radius: 12px; padding: 18px 24px; min-width: 140px;">
            <div style="font-size: 1.8rem; font-weight: 700; color: #b8860b;">Zero</div>
            <div style="font-size: 0.8rem; color: #8b949e;">Lithium/Cobalt/Nickel</div>
          </div>
          <div style="background: #1c2128; border-radius: 12px; padding: 18px 24px; min-width: 140px;">
            <div style="font-size: 1.8rem; font-weight: 700; color: #b8860b;">35+</div>
            <div style="font-size: 0.8rem; color: #8b949e;">Pages of Documentation</div>
          </div>
        </div>

        <!-- Short Context Paragraph -->
        <p style="font-size: 0.95rem; color: #8b949e; margin-bottom: 28px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6;">
          A non‑flammable solid electrolyte eliminates fire risk completely. The cell architecture, material groups, 
          and full process flow have been rigorously defined on paper. All proprietary details are masked to protect IP. 
          We are now seeking incubation from premier deep‑tech incubators, government R&D schemes, and strategic industry partnerships to begin lab validation.
        </p>

        <!-- Founder Note -->
        <p style="font-size: 0.9rem; color: #8b949e; margin-bottom: 24px;">
          Invented by <strong style="color: white;">Aman Prasad (17)</strong>
        </p>

        <!-- CTA Button -->
        <a href="#" onclick="document.querySelector('[data-section=team]').click(); return false;"
           style="display: inline-block; background: #b8860b; color: white; padding: 14px 36px; border-radius: 8px;
                  text-decoration: none; font-weight: 600; font-size: 1rem; transition: background 0.2s;">
          Meet the Team →
        </a>
      </div>
    </div>
  `;

  // Inject responsive styles for the intro page only
  if (!document.getElementById('intro-responsive-style')) {
    const style = document.createElement('style');
    style.id = 'intro-responsive-style';
    style.textContent = `
      @media (max-width: 600px) {
        /* Reduce padding and font sizes for small screens */
        #intro-section-outer {
          padding: 12px !important;
          margin: -12px !important;
          min-height: auto !important;
        }
        #intro-section-outer h1 {
          font-size: 1.8rem !important;
        }
        #intro-section-outer .intro-stats {
          gap: 12px !important;
        }
        #intro-section-outer .intro-stats > div {
          padding: 12px 16px !important;
          min-width: 100px !important;
        }
        #intro-section-outer .intro-stats .intro-stat-number {
          font-size: 1.4rem !important;
        }
        #intro-section-outer .intro-stat-label {
          font-size: 0.7rem !important;
        }
        #intro-section-outer p, #intro-section-outer a {
          font-size: 0.85rem !important;
        }
        #intro-section-outer .intro-para {
          font-size: 0.8rem !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

window.load_intro = load_intro;
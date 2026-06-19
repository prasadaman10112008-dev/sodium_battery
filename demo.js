// demo.js – Product Demo with zoom lightbox + cross‑origin download

function load_demo(mainContainer) {
  const defaultImg = "https://i.postimg.cc/pd3Py1HS/Untitled27-20260519200312.png";
  const defaultCaption = "Sodium Solid‑State Battery Cell Architecture";
  
  const imgSrc = localStorage.getItem('demoImage') || defaultImg;
  const caption = localStorage.getItem('demoCaption') || defaultCaption;
  
  mainContainer.innerHTML = `
    <section id="demo-section">
      <h2>Product Demo</h2>
      <p>Conceptual architecture illustration – proprietary implementation details intentionally excluded. Click the image to zoom.</p>

      <!-- Image container -->
      <div style="max-width:600px; margin:20px auto; text-align:center;">
        <img src="${imgSrc}" alt="Product Concept"
             style="width:100%; height:auto; display:block; border-radius:12px; box-shadow:0 4px 14px rgba(0,0,0,0.08); cursor:zoom-in;"
             id="demo-img"
             onerror="this.style.display='none';"
             onclick="window.openDemoLightbox('${imgSrc}')" />

        <!-- Download button (JavaScript‑driven to force download) -->
        <div style="margin-top:14px; display:flex; justify-content:center;">
          <button onclick="window.downloadDemoImage('${imgSrc}', 'NaS_Battery_Cell_Architecture.png')"
                  style="display:inline-flex; align-items:center; gap:6px;
                         background:var(--surface,#fff); color:var(--text,#333);
                         padding:8px 18px; border-radius:8px; font-size:0.85rem;
                         font-weight:500; text-decoration:none;
                         border:1px solid var(--border,#ddd);
                         box-shadow:0 2px 6px rgba(0,0,0,0.06);
                         cursor:pointer; transition:background 0.2s;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Image
          </button>
        </div>
      </div>

      <p id="demo-caption" style="font-style:italic; color:var(--text-muted); margin-top:12px; text-align:center;">${caption}</p>
      <p style="font-size:0.78rem; color:var(--text-muted); margin-top:6px; text-align:center;">
        Image credit: Aman Prasad. <em>Update via Admin Panel to change.</em>
      </p>
    </section>
  `;
  
  // ── Lightbox logic (attached globally to avoid duplication) ──
  if (!window._demoLightboxSetup) {
    window._demoLightboxSetup = true;
    
    window.openDemoLightbox = function(src) {
      // Remove existing lightbox if any
      const old = document.getElementById('demo-lightbox-overlay');
      if (old) old.remove();
      
      const overlay = document.createElement('div');
      overlay.id = 'demo-lightbox-overlay';
      overlay.style.cssText = `
        position: fixed; top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.88); z-index:10000;
        display: flex; align-items: center; justify-content: center;
        cursor: zoom-out;
      `;
      overlay.addEventListener('click', function(e) {
        if (e.target === overlay) overlay.remove();
      });
      
      const img = document.createElement('img');
      img.src = src;
      img.style.cssText = `
        max-width: 95%; max-height: 95%; object-fit: contain;
        border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);
      `;
      img.addEventListener('click', function(e) { e.stopPropagation(); });
      
      const closeBtn = document.createElement('span');
      closeBtn.innerHTML = '✕';
      closeBtn.style.cssText = `
        position: absolute; top: 20px; right: 30px;
        color: #fff; font-size: 2rem; font-weight: 700;
        cursor: pointer; z-index: 10001; user-select: none;
      `;
      closeBtn.addEventListener('click', function() { overlay.remove(); });
      
      overlay.appendChild(closeBtn);
      overlay.appendChild(img);
      document.body.appendChild(overlay);
    };
    
    // ── Cross‑origin download helper ──
    window.downloadDemoImage = async function(url, filename) {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        // Fallback: open in new tab
        window.open(url, '_blank');
      }
    };
  }
}
window.load_demo = load_demo;
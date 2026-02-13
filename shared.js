const link = document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = 'icons/heart.png?';
document.head.appendChild(link);

// ============ CUSTOM CURSOR ============
(function () {
    const current = location.pathname.split('/').pop() || 'index.html';
    const style = document.createElement('style');
    if (current === 'cat.html') {
        style.textContent = `* { cursor: url('https://cdn.cursors-4u.net/css-previews/animated-nyan-cat-sparkly-f903ac5f-css.webp') 3 0, auto !important; }`;
    } else {
        style.textContent = `* { cursor: url('https://cdn.cursors-4u.net/css-previews/cool-pink-pointer-glitter-676b95b5-css.webp') 0 0, auto !important; }`
    }
    document.head.appendChild(style);
})();

// ============ NAVIGATION BUTTONS ============
(function () {
    const pages = ['index.html', 'celebration.html', 'character.html', 'cat.html', 'date-settings.html', 'date-scene.html'];
    const current = location.pathname.split('/').pop() || 'index.html';
    const idx = pages.indexOf(current);

    // No nav on index page
    if (idx <= 0) return;

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
        .nav-top {
            position: fixed;
            top: 16px;
            left: 16px;
            display: flex;
            gap: 8px;
            z-index: 100;
        }
        .nav-top-btn {
            width: 44px;
            height: 44px;
            background: #4a90e2;
            border: 4px solid #000;
            box-shadow: 4px 4px 0 rgba(0,0,0,0.3);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.1s;
            image-rendering: pixelated;
            padding: 0;
        }
        .nav-top-btn:hover {
            transform: translate(-2px, -2px);
            box-shadow: 6px 6px 0 rgba(0,0,0,0.3);
        }
        .nav-top-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
        }
        .nav-top-btn img {
            width: 22px;
            height: 22px;
            image-rendering: pixelated;
            image-rendering: -moz-crisp-edges;
            image-rendering: crisp-edges;
            filter: brightness(0) invert(1);
        }
    `;
    document.head.appendChild(style);

    const nav = document.createElement('div');
    nav.className = 'nav-top';

    // Home button
    const homeBtn = document.createElement('button');
    homeBtn.className = 'nav-top-btn';
    homeBtn.title = 'Home';
    homeBtn.innerHTML = '<img src="icons/home-button.png" alt="Home">';
    homeBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
    nav.appendChild(homeBtn);

    // Back button
    const backBtn = document.createElement('button');
    backBtn.className = 'nav-top-btn';
    backBtn.title = 'Back';
    backBtn.innerHTML = '<img src="icons/chevron-left.png" alt="Back">';
    backBtn.addEventListener('click', () => { window.location.href = pages[idx - 1]; });
    nav.appendChild(backBtn);

    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(nav);
    });
})();

/**
 * AZUL — History Page Logic
 */

(function () {
  'use strict';

  let currentLang = 'fr';
  const LANG_CYCLE = ['fr', 'en', 'tfn'];
  const LANG_LABELS = { fr: 'Français', en: 'English', tfn: 'ⵜⵉⴼⵉⵏⴰⵖ' };

  const langToggle = document.getElementById('lang-toggle');

  const UI = {
    fr: {
      heroEyebrow: 'Histoire du peuple amazigh',
      heroTagline: 'Des premiers hommes libres aux combats d\'aujourd\'hui,<br>une histoire de 10 000 ans.',
      footerTagline: 'Les symboles sont la parole d\'un peuple<br>qui n\'a jamais cessé de s\'exprimer.',
      navSymbols: 'Symboles',
      navHistory: 'Histoire',
      eras: ['Origines & Antiquit\u00e9', 'P\u00e9riode m\u00e9di\u00e9vale', 'P\u00e9riode moderne', 'Renaissance identitaire']
    },
    en: {
      heroEyebrow: 'History of the Amazigh People',
      heroTagline: 'From the first free people to today\'s struggles,<br>a 10,000-year history.',
      footerTagline: 'Symbols are the voice of a people<br>who never stopped expressing themselves.',
      navSymbols: 'Symbols',
      navHistory: 'History',
      eras: ['Origins & Antiquity', 'Medieval Period', 'Modern Period', 'Identity Renaissance']
    },
    tfn: {
      heroEyebrow: 'ⴰⵎⴻⵣⵔⵓⵢ ⵏ ⵉⵎⴰⵣⵉⵖⴻⵏ',
      heroTagline: 'ⵙⴻⴳ ⵉⵎⴰⵣⵉⵖⴻⵏ ⵉⵎⴻⵣⵡⵓⵔⴰ ⴰⵔ ⵉⵎⵏⵖⵉⵡⴻⵏ ⵏ ⵓⵙⵙⴰ,<br>ⴰⵎⴻⵣⵔⵓⵢ ⵏ 10 000 ⵏ ⵓⵙⴻⴳⴳⴰⵙ.',
      footerTagline: 'ⴰⵣⵓⵍ ⵉⵜⵜⵓⴳⵔⴰⵏ ⴳ ⵓⵥⵕⵓ,<br>ⵉⵜⵜⵓⵣⴹⴰⵏ ⴳ ⵓⵣⴻⵟⵟⴰ.',
      navSymbols: 'ⵉⵣⴰⵎⵓⵍⴻⵏ',
      navHistory: 'ⴰⵎⴻⵣⵔⵓⵢ',
      eras: ['ⵉⵥⵓⵕⴰⵏ ⴷ ⵜⴰⵇⴱⵓⵔⵜ', 'ⵜⴰⵍⵍⵉⵜ ⵜⴰⵏⴰⵎⵎⴰⵙⵜ', 'ⵜⴰⵍⵍⵉⵜ ⵜⴰⵜⵔⴰⵔⵜ', 'ⵜⴰⵍⴰⵍⵉⵜ ⵏ ⵜⵎⴰⴳⵉⵜ']
    }
  };

  function nextLang() {
    const idx = LANG_CYCLE.indexOf(currentLang);
    return LANG_CYCLE[(idx + 1) % LANG_CYCLE.length];
  }

  function updatePage() {
    const t = UI[currentLang];

    // Hero
    const title = document.getElementById('header-title');
    const subtitle = document.getElementById('header-subtitle');
    if (currentLang === 'tfn') {
      title.textContent = 'ⴰⵎⴻⵣⵔⵓⵢ';
      title.classList.add('tifinagh');
      subtitle.textContent = 'AMEZRUY';
      subtitle.classList.remove('tifinagh');
    } else {
      title.textContent = 'AMEZRUY';
      title.classList.remove('tifinagh');
      subtitle.textContent = 'ⴰⵎⴻⵣⵔⵓⵢ';
      subtitle.classList.add('tifinagh');
    }

    document.getElementById('hero-eyebrow').textContent = t.heroEyebrow;
    document.getElementById('hero-tagline').innerHTML = t.heroTagline;

    // Nav
    const navSymbols = document.getElementById('nav-symbols');
    const navHistory = document.getElementById('nav-history');
    if (navSymbols) navSymbols.textContent = t.navSymbols;
    if (navHistory) navHistory.textContent = t.navHistory;

    // Footer
    const footerTagline = document.getElementById('footer-tagline');
    if (footerTagline) footerTagline.innerHTML = t.footerTagline;

    // Timeline content
    document.querySelectorAll('[data-' + currentLang + ']').forEach(el => {
      const val = el.getAttribute('data-' + currentLang);
      if (el.classList.contains('timeline__desc') || el.classList.contains('timeline__title')) {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });

    // Era titles
    const eras = document.querySelectorAll('.timeline__era');
    eras.forEach((era, i) => {
      if (t.eras[i]) era.textContent = t.eras[i];
    });

    // Lang toggle
    langToggle.textContent = LANG_LABELS[nextLang()];
  }

  function toggleLang() {
    currentLang = nextLang();
    updatePage();
  }

  langToggle.addEventListener('click', toggleLang);

  // Init
  langToggle.textContent = LANG_LABELS[nextLang()];
})();

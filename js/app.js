/**
 * AZUL — App Logic
 */

(function () {
  'use strict';

  let searchQuery = '';
  let currentLang = 'fr';
  const LANG_CYCLE = ['fr', 'en', 'tfn'];

  const grid = document.getElementById('symbol-grid');
  const alphabetGrid = document.getElementById('alphabet-grid');
  const searchInput = document.getElementById('search-input');
  const modalOverlay = document.getElementById('modal-overlay');
  const langToggle = document.getElementById('lang-toggle');
  const symbolCount = document.getElementById('symbol-count');

  // ===== UI Strings =====
  const UI = {
    fr: {
      eyebrow: 'Symboles & Alphabet Amazigh',
      tagline: 'Les symboles sont la parole d\'un peuple<br>qui n\'a jamais cessé de s\'exprimer.',
      search: 'Rechercher...',
      symbolCount: (n) => `${n} symbole${n > 1 ? 's' : ''}`,
      emptyState: 'Aucun symbole trouvé',
      alphabetTitle: 'Tifinagh',
      alphabetEyebrow: '33 lettres',
      pronunciation: 'Prononciation',
      close: 'Fermer',
      footerTagline: 'Les symboles sont la parole d\'un peuple<br>qui n\'a jamais cessé de s\'exprimer.',
      navSymbols: 'Symboles',
      navHistory: 'Histoire'
    },
    en: {
      eyebrow: 'Amazigh Symbols & Alphabet',
      tagline: 'Symbols are the voice of a people<br>who never stopped expressing themselves.',
      search: 'Search...',
      symbolCount: (n) => `${n} symbol${n > 1 ? 's' : ''}`,
      emptyState: 'No symbols found',
      alphabetTitle: 'Tifinagh',
      alphabetEyebrow: '33 letters',
      pronunciation: 'Pronunciation',
      close: 'Close',
      footerTagline: 'Symbols are the voice of a people<br>who never stopped expressing themselves.',
      navSymbols: 'Symbols',
      navHistory: 'History'
    },
    tfn: {
      eyebrow: 'ⵉⵣⴰⵎⵓⵍⴻⵏ ⴷ ⵓⴳⴻⵎⵎⴰⵢ ⴰⵎⴰⵣⵉⵖ',
      tagline: 'ⴰⵣⵓⵍ ⵉⵜⵜⵓⴳⵔⴰⵏ ⴳ ⵓⵥⵕⵓ,<br>ⵉⵜⵜⵓⵣⴹⴰⵏ ⴳ ⵓⵣⴻⵟⵟⴰ.',
      search: 'ⵔⵣⵓ...',
      symbolCount: (n) => `${n} ⵓⵏⵓⵖ`,
      emptyState: 'ⵓⵔ ⵉⵍⵍⵉ ⵓⵏⵓⵖ',
      alphabetTitle: 'ⵜⵉⴼⵉⵏⴰⵖ',
      alphabetEyebrow: '33 ⵏ ⵜⵙⴻⴽⴽⵉⵍⵉⵏ',
      pronunciation: 'ⴰⵙⵙⴰⵖ',
      close: 'ⵔⴳⵍ',
      footerTagline: 'ⴰⵣⵓⵍ ⵉⵜⵜⵓⴳⵔⴰⵏ ⴳ ⵓⵥⵕⵓ,<br>ⵉⵜⵜⵓⵣⴹⴰⵏ ⴳ ⵓⵣⴻⵟⵟⴰ.',
      navSymbols: 'ⵉⵣⴰⵎⵓⵍⴻⵏ',
      navHistory: 'ⴰⵎⴻⵣⵔⵓⵢ'
    }
  };

  const LANG_LABELS = { fr: 'Français', en: 'English', tfn: 'ⵜⵉⴼⵉⵏⴰⵖ' };

  // ===== Helpers =====
  function t() { return UI[currentLang]; }

  function getSymbolName(s) {
    if (currentLang === 'en') return s.nameEn || s.name;
    if (currentLang === 'tfn') return s.tifinagh;
    return s.name;
  }

  function getSymbolSub(s) {
    if (currentLang === 'en') return s.tifinagh;
    if (currentLang === 'tfn') return s.meaningTifinagh;
    return s.tifinagh;
  }

  function getSymbolMeaning(s) {
    if (currentLang === 'en') return s.meaningEn || s.meaning;
    if (currentLang === 'tfn') return s.meaningTifinagh;
    return s.meaning;
  }

  function getSymbolMeaningAlt(s) {
    if (currentLang === 'en') return s.meaningTifinagh;
    if (currentLang === 'tfn') return s.meaning;
    return s.meaningTifinagh;
  }

  function getSymbolDesc(s) {
    if (currentLang === 'en') return s.descriptionEn || s.description;
    if (currentLang === 'tfn') return s.descriptionTifinagh || s.description;
    return s.description;
  }

  // ===== Search =====
  function getFilteredSymbols() {
    if (!searchQuery) return SYMBOLS;
    const q = searchQuery.toLowerCase();
    return SYMBOLS.filter(s =>
      s.name.toLowerCase().includes(q) ||
      (s.nameEn && s.nameEn.toLowerCase().includes(q)) ||
      s.tifinagh.includes(q) ||
      s.meaning.toLowerCase().includes(q) ||
      (s.meaningEn && s.meaningEn.toLowerCase().includes(q))
    );
  }

  function getFilteredAlphabet() {
    if (!searchQuery) return ALPHABET;
    const q = searchQuery.toLowerCase();
    return ALPHABET.filter(l =>
      l.letter.includes(q) ||
      l.name.toLowerCase().includes(q) ||
      l.translit.includes(q)
    );
  }

  // ===== Render =====
  function renderGrid() {
    const filtered = getFilteredSymbols();

    symbolCount.textContent = t().symbolCount(filtered.length);

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">${t().emptyState}</div>`;
    } else {
      grid.innerHTML = filtered.map(s => {
        const name = getSymbolName(s);
        const sub = getSymbolSub(s);
        return `<div class="card" data-id="${s.id}" role="button" tabindex="0" aria-label="${s.name}">
          <div class="card__svg-wrap">${SymbolSVG.get(s.svgId)}</div>
          <div class="card__name">${name}</div>
          <div class="card__tifinagh">${sub}</div>
        </div>`;
      }).join('');
    }

    renderAlphabet();
  }

  function renderAlphabet() {
    const filtered = getFilteredAlphabet();
    const section = document.querySelector('.alphabet-section');

    if (filtered.length === 0 && searchQuery) {
      section.style.display = 'none';
      return;
    }
    section.style.display = '';

    const titleEl = document.getElementById('alphabet-title');
    titleEl.textContent = t().alphabetTitle;

    const eyebrowEl = document.querySelector('.section-header__eyebrow');
    if (eyebrowEl) eyebrowEl.textContent = t().alphabetEyebrow;

    alphabetGrid.innerHTML = filtered.map(l =>
      `<div class="alpha-card" data-letter="${l.letter}" role="button" tabindex="0">
        <div class="alpha-card__letter tifinagh">${l.letter}</div>
        <div class="alpha-card__translit">${l.translit}</div>
        <div class="alpha-card__name">${l.name}</div>
      </div>`
    ).join('');
  }

  // ===== Modal — Symbols =====
  function openModal(symbolId) {
    const s = SYMBOLS.find(sym => sym.id === symbolId);
    if (!s) return;

    const title = getSymbolName(s);
    const subtitle = currentLang === 'tfn' ? s.name : s.tifinagh;
    const meaning = getSymbolMeaning(s);
    const meaningAlt = getSymbolMeaningAlt(s);
    const desc = getSymbolDesc(s);

    modalOverlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal__close" aria-label="${t().close}">&times;</button>
        <div class="modal__svg-wrap">${SymbolSVG.get(s.svgId)}</div>
        <h2 class="modal__title">${title}</h2>
        <p class="modal__tifinagh ${currentLang === 'tfn' ? '' : 'tifinagh'}">${subtitle}</p>
        <div class="modal__meaning">
          ${meaning}
          <div class="modal__meaning-tifinagh ${currentLang === 'tfn' ? '' : 'tifinagh'}">${meaningAlt}</div>
        </div>
        <p class="modal__description">${desc}</p>
      </div>
    `;
    showModal();
  }

  // ===== Modal — Letters =====
  function openLetterModal(letter) {
    const l = ALPHABET.find(a => a.letter === letter);
    if (!l) return;

    modalOverlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal__close" aria-label="${t().close}">&times;</button>
        <div class="modal__letter-large tifinagh">${l.letter}</div>
        <h2 class="modal__title">${l.name}</h2>
        <p class="modal__tifinagh">${l.translit}</p>
        <div class="modal__meaning">
          ${t().pronunciation}
          <div class="modal__meaning-tifinagh">${l.phonetic}</div>
        </div>
      </div>
    `;
    showModal();
  }

  function showModal() {
    modalOverlay.classList.add('modal-overlay--visible');
    document.body.style.overflow = 'hidden';
    modalOverlay.querySelector('.modal__close').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  function closeModal() {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.style.overflow = '';
  }

  // ===== Language =====
  function nextLang() {
    const idx = LANG_CYCLE.indexOf(currentLang);
    return LANG_CYCLE[(idx + 1) % LANG_CYCLE.length];
  }

  function toggleLang() {
    currentLang = nextLang();
    langToggle.textContent = LANG_LABELS[nextLang()];

    const title = document.getElementById('header-title');
    const subtitle = document.getElementById('header-subtitle');
    const eyebrow = document.getElementById('hero-eyebrow');
    const tagline = document.getElementById('hero-tagline');

    if (currentLang === 'tfn') {
      title.textContent = 'ⴰⵣⵓⵍ';
      title.classList.add('tifinagh');
      subtitle.textContent = 'AZUL';
      subtitle.classList.remove('tifinagh');
    } else {
      title.textContent = 'AZUL';
      title.classList.remove('tifinagh');
      subtitle.textContent = 'ⴰⵣⵓⵍ';
      subtitle.classList.add('tifinagh');
    }

    eyebrow.textContent = t().eyebrow;
    tagline.innerHTML = t().tagline;
    searchInput.placeholder = t().search;

    // Update footer
    const footerTagline = document.getElementById('footer-tagline');
    if (footerTagline) footerTagline.innerHTML = t().footerTagline;

    // Update nav links
    const navSymbols = document.getElementById('nav-symbols');
    const navHistory = document.getElementById('nav-history');
    if (navSymbols) navSymbols.textContent = t().navSymbols;
    if (navHistory) navHistory.textContent = t().navHistory;

    renderGrid();
  }

  // ===== Events =====
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderGrid();
  });

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card) openModal(card.dataset.id);
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const card = e.target.closest('.card');
      if (card) openModal(card.dataset.id);
    }
  });

  alphabetGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.alpha-card');
    if (card) openLetterModal(card.dataset.letter);
  });

  alphabetGrid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const card = e.target.closest('.alpha-card');
      if (card) openLetterModal(card.dataset.letter);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  langToggle.addEventListener('click', toggleLang);

  // ===== Init =====
  langToggle.textContent = LANG_LABELS[nextLang()];
  renderGrid();
})();

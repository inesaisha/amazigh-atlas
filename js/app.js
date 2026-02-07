/**
 * AZUL — App Logic
 */

(function () {
  'use strict';

  let searchQuery = '';
  let currentLang = 'fr';

  const grid = document.getElementById('symbol-grid');
  const alphabetGrid = document.getElementById('alphabet-grid');
  const searchInput = document.getElementById('search-input');
  const modalOverlay = document.getElementById('modal-overlay');
  const langToggle = document.getElementById('lang-toggle');
  const symbolCount = document.getElementById('symbol-count');

  // ===== Search =====
  function getFilteredSymbols() {
    if (!searchQuery) return SYMBOLS;
    const q = searchQuery.toLowerCase();
    return SYMBOLS.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.tifinagh.includes(q) ||
      s.meaning.toLowerCase().includes(q)
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

    symbolCount.textContent = `${filtered.length} symbole${filtered.length > 1 ? 's' : ''}`;

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">
        ${currentLang === 'tfn' ? 'ⵓⵔ ⵉⵍⵍⵉ ⵓⵏⵓⵖ' : 'Aucun symbole trouvé'}
      </div>`;
    } else {
      grid.innerHTML = filtered.map(s => {
        const name = currentLang === 'tfn' ? s.tifinagh : s.name;
        const sub = currentLang === 'tfn' ? s.meaningTifinagh : s.tifinagh;
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
    titleEl.textContent = currentLang === 'tfn' ? 'ⵜⵉⴼⵉⵏⴰⵖ' : 'Tifinagh';

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

    const title = currentLang === 'tfn' ? s.tifinagh : s.name;
    const subtitle = currentLang === 'tfn' ? s.name : s.tifinagh;
    const meaning = currentLang === 'tfn' ? s.meaningTifinagh : s.meaning;
    const meaningAlt = currentLang === 'tfn' ? s.meaning : s.meaningTifinagh;
    const desc = currentLang === 'tfn' ? (s.descriptionTifinagh || s.description) : s.description;

    modalOverlay.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <button class="modal__close" aria-label="Fermer">&times;</button>
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
        <button class="modal__close" aria-label="Fermer">&times;</button>
        <div class="modal__letter-large tifinagh">${l.letter}</div>
        <h2 class="modal__title">${l.name}</h2>
        <p class="modal__tifinagh">${l.translit}</p>
        <div class="modal__meaning">
          ${currentLang === 'tfn' ? 'ⴰⵙⵙⴰⵖ' : 'Prononciation'}
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
  function toggleLang() {
    currentLang = currentLang === 'fr' ? 'tfn' : 'fr';
    langToggle.textContent = currentLang === 'fr' ? 'ⵜⵉⴼⵉⵏⴰⵖ' : 'Français';

    const title = document.getElementById('header-title');
    const subtitle = document.getElementById('header-subtitle');
    const eyebrow = document.getElementById('hero-eyebrow');
    const tagline = document.getElementById('hero-tagline');

    if (currentLang === 'tfn') {
      title.textContent = 'ⴰⵣⵓⵍ';
      title.classList.add('tifinagh');
      subtitle.textContent = 'AZUL';
      subtitle.classList.remove('tifinagh');
      eyebrow.textContent = 'ⵉⵣⴰⵎⵓⵍⴻⵏ ⴷ ⵓⴳⴻⵎⵎⴰⵢ ⴰⵎⴰⵣⵉⵖ';
      tagline.innerHTML = 'ⴰⵣⵓⵍ ⵉⵜⵜⵓⴳⵔⴰⵏ ⴳ ⵓⵥⵕⵓ,<br>ⵉⵜⵜⵓⵣⴹⴰⵏ ⴳ ⵓⵣⴻⵟⵟⴰ.';
      searchInput.placeholder = 'ⵔⵣⵓ...';
    } else {
      title.textContent = 'AZUL';
      title.classList.remove('tifinagh');
      subtitle.textContent = 'ⴰⵣⵓⵍ';
      subtitle.classList.add('tifinagh');
      eyebrow.textContent = 'Symboles & Alphabet Amazigh';
      tagline.innerHTML = 'Les symboles sont la parole d\'un peuple<br>qui n\'a jamais cessé de s\'exprimer.';
      searchInput.placeholder = 'Rechercher...';
    }

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
  renderGrid();
})();

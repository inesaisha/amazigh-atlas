/**
 * Amazigh Symbol SVG Drawing Functions
 * Each function returns an SVG string for the given symbol.
 * Drawn with stroke color var(--dark) or passed color.
 */

const SymbolSVG = {
  yaz(color = '#2A1F14') {
    // Yaz (ⵣ) — the free man symbol, resembling a "Z" with a vertical line
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="25" y1="15" x2="75" y2="15" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <line x1="75" y1="15" x2="25" y2="85" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <line x1="25" y1="85" x2="75" y2="85" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <line x1="50" y1="5" x2="50" y2="95" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
    </svg>`;
  },

  tanit(color = '#2A1F14') {
    // Tanit — goddess symbol: triangle body with circle head, horizontal arms
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="18" r="10" fill="none" stroke="${color}" stroke-width="4"/>
      <line x1="20" y1="38" x2="80" y2="38" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="28" x2="50" y2="38" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <polygon points="50,38 22,92 78,92" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
    </svg>`;
  },

  losange(color = '#2A1F14') {
    // Losange — diamond / femininity symbol, often with inner dot
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,8 92,50 50,92 8,50" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
      <polygon points="50,28 72,50 50,72 28,50" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="50" cy="50" r="4" fill="${color}"/>
    </svg>`;
  },

  chevrons(color = '#2A1F14') {
    // Chevrons — water symbol, zigzag/wave lines
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polyline points="10,25 30,10 50,25 70,10 90,25" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
      <polyline points="10,50 30,35 50,50 70,35 90,50" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
      <polyline points="10,75 30,60 50,75 70,60 90,75" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
      <polyline points="10,95 30,80 50,95 70,80 90,95" fill="none" stroke="${color}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
    </svg>`;
  },

  oeil(color = '#2A1F14') {
    // Oeil — evil eye protection, eye shape with circle pupil
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,50 Q50,10 90,50 Q50,90 10,50 Z" fill="none" stroke="${color}" stroke-width="4"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="50" cy="50" r="6" fill="${color}"/>
    </svg>`;
  },

  serpent(color = '#2A1F14') {
    // Serpent/Zigzag — protection symbol, continuous zigzag
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polyline points="10,20 25,80 40,20 55,80 70,20 85,80" fill="none" stroke="${color}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>
      <circle cx="85" cy="80" r="5" fill="${color}"/>
    </svg>`;
  },

  croix(color = '#2A1F14') {
    // Croix berbère — cross with diamond ends (Southern Cross / Agadez cross style)
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="10" x2="50" y2="90" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="10" y1="50" x2="90" y2="50" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <polygon points="50,5 57,15 50,25 43,15" fill="${color}"/>
      <polygon points="50,75 57,85 50,95 43,85" fill="${color}"/>
      <polygon points="5,50 15,43 25,50 15,57" fill="${color}"/>
      <polygon points="75,50 85,43 95,50 85,57" fill="${color}"/>
      <circle cx="50" cy="50" r="6" fill="none" stroke="${color}" stroke-width="3"/>
    </svg>`;
  },

  fibule(color = '#2A1F14') {
    // Fibule — brooch, triangular shape with pin
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 10,80 90,80" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
      <line x1="50" y1="10" x2="50" y2="95" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="50" cy="10" r="5" fill="${color}"/>
      <circle cx="10" cy="80" r="4" fill="${color}"/>
      <circle cx="90" cy="80" r="4" fill="${color}"/>
      <line x1="30" y1="45" x2="70" y2="45" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="22" y1="62" x2="78" y2="62" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
  },

  khamsa(color = '#2A1F14') {
    // Khamsa — hand of Fatima / protective hand
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,55 L30,25 Q30,18 35,18 Q40,18 40,25 L40,42" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M40,42 L40,15 Q40,8 45,8 Q50,8 50,15 L50,40" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M50,40 L50,12 Q50,5 55,5 Q60,5 60,12 L60,42" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M60,42 L60,18 Q60,11 65,11 Q70,11 70,18 L70,55" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M30,55 Q30,90 50,92 Q70,90 70,55" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="50" cy="62" r="10" fill="none" stroke="${color}" stroke-width="3"/>
      <circle cx="50" cy="62" r="3.5" fill="${color}"/>
    </svg>`;
  },

  etoile(color = '#2A1F14') {
    // Etoile 8 branches — 8-pointed star, guidance symbol
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      ${(() => {
        const cx = 50, cy = 50, outer = 44, inner = 20;
        const points = [];
        for (let i = 0; i < 16; i++) {
          const angle = (i * Math.PI * 2) / 16 - Math.PI / 2;
          const r = i % 2 === 0 ? outer : inner;
          points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
        }
        return `<polygon points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="3.5" stroke-linejoin="round"/>`;
      })()}
      <circle cx="50" cy="50" r="5" fill="${color}"/>
    </svg>`;
  },

  peigne(color = '#2A1F14') {
    // Peigne — comb, beauty/femininity symbol
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="70" height="20" rx="4" fill="none" stroke="${color}" stroke-width="4"/>
      <line x1="25" y1="35" x2="25" y2="88" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="38" y1="35" x2="38" y2="88" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="35" x2="50" y2="88" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="62" y1="35" x2="62" y2="88" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="75" y1="35" x2="75" y2="88" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    </svg>`;
  },

  ciseaux(color = '#2A1F14') {
    // Ciseaux — scissors, protection from evil, cutting negativity
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="45" x2="20" y2="85" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="45" x2="80" y2="85" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="16" cy="88" r="8" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="84" cy="88" r="8" fill="none" stroke="${color}" stroke-width="3.5"/>
      <line x1="50" y1="45" x2="50" y2="8" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="20" x2="60" y2="20" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`;
  },

  lezard(color = '#2A1F14') {
    // Lézard — lizard, seeker of light and warmth
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="20" rx="12" ry="8" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="45" cy="18" r="2" fill="${color}"/>
      <circle cx="55" cy="18" r="2" fill="${color}"/>
      <path d="M50,28 Q50,50 50,75" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M50,35 L25,48" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M25,48 L20,42 M25,48 L18,50 M25,48 L22,55" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50,35 L75,48" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M75,48 L80,42 M75,48 L82,50 M75,48 L78,55" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50,60 L28,73" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M28,73 L23,68 M28,73 L21,75 M28,73 L25,80" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50,60 L72,73" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M72,73 L77,68 M72,73 L79,75 M72,73 L75,80" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50,75 Q45,90 40,95" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`;
  },

  poisson(color = '#2A1F14') {
    // Poisson — fish, abundance and prosperity
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M80,50 Q55,20 20,50 Q55,80 80,50 Z" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
      <polygon points="80,50 95,35 95,65" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="32" cy="47" r="4" fill="${color}"/>
      <line x1="45" y1="38" x2="45" y2="62" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <line x1="55" y1="35" x2="55" y2="65" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <line x1="65" y1="38" x2="65" y2="62" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </svg>`;
  },

  arbre(color = '#2A1F14') {
    // Arbre de vie — tree of life, lineage and family
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="95" x2="50" y2="30" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <line x1="50" y1="65" x2="25" y2="45" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="65" x2="75" y2="45" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="30" y2="30" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="70" y2="30" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="50" y1="38" x2="35" y2="18" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="38" x2="65" y2="18" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="25" cy="45" r="5" fill="${color}" opacity="0.3"/>
      <circle cx="75" cy="45" r="5" fill="${color}" opacity="0.3"/>
      <circle cx="30" cy="30" r="5" fill="${color}" opacity="0.3"/>
      <circle cx="70" cy="30" r="5" fill="${color}" opacity="0.3"/>
      <circle cx="35" cy="18" r="4" fill="${color}" opacity="0.3"/>
      <circle cx="65" cy="18" r="4" fill="${color}" opacity="0.3"/>
      <circle cx="50" cy="12" r="5" fill="${color}" opacity="0.3"/>
      <line x1="50" y1="30" x2="50" y2="12" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="38" y1="90" x2="50" y2="80" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
      <line x1="62" y1="90" x2="50" y2="80" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </svg>`;
  },

  triangle(color = '#2A1F14') {
    // Triangle — fertility, femininity, womb
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,8 8,88 92,88" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
      <polygon points="50,35 30,75 70,75" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="50" cy="62" r="4" fill="${color}"/>
    </svg>`;
  },

  spirale(color = '#2A1F14') {
    // Spirale — cycle of life, eternity
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,50 C50,44 56,38 62,38 C74,38 80,50 80,58 C80,74 66,84 50,84 C28,84 16,66 16,50 C16,26 34,10 56,10" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
    </svg>`;
  },

  soleil(color = '#2A1F14') {
    // Soleil — sun, life, energy
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="18" fill="none" stroke="${color}" stroke-width="4"/>
      <circle cx="50" cy="50" r="6" fill="${color}"/>
      ${[0,45,90,135,180,225,270,315].map(a => {
        const rad = a * Math.PI / 180;
        const x1 = 50 + 24 * Math.cos(rad), y1 = 50 + 24 * Math.sin(rad);
        const x2 = 50 + 38 * Math.cos(rad), y2 = 50 + 38 * Math.sin(rad);
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>`;
      }).join('')}
    </svg>`;
  },

  lune(color = '#2A1F14') {
    // Lune / Croissant — moon, femininity, cycles, renewal
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M62,10 A40,40 0 1,1 62,90 A28,28 0 1,0 62,10 Z" fill="none" stroke="${color}" stroke-width="4"/>
      <circle cx="30" cy="35" r="2" fill="${color}" opacity="0.4"/>
      <circle cx="22" cy="55" r="1.5" fill="${color}" opacity="0.4"/>
      <circle cx="35" cy="65" r="2" fill="${color}" opacity="0.4"/>
    </svg>`;
  },

  oiseau(color = '#2A1F14') {
    // Oiseau / Hirondelle — bird, freedom, spiritual messenger
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,40 Q30,20 5,25" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M50,40 Q70,20 95,25" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M50,40 L50,70" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="50" cy="36" r="8" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="48" cy="34" r="2" fill="${color}"/>
      <line x1="58" y1="36" x2="65" y2="34" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50,70 L38,92" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,70 L62,92" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,55 Q35,48 25,55" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,55 Q65,48 75,55" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
  },

  palmier(color = '#2A1F14') {
    // Palmier — palm tree, fertility, wealth, mother
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="95" x2="50" y2="35" stroke="${color}" stroke-width="5" stroke-linecap="round"/>
      <path d="M50,35 Q30,15 10,20" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M50,35 Q70,15 90,20" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M50,35 Q25,25 8,35" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,35 Q75,25 92,35" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,35 Q40,10 50,5" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,35 Q60,10 50,5" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="42" cy="85" r="2.5" fill="${color}" opacity="0.4"/>
      <circle cx="58" cy="88" r="2.5" fill="${color}" opacity="0.4"/>
      <circle cx="50" cy="82" r="2.5" fill="${color}" opacity="0.4"/>
    </svg>`;
  },

  belier(color = '#2A1F14') {
    // Bélier — ram, physical strength, life, generosity
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="55" r="20" fill="none" stroke="${color}" stroke-width="4"/>
      <circle cx="44" cy="52" r="2.5" fill="${color}"/>
      <path d="M30,50 Q15,50 12,35 Q10,20 22,15 Q30,12 32,22" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M70,50 Q85,50 88,35 Q90,20 78,15 Q70,12 68,22" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="38" y1="73" x2="35" y2="92" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="62" y1="73" x2="65" y2="92" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`;
  },

  scorpion(color = '#2A1F14') {
    // Scorpion — protection, defense, resilience
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="60" rx="15" ry="10" fill="none" stroke="${color}" stroke-width="3.5"/>
      <path d="M50,50 Q50,30 45,20 Q42,12 48,8" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="48" cy="8" r="3" fill="${color}"/>
      <path d="M35,58 Q20,50 12,55" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M12,55 L6,50" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M12,55 L6,60" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M65,58 Q80,50 88,55" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M88,55 L94,50" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M88,55 L94,60" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="40" y1="70" x2="35" y2="88" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="50" y1="70" x2="50" y2="90" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="60" y1="70" x2="65" y2="88" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
  },

  grenouille(color = '#2A1F14') {
    // Grenouille — frog, magic, fertility
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="45" rx="22" ry="18" fill="none" stroke="${color}" stroke-width="4"/>
      <circle cx="38" cy="28" r="8" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="62" cy="28" r="8" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="38" cy="28" r="3" fill="${color}"/>
      <circle cx="62" cy="28" r="3" fill="${color}"/>
      <path d="M42,50 Q50,56 58,50" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M28,52 L12,70 L18,70 L22,65 L26,72 L30,65" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M72,52 L88,70 L82,70 L78,65 L74,72 L70,65" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M40,62 L32,85 L38,82 L42,88 L46,82 L50,85" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M60,62 L68,85 L62,82 L58,88 L54,82 L50,85" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  araignee(color = '#2A1F14') {
    // Araignée — spider, fertility, weaving, magical rites
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="42" r="10" fill="none" stroke="${color}" stroke-width="3.5"/>
      <ellipse cx="50" cy="60" rx="12" ry="14" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="46" cy="40" r="2" fill="${color}"/>
      <circle cx="54" cy="40" r="2" fill="${color}"/>
      <path d="M40,38 Q25,25 10,15" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M60,38 Q75,25 90,15" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M38,42 Q22,40 8,35" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M62,42 Q78,40 92,35" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M38,55 Q22,60 8,62" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M62,55 Q78,60 92,62" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M40,68 Q28,78 15,88" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M60,68 Q72,78 85,88" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
  },

  sablier(color = '#2A1F14') {
    // Sablier — hourglass, time, balance, life cycles
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="10" x2="80" y2="10" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="20" y1="90" x2="80" y2="90" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="20" y1="10" x2="50" y2="50" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="80" y1="10" x2="50" y2="50" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="20" y2="90" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="50" x2="80" y2="90" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="50" cy="50" r="4" fill="${color}"/>
      <line x1="35" y1="75" x2="65" y2="75" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.4"/>
    </svg>`;
  },

  lion(color = '#2A1F14') {
    // Lion — strength, leadership, courage
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="42" r="25" fill="none" stroke="${color}" stroke-width="3" stroke-dasharray="4,3"/>
      <circle cx="50" cy="42" r="16" fill="none" stroke="${color}" stroke-width="4"/>
      <circle cx="44" cy="39" r="2.5" fill="${color}"/>
      <circle cx="56" cy="39" r="2.5" fill="${color}"/>
      <path d="M44,48 Q50,53 56,48" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <polygon points="50,43 48,47 52,47" fill="${color}"/>
      <line x1="38" y1="65" x2="34" y2="88" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="62" y1="65" x2="66" y2="88" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M50,58 L50,72 Q50,80 58,85" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="61" cy="85" r="3" fill="${color}" opacity="0.5"/>
    </svg>`;
  },

  chameau(color = '#2A1F14') {
    // Chameau — camel, endurance, desert survival
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M30,55 Q30,35 40,30 Q45,28 45,35 Q45,40 50,38 Q55,36 55,30 Q55,25 60,25 Q68,25 70,35 Q72,42 70,55" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="30" y1="55" x2="70" y2="55" stroke="${color}" stroke-width="4"/>
      <path d="M60,25 Q62,18 58,14" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="64" cy="22" r="1.5" fill="${color}"/>
      <line x1="33" y1="55" x2="30" y2="85" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="40" y1="55" x2="37" y2="85" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="60" y1="55" x2="63" y2="85" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="67" y1="55" x2="70" y2="85" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`;
  },

  fleur(color = '#2A1F14') {
    // Fleur / Ouarida — flower, protection against evil eye
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="42" r="8" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="50" cy="42" r="3" fill="${color}"/>
      ${[0,60,120,180,240,300].map(a => {
        const rad = a * Math.PI / 180;
        const cx = 50 + 18 * Math.cos(rad), cy = 42 + 18 * Math.sin(rad);
        return `<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="${color}" stroke-width="3"/>`;
      }).join('')}
      <line x1="50" y1="60" x2="50" y2="92" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M50,75 Q38,68 30,72" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,82 Q62,76 68,80" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
  },

  montagne(color = '#2A1F14') {
    // Montagne — mountain, stability, rootedness
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,12 5,85 95,85" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
      <polygon points="30,45 10,85 50,85" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round" opacity="0.4"/>
      <line x1="5" y1="85" x2="95" y2="85" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M40,30 Q50,22 60,30" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </svg>`;
  },

  tortue(color = '#2A1F14') {
    // Tortue — turtle, protection, longevity
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="50" rx="32" ry="25" fill="none" stroke="${color}" stroke-width="4"/>
      <line x1="50" y1="25" x2="50" y2="75" stroke="${color}" stroke-width="2.5"/>
      <line x1="18" y1="50" x2="82" y2="50" stroke="${color}" stroke-width="2.5"/>
      <line x1="28" y1="30" x2="72" y2="70" stroke="${color}" stroke-width="2" opacity="0.5"/>
      <line x1="72" y1="30" x2="28" y2="70" stroke="${color}" stroke-width="2" opacity="0.5"/>
      <circle cx="50" cy="18" r="7" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="48" cy="16" r="1.5" fill="${color}"/>
      <circle cx="52" cy="16" r="1.5" fill="${color}"/>
      <line x1="22" y1="38" x2="10" y2="30" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="78" y1="38" x2="90" y2="30" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="22" y1="62" x2="10" y2="70" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <line x1="78" y1="62" x2="90" y2="70" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,75 Q50,88 45,92" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`;
  },

  escargot(color = '#2A1F14') {
    // Escargot — snail, slow wisdom, life, stability
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,45 C50,38 58,30 65,30 C78,30 85,42 85,52 C85,68 72,78 56,78 C34,78 20,62 20,46 C20,24 38,10 58,10" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M20,46 Q15,46 10,55 Q8,65 15,72 Q20,76 25,78" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <line x1="10" y1="55" x2="4" y2="42" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="4" cy="40" r="2.5" fill="${color}"/>
      <line x1="15" y1="52" x2="10" y2="40" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="10" cy="38" r="2.5" fill="${color}"/>
      <line x1="25" y1="78" x2="80" y2="85" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    </svg>`;
  },

  olivier(color = '#2A1F14') {
    // Olivier — olive tree, quiet strength, peace
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="95" x2="50" y2="50" stroke="${color}" stroke-width="6" stroke-linecap="round"/>
      <path d="M50,50 Q30,30 25,15" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M50,50 Q70,30 75,15" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M50,45 Q35,35 20,35" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M50,45 Q65,35 80,35" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="25" cy="13" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(-30 25 13)"/>
      <ellipse cx="75" cy="13" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(30 75 13)"/>
      <ellipse cx="18" cy="33" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(-10 18 33)"/>
      <ellipse cx="82" cy="33" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(10 82 33)"/>
      <ellipse cx="50" cy="8" rx="7" ry="5" fill="none" stroke="${color}" stroke-width="2.5"/>
      <circle cx="36" cy="87" r="2" fill="${color}" opacity="0.3"/>
      <circle cx="64" cy="90" r="2" fill="${color}" opacity="0.3"/>
    </svg>`;
  },

  taureau(color = '#2A1F14') {
    // Taureau — bull, masculine strength, reproduction
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="22" fill="none" stroke="${color}" stroke-width="4"/>
      <circle cx="42" cy="45" r="3" fill="${color}"/>
      <circle cx="58" cy="45" r="3" fill="${color}"/>
      <ellipse cx="50" cy="58" rx="8" ry="5" fill="none" stroke="${color}" stroke-width="3"/>
      <circle cx="47" cy="58" r="1.5" fill="${color}"/>
      <circle cx="53" cy="58" r="1.5" fill="${color}"/>
      <path d="M28,42 Q18,30 10,18" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <path d="M72,42 Q82,30 90,18" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
      <circle cx="8" cy="15" r="4" fill="${color}" opacity="0.5"/>
      <circle cx="92" cy="15" r="4" fill="${color}" opacity="0.5"/>
      <line x1="40" y1="72" x2="35" y2="92" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="60" y1="72" x2="65" y2="92" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
    </svg>`;
  },

  ble(color = '#2A1F14') {
    // Blé — wheat, life and death cycle
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="95" x2="50" y2="15" stroke="${color}" stroke-width="3.5" stroke-linecap="round"/>
      <ellipse cx="42" cy="18" rx="5" ry="10" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(-15 42 18)"/>
      <ellipse cx="58" cy="18" rx="5" ry="10" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(15 58 18)"/>
      <ellipse cx="40" cy="32" rx="5" ry="9" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(-20 40 32)"/>
      <ellipse cx="60" cy="32" rx="5" ry="9" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(20 60 32)"/>
      <ellipse cx="38" cy="46" rx="5" ry="8" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(-25 38 46)"/>
      <ellipse cx="62" cy="46" rx="5" ry="8" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(25 62 46)"/>
      <ellipse cx="40" cy="58" rx="4" ry="7" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(-20 40 58)"/>
      <ellipse cx="60" cy="58" rx="4" ry="7" fill="none" stroke="${color}" stroke-width="2.5" transform="rotate(20 60 58)"/>
      <line x1="50" y1="10" x2="50" y2="5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    </svg>`;
  },

  rosace(color = '#2A1F14') {
    // Rosace — 6-pointed star rosette, union of opposites
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,10 72,75 15,35 85,35 28,75" fill="none" stroke="${color}" stroke-width="3.5" stroke-linejoin="round"/>
      <polygon points="50,90 28,25 85,65 15,65 72,25" fill="none" stroke="${color}" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="50" cy="50" r="8" fill="none" stroke="${color}" stroke-width="3"/>
      <circle cx="50" cy="50" r="3" fill="${color}"/>
    </svg>`;
  },

  perdrix(color = '#2A1F14') {
    // Yeux de perdrix — partridge eyes, feminine beauty
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="35" r="14" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="30" cy="35" r="6" fill="none" stroke="${color}" stroke-width="2.5"/>
      <circle cx="30" cy="35" r="2.5" fill="${color}"/>
      <circle cx="70" cy="35" r="14" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="70" cy="35" r="6" fill="none" stroke="${color}" stroke-width="2.5"/>
      <circle cx="70" cy="35" r="2.5" fill="${color}"/>
      <circle cx="30" cy="70" r="14" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="30" cy="70" r="6" fill="none" stroke="${color}" stroke-width="2.5"/>
      <circle cx="30" cy="70" r="2.5" fill="${color}"/>
      <circle cx="70" cy="70" r="14" fill="none" stroke="${color}" stroke-width="3.5"/>
      <circle cx="70" cy="70" r="6" fill="none" stroke="${color}" stroke-width="2.5"/>
      <circle cx="70" cy="70" r="2.5" fill="${color}"/>
    </svg>`;
  },

  carre(color = '#2A1F14') {
    // Carré — square, house, home, family
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="70" height="70" fill="none" stroke="${color}" stroke-width="4" stroke-linejoin="round"/>
      <rect x="30" y="30" width="40" height="40" fill="none" stroke="${color}" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="50" cy="50" r="5" fill="${color}"/>
    </svg>`;
  },

  graine(color = '#2A1F14') {
    // Graine — seed, masculine seed, life and fertility
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,10 Q72,30 72,55 Q72,80 50,92 Q28,80 28,55 Q28,30 50,10 Z" fill="none" stroke="${color}" stroke-width="4"/>
      <line x1="50" y1="20" x2="50" y2="82" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50,35 Q40,42 35,50" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M50,45 Q60,52 65,60" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      <path d="M50,55 Q40,62 38,68" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
    </svg>`;
  },

  tifinagh_letter(color = '#2A1F14', letter = 'ⵣ') {
    // Generic Tifinagh letter renderer
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="62" text-anchor="middle" font-family="Noto Sans Tifinagh, sans-serif" font-size="60" fill="${color}" dominant-baseline="middle">${letter}</text>
    </svg>`;
  },

  /**
   * Get SVG string for a symbol by its ID
   */
  get(id, color, letter) {
    if (id === 'tifinagh_letter' && letter) {
      return this.tifinagh_letter(color, letter);
    }
    if (typeof this[id] === 'function') {
      return this[id](color);
    }
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <text x="50" y="55" text-anchor="middle" font-size="14" fill="#999">?</text>
    </svg>`;
  }
};

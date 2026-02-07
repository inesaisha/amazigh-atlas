/**
 * Amazigh Symbol Data
 * Each symbol has bilingual metadata (French + Tifinagh)
 */

const SYMBOLS = [
  {
    id: 'yaz',
    name: 'Yaz',
    tifinagh: 'ⵢⴰⵣ',
    meaning: 'Homme libre',
    meaningTifinagh: 'ⴰⵎⴰⵣⵉⵖ ⵉⵍⴻⵍⵍⵉ',
    description: "Le Yaz (ⵣ) est le symbole identitaire le plus emblématique du peuple amazigh. Sa forme évoque un homme debout, bras levés vers le ciel, exprimant la liberté et la résistance. Adopté comme emblème pan-amazigh, il figure sur le drapeau amazigh aux côtés des couleurs bleu, vert et jaune.",
    descriptionTifinagh: "ⵢⴰⵣ ⴷ ⴰⵣⴰⵎⵓⵍ ⵏ ⵜⵎⴰⵣⵉⵖⵜ. ⴰⵔ ⵉⵙⵙⴽⵜⵉ ⵜⵉⵍⴻⵍⵍⵉ ⴷ ⵓⵎⵏⵖⵉ.",

    svgId: 'yaz'
  },
  {
    id: 'tanit',
    name: 'Tanit',
    tifinagh: 'ⵜⴰⵏⵉⵜ',
    meaning: 'Déesse de la fertilité',
    meaningTifinagh: 'ⵜⴰⵎⵖⴰⵔⵜ ⵏ ⵜⵓⵙⵓⵜ',
    description: "Tanit est une déesse majeure de la mythologie amazighe et punique. Son symbole — un triangle surmonté d'un cercle avec une barre horizontale — représente le corps féminin, la fertilité et la fécondité. On le retrouve abondamment sur les stèles et poteries antiques d'Afrique du Nord.",
    descriptionTifinagh: "ⵜⴰⵏⵉⵜ ⴷ ⵜⴰⵎⵖⴰⵔⵜ ⵜⴰⵎⵇⵇⵔⴰⵏⵜ ⴳ ⵜⵎⵉⵜⵓⵍⵓⵊⵉⵜ ⵜⴰⵎⴰⵣⵉⵖⵜ.",

    svgId: 'tanit'
  },
  {
    id: 'losange',
    name: 'Losange',
    tifinagh: 'ⵜⴰⵎⵖⴰⵔⵜ',
    meaning: 'Féminité et fécondité',
    meaningTifinagh: 'ⵜⴰⵎⵟⵟⵓⵜ ⴷ ⵜⵓⵙⵓⵜ',
    description: "Le losange est l'un des motifs les plus récurrents de l'art amazigh. Il symbolise la féminité, le ventre maternel et la fécondité. Souvent imbriqué en séries, il orne les tapis, les poteries et les tatouages faciaux traditionnels des femmes amazighes.",
    descriptionTifinagh: "ⵜⴰⵎⵖⴰⵔⵜ ⴷ ⵓⵏⵓⵖ ⵉⵜⵜⵓⵙⴰⵏⵏ ⴳ ⵜⵥⵓⵕⵉ ⵜⴰⵎⴰⵣⵉⵖⵜ.",

    svgId: 'losange'
  },
  {
    id: 'chevrons',
    name: 'Chevrons',
    tifinagh: 'ⴰⵎⴰⵏ',
    meaning: "L'eau, source de vie",
    meaningTifinagh: 'ⴰⵎⴰⵏ, ⴰⵖⴱⴰⵍⵓ ⵏ ⵜⵓⴷⴻⵔⵜ',
    description: "Les chevrons en zigzag symbolisent l'eau et les cours d'eau dans l'art amazigh. Présents en lignes parallèles sur les tapis et les poteries, ils évoquent la pluie, les rivières et la fertilité de la terre. L'eau étant sacrée dans la culture amazighe, ce motif est omniprésent.",
    descriptionTifinagh: "ⵉⵛⴻⴱⵔⵓⵏⴻⵏ ⴰⵔ ⵙⵎⴻⴽⵜⵉⵏ ⴰⵎⴰⵏ ⴷ ⵜⵓⴷⴻⵔⵜ.",

    svgId: 'chevrons'
  },
  {
    id: 'oeil',
    name: 'Œil',
    tifinagh: 'ⵜⵉⵟⵟ',
    meaning: 'Protection contre le mauvais œil',
    meaningTifinagh: 'ⴰⵏⴻⵥⵕⵓⴼ ⵙⴻⴳ ⵜⵉⵟⵟ ⵏ ⵓⴼⵓⵙ',
    description: "L'œil est un puissant symbole protecteur dans la culture amazighe. Représenté de face, il est censé renvoyer le mauvais œil et protéger son porteur. On le retrouve tatoué sur les visages, gravé sur les portes et brodé sur les textiles pour éloigner le malheur.",
    descriptionTifinagh: "ⵜⵉⵟⵟ ⴷ ⴰⵣⴰⵎⵓⵍ ⵏ ⵓⵏⴻⵥⵕⵓⴼ ⴳ ⵜⴷⴻⵍⵙⴰ ⵜⴰⵎⴰⵣⵉⵖⵜ.",

    svgId: 'oeil'
  },
  {
    id: 'serpent',
    name: 'Serpent / Zigzag',
    tifinagh: 'ⴰⵣⵔⵎ',
    meaning: 'Protection et renaissance',
    meaningTifinagh: 'ⴰⵏⴻⵥⵕⵓⴼ ⴷ ⵜⴰⵍⴰⵍⵉⵜ ⵜⴰⵎⴰⵢⵏⵓⵜ',
    description: "Le zigzag symbolise le serpent, créature sacrée dans la cosmologie amazighe. Le serpent représente la renaissance (par sa mue), la protection du foyer et la sagesse. Les motifs en zigzag sur les poteries et les murs des maisons servent de gardiens spirituels.",
    descriptionTifinagh: "ⴰⵣⵔⵎ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⴰⵍⴰⵍⵉⵜ ⵜⴰⵎⴰⵢⵏⵓⵜ ⴷ ⵓⵏⴻⵥⵕⵓⴼ.",

    svgId: 'serpent'
  },
  {
    id: 'croix',
    name: 'Croix d\'Agadez',
    tifinagh: 'ⵜⴰⵣⵍⵎⴰⴹⵜ',
    meaning: 'Équilibre et points cardinaux',
    meaningTifinagh: 'ⴰⵎⵙⴰⵙⴰ ⴷ ⵜⵉⵙⴽⵉⵡⵉⵏ',
    description: "La croix berbère — souvent appelée croix d'Agadez chez les Touaregs — symbolise les quatre points cardinaux et l'équilibre cosmique. Chaque pointe est ornée d'un losange, représentant l'ouverture aux quatre directions du monde. C'est un bijou emblématique de l'orfèvrerie amazighe.",
    descriptionTifinagh: "ⵜⴰⵣⵍⵎⴰⴹⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⴰⵎⵙⴰⵙⴰ ⴷ ⵜⵉⵙⴽⵉⵡⵉⵏ ⵏ ⵓⵎⴰⴹⴰⵍ.",

    svgId: 'croix'
  },
  {
    id: 'fibule',
    name: 'Fibule',
    tifinagh: 'ⵜⵉⵙⴻⵔⵏⵉⵏ',
    meaning: 'Union et lien conjugal',
    meaningTifinagh: 'ⵜⴰⵢⵔⵉ ⴷ ⵓⵎⵢⴰⵙⵙⴰ',
    description: "La fibule (tisernin) est une broche triangulaire utilisée pour attacher les vêtements traditionnels amazighs. Portée par paire reliée par une chaîne, elle symbolise l'union du couple et le lien conjugal. C'est aussi un bijou de prestige offert lors des mariages.",
    descriptionTifinagh: "ⵜⵉⵙⴻⵔⵏⵉⵏ ⴷ ⴰⵣⴰⵎⵓⵍ ⵏ ⵜⴰⵢⵔⵉ ⴷ ⵓⵎⵢⴰⵙⵙⴰ.",

    svgId: 'fibule'
  },
  {
    id: 'khamsa',
    name: 'Khamsa',
    tifinagh: 'ⵜⴰⴼⵓⵙⵜ',
    meaning: 'Main protectrice',
    meaningTifinagh: 'ⴰⴼⵓⵙ ⵏ ⵓⵏⴻⵥⵕⵓⴼ',
    description: "La Khamsa (main ouverte) est un symbole protecteur universel en Afrique du Nord. Les cinq doigts repoussent le mauvais œil. Souvent ornée d'un œil central, elle est gravée sur les portes, portée en pendentif et tatouée sur les mains des femmes amazighes.",
    descriptionTifinagh: "ⵜⴰⴼⵓⵙⵜ ⴰⵔ ⵜⵏⴻⵥⵕⵓⴼ ⵙⴻⴳ ⵜⵉⵟⵟ ⵏ ⵓⴼⵓⵙ.",

    svgId: 'khamsa'
  },
  {
    id: 'etoile',
    name: 'Étoile à 8 branches',
    tifinagh: 'ⵉⵜⵔⵉ',
    meaning: 'Guidance et destin',
    meaningTifinagh: 'ⴰⵏⴻⴳⵎⵓ ⴷ ⵉⵅⴼ',
    description: "L'étoile à huit branches est un motif central des tapis amazighs. Elle symbolise la guidance, le destin et l'orientation. Les huit pointes représentent les directions intermédiaires entre les points cardinaux, offrant une protection complète à 360 degrés.",
    descriptionTifinagh: "ⵉⵜⵔⵉ ⵙ ⵜⴰⵎ ⵏ ⵉⵥⵓⵕⴰⵏ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⴰⵏⴻⴳⵎⵓ.",

    svgId: 'etoile'
  },
  {
    id: 'peigne',
    name: 'Peigne',
    tifinagh: 'ⵜⴰⵎⵛⴹⵜ',
    meaning: 'Beauté et tissage',
    meaningTifinagh: 'ⵜⴰⵥⵓⵕⵉ ⴷ ⵓⵣⴻⵟⵟⴰ',
    description: "Le peigne est un symbole de beauté et de féminité dans l'art amazigh. Il représente aussi le métier à tisser, activité sacrée des femmes amazighes. Le peigne tatoué sur le front ou le menton était un signe de beauté et de statut social.",
    descriptionTifinagh: "ⵜⴰⵎⵛⴹⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⵜⴰⵥⵓⵕⵉ ⴷ ⵓⵣⴻⵟⵟⴰ.",

    svgId: 'peigne'
  },
  {
    id: 'ciseaux',
    name: 'Ciseaux',
    tifinagh: 'ⵜⵉⵎⵇⴰⵙⵉⵏ',
    meaning: 'Coupure du mal',
    meaningTifinagh: 'ⴰⴱⴻⵜⵜⵓ ⵏ ⵓⴼⵓⵙ',
    description: "Les ciseaux symbolisent la coupure avec le mal et les énergies négatives. Placés ouverts sous l'oreiller d'un nouveau-né ou gravés sur les murs, ils sont censés couper les liens avec les forces maléfiques et protéger les plus vulnérables.",
    descriptionTifinagh: "ⵜⵉⵎⵇⴰⵙⵉⵏ ⴰⵔ ⵙⴱⴻⵜⵜⵓⵏⵜ ⴰⴼⵓⵙ ⴷ ⵜⵉⵖⵔⵙⵉⵡⵉⵏ.",

    svgId: 'ciseaux'
  },
  {
    id: 'lezard',
    name: 'Lézard',
    tifinagh: 'ⵜⴰⵣⴰⵔⵎⵉⵎⵜ',
    meaning: 'Quête de lumière',
    meaningTifinagh: 'ⴰⵔⵣⵣⵓ ⵏ ⵜⴰⴼⵓⴽⵜ',
    description: "Le lézard est un animal symbolique fort dans la culture amazighe. Toujours tourné vers le soleil, il représente la quête de lumière, de chaleur et de connaissance. On le retrouve sur les poteries kabyles et les murs des villages, souvent stylisé en formes géométriques.",
    descriptionTifinagh: "ⵜⴰⵣⴰⵔⵎⵉⵎⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⴰⵔⵣⵣⵓ ⵏ ⵜⴰⴼⵓⴽⵜ.",

    svgId: 'lezard'
  },
  {
    id: 'poisson',
    name: 'Poisson',
    tifinagh: 'ⴰⵙⵍⵎ',
    meaning: 'Abondance et prospérité',
    meaningTifinagh: 'ⵜⴰⴳⴳⴰⵔⵜ ⴷ ⵓⵙⴻⵖⴷ',
    description: "Le poisson symbolise l'abondance, la prospérité et la fertilité dans la culture amazighe. Présent sur les poteries et les décorations domestiques, il est associé à l'eau vivifiante et à la générosité de la nature. C'est aussi un porte-bonheur traditionnel.",
    descriptionTifinagh: "ⴰⵙⵍⵎ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⴰⴳⴳⴰⵔⵜ ⴷ ⵓⵙⴻⵖⴷ.",

    svgId: 'poisson'
  },
  {
    id: 'arbre',
    name: 'Arbre de vie',
    tifinagh: 'ⵜⴰⵙⴻⴽⵍⴰ ⵏ ⵜⵓⴷⴻⵔⵜ',
    meaning: 'Lignée et enracinement',
    meaningTifinagh: 'ⵜⴰⵡⵊⴰ ⴷ ⵉⵥⵓⵕⴰⵏ',
    description: "L'arbre de vie représente la lignée familiale, les racines ancestrales et la continuité entre les générations. Ses branches symbolisent les descendants et ses racines les ancêtres. C'est un motif central des tapis de l'Atlas et des broderies traditionnelles.",
    descriptionTifinagh: "ⵜⴰⵙⴻⴽⵍⴰ ⵏ ⵜⵓⴷⴻⵔⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⵜⴰⵡⵊⴰ ⴷ ⵉⵥⵓⵕⴰⵏ.",

    svgId: 'arbre'
  },
  {
    id: 'triangle',
    name: 'Triangle',
    tifinagh: 'ⴰⵎⴽⵓⵥ',
    meaning: 'Fertilité et matrice de vie',
    meaningTifinagh: 'ⵜⵓⵙⵓⵜ ⴷ ⵜⴰⵎⴰⵜⴰⵔⵜ ⵏ ⵜⵓⴷⴻⵔⵜ',
    description: "Le triangle est l'une des formes les plus anciennes de l'art amazigh. Pointe vers le haut, il représente le masculin et le feu ; pointe vers le bas, il symbolise le féminin, le ventre maternel et la fertilité. Souvent combiné en séries, il orne les tapis, les poteries et les tatouages faciaux.",
    descriptionTifinagh: "ⴰⵎⴽⵓⵥ ⴷ ⵢⴰⵜ ⵙⴻⴳ ⵜⵖⴰⵔⴰⵙⵉⵏ ⵜⵉⵇⴱⵓⵔⵉⵏ ⴳ ⵜⵥⵓⵕⵉ ⵜⴰⵎⴰⵣⵉⵖⵜ.",
    svgId: 'triangle'
  },
  {
    id: 'spirale',
    name: 'Spirale',
    tifinagh: 'ⵜⴰⵡⵓⵔⵉ',
    meaning: 'Cycle éternel de la vie',
    meaningTifinagh: 'ⴰⵙⵓⴼⵖ ⵏ ⵜⵓⴷⴻⵔⵜ',
    description: "La spirale est un motif universel présent dans l'art amazigh depuis le néolithique. Elle symbolise le cycle éternel de la vie, la mort et la renaissance. On la retrouve gravée sur les rochers du Sahara, sur les poteries et les tapis, évoquant le mouvement perpétuel de l'existence.",
    descriptionTifinagh: "ⵜⴰⵡⵓⵔⵉ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⴰⵙⵓⴼⵖ ⴰⵎⴳⴳⴰⵔⵓ ⵏ ⵜⵓⴷⴻⵔⵜ.",
    svgId: 'spirale'
  },
  {
    id: 'soleil',
    name: 'Soleil',
    tifinagh: 'ⵜⴰⴼⵓⴽⵜ',
    meaning: 'Vie, énergie et éveil',
    meaningTifinagh: 'ⵜⵓⴷⴻⵔⵜ, ⵜⴰⵣⵎⴻⵔⵜ ⴷ ⵜⴰⵏⴻⴽⵔⴰ',
    description: "Le soleil est un symbole central de la cosmologie amazighe. Il représente la vie, l'énergie, la chaleur et le renouveau quotidien. Dessiné sous forme de cercle avec des rayons, il est omniprésent sur les tapis, poteries et bijoux. Le soleil incarne aussi la connaissance et l'éveil spirituel.",
    descriptionTifinagh: "ⵜⴰⴼⵓⴽⵜ ⴷ ⴰⵣⴰⵎⵓⵍ ⴰⵎⵇⵇⵔⴰⵏ ⴳ ⵜⴷⴻⵍⵙⴰ ⵜⴰⵎⴰⵣⵉⵖⵜ.",
    svgId: 'soleil'
  },
  {
    id: 'lune',
    name: 'Croissant de lune',
    tifinagh: 'ⴰⵢⵢⵓⵔ',
    meaning: 'Renouveau et cycles féminins',
    meaningTifinagh: 'ⵜⴰⵍⴰⵍⵉⵜ ⵜⴰⵎⴰⵢⵏⵓⵜ ⴷ ⵉⵙⵓⴼⵖⴻⵏ',
    description: "Le croissant de lune symbolise la matière qui naît, grandit et meurt pour renaître. Il représente les cycles féminins, le renouveau et la guidance nocturne. Souvent associé à l'étoile dans les bijoux amazighs, il est un symbole de protection et de féminité sacrée.",
    descriptionTifinagh: "ⴰⵢⵢⵓⵔ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵉⵙⵓⴼⵖⴻⵏ ⴷ ⵜⴰⵍⴰⵍⵉⵜ ⵜⴰⵎⴰⵢⵏⵓⵜ.",
    svgId: 'lune'
  },
  {
    id: 'oiseau',
    name: 'Oiseau / Hirondelle',
    tifinagh: 'ⴰⴳⴹⵉⴹ',
    meaning: 'Liberté et bénédictions',
    meaningTifinagh: 'ⵜⵉⵍⴻⵍⵍⵉ ⴷ ⵜⵉⵔⵉⵡⵉⵏ',
    description: "L'oiseau — et particulièrement l'hirondelle — symbolise la liberté, les bénédictions divines et les messages spirituels. L'hirondelle tatouée sur le front des femmes amazighes était un signe de beauté et de féminité. Les oiseaux en vol sur les tapis représentent l'âme libérée.",
    descriptionTifinagh: "ⴰⴳⴹⵉⴹ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⵉⵍⴻⵍⵍⵉ ⴷ ⵜⵉⵔⵉⵡⵉⵏ ⵏ ⵕⴻⴱⴱⵉ.",
    svgId: 'oiseau'
  },
  {
    id: 'palmier',
    name: 'Palmier',
    tifinagh: 'ⵜⴰⵣⴷⴰⵢⵜ',
    meaning: 'Fertilité, richesse et maternité',
    meaningTifinagh: 'ⵜⵓⵙⵓⵜ, ⴰⵖⵔⴻⴼ ⴷ ⵜⴰⵎⴰⵜⴰⵔⵜ',
    description: "Le palmier est un symbole de fertilité, de richesse et de générosité dans la culture amazighe. Le tronc tatoué sur le menton des femmes — notamment dans les Aurès et au Maroc — représente la mère, pilier de la famille. Ses palmes évoquent la protection et ses dattes l'abondance.",
    descriptionTifinagh: "ⵜⴰⵣⴷⴰⵢⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⵜⵓⵙⵓⵜ ⴷ ⵓⵖⵔⴻⴼ.",
    svgId: 'palmier'
  },
  {
    id: 'belier',
    name: 'Bélier',
    tifinagh: 'ⵉⴽⴻⵔⵔⵉ',
    meaning: 'Force, vie et générosité',
    meaningTifinagh: 'ⵜⴰⵣⵎⴻⵔⵜ, ⵜⵓⴷⴻⵔⵜ ⴷ ⵜⴰⵎⴻⵍⵍⴰ',
    description: "Le bélier est un symbole puissant de force physique, de vie et de générosité dans la mythologie amazighe. Animal sacré depuis l'Antiquité — les gravures rupestres du Sahara montrent des béliers à sphéroïde — il symbolise aussi le sacrifice, la virilité et la protection du troupeau.",
    descriptionTifinagh: "ⵉⴽⴻⵔⵔⵉ ⴷ ⴰⵣⴰⵎⵓⵍ ⵏ ⵜⴰⵣⵎⴻⵔⵜ ⴷ ⵜⵓⴷⴻⵔⵜ.",
    svgId: 'belier'
  },
  {
    id: 'scorpion',
    name: 'Scorpion',
    tifinagh: 'ⵜⴰⵖⵔⴷⴰⵢⵜ',
    meaning: 'Protection et défense',
    meaningTifinagh: 'ⴰⵏⴻⵥⵕⵓⴼ ⴷ ⵓⵎⵏⵖⵉ',
    description: "Le scorpion est un symbole de protection et de défense dans la culture amazighe. Tatoué ou gravé, il est censé repousser les forces maléfiques par sa dangerosité même. Sa capacité à survivre dans les conditions les plus hostiles en fait un emblème de résilience et de résistance.",
    descriptionTifinagh: "ⵜⴰⵖⵔⴷⴰⵢⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⴰⵏⴻⵥⵕⵓⴼ ⴷ ⵓⵎⵏⵖⵉ.",
    svgId: 'scorpion'
  },
  {
    id: 'grenouille',
    name: 'Grenouille',
    tifinagh: 'ⴰⵎⵇⴻⵔⵇⵓⵔ',
    meaning: 'Magie et fertilité',
    meaningTifinagh: 'ⴰⵙⵃⵓⵔ ⴷ ⵜⵓⵙⵓⵜ',
    description: "La grenouille est associée à la magie et à la fertilité dans les croyances amazighes. Liée à l'eau et à la pluie, elle symbolise la transformation et le renouveau. Dans certaines régions, elle figure dans les rites de fertilité et les pratiques magiques liées à la fécondité.",
    descriptionTifinagh: "ⴰⵎⵇⴻⵔⵇⵓⵔ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⴰⵙⵃⵓⵔ ⴷ ⵜⵓⵙⵓⵜ.",
    svgId: 'grenouille'
  },
  {
    id: 'araignee',
    name: 'Araignée',
    tifinagh: 'ⵜⵉⵙⵙⵉⵜ',
    meaning: 'Tissage et rites magiques',
    meaningTifinagh: 'ⴰⵣⴻⵟⵟⴰ ⴷ ⵉⵙⵃⵓⵔⴻⵏ',
    description: "L'araignée symbolise le tissage — activité sacrée des femmes amazighes — et les rites magiques. Sa toile représente la création patiente, le destin et les liens invisibles entre les êtres. Elle est aussi associée à la fertilité et à la protection du foyer par ses pouvoirs mystiques.",
    descriptionTifinagh: "ⵜⵉⵙⵙⵉⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⴰⵣⴻⵟⵟⴰ ⴷ ⵉⵙⵃⵓⵔⴻⵏ.",
    svgId: 'araignee'
  },
  {
    id: 'sablier',
    name: 'Sablier',
    tifinagh: 'ⵜⴰⵙⵙⴰⵄⵜ',
    meaning: 'Temps, équilibre et cycles',
    meaningTifinagh: 'ⴰⴽⵓⴷ, ⴰⵎⵙⴰⵙⴰ ⴷ ⵉⵙⵓⴼⵖⴻⵏ',
    description: "Le sablier — formé de deux triangles opposés par la pointe — symbolise le temps, l'équilibre et les cycles de la vie. Il représente l'union des opposés : masculin et féminin, ciel et terre, passé et futur. Ce motif géométrique orne fréquemment les tapis et les textiles amazighs.",
    descriptionTifinagh: "ⵜⴰⵙⵙⴰⵄⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⴰⴽⵓⴷ ⴷ ⵓⵎⵙⴰⵙⴰ.",
    svgId: 'sablier'
  },
  {
    id: 'lion',
    name: 'Lion',
    tifinagh: 'ⵉⵣⴻⵎ',
    meaning: 'Force et leadership',
    meaningTifinagh: 'ⵜⴰⵣⵎⴻⵔⵜ ⴷ ⵜⴰⵏⴱⴰⴹⵜ',
    description: "Le lion — izem en tamazight — est un symbole majeur de force, de courage et de leadership. Le lion de l'Atlas, aujourd'hui disparu, était l'animal emblématique de l'Afrique du Nord. Son image représente la puissance protectrice, l'autorité et la noblesse du chef de clan.",
    descriptionTifinagh: "ⵉⵣⴻⵎ ⴷ ⴰⵣⴰⵎⵓⵍ ⵏ ⵜⴰⵣⵎⴻⵔⵜ ⴷ ⵜⴰⵏⴱⴰⴹⵜ.",
    svgId: 'lion'
  },
  {
    id: 'chameau',
    name: 'Chameau',
    tifinagh: 'ⴰⵍⵖⴻⵎ',
    meaning: 'Endurance et survie',
    meaningTifinagh: 'ⵜⴰⵙⵎⵉⵔⵜ ⴷ ⵜⵓⴷⴻⵔⵜ',
    description: "Le chameau symbolise l'endurance, la patience et la survie dans les conditions les plus difficiles. Compagnon indispensable des Touaregs dans le Sahara, il représente le voyage, l'adaptation et la capacité à traverser les épreuves. Son image orne les textiles et l'art des peuples nomades.",
    descriptionTifinagh: "ⴰⵍⵖⴻⵎ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⴰⵙⵎⵉⵔⵜ ⴷ ⵜⵓⴷⴻⵔⵜ ⴳ ⵜⵏⵉⵔⵉ.",
    svgId: 'chameau'
  },
  {
    id: 'fleur',
    name: 'Fleur (Ouarida)',
    tifinagh: 'ⵜⴰⵊⵊⴰ',
    meaning: 'Protection et beauté',
    meaningTifinagh: 'ⴰⵏⴻⵥⵕⵓⴼ ⴷ ⵜⴰⵥⵓⵕⵉ',
    description: "La fleur — ouarida — est un symbole de protection contre le mauvais œil et de beauté dans l'art amazigh. Ses pétales en rosace évoquent l'épanouissement et la grâce. Présente sur les poteries et les broderies, elle représente aussi le printemps, le renouveau et la joie de vivre.",
    descriptionTifinagh: "ⵜⴰⵊⵊⴰ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⴰⵏⴻⵥⵕⵓⴼ ⴷ ⵜⴰⵥⵓⵕⵉ.",
    svgId: 'fleur'
  },
  {
    id: 'montagne',
    name: 'Montagne',
    tifinagh: 'ⴰⴷⵔⴰⵔ',
    meaning: 'Stabilité et enracinement',
    meaningTifinagh: 'ⵜⴰⵣⴷⴻⴳⵜ ⴷ ⵉⵥⵓⵕⴰⵏ',
    description: "La montagne représente la stabilité, l'enracinement et la permanence dans la culture amazighe. L'Atlas, le Rif et les Aurès sont le berceau des peuples amazighs. Ce symbole triangulaire évoque la force immuable, la résistance et le lien profond avec la terre ancestrale.",
    descriptionTifinagh: "ⴰⴷⵔⴰⵔ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⴰⵣⴷⴻⴳⵜ ⴷ ⵉⵥⵓⵕⴰⵏ.",
    svgId: 'montagne'
  },
  {
    id: 'tortue',
    name: 'Tortue',
    tifinagh: 'ⵉⴼⴽⴻⵔ',
    meaning: 'Protection et longévité',
    meaningTifinagh: 'ⴰⵏⴻⵥⵕⵓⴼ ⴷ ⵜⵓⴷⴻⵔⵜ ⵜⴰⵣⴻⴳⵣⴰⵡⵜ',
    description: "La tortue symbolise la protection, la longévité et la sagesse patiente dans la culture amazighe. Sa carapace est un bouclier naturel, métaphore de la protection du foyer. Animal lent mais endurant, elle représente la persévérance et la capacité à porter son monde sur son dos.",
    descriptionTifinagh: "ⵉⴼⴽⴻⵔ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⴰⵏⴻⵥⵕⵓⴼ ⴷ ⵜⵓⴷⴻⵔⵜ ⵜⴰⵣⴻⴳⵣⴰⵡⵜ.",
    svgId: 'tortue'
  },
  {
    id: 'escargot',
    name: 'Escargot',
    tifinagh: 'ⴰⵖⴰⵍⴰⵍ',
    meaning: 'Sagesse lente et stabilité',
    meaningTifinagh: 'ⵜⴰⵎⵓⵙⵏⵉ ⴷ ⵜⴰⵣⴷⴻⴳⵜ',
    description: "L'escargot symbolise la sagesse de la lenteur, la stabilité et le foyer que l'on porte avec soi. Sa coquille en spirale évoque les cycles de la vie et la protection. Dans les tatouages amazighs, il représente la patience et la capacité à avancer à son propre rythme sans se perdre.",
    descriptionTifinagh: "ⴰⵖⴰⵍⴰⵍ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⴰⵎⵓⵙⵏⵉ ⴷ ⵜⴰⵣⴷⴻⴳⵜ.",
    svgId: 'escargot'
  },
  {
    id: 'olivier',
    name: 'Olivier',
    tifinagh: 'ⵜⴰⵣⴻⵎⵎⵓⵔⵜ',
    meaning: 'Force tranquille et abondance',
    meaningTifinagh: 'ⵜⴰⵣⵎⴻⵔⵜ ⵜⴰⵍⵎⴰⴷⵜ ⴷ ⵜⴰⴳⴳⴰⵔⵜ',
    description: "L'olivier occupe une place primordiale dans les régions montagneuses d'Afrique du Nord. Symbole de force tranquille, d'abondance et de paix, son huile représente la force vitale. Arbre millénaire, il incarne l'enracinement et la prospérité durable des communautés amazighes.",
    descriptionTifinagh: "ⵜⴰⵣⴻⵎⵎⵓⵔⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⵜⴰⵣⵎⴻⵔⵜ ⵜⴰⵍⵎⴰⴷⵜ ⴷ ⵜⴰⴳⴳⴰⵔⵜ.",
    svgId: 'olivier'
  },
  {
    id: 'taureau',
    name: 'Taureau',
    tifinagh: 'ⴰⵣⴳⴻⵔ',
    meaning: 'Force masculine et fécondité',
    meaningTifinagh: 'ⵜⴰⵣⵎⴻⵔⵜ ⵏ ⵓⵔⴳⴰⵣ ⴷ ⵜⵓⵙⵓⵜ',
    description: "Le taureau représente la force masculine, la puissance reproductrice et la fertilité de la terre dans la cosmologie amazighe. Sur les poteries kabyles, il est souvent associé à la lune, formant le couple taureau-lune — pendant cosmique du couple ciel-terre symbolisant la fertilité universelle.",
    descriptionTifinagh: "ⴰⵣⴳⴻⵔ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⴰⵣⵎⴻⵔⵜ ⵏ ⵓⵔⴳⴰⵣ ⴷ ⵜⵓⵙⵓⵜ.",
    svgId: 'taureau'
  },
  {
    id: 'ble',
    name: 'Blé',
    tifinagh: 'ⵉⵔⴷⴻⵏ',
    meaning: 'Vie, mort et renaissance',
    meaningTifinagh: 'ⵜⵓⴷⴻⵔⵜ, ⵜⴰⵎⴻⵜⵜⴰⵏⵜ ⴷ ⵜⴰⵍⴰⵍⵉⵜ',
    description: "Le blé symbolise à la fois la vie et la mort dans la symbolique amazighe. Semé, il meurt dans la terre pour renaître sous forme d'épi. Il représente le cycle des saisons, la subsistance et le lien profond entre le peuple amazigh et sa terre nourricière.",
    descriptionTifinagh: "ⵉⵔⴷⴻⵏ ⴰⵔ ⵙⵎⴻⴽⵜⵉⵏ ⵜⵓⴷⴻⵔⵜ ⴷ ⵜⴰⵎⴻⵜⵜⴰⵏⵜ ⴷ ⵜⴰⵍⴰⵍⵉⵜ.",
    svgId: 'ble'
  },
  {
    id: 'rosace',
    name: 'Rosace / Étoile à 6 branches',
    tifinagh: 'ⵜⴰⵡⵙⵙⴰⵔⵜ',
    meaning: "Union des opposés",
    meaningTifinagh: 'ⵜⴰⵎⵓⵏⵜ ⵏ ⵉⵎⵣⴰⵔⴰⵢⴻⵏ',
    description: "La rosace — étoile à six branches formée de deux triangles inversés — symbolise l'union des forces opposées : le masculin (triangle vers le haut, feu, virilité) et le féminin (triangle vers le bas, eau, fécondité). Elle incarne l'équilibre parfait et l'harmonie cosmique.",
    descriptionTifinagh: "ⵜⴰⵡⵙⵙⴰⵔⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⵜⴰⵎⵓⵏⵜ ⵏ ⵉⵎⵣⴰⵔⴰⵢⴻⵏ.",
    svgId: 'rosace'
  },
  {
    id: 'perdrix',
    name: 'Yeux de perdrix',
    tifinagh: 'ⵜⵉⵟⵟⴰⵡⵉⵏ ⵏ ⵜⵙⴻⴽⴽⵓⵔⵜ',
    meaning: 'Beauté et grâce féminine',
    meaningTifinagh: 'ⵜⴰⵥⵓⵕⵉ ⴷ ⵜⴰⵎⵍⵉⵍⵜ',
    description: "Les « yeux de perdrix » sont un motif décoratif récurrent dans les tapis et tatouages amazighs. Formés de cercles concentriques en damier, ils symbolisent la beauté féminine, la grâce et la vigilance. La perdrix, oiseau élégant, est une métaphore de la femme amazighe.",
    descriptionTifinagh: "ⵜⵉⵟⵟⴰⵡⵉⵏ ⵏ ⵜⵙⴻⴽⴽⵓⵔⵜ ⴰⵔ ⵙⵎⴻⴽⵜⵉⵏⵜ ⵜⴰⵥⵓⵕⵉ ⴷ ⵜⴰⵎⵍⵉⵍⵜ.",
    svgId: 'perdrix'
  },
  {
    id: 'carre',
    name: 'Carré',
    tifinagh: 'ⴰⵎⴽⵓⵥⴰⵏ',
    meaning: 'La maison et le foyer',
    meaningTifinagh: 'ⵜⵉⴳⴻⵎⵎⵉ ⴷ ⵓⵎⴻⵙⵙⵓ',
    description: "Le carré représente la maison, le foyer et la famille dans la symbolique amazighe. Ses quatre côtés égaux évoquent la stabilité et l'ordre. Deux carrés superposés symbolisent le combat de Dieu contre les ténèbres. C'est l'un des motifs de base des tatouages faciaux féminins.",
    descriptionTifinagh: "ⴰⵎⴽⵓⵥⴰⵏ ⴰⵔ ⵉⵙⵎⴻⴽⵜⵉ ⵜⵉⴳⴻⵎⵎⵉ ⴷ ⵓⵎⴻⵙⵙⵓ.",
    svgId: 'carre'
  },
  {
    id: 'graine',
    name: 'Graine',
    tifinagh: 'ⵜⴰⵎⵥⵉⵏⵜ',
    meaning: 'Semence de vie et fécondité',
    meaningTifinagh: 'ⵜⴰⵎⵥⵉⵏⵜ ⵏ ⵜⵓⴷⴻⵔⵜ ⴷ ⵜⵓⵙⵓⵜ',
    description: "La graine symbolise la semence, le début de toute vie et le potentiel infini de croissance. Dans les tatouages amazighs, elle représente la fécondité et la transmission de la vie. Les points isolés ou en groupes sur les poteries et textiles évoquent les graines semées dans la terre.",
    descriptionTifinagh: "ⵜⴰⵎⵥⵉⵏⵜ ⴰⵔ ⵜⵙⵎⴻⴽⵜⵉ ⵜⵓⵙⵓⵜ ⴷ ⵜⵉⵣⵉ ⵏ ⵜⵓⴷⴻⵔⵜ.",
    svgId: 'graine'
  }
];

// ===== Tifinagh Alphabet (IRCAM Neo-Tifinagh Standard) =====
const ALPHABET = [
  { letter: 'ⴰ', name: 'Ya', translit: 'a', phonetic: 'a' },
  { letter: 'ⴱ', name: 'Yab', translit: 'b', phonetic: 'b' },
  { letter: 'ⴳ', name: 'Yag', translit: 'g', phonetic: 'g' },
  { letter: 'ⴷ', name: 'Yad', translit: 'd', phonetic: 'd' },
  { letter: 'ⴹ', name: 'Yaḍ', translit: 'ḍ', phonetic: 'ḍ (emphatic d)' },
  { letter: 'ⴻ', name: 'Yey', translit: 'e', phonetic: 'e (schwa)' },
  { letter: 'ⴼ', name: 'Yaf', translit: 'f', phonetic: 'f' },
  { letter: 'ⴽ', name: 'Yak', translit: 'k', phonetic: 'k' },
  { letter: 'ⴽⵯ', name: 'Yakʷ', translit: 'kʷ', phonetic: 'kʷ (labialized k)' },
  { letter: 'ⵀ', name: 'Yah', translit: 'h', phonetic: 'h' },
  { letter: 'ⵃ', name: 'Yaḥ', translit: 'ḥ', phonetic: 'ḥ (pharyngeal)' },
  { letter: 'ⵄ', name: 'Yaɛ', translit: 'ɛ', phonetic: 'ɛ (pharyngeal)' },
  { letter: 'ⵅ', name: 'Yax', translit: 'x', phonetic: 'x (kh)' },
  { letter: 'ⵇ', name: 'Yaq', translit: 'q', phonetic: 'q' },
  { letter: 'ⵉ', name: 'Yi', translit: 'i', phonetic: 'i' },
  { letter: 'ⵊ', name: 'Yaj', translit: 'j', phonetic: 'ʒ (j)' },
  { letter: 'ⵍ', name: 'Yal', translit: 'l', phonetic: 'l' },
  { letter: 'ⵎ', name: 'Yam', translit: 'm', phonetic: 'm' },
  { letter: 'ⵏ', name: 'Yan', translit: 'n', phonetic: 'n' },
  { letter: 'ⵓ', name: 'Yu', translit: 'u', phonetic: 'u' },
  { letter: 'ⵔ', name: 'Yar', translit: 'r', phonetic: 'r' },
  { letter: 'ⵕ', name: 'Yaṛ', translit: 'ṛ', phonetic: 'ṛ (emphatic r)' },
  { letter: 'ⵖ', name: 'Yaɣ', translit: 'ɣ', phonetic: 'ɣ (gh)' },
  { letter: 'ⵙ', name: 'Yas', translit: 's', phonetic: 's' },
  { letter: 'ⵚ', name: 'Yaṣ', translit: 'ṣ', phonetic: 'ṣ (emphatic s)' },
  { letter: 'ⵛ', name: 'Yac', translit: 'c', phonetic: 'ʃ (ch/sh)' },
  { letter: 'ⵜ', name: 'Yat', translit: 't', phonetic: 't' },
  { letter: 'ⵟ', name: 'Yaṭ', translit: 'ṭ', phonetic: 'ṭ (emphatic t)' },
  { letter: 'ⵡ', name: 'Yaw', translit: 'w', phonetic: 'w' },
  { letter: 'ⵢ', name: 'Yay', translit: 'y', phonetic: 'y' },
  { letter: 'ⵣ', name: 'Yaz', translit: 'z', phonetic: 'z' },
  { letter: 'ⵥ', name: 'Yaẓ', translit: 'ẓ', phonetic: 'ẓ (emphatic z)' },
  { letter: 'ⵯ', name: 'Labialisation', translit: 'ʷ', phonetic: 'ʷ (labialisation mark)' }
];


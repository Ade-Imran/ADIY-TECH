let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;
let correctionChances = 1;

const elements = [
{
    name: "Hydrogen",
    symbol: "H",
    number: 1,
    chemicalProperties: ["reactive", "flammable", "forms H2 molecules"],
    physicalProperties: ["colorless", "odorless", "gas at room temperature", "lightest element", "non-metal"],
    disadvantages: ["highly flammable", "difficult to store as a liquid", "low density"],
    uses: ["fuel cells", "hydrogenation of fats", "rocket fuel"],
    electronicConfiguration: "1s1",
    relativeAtomicMass: 1.008
},
{
    name: "Helium",
    symbol: "He",
    number: 2,
    chemicalProperties: ["inert", "non-reactive"],
    physicalProperties: ["colorless", "odorless", "tasteless", "gas at room temperature", "low density"],
    disadvantages: ["low boiling point", "non-renewable resource", "difficult to liquefy"],
    uses: ["balloons", "cryogenics", "shielding gas in welding"],
    electronicConfiguration: "1s2",
    relativeAtomicMass: 4.0026
},
{
    name: "Lithium",
    symbol: "Li",
    number: 3,
    chemicalProperties: ["reactive", "alkali metal", "forms Li+ ions"],
    physicalProperties: ["soft metal", "silvery-white", "lightest metal", "low melting point", "conducts electricity"],
    disadvantages: ["reacts with water", "corrosive", "difficult to store"],
    uses: ["batteries", "medications for bipolar disorder", "alloys"],
    electronicConfiguration: "1s2 2s1",
    relativeAtomicMass: 6.94
},
{
    name: "Beryllium",
    symbol: "Be",
    number: 4,
    chemicalProperties: ["forms Be2+ ions", "amphoteric oxide", "high melting point"],
    physicalProperties: ["hard", "brittle", "gray-white", "lightweight", "conducts electricity"],
    disadvantages: ["toxic", "expensive", "brittle"],
    uses: ["aerospace components", "nuclear reactors", "X-ray windows"],
    electronicConfiguration: "1s2 2s2",
    relativeAtomicMass: 9.0122
},
{
    name: "Boron",
    symbol: "B",
    number: 5,
    chemicalProperties: ["metalloid", "forms B3+ ions", "high melting point"],
    physicalProperties: ["black-brown", "hard", "brittle", "low density", "semiconducting"],
    disadvantages: ["brittle", "toxic in high concentrations", "difficult to extract"],
    uses: ["borosilicate glass", "semiconductors", "detergents"],
    electronicConfiguration: "1s2 2s2 2p1",
    relativeAtomicMass: 10.81
},
{
    name: "Carbon",
    symbol: "C",
    number: 6,
    chemicalProperties: ["forms covalent bonds", "can form long chains", "forms C4+ or C4- ions"],
    physicalProperties: ["varies from soft (graphite) to hard (diamond)", "non-metal", "exists in multiple allotropes", "conducts electricity (graphite)", "insulator (diamond)"],
    disadvantages: ["forms greenhouse gases", "can be reactive with oxygen", "carbon monoxide is toxic"],
    uses: ["steel production", "organic chemistry", "diamonds and graphite in tools"],
    electronicConfiguration: "1s2 2s2 2p2",
    relativeAtomicMass: 12.011
},
{
    name: "Nitrogen",
    symbol: "N",
    number: 7,
    chemicalProperties: ["forms N2 molecules", "triple bond in N2", "relatively inert"],
    physicalProperties: ["colorless", "odorless", "tasteless", "gas at room temperature", "non-metal"],
    disadvantages: ["inert, requires high energy to react", "forms toxic compounds like NOx"],
    uses: ["fertilizers", "cryogenics", "preservative in food packaging"],
    electronicConfiguration: "1s2 2s2 2p3",
    relativeAtomicMass: 14.007
},
{
    name: "Oxygen",
    symbol: "O",
    number: 8,
    chemicalProperties: ["highly reactive", "forms O2 and O3 molecules", "supports combustion"],
    physicalProperties: ["colorless", "odorless", "tasteless", "gas at room temperature", "non-metal"],
    disadvantages: ["supports combustion", "can cause oxidative damage", "O3 (ozone) is harmful in high concentrations"],
    uses: ["respiration", "oxidizing agent in chemical reactions", "steel manufacturing"],
    electronicConfiguration: "1s2 2s2 2p4",
    relativeAtomicMass: 15.999
},
{
    name: "Fluorine",
    symbol: "F",
    number: 9,
    chemicalProperties: ["most electronegative element", "highly reactive", "forms F- ions"],
    physicalProperties: ["pale yellow gas", "toxic", "corrosive", "non-metal", "highly reactive"],
    disadvantages: ["extremely corrosive", "toxic", "difficult to handle safely"],
    uses: ["toothpaste (fluoride)", "Teflon production", "refrigerants"],
    electronicConfiguration: "1s2 2s2 2p5",
    relativeAtomicMass: 18.998
},
{
    name: "Neon",
    symbol: "Ne",
    number: 10,
    chemicalProperties: ["inert", "non-reactive", "forms no stable compounds under normal conditions"],
    physicalProperties: ["colorless", "odorless", "gas at room temperature", "noble gas", "low density"],
    disadvantages: ["limited uses", "rare and expensive", "low boiling point"],
    uses: ["neon signs", "cryogenics", "high-voltage indicators"],
    electronicConfiguration: "1s2 2s2 2p6",
    relativeAtomicMass: 20.180
},
{
    name: "Sodium",
    symbol: "Na",
    number: 11,
    chemicalProperties: ["reactive", "alkali metal", "forms Na+ ions"],
    physicalProperties: ["soft metal", "silvery-white", "low melting point", "conducts electricity", "highly reactive"],
    disadvantages: ["reacts violently with water", "corrosive", "must be stored under oil"],
    uses: ["table salt (NaCl)", "sodium vapor lamps", "coolant in nuclear reactors"],
    electronicConfiguration: "1s2 2s2 2p6 3s1",
    relativeAtomicMass: 22.990
},
{
    name: "Magnesium",
    symbol: "Mg",
    number: 12,
    chemicalProperties: ["reactive", "alkaline earth metal", "forms Mg2+ ions"],
    physicalProperties: ["lightweight metal", "silvery-white", "low density", "good conductor of electricity", "burns with a bright white flame"],
    disadvantages: ["reacts with water", "corrosive in humid air", "can be difficult to extinguish when ignited"],
    uses: ["alloys", "fireworks", "medicines like antacids"],
    electronicConfiguration: "1s2 2s2 2p6 3s2",
    relativeAtomicMass: 24.305
},
{
    name: "Aluminum",
    symbol: "Al",
    number: 13,
    chemicalProperties: ["reactive", "forms Al3+ ions", "amphoteric oxide"],
    physicalProperties: ["lightweight", "silvery-white", "good conductor of electricity", "non-magnetic", "ductile and malleable"],
    disadvantages: ["corrosive in acidic and alkaline environments", "energy-intensive to extract", "brittle at low temperatures"],
    uses: ["aerospace components", "cans and foils", "construction materials"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p1",
    relativeAtomicMass: 26.982
},
{
    name: "Silicon",
    symbol: "Si",
    number: 14,
    chemicalProperties: ["semiconductor", "forms SiO2", "relatively inert at room temperature"],
    physicalProperties: ["hard", "brittle", "metallic luster", "semiconducting", "second most abundant element in Earth's crust"],
    disadvantages: ["brittle", "can be reactive at high temperatures", "difficult to purify"],
    uses: ["electronics", "solar cells", "glass and ceramics"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p2",
    relativeAtomicMass: 28.085
},
    
{
    name: "Phosphorus",
    symbol: "P",
    number: 15,
    chemicalProperties: ["highly reactive", "forms P4 molecules", "exists in multiple allotropes"],
    physicalProperties: ["varies from white (waxy) to red (powder)", "non-metal", "solid at room temperature", "white phosphorus is highly reactive and toxic", "red phosphorus is more stable"],
    disadvantages: ["white phosphorus is highly toxic", "flammable", "dangerous if not handled properly"],
    uses: ["fertilizers", "matches", "steel production"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p3",
    relativeAtomicMass: 30.974
},
{
    name: "Sulfur",
    symbol: "S",
    number: 16,
    chemicalProperties: ["non-metal", "forms S8 rings", "combines with most elements to form sulfides"],
    physicalProperties: ["yellow solid", "brittle", "insoluble in water", "distinctive odor when burned", "non-metal"],
    disadvantages: ["causes acid rain when burned", "can be toxic", "irritates the respiratory system"],
    uses: ["sulfuric acid production", "vulcanization of rubber", "fungicides"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p4",
    relativeAtomicMass: 32.06
},
{
    name: "Chlorine",
    symbol: "Cl",
    number: 17,
    chemicalProperties: ["highly reactive", "forms Cl- ions", "strong oxidizing agent"],
    physicalProperties: ["greenish-yellow gas", "pungent odor", "toxic", "non-metal", "forms diatomic molecules (Cl2)"],
    disadvantages: ["toxic and corrosive", "irritates respiratory system", "harmful to the environment"],
    uses: ["disinfectants", "bleach", "PVC production"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p5",
    relativeAtomicMass: 35.45
},
{
    name: "Argon",
    symbol: "Ar",
    number: 18,
    chemicalProperties: ["inert", "forms no stable compounds under normal conditions", "noble gas"],
    physicalProperties: ["colorless", "odorless", "tasteless", "gas at room temperature", "noble gas"],
    disadvantages: ["limited uses", "expensive to extract", "high energy cost for liquefaction"],
    uses: ["shielding gas in welding", "filling incandescent and fluorescent bulbs", "cryogenics"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6",
    relativeAtomicMass: 39.948
},
{
    name: "Potassium",
    symbol: "K",
    number: 19,
    chemicalProperties: ["highly reactive", "alkali metal", "forms K+ ions"],
    physicalProperties: ["soft metal", "silvery-white", "low melting point", "conducts electricity", "highly reactive"],
    disadvantages: ["reacts violently with water", "must be stored under oil", "can cause burns on contact"],
    uses: ["fertilizers", "potassium chloride (table salt substitute)", "gunpowder"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s1",
    relativeAtomicMass: 39.098
},
{
    name: "Calcium",
    symbol: "Ca",
    number: 20,
    chemicalProperties: ["reactive", "alkaline earth metal", "forms Ca2+ ions"],
    physicalProperties: ["soft metal", "silvery-white", "solid at room temperature", "conducts electricity", "reacts with water"],
    disadvantages: ["reacts with water", "corrosive in humid air", "requires protection from moisture during storage"],
    uses: ["construction materials (limestone)", "calcium supplements", "cement production"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2",
    relativeAtomicMass: 40.078
},
{
    name: "Scandium",
    symbol: "Sc",
    number: 21,
    chemicalProperties: ["transition metal", "forms Sc3+ ions", "reacts with acids to form hydrogen"],
    physicalProperties: ["silvery-white metal", "soft", "lightweight", "solid at room temperature", "oxidizes in air"],
    disadvantages: ["expensive to extract", "limited availability", "reacts with water"],
    uses: ["aerospace components", "alloys", "ceramic manufacturing"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d1 4s2",
    relativeAtomicMass: 44.955
},
{
    name: "Titanium",
    symbol: "Ti",
    number: 22,
    chemicalProperties: ["transition metal", "forms Ti4+ and Ti3+ ions", "resistant to corrosion"],
    physicalProperties: ["lustrous, silver-colored metal", "strong", "low density", "high melting point", "solid at room temperature"],
    disadvantages: ["expensive processing", "difficult to extract", "brittle at low temperatures"],
    uses: ["aerospace materials", "medical implants", "paint pigments (TiO2)"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d2 4s2",
    relativeAtomicMass: 47.867
},
{
    name: "Vanadium",
    symbol: "V",
    number: 23,
    chemicalProperties: ["transition metal", "forms V2+, V3+, V4+, and V5+ ions", "catalyst in chemical reactions"],
    physicalProperties: ["hard, silvery-grey metal", "ductile", "resistant to corrosion", "solid at room temperature", "high melting point"],
    disadvantages: ["toxic in large quantities", "expensive", "can cause lung irritation when inhaled"],
    uses: ["alloys for tools and engines", "steel production", "catalysts"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d3 4s2",
    relativeAtomicMass: 50.942
},
{
    name: "Chromium",
    symbol: "Cr",
    number: 24,
    chemicalProperties: ["transition metal", "forms Cr3+ and Cr6+ ions", "oxidizing agent"],
    physicalProperties: ["lustrous, hard metal", "resistant to tarnishing", "high melting point", "solid at room temperature", "bluish-white color"],
    disadvantages: ["toxic in hexavalent form (Cr6+)", "causes environmental pollution", "difficult to extract"],
    uses: ["stainless steel", "chrome plating", "dyes and pigments"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d5 4s1",
    relativeAtomicMass: 51.996
},
{
    name: "Manganese",
    symbol: "Mn",
    number: 25,
    chemicalProperties: ["transition metal", "forms Mn2+ and Mn7+ ions", "oxidizes easily"],
    physicalProperties: ["hard, brittle metal", "gray-white color", "solid at room temperature", "high melting point", "conducts electricity"],
    disadvantages: ["toxic in large amounts", "causes lung damage when inhaled", "oxidizes quickly in air"],
    uses: ["steel production", "batteries", "ceramic coloring"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d5 4s2",
    relativeAtomicMass: 54.938
},
{
    name: "Iron",
    symbol: "Fe",
    number: 26,
    chemicalProperties: ["transition metal", "forms Fe2+ and Fe3+ ions", "oxidizes to form rust (Fe2O3)"],
    physicalProperties: ["lustrous, silver-gray metal", "solid at room temperature", "malleable", "ductile", "magnetic"],
    disadvantages: ["corrodes easily", "prone to rust", "heavy"],
    uses: ["steel production", "construction materials", "automobile manufacturing"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d6 4s2",
    relativeAtomicMass: 55.845
},
{
    name: "Cobalt",
    symbol: "Co",
    number: 27,
    chemicalProperties: ["transition metal", "forms Co2+ and Co3+ ions", "magnetic"],
    physicalProperties: ["hard, lustrous, silver-gray metal", "solid at room temperature", "magnetic", "resistant to corrosion", "high melting point"],
    disadvantages: ["toxic in large amounts", "expensive", "can cause lung damage when inhaled"],
    uses: ["batteries", "superalloys", "catalysts"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d7 4s2",
    relativeAtomicMass: 58.933
},
{
    name: "Nickel",
    symbol: "Ni",
    number: 28,
    chemicalProperties: ["transition metal", "forms Ni2+ and Ni3+ ions", "resistant to corrosion"],
    physicalProperties: ["lustrous, silver-white metal", "solid at room temperature", "malleable", "ductile", "high melting point"],
    disadvantages: ["toxic in large amounts", "allergenic to some people", "expensive"],
    uses: ["stainless steel", "coins", "batteries"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d8 4s2",
    relativeAtomicMass: 58.693
},
{
    name: "Copper",
    symbol: "Cu",
    number: 29,
    chemicalProperties: ["transition metal", "forms Cu+ and Cu2+ ions", "good conductor of electricity"],
    physicalProperties: ["reddish-brown metal", "solid at room temperature", "malleable", "ductile", "high thermal conductivity"],
    disadvantages: ["corrodes slowly", "can cause environmental pollution", "expensive"],
    uses: ["electrical wiring", "plumbing", "coins"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s1",
    relativeAtomicMass: 63.546
},
{
    name: "Zinc",
    symbol: "Zn",
    number: 30,
    chemicalProperties: ["transition metal", "forms Zn2+ ions", "amphoteric oxide (ZnO)"],
    physicalProperties: ["lustrous, bluish-white metal", "solid at room temperature", "brittle at ambient temperature", "ductile when heated", "good conductor of electricity"],
    disadvantages: ["oxidizes in air", "toxic in large amounts", "corrosive"],
    uses: ["galvanization", "alloys (brass)", "batteries"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2",
    relativeAtomicMass: 65.38
},
{
    name: "Gallium",
    symbol: "Ga",
    number: 31,
    chemicalProperties: ["post-transition metal", "forms Ga3+ ions", "amphoteric in nature"],
    physicalProperties: ["silvery metal", "melts near room temperature", "solid at low temperatures", "expands upon freezing", "good conductor of electricity"],
    disadvantages: ["expensive", "toxic in large amounts", "reacts with skin"],
    uses: ["semiconductors", "LEDs", "alloys"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p1",
    relativeAtomicMass: 69.723
},
{
    name: "Germanium",
    symbol: "Ge",
    number: 32,
    chemicalProperties: ["metalloid", "forms Ge4+ ions", "amphoteric oxide (GeO2)"],
    physicalProperties: ["gray-white metalloid", "solid at room temperature", "brittle", "semi-conductor", "high melting point"],
    disadvantages: ["rare", "expensive", "toxic if ingested"],
    uses: ["semiconductors", "infrared optics", "solar cells"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p2",
    relativeAtomicMass: 72.63
},
{
    name: "Arsenic",
    symbol: "As",
    number: 33,
    chemicalProperties: ["metalloid", "forms As3+ and As5+ ions", "toxic", "forms arsenic acid (H3AsO4)"],
    physicalProperties: ["gray metalloid", "solid at room temperature", "brittle", "sublimates at high temperatures", "semi-conductor"],
    disadvantages: ["highly toxic", "carcinogenic", "environmental pollutant"],
    uses: ["semiconductors", "wood preservatives", "pesticides"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p3",
    relativeAtomicMass: 74.922
},
{
    name: "Selenium",
    symbol: "Se",
    number: 34,
    chemicalProperties: ["non-metal", "forms Se2- ions", "oxidizing agent"],
    physicalProperties: ["gray or red non-metal", "solid at room temperature", "brittle", "semi-conductor", "melting point 221°C"],
    disadvantages: ["toxic in large amounts", "rare", "environmental pollutant"],
    uses: ["glassmaking", "photocells", "pigments"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p4",
    relativeAtomicMass: 78.971
},
{
    name: "Bromine",
    symbol: "Br",
    number: 35,
    chemicalProperties: ["halogen", "forms Br- ions", "highly reactive"],
    physicalProperties: ["reddish-brown liquid", "strong odor", "evaporates easily", "solidifies at -7.2°C", "boils at 58.8°C"],
    disadvantages: ["toxic", "corrosive", "environmental pollutant"],
    uses: ["flame retardants", "water purification", "pesticides"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p5",
    relativeAtomicMass: 79.904
},
{
    name: "Krypton",
    symbol: "Kr",
    number: 36,
    chemicalProperties: ["noble gas", "forms KrF2 under extreme conditions", "inert"],
    physicalProperties: ["colorless gas", "odorless", "tasteless", "solidifies at -157.4°C", "boiling point -153.2°C"],
    disadvantages: ["rare", "expensive", "low reactivity limits uses"],
    uses: ["lighting", "photography", "plasma studies"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6",
    relativeAtomicMass: 83.798
},
{
    name: "Rubidium",
    symbol: "Rb",
    number: 37,
    chemicalProperties: ["alkali metal", "forms Rb+ ions", "reacts violently with water"],
    physicalProperties: ["soft, silvery-white metal", "solid at room temperature", "melting point 39.3°C", "boiling point 688°C", "highly reactive"],
    disadvantages: ["highly reactive", "toxic", "explosive in air"],
    uses: ["atomic clocks", "research", "glassmaking"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s1",
    relativeAtomicMass: 85.468
},
{
    name: "Strontium",
    symbol: "Sr",
    number: 38,
    chemicalProperties: ["alkaline earth metal", "forms Sr2+ ions", "reacts with water to form strontium hydroxide"],
    physicalProperties: ["soft, silvery-yellow metal", "solid at room temperature", "melting point 777°C", "boiling point 1377°C", "highly reactive"],
    disadvantages: ["reactive", "toxic in large amounts", "flammable"],
    uses: ["fireworks", "ceramics", "medical imaging"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 5s2",
    relativeAtomicMass: 87.62
},
{
    name: "Yttrium",
    symbol: "Y",
    number: 39,
    chemicalProperties: ["transition metal", "forms Y3+ ions", "oxidizes slowly in air"],
    physicalProperties: ["silvery-metal", "solid at room temperature", "melting point 1526°C", "boiling point 3338°C", "moderately reactive"],
    disadvantages: ["expensive", "limited availability", "reacts with water and acids"],
    uses: ["phosphors in TV screens", "alloys", "lasers"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d1 5s2",
    relativeAtomicMass: 88.905
},
{
    name: "Zirconium",
    symbol: "Zr",
    number: 40,
    chemicalProperties: ["transition metal", "forms Zr4+ ions", "resistant to corrosion"],
    physicalProperties: ["grayish-white, lustrous metal", "solid at room temperature", "melting point 1855°C", "boiling point 4409°C", "strong and ductile"],
    disadvantages: ["expensive", "difficult to extract", "toxic in large amounts"],
    uses: ["nuclear reactors", "surgical instruments", "alloys"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d2 5s2",
    relativeAtomicMass: 91.224
},
    {
        name: "Niobium",
        symbol: "Nb",
        number: 41,
        chemicalProperties: ["forms Nb5+ ions", "reacts with acids", "highly corrosion-resistant", "forms niobium oxides", "used in superconductors", "alloying agent"],
        physicalProperties: ["gray metal", "solid at room temperature", "high melting point", "ductile", "malleable"],
        disadvantages: ["expensive", "can be difficult to work with", "limited availability"],
        uses: ["superconductors", "alloys", "catalysts"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 4d4",
        relativeAtomicMass: 92.906
    },
    {
        name: "Molybdenum",
        symbol: "Mo",
        number: 42,
        chemicalProperties: ["forms Mo6+ ions", "resistant to oxidation", "reacts with sulfur", "high melting point", "forms molybdenum sulfides", "used in steelmaking"],
        physicalProperties: ["steel-gray metal", "solid at room temperature", "high density", "high melting point", "hard and brittle"],
        disadvantages: ["expensive", "difficult to machine", "can be toxic in powdered form"],
        uses: ["alloying agent", "steel production", "electrodes", "catalysts"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
        relativeAtomicMass: 95.95
    },
    {
        name: "Technetium",
        symbol: "Tc",
        number: 43,
        chemicalProperties: ["forms Tc7+ and Tc4+ ions", "radioactive", "used in medical imaging", "reacts with acids", "highly reactive", "forms various compounds"],
        physicalProperties: ["silvery-gray metal", "solid at room temperature", "radioactive", "high melting point", "difficult to obtain in pure form"],
        disadvantages: ["highly radioactive", "limited availability", "expensive"],
        uses: ["medical imaging", "radiopharmaceuticals", "nuclear medicine"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d5",
        relativeAtomicMass: 98
    },
    {
        name: "Ruthenium",
        symbol: "Ru",
        number: 44,
        chemicalProperties: ["forms Ru3+ and Ru4+ ions", "highly corrosion-resistant", "reacts with halogens", "used in catalytic reactions", "forms various oxides", "stable in many acids"],
        physicalProperties: ["hard gray metal", "solid at room temperature", "high melting point", "high density", "brittle"],
        disadvantages: ["expensive", "difficult to handle", "limited applications"],
        uses: ["electroplating", "catalysts", "electronics"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d7",
        relativeAtomicMass: 101.07
    },
    {
        name: "Rhodium",
        symbol: "Rh",
        number: 45,
        chemicalProperties: ["forms Rh3+ ions", "highly corrosion-resistant", "reacts with acids", "used in catalytic converters", "forms various alloys", "stable in air"],
        physicalProperties: ["silvery-white metal", "solid at room temperature", "high melting point", "reflective", "high density"],
        disadvantages: ["expensive", "rare", "can cause allergic reactions"],
        uses: ["catalysts", "jewelry", "electroplating"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d8",
        relativeAtomicMass: 102.905
    },
    {
        name: "Palladium",
        symbol: "Pd",
        number: 46,
        chemicalProperties: ["forms Pd2+ ions", "highly resistant to corrosion", "reacts with halogens", "used in hydrogen storage", "catalytic properties", "forms various alloys"],
        physicalProperties: ["silvery-white metal", "solid at room temperature", "malleable", "ductile", "high melting point"],
        disadvantages: ["expensive", "limited supply", "can cause allergic reactions"],
        uses: ["catalysts", "jewelry", "electronics"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s0 4d10",
        relativeAtomicMass: 106.42
    },
    {
        name: "Silver",
        symbol: "Ag",
        number: 47,
        chemicalProperties: ["forms Ag+ ions", "highly conductive", "reacts with sulfur", "forms various compounds", "used in photography", "antimicrobial properties"],
        physicalProperties: ["shiny white metal", "solid at room temperature", "malleable", "ductile", "high melting point"],
        disadvantages: ["tarnishes over time", "expensive", "soft compared to other metals"],
        uses: ["jewelry", "electronics", "photography", "silverware"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10",
        relativeAtomicMass: 107.87
    },
    {
        name: "Cadmium",
        symbol: "Cd",
        number: 48,
        chemicalProperties: ["forms Cd2+ ions", "reacts with acids", "toxic", "forms various salts", "used in batteries", "corrosion-resistant"],
        physicalProperties: ["soft, bluish-white metal", "solid at room temperature", "low melting point", "malleable", "ductile"],
        disadvantages: ["highly toxic", "environmental pollutant", "expensive"],
        uses: ["batteries", "pigments", "coatings", "alloys"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2",
        relativeAtomicMass: 112.414
    },
    {
        name: "Indium",
        symbol: "In",
        number: 49,
        chemicalProperties: ["forms In3+ ions", "reacts with acids", "used in semiconductors", "forms indium alloys", "corrosion-resistant", "oxidizes in air"],
        physicalProperties: ["soft, silvery metal", "solid at room temperature", "low melting point", "malleable", "ductile"],
        disadvantages: ["expensive", "limited supply", "can cause allergic reactions"],
        uses: ["semiconductors", "LCD screens", "solders", "alloys"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10",
        relativeAtomicMass: 114.82
    },
    {
        name: "Tin",
        symbol: "Sn",
        number: 50,
        chemicalProperties: ["forms Sn2+ and Sn4+ ions", "reacts with acids", "resistant to corrosion", "forms various compounds", "used in alloys", "oxidizes slowly"],
        physicalProperties: ["silvery-white metal", "solid at room temperature", "low melting point", "malleable", "ductile"],
        disadvantages: ["can corrode", "soft and less durable", "can cause environmental damage"],
        uses: ["solder", "tin plating", "alloys", "chemical compounds"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2",
        relativeAtomicMass: 118.71
    },
    {
        name: "Antimony",
        symbol: "Sb",
        number: 51,
        chemicalProperties: ["forms Sb3+ and Sb5+ ions", "reacts with acids", "used in alloys", "forms various compounds", "antimony sulfide is a semiconductor", "oxidizes slowly"],
        physicalProperties: ["silvery-white metalloid", "solid at room temperature", "brittle", "high melting point", "poor conductor of heat"],
        disadvantages: ["toxic", "expensive", "limited applications"],
        uses: ["flame retardants", "alloys", "semiconductors"],
        electronicConfiguration:"1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p3",
        relativeAtomicMass: 114.82
    },
{
        name: "Tellurium",
        symbol: "Te",
        number: 52,
        chemicalProperties: ["metalloid", "forms Te2- ions", "reacts with acids", "used in alloys", "forms tellurium dioxide", "can be oxidized easily"],
        physicalProperties: ["silvery-white metalloid", "solid at room temperature", "brittle", "high melting point", "conducts electricity"],
        disadvantages: ["toxic", "rare", "can be expensive"],
        uses: ["semiconductors", "thermoelectric devices", "alloys"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5 5s2 4d10 5p4",
        relativeAtomicMass: 127.60
    },
    {
        name: "Iodine",
        symbol: "I",
        number: 53,
        chemicalProperties: ["halogen", "forms I- ions", "highly reactive", "forms iodine compounds", "used as a disinfectant", "oxidizing agent"],
        physicalProperties: ["dark purple solid", "sublimates to a violet gas", "has a strong odor", "solid at room temperature", "melting point 113.7°C"],
        disadvantages: ["toxic in large amounts", "can cause skin irritation", "can be harmful if inhaled"],
        uses: ["disinfectants", "iodized salt", "antiseptics", "dyes"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
        relativeAtomicMass: 126.90
    },
    {
        name: "Xenon",
        symbol: "Xe",
        number: 54,
        chemicalProperties: ["noble gas", "forms XeF4 and XeF6 under extreme conditions", "inert", "does not readily form compounds", "can be excited to emit light", "forms a few stable compounds"],
        physicalProperties: ["colorless gas", "odorless", "tasteless", "solidifies at -111.8°C", "boils at -108.1°C"],
        disadvantages: ["expensive", "rare", "limited chemical reactivity"],
        uses: ["lighting", "anesthesia", "nuclear energy", "medical imaging"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6",
        relativeAtomicMass: 131.29
    },
    {
        name: "Cesium",
        symbol: "Cs",
        number: 55,
        chemicalProperties: ["alkali metal", "forms Cs+ ions", "highly reactive", "reacts violently with water", "forms various compounds", "oxidizes quickly"],
        physicalProperties: ["soft, gold-colored metal", "solid at room temperature", "melting point 28.5°C", "boiling point 671°C", "very low density"],
        disadvantages: ["highly reactive", "toxic", "can cause explosions when exposed to water"],
        uses: ["atomic clocks", "catalysts", "medical applications", "research"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 5s1",
        relativeAtomicMass: 132.91
    },
    {
        name: "Barium",
        symbol: "Ba",
        number: 56,
        chemicalProperties: ["alkaline earth metal", "forms Ba2+ ions", "reacts with water to form barium hydroxide", "used in medical imaging", "forms various compounds", "oxidizes in air"],
        physicalProperties: ["soft, silvery-white metal", "solid at room temperature", "melting point 727°C", "boiling point 1890°C", "reactive"],
        disadvantages: ["toxic in large amounts", "can cause health issues", "can react violently with water"],
        uses: ["medical imaging", "drilling fluids", "ceramics", "paints"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 5s2",
        relativeAtomicMass: 137.33
    },
    {
        name: "Lanthanum",
        symbol: "La",
        number: 57,
        chemicalProperties: ["lanthanide", "forms La3+ ions", "reacts with water", "oxidizes in air", "used in catalysts", "forms various compounds"],
        physicalProperties: ["soft, silvery-white metal", "solid at room temperature", "malleable", "ductile", "reactive"],
        disadvantages: ["can be expensive", "limited applications", "can react with air"],
        uses: ["catalysts", "phosphors", "optical materials", "hydrogen storage"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
        relativeAtomicMass: 138.91
    },
    {
        name: "Cerium",
        symbol: "Ce",
        number: 58,
        chemicalProperties: ["lanthanide", "forms Ce3+ and Ce4+ ions", "oxidizes easily", "reacts with acids", "used in catalysts", "forms various oxides"],
        physicalProperties: ["silvery-white metal", "solid at room temperature", "soft", "malleable", "reactive"],
        disadvantages: ["expensive", "can be toxic", "limited supply"],
        uses: ["catalysts", "ceramics", "glass polishing", "alloys"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
        relativeAtomicMass: 140.12
    },
    {
        name: "Praseodymium",
        symbol: "Pr",
        number: 59,
        chemicalProperties: ["lanthanide", "forms Pr3+ ions", "reacts with water", "oxidizes in air", "used in magnets", "forms praseodymium compounds"],
        physicalProperties: ["soft, silvery metal", "solid at room temperature", "malleable", "ductile", "reactive"],
        disadvantages: ["expensive", "can be toxic", "limited applications"],
        uses: ["magnets", "ceramics", "glass", "phosphors"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
        relativeAtomicMass: 140.907
    },
    {
        name: "Neodymium",
        symbol: "Nd",
        number: 60,
        chemicalProperties: ["lanthanide", "forms Nd3+ ions", "reacts with water", "oxidizes in air", "used in magnets", "forms neodymium compounds"],
        physicalProperties: ["soft, silvery metal", "solid at room temperature", "malleable", "ductile", "reactive"],
        disadvantages: ["expensive", "can be toxic", "limited supply"],
        uses: ["magnets", "laser technology", "glass coloring", "alloys"],
        electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1",
        relativeAtomicMass: 144.24
    },
{
    name: "Promethium",
    symbol: "Pm",
    number: 61,
    chemicalProperties: ["radioactive", "forms Pm3+ ions", "reacts with acids", "oxidizes in air", "forms various salts", "fissionable in nuclear reactions"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "radioactive", "glows in the dark", "melting point 1042°C"],
    disadvantages: ["radioactive and hazardous", "scarce", "difficult to handle"],
    uses: ["nuclear batteries", "luminescent paints", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6",
    relativeAtomicMass: 145
},
{
    name: "Samarium",
    symbol: "Sm",
    number: 62,
    chemicalProperties: ["lanthanide", "forms Sm3+ ions", "oxidizes in air", "reacts with acids", "forms various compounds", "used as a catalyst"],
    physicalProperties: ["silvery metal", "solid at room temperature", "melting point 1072°C", "boiling point 1794°C", "malleable"],
    disadvantages: ["expensive", "limited availability", "can be reactive in air"],
    uses: ["magnets", "nuclear reactors", "optical materials", "catalysts"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f6",
    relativeAtomicMass: 150.36
},
{
    name: "Europium",
    symbol: "Eu",
    number: 63,
    chemicalProperties: ["lanthanide", "forms Eu2+ and Eu3+ ions", "highly reactive", "oxidizes quickly", "reacts with acids", "used in phosphorescent materials"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "soft", "melting point 822°C", "boiling point 1597°C"],
    disadvantages: ["expensive", "reacts quickly with air", "can be toxic in large amounts"],
    uses: ["phosphorescent materials", "nuclear reactors", "ceramics", "glass"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f7",
    relativeAtomicMass: 151.96
},
{
    name: "Gadolinium",
    symbol: "Gd",
    number: 64,
    chemicalProperties: ["lanthanide", "forms Gd3+ ions", "oxidizes in air", "reacts with acids", "magnetic properties", "used in nuclear reactors"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1313°C", "boiling point 3250°C", "magnetic"],
    disadvantages: ["expensive", "limited supply", "can be reactive in air"],
    uses: ["magnets", "nuclear reactors", "medical imaging", "phosphors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f7",
    relativeAtomicMass: 157.25
},
{
    name: "Terbium",
    symbol: "Tb",
    number: 65,
    chemicalProperties: ["lanthanide", "forms Tb3+ ions", "oxidizes slowly in air", "reacts with acids", "used in electronic devices", "forms terbium compounds"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1356°C", "boiling point 3230°C", "soft and ductile"],
    disadvantages: ["expensive", "limited availability", "can be reactive in air"],
    uses: ["electronic devices", "magnets", "phosphors", "laser technology"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f9",
    relativeAtomicMass: 158.93
},
{
    name: "Dysprosium",
    symbol: "Dy",
    number: 66,
    chemicalProperties: ["lanthanide", "forms Dy3+ ions", "oxidizes slowly in air", "reacts with acids", "high magnetic susceptibility", "used in nuclear reactors"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1412°C", "boiling point 2567°C", "soft and malleable"],
    disadvantages: ["expensive", "limited supply", "can be reactive in air"],
    uses: ["magnets", "nuclear reactors", "laser technology", "phosphors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f10",
    relativeAtomicMass: 162.50
},
{
    name: "Holmium",
    symbol: "Ho",
    number: 67,
    chemicalProperties: ["lanthanide", "forms Ho3+ ions", "oxidizes in air", "reacts with acids", "high magnetic susceptibility", "used in nuclear reactors"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1474°C", "boiling point 2700°C", "soft and ductile"],
    disadvantages: ["expensive", "limited supply", "can be reactive in air"],
    uses: ["magnets", "nuclear reactors", "laser technology", "phosphors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f11",
    relativeAtomicMass: 164.93
},
{
    name: "Erbium",
    symbol: "Er",
    number: 68,
    chemicalProperties: ["lanthanide", "forms Er3+ ions", "oxidizes in air", "reacts with acids", "used in nuclear reactors", "forms erbium compounds"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1497°C", "boiling point 2868°C", "soft and ductile"],
    disadvantages: ["expensive", "limited supply", "can be reactive in air"],
    uses: ["nuclear reactors", "magnets", "laser technology", "phosphors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f12",
    relativeAtomicMass: 167.26
},
{
    name: "Thulium",
    symbol: "Tm",
    number: 69,
    chemicalProperties: ["lanthanide", "forms Tm3+ ions", "oxidizes in air", "reacts with acids", "used in nuclear reactors", "forms thulium compounds"],
    physicalProperties: ["silvery-gray metal", "solid at room temperature", "melting point 1545°C", "boiling point 1950°C", "soft and malleable"],
    disadvantages: ["expensive", "limited supply", "can be reactive in air"],
    uses: ["nuclear reactors", "medical imaging", "laser technology", "phosphors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f13",
    relativeAtomicMass: 168.93
},
{
    name: "Ytterbium",
    symbol: "Yb",
    number: 70,
    chemicalProperties: ["lanthanide", "forms Yb2+ and Yb3+ ions", "reacts with acids", "oxidizes in air", "used in nuclear reactors", "forms ytterbium compounds"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 824°C", "boiling point 1196°C", "soft and malleable"],
    disadvantages: ["expensive", "limited supply", "can be reactive in air"],
    uses: ["nuclear reactors", "magnets", "optical materials", "phosphors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d1 5p6 4f14",
    relativeAtomicMass:170.054
},
{
    name: "Lutetium",
    symbol: "Lu",
    number: 71,
    chemicalProperties: ["lanthanide", "forms Lu3+ ions", "oxidizes in air", "reacts with acids", "forms various compounds", "catalytic properties"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1652°C", "boiling point 3402°C", "hard and dense"],
    disadvantages: ["expensive", "limited availability", "can be reactive in air"],
    uses: ["catalysts in petroleum refining", "medical imaging", "phosphors in LEDs", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d1",
    relativeAtomicMass: 174.97
},
{
    name: "Hafnium",
    symbol: "Hf",
    number: 72,
    chemicalProperties: ["transition metal", "forms Hf4+ ions", "oxidizes in air", "reacts with halogens", "forms stable compounds", "high melting point"],
    physicalProperties: ["silvery-gray metal", "solid at room temperature", "melting point 2233°C", "boiling point 4603°C", "dense and corrosion-resistant"],
    disadvantages: ["expensive", "difficult to extract", "can be reactive in air"],
    uses: ["nuclear reactors", "alloying agent in high-temperature materials", "control rods", "ceramics"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d2",
    relativeAtomicMass: 178.49
},
{
    name: "Tantalum",
    symbol: "Ta",
    number: 73,
    chemicalProperties: ["transition metal", "forms Ta5+ ions", "oxidizes in air", "resistant to acids", "forms stable compounds", "high melting point"],
    physicalProperties: ["gray-blue metal", "solid at room temperature", "melting point 3017°C", "boiling point 5458°C", "dense and highly corrosion-resistant"],
    disadvantages: ["expensive", "difficult to extract", "can be reactive in air"],
    uses: ["electronic capacitors", "medical implants", "alloying agent", "cutting tools"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d3",
    relativeAtomicMass: 180.95
},
{
    name: "Tungsten",
    symbol: "W",
    number: 74,
    chemicalProperties: ["transition metal", "forms W6+ ions", "oxidizes in air", "forms stable compounds", "high melting point", "resistant to acids and alkalis"],
    physicalProperties: ["grayish-white metal", "solid at room temperature", "melting point 3422°C", "boiling point 5930°C", "dense and very hard"],
    disadvantages: ["brittle in pure form", "difficult to work with", "expensive"],
    uses: ["filaments in light bulbs", "cutting tools", "high-temperature applications", "armament"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d4",
    relativeAtomicMass: 183.84
},
{
    name: "Rhenium",
    symbol: "Re",
    number: 75,
    chemicalProperties: ["transition metal", "forms Re4+ and Re7+ ions", "oxidizes in air", "forms stable oxides", "resistant to acids", "high melting point"],
    physicalProperties: ["grayish-white metal", "solid at room temperature", "melting point 3186°C", "boiling point 5630°C", "dense and corrosion-resistant"],
    disadvantages: ["expensive", "rare", "difficult to extract"],
    uses: ["superalloys in jet engines", "catalysts in chemical reactions", "filaments", "thermocouples"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d5",
    relativeAtomicMass: 186.21
},
{
    name: "Osmium",
    symbol: "Os",
    number: 76,
    chemicalProperties: ["transition metal", "forms Os4+ and Os8+ ions", "oxidizes in air", "forms stable oxides", "resistant to acids", "forms complex compounds"],
    physicalProperties: ["bluish-white metal", "solid at room temperature", "melting point 3033°C", "boiling point 5012°C", "densest naturally occurring element"],
    disadvantages: ["toxic in powdered form", "expensive", "difficult to extract"],
    uses: ["pen nibs", "electrical contacts", "alloys", "chemical catalysts"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d6",
    relativeAtomicMass: 190.23
},
{
    name: "Iridium",
    symbol: "Ir",
    number: 77,
    chemicalProperties: ["transition metal", "forms Ir4+ ions", "oxidizes in air", "forms stable oxides", "highly corrosion-resistant", "forms complex compounds"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 2446°C", "boiling point 4130°C", "dense and brittle"],
    disadvantages: ["expensive", "difficult to work with", "rare"],
    uses: ["spark plugs", "electrical contacts", "crucibles", "catalysts"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d7",
    relativeAtomicMass: 192.22
},
{
    name: "Platinum",
    symbol: "Pt",
    number: 78,
    chemicalProperties: ["transition metal", "forms Pt2+ and Pt4+ ions", "oxidizes slowly in air", "highly corrosion-resistant", "forms complex compounds", "resistant to acids"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1768°C", "boiling point 3825°C", "malleable and ductile"],
    disadvantages: ["expensive", "limited availability", "heavy"],
    uses: ["jewelry", "catalysts", "electrical contacts", "thermocouples"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d8",
    relativeAtomicMass: 195.08
},
{
    name: "Gold",
    symbol: "Au",
    number: 79,
    chemicalProperties: ["transition metal", "forms Au+ and Au3+ ions", "oxidizes slowly in air", "highly corrosion-resistant", "forms complex compounds", "resistant to most acids"],
    physicalProperties: ["yellow metal", "solid at room temperature", "melting point 1064°C", "boiling point 2856°C", "malleable and ductile"],
    disadvantages: ["expensive", "limited availability", "heavy"],
    uses: ["jewelry", "electronics", "currency", "dentistry"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d9",
    relativeAtomicMass: 196.97
},
{
    name: "Mercury",
    symbol: "Hg",
    number: 80,
    chemicalProperties: ["forms Hg2+ and Hg22+ ions", "reacts with halogens", "forms amalgams with other metals", "oxidizes slowly in air", "toxic", "used in thermometers"],
    physicalProperties: ["silvery-white metal", "liquid at room temperature", "melting point -38.83°C", "boiling point 356.73°C", "dense and heavy"],
    disadvantages: ["toxic and hazardous", "difficult to handle", "environmental concerns"],
    uses: ["thermometers", "barometers", "fluorescent lamps", "medical devices"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10",
    relativeAtomicMass: 200.59
},
{
    name: "Thallium",
    symbol: "Tl",
    number: 81,
    chemicalProperties: ["forms Tl+ and Tl3+ ions", "reacts with acids", "oxidizes in air", "forms various compounds", "can be toxic", "reacts with halogens"],
    physicalProperties: ["gray metal", "solid at room temperature", "melting point 304°C", "boiling point 1457°C", "soft and malleable"],
    disadvantages: ["toxic", "limited use due to health hazards", "can cause poisoning"],
    uses: ["electronic devices", "optical lenses", "medical imaging", "alloys"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p1",
    relativeAtomicMass: 204.38
},
{
    name: "Lead",
    symbol: "Pb",
    number: 82,
    chemicalProperties: ["forms Pb2+ and Pb4+ ions", "reacts with acids", "oxidizes in air", "forms various compounds", "can be toxic", "reacts with halogens"],
    physicalProperties: ["gray metal", "solid at room temperature", "melting point 327.5°C", "boiling point 1749°C", "soft and dense"],
    disadvantages: ["toxic", "environmental pollution", "health hazards"],
    uses: ["batteries", "radiation shielding", "pipes", "cables"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p2",
    relativeAtomicMass: 207.2
},
{
    name: "Bismuth",
    symbol: "Bi",
    number: 83,
    chemicalProperties: ["forms Bi3+ ions", "reacts with acids", "oxidizes in air", "forms various compounds", "relatively non-toxic", "reacts with halogens"],
    physicalProperties: ["pink metal", "solid at room temperature", "melting point 271.4°C", "boiling point 1564°C", "brittle and dense"],
    disadvantages: ["expensive", "can be toxic in large quantities", "brittle"],
    uses: ["cosmetics", "pharmaceuticals", "alloys", "nuclear reactors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p3",
    relativeAtomicMass: 209.98
},
{
    name: "Polonium",
    symbol: "Po",
    number: 84,
    chemicalProperties: ["forms Po2+ and Po4+ ions", "radioactive", "oxidizes in air", "reacts with acids", "forms various compounds", "highly toxic"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 254°C", "boiling point 962°C", "radioactive"],
    disadvantages: ["highly radioactive", "extremely toxic", "difficult to handle"],
    uses: ["antistatic devices", "nuclear applications", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p4",
    relativeAtomicMass: 209
},
{
    name: "Astatine",
    symbol: "At",
    number: 85,
    chemicalProperties: ["forms At- ions", "radioactive", "reacts with acids", "oxidizes in air", "forms various compounds", "highly toxic"],
    physicalProperties: ["metalloid", "solid at room temperature", "melting point unknown", "boiling point unknown", "radioactive"],
    disadvantages: ["highly radioactive", "extremely rare", "toxic"],
    uses: ["radiotherapy", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p5",
    relativeAtomicMass: 210
},
{
    name: "Radon",
    symbol: "Rn",
    number: 86,
    chemicalProperties: ["noble gas", "radioactive", "forms Rn+ ions", "does not react with other elements", "oxidizes in air", "highly toxic in large amounts"],
    physicalProperties: ["colorless gas", "odorless", "tasteless", "melting point -71°C", "boiling point -61.7°C"],
    disadvantages: ["radioactive", "health hazard", "requires special handling"],
    uses: ["radiotherapy", "detecting leaks", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6",
    relativeAtomicMass: 222
},
{
    name: "Francium",
    symbol: "Fr",
    number: 87,
    chemicalProperties: ["alkali metal", "highly reactive", "forms Fr+ ions", "oxidizes rapidly in air", "reacts vigorously with water", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point unknown", "boiling point unknown", "highly radioactive"],
    disadvantages: ["extremely radioactive", "highly toxic", "rare and expensive"],
    uses: ["research", "nuclear studies"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s1",
    relativeAtomicMass: 223
},
{
    name: "Radium",
    symbol: "Ra",
    number: 88,
    chemicalProperties: ["alkaline earth metal", "forms Ra2+ ions", "highly reactive", "oxidizes rapidly in air", "reacts with water", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 700°C", "boiling point 1413°C", "radioactive"],
    disadvantages: ["highly radioactive", "toxic", "difficult to handle"],
    uses: ["radiotherapy", "nuclear applications", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2",
    relativeAtomicMass: 226
},
{
    name: "Actinium",
    symbol: "Ac",
    number: 89,
    chemicalProperties: ["actinide", "forms Ac3+ ions", "highly radioactive", "reacts with water", "oxidizes in air", "forms various compounds"],
    physicalProperties: ["silvery-white metal", "solid at room temperature", "melting point 1050°C", "boiling point 1500°C", "highly radioactive"],
    disadvantages: ["highly radioactive", "toxic", "difficult to handle"],
    uses: ["nuclear medicine", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    relativeAtomicMass: 227
},
{
    name: "Thorium",
    symbol: "Th",
    number: 90,
    chemicalProperties: ["actinide", "forms Th4+ ions", "reacts with water", "oxidizes in air", "forms various compounds", "used in nuclear reactors"],
    physicalProperties: ["silvery metal", "solid at room temperature", "melting point 1750°C", "boiling point 4790°C", "dense and corrosion-resistant"],
    disadvantages: ["radioactive", "requires careful handling", "expensive"],
    uses: ["nuclear reactors", "alloys", "electronic components"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    relativeAtomicMass: 232.03806
},
{
    name: "Protactinium",
    symbol: "Pa",
    number: 91,
    chemicalProperties: ["actinide", "forms Pa4+ and Pa5+ ions", "reacts with acids", "oxidizes in air", "radioactive", "reacts with halogens"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 1568°C", "boiling point  PA: 4.6", "radioactive"],
    disadvantages: ["radioactive", "expensive", "requires special handling"],
    uses: ["research", "nuclear reactors"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    relativeAtomicMass: 231.03588
},
{
    name: "Uranium",
    symbol: "U",
    number: 92,
    chemicalProperties: ["actinide", "forms U3+ and U6+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 1132°C", "boiling point 4131°C", "dense and heavy"],
    disadvantages: ["highly radioactive", "toxic", "requires careful handling"],
    uses: ["nuclear fuel", "military applications", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    relativeAtomicMass: 238.02891
},
{
    name: "Neptunium",
    symbol: "Np",
    number: 93,
    chemicalProperties: ["actinide", "forms Np3+ and Np4+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 637°C", "boiling point 4175°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "requires special handling"],
    uses: ["nuclear reactors", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d2",
    relativeAtomicMass: 237.0482
},
{
    name: "Plutonium",
    symbol: "Pu",
    number: 94,
    chemicalProperties: ["actinide", "forms Pu3+ and Pu4+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 640°C", "boiling point 3235°C", "dense and heavy"],
    disadvantages: ["highly radioactive", "toxic", "expensive"],
    uses: ["nuclear fuel", "military applications", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d4",
    relativeAtomicMass: 244.064
},
{
    name: "Americium",
    symbol: "Am",
    number: 95,
    chemicalProperties: ["actinide", "forms Am3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 1176°C", "boiling point 1500°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "requires special handling"],
    uses: ["smoke detectors", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    relativeAtomicMass: 243.061
},
{
    name: "Curium",
    symbol: "Cm",
    number: 96,
    chemicalProperties: ["actinide", "forms Cm3+ and Cm4+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 1340°C", "boiling point 3110°C", "radioactive"],
    disadvantages: ["highly radioactive", "expensive", "requires careful handling"],
    uses: ["nuclear reactors", "research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1",
    relativeAtomicMass: 247.070
},
{
    name: "Berkelium",
    symbol: "Bk",
    number: 97,
    chemicalProperties: ["actinide", "forms Bk3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 986°C", "boiling point 2470°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "requires special handling"],
    uses: ["research", "nuclear medicine"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f7",
    relativeAtomicMass: 247.07
},
{
    name: "Californium",
    symbol: "Cf",
    number: 98,
    chemicalProperties: ["actinide", "forms Cf3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 900°C", "boiling point 1470°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["nuclear reactors", "research", "medical applications"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d10 5f7",
    relativeAtomicMass: 251.08
},
{
    name: "Einsteinium",
    symbol: "Es",
    number: 99,
    chemicalProperties: ["actinide", "forms Es3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 860°C", "boiling point 996°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research", "nuclear medicine"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f11",
    relativeAtomicMass: 252.083
},
    {
    name: "Fermium",
    symbol: "Fm",
    number: 100,
    chemicalProperties: ["actinide", "forms Fm3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 1527°C", "boiling point 2600°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research", "nuclear medicine"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f12",
    relativeAtomicMass: 257.0951
},
{
    name: "Mendelevium",
    symbol: "Md",
    number: 101,
    chemicalProperties: ["actinide", "forms Md3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 1100°C", "boiling point 1400°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 6d1 5f13",
    relativeAtomicMass: 258.1
},
{
    name: "Nobelium",
    symbol: "No",
    number: 102,
    chemicalProperties: ["actinide", "forms No3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 827°C", "boiling point 1650°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14",
    relativeAtomicMass: 259.100
},
{
    name: "Lawrencium",
    symbol: "Lr",
    number: 103,
    chemicalProperties: ["actinide", "forms Lr3+ ions", "reacts with acids", "oxidizes in air", "radioactive", "forms various compounds"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 1627°C", "boiling point 3340°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d1",
    relativeAtomicMass: 262
},
{
    name: "Rutherfordium",
    symbol: "Rf",
    number: 104,
    chemicalProperties: ["d-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 2100°C", "boiling point 5500°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d2",
    relativeAtomicMass: 267
},
{
    name: "Dubnium",
    symbol: "Db",
    number: 105,
    chemicalProperties: ["d-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 2200°C", "boiling point 5300°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d3",
    relativeAtomicMass: 270
},
{
    name: "Seaborgium",
    symbol: "Sg",
    number: 106,
    chemicalProperties: ["d-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 2300°C", "boiling point 5000°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d4",
    relativeAtomicMass: 271
},
{
    name: "Bohrium",
    symbol: "Bh",
    number: 107,
    chemicalProperties: ["d-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 2400°C", "boiling point 5100°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d5",
    relativeAtomicMass: 270
},
{
    name: "Hassium",
    symbol: "Hs",
    number: 108,
    chemicalProperties: ["d-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point 2500°C", "boiling point 5000°C", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d6",
    relativeAtomicMass: 277
},
{
    name: "Ununtrium",
    symbol: "Uut",
    number: 113,
    chemicalProperties: ["p-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point unknown", "boiling point unknown", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d7",
    relativeAtomicMass: 284
},
{
    name: "Flerovium",
    symbol: "Fl",
    number: 114,
    chemicalProperties: ["p-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point unknown", "boiling point unknown", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10",
    relativeAtomicMass: 289
},
{
    name: "Moscovium",
    symbol: "Mc",
    number: 115,
    chemicalProperties: ["p-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point unknown", "boiling point unknown", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    relativeAtomicMass: 289
},
{
    name: "Nihonium",
    symbol: "Nh",
    number: 113,
    chemicalProperties: ["p-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point unknown", "boiling point unknown", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p1",
    relativeAtomicMass: 286
},
{
    name: "Oganesson",
    symbol: "Og",
    number: 118,
    chemicalProperties: ["p-block", "reacts with halogens", "reacts with acids", "forms various compounds", "radioactive"],
    physicalProperties: ["metallic", "solid at room temperature", "melting point unknown", "boiling point unknown", "radioactive"],
    disadvantages: ["radioactive", "expensive", "difficult to handle"],
    uses: ["research"],
    electronicConfiguration: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6",
    relativeAtomicMass: 294
}

    // Add more elements as needed
];

const questionTemplates = [
    { question: "What is the symbol of {name}?", answerKey: "symbol" },
    { question: "What is the atomic number of {name}?", answerKey: "number" },
    { question: "Which element has the symbol {symbol}?", answerKey: "name" },
    { question: "Which element has the atomic number {number}?", answerKey: "name" },
    { question: "Which of the following is a chemical property of {name}?", answerKey: "chemicalProperties" },
    { question: "Which of the following is a physical property of {name}?", answerKey: "physicalProperties" },
    { question: "Which of the following is a disadvantage of {name}?", answerKey: "disadvantages" },
    { question: "Which of the following is a use of {name}?", answerKey: "uses" },
    { question: "What is the electronic configuration of {name}?", answerKey: "electronicConfiguration" },
    { question: "What is the relative atomic mass of {name}?", answerKey: "relativeAtomicMass" }
];

const remarks = {
    excellent: ["Outstanding performance!", "Fantastic job!", "You nailed it!"],
    good: ["Great work!", "Well done!", "Keep it up!"],
    average: ["Good effort!", "You did well!", "Nice try!"],
    poor: ["Better luck next time!", "Keep practicing!", "Don't give up!"]
};

function getRandomRemark(list) {
    return list[Math.floor(Math.random() * list.length)];
}

let userAnswers = [];
let questions = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home-container').classList.add('show');
    document.getElementById('correction-left').innerText = correctionChances;
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuestions() {
    const shuffledElements = shuffleArray([...elements]);
    questions = [];
    for (let i = 0; i < 20; i++) {
        const element = shuffledElements[i % shuffledElements.length];
        const template = questionTemplates[i % questionTemplates.length];

        let questionText = template.question.replace('{name}', element.name)
                                             .replace('{symbol}', element.symbol)
                                             .replace('{number}', element.number)
                                             .replace('{electronicConfiguration}', element.electronicConfiguration)
                                             .replace('{relativeAtomicMass}', element.relativeAtomicMass);

        let correctAnswer;
        let wrongAnswers;

        if (template.answerKey === "chemicalProperties") {
            correctAnswer = element.chemicalProperties[0];
            wrongAnswers = generateWrongAnswers(correctAnswer, 3, "chemicalProperties");
        } else if (template.answerKey === "physicalProperties") {
            correctAnswer = element.physicalProperties[0];
            wrongAnswers = generateWrongAnswers(correctAnswer, 3, "physicalProperties");
        } else if (template.answerKey === "disadvantages") {
            correctAnswer = element.disadvantages[0];
            wrongAnswers = generateWrongAnswers(correctAnswer, 3, "disadvantages");
        } else if (template.answerKey === "uses") {
            correctAnswer = element.uses[0];
            wrongAnswers = generateWrongAnswers(correctAnswer, 3, "uses");
        } else {
            correctAnswer = element[template.answerKey];
            wrongAnswers = generateWrongAnswers(correctAnswer, 3, template.answerKey);
        }

        questions.push({
            question: questionText,
            correctAnswer: correctAnswer,
            allProperties: element[template.answerKey],
            userAnswer: null,
            options: shuffleArray([correctAnswer, ...wrongAnswers])
        });
    }
}

function generateWrongAnswers(correctAnswer, count, answerType) {
    let allAnswers = elements.flatMap(e => {
        if (Array.isArray(e[answerType])) {
            return e[answerType];
        } else {
            return [e[answerType]];
        }
    }).filter(answer => answer !== correctAnswer);

    return shuffleArray(allAnswers).slice(0, count);
}

function startQuiz() {
    document.getElementById('home-container').classList.remove('show');
    document.getElementById('result-container').classList.remove('show');
    document.getElementById('corrections-container').classList.remove('show');
    document.getElementById('quiz-container').classList.add('show');

    generateQuestions();
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    showQuestion();
    startTimer(); // Start the timer when quiz starts
}

function showQuestion() {
    if (currentQuestion < questions.length) {
        const questionElement = document.getElementById('question');
        questionElement.innerHTML = `${currentQuestion + 1}. ${questions[currentQuestion].question}`;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        questions[currentQuestion].options.forEach(answer => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.innerText = answer;
            optionElement.onclick = () => selectAnswer(answer);
            optionsContainer.appendChild(optionElement);
        });

        document.getElementById('progress').style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
    } else {
        endQuiz();
    }
}

function selectAnswer(answer) {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });

    const selectedOption = Array.from(document.querySelectorAll('.option')).find(option => option.innerText === answer);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }

    questions[currentQuestion].userAnswer = answer;
}

function nextQuestion() {
    if (questions[currentQuestion].userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(); // Show the next question
        startTimer(); // Start or reset the timer for the next question
    } else {
        endQuiz(); // End the quiz if all questions have been answered
    }
}

function watchAd() {
    // Display the Google AdSense ad in the ad container
    document.getElementById('ad-container').innerHTML = `
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-xxxxxxxxxxxx"
            data-ad-slot="xxxxxxxxxx"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
    `;

    // Simulate a delay to represent the time taken to watch the ad
    setTimeout(() => {
        // Increment correction chances by 1 after the ad is "watched"
        correctionChances += 1;
        document.getElementById('correction-left').innerText = correctionChances;

        // Clear the ad container after watching the ad
        document.getElementById('ad-container').innerHTML = '';
    }, 3000); // Adjust this delay based on actual ad length
}

function showCorrections() {
    if (correctionChances <= 0) {
        // Show the modal if out of chances
        document.getElementById('correction-modal').style.display = 'block';
    } else {
        // Proceed with showing corrections if chances are available
        correctionChances--;
        document.getElementById('correction-left').innerText = correctionChances;

        document.getElementById('result-container').classList.remove('show');
        document.getElementById('corrections-container').classList.add('show');
        const correctionsList = document.getElementById('corrections-list');
        correctionsList.innerHTML = '';
        
        questions.forEach((question, index) => {
            if (question.userAnswer !== question.correctAnswer) {
                const correctionItem = document.createElement('div');
                correctionItem.classList.add('correction-item');
                correctionItem.innerHTML = `
                    <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                    <p><strong>Your Answer:</strong> ${question.userAnswer || 'No answer'}</p>
                    <p><strong>Correct Answer:</strong> ${question.correctAnswer}</p>
                `;
                correctionsList.appendChild(correctionItem);
            }
        });
    }
}

function closeModal() {
    document.getElementById('correction-modal').style.display = 'none';
}
document.getElementById('close-modal-btn').onclick = function() {
    closeModal();
};

function closeModal() {
    document.getElementById('correction-modal').style.display = 'none';
}


function startTimer(duration = 10) {
    timeLeft = duration;
    clearInterval(timer); // Clear any existing timer
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
       nextQuestion(); // Automatically move to the next question if time runs out
        } else {
            timeLeft--;
            document.getElementById('timer').innerText = timeLeft;
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById('quiz-container').classList.remove('show');
    document.getElementById('result-container').classList.add('show');
    document.getElementById('score').innerText = `Your Score: ${score}/20`;

    const remarkElement = document.getElementById('remark');
    if (score === 20) {
        remarkElement.innerText = getRandomRemark(remarks.excellent);
    } else if (score >= 15) {
        remarkElement.innerText = getRandomRemark(remarks.good);
    } else if (score >= 10) {
        remarkElement.innerText = getRandomRemark(remarks.average);
    } else {
        remarkElement.innerText = getRandomRemark(remarks.poor);
    }

    // Apply the new animation class
    remarkElement.classList.remove('remark-animation');
    void remarkElement.offsetWidth; // Trigger reflow to restart animation
    remarkElement.classList.add('remark-animation');
}

function restartQuiz() {
    document.getElementById('quiz-container').classList.remove('show');
    document.getElementById('result-container').classList.remove('show');
    document.getElementById('corrections-container').classList.remove('show');
    document.getElementById('home-container').classList.add('show');
}













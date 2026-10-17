/**
 * ===================================================================
 * 🇰🇷 SÜDKOREAS AUFSTIEG ZUR WIRTSCHAFTSMACHT
 * BLAUPAUSE FÜR ANDERE LÄNDER DES SÜDENS?
 * ===================================================================
 * Exakt abgestimmt auf das Bewertungsraster des Geographie-Lehrplans:
 * - Abstract (Ergebnissicherung)
 * - Basiskonzepte (Nachhaltigkeit, Maßstabsebenen, Zeithorizonte etc.)
 * - Sektoraler Strukturwandel (Primär, Sekundär, Tertiär)
 * - SWOT-Analyse Südkoreas
 * - 5 interaktive Lernstationen für Mitschüler
 * - Präsentations-Leitfaden (40-Minuten-Plan für den Vortrag)
 * - Quellen & KI-Recherche-Prompts
 */

const KOREA_DATA = {
  // 1. ABSTRACT (Vom Bewertungsraster zwingend gefordert)
  abstract: {
    title: "Abstract: Südkorea als Wirtschaftsmacht – Modell oder Sonderfall?",
    text: "Innerhalb von nur vier Jahrzehnten vollzog Südkorea die Transformation von einem kriegszerstörten, rohstoffarmen Agrarstaat mit einem Pro-Kopf-BIP unter 100 US-Dollar (1960) zu einer der weltweit führenden Industrienationen (13. größte Volkswirtschaft, 5. größter Exporteur). Der sogenannte 'Entwicklungsstaat' forcierte unter autoritärer Führung durch strikte Fünfjahrespläne, dirigistische Kredite und Bildungsförderung eine exportorientierte Industrialisierung rund um Großkonzerne (Chaebols). Doch die historische Einbettung in den Kalten Krieg (US-Hilfen, zollfreier Marktzugang), die Ausbeutung der Arbeiterschaft und massive Umweltbelastungen relativieren den Erfolg. Heute leidet Südkorea unter demografischem Kollaps (Geburtenrate 0,72) und hoher Altersarmut. Da moderne WTO-Regeln den damaligen Protektionismus verbieten und die geopolitischen Sonderbedingungen fehlen, stellt Südkorea keine 1:1-Blaupause für den heutigen Globalen Süden dar, liefert jedoch wertvolle Impulse in Bezug auf Bodenreformen und Humankapitalinvestitionen."
  },

  // 2. BASISDATEN & KENNZAHLEN
  generalInfo: {
    title: "Südkorea als Wirtschaftsmacht",
    subtitle: "Strategien von Import und Export: Blaupause für andere Länder des Südens?",
    meta: [
      { label: "BIP 1960", value: "ca. 100 USD pro Kopf (unter Niveau von Ghana & Sudan)", icon: "📉" },
      { label: "BIP heute", value: "ca. 33.000–36.000 USD (Kaufkraft: >60.000 USD, vor Japan!)", icon: "📈" },
      { label: "Weltrang Wirtschaft", value: "13.-größte Volkswirtschaft, 5.-größter Exporteur weltweit", icon: "🌐" },
      { label: "Sektor-Struktur", value: "Dienstleistungen 62 %, Industrie 35 %, Landwirtschaft 3 %", icon: "📊" },
      { label: "Rohstoff-Falle", value: "< 3 % eigener Energiebedarf deckbar (extrem abhängig von Importen)", icon: "⛽" },
      { label: "Demografie-Krise", value: "Geburtenrate 0,72 (Welt-Tiefstwert) & hohe Altersarmut", icon: "⚠️" }
    ]
  },

  // 3. BEZUG ZU DEN BASISKONZEPTEN (Bewertungsraster Punkt 1.8)
  basisKonzepte: [
    {
      titel: "Nachhaltigkeitsdimensionen",
      icon: "🌱",
      punkte: [
        "Ökonomisch: Rasanter Wohlstandssprung, aber Klumpenrisiko durch Chaebol-Monopole und hohe Verschuldung (Asienkrise 1997).",
        "Ökologisch: Hoher Preis des Wachstums – 9,5 t CO2 pro Kopf (Rang 9 weltweit), saurer Regen, hoher FCKW-Verbrauch, < 3 % Energieautarkie.",
        "Sozial: Höchste Suizidrate der OECD (25,8/100k), über 40 % Altersarmut, extremer Leistungsdruck an Schulen (Hagwons).",
        "Politisch: Jahrzehntelange Militärdiktatur (bis 1987), heute lebendige, aber polarisierte Demokratie (Kriegsrechtskrise Ende 2024)."
      ]
    },
    {
      titel: "Maßstabsebenen (Glokal)",
      icon: "🔍",
      punkte: [
        "Lokal: Saemaeul-Dorfbewegung, Zwangsumsiedlungen und Elendsviertel der Anfangszeit, Gwangju-Aufstand 1980.",
        "National: Strikte 5-Jahres-Pläne der Regierung, Verstaatlichung der Banken, Chaebol-Förderung.",
        "Regional: Konflikt an der DMZ mit Nordkorea, Spannungen mit China (THAAD-Krise) und Japan.",
        "Global: Welthandel via Seehäfen (Busan 596 Mio. t Umschlag), WTO-Mitgliedschaft, Zulieferer weltweiter Chipmärkte."
      ]
    },
    {
      titel: "Zeithorizonte",
      icon: "⏳",
      punkte: [
        "Vergangenheit (1910–1960): Koloniale Ausbeutung, Koreakrieg, Ruinenlandschaft, Agrararmut.",
        "Aufstiegsphase (1962–1996): 7 Fünfjahrespläne, 'Wunder am Han-Fluss', Industrialisierungsschub.",
        "Gegenwart: Hightech-Weltmacht, aber Verwundbarkeit in globalen Lieferketten und Handelskonflikten.",
        "Zukunft: Existenzielle Überalterung durch Schrumpfung der Erwerbsbevölkerung bis 2050."
      ]
    },
    {
      titel: "Generationengerechtigkeit",
      icon: "👥",
      punkte: [
        "Altersarmut: Die Generation, die das Wirtschaftswunder mit 70-Stunden-Wochen erarbeitete, erhält im Alter nur 66 % des Nettoeinkommens.",
        "Jugend & Zukunft: Junge Generation verweigert Familiengründung (0,72 Geburtenrate) wegen astronomischer Wohn- und Ausbildungskosten ('Hell Joseon')."
      ]
    },
    {
      titel: "Raumperspektiven",
      icon: "🧭",
      punkte: [
        "Insel-Paradoxon: Halbinsel ist durch die hermetische DMZ-Grenze logistisch eine 'reine Insel' – 100 % Außenhandel über Meer und Luft.",
        "Raumdisparitäten: Ballungsraum Seoul (Sudogwon) konzentriert 50 % der Bevölkerung auf 12 % der Fläche; ländliche Provinzen sterben aus."
      ]
    }
  ],

  // 4. SEKTORENWANDEL (Fourastié / Clark - Notizen des Schülers)
  sektorenWandel: [
    {
      sektor: "Primärer Sektor (Landwirtschaft & Fischerei)",
      anteil1960: "ca. 65 % der Beschäftigten / 40 % des BIP",
      anteilHeute: "ca. 4,8 % der Beschäftigten / 1,8 % des BIP",
      analyse: "Radikaler Rückgang durch Bodenreform und Mechanisierung. Trotzdem sichert Nonghyup (95 % aller Bauern) die nationale Reisversorgung ab."
    },
    {
      sektor: "Sekundärer Sektor (Industrie & Bau)",
      anteil1960: "unter 10 % der Beschäftigten",
      anteilHeute: "ca. 24 % der Beschäftigten / 35 % des BIP",
      analyse: "Entwicklungspfad: Textilien/Perücken (1960er) ➔ Stahl/Schiffe/Autos (1970er) ➔ Halbleiter/Hightech (ab 1980er)."
    },
    {
      sektor: "Tertiärer Sektor (Dienstleistungen & IT)",
      anteil1960: "ca. 25 % der Beschäftigten",
      anteilHeute: "ca. 71 % der Beschäftigten / 63 % des BIP",
      analyse: "Moderner Dienstleistungsstaat: Finanzwesen, Forschung & Entwicklung, Software, Logistik (Busan, Incheon Airport) und Tourismus/Kultur (Hallyu)."
    }
  ],

  // 5. SWOT-ANALYSE: SÜDKOREA ALS WIRTSCHAFTS- & ENTWICKLUNGSMODELL
  swot: {
    strengths: [
      "Weltklasse-Bildungssystem (Alphabetisierung 97 %, führend bei PISA & MINT-Absolventen)",
      "Global führende Hightech-Industrie (Halbleiter, Displays, Schiffsbau, E-Mobilität)",
      "Starke Infrastruktur & Logistik (Häfen wie Busan, weltweites Testfeld für 5G)",
      "Hohe F&E-Investitionen (Forschung & Entwicklung > 4,5 % des BIP, Rang 1-2 weltweit)"
    ],
    weaknesses: [
      "Extreme Rohstoff- & Energiearmut (< 3 % Eigenenergie, weltgrößter Kohle-/Ölimporteur)",
      "Monopolmacht und Klumpenrisiko durch Chaebols ('Too Big to Fail', Korruptionsanfälligkeit)",
      "Dramatische demografische Krise (0,72 Geburtenrate, rasanter Schwund der Arbeitskräfte)",
      "Gravierende soziale Probleme (höchste Suizidrate der OECD, Altersarmut über 40 %)"
    ],
    opportunities: [
      "Führung in Zukunftsmärkten: KI-Halbleiter, Kernkraftwerksexporte (APR-1400) und Wasserstoff",
      "Kulturelle Soft Power (K-Pop, K-Dramas) stärkt Exporte und globalen Tourismus",
      "Stärkung der genossenschaftlichen Sozialwirtschaft (über 22.000 Genossenschaften seit 2011)"
    ],
    threats: [
      "Geopolitischer Zangengriff: Verwundbarkeit zwischen Haupt-Absatzmarkt China und Sicherheitspartner USA",
      "Militärische Eskalationsgefahr durch Nordkoreas Kernwaffenprogramm",
      "Überalterung kollabiert mittelfristig Rentensystem und Wehrpflicht-Armee"
    ]
  },

  // 6. DIE 5 LERNSTATIONEN (FÜR DIE MITSCHÜLER / DIGITALES HANDOUT)
  stations: [
    {
      id: "ausgangslage",
      number: "Station 1",
      title: "Ausgangslage: Totaler Ruin & die Rohstoff-Falle",
      icon: "🏚️",
      tagline: "Das Nordkorea-Paradoxon, < 3 % Energie und Gastarbeiter in Deutschland",
      summary: "Nach 1953 besaß Südkorea fast keine Industrie, Hunger und unter 3 % eigene Energieressourcen. Wie gelang der Start?",
      image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Traditionelle Strukturen vor der rasanten Industrialisierung",
      youtubeId: "V5d3vR5YgWk",
      keyPoints: [
        {
          title: "Das Nordkorea-Paradoxon nach 1953",
          text: "Die japanische Kolonialmacht (1910–1945) hatte die Schwerindustrie im rohstoffreichen Norden gebaut; der Süden war fast rein agrarisch. Nach dem Koreakrieg erholte sich Nordkorea dank Sowjethilfe anfangs viel schneller als Südkorea, wo unter Präsident Rhee Korruption und Stillstand herrschten."
        },
        {
          title: "Extreme Energiearmut (< 3 % Eigenressourcen)",
          text: "Südkorea besitzt fast keine fossilen Brennstoffe: Weniger als 3 % des Energiebedarfs können selbst gedeckt werden! Südkorea wurde zum zweitgrößten Kohleimporteur der Welt und importiert täglich ca. 2,9 Mio. Barrel Öl (Platz 7 weltweit, vor Deutschland)."
        },
        {
          title: "Bodenreform & Devisen durch Gastarbeiter in Deutschland",
          text: "In den 1950ern enteignete der Staat Großgrundbesitz und verteilte Parzellen an Kleinbauern. 1963 schickte Korea ca. 8.000 Bergleute und 10.000 Krankenschwestern als 'Gastarbeiter' nach Deutschland. Deren Überweisungen brachten Devisen für erste Fabrikmaschinen."
        }
      ],
      interactiveTask: {
        heading: "📝 Gruppenaufgabe 1: Rohstoffe vs. Humankapital",
        question: "Viele Entwicklungsländer im Globalen Süden besitzen reiche Bodenschätze (z.B. Öl, Erze) und bleiben arm. Südkorea hatte unter 3 % eigene Energie. Warum wurde der Rohstoffmangel für Südkorea zum Hebel für den Erfolg?",
        sampleSolution: "Weil Südkorea keine Bodenschätze verkaufen konnte ('Ressourcenfluch' blieb aus), war das Land gezwungen, in das Einzige zu investieren, was es hatte: Humankapital (Bildung, Disziplin, Ingenieurswesen), Veredelung importierter Rohstoffe und Export von Fertigwaren auf den Weltmarkt."
      },
      weblinks: [
        { label: "bpb: Südkoreas Weg zur Wirtschaftsmacht", url: "https://www.bpb.de/themen/asien/ostasien/329582/suedkoreas-weg-zur-wirtschaftsmacht/" }
      ]
    },

    {
      id: "erfolgsfaktoren",
      number: "Station 2",
      title: "Der 'Entwicklungsstaat': Fünfjahrespläne & Chaebols",
      icon: "⚙️",
      tagline: "Dirigismus, POSCO-Stahl, Häfen und Genossenschaften",
      summary: "Der Staat plante die Industrialisierung in 7 Fünfjahresplänen und züchtete Weltkonzerne wie Samsung und Hyundai.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Schwerindustrie, Werften und Halbleiterproduktion",
      youtubeId: "j6PbonHbbQ0",
      keyPoints: [
        {
          title: "Die 7 Fünfjahrespläne (1962–1996)",
          text: "• Phase 1 (1962–66): Verstaatlichung der Banken, Alphabetisierungssprung (22 % auf 87 %),\n• Phase 2 & 3 (1967–76): Autobahnbau, Schwerindustrie (POSCO-Stahl, Werften, Petrochemie),\n• Phase 5 ab 1982: High-Tech-Wende zu Mikrochips, Halbleitern und F&E-Investitionen."
        },
        {
          title: "Hafen-Explosion & Exportzwang",
          text: "Der Güterumschlag der Häfen (v.a. Busan) explodierte von 9 Mio. Tonnen (1961) auf über 596 Mio. Tonnen! Der Staat gewährte Großkonzernen (Chaebols) günstige Kredite nur dann, wenn sie harte Exportquoten erfüllten."
        },
        {
          title: "Die Genossenschaften (Nonghyup & Saemaeul)",
          text: "Über die Saemaeul-Bewegung und den Bauernverband Nonghyup (organisiert 95 % aller Landwirte mit eigener NH Bank) und Saemaul Geumgo (21 Mio. Mitglieder) wurde die ländliche Bevölkerung vor Verarmung und Wucher geschützt."
        }
      ],
      interactiveTask: {
        heading: "📝 Gruppenaufgabe 2: Der dirigistische Staat",
        question: "Zeigt auf, warum Südkoreas Erfolg KEIN Triumph des 'freien Marktes' (Neoliberalismus) war, sondern eines staatlich gelenkten Entwicklungsstaates.",
        sampleSolution: "Belege: 1. Der Staat verstaatlichte alle Banken und steuerte Kredite direkt. 2. Strenge Importverbote schützten den Binnenmarkt. 3. Die Regierung entschied autoritär, welche Konzerne (Chaebols) gefördert wurden und welche Branchen aufgebaut werden mussten."
      },
      weblinks: [
        { label: "GTAI: Südkorea Industrie- und Wirtschaftspolitik", url: "https://www.gtai.de/de/trade/suedkorea" }
      ]
    },

    {
      id: "geopolitik-kalter-krieg",
      number: "Station 3",
      title: "Geopolitischer Sonderstatus & Atomdebatte",
      icon: "🌐",
      tagline: "US-Schirm, Vietnam-Devisen und das Ringen um Atomwaffen",
      summary: "Südkoreas Aufstieg war tief verwoben mit der Frontlinie des Kalten Krieges und massiver amerikanischer Rückendeckung.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Grenzbeobachtung und Hochsicherheit an der DMZ",
      youtubeId: "5GhmL_a4g74",
      keyPoints: [
        {
          title: "US-Milliarden & ungleicher Marktzugang",
          text: "Als antikommunistisches Bollwerk direkt an der Front zu Nordkorea und China erhielt Südkorea gewaltige US-Militär- und Wirtschaftshilfen. Die USA tolerierten, dass Korea seinen Markt für US-Waren schloss, während koreanische Waren zollfrei in die USA durften."
        },
        {
          title: "Japan-Normalisierung (1965) & Vietnamkrieg",
          text: "1965 schloss Diktator Park Chung-hee gegen Proteste ein Abkommen mit Japan: 800 Mio. USD Entschädigung und Kredite. Im Vietnamkrieg kämpften über 300.000 koreanische Soldaten – US-Zahlungen brachten Milliarden an Devisen."
        },
        {
          title: "Atomprogramm & heutige Nukleardebatte",
          text: "In den 1970ern baute Südkorea heimlich an Nuklearwaffen (1978 von USA gestoppt). Heute befürworten rund 70 % der Bevölkerung eigene Atomwaffen zur Abschreckung gegen Nordkorea (~50 Sprengköpfe). Technisch sofort machbar, verzichtet Seoul aus Rücksicht auf Sanktionen."
        }
      ],
      interactiveTask: {
        heading: "📝 Gruppenaufgabe 3: Der Geopolitik-Bonus",
        question: "Hätte Südkorea diesen Aufstieg ohne die Finanzhilfen, den US-Militärschirm und die Sonderrechte des Kalten Krieges geschafft? Was bedeutet das für heutige Entwicklungsländer?",
        sampleSolution: "Nein, sehr unwahrscheinlich. Ohne US-Gelder, japanische Kredite und zollfreien US-Marktzugang hätte Südkorea weder Kapital noch Absatzmärkte gehabt. Heutige Entwicklungsländer besitzen diesen einmaligen Sonderstatus nicht mehr."
      },
      weblinks: [
        { label: "bpb: Der Korea-Konflikt und die USA", url: "https://www.bpb.de" }
      ]
    },

    {
      id: "schattenseiten-krisen",
      number: "Station 4",
      title: "Der dunkle Preis: Diktatur, Krise & Suizidrate",
      icon: "⚠️",
      tagline: "Gwangju-Massaker, Daewoo-Bankrott und die höchste Suizidrate der OECD",
      summary: "Der Rekordaufstieg hatte einen brutalen Preis: Zwangsarbeit, Umweltzerstörung, Asienkrise 1997 und extreme gesellschaftliche Krisen.",
      image: "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Megacity Seoul zwischen Wohlstand und gnadenlosem Leistungsdruck",
      youtubeId: "rVnO_d2_eUQ",
      keyPoints: [
        {
          title: "Brutale Militärdiktatur & Gwangju (1980)",
          text: "Bis 1987 herrschten Diktatoren (Park Chung-hee, Chun Doo-hwan). Streiks waren verboten, Arbeiter leisteten bis zu 2.400 Stunden im Jahr. Beim Gwangju-Aufstand 1980 schlug die Armee Demonstranten blutig nieder (Hunderte bis Tausende Tote)."
        },
        {
          title: "Asienkrise 1997 & der Fall Daewoo",
          text: "Extreme Schulden der Chaebols führten 1997 zum Fast-Bankrott. Der IWF erzwang Reformen: Der zweitgrößte Konzern Daewoo (80 Mrd. USD Schulden) wurde 1999 aufgelöst – 'Niemand ist Too Big to Fail!' Südkorea zahlte die IWF-Schulden bereits 2001 komplett zurück."
        },
        {
          title: "Suizidrate & Demografie-Kollaps",
          text: "Seit 2003 hat Südkorea die höchste Suizidrate aller OECD-Staaten (25,8/100k, ca. 36 Suizide pro Tag). Gleichzeitig liegt die Geburtenrate bei nur 0,72 (Welt-Tiefstwert) und über 40 % der Senioren leben in Altersarmut."
        },
        {
          title: "Ökologische Narben",
          text: "Mit 9,5 Tonnen CO2 pro Kopf (Rang 9 weltweit), saurem Regen und massiver Gewässerbelastung zahlte die Natur die Zeche für das Wachstum."
        }
      ],
      interactiveTask: {
        heading: "📝 Gruppenaufgabe 4: Der gesellschaftliche Preis",
        question: "Welche sozialen und psychischen Schäden hat das Hochleistungsmodell erzeugt? Ist dieser Preis für den wirtschaftlichen Wohlstand vertretbar?",
        sampleSolution: "Schäden: Höchste Suizidrate der OECD, Altersarmut (Rente deckt nur 66 % des Nettoeinkommens), Ausbeutung der Arbeiterschaft und weltniedrigste Geburtenrate (0,72). Das Modell bedroht durch extreme Überalterung heute seine eigene Zukunftsfähigkeit."
      },
      weblinks: [
        { label: "Tagesschau: Südkoreas Demografie-Krise", url: "https://www.tagesschau.de/ausland/asien/suedkorea-geburtenrate-102.html" }
      ]
    },

    {
      id: "fazit-blaupause",
      number: "Station 5",
      title: "Fazit: Ist Südkorea eine Blaupause für den Süden?",
      icon: "⚖️",
      tagline: "Die wissenschaftliche Bilanz zur Leitfrage des Referats",
      summary: "Kann ein Land in Afrika (wie Ghana oder Ruanda) Südkoreas Weg heute 1:1 kopieren? Die klare Gegenüberstellung.",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "High-Tech-Industrie: Vorbild, aber keine einfache Schablone",
      youtubeId: "vBhyjI0_JdE",
      keyPoints: [
        {
          title: "WAS KANN DER GLOBALE SÜDEN LERNEN? (Pro)",
          text: "1. Bildung als Hebel: Südkorea bewies, dass man ohne Bodenschätze durch Bildung zur Weltspitze aufsteigen kann.\n2. Bodenreform vor Industrialisierung: Abbau feudaler Strukturen als Startvoraussetzung.\n3. Devisen gezielt nutzen: Gelder von Arbeitsmigranten (wie damals in Deutschland) müssen in Fabriken fließen.\n4. Genossenschaften (Nonghyup): Schutz ländlicher Strukturen vor Ausverkauf."
        },
        {
          title: "WARUM IST ES KEINE 1:1-BLAUPAUSE? (Contra)",
          text: "1. WTO-Regelwerk verbietet Protektionismus: Schutzzölle und einseitige Kredite sind heute völkerrechtlich untersagt.\n2. Kein Kalter-Krieg-Bonus: Keine bedingungslosen US-Milliardenhilfen mehr.\n3. Diktatur ist inakzeptabel: Autokratie und Zwangsarbeit sind menschenrechtlich abzulehnen.\n4. Globale Märkte besetzt: Konkurrenz durch China, Indien und Vietnam ist heute erdrückend."
        },
        {
          title: "Das Gesamtfazit für das Referat",
          text: "Südkorea ist ein bemerkenswertes Zeugnis wirtschaftlicher Entwicklung, aber KEINE Universalschablone. Es liefert wichtige Bausteine (Bildung, Industriepolitik), aber Entwicklungsländer müssen heute eigene, demokratische und nachhaltige Wege finden."
        }
      ],
      interactiveTask: {
        heading: "📝 Gruppenaufgabe 5: Das Abschluss-Urteil zur Leitfrage",
        question: "Formuliert euer endgültiges Gruppenurteil zur Leitfrage: 'Ist Südkorea eine Blaupause für den Globalen Süden?' Begründet mit je einem starken Pro- und Contra-Argument!",
        sampleSolution: "Südkorea ist nur sehr bedingt eine Blaupause. Einerseits beweist es, dass radikale Bildungsinvestitionen, Bodenreformen und gezielte Industriepolitik auch rohstoffarme Länder reich machen können (Pro). Andererseits waren die Bedingungen einmalig (Kalter Krieg, massive US-Sonderhilfen) und der Preis (brutale Militärdiktatur, Umweltzerstörung, Überalterung) zu hoch, während moderne WTO-Regeln solche Schutzzölle heute verbieten (Contra)."
      },
      weblinks: [
        { label: "OECD: Wirtschaftsprofil Südkorea", url: "https://www.oecd.org" }
      ]
    }
  ],

  // 8. QUELLEN & KI-RECHERCHE-PROMPTS (Offiziell gefordert im Bewertungsraster)
  quellenPrompts: {
    quellen: [
      { titel: "Bundeszentrale für politische Bildung (bpb)", info: "Dossier Ostasien: Südkoreas Weg zur Wirtschaftsmacht & Der Korea-Konflikt (2022)." },
      { titel: "OECD Economic Surveys: Korea", info: "Wirtschaftsberichte, Suizidstatistiken, Rentenniveau und Geburtenraten (2020–2024)." },
      { titel: "Germany Trade & Invest (GTAI)", info: "Wirtschaftsdaten, Außenhandel und Branchenstruktur Republik Korea (2023/2024)." },
      { titel: "Weltbank Logistics Performance Index & ECI", info: "Economic Complexity Index (Platz 4 weltweit) & Hafenlogistik." },
      { titel: "Detlef Pollack / Wikipedia Korea", info: "Historische Entwicklung, Genossenschaftswesen (Nonghyup) und Religionssoziologie." }
    ],
    prompts: [
      {
        ziel: "Vertiefung WTO-Handelsregeln vs. 1960er",
        prompt: "Vergleiche die heutigen WTO-Handelsregeln für Subventionen und Schutzzölle mit den protektionistischen Maßnahmen Südkoreas in den 1960er/70er Jahren. Warum ist das Modell heute rechtlich nicht mehr 1:1 umsetzbar?"
      },
      {
        ziel: "Raumanalyse Seoul vs. ländlicher Raum",
        prompt: "Analysiere die regionalen Disparitäten in Südkorea: Welche Ursachen und Folgen hat die extreme Konzentration von Bevölkerung und Wirtschaft im Ballungsraum Sudogwon (Seoul)?"
      },
      {
        ziel: "Vergleich Südkorea vs. Ruanda / Vietnam",
        prompt: "Inwiefern orientieren sich aufstrebende Staaten des Globalen Südens wie Ruanda oder Vietnam heute an Elementen des ostasiatischen Entwicklungsstaates?"
      }
    ]
  },

  // 9. FACHBEGRIFFE (FLASHCARDS)
  flashcards: [
    {
      term: "Blaupause (Blueprint)",
      category: "Leitbegriff",
      explanation: "Eine genaue Konstruktionsvorlage oder Schablone, die unverändert auf andere Länder übertragen werden soll."
    },
    {
      term: "Entwicklungsstaat (Developmental State)",
      category: "Wirtschaftsmodell",
      explanation: "Ein Staat, der das Wirtschaftsgeschehen nicht dem Markt überlässt, sondern durch Fünfjahrespläne, gezielte Kredite und Protektionismus die Industrialisierung erzwingt."
    },
    {
      term: "Chaebol (Jaebeol, 재벌)",
      category: "Unternehmensform",
      explanation: "Mächtige, familiengeführte Großkonzerne (Samsung, Hyundai, SK, LG, Lotte), die eng mit der Regierung verwoben sind und den Export dominieren."
    },
    {
      term: "Bodenreform (1950er)",
      category: "Agrarstruktur",
      explanation: "Die Enteignung von Großgrundbesitz und Verteilung an Kleinbauern. Verbot von Landspekulation schuf soziale Gleichheit und brach die feudale Elite."
    },
    {
      term: "Energie-Verletzlichkeit",
      category: "Geografie / Ressourcen",
      explanation: "Südkorea kann < 3 % seines Energiebedarfs selbst decken. Es ist der 2.-größte Kohle- und 7.-größte Erdölimporteur der Welt."
    },
    {
      term: "Saemaeul & Nonghyup",
      category: "Genossenschaften",
      explanation: "Die 'Neues Dorf Kampagne' und der 2-Mio.-Bauern-Verband Nonghyup, die mit eigener Bank das ländliche Südkorea absicherten."
    }
  ],

  // 10. WISSENS-QUIZ ZUR ERGEBNISSICHERUNG
  quiz: [
    {
      question: "Warum erholte sich Nordkorea nach dem Koreakrieg zunächst viel schneller als Südkorea?",
      options: [
        "Weil die Kolonialmacht Japan die Schwerindustrie im rohstoffreichen Norden gebaut hatte und die UdSSR massiv half",
        "Weil Südkorea keine Demokratie hatte",
        "Weil Nordkorea riesige Ölvorkommen besaß",
        "Weil Südkorea keinerlei Hilfe aus dem Westen erhielt"
      ],
      correct: 0,
      explanation: "Richtig! Die Kolonialmacht Japan hatte Industrie im Norden angesiedelt. Der Süden war ein fast reines Agrarland ohne Bodenschätze."
    },
    {
      question: "Wie viel Prozent seines Energiebedarfs kann Südkorea aus eigenen fossilen Ressourcen decken?",
      options: [
        "Über 75 % (fast autark)",
        "Etwa 50 %",
        "Weniger als 3 % (extrem importabhängig)",
        "Rund 25 %"
      ],
      correct: 2,
      explanation: "Richtig! Weniger als 3 % der fossilen Energien sind im Land vorhanden. Südkorea ist der zweitgrößte Kohleimporteur der Welt."
    },
    {
      question: "Welche Rolle spielten die südkoreanischen 'Gastarbeiter' in Deutschland ab 1963?",
      options: [
        "Sie bauten die ersten Samsung-Fabriken in Berlin",
        "Ca. 18.000 Bergleute und Krankenschwestern überwiesen Devisen nach Korea, die Fabrikmaschinen finanzierten",
        "Sie wanderten aus Protest gegen das Essen aus",
        "Sie verhandelten Friedensverträge mit der DDR"
      ],
      correct: 1,
      explanation: "Richtig! Die Überweisungen der Bergarbeiter und Krankenschwestern waren eine unverzichtbare Devisenquelle für Südkoreas Industrialisierung."
    },
    {
      question: "Was geschah während der Asienkrise 1997 mit dem zweitgrößten Konzern Daewoo?",
      options: [
        "Er kaufte Samsung und Hyundai auf",
        "Er wurde mit staatlichen Notgeldern gerettet und verstaatlicht",
        "Er ging unter 80 Mrd. USD Schulden unter und wurde aufgelöst ('Niemand ist Too Big to Fail')",
        "Er verlegte seinen Hauptsitz in die USA"
      ],
      correct: 2,
      explanation: "Richtig! Daewoo wurde 1999 mit ca. 80 Mrd. USD Schulden zerschlagen. Der Staat zeigte, dass marode Konzerne nicht bedingungslos gerettet werden."
    },
    {
      question: "Welche dramatische gesellschaftliche Schattenseite prägt Südkorea heute laut OECD-Statistiken?",
      options: [
        "Die höchste Suizidrate aller OECD-Staaten und die weltniedrigste Geburtenrate (0,72)",
        "Extrem hohe Analphabetenquote bei Jugendlichen",
        "Rückfall in die reine Selbstversorger-Landwirtschaft",
        "Ein generelles Verbot von Computern und Handys"
      ],
      correct: 0,
      explanation: "Richtig! Extremer Konkurrenzdruck und Armut im Alter haben zu Rekord-Suizidraten und einem demografischen Kollaps geführt."
    },
    {
      question: "Warum kann Südkoreas Modell für heutige Entwicklungsländer im Globalen Süden KEINE 1:1-Blaupause sein?",
      options: [
        "Weil heutige WTO-Regeln die damaligen Schutzzölle und Subventionen verbieten",
        "Weil der Kalte Krieg mit seinen einseitigen US-Milliardenhilfen vorbei ist",
        "Weil die damalige blutige Militärdiktatur menschenrechtlich inakzeptabel ist",
        "Alle genannten Gründe treffen zu"
      ],
      correct: 3,
      explanation: "Richtig! WTO-Regeln, der veränderte weltpolitische Kontext und ethische Mindeststandards machen ein einfaches Kopieren unmöglich."
    }
  ]
};

if (typeof window !== "undefined") {
  window.KOREA_DATA = KOREA_DATA;
}

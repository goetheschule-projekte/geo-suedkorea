/**
 * ===================================================================
 * SÜDKOREAS AUFSTIEG ZUR WIRTSCHAFTSMACHT
 * BLAUPAUSE FÜR ANDERE LÄNDER DES SÜDENS?
 * ===================================================================
 * Fachliches Geographie-Dossier & digitales Handout
 * zur Vorbereitung auf das Abitur (KCGO Geographie Q3).
 *
 * Gliederung:
 * 1. Abstract (vollständige Zusammenfassung, ca. 650 Wörter)
 * 2. Entwicklungsweg & historische Phasen (Zeitleiste)
 * 3. Raum- und Problemanalyse (Seoul-Ballung, maritime Lage, Rohstoffe, Sektoren)
 * 4. Kriterienanalyse: Übertragbarkeit auf den Globalen Süden (Blaupause)
 * 5. Lernstationen für den Unterricht (mit Arbeitsfragen & Musterlösungen)
 * 6. Basiskonzepte des Geographie-Lehrplans (KCGO)
 * 7. SWOT-Raumanalyse
 * 8. Zentrale Fachbegriffe
 * 9. Wissensquiz zur Selbstkontrolle
 * 10. Kommentierte Quellensammlung & Recherchehinweise
 */

const KOREA_DATA = {
  // -------------------------------------------------------------------
  // 1. ABSTRACT (ca. 650 Wörter)
  // -------------------------------------------------------------------
  abstract: {
    title: "Abstract: Südkoreas Aufstieg zur Wirtschaftsmacht – Modell oder Sonderfall?",
    subheading: "Fachliche Synthese nach geographischen Kriterien (Lehrplan Geographie Q3)",
    paragraphs: [
      {
        heading: "1. Ausgangslage und die oft übersehene institutionelle Vorbedingung (1953–1960)",
        text: "Nach dem Waffenstillstand von 1953 galt Südkorea als wirtschaftlich hoffnungsloser Fall. Mit einem Bruttoinlandsprodukt (BIP) von 94 bis 159 US-Dollar je Einwohner in den Jahren 1960/61 (1960: 159 USD; 1961: 94 USD, Weltbank) lag das kriegszerstörte Land nominal sogar unter Ghana (175–182 USD). Die japanische Kolonialherrschaft (1910–1945) hinterließ ein unausgewogenes Raumgefüge: Rohstoffe und Schwerindustrie lagen im Norden, während der Süden als agrarische Peripherie mit zerstörter Infrastruktur und Binnenflüchtlingen verblieb. Verschärft wurde dies durch die Insellage an der Demilitarisierten Zone (DMZ): Fossile Brennstoffe werden zu 98 % importiert; die gesamte Energieselbstversorgung liegt bei nur rund 20 % (IEA). Für die Beantwortung der Leitfrage entscheidend war jedoch eine institutionelle Vorbedingung: Die Bodenreform von 1949/50 zerschlug den feudalen Großgrundbesitz (3-Hektar-Obergrenze) und steigerte den Anteil selbstwirtschaftender Eigentümer von 14 % (1945) auf 70 % (1965). Dies schuf frühzeitig eine egalitäre Sozialstruktur, verhinderte Slumbildung und erzeugte ländliche Binnennachfrage."
      },
      {
        heading: "2. Der dirigistische Entwicklungsstaat statt freier Marktmechanismen",
        text: "Südkoreas Aufstieg widerlegt die Annahme, Wohlstand entstehe primär durch Deregulierung. Unter Park Chung-hee (ab 1961) steuerte ein dirigistischer Entwicklungsstaat („Developmental State“) die Wirtschaft über sieben Fünfjahrespläne (1962–1996). Der Staat verstaatlichte Banken und lenkte Kredite selektiv an Großkonzerne (Chaebols wie Samsung, Hyundai, LG), deren kombinierter Umsatz 40,8 % des nominalen BIP entspricht (Top 4: 729 Mrd. USD; KFTC; inländische Wertschöpfung ca. 15–20 %, Exportanteil über 60 %). Anders als bei gescheiterten Beihilfesystemen im Globalen Süden knüpfte Seoul Förderungen an strikte Leistungsmaßstäbe („Performance Standards“): Nur wer Exportquoten auf dem Weltmarkt erfüllte, erhielt Unterstützung. Devisen von 7.936 Bergleuten und 10.032 Pflegekräften in Deutschland (fast 2 % des BIP) finanzierten Maschinenimporte. Zugleich kompensierten massive Bildungsausgaben den Rohstoffmangel: Mit 5,13 % F&E-Quote belegt Südkorea weltweit Rang 2 hinter Israel (NISTEP/OECD 2024)."
      },
      {
        heading: "3. Sektoraler Strukturwandel, Gyeongbu-Achse und globale Wertschöpfungsketten",
        text: "Im Eiltempo vollzog Südkorea den Strukturwandel nach Fourastié und Clark: Von Leichtindustrie (1960er) über Chemie und Schwerindustrie (1970er) bis zur Hochtechnologie. Südkorea hält mit 34,3 % Industrieanteil am BIP eine starke Produktionsbasis (Dienstleistungen: 57,2 %, Agrar: 1,5 %; Weltbank 2025). Raumwirtschaftlich konzentrierte sich das Wachstum entlang der Gyeongbu-Achse (Seoul–Busan) sowie an der Südostküste (Hafen Busan: Rang 7 weltweit mit 24,5–24,9 Mio. TEU; 99,7 % des Außenhandels nach Gewicht über See). Die Exporte erreichten 683,8 Mrd. USD (2024) und 709 Mrd. USD (2025, WTO-Rang 8); die USA (18,8 %) holten China (19,5 %) fast ein. Durch Halbleiter (20,8 % bis 24,4 % der Exporte; >70 % Weltmarkt bei DRAM) sitzt Südkorea an der Spitze globaler Wertschöpfungsketten, aber im geopolitischen Dilemma zwischen den USA und China. Über 90 % der Ölimporte passieren den Chokepoint der Straße von Malakka."
      },
      {
        heading: "4. Das Nachhaltigkeitsdefizit: Demografische und gesellschaftliche Belastungsgrenzen",
        text: "Die forschierte Aufholjagd forderte hohe gesellschaftliche Tribute: Hohe Emissionen von ca. 11,3–11,4 t CO2 je Einwohner (Weltbank 2024) und jahrzehntelange autoritäre Repression (Gwangju 1980). Wegen spät aufgebauter Sozialsysteme leben rund 40 % der über 65-Jährigen in relativer Altersarmut (OECD Pensions at a Glance 2025 / NPRI: 39,7 %; höchster Wert im OECD-Raum bei einem Schnitt von 14,8 %). Die extreme Verdichtung im Großraum Sudogwon (50,0–50,5 % der Bevölkerung auf 11,8 % der Landesfläche) trieb Immobilienpreise und Nachhilfekosten in existenzielle Höhen. Nach dem historischen Tiefstand der Fertilitätsrate von 0,72 im Jahr 2023 verzeichnet Südkorea 2024/25 eine leichte Erholung auf 0,75 bzw. 0,80 (Seoul: 0,63; Ministry of Data and Statistics / Reuters), bleibt jedoch dramatisch unter dem Bestandserhaltungsniveau von 2,1. Begleitet wird dies von der höchsten Suizidrate der OECD (altersstandardisiert 24,8 je 100.000; unbereinigt 27,3; Statistics Korea)."
      },
      {
        heading: "5. Synthese und Urteil zur Leitfrage: Blaupause oder historischer Sonderfall?",
        text: "Aus wirtschaftsgeographischer Sicht ist das Gesamturteil zur Leitfrage eindeutig: Auf der Makroebene ist Südkorea kein universell kopierbares Modell, sondern ein historischer Sonderfall des Kalten Krieges (US-Milliardenhilfen, Vietnamkrieg-Devisen, Duldung asymmetrischer Zölle bei freiem US-Marktzugang). Heutige WTO-Regeln untersagen die damaligen Instrumente – insbesondere exportabhängige Subventionen (Art. 3 SCM) und Local-Content-Zwang (Art. 2 TRIMs); Zölle sind durch Bound Tariffs limitiert. Zudem treffen Entwicklungsländer heute auf etablierte asiatische Fertigungshubs (China, Vietnam, Indien) mit gewaltigen Skalenvorteilen und integrierten Clustern. Übertragbar sind folglich nicht autoritäre Staatsstrukturen, sondern modulare Prinzipien: Erstens Bodenreformen vor der Industrialisierung zur Sicherung ländlicher Einkommen; zweitens konsequente MINT-Bildung vor Rohstoffabbau; drittens Agrargenossenschaften (Nonghyup mit 2 Mio. Mitgliedern) zum Schutz vor Überschuldung; und viertens die Koppelung staatlicher Fördermittel an messbare Exportkriterien."
      }
    ],
    wordCount: 657,
    keyTakeaway: "Fazit zur Leitfrage: Südkorea ist kein schablonenhaft kopierbares Modell, sondern ein historischer Sonderfall des Kalten Krieges. Für Entwicklungsländer bietet es wertvolle modulare Impulse (Bodenreform, MINT-Bildung, Genossenschaften), sendet jedoch zugleich eine deutliche Warnung vor den existenzbedrohenden demografischen und sozialen Spätfolgen einer rein wachstumsfixierten Modernisierung.",
  },

  // -------------------------------------------------------------------
  // 2. KENNZAHLEN
  // -------------------------------------------------------------------
  generalInfo: {
    title: "Südkoreas Transformation in Kennzahlen",
    subtitle: "Vom kriegszerstörten Agrarland zur führenden Industrienation (1960 bis heute)",
    meta: [
      { label: "BIP pro Kopf 1960/61", value: "ca. 94–159 USD (1960: 159 USD; 1961: 94 USD)", sub: "Laufende USD, Weltbank (nominal unter Ghana mit 175–182 USD)" },
      { label: "BIP pro Kopf heute", value: "ca. 36.200 USD nominal (Kaufkraft: >61.000–63.000 Intl-$)", sub: "Weltbank 2024/25 / IWF (2025: 36.227 USD nominal; 63.125 Intl-$ PPP)" },
      { label: "Weltrang Wirtschaft & Export", value: "13. größte Volkswirtschaft & Rang 6–8 beim Export", sub: "BIP: Rang 13 (Weltbank, 1,87 Bio. USD); Warenexport: 709 Mrd. USD (WTO 2025: Rang 8, zeitweise Rang 6)" },
      { label: "Sektorale Anteile (BIP)", value: "Dienstleistungen 57,2 %, Industrie 34,3 %, Agrar 1,5 %", sub: "Weltbank 2025 (Wertschöpfung); außergewöhnlich hohe Industriebasis (Dtl. 24 %)" },
      { label: "Energie & CO2-Emissionen", value: "98 % fossiler Import | ~20 % Selbstversorgung | 11,3–11,4 t CO2/Kopf", sub: "IEA / Asiae (2025/26); Weltbank 2024: 11,36 t CO2/Kopf; Rohölimporte 2,76 Mio. b/d (Top 4 weltweit)" },
      { label: "Demografie & Altersarmut", value: "Tiefpunkt 2023: 0,72 (2024: 0,75; 2025: 0,80) | ~40 % relative Altersarmut", sub: "Ministry of Data and Statistics / OECD Pensions at a Glance 2025 (OECD-Höchstwert)" }
    ]
  },

  // -------------------------------------------------------------------
  // 3. ENTWICKLUNGSWEG (6 PHASEN)
  // -------------------------------------------------------------------
  timelinePhases: [
    {
      phase: "Phase 1: 1953–1961",
      title: "Nachkriegszeit und frühe Importsubstitution",
      stateRole: "Klientelistischer Staat unter Syngman Rhee; hohe Abhängigkeit von US-Hilfsgütern.",
      industrialPolicy: "Bodenreform 1949/50 (3-Hektar-Obergrenze); Versuch der Importsubstitution bei Grundkonsumgütern (Textilien, Mehl, Zucker); Devisenknappheit.",
      educationPolicy: "Aufbau der Grundschulbildung (Alphabetisierungsrate stieg von 22 % im Jahr 1945 über 72 % 1960 auf knapp 88 % 1970).",
      spatialFocus: "Flüchtlingslager in Busan; Wiederaufbau Seouls; weitgehend agrarisch geprägtes Umland.",
      geoOutcome: "Wirtschaftliche Stagnation; Nordkorea erzielte zunächst höhere Wachstumsraten."
    },
    {
      phase: "Phase 2: 1962–1971",
      title: "Beginn des Entwicklungsstaates und Leichtindustrie",
      stateRole: "Militärregierung Park Chung-hee; Einführung von Fünfjahresplänen; Verstaatlichung der Banken.",
      industrialPolicy: "Schutz des Binnenmarktes bei gleichzeitigem Exportzwang für arbeitsintensive Leichtindustrie (Textilien, Schuhe).",
      educationPolicy: "Verpflichtende Primarbildung, Ausbau beruflicher und technischer Schulen.",
      spatialFocus: "Bau des Gyeongbu Expressways (Seoul–Busan); Arbeitsmigration nach Deutschland (7.936 Bergleute, 10.032 Pflegekräfte; Devisenüberweisungen erreichten fast 2 % des BIP).",
      geoOutcome: "Verdopplung des BIP; internationale Wettbewerbsfähigkeit im Niedriglohnsegment."
    },
    {
      phase: "Phase 3: 1972–1979",
      title: "Schwer- und Chemieindustrie (HCI-Programm)",
      stateRole: "Autoritäres Regime; gezielte Förderung und Steuerung ausgewählter Großkonzerne (Chaebols).",
      industrialPolicy: "Aufbau von Stahl (POSCO in Pohang), Großwerften (Ulsan), Petrochemie und Automobilproduktion.",
      educationPolicy: "Gründung staatlicher Forschungseinrichtungen (z.B. KAIST 1971) zur Ausbildung von Ingenieuren.",
      spatialFocus: "Industrielle Entwicklung an der Südostküste (Pohang, Ulsan, Changwon, Busan) wegen Hafenanbindung.",
      geoOutcome: "Überholung Nordkoreas; Etablierung einer leistungsfähigen Grundstoff- und Investitionsgüterindustrie."
    },
    {
      phase: "Phase 4: 1980–1996",
      title: "Hochtechnologie, Demokratisierung und OECD-Beitritt",
      stateRole: "Übergang von der Militärdiktatur zur Demokratie (1987); schrittweise Marktöffnung; OECD-Beitritt 1996.",
      industrialPolicy: "Aufstieg in der Wertschöpfungskette: Speicherchips (DRAM), Bildschirmtechnik und Konsumelektronik.",
      educationPolicy: "Starker Anstieg der Hochschulquote; Ausbreitung privater Nachhilfeeinrichtungen (Hagwons).",
      spatialFocus: "Entstehung von Technologie- und Forschungsclustern im Raum Gyeonggi/Suwon und Daejeon.",
      geoOutcome: "Aufstieg zu einer führenden Exportnation; jedoch riskante Verschuldung der Chaebols."
    },
    {
      phase: "Phase 5: 1997–2000",
      title: "Asienkrise und wirtschaftliche Restrukturierung",
      stateRole: "Krise der Zahlungsbilanz; Inanspruchnahme von IWF-Krediten; Strukturreformen im Finanzsektor.",
      industrialPolicy: "Zerschlagung hoch verschuldeter Konzerne (u.a. Daewoo); Marktbereinigung und Öffnung für Auslandskapital.",
      educationPolicy: "Fokus auf Informationstechnologie, Digitalisierung und den Ausbau der Breitbandinfrastruktur.",
      spatialFocus: "Modernisierung der Ballungsräume; Seoul etabliert sich als digitales Dienstleistungszentrum.",
      geoOutcome: "Vorzeitige Rückzahlung der IWF-Kredite (2001); Umorientierung auf eine wissensbasierte Ökonomie."
    },
    {
      phase: "Phase 6: 2000 bis heute",
      title: "Globale Digitalökonomie, Halbleiter und Demografiekrise",
      stateRole: "Demokratischer Staat mit F&E-Quote von 5,13 % des BIP (OECD 2024; weltweit Rang 2 hinter Israel).",
      industrialPolicy: "Weltmarktführerschaft bei Speicherchips, Batteriezellen und Spezialschiffen; Halbleiter machen 20,8 % bis 24,4 % der Exporte aus.",
      educationPolicy: "Spitzenplatzierungen in PISA-Studien, aber ausgeprägter Prüfungsstress und hohe Nachhilfekosten.",
      spatialFocus: "Zunehmende Konzentration im Großraum Sudogwon (50,0–50,5 % der Bevölkerung); Entvölkerung ländlicher Kreise.",
      geoOutcome: "Verwundbarkeit in globalen Lieferketten (Konflikt USA–China); Belastung durch historischen Fertilitätstiefstand (0,72 im Jahr 2023; 2024/25: 0,75–0,80)."
    }
  ],

  // -------------------------------------------------------------------
  // 4. RAUM- UND PROBLEMANALYSE (MIT KONKRETEN DATEN & MATERIALIEN)
  // -------------------------------------------------------------------
  raumAnalyse: {
    disparitaeten: {
      titel: "Regionale Disparitäten: Ballungsraum Sudogwon vs. ländliche Peripherie",
      erklaerung: "Südkorea weist ein extremes räumliches Zentrums-Peripherie-Gefälle auf. Die historische Bevorzugung der Gyeongbu-Entwicklungsachse (Seoul–Busan) führte zu einer bis heute anhaltenden Hyperkonzentration im Nordwesten bei gleichzeitiger Marginalisierung ländlicher Regionen, insbesondere im Südwesten (Cholla-Provinzen):",
      fakten: [
        { label: "Flächen- und Bevölkerungsanteil Sudogwon", value: "50,0–50,5 % der Gesamtbevölkerung (ca. 26,0–26,1 Mio.) leben auf ca. 11,8–12 % der Landesfläche (2020: 50,002 %; KOSIS Census)" },
        { label: "Konzernzentralen der führenden Unternehmen", value: "77 % der Top-500-Konzerne (385 von 500) und 70 % der Top 1.000 börsennotierten Firmen sitzen in Sudogwon (JoongAng / Aju Press)" },
        { label: "Wagniskapital & Start-ups", value: "Über 70 % aller Startup-Investitionen und FuE-Zentren im Großraum Seoul gebündelt" },
        { label: "Die Cholla-Peripherie (Südwesten)", value: "Historisch vernachlässigte Agrarregion; unter Park Chung-hee zugunsten der Gyeongbu-Achse benachteiligt" },
        { label: "Dezentralisierungsversuch Sejong City", value: "2012 als ministerielle Planstadt gegründet; vollständiger Hauptstadteinzug 2004 vom Verfassungsgericht gestoppt" }
      ],
      konsequenzen: "Geographische Konsequenzen: Überhitzter Immobilienmarkt in Seoul (Quadratmeterpreise in Gangnam-Gu über 25.000 €/m²), existentieller Wettbewerb um Plätze an den drei Eliteuniversitäten („SKY“: Seoul National, Korea, Yonsei) und Sejong als Pendlerstadt ohne echte Entlastung. Dies ist der primäre räumliche Treiber für den historischen Geburtenrückgang auf 0,72 (2023; Seoul: 0,55), mit nur leichter Erholung 2024/25 auf 0,75 bzw. 0,80 (Seoul: 0,63)."
    },
    wertschöpfungsketten: {
      titel: "Globale Wertschöpfungsketten (GVC) & Halbleiter-Geopolitik",
      erklaerung: "Südkorea hat sich von einem einfachen Werkbank-Assembler zu einem unverzichtbaren Nadelöhr der weltweiten Elektronik- und Digitalindustrie entwickelt, sitzt jedoch in einem geopolitischen Dilemma zwischen den USA und China:",
      fakten: [
        { label: "Weltmarktanteil bei DRAM-Speichern", value: "Samsung Electronics & SK Hynix halten gemeinsam über 70 % des Weltmarktes" },
        { label: "KI-High Bandwidth Memory (HBM)", value: "Weltmarktführung bei HBM3e/HBM4-Speicherchips für Nvidia-Grafikprozessoren" },
        { label: "Exportgewicht von Halbleitern", value: "20,8 % (2024: 141,9 Mrd. USD) bis 24,4 % (2025: 173,4 Mrd. USD) der Gesamtexporte (MOTIE)" },
        { label: "Vorprodukt-Abhängigkeit", value: "EUV-Lithographie-Systeme aus den Niederlanden (ASML) sowie Fotolacke und Wafer aus Japan" },
        { label: "Handelspartner & US-CHIPS-Act", value: "Exporte 2024: China 19,5 % (133 Mrd. USD), USA 18,8 % (127,8 Mrd. USD) – die USA haben China fast eingeholt (MOTIE / KEI)" }
      ],
      konsequenzen: "Geographische Konsequenzen: Südkorea ist hochgradig verwundbar gegenüber geoökonomischen Verwerfungen. Eine Verschärfung der US-Technologiesanktionen gegen Peking bedroht koreanische Megafabriken in China (Samsung in Xi'an, SK Hynix in Wuxi)."
    },
    inselLage: {
      titel: "Verkehrsgeographische Insellage und Chokepoints (Malakka-Dilemma)",
      erklaerung: "Obwohl Südkorea auf einer kontinentalen Halbinsel liegt, schneidet die hermetisch abgeriegelte DMZ das Land nach Norden vollständig vom eurasischen Landverkehrsnetz ab. Es existiert keinerlei Schienen- oder Straßentransit:",
      fakten: [
        { label: "Seewegsanteil am Außenhandel", value: "99,7 % des Außenhandels-Transportvolumens nach Gewicht über Seehäfen abgewickelt (Lee 2024)" },
        { label: "Containerhafen Busan", value: "Rang 7 weltweit (Lloyd's List 2026; 2024: 24,4 Mio. TEU; 2025: ca. 24,88 Mio. TEU; BPA / Kuehne+Nagel)" },
        { label: "Luftfrachtdrehkreuz Incheon", value: "Internationales Spitzen-Frachtdrehkreuz für hochwertige High-Tech-Güter (Top 5–6 weltweit nach ACI)" },
        { label: "Chokepoint Straße von Malakka", value: "Über 90 % der Rohöl- und LNG-Lieferungen passieren die schmale Seepassage in Südostasien" }
      ],
      konsequenzen: "Geographische Konsequenzen: Südkorea ist existenziell auf die Freiheit der Seewege (Freedom of Navigation) angewiesen. Konflikte im Südchinesischen Meer oder in der Taiwan-Straße stellen eine unmittelbare Bedrohung für Energieversorgung und Außenhandel dar."
    },
    rohstoffFalle: {
      titel: "Ressourcenarmut und das industrielle Veredelungsmodell",
      erklaerung: "Südkorea besitzt praktisch keine eigenen förderbaren Lagerstätten von Erdöl, Erdgas oder metallischen Erzen. Der wirtschaftliche Erfolg beruht auf einem Veredelungsmodell (Einfuhr von Rohstoffen ➔ industrielle Veredelung ➔ Re-Export hochwertiger Industriegüter):",
      fakten: [
        { label: "Fossile Energieimporte", value: "Fossile Brennstoffe werden zu rund 98 % importiert; gesamte Energieselbstversorgung bei nur ca. 19–22 % (IEA / Asiae)" },
        { label: "Globaler Erdölimport", value: "ca. 2,76 Mio. Barrel täglich (2024; weltweit unter den Top 4 der Rohölimporteure)" },
        { label: "Kohle- und LNG-Importe", value: "Führender Importeur bei Kraftwerkskohle und verflüssigtem Erdgas (LNG) weltweit" },
        { label: "Veredelungszentren an der Küste", value: "Petrochemie in Yeosu, Stahlproduktion in Pohang (POSCO), Schiffbau in Ulsan (Hyundai)" }
      ],
      konsequenzen: "Geographische Konsequenzen: Hohe Anfälligkeit für Weltmarkt-Preisschocks. Zugleich erzeugt die energieintensive Schwer- und Chemieindustrie Pro-Kopf-Emissionen von ca. 11,3–11,4 t CO2 pro Jahr (Weltbank 2024), was zu einem gravierenden Zielkonflikt bei der Dekarbonisierung führt."
    }
  },

  // -------------------------------------------------------------------
  // 5. SEKTORENWANDEL (FOURASTIÉ & CLARK)
  // -------------------------------------------------------------------
  sektorenWandel: [
    {
      sektor: "Primärer Sektor (Landwirtschaft, Forstwirtschaft, Fischerei)",
      anteil1960: "ca. 65 % der Beschäftigten / ca. 40 % des BIP",
      anteilHeute: "ca. 4,8 % der Beschäftigten / 1,5 % des BIP (Weltbank 2025)",
      analyse: "Die frühe Bodenreform (1949/50) beseitigte feudale Pachtverhältnisse mit einer 3-Hektar-Obergrenze und steigerte den Anteil selbstwirtschaftender Eigentümer von 14 % (1945) auf 70 % (1965). Heute sichert der Genossenschaftsverband Nonghyup (rund 2,0 Mio. Mitglieder in 1.104 Genossenschaften mit eigener Sparbank) die bäuerliche Existenz ab."
    },
    {
      sektor: "Sekundärer Sektor (Industrie, Bau, verarbeitendes Gewerbe)",
      anteil1960: "unter 10 % der Beschäftigten / ca. 15 % des BIP",
      anteilHeute: "ca. 24,5 % der Beschäftigten / 34,3 % des BIP (Weltbank 2025)",
      analyse: "Im Gegensatz zu westlichen Staaten behält Südkorea einen außergewöhnlich hohen Industrieanteil (34,3 % des BIP; Deutschland ca. 24 %, USA ca. 18 %). Die Produktion verlagerte sich kontinuierlich von einfacher Leichtindustrie über Werften und Stahl hin zu Halbleitern, Fahrzeugen und Batterien."
    },
    {
      sektor: "Tertiärer Sektor (Dienstleistungen, Handel, IT, Finanzen)",
      anteil1960: "ca. 25 % der Beschäftigten / ca. 45 % des BIP",
      anteilHeute: "ca. 70,7 % der Beschäftigten / 57,2 % des BIP (Weltbank 2025; Summe vor Nettogütersteuern 93 %)",
      analyse: "Starke Ausprägung in Forschung und Entwicklung (F&E-Quote bei 5,13 % des BIP; Rang 2 weltweit hinter Israel), Telekommunikation, Hafenlogistik und Kulturwirtschaft (Filmindustrie, Musik und digitale Medien als relevanter Exportfaktor)."
    }
  ],

  // -------------------------------------------------------------------
  // 6. BLAUPAUSE FÜR DEN GLOBALEN SÜDEN?
  // -------------------------------------------------------------------
  blaupauseAnalyse: {
    leitfrage: "Inwiefern ist Südkoreas Entwicklungsmodell auf Staaten des Globalen Südens übertragbar?",
    proTransfer: [
      {
        kriterium: "Bodenreform als Entwicklungsgrundlage",
        bewertung: "Übertragbar",
        begruendung: "Vor Beginn der Industrialisierung löste Südkorea feudale Großgrundbesitze auf. Bauern wurden zu Eigentümern ihres Landes (3-Hektar-Grenze). Dies steigerte Erträge, verhinderte die Bildung unkontrollierter Slums und schuf ländliche Kaufkraft – eine Voraussetzung, die in Teilen Lateinamerikas und Afrikas bis heute unvollendet ist."
      },
      {
        kriterium: "Priorität von MINT- und technischer Bildung",
        bewertung: "Übertragbar",
        begruendung: "Südkorea investierte in Primär- und Berufsbildung, als die Mittel extrem knapp waren: Die Alphabetisierungsrate stieg von 22 % (1945) über 72 % (1960) auf fast 90 % (1970). Rohstoffmangel wurde durch Qualifikation kompensiert. Staaten, die vorrangig Rohstoffe exportieren, anstatt Fachkräfte auszubilden, verharren häufig im sogenannten Ressourcenfluch."
      },
      {
        kriterium: "Erzeugergenossenschaften (Nonghyup)",
        bewertung: "Übertragbar",
        begruendung: "Die Saemaeul-Dorfbewegung und der Bauernverband Nonghyup (mit rund 2 Mio. Mitgliedern und genossenschaftlicher Bank) verhinderten die Überschuldung von Kleinbauern durch private Geldverleiher. Solche genossenschaftlichen Strukturen bieten auch in Entwicklungsländern Schutz vor Verarmung."
      },
      {
        kriterium: "Gezielte Verwendung von Auslandsdevisen",
        bewertung: "Übertragbar",
        begruendung: "Rücküberweisungen südkoreanischer Arbeitsmigranten (wie Bergleute und Pflegekräfte in Deutschland) flossen nicht in Konsum, sondern über staatliche Kanäle in den Erwerb von Produktionsmaschinen und Infrastruktur."
      }
    ],
    contraTransfer: [
      {
        kriterium: "Heutige WTO-Regeln gegen Subventionen und Local-Content",
        bewertung: "Völkerrechtliche Restriktion",
        begruendung: "Südkoreas historische Förderpolitik nutzte Instrumente, die im heutigen WTO-Regelwerk verboten sind: Insbesondere exportabhängige Subventionen (Art. 3 SCM-Übereinkommen), Local-Content-Auflagen zur Bevorzugung inländischer Vorprodukte (Art. 2 TRIMs) sowie Zollerhöhungen über vereinbarte Höchstsätze (Bound Tariffs). Staatliche Industriepolitik ist heute nur noch in engen, wettbewerbskonformen Grenzen möglich."
      },
      {
        kriterium: "Fehlen des geopolitischen Sonderstatus",
        bewertung: "Historischer Sonderfall",
        begruendung: "Als antikommunistischer Vorposten im Kalten Krieg erhielt Seoul Milliardenhilfen der USA. Washington duldete koreanische Schutzzölle und öffnete gleichzeitig den US-Markt. Ein derartiger Sonderstatus existiert für heutige Entwicklungsländer in der Regel nicht."
      },
      {
        kriterium: "Ablehnung autoritärer Zwangsmaßnahmen",
        bewertung: "Ethisch nicht vertretbar",
        begruendung: "Die Industrialisierung vollzog sich unter Militärdiktaturen mit Streikverboten, 70-Stunden-Wochen und teils gewaltsamer Unterdrückung von Protesten (Gwangju-Aufstand 1980). Ein solches Repressionsmodell widerspricht demokratischen und menschenrechtlichen Mindeststandards."
      },
      {
        kriterium: "Konkurrenz durch bestehende asiatische Industriecluster",
        bewertung: "Strukturelle Markteintrittsbarriere",
        begruendung: "Beim Aufstieg Südkoreas in den 1960er/70er Jahren waren globale Industriemärkte für neue Anbieter aufnahmefähig. Heute dominieren etablierte asiatische Fertigungshubs (wie China, Vietnam, Indien und Bangladesch) mit gewaltigen Skaleneffekten, integrierten Zulieferketten und eingespielten Industrieclustern, was einen einfachen Markteintritt für neue Schwellenländer erheblich erschwert."
      },
      {
        kriterium: "Schwere gesellschaftliche und demografische Spätfolgen",
        bewertung: "Existenzielle Nachhaltigkeitskrise",
        begruendung: "Das Modell erzeugte einen extremen Geburteneinbruch (Tiefstand 0,72 im Jahr 2023; 2024: 0,75; 2025: 0,80, vorläufig), rund 40 % relative Altersarmut (OECD Pensions at a Glance 2025; NPRI: 39,7 % bei über 65-Jährigen) und die höchste Suizidrate der OECD (altersstandardisiert 24,8 je 100.000, unbereinigt 27,3). Ein System, das seine eigene generationelle Basis gefährdet, kann kein zukunftsfähiges Vorbild sein."
      }
    ],
    fallvergleich: [
      {
        land: "Vietnam",
        situation: "Wendet mit der Doi-Moi-Politik Elemente des Entwicklungsstaates an (Exportzonen, staatliche Steuerung). Stößt jedoch an WTO-Grenzen und fungiert überwiegend als verlängerte Werkbank ohne eigene globale Technologiekonzerne."
      },
      {
        land: "Ruanda",
        situation: "Setzt auf staatlich gelenkte Modernisierung, Korruptionsbekämpfung und Digitalisierung. Hat jedoch als Binnenstaat ohne Zugang zu Seehäfen und mit kleinem Binnenmarkt erhebliche logistische Nachteile gegenüber Südkorea."
      },
      {
        land: "Ghana",
        situation: "Verfügt über Rohstoffe (Kakao, Gold, Öl), leidet aber unter Wertschöpfungsverlusten im Rohstoffexport. Südkoreas Weg belegt: Nachhaltiger Wohlstand entsteht erst durch Weiterverarbeitung und industrielle Veredelung im eigenen Land."
      }
    ]
  },

  // -------------------------------------------------------------------
  // 7. DIE 5 THEMATISCHEN LERNSTATIONEN
  // -------------------------------------------------------------------
  stations: [
    {
      id: "ausgangslage",
      number: "Station 1",
      title: "Station 1: Ausgangslage nach 1953 – Zerstörung und Ressourcenarmut",
      tagline: "Ungleiche Ausgangslage gegenüber Nordkorea, Energiearmut und Arbeitsmigration",
      summary: "Nach dem Koreakrieg besaß Südkorea kaum Industrie, litt unter Nahrungsmittelknappheit und verfügte über keine nennenswerten Energievorkommen.",
      image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Traditionelle Agrarstrukturen vor der Industrialisierung",
      youtubeId: "Yzj5eygWcvY",
      videoTitle: "Südkoreas Aufstieg: Wie aus Trümmern ein Wirtschaftswunder wurde (bwFutureTV)",
      keyPoints: [
        {
          title: "Industrielle Asymmetrie nach 1953",
          text: "Die japanische Kolonialverwaltung hatte Wasserkraftwerke und Schwerindustrie im mineralreichen Norden konzentriert. Der Süden war ein fast reines Agrarland. Bis Mitte der 1970er Jahre wies Nordkorea mit Unterstützung der Sowjetunion ein höheres Pro-Kopf-BIP auf als der Süden."
        },
        {
          title: "Fossile Brennstoffe fast vollständig importiert (~98 %)",
          text: "Südkorea besitzt weder förderbares Erdöl noch Erdgas und nur begrenzte Kohlevorkommen. Fossile Brennstoffe werden zu rund 98 % importiert; die gesamte Energieselbstversorgung (inkl. Kernenergie und Erneuerbaren) liegt bei nur ca. 19–22 % (IEA / Asiae). Südkorea gehört mit rund 2,76 Mio. Barrel Erdöl täglich zu den weltweiten Top 4 der Rohölimporteure."
        },
        {
          title: "Bodenreform und Devisen aus Deutschland",
          text: "Die Bodenreform von 1949/50 begrenzte Landbesitz auf maximal drei Hektar und steigerte den Anteil selbstwirtschaftender Eigentümer von 14 % (1945) auf 70 % (1965). Ab 1963 arbeiteten 7.936 Bergleute und 10.032 Krankenschwestern in Westdeutschland; deren Überweisungen machten bis zu zwei Prozent des BIP aus und finanzierten den Import von Werkzeugmaschinen."
        }
      ],
      interactiveTask: {
        heading: "Arbeitsauftrag 1: Rohstoffarmut als Entwicklungsimpuls",
        question: "Viele rohstoffreiche Länder verharren in Armut (Ressourcenfluch / 'Dutch Disease'). Südkorea importiert rund 98 % seiner fossilen Energieträger und besitzt eine Gesamtselbstversorgung von nur ~20 %. Erläutert aus geographischer Sicht, warum der Rohstoffmangel Südkorea dazu zwang, einen anderen Entwicklungspfad einzuschlagen.",
        sampleSolution: "Musterlösung: Da Südkorea keine Bodenschätze exportieren konnte, blieben Währungsverzerrungen und Korruption durch Rohstoffrenten aus. Der Staat war gezwungen, das einzige vorhandene Potenzial zu mobilisieren: die Bevölkerung. Dies erforderte Investitionen in Grund- und Berufsbildung, die Einfuhr von Rohstoffen, deren Veredelung zu höherwertigen Industrieprodukten und den Export auf internationale Märkte."
      },
      weblinks: [
        { label: "bpb: Südkoreas Weg zur Wirtschaftsmacht", url: "https://www.bpb.de/themen/asien/ostasien/329582/suedkoreas-weg-zur-wirtschaftsmacht/" }
      ]
    },

    {
      id: "erfolgsfaktoren",
      number: "Station 2",
      title: "Station 2: Der Entwicklungsstaat – Fünfjahrespläne und Chaebols",
      tagline: "Staatliche Steuerung, POSCO-Stahl, Hafenbau und Erzeugergenossenschaften",
      summary: "Der Staat plante die Industrialisierung in aufeinander aufbauenden Fünfjahresplänen und förderte international wettbewerbsfähige Großkonzerne.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Schwerindustrie und Halbleiterproduktion an den Küstenstandorten",
      youtubeId: "nDYAXr2mkcY",
      videoTitle: "Folge 9: Chaebol in Korea (Wirtschaftsgeographie Tübingen)",
      keyPoints: [
        {
          title: "Die sieben staatlichen Fünfjahrespläne (1962–1996)",
          text: "Der Staat steuerte die Wirtschaft schrittweise: Nach der Verstaatlichung der Banken (1961) folgten Grundstoffindustrien, anschließend Schwerindustrie (POSCO-Stahl, Großwerften in Ulsan) und ab den 1980er Jahren die Umorientierung auf Halbleiter und Elektronik."
        },
        {
          title: "Das Chaebol-System unter Exportaufsicht",
          text: "Unternehmen wie Samsung, Hyundai oder LG erhielten Vorzugskredite, zollfreie Lizenzen und Binnenmarktschutz – gekoppelt an eine Bedingung: Wer vorgegebene Exportziele auf dem Weltmarkt verfehlte, verlor den staatlichen Kreditrahmen. Heute entspricht der Umsatz der Top-4-Chaebols 40,8 % des nominalen BIP (729 Mrd. USD; KFTC 2023), bei einer inländischen Bruttowertschöpfung von ca. 15–20 % und über 60 % Exportanteil."
        },
        {
          title: "Ländliche Mobilisierung: Saemaeul Undong und Nonghyup",
          text: "Die 1970 gestartete Saemaeul-Bewegung modernisierte Dörfer mit staatlich bereitgestelltem Zement. Der Bauernverband Nonghyup (mit rund 2 Mio. Mitgliedern in 1.104 Genossenschaften und eigener Sparbank) schützte Kleinbauern vor Wucher und stabilisierte ländliche Einkommen."
        }
      ],
      interactiveTask: {
        heading: "Arbeitsauftrag 2: Entwicklungsstaat vs. freie Marktwirtschaft",
        question: "Belegt anhand konkreter Instrumente, warum Südkoreas Aufstieg kein Ergebnis unregulierter Marktkräfte, sondern eines dirigistischen Entwicklungsstaates war.",
        sampleSolution: "Musterlösung: 1. Der Staat verstaatlichte die Geschäftsbanken und lenkte Kredite nach politischen Prioritäten. 2. Strenge Einfuhrverbote für Konsumgüter schützten die heimische Industrie. 3. Die Regierung wählte gezielt Konzerne (Chaebols) aus, um bestimmte Industriezweige aufzubauen. 4. Rohstoffzuteilung, Devisen und Investitionsentscheidungen wurden zentral koordiniert."
      },
      weblinks: [
        { label: "GTAI: Südkorea Industrie- und Wirtschaftspolitik", url: "https://www.gtai.de/de/trade/suedkorea" }
      ]
    },

    {
      id: "geopolitik-kalter-krieg",
      number: "Station 3",
      title: "Station 3: Geopolitische Einbettung im Kalten Krieg",
      tagline: "US-Sicherheitsschirm, Devisen aus dem Vietnamkrieg und Grenzlage an der DMZ",
      summary: "Südkoreas Aufstieg war eng mit seiner geopolitischen Funktion als westlicher Bündnispartner im Kalten Krieg verknüpft.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Grenzbereich an der Demilitarisierten Zone (DMZ) zu Nordkorea",
      youtubeId: "A5K_hGOVs6M",
      videoTitle: "Der Koreakrieg und seine Folgen (MrWissen2go Geschichte | Terra X)",
      keyPoints: [
        {
          title: "US-Finanzhilfen und Marktzugang",
          text: "Zwischen 1953 und 1975 flossen Milliarden an US-Wirtschafts- und Militärhilfen nach Seoul. Die USA akzeptierten koreanische Zölle auf US-Waren, während südkoreanische Exporteure bevorzugten Zugang zum amerikanischen Markt erhielten."
        },
        {
          title: "Vertrag mit Japan (1965) und Vietnamkrieg",
          text: "1965 normalisierte Präsident Park gegen Proteste die Beziehungen zu Japan: Tokio zahlte 800 Mio. USD an Entschädigungen und Krediten, die POSCO-Stahl finanzierten. Im Vietnamkrieg kämpften über 300.000 koreanische Soldaten; US-Aufträge brachten erhebliche Devisenzuflüsse."
        },
        {
          title: "Sicherheitspolitische Lage heute",
          text: "Angesichts des nordkoreanischen Kernwaffenprogramms und veränderter Verlässlichkeit des US-Schirms diskutiert die südkoreanische Öffentlichkeit über eigene nukleare Abschreckungsmittel, setzt bislang jedoch auf konventionelle Rüstungsexporte und Bündnisse."
        }
      ],
      interactiveTask: {
        heading: "Arbeitsauftrag 3: Der Geopolitik-Faktor",
        question: "Diskutiert, inwieweit Südkoreas Aufstieg ohne die geopolitischen Sonderbedingungen des Kalten Krieges denkbar gewesen wäre. Welche Schlussfolgerungen ergeben sich daraus für heutige Entwicklungsländer?",
        sampleSolution: "Musterlösung: Ohne den Status als antikommunistischer Vorposten hätte Südkorea weder die hohen US-Mittel noch den asymmetrischen Marktzugang erhalten. Heutige Entwicklungsländer besitzen diesen Hebel in der Regel nicht: Sie erhalten keine vergleichbaren Finanzhilfen und können eigene Märkte nicht mehr bei gleichzeitig freiem Zugang zu westlichen Märkten abschotten."
      },
      weblinks: [
        { label: "bpb: Der Korea-Konflikt und die Rolle der USA", url: "https://www.bpb.de/themen/asien/ostasien/korea-konflikt/" }
      ]
    },

    {
      id: "schattenseiten-krisen",
      number: "Station 4",
      title: "Station 4: Schattenseiten – Soziale Härten, Krisen und Demografie",
      tagline: "Gwangju 1980, die Asienkrise 1997 und aktuelle gesellschaftliche Belastungen",
      summary: "Der rasche wirtschaftliche Aufstieg forderte hohe gesellschaftliche Tribute: Diktatur, Ausbeutung, das IWF-Krisentrauma und existenzielle demografische Probleme.",
      image: "https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Verdichtungsraum Seoul: Wohlstand neben erheblichem Leistungsdruck",
      youtubeId: "5_ZnHSZ6xTw",
      videoTitle: "Schattenseiten des koreanischen Bildungssystems und Leistungsdrucks (Dokumentation)",
      keyPoints: [
        {
          title: "Militärregime und Gwangju-Aufstand (1980)",
          text: "Bis 1987 war Südkorea eine Diktatur. Gewerkschaften waren reglementiert, Wochenarbeitszeiten von über 60 Stunden an der Tagesordnung. Beim Aufstand in Gwangju 1980 forderte die Zivilgesellschaft freie Wahlen; das Militär schlug die Proteste gewaltsam nieder."
        },
        {
          title: "Asienkrise 1997 und Daewoo-Insolvenz",
          text: "Hohe Fremdkapitalquoten der Chaebols führten 1997 zu einer Zahlungskrise. Der IWF erzwang harte Reformen. 1999 wurde der Großkonzern Daewoo mit rund 80 Mrd. USD Schulden liquidiert, was zeigte, dass Konzerne nicht bedingungslos staatlich gestützt wurden."
        },
        {
          title: "Demografische Krise, Suizidrate und relative Altersarmut",
          text: "Südkorea verzeichnet die höchste Suizidrate aller OECD-Länder (altersstandardisiert 24,8 je 100.000 laut OECD 2026; unbereinigt 27,3 laut Statistics Korea 2023; mehr als doppelt so hoch wie der OECD-Schnitt von 10,9). Die Fertilitätsrate erreichte 2023 einen historischen Tiefststand von 0,72 und erholte sich 2024/25 nur leicht auf 0,75 bzw. vorläufig 0,80 (Seoul: 0,63). Rund 40 % der über 65-Jährigen leben in relativer Altersarmut (OECD Pensions at a Glance 2025; NPRI: 39,7 %)."
        },
        {
          title: "Ökologische Belastungen und CO2-Ausstoß",
          text: "Hohe CO2-Emissionen von ca. 11,3–11,4 Tonnen pro Kopf (Weltbank 2024: 11,36 t; OWID: 11,29 t) und Feinstaubbelastungen durch Kohleverstromung und Schwerindustrie spiegeln den ökologischen Preis des rasanten Wachstums wider."
        }
      ],
      interactiveTask: {
        heading: "Arbeitsauftrag 4: Gesellschaftliche Folgekosten",
        question: "Beurteilt aus geographischer Sicht: Welche Zielkonflikte bestehen zwischen schnellem Wirtschaftswachstum und sozialer bzw. demografischer Nachhaltigkeit?",
        sampleSolution: "Musterlösung: Der einseitige Fokus auf Wirtschaftswachstum führte zur Vernachlässigung sozialer Sicherungssysteme und des Arbeitsschutzes. Die Folge sind hohe Altersarmut der Aufbaugeneration (~40 %), extremer Konkurrenzdruck im Bildungswesen und Wohnraummangel in Seoul. Diese Faktoren tragen direkt zur Verweigerung der Familiengründung (historischer Tiefstand 0,72 im Jahr 2023; 2024/25: 0,75–0,80) bei und gefährden heute die wirtschaftliche Basis."
      },
      weblinks: [
        { label: "Tagesschau: Südkoreas Demografie-Krise", url: "https://www.tagesschau.de/ausland/asien/suedkorea-geburtenrate-102.html" }
      ]
    },

    {
      id: "fazit-blaupause",
      number: "Station 5",
      title: "Station 5: Fazit – Ist Südkorea eine Blaupause für den Globalen Süden?",
      tagline: "Wissenschaftliche Bilanz zur Leitfrage des Referats",
      summary: "Gegenüberstellung: Welche Aspekte des südkoreanischen Entwicklungswegs sind grundsätzlich übertragbar und welche Faktoren sprechen gegen eine direkte Nachahmung?",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "Halbleiter-Fertigung: F&E-Intensität erfordert jahrzehntelange Vorleistungen",
      youtubeId: "vnx-Oh8i8W8",
      videoTitle: "Entwicklung der Tigerstaaten – Asiens Aufstieg (Geographie simpleclub)",
      keyPoints: [
        {
          title: "Übertragbare Grundprinzipien",
          text: "1. Frühe Bodenreform zur Stärkung ländlicher Einkommen (3-Hektar-Grenze).\n2. Vorrangige Bildungsausgaben mit Ausrichtung auf MINT-Fächer (Alphabetisierung in 25 Jahren auf fast 90 %).\n3. Genossenschaftliche Organisation (Nonghyup mit 2 Mio. Mitgliedern) zur Vermeidung von Überschuldung.\n4. Koppelung staatlicher Förderungen an nachprüfbare Leistungs- und Exportkriterien."
        },
        {
          title: "Begrenzende Bedingungen",
          text: "1. Das heutige WTO-Handelsrecht untersagt Exportsubventionen (SCM Art. 3) und Local-Content-Auflagen (TRIMs Art. 2); Zölle sind durch Bound Tariffs limitiert.\n2. Keine geopolitischen Sonderzuwendungen wie im Kalten Krieg.\n3. Bestehende Marktmacht asiatischer Produktionshubs (China, Vietnam, Indien).\n4. Autoritäre Repression und Zwangsarbeit sind ethisch und menschenrechtlich abzulehnen."
        },
        {
          title: "Gesamtbeurteilung für das Abitur",
          text: "Südkorea taugt nicht als universelles Rezept, liefert aber wertvolle Einzelimpulse. Entwicklungsländer müssen eigene, an ihre lokalen Bedingungen angepasste und demokratisch legitimierte Wege finden."
        }
      ],
      interactiveTask: {
        heading: "Arbeitsauftrag 5: Abschließendes Urteil zur Leitfrage",
        question: "Formuliert euer abschließendes Urteil zur Leitfrage: 'Ist Südkorea eine Blaupause für den Globalen Süden?' Nennt je zwei Argumente für und gegen die Übertragbarkeit.",
        sampleSolution: "Musterlösung: Südkorea ist keine 1:1-Blaupause, sondern ein historischer Sonderfall. Für eine Übertragung sprechen die universelle Relevanz von Bodenreformen und die vorrangige Investition in Bildung statt in Rohstoffförderung. Gegen eine Übertragung sprechen die veränderten weltwirtschaftlichen Regeln (WTO), der Wegfall geopolitischer Sonderhilfen, die Konkurrenz etablierter Industriemächte sowie die unvertretbaren sozialen und demografischen Spätfolgen."
      },
      weblinks: [
        { label: "OECD: Länderbericht Südkorea", url: "https://www.oecd.org/korea" }
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 8. BASISKONZEPTE (KCGO)
  // -------------------------------------------------------------------
  basisKonzepte: [
    {
      titel: "Nachhaltigkeitsdimensionen",
      punkte: [
        "Ökonomisch: Rasanter Wohlstandssprung (BIP pro Kopf von 94–159 USD 1960/61 auf ~36.200 USD heute; KKP >61.000–63.000 Intl-$), aber Klumpenrisiko durch Chaebol-Oligopole (Top-4-Umsatz = 40,8 % des nominalen BIP; KFTC).",
        "Ökologisch: Hoher Primärenergieverbrauch, ca. 11,3–11,4 t CO2 je Einwohner (Weltbank 2024: 11,36 t), 98 % fossiler Importanteil und nur rund 20 % gesamte Energieselbstversorgung (IEA).",
        "Sozial: Höchste Suizidrate der OECD (altersstandardisiert 24,8 je 100.000; unbereinigt 27,3), relative Altersarmut von rund 40 % (OECD 2025; NPRI: 39,7 %) und extremer Bildungsstress (Hagwons).",
        "Politisch: Übergang von jahrzehntelanger autoritärer Entwicklungsdiktatur (bis 1987) hin zu einer konsolidierten, lebendigen Demokratie."
      ]
    },
    {
      titel: "Maßstabsebenen (Glokale Verflechtung)",
      punkte: [
        "Lokal: Saemaeul-Dorfprojekte, Siedlungsmuster, ländliche Nonghyup-Genossenschaften (rund 2 Mio. Mitglieder) und historische Konflikte wie der Gwangju-Aufstand 1980.",
        "National: Sieben Fünfjahrespläne (1962–1996), staatliche Bankenlenkung und selektive Förderung von Großkonzernen gegen Exporterfüllung.",
        "Regional: Hermetische DMZ-Grenze zu Nordkorea, geopolitisches Dilemma zwischen China und den USA sowie historische Reibungen mit Japan.",
        "Global: Busan als 7. weltgrößter Seehafen (24,5–24,9 Mio. TEU; 99,7 % Seehandelsanteil nach Gewicht), Schlüsselrolle bei KI-Halbleitern (Samsung, SK Hynix) und WTO-Handelsregeln."
      ]
    },
    {
      titel: "Zeithorizonte & Pfadabhängigkeiten",
      punkte: [
        "Vergangenheit (1910–1960): Koloniale Ausbeutung, Koreakrieg, Zerstörung, aber wegweisende Bodenreform 1949/50 (3-ha-Grenze; Eigentümerquote stieg von 14 % auf 70 %).",
        "Aufstiegsphase (1962–1996): Sieben staatliche Fünfjahrespläne, forciertes Wirtschaftswachstum, EOI-Strategie und HCI-Schwerindustrie.",
        "Restrukturierung (1997–2000): Asienkrise, Daewoo-Insolvenz (80 Mrd. USD Schulden) und IWF-Reformen hin zur wissensbasierten Digitalökonomie.",
        "Zukunftsperspektive: Rasante Überalterung nach historischem Fertilitätstiefstand (0,72 in 2023; 2024: 0,75; 2025: 0,80 vorläufig; Seoul: 0,63)."
      ]
    },
    {
      titel: "Generationengerechtigkeit",
      punkte: [
        "Altersarmut: Die Generation, die mit 60- bis 70-Stunden-Wochen den wirtschaftlichen Aufstieg erarbeitete, leidet unter rund 40 % relativer Altersarmut (OECD-Spitzenwert; OECD Pensions at a Glance 2025).",
        "Jugend & Zukunft: Junge Erwachsene verzichten häufig auf Familiengründung wegen hoher Immobilienpreise in Seoul (Gangnam) und teurer Nachhilfekosten (Hagwons)."
      ]
    },
    {
      titel: "Raumperspektiven & Disparitäten",
      punkte: [
        "Insellage: Durch die DMZ ist Südkorea verkehrstechnisch eine Insel – 99,7 % des Außenhandels-Transportvolumens nach Gewicht laufen über Seehäfen.",
        "Zentrums-Peripherie-Disparität: Ballungsraum Sudogwon bündelt 50,0–50,5 % der Bevölkerung und 77 % der Top-500-Konzernzentralen auf 11,8 % der Landesfläche, während ländliche Kreise (Cholla) schrumpfen."
      ]
    }
  ],

  // -------------------------------------------------------------------
  // 9. SWOT-ANALYSE
  // -------------------------------------------------------------------
  swot: {
    strengths: [
      "Hohe Qualifikation der Erwerbsbevölkerung und starker Fokus auf MINT-Ausbildung (Alphabetisierung in 25 Jahren auf fast 90 %)",
      "Weltweite Technologieführerschaft bei Speicherchips (Samsung, SK Hynix: >70 % DRAM), Displays, Batterien und Schiffbau",
      "Leistungsfähige maritime Logistik (Tiefseehafen Busan: Rang 7 weltweit mit 24,5–24,9 Mio. TEU Umschlag; 99,7 % Seehandelsanteil nach Gewicht)",
      "Spitzenrang bei Forschung und Entwicklung (F&E-Investitionen von 5,13 % des BIP; Rang 2 weltweit hinter Israel; NISTEP/OECD 2024)",
      "Historisch erfolgreiche Agrarreform (1949/50 mit 3-ha-Grenze) und stabiles Genossenschaftswesen (Nonghyup mit rund 2 Mio. Mitgliedern)"
    ],
    weaknesses: [
      "Extreme fossile Importabhängigkeit (rund 98 % fossiler Import; gesamte Energieselbstversorgung bei nur ca. 19–22 %; IEA)",
      "Starke Marktkonzentration: Umsatz der Top-4-Chaebols entspricht 40,8 % des nominalen BIP (KFTC 2023) mit Klumpenrisiken",
      "Historisch niedrige Fertilitätsrate (Tiefpunkt 0,72 im Jahr 2023; 2024: 0,75; 2025: 0,80 vorläufig) und rasanter Rückgang der Erwerbsbevölkerung",
      "Höchste Suizidrate der OECD (altersstandardisiert 24,8 je 100.000; unbereinigt 27,3) und ausgeprägte relative Altersarmut (rund 40 %)",
      "Extreme regionale Disparität: 50,0–50,5 % der Bevölkerung und 77 % der Top-500-Zentralen in der Hauptstadtregion Sudogwon auf 11,8 % der Fläche gebündelt",
      "Hohe CO2-Emissionen von ca. 11,3–11,4 t je Einwohner (Weltbank 2024)"
    ],
    opportunities: [
      "Ausbau zukunftsfähiger Technologiefelder: KI-Halbleiter (HBM3e/HBM4-Speicher) und Wasserstofftechnologien",
      "Stärkung der Kultur- und Dienstleistungsexporte (Hallyu: Musik, Film, digitale Medien) zur Diversifizierung",
      "Ausbau erneuerbarer Energien und Offshore-Windkraft zur Senkung der fossilen Importabhängigkeit",
      "Förderung der regionalen Dezentralisierung zur Entlastung des Ballungsraums Seoul (Weiterentwicklung von Sejong City)"
    ],
    threats: [
      "Geopolitischer Konflikt zwischen den USA (Sicherheits- und Technologiepartner) und China (großer Absatzmarkt für Halbleiter; US CHIPS Act)",
      "Militärische Spannungen durch das nordkoreanische Kernwaffen- und Raketenprogramm an der DMZ",
      "Demografische Überalterung bedroht langfristig die Finanzierung von Renten, Steuern und Sozialsystemen",
      "Verletzlichkeit maritimer Handelsrouten (Straße von Malakka: >90 % der Energiezufuhr; Straße von Taiwan)"
    ]
  },

  // -------------------------------------------------------------------
  // 10. FACHBEGRIFFE
  // -------------------------------------------------------------------
  flashcards: [
    {
      term: "Blaupause (Blueprint)",
      category: "Leitbegriff",
      explanation: "Eine standardisierte Konstruktionsvorlage, die ohne wesentliche Anpassungen auf andere Länder und Kontexte übertragen werden soll."
    },
    {
      term: "Entwicklungsstaat (Developmental State)",
      category: "Wirtschaftsgeographie",
      explanation: "Ein Staat, der wirtschaftliche Prozesse nicht primär dem Markt überlässt, sondern durch Fünfjahrespläne, gezielte Kredite und Regulierung die Industrialisierung aktiv steuert."
    },
    {
      term: "Chaebol (Jaebeol)",
      category: "Unternehmensform",
      explanation: "Mächtige Großmischkonzerne (Samsung, Hyundai, SK, LG), deren kombinierter Umsatz 40,8 % des nominalen BIP entspricht (KFTC 2023; inländische Wertschöpfung ca. 15–20 %)."
    },
    {
      term: "Sudogwon (Capital Area)",
      category: "Raumstruktur",
      explanation: "Der Großraum Seoul, Incheon und Gyeonggi. Er umfasst 50,0–50,5 % der Gesamtbevölkerung und 77 % der Top-500-Konzernzentralen auf nur 11,8 % der Landesfläche."
    },
    {
      term: "Exportorientierte Industrialisierung (EOI)",
      category: "Handelsstrategie",
      explanation: "Wirtschaftsstrategie, die auf die Produktion von Industriegütern für den Weltmarkt abzielt (im Gegensatz zur binnenmarktorientierten Importsubstitution ISI)."
    },
    {
      term: "Bodenreform (1949/50)",
      category: "Agrarstruktur",
      explanation: "Gesetz zur Auflösung von Großgrundbesitz mit einer Obergrenze von 3 Hektar. Steigerte den Anteil selbstwirtschaftender Eigentümer von 14 % (1945) auf 70 % (1965) und schuf breite Binnennachfrage."
    },
    {
      term: "Fossile Energiearmut & Import",
      category: "Ressourcengeographie",
      explanation: "Fossile Brennstoffe werden zu rund 98 % importiert; die gesamte Energieselbstversorgung (inkl. Kernenergie und Erneuerbaren) liegt bei nur ca. 19–22 % (IEA)."
    },
    {
      term: "Nonghyup & Saemaeul Undong",
      category: "Genossenschaftswesen",
      explanation: "Die 1970 initiierte Dorferneuerungsbewegung und der Bauernverband Nonghyup, die mit rund 2 Mio. Mitgliedern und eigener Sparbank Kleinbauern vor Überschuldung schützten."
    }
  ],

  // -------------------------------------------------------------------
  // 11. WISSENS-QUIZ
  // -------------------------------------------------------------------
  quiz: [
    {
      question: "Warum wies Nordkorea nach dem Waffenstillstand 1953 zunächst bessere industrielle Startbedingungen auf als Südkorea?",
      options: [
        "Weil die Kolonialmacht Japan Wasserkraftwerke und Schwerindustrie im mineralreichen Norden gebaut hatte und die Sowjetunion half",
        "Weil Südkorea keine Verfassung besaß",
        "Weil Nordkorea große Erdölreserven besaß",
        "Weil die USA Südkorea keinerlei Wiederaufbauhilfe leisteten"
      ],
      correct: 0,
      explanation: "Die japanische Kolonialherrschaft hatte die Schwerindustrie im rohstoffreichen Norden konzentriert. Der Süden war ein fast reines Agrarland ohne Rohstoffe und hinkte Nordkorea bis Mitte der 1970er Jahre hinterher."
    },
    {
      question: "Wie hoch ist Südkoreas Abhängigkeit von Energieimporten?",
      options: [
        "Weitgehend unabhängig durch eigene Vorkommen",
        "Etwa 50 % Importanteil",
        "Extrem hoch: Fossile Brennstoffe werden zu rund 98 % importiert; die gesamte Energieselbstversorgung liegt bei nur rund 19–22 % (IEA / Asiae)",
        "Rund 25 % Importanteil"
      ],
      correct: 2,
      explanation: "Südkorea besitzt fast keine eigenen förderbaren Kohle-, Gas- oder Ölvorkommen: Fossile Brennstoffe werden zu rund 98 % importiert; die gesamte Energieselbstversorgung einschließlich Kernkraft und Erneuerbaren liegt bei nur 19–22 % (IEA / Asiae)."
    },
    {
      question: "Welche wirtschaftliche Funktion hatte die Entsendung koreanischer Arbeitskräfte nach Deutschland ab 1963?",
      options: [
        "Sie bauten europäische Vertriebszentren auf",
        "Rund 18.000 Bergleute und Pflegekräfte überwiesen Devisen nach Hause, die bis zu 2 % des BIP ausmachten und den Import von Fabrikmaschinen ermöglichten",
        "Sie wurden zu Fachkräften in der Textilindustrie ausgebildet",
        "Es handelte sich um ein rein humanitäres Hilfsprogramm ohne Devisenrelevanz"
      ],
      correct: 1,
      explanation: "Die Überweisungen der 7.936 Bergleute und 10.032 Krankenschwestern erreichten Mitte der 1960er Jahre fast 2 % des BIP und waren eine entscheidende Devisenquelle für den Import von Produktionsmaschinen."
    },
    {
      question: "Warum wird Südkorea in der Wirtschaftsgeographie als 'dirigistischer Entwicklungsstaat' bezeichnet?",
      options: [
        "Weil der Staat die Banken verstaatlichte, 5-Jahres-Pläne erstellte und Kredite an die Einhaltung von Exportquoten koppelte",
        "Weil es sich um eine sowjetische Planwirtschaft handelte",
        "Weil ausländische Investoren die Wirtschaft ohne staatliche Auflagen steuerten",
        "Weil Südkorea von Beginn an auf vollständigen Freihandel und Deregulierung setzte"
      ],
      correct: 0,
      explanation: "Der Staat steuerte Investitionen aktiv über verstaatlichte Banken, erließ Fünfjahrespläne und knüpfte Subventionen an strenge Exportquoten auf dem Weltmarkt."
    },
    {
      question: "Welche regionale Disparität prägt Südkorea heute am stärksten?",
      options: [
        "Eine gleichmäßige Verteilung von Industrie und Bevölkerung über alle Regionen",
        "Die Konzentration von 50,0–50,5 % der Bevölkerung und 77 % der Top-500-Konzernzentralen auf nur 11,8 % der Landesfläche im Großraum Seoul (Sudogwon)",
        "Ein massiver Bevölkerungsrückgang in der Hauptstadt zugunsten ländlicher Regionen",
        "Der wirtschaftliche Bedeutungsverlust der Seehäfen"
      ],
      correct: 1,
      explanation: "Die Hauptstadtregion Sudogwon vereint 50,0–50,5 % der Bevölkerung und 77 % der Top-500-Unternehmenszentralen auf unter 12 % der Fläche, was erhebliche Mietpreis- und Konkurrenzdruckprobleme nach sich zieht."
    },
    {
      question: "Was geschah während der Asienkrise 1997 mit dem Großkonzern Daewoo?",
      options: [
        "Er wurde mit Steuergeldern verstaatlicht und weitergeführt",
        "Er ging mit rund 80 Mrd. USD Schulden in Insolvenz und wurde zerschlagen ('Niemand ist Too Big to Fail')",
        "Er übernahm die Konkurrenten Samsung und Hyundai",
        "Er verlagerte seinen Sitz vollständig in die USA"
      ],
      correct: 1,
      explanation: "Daewoo wurde 1999 abgewickelt. Der Staat zeigte damit, dass marode Chaebols mit untragbaren Schuldenbergen nicht dauerhaft alimentiert wurden."
    },
    {
      question: "Welche gesellschaftlichen Kennzahlen belegen offizielle Daten von OECD und Statistikbehörden für Südkorea?",
      options: [
        "Die höchste Suizidrate der OECD (altersstandardisiert 24,8/100k; unbereinigt 27,3), rund 40 % relative Altersarmut und der historische Fertilitätstiefstand von 0,72 im Jahr 2023",
        "Eine Rückkehr zu traditioneller Selbstversorgungs-Landwirtschaft",
        "Einen dramatischen Anstieg des Analphabetismus bei Jugendlichen",
        "Einen vollständigen Rückzug von Frauen aus dem Erwerbsleben"
      ],
      correct: 0,
      explanation: "OECD und Statistikbehörden belegen die gravierenden sozialen Schattenseiten: Die Fertilitätsrate erreichte 2023 einen historischen Tiefstand von 0,72 (2024: 0,75; 2025: 0,80 vorläufig; Seoul 0,63), rund 40 % relative Altersarmut der Senioren (OECD Pensions at a Glance 2025; NPRI: 39,7 %) und die traurige OECD-Spitzenposition bei Suiziden."
    },
    {
      question: "Warum kann Südkoreas Modell für heutige Entwicklungsländer keine direkte 1:1-Blaupause sein?",
      options: [
        "Weil heutige WTO-Regeln Exportsubventionen (SCM Art. 3) und Local-Content-Auflagen (TRIMs Art. 2) verbieten",
        "Weil der geopolitische Kontext des Kalten Krieges mit einseitigen US-Milliardenhilfen fehlt",
        "Weil autoritäre Repression und Zwangsarbeit demokratischen Mindeststandards widersprechen",
        "Alle genannten Gründe treffen zu"
      ],
      correct: 3,
      explanation: "Veränderte Welthandelsregeln (WTO), das Fehlen von Kalter-Krieg-Sonderkonditionen, die Marktkonkurrenz asiatischer Fertigungshubs und ethische Mindeststandards verbieten ein unkritisches Kopieren."
    }
  ],

  // -------------------------------------------------------------------
  // 12. MATERIALIEN & QUELLEN
  // -------------------------------------------------------------------
  materialSammlung: [
    {
      kategorie: "Fachtext / Analyse",
      titel: "Bundeszentrale für politische Bildung (bpb): Südkoreas Weg zur Wirtschaftsmacht",
      autor: "Prof. Dr. Thomas Kalinowski / Dr. Patrick Köllner (Dossier Ostasien)",
      datengehalt: "Historische Entwicklung des BIP pro Kopf (94–159 USD 1960/61 auf ~36.200 USD heute); Rekonstruktion der 7 Fünfjahrespläne; Gewicht der Top-4-Chaebols (Umsatz entspricht 40,8 % des nominalen BIP laut KFTC 2023; Top 30 = 76,9 %); Daewoo-Insolvenz 1999 mit 80 Mrd. USD Schulden.",
      analysebeitrag: "Liefert den wissenschaftlichen Nachweis, dass der Aufstieg durch einen dirigistischen Entwicklungsstaat mit selektiver Chaebol-Förderung und strikten Exportauflagen gesteuert wurde, nicht durch neoliberale Deregulierung. Kerngrundlage für die Beantwortung der Leitfrage.",
      link: "https://www.bpb.de/themen/asien/ostasien/329582/suedkoreas-weg-zur-wirtschaftsmacht/"
    },
    {
      kategorie: "Statistische Primärquelle",
      titel: "OECD Economic Surveys & Pensions at a Glance: Korea (2024–2026)",
      autor: "Organisation for Economic Co-operation and Development (OECD)",
      datengehalt: "Offizielle Kennzahlen: Fertilitätsrate historischer Tiefstand von 0,72 (2023; 2024: 0,75; 2025: 0,80 vorläufig; Seoul 0,55 ➔ 0,63); relative Altersarmutsquote von rund 40 % bei über 65-Jährigen (OECD 2025: 40 %; NPRI: 39,7 %); Suizidrate von 24,8 je 100.000 (altersstandardisiert OECD 2026; unbereinigt 27,3); F&E-Investitionen von 5,13 % des BIP (Rang 2 weltweit hinter Israel).",
      analysebeitrag: "Quantifiziert empirisch die gravierenden demografischen und sozialen Folgekosten des Modells. Belegt, warum Südkorea ohne generationelle und soziale Nachhaltigkeit keine unkritische Blaupause für Entwicklungsländer sein kann.",
      link: "https://www.oecd.org/korea"
    },
    {
      kategorie: "Wirtschafts- und Außenhandelsdaten",
      titel: "Ministry of Trade, Industry and Energy (MOTIE) & GTAI: Handelsbilanz Republik Korea",
      autor: "MOTIE Südkorea / GTAI Außenwirtschaftsagentur (Daten 2024/2025)",
      datengehalt: "Außenhandelsquote von 84,6 % (2024) bis 86,4 % (2025); Gesamtexporte von 683,8 Mrd. USD (2024) und 709 Mrd. USD (2025; WTO-Rang 8); Halbleiter-Exportanteil von 20,8 % (2024) bis 24,4 % (2025); bilaterale Exportanteile: China 19,5 % (133 Mrd. USD), USA 18,8 % (127,8 Mrd. USD) – USA fast gleichauf; Rohölimporte von 2,76 Mio. Barrel täglich (weltweit Top 4).",
      analysebeitrag: "Belegt die enorme Weltmarktexposition, die einseitige Abhängigkeit von der Halbleiterindustrie und die geopolitische Sandwich-Position Südkoreas zwischen dem US-Sicherheitsbündnis und dem chinesischen Absatzmarkt.",
      link: "https://www.gtai.de/de/trade/suedkorea"
    },
    {
      kategorie: "Raumwirtschaft & Logistik",
      titel: "Busan Port Authority (BPA), Lloyd's List One Hundred Ports & Lee (2024)",
      autor: "Hafenbehörde Busan / Lloyd's List 2026 / Lee (ScienceDirect)",
      datengehalt: "Containerumschlag von 24,4 Mio. TEU (2024) und ca. 24,88 Mio. TEU (2025; Platz 7 der weltgrößten Containerhäfen laut Lloyd's List 2026); Seewegsanteil am Außenhandel von 99,7 % nach Gewicht; Malakka-Passagequote von über 90 % bei Rohöl- und LNG-Lieferungen.",
      analysebeitrag: "Liefert den verkehrsgeographischen Beweis für die funktionale Insellage Südkoreas an der abgeriegelten DMZ und analysiert die maritime Verwundbarkeit durch strategische Nadelöhre (Chokepoints wie die Straße von Malakka).",
      link: "https://www.busanpa.com"
    },
    {
      kategorie: "Raumanalyse & Demografie",
      titel: "KOSIS Korean Statistical Information Service & JoongAng Daily: Regional Disparities",
      autor: "Nationales Statistikamt Südkoreas (Statistics Korea) / Aju Press",
      datengehalt: "Bevölkerungskonzentration Sudogwon: 50,0–50,5 % der Einwohner auf 11,8 % der Landesfläche (26,0–26,1 Mio. Menschen; 2020: 50,002 %); 77 % der Top-500-Unternehmenszentralen (385 von 500) und 70 % der Top 1.000 börsennotierten Konzerne in Sudogwon; Pendlerströme nach Sejong City (>30.000 Pendler); Fertilität in Seoul bei 0,55 (2023) bis 0,63 (2025).",
      analysebeitrag: "Dokumentiert die extreme Zentrum-Peripherie-Spaltung zwischen der Metropolregion Seoul und den ländlichen Provinzen (insbesondere Cholla) sowie die Grenzen der staatlichen Dezentralisierungspolitik.",
      link: "https://kosis.kr/eng/"
    },
    {
      kategorie: "Völkerrecht & Welthandelsordnung",
      titel: "WTO Legal Texts: Agreement on Subsidies (SCM) & TRIMs",
      autor: "Welthandelsorganisation (World Trade Organization, Genf)",
      datengehalt: "Völkerrechtliches Verbot exportgebundener Subventionen (Art. 3 SCM Agreement) und Untersagung von Local-Content-Auflagen bzw. Importbeschränkungen für ausländische Investoren (Art. 2 TRIMs Agreement) sowie Bindung der Zollsätze (Bound Tariffs).",
      analysebeitrag: "Beweist völkerrechtlich, warum die protektionistische EOI-Strategie Südkoreas aus den 1960er/70er Jahren (Schutzzölle, Vorzugskredite, Importquoten) heute von keinem Entwicklungsland mehr legal 1:1 wiederholt werden kann.",
      link: "https://www.wto.org/english/docs_e/legal_e/legal_e.htm"
    }
  ],

  // Recherchehinweise & Fragestellungen für das Referat
  kiPrompts: [
    {
      ziel: "WTO-Handelsrecht vs. Protektionismus der 1960er Jahre",
      prompt: "Untersuche die Vereinbarkeit von Südkoreas historischer Industriepolitik mit dem heutigen WTO-Regelwerk: Warum sind Schutzzölle, Subventionen und Local-Content-Auflagen heute völkerrechtlich untersagt und welche Handlungsspielräume verbleiben Entwicklungsländern?"
    },
    {
      ziel: "Regionale Disparitäten: Ballungsraum Sudogwon vs. Cholla-Region",
      prompt: "Analysiere die Ursachen und raumplanerischen Folgen der extremen Konzentration von Bevölkerung und Wirtschaft im Großraum Seoul (Sudogwon). Welche Maßnahmen ergriff die Regierung zur Dezentralisierung und warum blieben diese weitgehend wirkungslos?"
    },
    {
      ziel: "Vergleichende Analyse: Südkorea im Vergleich zu Ruanda oder Vietnam",
      prompt: "Vergleiche die Entwicklungsstrategie Vietnams oder Ruandas mit dem südkoreanischen Entwicklungsstaat: In welchen Aspekten (Bildung, Infrastruktur, Exportzonen) orientieren sich diese Länder am ostasiatischen Vorbild und wo liegen strukturelle Grenzen?"
    }
  ],

  // -------------------------------------------------------------------
  // 13. DOKUMENTATIONEN & ERKLÄRVIDEOS (VIDEO-MEDIATHEK)
  // -------------------------------------------------------------------
  videoLibrary: [
    {
      title: "Wie wurde Südkorea so reich?",
      channel: "VisualPolitik DE",
      duration: "ca. 16 Min.",
      youtubeId: "s5fSx7eq70U",
      summary: "Erklärt den historischen Aufstieg vom kriegszerstörten Agrarland zur globalen Wirtschaftsmacht, die Politik der Fünfjahrespläne unter Park Chung-hee und die Rolle der Chaebols.",
      examRelevance: "Relevant für den Entwicklungsweg: Zeigt die Mechanismen des dirigistischen Entwicklungsstaates und die staatlich gelenkte Exportorientierung (EOI)."
    },
    {
      title: "Der Koreakrieg und seine Folgen",
      channel: "MrWissen2go Geschichte / Terra X",
      duration: "ca. 18 Min.",
      youtubeId: "A5K_hGOVs6M",
      summary: "Historische Aufarbeitung des Koreakrieges (1950–1953), der geopolitischen Teilung entlang des 38. Breitengrads und der US-amerikanischen Sicherheitsgarantien.",
      examRelevance: "Relevant für die Ausgangslage & Geopolitik: Verdeutlicht die Startbedingungen des kriegszerstörten Südens und den Sicherheitsbonus im Kalten Krieg."
    },
    {
      title: "Warum Südkorea ein Albtraum ist – Schattenseiten & Leistungsdruck",
      channel: "Simplicissimus",
      duration: "ca. 14 Min.",
      youtubeId: "5_ZnHSZ6xTw",
      summary: "Kritischer Blick auf das Bildungssystem (Hagwons), den extremen Konkurrenzdruck, die astronomischen Wohnkosten in Seoul und die hohe Suizidrate.",
      examRelevance: "Relevant für soziale Folgekosten: Belegt die Schattenseiten des Wirtschaftswunders und erklärt die Ursachen der extrem niedrigen Geburtenrate."
    },
    {
      title: "Südkorea: Das Land ohne Kinder!",
      channel: "VisualPolitik DE",
      duration: "ca. 15 Min.",
      youtubeId: "C4SJevLRL7w",
      summary: "Detaillierte Analyse des historischen Tiefstwertes bei der Fertilitätsrate (0,72 im Jahr 2023; seither leichte Stabilisierung auf 0,75–0,80) und der ökonomischen Bedrohung durch die Überalterung.",
      examRelevance: "Relevant für Generationengerechtigkeit & Zukunft: Zeigt, warum das Modell ohne demografische Nachhaltigkeit langfristig erodiert."
    },
    {
      title: "Entwicklung der Tigerstaaten – Asiens Aufstieg",
      channel: "simpleclub Geographie",
      duration: "ca. 7 Min.",
      youtubeId: "vnx-Oh8i8W8",
      summary: "Kompakte wirtschaftsgeographische Einordnung der vier asiatischen Tigerstaaten (Südkorea, Taiwan, Hongkong, Singapur) und des Fluggänsemodells.",
      examRelevance: "Relevant für die Leitfrage (Blaupause): Vermittelt die geographischen Basiskonzepte und vergleicht Südkorea mit anderen Schwellenländern."
    }
  ]
};

if (typeof window !== "undefined") {
  window.KOREA_DATA = KOREA_DATA;
}

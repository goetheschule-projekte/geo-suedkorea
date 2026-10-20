/**
 * ===================================================================
 * SÜDKOREAS AUFSTIEG ZUR WIRTSCHAFTSMACHT
 * GEOGRAPHISCHES ABITUR-DOSSIER & DIGITALES HANDOUT
 * ===================================================================
 * Goetheschule Wetzlar • Geographie Q3
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initTopTabs();
  initHeroQuickStats();
  initAbstract();
  initTimeline();
  initSpatialAnalysis();
  initSektorenwandel();
  initBlueprint();
  initStations();
  initVideos();
  initBasiskonzepte();
  initSwot();
  initFlashcards();
  initQuiz();
  initQuizPrintSheet();
  initMaterialsAndPrompts();
  initGroupWorksheetExport();
  checkProtocolHint();
});

function checkProtocolHint() {
  const hint = document.querySelector(".local-server-hint");
  if (hint && window.location.protocol !== "file:") {
    hint.style.display = "none";
  }
}

/* -------------------------------------------------------------------
   1. HELL- / DUNKELMODUS
   ------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("toggleThemeBtn");
  if (!toggleBtn) return;

  function updateBtn(theme) {
    if (theme === "dark") {
      toggleBtn.textContent = "Hellmodus";
      toggleBtn.title = "Zu hellem Design wechseln";
    } else {
      toggleBtn.textContent = "Dunkelmodus";
      toggleBtn.title = "Zu dunklem Design wechseln";
    }
  }

  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  updateBtn(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const nextTheme = isDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    try {
      localStorage.setItem("korea_geo_theme", nextTheme);
    } catch (e) {}

    updateBtn(nextTheme);
    showToast(nextTheme === "dark" ? "Dunkelmodus aktiviert" : "Hellmodus aktiviert");
  });
}

/* -------------------------------------------------------------------
   2. TAB-NAVIGATION (SMOOTH SCROLL & AUTO-HIGHLIGHT)
   ------------------------------------------------------------------- */
function initTopTabs() {
  const tabButtons = document.querySelectorAll(".tab-item");
  const sections = document.querySelectorAll(".tab-target");
  if (!tabButtons.length) return;

  function setActiveTab(tabId) {
    tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      setActiveTab(tabId);

      if (tabId === "all") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetSection = document.getElementById(tabId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });

  // Automatisches Highlighten des aktiven Tabs beim Scrollen
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveTab(sectionId);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0
      }
    );

    sections.forEach(sec => observer.observe(sec));
  }
}

/* -------------------------------------------------------------------
   3. KENNZAHLEN IM HERO
   ------------------------------------------------------------------- */
function initHeroQuickStats() {
  const container = document.getElementById("heroQuickStats");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.generalInfo) return;

  const items = window.KOREA_DATA.generalInfo.meta;
  container.innerHTML = items.map(item => `
    <div class="hero-stat-card">
      <div class="hero-stat-label">${escapeHtml(item.label)}</div>
      <div class="hero-stat-value">${escapeHtml(item.value)}</div>
      ${item.sub ? `<div class="hero-stat-sub">${escapeHtml(item.sub)}</div>` : ""}
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   4. ABSTRACT
   ------------------------------------------------------------------- */
function initAbstract() {
  const bodyEl = document.getElementById("abstractContent");
  const takeawayEl = document.getElementById("abstractTakeaway");
  if (!bodyEl || !window.KOREA_DATA || !window.KOREA_DATA.abstract) return;

  const data = window.KOREA_DATA.abstract;

  bodyEl.innerHTML = data.paragraphs.map(p => `
    <div class="abstract-paragraph-box">
      <h3 class="abstract-paragraph-title">${escapeHtml(p.heading)}</h3>
      <p class="abstract-paragraph-text">${escapeHtml(p.text)}</p>
    </div>
  `).join("");

  if (takeawayEl && data.keyTakeaway) {
    takeawayEl.innerHTML = `<strong>${escapeHtml(data.keyTakeaway)}</strong>`;
  }
}

/* -------------------------------------------------------------------
   5. ENTWICKLUNGSWEG (6 PHASEN)
   ------------------------------------------------------------------- */
function initTimeline() {
  const container = document.getElementById("timelineContainer");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.timelinePhases) return;

  container.innerHTML = window.KOREA_DATA.timelinePhases.map(ph => `
    <div class="timeline-card">
      <div class="timeline-card-header">
        <span class="timeline-phase-badge">${escapeHtml(ph.phase)}</span>
        <h3 class="timeline-phase-title">${escapeHtml(ph.title)}</h3>
      </div>
      <div class="timeline-meta-grid">
        <div class="timeline-meta-item">
          <strong>Rolle des Staates:</strong>
          <span>${escapeHtml(ph.stateRole)}</span>
        </div>
        <div class="timeline-meta-item">
          <strong>Industriepolitik:</strong>
          <span>${escapeHtml(ph.industrialPolicy)}</span>
        </div>
        <div class="timeline-meta-item">
          <strong>Bildung & Qualifikation:</strong>
          <span>${escapeHtml(ph.educationPolicy)}</span>
        </div>
        <div class="timeline-meta-item">
          <strong>Raumwirksamkeit:</strong>
          <span>${escapeHtml(ph.spatialFocus)}</span>
        </div>
      </div>
      <div class="timeline-outcome-box">
        <strong>Ergebnis:</strong> ${escapeHtml(ph.geoOutcome)}
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   6. RAUM- UND PROBLEMANALYSE
   ------------------------------------------------------------------- */
function initSpatialAnalysis() {
  const container = document.getElementById("spatialGrid");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.raumAnalyse) return;

  const ra = window.KOREA_DATA.raumAnalyse;

  const cards = [
    { key: "disparitaeten", data: ra.disparitaeten },
    { key: "wertschöpfungsketten", data: ra.wertschöpfungsketten || ra.welthandelStruktur },
    { key: "inselLage", data: ra.inselLage },
    { key: "rohstoffFalle", data: ra.rohstoffFalle }
  ].filter(c => c.data);

  container.innerHTML = cards.map(c => `
    <div class="spatial-card">
      <h3 class="spatial-card-title">${escapeHtml(c.data.titel)}</h3>
      <p class="spatial-card-desc">${escapeHtml(c.data.erklaerung)}</p>
      <div class="spatial-fact-list">
        ${c.data.fakten.map(f => `
          <div class="spatial-fact-item">
            <span class="spatial-fact-label">${escapeHtml(f.label)}:</span>
            <span class="spatial-fact-val">${escapeHtml(f.value)}</span>
          </div>
        `).join("")}
      </div>
      <div class="spatial-consequences">
        <strong>Geographische Konsequenz:</strong> ${escapeHtml(c.data.konsequenzen)}
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   7. SEKTORENWANDEL (FOURASTIÉ & CLARK)
   ------------------------------------------------------------------- */
function initSektorenwandel() {
  const container = document.getElementById("sektorenGrid");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.sektorenWandel) return;

  container.innerHTML = window.KOREA_DATA.sektorenWandel.map(s => `
    <div class="sektor-item-card">
      <h4 class="sektor-item-title">${escapeHtml(s.sektor)}</h4>
      <div class="sektor-data-row">
        <span><strong>1960:</strong> ${escapeHtml(s.anteil1960)}</span>
      </div>
      <div class="sektor-data-row">
        <span><strong>Heute:</strong> ${escapeHtml(s.anteilHeute)}</span>
      </div>
      <p class="sektor-analysis-text">${escapeHtml(s.analyse)}</p>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   8. BLAUPAUSE FÜR DEN GLOBALEN SÜDEN?
   ------------------------------------------------------------------- */
function initBlueprint() {
  const proContainer = document.getElementById("blueprintProList");
  const contraContainer = document.getElementById("blueprintContraList");
  const caseContainer = document.getElementById("countryCaseGrid");
  if (!proContainer || !contraContainer || !window.KOREA_DATA || !window.KOREA_DATA.blaupauseAnalyse) return;

  const bp = window.KOREA_DATA.blaupauseAnalyse;

  proContainer.innerHTML = bp.proTransfer.map(item => `
    <div class="blueprint-item pro">
      <div class="blueprint-item-title">${escapeHtml(item.kriterium)}</div>
      <span class="blueprint-item-verdict">${escapeHtml(item.bewertung)}</span>
      <p class="blueprint-item-desc">${escapeHtml(item.begruendung)}</p>
    </div>
  `).join("");

  contraContainer.innerHTML = bp.contraTransfer.map(item => `
    <div class="blueprint-item contra">
      <div class="blueprint-item-title">${escapeHtml(item.kriterium)}</div>
      <span class="blueprint-item-verdict">${escapeHtml(item.bewertung)}</span>
      <p class="blueprint-item-desc">${escapeHtml(item.begruendung)}</p>
    </div>
  `).join("");

  if (caseContainer && bp.fallvergleich) {
    caseContainer.innerHTML = bp.fallvergleich.map(c => `
      <div class="case-card">
        <h4 class="case-country-name">${escapeHtml(c.land)}</h4>
        <p class="case-text">${escapeHtml(c.situation)}</p>
      </div>
    `).join("");
  }
}

/* -------------------------------------------------------------------
   9. LERNSTATIONEN
   ------------------------------------------------------------------- */
function initStations() {
  const tabsContainer = document.getElementById("stationNavTabs");
  const displayContainer = document.getElementById("stationsContainer");
  if (!tabsContainer || !displayContainer || !window.KOREA_DATA || !window.KOREA_DATA.stations) return;

  const stations = window.KOREA_DATA.stations;
  let activeStationId = stations[0].id;

  function renderNav() {
    tabsContainer.innerHTML = stations.map(st => `
      <button class="station-pill-btn ${st.id === activeStationId ? 'active' : ''}" data-station-id="${st.id}">
        ${escapeHtml(st.number)}
      </button>
    `).join("");

    tabsContainer.querySelectorAll(".station-pill-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeStationId = btn.dataset.stationId;
        renderNav();
        renderActiveStation();
      });
    });
  }

  function renderActiveStation() {
    const st = stations.find(s => s.id === activeStationId) || stations[0];
    const savedResponses = getSavedStationResponses();
    const currentResponse = savedResponses[st.id] || "";

    displayContainer.innerHTML = `
      <div class="station-display-card">
        <div class="station-top-meta">
          <span class="station-num-badge">${escapeHtml(st.number)}</span>
          <h3 class="station-title-main">${escapeHtml(st.title)}</h3>
        </div>
        <p class="station-tagline">${escapeHtml(st.tagline)}</p>

        <div class="station-media-layout">
          <div class="video-frame-wrap">
            <iframe 
              src="https://www.youtube.com/embed/${st.youtubeId}" 
              title="${escapeHtml(st.videoTitle)}" 
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
            <div class="video-fallback-bar">
              <a href="https://www.youtube.com/watch?v=${st.youtubeId}" target="_blank" rel="noopener noreferrer" class="video-fallback-link">
                Video direkt auf YouTube öffnen ↗
              </a>
            </div>
          </div>
          <div class="station-image-wrap">
            <img src="${st.image}" alt="${escapeHtml(st.title)}" loading="lazy">
            <div class="station-image-caption">${escapeHtml(st.imageCaption)}</div>
          </div>
        </div>

        <div class="station-points-grid">
          ${st.keyPoints.map(kp => `
            <div class="station-point-card">
              <h4 class="point-card-title">${escapeHtml(kp.title)}</h4>
              <p class="point-card-text">${escapeHtml(kp.text)}</p>
            </div>
          `).join("")}
        </div>

        <div class="interactive-task-card">
          <h4 class="task-heading">${escapeHtml(st.interactiveTask.heading)}</h4>
          <p class="task-question">${escapeHtml(st.interactiveTask.question)}</p>
          <textarea 
            class="task-textarea" 
            id="stationTextarea_${st.id}" 
            placeholder="Erarbeitet eure fachliche Antwort im Team und formuliert sie hier... (Speichert automatisch)"
          >${escapeHtml(currentResponse)}</textarea>
          
          <div class="task-action-row">
            <span class="task-save-status" id="saveStatus_${st.id}">
              ${currentResponse ? "Gespeichert" : "Eingabe wird automatisch gesichert"}
            </span>
            <button class="solution-toggle-btn" id="toggleSolution_${st.id}">
              Musterlösung anzeigen
            </button>
          </div>

          <div class="sample-solution-box" id="solutionBox_${st.id}">
            <strong>Musterlösung:</strong><br>
            ${escapeHtml(st.interactiveTask.sampleSolution)}
          </div>
        </div>
      </div>
    `;

    // Event Listener für Textarea Auto-Save
    const textarea = document.getElementById(`stationTextarea_${st.id}`);
    const statusEl = document.getElementById(`saveStatus_${st.id}`);
    const solutionBtn = document.getElementById(`toggleSolution_${st.id}`);
    const solutionBox = document.getElementById(`solutionBox_${st.id}`);

    if (textarea) {
      textarea.addEventListener("input", () => {
        saveStationResponse(st.id, textarea.value);
        if (statusEl) statusEl.textContent = "Gespeichert";
      });
    }

    if (solutionBtn && solutionBox) {
      solutionBtn.addEventListener("click", () => {
        const isHidden = solutionBox.style.display === "none" || !solutionBox.style.display;
        solutionBox.style.display = isHidden ? "block" : "none";
        solutionBtn.textContent = isHidden ? "Musterlösung verbergen" : "Musterlösung anzeigen";
      });
    }
  }

  renderNav();
  renderActiveStation();
}

function getSavedStationResponses() {
  try {
    const raw = localStorage.getItem("gow_korea_station_responses");
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveStationResponse(stationId, text) {
  try {
    const responses = getSavedStationResponses();
    responses[stationId] = text;
    localStorage.setItem("gow_korea_station_responses", JSON.stringify(responses));
  } catch (e) {}
}

/* -------------------------------------------------------------------
   9b. DOKUMENTATIONEN & ERKLÄRVIDEOS (VIDEO-MEDIATHEK)
   ------------------------------------------------------------------- */
function initVideos() {
  const container = document.getElementById("videoGrid");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.videoLibrary) return;

  container.innerHTML = window.KOREA_DATA.videoLibrary.map(v => `
    <div class="video-card roundb">
      <div class="video-embed-wrap">
        <iframe 
          src="https://www.youtube.com/embed/${v.youtubeId}" 
          title="${escapeHtml(v.title)}" 
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-card-body">
        <div class="video-meta-tags">
          <span class="video-tag-channel">${escapeHtml(v.channel)}</span>
          <span class="video-tag-duration">${escapeHtml(v.duration)}</span>
        </div>
        <h4 class="video-title">${escapeHtml(v.title)}</h4>
        <p class="video-summary">${escapeHtml(v.summary)}</p>
        <div class="video-relevance-box">
          <strong>Abiturrelevanz:</strong> ${escapeHtml(v.examRelevance)}
        </div>
        <div class="video-action-row">
          <a href="https://www.youtube.com/watch?v=${v.youtubeId}" target="_blank" rel="noopener noreferrer" class="btn-video-external">
            Video direkt auf YouTube öffnen ↗
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   10. BASISKONZEPTE (KCGO)
   ------------------------------------------------------------------- */
function initBasiskonzepte() {
  const container = document.getElementById("basiskonzepteGrid");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.basisKonzepte) return;

  container.innerHTML = window.KOREA_DATA.basisKonzepte.map(bk => `
    <div class="basiskonzept-card">
      <h4 class="basiskonzept-title">${escapeHtml(bk.titel)}</h4>
      <ul class="basiskonzept-points">
        ${bk.punkte.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   11. SWOT-ANALYSE
   ------------------------------------------------------------------- */
function initSwot() {
  const container = document.getElementById("swotContainer");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.swot) return;

  const sw = window.KOREA_DATA.swot;

  const cols = [
    { key: "strengths", title: "Stärken (Strengths)", items: sw.strengths },
    { key: "weaknesses", title: "Schwächen (Weaknesses)", items: sw.weaknesses },
    { key: "opportunities", title: "Chancen (Opportunities)", items: sw.opportunities },
    { key: "threats", title: "Risiken (Threats)", items: sw.threats }
  ];

  container.innerHTML = cols.map(c => `
    <div class="swot-card ${c.key}">
      <h4 class="swot-card-title">${escapeHtml(c.title)}</h4>
      <ul class="swot-list">
        ${c.items.map(it => `<li>${escapeHtml(it)}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   12. FLASHCARDS (FACHBEGRIFFE)
   ------------------------------------------------------------------- */
function initFlashcards() {
  const container = document.getElementById("flashcardsGrid");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.flashcards) return;

  container.innerHTML = window.KOREA_DATA.flashcards.map(fc => `
    <div class="flashcard">
      <div class="flashcard-category">${escapeHtml(fc.category)}</div>
      <div class="flashcard-term">${escapeHtml(fc.term)}</div>
      <div class="flashcard-explanation">${escapeHtml(fc.explanation)}</div>
      <div class="flashcard-prompt">Klicke zum Aufdecken</div>
    </div>
  `).join("");

  container.querySelectorAll(".flashcard").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("revealed");
    });
  });
}

/* -------------------------------------------------------------------
   13. WISSENS-QUIZ
   ------------------------------------------------------------------- */
function initQuiz() {
  const questionEl = document.getElementById("quizQuestion");
  const optionsEl = document.getElementById("quizOptions");
  const feedbackEl = document.getElementById("quizFeedback");
  const nextBtn = document.getElementById("quizNextBtn");
  const counterEl = document.getElementById("quizCounter");
  const progressEl = document.getElementById("quizProgressBar");
  const activeWrap = document.getElementById("quizActiveWrap");
  const resultsCard = document.getElementById("quizResults");
  const finalScoreEl = document.getElementById("finalScore");
  const finalScoreText = document.getElementById("finalScoreFeedback");
  const restartBtn = document.getElementById("quizRestartBtn");

  if (!questionEl || !optionsEl || !window.KOREA_DATA || !window.KOREA_DATA.quiz) return;

  const questions = window.KOREA_DATA.quiz;
  let currentIndex = 0;
  let score = 0;
  let hasAnswered = false;

  function loadQuestion() {
    hasAnswered = false;
    const q = questions[currentIndex];

    counterEl.textContent = `Frage ${currentIndex + 1} von ${questions.length}`;
    progressEl.style.width = `${((currentIndex + 1) / questions.length) * 100}%`;

    questionEl.textContent = q.question;
    feedbackEl.className = "quiz-feedback-box";
    feedbackEl.textContent = "";

    nextBtn.style.display = "none";

    optionsEl.innerHTML = q.options.map((opt, idx) => `
      <button class="quiz-option-btn" data-index="${idx}">
        ${escapeHtml(opt)}
      </button>
    `).join("");

    optionsEl.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (hasAnswered) return;
        hasAnswered = true;

        const selectedIndex = parseInt(btn.dataset.index, 10);
        const isCorrect = selectedIndex === q.correct;

        if (isCorrect) score++;

        optionsEl.querySelectorAll(".quiz-option-btn").forEach((b, bIdx) => {
          b.disabled = true;
          if (bIdx === q.correct) b.classList.add("correct");
          else if (bIdx === selectedIndex && !isCorrect) b.classList.add("wrong");
        });

        feedbackEl.className = `quiz-feedback-box show ${isCorrect ? 'correct' : 'wrong'}`;
        feedbackEl.innerHTML = `<strong>${isCorrect ? 'Richtig.' : 'Nicht zutreffend.'}</strong> ${escapeHtml(q.explanation)}`;

        nextBtn.style.display = "inline-flex";
        nextBtn.textContent = currentIndex < questions.length - 1 ? "Nächste Frage" : "Ergebnis ansehen";
      });
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < questions.length - 1) {
      currentIndex++;
      loadQuestion();
    } else {
      showResults();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    activeWrap.style.display = "block";
    resultsCard.style.display = "none";
    loadQuestion();
  });

  function showResults() {
    activeWrap.style.display = "none";
    resultsCard.style.display = "block";
    finalScoreEl.textContent = `${score} / ${questions.length}`;

    if (score === questions.length) {
      finalScoreText.textContent = "Sehr gut! Du hast alle Zusammenhänge von Südkoreas Wirtschaftsgeographie und die Argumente zur Leitfrage verstanden.";
    } else if (score >= questions.length * 0.75) {
      finalScoreText.textContent = "Gute Leistung. Die wesentlichen Faktoren des Entwicklungsstaates und die Restriktionen der Übertragbarkeit sind dir klar.";
    } else {
      finalScoreText.textContent = "Wiederhole bei Bedarf den Abstract und die Lernstationen, um dein Urteil zur Leitfrage weiter zu schärfen.";
    }
  }

  loadQuestion();
}

/* -------------------------------------------------------------------
   13b. FRAGENKATALOG & DRUCKANSICHT (QUIZ)
   ------------------------------------------------------------------- */
function initQuizPrintSheet() {
  const container = document.getElementById("printQuestionsList");
  if (!container || !window.KOREA_DATA || !window.KOREA_DATA.quiz) return;

  const questions = window.KOREA_DATA.quiz;
  const letters = ["A", "B", "C", "D"];

  let html = questions.map((q, qIdx) => `
    <div class="print-question-item">
      <div class="print-question-title">
        <span class="print-q-num">Frage ${qIdx + 1}:</span> ${escapeHtml(q.question)}
      </div>
      <div class="print-options-list">
        ${q.options.map((opt, oIdx) => `
          <div class="print-option-row">
            <span class="print-checkbox">[  ]</span>
            <span class="print-opt-letter">${letters[oIdx]})</span>
            <span class="print-opt-text">${escapeHtml(opt)}</span>
          </div>
        `).join("")}
      </div>
      <div class="print-notes-space">
        <span class="print-notes-label">Geographische Begründung / Fachnotizen:</span>
        <div class="print-rule-line"></div>
      </div>
    </div>
  `).join("");

  html += `
    <div class="print-solution-key">
      <h4 class="titlebold" style="color: var(--gw-blue); margin-bottom: 0.75rem;">Lösungsschlüssel & Begründungen (Abitur-Standard)</h4>
      <div class="print-solutions-grid">
        ${questions.map((q, qIdx) => `
          <div class="print-solution-item">
            <strong>Frage ${qIdx + 1}: Option ${letters[q.correct]}</strong>
            <p>${escapeHtml(q.explanation)}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  container.innerHTML = html;

  const toggleBtn = document.getElementById("quizToggleSheetBtn");
  const sheet = document.getElementById("quizPrintSheet");
  if (toggleBtn && sheet) {
    toggleBtn.addEventListener("click", () => {
      const isVisible = sheet.classList.contains("sheet-visible");
      if (isVisible) {
        sheet.classList.remove("sheet-visible");
        toggleBtn.textContent = "Fragenkatalog für Klausur einblenden";
      } else {
        sheet.classList.add("sheet-visible");
        toggleBtn.textContent = "Fragenkatalog ausblenden";
      }
    });
  }
}

/* -------------------------------------------------------------------
   14. MATERIALIEN & QUELLEN
   ------------------------------------------------------------------- */
function initMaterialsAndPrompts() {
  const matContainer = document.getElementById("materialList");
  const promptContainer = document.getElementById("promptsList");
  if (!matContainer || !promptContainer || !window.KOREA_DATA) return;

  if (window.KOREA_DATA.materialSammlung) {
    matContainer.innerHTML = window.KOREA_DATA.materialSammlung.map(m => `
      <div class="material-entry-card">
        <div class="material-category">${escapeHtml(m.kategorie)}</div>
        <h4 class="material-title">${escapeHtml(m.titel)}</h4>
        <div class="material-meta-row"><strong>Autor / Herausgeber:</strong> ${escapeHtml(m.autor)}</div>
        ${m.datengehalt ? `<div class="material-data-box"><strong>Konkrete Primärdaten:</strong> ${escapeHtml(m.datengehalt)}</div>` : ""}
        ${m.analysebeitrag ? `<p class="material-desc"><strong>Beitrag zur Raumanalyse & Leitfrage:</strong> ${escapeHtml(m.analysebeitrag)}</p>` : ""}
        ${m.relevanz ? `<p class="material-desc"><strong>Fachliche Relevanz:</strong> ${escapeHtml(m.relevanz)}</p>` : ""}
        ${m.erkenntnis ? `<p class="material-desc"><strong>Erkenntniswert:</strong> ${escapeHtml(m.erkenntnis)}</p>` : ""}
        <a href="${m.link}" target="_blank" rel="noopener noreferrer" class="material-link-btn">
          Quelle öffnen ↗
        </a>
      </div>
    `).join("");
  }

  if (window.KOREA_DATA.kiPrompts) {
    promptContainer.innerHTML = window.KOREA_DATA.kiPrompts.map(p => `
      <div class="prompt-entry-card">
        <div class="prompt-target">${escapeHtml(p.ziel)}</div>
        <div class="prompt-code-box">${escapeHtml(p.prompt)}</div>
        <button class="copy-prompt-btn" onclick="navigator.clipboard.writeText(\`${p.prompt.replace(/`/g, '\\`')}\`); showToast('Fragestellung in die Zwischenablage kopiert');">
          Suchanfrage kopieren
        </button>
      </div>
    `).join("");
  }
}

/* -------------------------------------------------------------------
   15. EXPORT
   ------------------------------------------------------------------- */
function initGroupWorksheetExport() {
  const exportBtn = document.getElementById("exportTextBtn");
  if (!exportBtn) return;

  exportBtn.addEventListener("click", () => {
    const saved = getSavedStationResponses();
    let text = "======================================================\n";
    text += "SÜDKOREA ALS WIRTSCHAFTSMACHT & BLAUPAUSE\n";
    text += "ERGEBNISSE DER GRUPPENARBEIT • GOETHESCHULE WETZLAR\n";
    text += `Datum: ${new Date().toLocaleDateString('de-DE')} | Fach: Geographie Q3\n`;
    text += "======================================================\n\n";

    if (window.KOREA_DATA && window.KOREA_DATA.stations) {
      window.KOREA_DATA.stations.forEach(st => {
        text += `------------------------------------------------------\n`;
        text += `${st.number}: ${st.title}\n`;
        text += `Aufgabe: ${st.interactiveTask.question}\n\n`;
        text += `Antwort:\n${saved[st.id] || "(Keine Eingabe erfolgt)"}\n\n`;
      });
    }

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Goetheschule_Suedkorea_Gruppenarbeit_Antworten.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Antworten als Textdatei heruntergeladen");
  });
}

/* -------------------------------------------------------------------
   HILFSFUNKTIONEN
   ------------------------------------------------------------------- */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message) {
  let toast = document.getElementById("siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

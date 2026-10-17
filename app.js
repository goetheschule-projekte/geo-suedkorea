/**
 * ===================================================================
 * 🇰🇷 SÜDKOREAS AUFSTIEG ZUR WIRTSCHAFTSMACHT
 * DIGITALES HANDOUT & ERGEBNISSICHERUNG
 * ===================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initAbstract();
  initSteckbrief();
  initSektorenwandel();
  initBasiskonzepte();
  initSwot();
  initStations();
  initFlashcards();
  initQuiz();
  initQuellenUndPrompts();
  initGroupWorksheetStorage();
  initEditMode();
});

/* -------------------------------------------------------------------
   0. DARK MODE / DESIGN-UMSCHALTER
   ------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtn = document.getElementById("toggleThemeBtn");
  if (!toggleBtn) return;

  function updateButtonLabel(theme) {
    if (theme === "dark") {
      toggleBtn.innerHTML = "☀️ Light Mode";
      toggleBtn.setAttribute("title", "Zu hellem Design wechseln");
    } else {
      toggleBtn.innerHTML = "🌙 Dark Mode";
      toggleBtn.setAttribute("title", "Zu dunklem Design wechseln");
    }
  }

  // Aktuelles Theme ermitteln
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  updateButtonLabel(currentTheme);

  toggleBtn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";

    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    try {
      localStorage.setItem("korea_geo_theme", newTheme);
    } catch (e) {}

    updateButtonLabel(newTheme);
    showToast(newTheme === "dark" ? "🌙 Dunkelmodus aktiviert" : "☀️ Hellmodus aktiviert");
  });
}

/* -------------------------------------------------------------------
   1. ABSTRACT RENDERN
   ------------------------------------------------------------------- */
function initAbstract() {
  const titleEl = document.getElementById("abstractTitle");
  const textEl = document.getElementById("abstractText");
  if (!titleEl || !textEl || !window.KOREA_DATA.abstract) return;

  titleEl.textContent = window.KOREA_DATA.abstract.title;
  textEl.textContent = window.KOREA_DATA.abstract.text;
}

/* -------------------------------------------------------------------
   2. STECKBRIEF RENDERN
   ------------------------------------------------------------------- */
function initSteckbrief() {
  const container = document.getElementById("factsGrid");
  if (!container || !window.KOREA_DATA) return;

  const meta = window.KOREA_DATA.generalInfo.meta;
  container.innerHTML = meta.map(item => `
    <div class="fact-card">
      <div class="fact-icon">${item.icon}</div>
      <div class="fact-meta">
        <div class="fact-label">${escapeHtml(item.label)}</div>
        <div class="fact-value">${escapeHtml(item.value)}</div>
      </div>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   3. SEKTORENWANDEL RENDERN
   ------------------------------------------------------------------- */
function initSektorenwandel() {
  const container = document.getElementById("sektorenGrid");
  if (!container || !window.KOREA_DATA.sektorenWandel) return;

  container.innerHTML = window.KOREA_DATA.sektorenWandel.map(s => `
    <div class="sektor-card">
      <h3 class="sektor-title">${escapeHtml(s.sektor)}</h3>
      <div class="sektor-meta">
        <strong>1960:</strong> ${escapeHtml(s.anteil1960)}<br>
        <strong>Heute:</strong> ${escapeHtml(s.anteilHeute)}
      </div>
      <p class="sektor-analyse">${escapeHtml(s.analyse)}</p>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   4. BASISKONZEPTE RENDERN (Vorgabe KCGO)
   ------------------------------------------------------------------- */
function initBasiskonzepte() {
  const container = document.getElementById("basiskonzepteGrid");
  if (!container || !window.KOREA_DATA.basisKonzepte) return;

  container.innerHTML = window.KOREA_DATA.basisKonzepte.map(bk => `
    <div class="konzept-card">
      <div class="konzept-header">
        <span>${bk.icon}</span>
        <span>${escapeHtml(bk.titel)}</span>
      </div>
      <ul class="konzept-punkte">
        ${bk.punkte.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

/* -------------------------------------------------------------------
   5. SWOT-ANALYSE RENDERN
   ------------------------------------------------------------------- */
function initSwot() {
  const container = document.getElementById("swotContainer");
  if (!container || !window.KOREA_DATA.swot) return;

  const s = window.KOREA_DATA.swot;
  container.innerHTML = `
    <div class="swot-quadrant swot-strengths">
      <h4 style="color: #16a34a;">💪 Stärken (Strengths)</h4>
      <ul>${s.strengths.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div class="swot-quadrant swot-weaknesses">
      <h4 style="color: #dc2626;">⚠️ Schwächen (Weaknesses)</h4>
      <ul>${s.weaknesses.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div class="swot-quadrant swot-opportunities">
      <h4 style="color: #2563eb;">🚀 Chancen (Opportunities)</h4>
      <ul>${s.opportunities.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
    <div class="swot-quadrant swot-threats">
      <h4 style="color: #d97706;">⚡ Risiken (Threats)</h4>
      <ul>${s.threats.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </div>
  `;
}

/* -------------------------------------------------------------------
   6. STATIONEN RENDERN
   ------------------------------------------------------------------- */
function initStations() {
  const stations = window.KOREA_DATA.stations;
  const navContainer = document.getElementById("stationNavTabs");
  const contentContainer = document.getElementById("stationsContainer");

  if (!stations || !navContainer || !contentContainer) return;

  navContainer.innerHTML = "";
  contentContainer.innerHTML = "";

  stations.forEach((st, idx) => {
    const isActive = idx === 0;

    const tab = document.createElement("button");
    tab.className = `station-tab-btn ${isActive ? "active" : ""}`;
    tab.setAttribute("data-station", st.id);
    tab.innerHTML = `${st.icon} ${st.number}`;
    tab.addEventListener("click", () => switchStation(st.id));
    navContainer.appendChild(tab);

    const card = document.createElement("div");
    card.className = `station-card ${isActive ? "active" : ""}`;
    card.id = `station-card-${st.id}`;

    const keyPointsHtml = st.keyPoints.map(kp => `
      <div class="key-point-box">
        <div class="key-point-title">${escapeHtml(kp.title)}</div>
        <div class="key-point-text">${escapeHtml(kp.text)}</div>
      </div>
    `).join("");

    const linksHtml = st.weblinks && st.weblinks.length ? st.weblinks.map(link => `
      <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="external-link-pill">
        🔗 ${escapeHtml(link.label)}
      </a>
    `).join("") : "";

    const videoEmbedHtml = st.youtubeId ? `
      <div class="video-container">
        <iframe src="https://www.youtube-nocookie.com/embed/${st.youtubeId}" title="${escapeHtml(st.title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    ` : "";

    card.innerHTML = `
      <div class="station-header">
        <span class="station-number-tag">${escapeHtml(st.number)}</span>
        <h2 class="station-title-main">${st.icon} ${escapeHtml(st.title)}</h2>
        <p class="station-tagline">${escapeHtml(st.tagline)}</p>
      </div>

      <div class="station-grid">
        <div class="station-media-col">
          <div class="station-image-wrap">
            <img src="${escapeHtml(st.image)}" alt="${escapeHtml(st.title)}" loading="lazy">
            <div class="station-img-caption">📷 ${escapeHtml(st.imageCaption)}</div>
          </div>
          ${videoEmbedHtml}
        </div>

        <div class="station-content-col">
          ${keyPointsHtml}
        </div>
      </div>

      <div class="interactive-task-box">
        <div class="task-heading">${escapeHtml(st.interactiveTask.heading)}</div>
        <p class="task-question">${escapeHtml(st.interactiveTask.question)}</p>
        <textarea 
          class="group-input-area" 
          data-station-id="${st.id}" 
          placeholder="Eure Gruppenantwort hier formulieren (wird automatisch gesichert)..."
        ></textarea>
        
        <div class="task-actions">
          <span class="save-status" id="save-status-${st.id}">💾 Automatisch gespeichert</span>
          <button type="button" class="btn-solution-toggle" data-target="sol-${st.id}">
            💡 Lösungs-Impuls / Musterlösung einblenden
          </button>
        </div>

        <div class="sample-solution-box" id="sol-${st.id}">
          <strong>💡 Erwarteter Lösungsansatz:</strong><br>
          ${escapeHtml(st.interactiveTask.sampleSolution)}
        </div>
      </div>

      ${linksHtml ? `
        <div class="station-links">
          <strong>Weiterführende Recherche:</strong> ${linksHtml}
        </div>
      ` : ""}
    `;

    contentContainer.appendChild(card);
  });

  document.querySelectorAll(".btn-solution-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const box = document.getElementById(targetId);
      if (box) {
        box.classList.toggle("show");
        btn.textContent = box.classList.contains("show") 
          ? "❌ Musterlösung verbergen" 
          : "💡 Lösungs-Impuls / Musterlösung einblenden";
      }
    });
  });

  function switchStation(id) {
    document.querySelectorAll(".station-tab-btn").forEach(t => {
      t.classList.toggle("active", t.getAttribute("data-station") === id);
    });
    document.querySelectorAll(".station-card").forEach(c => {
      c.classList.toggle("active", c.id === `station-card-${id}`);
    });
  }
}

/* -------------------------------------------------------------------
   7. FACHBEGRIFFE (FLASHCARDS)
   ------------------------------------------------------------------- */
function initFlashcards() {
  const cards = window.KOREA_DATA.flashcards;
  const container = document.getElementById("flashcardsGrid");
  if (!cards || !container) return;

  container.innerHTML = cards.map(c => `
    <div class="flashcard">
      <div class="flashcard-category">${escapeHtml(c.category)}</div>
      <div class="flashcard-term">${escapeHtml(c.term)}</div>
      <div class="flashcard-explanation" style="display: none;">${escapeHtml(c.explanation)}</div>
      <div class="flashcard-hint">👆 Klicken zum Umdrehen / Erklärung</div>
    </div>
  `).join("");

  document.querySelectorAll(".flashcard").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      const term = card.querySelector(".flashcard-term");
      const exp = card.querySelector(".flashcard-explanation");
      const hint = card.querySelector(".flashcard-hint");

      if (card.classList.contains("flipped")) {
        term.style.display = "none";
        exp.style.display = "block";
        hint.textContent = "🔄 Klicken zum Begriff";
      } else {
        term.style.display = "block";
        exp.style.display = "none";
        hint.textContent = "👆 Klicken zum Umdrehen / Erklärung";
      }
    });
  });
}

/* -------------------------------------------------------------------
   8. INTERAKTIVES QUIZ
   ------------------------------------------------------------------- */
function initQuiz() {
  const quizData = window.KOREA_DATA.quiz;
  const questionText = document.getElementById("quizQuestion");
  const optionsList = document.getElementById("quizOptions");
  const feedbackBox = document.getElementById("quizFeedback");
  const nextBtn = document.getElementById("quizNextBtn");
  const counterText = document.getElementById("quizCounter");
  const progressBar = document.getElementById("quizProgressBar");
  const resultsBox = document.getElementById("quizResults");
  const quizActiveWrap = document.getElementById("quizActiveWrap");
  const finalScore = document.getElementById("finalScore");

  if (!quizData || !questionText) return;

  let currentQuestion = 0;
  let score = 0;

  loadQuestion();

  function loadQuestion() {
    feedbackBox.classList.remove("show");
    feedbackBox.innerHTML = "";
    nextBtn.classList.remove("show");

    const q = quizData[currentQuestion];
    counterText.textContent = `Frage ${currentQuestion + 1} von ${quizData.length}`;
    progressBar.style.width = `${((currentQuestion) / quizData.length) * 100}%`;
    questionText.textContent = q.question;

    optionsList.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "quiz-option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleAnswer(idx, q));
      optionsList.appendChild(btn);
    });
  }

  function handleAnswer(selectedIdx, q) {
    const buttons = optionsList.querySelectorAll(".quiz-option-btn");
    buttons.forEach(b => b.disabled = true);

    const isCorrect = selectedIdx === q.correct;
    if (isCorrect) {
      score++;
      buttons[selectedIdx].classList.add("correct");
      feedbackBox.innerHTML = `<strong>🎉 Richtig!</strong> ${escapeHtml(q.explanation)}`;
    } else {
      buttons[selectedIdx].classList.add("incorrect");
      buttons[q.correct].classList.add("correct");
      feedbackBox.innerHTML = `<strong>⚠️ Falsch:</strong> ${escapeHtml(q.explanation)}`;
    }

    feedbackBox.classList.add("show");
    nextBtn.classList.add("show");

    if (currentQuestion === quizData.length - 1) {
      nextBtn.textContent = "🏆 Ergebnis auswerten";
    } else {
      nextBtn.textContent = "Nächste Frage ➔";
    }
  }

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    progressBar.style.width = "100%";
    quizActiveWrap.style.display = "none";
    resultsBox.style.display = "block";
    finalScore.textContent = `${score} / ${quizData.length}`;
  }

  const restartBtn = document.getElementById("quizRestartBtn");
  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      currentQuestion = 0;
      score = 0;
      quizActiveWrap.style.display = "block";
      resultsBox.style.display = "none";
      loadQuestion();
    });
  }
}

/* -------------------------------------------------------------------
   9. QUELLEN & PROMPTS RENDERN
   ------------------------------------------------------------------- */
function initQuellenUndPrompts() {
  const quellenEl = document.getElementById("quellenList");
  const promptsEl = document.getElementById("promptsList");
  if (!quellenEl || !promptsEl || !window.KOREA_DATA.quellenPrompts) return;

  const qp = window.KOREA_DATA.quellenPrompts;

  quellenEl.innerHTML = `
    <h3 style="margin-bottom: 1rem; color: #0f172a;">📚 Wissenschaftliche Quellen</h3>
    ${qp.quellen.map(q => `
      <div class="quelle-item">
        <strong>${escapeHtml(q.titel)}</strong><br>
        <span style="font-size: 0.88rem; color: #475569;">${escapeHtml(q.info)}</span>
      </div>
    `).join("")}
  `;

  promptsEl.innerHTML = `
    <h3 style="margin-bottom: 1rem; color: #0f172a;">🤖 KI-Recherche-Prompts (für Vertiefung)</h3>
    ${qp.prompts.map(p => `
      <div class="prompt-item">
        <strong>Ziel: ${escapeHtml(p.ziel)}</strong>
        <code class="prompt-code">${escapeHtml(p.prompt)}</code>
      </div>
    `).join("")}
  `;
}

/* -------------------------------------------------------------------
   10. LOCALSTORAGE SPEICHERUNG DER ANTWORTEN
   ------------------------------------------------------------------- */
function initGroupWorksheetStorage() {
  const STORAGE_KEY = "korea_geo_answers";
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  const textareas = document.querySelectorAll(".group-input-area");
  textareas.forEach(area => {
    const stationId = area.getAttribute("data-station-id");
    if (saved[stationId]) {
      area.value = saved[stationId];
    }

    area.addEventListener("input", () => {
      saved[stationId] = area.value;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      
      const indicator = document.getElementById(`save-status-${stationId}`);
      if (indicator) {
        indicator.textContent = "💾 Gespeichert!";
        setTimeout(() => {
          indicator.textContent = "💾 Automatisch gespeichert";
        }, 1500);
      }
    });
  });

  const printBtn = document.getElementById("printWorksheetBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  const exportBtn = document.getElementById("exportTextBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      let exportText = `=== SÜDKOREA ALS WIRTSCHAFTSMACHT & BLAUPAUSE ===\n`;
      exportText += `Gruppenarbeits-Ergebnisse vom ${new Date().toLocaleDateString('de-DE')}\n\n`;

      window.KOREA_DATA.stations.forEach(st => {
        exportText += `======================================================\n`;
        exportText += `${st.number}: ${st.title}\n`;
        exportText += `Aufgabe: ${st.interactiveTask.question}\n\n`;
        exportText += `Antwort:\n${saved[st.id] || "(Keine Eingabe erfolgt)"}\n\n`;
      });

      const blob = new Blob([exportText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Suedkorea_Gruppenarbeit_Antworten.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("📄 Textdatei mit euren Antworten heruntergeladen!");
    });
  }
}

/* -------------------------------------------------------------------
   11. LIVE BEARBEITUNGS-MODUS (FÜR SCHÜLER)
   ------------------------------------------------------------------- */
function initEditMode() {
  const toggleBtn = document.getElementById("toggleEditModeBtn");
  if (!toggleBtn) return;

  let isEditMode = false;

  toggleBtn.addEventListener("click", () => {
    isEditMode = !isEditMode;
    document.body.classList.toggle("edit-mode-active", isEditMode);
    toggleBtn.classList.toggle("active", isEditMode);

    if (isEditMode) {
      toggleBtn.innerHTML = "💾 Bearbeitung beenden";
      makeEditable(true);
      showToast("✏️ Bearbeitungs-Modus AKTIV: Klicke in beliebige Texte, um sie sofort anzupassen!");
    } else {
      toggleBtn.innerHTML = "✏️ Live bearbeiten";
      makeEditable(false);
      showToast("✅ Änderungen übernommen!");
    }
  });

  function makeEditable(enable) {
    const editableElements = document.querySelectorAll(
      ".hero h1, .hero p, #abstractText, .station-title-main, .station-tagline, .key-point-title, .key-point-text, .task-question, .fact-value, .sektor-analyse"
    );
    editableElements.forEach(el => {
      el.setAttribute("contenteditable", enable ? "true" : "false");
    });
  }
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
  }, 3500);
}

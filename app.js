(() => {
  "use strict";

  const STORAGE_KEY = "cap-numerique-accessible-v1";
  const TOTAL = QUESTIONS.length;

  const state = {
    index: 0,
    answers: Array(TOTAL).fill(null),
    score: 0,
    validated: false,
    voiceEnabled: false,
    hoverEnabled: false,
    rate: 1,
    currentOptions: []
  };

  const els = {
    themeBtn: document.getElementById("themeBtn"),
    fontBtn: document.getElementById("fontBtn"),
    voiceBtn: document.getElementById("voiceBtn"),
    hoverBtn: document.getElementById("hoverBtn"),
    stopBtn: document.getElementById("stopBtn"),
    rate: document.getElementById("rate"),
    rateOut: document.getElementById("rateOut"),
    quizCard: document.getElementById("quizCard"),
    quizForm: document.getElementById("quizForm"),
    illustration: document.getElementById("illustration"),
    questionLegend: document.getElementById("questionLegend"),
    options: document.getElementById("options"),
    feedback: document.getElementById("feedback"),
    validateBtn: document.getElementById("validateBtn"),
    nextBtn: document.getElementById("nextBtn"),
    listenBtn: document.getElementById("listenBtn"),
    results: document.getElementById("results"),
    resultsTitle: document.getElementById("resultsTitle"),
    resultsScore: document.getElementById("resultsScore"),
    resultsLevel: document.getElementById("resultsLevel"),
    resultsText: document.getElementById("resultsText"),
    recommendations: document.getElementById("recommendations"),
    restartBtn: document.getElementById("restartBtn"),
    scoreDisplay: document.getElementById("scoreDisplay"),
    questionCounter: document.getElementById("questionCounter"),
    progressPercent: document.getElementById("progressPercent"),
    progressBar: document.getElementById("progressBar"),
    progressFill: document.getElementById("progressFill"),
    status: document.getElementById("status"),
    designerPhoto: document.getElementById("designerPhoto"),
    designerFallback: document.getElementById("designerFallback")
  };

  const speechSupported =
    "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function iconSVG(name) {
    const icons = {
      screen: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="16" y="24" width="88" height="58" rx="8" fill="none" stroke="currentColor" stroke-width="4"/><path d="M42 98h36M60 82v16M88 38c7 5 7 15 0 20M96 31c13 9 13 29 0 38" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      window: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="18" y="20" width="84" height="80" rx="8" fill="none" stroke="currentColor" stroke-width="4"/><path d="M18 42h84M44 20v80" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="30" cy="31" r="3" fill="currentColor"/><circle cx="42" cy="31" r="3" fill="currentColor"/></svg>`,
      phone: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="34" y="12" width="52" height="96" rx="10" fill="none" stroke="currentColor" stroke-width="4"/><path d="M52 22h16M52 98h16" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="84" r="4" fill="currentColor"/></svg>`,
      android: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M42 42c0-12 8-20 18-20s18 8 18 20v38c0 9-7 16-16 16H58c-9 0-16-7-16-16V42Z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M48 34 42 24M72 34l6-10M46 58h28M46 70h28" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      gesture: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M45 80V46c0-5 8-5 8 0v20-28c0-5 8-5 8 0v28-24c0-5 8-5 8 0v24-18c0-5 8-5 8 0v34c0 14-9 24-22 24-15 0-24-9-24-22V56c0-5 8-5 8 0v24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      zoom: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><circle cx="52" cy="52" r="24" fill="none" stroke="currentColor" stroke-width="4"/><path d="m70 70 22 22M42 52h20M52 42v20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      scan: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M30 38V28h12M78 28h12v10M90 82v10H78M42 92H30V82" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><rect x="40" y="46" width="40" height="28" rx="4" fill="none" stroke="currentColor" stroke-width="4"/><path d="M48 56h24M48 64h16" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      pdf: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M34 16h36l18 18v70H34V16Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M70 16v20h18M46 54h24M46 66h24M46 78h18" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      speech: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M22 48h18l18-14v52L40 72H22V48Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M72 48c5 6 5 18 0 24M82 38c11 12 11 32 0 44M92 28c17 18 17 46 0 64" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      mic: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="46" y="16" width="28" height="52" rx="14" fill="none" stroke="currentColor" stroke-width="4"/><path d="M34 56c0 18 12 28 26 28s26-10 26-28M60 84v18M46 102h28" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      keyboard: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="12" y="36" width="96" height="52" rx="8" fill="none" stroke="currentColor" stroke-width="4"/><path d="M24 50h8M40 50h8M56 50h8M72 50h8M88 50h8M24 62h8M40 62h8M56 62h8M72 62h8M88 62h8M38 74h44" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      code: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M44 34 20 60l24 26M76 34l24 26-24 26M66 24 54 96" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      shield: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M60 14 94 28v28c0 24-14 40-34 50-20-10-34-26-34-50V28l34-14Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="m44 58 12 12 22-24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      contrast: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" stroke-width="4"/><path d="M60 22v76a38 38 0 0 0 0-76Z" fill="currentColor"/></svg>`,
      text: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><text x="16" y="78" fill="currentColor" font-size="52" font-weight="800" font-family="system-ui, sans-serif">Aa</text><path d="M18 94h84" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      braille: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><g fill="currentColor"><circle cx="42" cy="30" r="7"/><circle cx="42" cy="60" r="7"/><circle cx="42" cy="90" r="7"/><circle cx="78" cy="30" r="7"/><circle cx="78" cy="60" r="7"/><circle cx="78" cy="90" r="7"/></g><rect x="24" y="16" width="72" height="88" rx="12" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
      ocr: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><path d="M34 16h36l18 18v70H34V16Z" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><path d="M70 16v20h18" fill="none" stroke="currentColor" stroke-width="4"/><ellipse cx="60" cy="66" rx="20" ry="12" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="60" cy="66" r="4" fill="currentColor"/></svg>`,
      ai: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="24" y="34" width="72" height="52" rx="12" fill="none" stroke="currentColor" stroke-width="4"/><circle cx="60" cy="60" r="12" fill="none" stroke="currentColor" stroke-width="4"/><path d="M60 18v10M60 92v10M18 60h10M92 60h10M34 28l6 8M86 28l-6 8M34 92l6-8M86 92l-6-8" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>`,
      video: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="18" y="34" width="62" height="52" rx="8" fill="none" stroke="currentColor" stroke-width="4"/><path d="m80 48 20-12v48L80 72" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/><circle cx="49" cy="60" r="8" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
      settings: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><circle cx="60" cy="60" r="16" fill="none" stroke="currentColor" stroke-width="4"/><path d="M60 14v14M60 92v14M14 60h14M92 60h14M28 28l10 10M82 82l10 10M92 28 82 38M38 82 28 92" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" stroke-width="4"/></svg>`,
      form: `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false"><rect x="20" y="18" width="80" height="84" rx="8" fill="none" stroke="currentColor" stroke-width="4"/><path d="M34 42h52M34 58h20M34 74h52" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><rect x="62" y="52" width="24" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="4"/><path d="m66 58 4 4 8-8" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    };

    return icons[name] || icons.screen;
  }

  function safeStorageGet() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function safeStorageSet(value) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      /* stockage indisponible : les préférences restent en mémoire */
    }
  }

  function savePrefs() {
    safeStorageSet({
      theme: document.documentElement.dataset.theme || "github",
      size: document.documentElement.dataset.size || "normal",
      voiceEnabled: state.voiceEnabled,
      rate: state.rate
    });
  }

  function formatRate(value) {
    return value.toFixed(1).replace(".", ",") + "×";
  }

  function setStatus(message) {
    els.status.textContent = "";
    window.setTimeout(() => {
      els.status.textContent = message;
    }, 40);
  }

  function speak(text, force = false) {
    if (!speechSupported) {
      return;
    }

    if (!force && !state.voiceEnabled) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = state.rate;

    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find((voice) =>
      (voice.lang || "").toLowerCase().startsWith("fr")
    );

    if (frenchVoice) {
      utterance.voice = frenchVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  function questionSpeechText(question) {
    const options = state.currentOptions
      .map((option, index) => `Réponse ${index + 1} : ${option.text}.`)
      .join(" ");

    return `${question.question} ${options} Choisissez une réponse, puis validez.`;
  }

  function applyTheme(theme) {
    const safeTheme = theme === "hc" ? "hc" : "github";
    document.documentElement.dataset.theme = safeTheme;
    const isHighContrast = safeTheme === "hc";
    els.themeBtn.setAttribute("aria-pressed", String(isHighContrast));
    els.themeBtn.textContent = isHighContrast
      ? "Thème : contraste élevé"
      : "Thème : GitHub sombre";
  }

  function applySize(size) {
    const sizes = ["normal", "large", "xlarge"];
    const safeSize = sizes.includes(size) ? size : "normal";
    const labels = {
      normal: "Texte : normal",
      large: "Texte : grand",
      xlarge: "Texte : très grand"
    };
    document.documentElement.dataset.size = safeSize;
    els.fontBtn.textContent = labels[safeSize];
  }

  function applyVoice(enabled) {
    state.voiceEnabled = Boolean(enabled) && speechSupported;
    els.voiceBtn.setAttribute("aria-pressed", String(state.voiceEnabled));
    els.voiceBtn.textContent = state.voiceEnabled
      ? "Voix : activée"
      : "Voix : désactivée";

    if (!state.voiceEnabled && speechSupported) {
      window.speechSynthesis.cancel();
    }
  }

  function updateScore() {
    els.scoreDisplay.textContent = `Score : ${state.score} / ${TOTAL}`;
  }

  function updateProgress() {
    const answered = state.answers.filter((answer) => answer !== null).length;
    const percent = Math.round((answered / TOTAL) * 100);

    els.questionCounter.textContent =
      state.index < TOTAL
        ? `Question ${state.index + 1} sur ${TOTAL}`
        : "Test terminé";
    els.progressPercent.textContent = `${percent} %`;
    els.progressBar.setAttribute("aria-valuenow", String(answered));
    els.progressFill.style.width = `${percent}%`;
  }

  function renderQuestion({ focus = false } = {}) {
    const question = QUESTIONS[state.index];

    if (!question) {
      showResults();
      return;
    }

    state.validated = false;
    els.quizCard.hidden = false;
    els.results.hidden = true;

    els.illustration.innerHTML = iconSVG(question.icon);
    els.questionLegend.textContent = question.question;
    els.options.replaceChildren();

    const originalOptions = question.options.map((text, index) => ({
      text: text,
      isCorrect: index === question.correct
    }));
    
    state.currentOptions = shuffleArray(originalOptions);

    state.currentOptions.forEach((option, optionIndex) => {
      const wrapper = document.createElement("div");
      wrapper.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "quiz-option";
      input.id = `option-${state.index}-${optionIndex}`;
      input.value = String(optionIndex);

      const label = document.createElement("label");
      label.htmlFor = input.id;
      label.textContent = option.text;

      wrapper.append(input, label);
      els.options.append(wrapper);
    });

    els.feedback.hidden = true;
    els.feedback.textContent = "";
    els.feedback.className = "feedback";
    els.validateBtn.hidden = false;
    els.validateBtn.disabled = false;
    els.nextBtn.hidden = true;
    els.nextBtn.textContent =
      state.index === TOTAL - 1 ? "Voir mon résultat" : "Question suivante";

    updateScore();
    updateProgress();

    if (focus) {
      window.requestAnimationFrame(() => {
        els.questionLegend.focus({ preventScroll: true });
      });
    }

    if (state.voiceEnabled) {
      window.setTimeout(() => {
        speak(questionSpeechText(question), true);
      }, 250);
    }
  }

  function getSelectedAnswer() {
    return els.quizForm.querySelector('input[name="quiz-option"]:checked');
  }

  function validateAnswer() {
    if (state.validated) {
      return;
    }

    const selected = getSelectedAnswer();

    if (!selected) {
      setStatus("Veuillez sélectionner une réponse avant de valider.");
      speak("Veuillez sélectionner une réponse avant de valider.", true);
      return;
    }

    const question = QUESTIONS[state.index];
    const displayIndex = Number(selected.value);
    const selectedOption = state.currentOptions[displayIndex];
    const isCorrect = selectedOption.isCorrect;

    state.answers[state.index] = displayIndex;
    state.validated = true;

    if (isCorrect) {
      state.score += 1;
    }

    els.quizForm.querySelectorAll('input[name="quiz-option"]').forEach((input) => {
      input.disabled = true;
    });

    els.options.querySelectorAll(".option").forEach((optionEl, idx) => {
      const opt = state.currentOptions[idx];
      optionEl.classList.toggle("is-correct", opt.isCorrect);
      optionEl.classList.toggle("is-wrong", idx === displayIndex && !isCorrect);
    });

    const correctAnswerText = state.currentOptions.find(o => o.isCorrect).text;
    const feedbackText = isCorrect
      ? `Bonne réponse. ${question.explanation}`
      : `Réponse incorrecte. La bonne réponse est : ${correctAnswerText}. ${question.explanation}`;

    els.feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
    els.feedback.textContent = feedbackText;
    els.feedback.hidden = false;

    els.validateBtn.hidden = true;
    els.nextBtn.hidden = false;

    updateScore();
    updateProgress();
    setStatus("Réponse enregistrée.");
    speak(feedbackText, true);

    window.requestAnimationFrame(() => {
      els.feedback.focus({ preventScroll: false });
    });
  }

  function nextQuestion() {
    if (!state.validated) {
      return;
    }

    if (state.index < TOTAL - 1) {
      state.index += 1;
      renderQuestion({ focus: true });
    } else {
      showResults();
    }
  }

  function getProfile(score) {
    if (score <= 9) {
      return {
        name: "Débutant",
        text: "Les bases sont à consolider. C’est un point de départ normal : les aides techniques sont nombreuses et leur vocabulaire peut être nouveau.",
        recommendations: [
          "Découvrir NVDA ou VoiceOver avec un tutoriel pas à pas.",
          "Apprendre à utiliser la touche Tab et les raccourcis du lecteur d’écran.",
          "Tester l’agrandissement et le contraste élevé sur son propre appareil."
        ]
      };
    }

    if (score <= 17) {
      return {
        name: "Intermédiaire",
        text: "Vous connaissez déjà plusieurs outils. Le prochain levier est de relier les réglages système, les lecteurs d’écran et les bonnes pratiques du web.",
        recommendations: [
          "Approfondir les gestes de TalkBack ou de VoiceOver.",
          "Apprendre à reconnaître un PDF balisé d’un PDF image.",
          "Vérifier les étiquettes et messages d’erreur des formulaires que vous utilisez."
        ]
      };
    }

    if (score <= 24) {
      return {
        name: "Avancé",
        text: "Votre panorama est solide. Vous pouvez maintenant aider d’autres personnes à choisir l’outil adapté à leur situation.",
        recommendations: [
          "Former des collègues aux bases de l’accessibilité web.",
          "Tester des parcours complets au clavier et au lecteur d’écran.",
          "Documenter les réglages utiles pour les usagers que vous accompagnez."
        ]
      };
    }

    return {
      name: "Expert",
      text: "Vous maîtrisez un large éventail d’outils et de principes. Pensez à transmettre ces connaissances et à vérifier régulièrement les évolutions des logiciels.",
      recommendations: [
        "Contribuer à des tests d’utilisabilité avec des personnes concernées.",
        "Suivre les mises à jour des WCAG et des lecteurs d’écran.",
        "Créer des fiches pratiques pour les outils PC et mobile."
      ]
    };
  }

  function showResults() {
    const profile = getProfile(state.score);

    els.quizCard.hidden = true;
    els.results.hidden = false;
    els.resultsScore.textContent = `${state.score} / ${TOTAL}`;
    els.resultsLevel.textContent = `Niveau : ${profile.name}`;
    els.resultsText.textContent = profile.text;
    els.recommendations.replaceChildren();

    profile.recommendations.forEach((recommendation) => {
      const item = document.createElement("li");
      item.textContent = recommendation;
      els.recommendations.append(item);
    });

    els.questionCounter.textContent = "Test terminé";
    els.progressPercent.textContent = "100 %";
    els.progressBar.setAttribute("aria-valuenow", String(TOTAL));
    els.progressFill.style.width = "100%";
    updateScore();

    const resultSpeech = `Votre score est de ${state.score} sur ${TOTAL}. Niveau ${profile.name}. ${profile.text}`;
    speak(resultSpeech, true);
    setStatus("Test terminé. Le résultat est affiché.");

    window.requestAnimationFrame(() => {
      els.resultsTitle.focus({ preventScroll: false });
    });
  }

  function restartQuiz() {
    state.index = 0;
    state.answers = Array(TOTAL).fill(null);
    state.score = 0;
    state.validated = false;

    els.results.hidden = true;
    els.quizCard.hidden = false;

    updateScore();
    renderQuestion({ focus: true });
    setStatus("Le test a été réinitialisé.");
  }

  function initPreferences() {
    const saved = safeStorageGet();
    const prefersHighContrast =
      window.matchMedia && window.matchMedia("(prefers-contrast: more)").matches;

    applyTheme(saved.theme || (prefersHighContrast ? "hc" : "github"));
    applySize(saved.size || "normal");
    applyVoice(Boolean(saved.voiceEnabled));

    state.rate = Number(saved.rate) || 1;
    if (state.rate < 0.6 || state.rate > 1.5) {
      state.rate = 1;
    }

    els.rate.value = String(state.rate);
    els.rateOut.textContent = formatRate(state.rate);
  }

  let hoverTimeout;
  let lastHoveredElement = null;

  function bindEvents() {
    els.themeBtn.addEventListener("click", () => {
      const nextTheme =
        document.documentElement.dataset.theme === "hc" ? "github" : "hc";
      applyTheme(nextTheme);
      savePrefs();
      setStatus(
        nextTheme === "hc"
          ? "Thème contraste élevé activé."
          : "Thème GitHub sombre activé."
      );
    });

    els.fontBtn.addEventListener("click", () => {
      const current = document.documentElement.dataset.size || "normal";
      const next =
        current === "normal" ? "large" : current === "large" ? "xlarge" : "normal";
      applySize(next);
      savePrefs();
      setStatus(`Taille du texte : ${next === "normal" ? "normale" : next === "large" ? "grande" : "très grande"}.`);
    });

    els.voiceBtn.addEventListener("click", () => {
      if (!speechSupported) {
        setStatus("La synthèse vocale n’est pas disponible dans ce navigateur.");
        return;
      }

      applyVoice(!state.voiceEnabled);
      savePrefs();

      if (state.voiceEnabled) {
        const question = QUESTIONS[state.index];
        speak(question ? questionSpeechText(question) : "Vocalisation activée.", true);
        setStatus("Vocalisation activée.");
      } else {
        setStatus("Vocalisation désactivée.");
      }
    });

    els.hoverBtn.addEventListener("click", () => {
      if (!speechSupported) {
        setStatus("La synthèse vocale n’est pas disponible dans ce navigateur.");
        return;
      }
      state.hoverEnabled = !state.hoverEnabled;
      els.hoverBtn.setAttribute("aria-pressed", String(state.hoverEnabled));
      els.hoverBtn.textContent = state.hoverEnabled ? "Survol : activé" : "Survol : désactivé";
      setStatus(state.hoverEnabled ? "Lecture au survol activée." : "Lecture au survol désactivée.");
      if (!state.hoverEnabled) {
        window.speechSynthesis.cancel();
        lastHoveredElement = null;
      }
    });

    els.stopBtn.addEventListener("click", () => {
      if (speechSupported) {
        window.speechSynthesis.cancel();
      }
      setStatus("Lecture vocale arrêtée.");
    });

    els.rate.addEventListener("input", () => {
      state.rate = Number(els.rate.value);
      els.rateOut.textContent = formatRate(state.rate);
      savePrefs();
    });

    els.quizForm.addEventListener("submit", (event) => {
      event.preventDefault();
      validateAnswer();
    });

    els.nextBtn.addEventListener("click", nextQuestion);
    els.restartBtn.addEventListener("click", restartQuiz);

    els.listenBtn.addEventListener("click", () => {
      const question = QUESTIONS[state.index];

      if (!question) {
        return;
      }

      if (!speechSupported) {
        setStatus("La synthèse vocale n’est pas disponible dans ce navigateur.");
        return;
      }

      if (!els.feedback.hidden && els.feedback.textContent.trim()) {
        speak(`${question.question}. ${els.feedback.textContent}`, true);
      } else {
        speak(questionSpeechText(question), true);
      }

      setStatus("Lecture de la question en cours.");
    });

    // Gestion du survol de la souris pour lire les textes
    document.addEventListener("mouseover", (e) => {
      if (!state.hoverEnabled) return;

      // Cible les balises de texte principales
      const textEl = e.target.closest("p, li, h1, h2, h3, legend, label, summary, a, .option");

      // Évite de relire le même élément en boucle, et ignore la barre d'outils
      if (!textEl || textEl === lastHoveredElement || textEl.closest(".toolbar")) {
        return;
      }

      lastHoveredElement = textEl;
      clearTimeout(hoverTimeout);

      // Petit délai de 400ms pour ne pas déclencher si la souris traverse l'écran
      hoverTimeout = setTimeout(() => {
        const textToRead = textEl.textContent.trim();
        if (textToRead) {
          speak(textToRead, true);
        }
      }, 400);
    });

    if (els.designerPhoto) {
      const showFallback = () => {
        els.designerPhoto.hidden = true;
        if (els.designerFallback) {
          els.designerFallback.hidden = false;
        }
      };

      els.designerPhoto.addEventListener("error", showFallback);

      if (els.designerPhoto.complete && els.designerPhoto.naturalWidth === 0) {
        showFallback();
      }
    }

    if (!speechSupported) {
      els.voiceBtn.disabled = true;
      els.hoverBtn.disabled = true;
      els.stopBtn.disabled = true;
      els.listenBtn.disabled = true;
      els.voiceBtn.textContent = "Voix : indisponible";
      els.hoverBtn.textContent = "Survol : indisponible";
    }
  }

  function init() {
    initPreferences();
    bindEvents();
    updateScore();
    renderQuestion();
  }

  init();
})();

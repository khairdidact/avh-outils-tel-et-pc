/* 30 questions de positionnement sur les outils PC/mobile
   pour les personnes déficientes visuelles ou aveugles. */
const QUESTIONS = [
  {
    icon: "screen",
    question: "Quel outil restitue à voix haute le contenu de l’écran d’un ordinateur ?",
    options: ["Un lecteur d’écran", "Une loupe", "Un scanner OCR", "Un clavier braille"],
    correct: 0,
    explanation: "Un lecteur d’écran comme NVDA, JAWS, Narrator ou VoiceOver transforme le contenu affiché en synthèse vocale et/ou en braille."
  },
  {
    icon: "window",
    question: "Sous Windows, quel lecteur d’écran est gratuit et open source ?",
    options: ["NVDA", "JAWS", "TalkBack", "VoiceOver"],
    correct: 0,
    explanation: "NVDA est un lecteur d’écran libre et gratuit très utilisé sous Windows. JAWS est commercial, TalkBack est sur Android et VoiceOver sur Apple."
  },
  {
    icon: "phone",
    question: "Sur iPhone, le lecteur d’écran intégré s’appelle :",
    options: ["VoiceOver", "TalkBack", "NVDA", "Orca"],
    correct: 0,
    explanation: "VoiceOver est intégré à iOS et iPadOS. On l’active dans Réglages > Accessibilité."
  },
  {
    icon: "android",
    question: "Sur Android, le lecteur d’écran intégré s’appelle :",
    options: ["TalkBack", "VoiceOver", "Narrator", "JAWS"],
    correct: 0,
    explanation: "TalkBack est le lecteur d’écran intégré aux appareils Android. Il se pilote notamment par gestes tactiles."
  },
  {
    icon: "gesture",
    question: "Avec TalkBack, comment active-t-on un élément après l’avoir sélectionné ?",
    options: ["Par un double tap", "Par un double clic droit", "Par un appui long obligatoire", "Par un balayage à trois doigts"],
    correct: 0,
    explanation: "Avec TalkBack, on explore l’écran du doigt pour sélectionner un élément, puis on double-tape pour l’activer."
  },
  {
    icon: "zoom",
    question: "Quel réglage intégré agrandit tout l’écran d’un téléphone ?",
    options: ["Le zoom ou la loupe", "Le mode avion", "Le mode économie d’énergie", "La rotation automatique"],
    correct: 0,
    explanation: "Le zoom et la loupe intégrés agrandissent l’écran. Ils complètent, mais ne remplacent pas toujours un lecteur d’écran."
  },
  {
    icon: "scan",
    question: "Quelle technologie convertit un texte imprimé en texte numérique ?",
    options: ["L’OCR", "Le GPS", "Le VPN", "Le Bluetooth"],
    correct: 0,
    explanation: "L’OCR, ou reconnaissance optique de caractères, transforme l’image d’un texte en texte sélectionnable et lisible par un lecteur d’écran."
  },
  {
    icon: "pdf",
    question: "Un PDF scanné sans OCR est généralement :",
    options: ["Une image non lisible par un lecteur d’écran", "Un texte parfaitement balisé", "Un fichier audio", "Un formulaire automatiquement accessible"],
    correct: 0,
    explanation: "Sans OCR, un PDF scanné contient une image. Le lecteur d’écran n’a alors pas de texte réel à restituer."
  },
  {
    icon: "pdf",
    question: "Quel PDF est le plus susceptible d’être accessible ?",
    options: ["Un PDF balisé avec du texte", "Un PDF image", "Un PDF protégé par mot de passe", "Un PDF scanné en noir et blanc"],
    correct: 0,
    explanation: "Un PDF balisé contient une structure, des titres, des alternatives textuelles et un ordre de lecture exploitable par les aides techniques."
  },
  {
    icon: "speech",
    question: "La synthèse vocale sert à :",
    options: ["Transformer du texte en voix", "Agrandir les images", "Traduire en braille", "Corriger les couleurs"],
    correct: 0,
    explanation: "La synthèse vocale lit un texte à voix haute. Elle est utilisée par les lecteurs d’écran et de nombreuses applications."
  },
  {
    icon: "mic",
    question: "Quel outil permet de piloter un ordinateur avec la voix ?",
    options: ["La commande vocale", "Le lecteur PDF", "Le gestionnaire de fichiers", "Le pare-feu"],
    correct: 0,
    explanation: "La commande vocale permet de lancer des applications, d’écrire ou de cliquer avec des commandes prononcées."
  },
  {
    icon: "mic",
    question: "La commande vocale peut-elle remplacer certains clics de souris ?",
    options: ["Oui, avec des commandes comme « clic »", "Non, jamais", "Seulement pour imprimer", "Uniquement en mode avion"],
    correct: 0,
    explanation: "Selon l’outil, on peut dire « clic », « double clic » ou « clique sur ce bouton » pour remplacer la souris."
  },
  {
    icon: "keyboard",
    question: "Sans souris, quelle touche permet de parcourir les éléments interactifs d’une page web ?",
    options: ["Tab", "Échap", "Verr. Maj", "F1"],
    correct: 0,
    explanation: "La touche Tab déplace le focus entre les liens, boutons et champs. Maj+Tab permet de revenir en arrière."
  },
  {
    icon: "form",
    question: "Dans un formulaire, à quoi sert l’élément label ?",
    options: ["À associer un texte descriptif à un champ", "À changer la couleur du fond", "À bloquer le clavier", "À créer une image"],
    correct: 0,
    explanation: "Un label correctement associé à un champ permet au lecteur d’écran d’annoncer clairement quoi saisir."
  },
  {
    icon: "code",
    question: "Quel attribut HTML décrit une image aux lecteurs d’écran ?",
    options: ["alt", "src", "width", "class"],
    correct: 0,
    explanation: "L’attribut alt fournit une alternative textuelle. Il doit décrire l’information utile de l’image, ou rester vide si elle est purement décorative."
  },
  {
    icon: "code",
    question: "Un lien intitulé « Cliquez ici » est-il idéal pour un lecteur d’écran ?",
    options: ["Non, il faut un libellé explicite", "Oui, c’est le plus clair", "Oui, s’il est en bleu", "Non, il faut supprimer tous les liens"],
    correct: 0,
    explanation: "Les lecteurs d’écran peuvent lister les liens hors contexte. Un libellé comme « Télécharger le guide » est beaucoup plus clair."
  },
  {
    icon: "shield",
    question: "Quelle norme encadre l’accessibilité des contenus web ?",
    options: ["WCAG", "USB", "JPEG", "HTTP"],
    correct: 0,
    explanation: "Les WCAG (Web Content Accessibility Guidelines) définissent des critères d’accessibilité pour les sites et applications web."
  },
  {
    icon: "shield",
    question: "Quel niveau WCAG est couramment exigé pour un site accessible ?",
    options: ["AA", "A0", "PDF", "RGB"],
    correct: 0,
    explanation: "Le niveau AA est le niveau de référence le plus courant dans les politiques d’accessibilité. Le niveau AAA est plus exigeant."
  },
  {
    icon: "contrast",
    question: "Quel contraste minimum WCAG AA pour un texte normal ?",
    options: ["4,5:1", "1:1", "2:1", "10:1"],
    correct: 0,
    explanation: "WCAG AA demande au moins 4,5:1 pour le texte normal, et 3:1 pour les grands textes."
  },
  {
    icon: "contrast",
    question: "Peut-on transmettre une information uniquement par la couleur ?",
    options: ["Non, il faut aussi un texte, une forme ou un motif", "Oui, toujours", "Oui, si c’est du rouge", "Non, il faut supprimer les couleurs"],
    correct: 0,
    explanation: "Une personne daltonienne ou malvoyante peut ne pas distinguer certaines couleurs. Il faut ajouter un libellé, une icône ou un motif."
  },
  {
    icon: "text",
    question: "Quel réglage aide une personne malvoyante à lire un site ?",
    options: ["Augmenter la taille du texte et le contraste", "Réduire le contraste", "Supprimer les titres", "Désactiver le clavier"],
    correct: 0,
    explanation: "Une taille de texte suffisante, un contraste fort et une mise en page aérée facilitent la lecture. La page propose ces réglages."
  },
  {
    icon: "zoom",
    question: "Quel outil de grossissement est intégré à Windows ?",
    options: ["La Loupe", "Paint", "La Calculatrice", "Le Bloc-notes"],
    correct: 0,
    explanation: "La Loupe de Windows agrandit une partie ou tout l’écran. Elle peut suivre le focus clavier et la souris."
  },
  {
    icon: "zoom",
    question: "Sur macOS, quel outil intégré permet d’agrandir l’écran ?",
    options: ["Le Zoom d’accessibilité", "Spotlight", "Finder", "Safari"],
    correct: 0,
    explanation: "Le Zoom d’accessibilité de macOS permet d’agrandir l’écran, avec des options de loupe et de suivi."
  },
  {
    icon: "braille",
    question: "À quoi sert une plage braille ?",
    options: ["À afficher le texte en braille depuis l’ordinateur ou le téléphone", "À imprimer des photos", "À amplifier le son", "À scanner les couleurs"],
    correct: 0,
    explanation: "Une plage braille est un afficheur tactile qui retranscrit le texte en caractères braille, souvent piloté par un lecteur d’écran."
  },
  {
    icon: "braille",
    question: "Une plage braille peut-elle fonctionner avec un lecteur d’écran ?",
    options: ["Oui, elle est souvent pilotée par le lecteur d’écran", "Non, jamais", "Seulement sans ordinateur", "Uniquement pour les jeux"],
    correct: 0,
    explanation: "Les lecteurs d’écran comme NVDA ou JAWS peuvent envoyer le contenu à une plage braille connectée en USB ou en Bluetooth."
  },
  {
    icon: "ocr",
    question: "Quel outil peut lire un document papier à voix haute ?",
    options: ["Un lecteur OCR portatif ou une application de lecture", "Un routeur Wi-Fi", "Un disque dur externe", "Un câble HDMI"],
    correct: 0,
    explanation: "Un lecteur OCR photographie ou scanne le document, reconnaît le texte, puis le restitue avec une synthèse vocale."
  },
  {
    icon: "ai",
    question: "Quelle application aide à reconnaître des objets, des textes ou des personnes ?",
    options: ["Seeing AI", "Excel", "Photoshop", "WinRAR"],
    correct: 0,
    explanation: "Seeing AI, Google Lookout ou Envision utilisent la caméra du téléphone pour décrire des scènes, lire des textes ou identifier des objets."
  },
  {
    icon: "video",
    question: "Be My Eyes met principalement en relation une personne déficiente visuelle avec :",
    options: ["Des bénévoles ou une assistance visuelle par vidéo", "Des publicités", "Des jeux en ligne", "Des imprimantes"],
    correct: 0,
    explanation: "Be My Eyes permet de demander une aide visuelle à distance par appel vidéo, avec des bénévoles ou un service d’assistance."
  },
  {
    icon: "settings",
    question: "Sur mobile, quel réglage facilite la lecture des applications ?",
    options: ["La taille de police et le zoom d’affichage", "Le mode avion", "La luminosité minimale", "La rotation automatique"],
    correct: 0,
    explanation: "Augmenter la taille du texte, activer le zoom et choisir un thème contrasté améliorent nettement le confort de lecture."
  },
  {
    icon: "form",
    question: "Quelle pratique rend un formulaire plus accessible ?",
    options: ["Associer chaque champ à une étiquette et à des messages d’erreur explicites", "Utiliser uniquement des placeholders", "Mettre tous les champs en rouge", "Supprimer les boutons"],
    correct: 0,
    explanation: "Les labels persistants, les instructions claires et les erreurs textuelles permettent aux lecteurs d’écran d’accompagner la saisie."
  }
];

# Cap vers le numérique accessible

Page HTML interactive, responsive et accessible sur les outils PC et mobile pour les personnes déficientes visuelles ou aveugles.

## Contenu

- Présentation des grandes familles d’outils : lecteurs d’écran, grossissement, OCR, braille, commande vocale, reconnaissance d’images, réglages système, bonnes pratiques web.
- Test de positionnement de **30 questions illustrées**.
- Calcul du score et profil : Débutant, Intermédiaire, Avancé, Expert.
- **Vocalisation optionnelle** des questions, réponses et retours, avec réglage de la vitesse.
- Thème **GitHub sombre** et thème **contraste élevé noir/jaune**.
- Agrandissement du texte en trois niveaux.
- Navigation clavier, focus visible, zones tactiles de 44 px minimum.
- Informations jamais transmises par la couleur seule.

## Structure

```text
.
├── index.html
├── styles.css
├── questions.js
├── app.js
├── README.md
└── assets/
    └── README.md
```

## Lancer la page

Aucun serveur n’est obligatoire. Ouvrez simplement `index.html` dans un navigateur récent.

Pour un rendu plus proche d’un site en ligne, vous pouvez aussi lancer un petit serveur local :

```
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Photo du concepteur

La page attend le fichier :

```
assets/jean-baptiste-khair.jpg
```

Déposez-y la photo de **Jean-Baptiste Khair**. Si le fichier est absent, un fallback avec les initiales « JBK » s’affiche automatiquement.

## Charte couleurs

- Base inspirée de GitHub sombre : fond `#0d1117`, surfaces `#161b22`, texte `#e6edf3`.
- Accent bleu accessible `#58a6ff`.
- Mode contraste élevé : fond noir, texte blanc, accent jaune `#ffff00`, focus cyan `#00ffff`.
- Les états correct/incorrect sont doublés par des libellés textuels et des bordures différentes.
- Le mode contraste élevé peut être activé manuellement ou automatiquement si le système demande plus de contraste.

## Contact

**Jean-Baptiste Khair**
Concepteur de la page et du test de positionnement.
khairdidact@gmail.com
+33 7 67 47 04 94

</BDS:create_file>

<BDS:create_file fileName="assets/README.md">

```markdown
# Dossier assets

Déposez ici la photo du concepteur sous le nom exact :

```text
jean-baptiste-khair.jpg

La page `index.html` utilise ce chemin :

```
<img src="assets/jean-baptiste-khair.jpg" alt="Portrait de Jean-Baptiste Khair, concepteur de la page">
```

Si l’image est absente ou illisible, un fallback avec les initiales « JBK » est affiché automatiquement.


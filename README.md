# custom-ent
![Icon](https://raw.githubusercontent.com/0lbap/custom-ent/master/icons/48.png)
Extension Firefox pour changer la couleur de l'ENT.

Version : 0.1 (BÊTA)

## Installation de l'extension sur Firefox :

1. Téléchargez ce repository, dézippez-le puis renommez-le `custom-ent`.
2. Dans la barre d'adresse, tapez sur `about:debugging#/runtime/this-firefox`.
3. Cliquez sur <kbd>Charger un module complémentaire temporaire...</kbd>.
4. Sélectionnez le fichier `manifest.json` dans le dossier de l'extension `custom-ent/` préalablement téléchargé.
5. Cliquez sur <kbd>Ouvrir</kbd>.

> L'extension est activée jusqu'à la fermeture de Firefox. Pour la désactiver manuellement, retournez dans `about:debugging#/runtime/this-firefox` et cliquez sur <kbd>Supprimer</kbd> dans le menu de l'extension.

## Changer les couleurs :

Une fois l'extension activée, votre ENT sera vert. Vous pouvez changer la couleur en suivant ces étapes :
1. Dans le dossier de l'extension `custom-ent/`, ouvrez `custom-ent.js` avec un éditeur de texte.
2. Les 4 premières variables représentent les couleurs. On a :
    ```Javascript
    var color = "#1a8547";
    var lightColor = "#4fb078";
    var darkColor = "#186339";
    var bgColor = "#efffef";
    ```
    - `color` : la **couleur de base** (couleur du fond des barres à gauche et en haut, et couleur des liens)
    - `lightColor` : la **couleur claire** (couleur des lignes séparant les boutons de la barre à gauche)
    - `darkColor` : la **couleur foncée** (couleur du fond du bouton MENU et du bouton sélectionné dans la barre à gauche)
    - `bgColor` : la **couleur du fond** de la page

    Pour changer la couleur d'une variable, remplacez le code hexadécimal `"#xxxxxx"` par le nouveau. Pour déterminer le code hexadécimal d'une couleur, tapez `colorpicker` sur Google et copiez le code **HEX** correspondant à votre couleur.
3. Une fois modifié, enregistrez le fichier, puis si votre extension est déjà en cours d'exécution, allez sur `about:debugging#/runtime/this-firefox` puis cliquez sur <kbd>Actualiser</kbd> dans le menu de l'extension.

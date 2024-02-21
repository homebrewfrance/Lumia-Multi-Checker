/* CONTRIBUTE TO THIS WEBSITE ON OUR GITHUB https://github.com/homebrewfrance/homebrewfrance.github.io */
/* LAST-EDITED : 21/02/2023 by Dhalian */

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberInput = document.querySelector('input[name="numberInput"]').value;
    const xawSelector = document.querySelector('select[name="xawSelector"]').value;
    var resultat = document.getElementById("resultat");
    var pageName = document.getElementById("page_name");

    if (pageName.innerHTML == 'docs') {
      compatible = '<div class="compatible-container"><div class="compatible">&nbsp;<strong>Console non patchée</strong></div><div class="infos"><p>Votre console est compatible avec la faille RCM.</br>Vous pouvez continuer à <a href="https://homebrewfrance.github.io/docs/switch/#simuler-jig">l’étape suivante</a>.</p></div></div>';
    }
    else {
      compatible = '<div class="compatible-container"><div class="compatible">&nbsp;<strong>Console non patchée</strong></div><div class="infos"><p>Votre console est compatible avec la faille RCM.</p></div></div>';
    }
    maybecompatible = '<div class="maybe-compatible-container"><div class="maybe-compatible">&nbsp;<strong>Console potentiellement patchée</strong></div><div class="infos"><p>Votre console est supposée compatible avec la faille RCM.</br>Votre console nécessite l’installation d’une puce.</br><a href="https://homebrewfrance.github.io/boutique">Plus d’infos</a></p></div></div>';
    incompatible = '<div class="incompatible-container"><div class="incompatible">&nbsp;<strong>Console patchée</strong></div><div class="infos"><p>Votre console est incompatible avec la faille RCM.</br>Votre console nécessite l’installation d’une puce.</br><a href="https://homebrewfrance.github.io/boutique">Plus d’infos</a></p></div></div>';

    if (numberInput.length !== 11) {
        alert("Numéro de série invalide, il doit comporter exactement 11 caractères.");
        return;
    }

    if (xawSelector === "XAW") {
        if (numberInput >= 10000000000 && numberInput <= 10074000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 10074000000 && numberInput <= 10120000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 10120000000 && numberInput <= 40000000000) {
            resultat.innerHTML = incompatible;
        } else if (numberInput >= 40000000000 && numberInput <= 40011000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 40011000000 && numberInput <= 40012000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 40012000000 && numberInput <= 70000000000) {
            resultat.innerHTML = incompatible;
        } else if (numberInput >= 70000000000 && numberInput <= 70017800000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 70017800000 && numberInput <= 70030000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 70030000000 && numberinput <= 99999999999) {
            resultat.innerHTML = incompatible;
        } else {
            alert("Numéro de série invalide");
        }
    } else if (xawSelector === "XAJ") {
        if (numberInput >= 10000000000 && numberInput <= 10020000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 10020000000 && numberInput <= 10030000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 10030000000 && numberInput <= 40000000000) {
            resultat.innerHTML = incompatible;
        } else if (numberInput >= 40000000000 && numberInput <= 40046000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 40046000000 && numberInput <= 40060000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 40060000000 && numberInput <= 70000000000) {
             resultat.innerHTML = incompatible;
        } else if (numberInput >= 70000000000 && numberInput <= 70040000000) {
            resultat.innerHTML = compatible;
        } else if (numberInput > 70040000000 && numberInput <= 70050000000) {
            resultat.innerHTML = maybecompatible;
        } else if (numberInput > 70050000000 && numberInput <= 99999999999) {
             resultat.innerHTML = incompatible;
        } else {
            alert("Numéro de série invalide");
        }
    } else if (["XKJ", "XJW", "XKW", "XWW"].includes(xawSelector)) {
        if (numberInput >= 10000000000) {
             resultat.innerHTML = incompatible;
        }
    } else {
        alert("Numéro de série invalide");
    }
});

/* CONTRIBUTE TO THIS SCRIPT ON OUR GITHUB https://github.com/homebrewfrance/Lumia-Multi-Checker */
/* LAST-EDITED : 10/03/2024 by Dhalian */

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberInputPS3 = document.querySelector('input[name="numberInputPS3"]').value;
    const CECHSelector = document.querySelector('select[name="CECHSelector"]').value;
    const LETTERSelector = document.querySelector('select[name="LETTERSelector"]').value;
    var resultat = document.getElementById("resultat");

    compatible = '<div class="compatible-container"><div class="compatible">&nbsp;<strong>Comptatible CFW</strong></div><div class="infos"><p>Votre console est compatible avec un CFW permanent.</p></div></div>';
    incompatible = '<div class="incompatible-container"><div class="incompatible">&nbsp;<strong>Console patchée</strong></div><div class="infos"><p>Votre console est incompatible avec un CFW permanent. Préféreez l’installation du HEN (Hybrid Firmware)</p></div></div>';

    if ((CECHSelector === "CECH-20" || CECHSelector === "CECH-21" || CECHSelector === "CECH-25") && (LETTERSelector === "A" || LETTERSelector === "B" || LETTERSelector === "C" || LETTERSelector === "D")) {
        if (numberInputPS3.length < 2) {
             alert("Numéro de modèle invalide.");
        return;
        }
        else {
            resultat.innerHTML = compatible;
        }

    } else if ((CECHSelector === "CECH-30" || CECHSelector === "CECH-40" || CECHSelector === "CECH-42" || CECHSelector === "CECH-43") && (LETTERSelector === "A" || LETTERSelector === "B" || LETTERSelector === "C" || LETTERSelector === "D")) {
        if (numberInputPS3.length < 2) {
             alert("Numéro de modèle invalide.");
        return;
        }
        else {
            resultat.innerHTML = incompatible;
        }

    } else if (["CECHA", "CECHB", "CECHC", "CECHE", "CECHF", "CECHG", "CECHH", "CECHJ", "CECHK", "CECHL", "CECHM", "CECHP", "CECHQ"].includes(CECHSelector)) {
        if (numberInputPS3.length < 7) {
             alert("Numéro de modèle invalide.");
        return;
        }
        else {
            resultat.innerHTML = compatible;
        }
    }
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numberInputPS3 = document.querySelector('input[name="numberInputPS3"]').value;
    const CECHSelector = document.querySelector('select[name="CECHSelector"]').value;
    const LETTERSelector = document.querySelector('select[name="LETTERSelector"]').value;
    var resultat = document.getElementById("resultat");

    function compatible() {
        resultat.innerHTML = '';
        var container = document.createElement('div');
        container.className = 'compatible-container';
        var divCompatible = document.createElement('div');
        divCompatible.className = 'compatible';
        divCompatible.innerHTML = '&nbsp;<strong>Compatible CFW</strong>';
        container.appendChild(divCompatible);
        var infos = document.createElement('div');
        infos.className = 'infos';
        infos.innerHTML = '<p>Votre console est compatible avec un CFW permanent.</p>';
        container.appendChild(infos);
        resultat.appendChild(container);
    }

    function incompatible() {
        resultat.innerHTML = '';
        var container = document.createElement('div');
        container.className = 'incompatible-container';
        var divIncompatible = document.createElement('div');
        divIncompatible.className = 'incompatible';
        divIncompatible.innerHTML = '&nbsp;<strong>Incompatible CFW</strong>';
        container.appendChild(divIncompatible);
        var infos = document.createElement('div');
        infos.className = 'infos';
        infos.innerHTML = '<p>Votre console est incompatible avec un CFW permanent. Préféreez l’installation du HEN (Hybrid Firmware)</p>';
        container.appendChild(infos);
        resultat.appendChild(container);
    }


    if ((CECHSelector === "CECH-20" || CECHSelector === "CECH-21" || CECHSelector === "CECH-25") && (LETTERSelector === "A" || LETTERSelector === "B" || LETTERSelector === "C" || LETTERSelector === "D")) {
        document.getElementsByClassName("inputPS3").placeholder = "01";
        if (numberInputPS3.length != 2) {
             alert("Numéro de modèle invalide.");
        return;
        }
        else {
            compatible();
        }

    } else if ((CECHSelector === "CECH-30" || CECHSelector === "CECH-40" || CECHSelector === "CECH-42" || CECHSelector === "CECH-43") && (LETTERSelector === "A" || LETTERSelector === "B" || LETTERSelector === "C" || LETTERSelector === "D")) {
        document.getElementsByClassName("inputPS3").placeholder = "01";
        if (numberInputPS3.length != 2) {
             alert("Numéro de modèle invalide.");
        return;
        }
        else {
            incompatible();
        }

    } else if (["CECHA", "CECHB", "CECHC", "CECHE", "CECHF", "CECHG", "CECHH", "CECHJ", "CECHK", "CECHL", "CECHM", "CECHP", "CECHQ"].includes(CECHSelector)) {
        if (numberInputPS3.length != 7) {
             alert("Numéro de modèle invalide.");
        return;
        }
        else {
            compatible();
        }
    }


});    
document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('resultat').innerHTML = "Lumia Multi-Checker v0.3";
});

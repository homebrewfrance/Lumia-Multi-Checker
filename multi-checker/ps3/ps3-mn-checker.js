document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const numberInputPS3 = document.querySelector('input[name="numberInputPS3"]');
    const CECHSelector = document.querySelector('select[name="CECHSelector"]');
    const LETTERSelector = document.querySelector('select[name="LETTERSelector"]');
    const resultat = document.getElementById("resultat");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Récupérer les valeurs à l'intérieur de l'événement submit
        const numberValue = numberInputPS3.value;
        const cechValue = CECHSelector.value;
        const letterValue = LETTERSelector.value;

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
            infos.innerHTML = '<p>Votre console est incompatible avec un CFW permanent. Préférez l’installation du HEN (Hybrid Firmware)</p>';
            container.appendChild(infos);
            resultat.appendChild(container);
        }

        if ((cechValue === "CECH-20" || cechValue === "CECH-21" || cechValue === "CECH-25") && 
            (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
            numberInputPS3.placeholder = "01";
            if (numberValue.length != 2) {
                alert("Numéro de modèle invalide.");
                return;
            } else {
                compatible();
            }

        } else if ((cechValue === "CECH-30" || cechValue === "CECH-40" || cechValue === "CECH-42" || cechValue === "CECH-43") && 
                   (letterValue === "A" || letterValue === "B" || letterValue === "C" || letterValue === "D")) {
            numberInputPS3.placeholder = "01";
            if (numberValue.length != 2) {
                alert("Numéro de modèle invalide.");
                return;
            } else {
                incompatible();
            }

        } else if (["CECHA", "CECHB", "CECHC", "CECHE", "CECHF", "CECHG", "CECHH", "CECHJ", "CECHK", "CECHL", "CECHM", "CECHP", "CECHQ"].includes(cechValue)) {
            if (numberValue.length != 7) {
                alert("Numéro de modèle invalide.");
                return;
            } else {
                compatible();
            }
        }
    });

    resultat.innerHTML = "Lumia Multi-Checker v0.3";
    if (["CECHA", "CECHB", "CECHC", "CECHE", "CECHF", "CECHG", "CECHH", "CECHJ", "CECHK", "CECHL", "CECHM", "CECHP", "CECHQ"].includes(CECHSelector.value)) {
        numberInputPS3.placeholder = '0000001';
    } else {
        numberInputPS3.placeholder = '01';
    }
});

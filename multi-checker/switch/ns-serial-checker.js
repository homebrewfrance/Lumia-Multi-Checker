document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const numberInput = document.querySelector('input[name="numberInput"]').value;
        const xawSelector = document.querySelector('select[name="xawSelector"]').value;
        const resultat = document.getElementById("resultat");
        const pageName = document.querySelector('body').getAttribute('page_name');
        resultat.innerHTML = 'Lumia Multi-Checker v0.3";

        function compatible() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'compatible-container';
            var divCompatible = document.createElement('div');
            divCompatible.className = 'compatible';
            divCompatible.innerHTML = '&nbsp;<strong>Console non patchée</strong>';
            container.appendChild(divCompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            if (pageName === 'docs') { 
                infos.innerHTML = '<p>Votre console est compatible avec la faille RCM.</br>Vous pouvez continuer à <a href="https://docs.homebrew-france.fr/switch/#simuler-jig">l’étape suivante</a>.</p>';
            }
            else {
                infos.innerHTML = '<p>Votre console est compatible avec la faille RCM.</p>';
            }
            container.appendChild(infos);
            resultat.appendChild(container);
        }

        function maybeCompatible() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'maybe-compatible-container';
            var divMaybeCompatible = document.createElement('div');
            divMaybeCompatible.className = 'maybe-compatible';
            divMaybeCompatible.innerHTML = '&nbsp;<strong>Console potentiellement patchée</strong>';
            container.appendChild(divMaybeCompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            infos.innerHTML = '<p>Votre console est supposée compatible avec la faille RCM.</br>Votre console nécessite l’installation d’une puce.</br><a href="https://homebrew-france.fr/boutique">Plus d’infos</a></p>';
            container.appendChild(infos);
            resultat.appendChild(container);
        }

        function incompatible() {
            resultat.innerHTML = '';
            var container = document.createElement('div');
            container.className = 'incompatible-container';
            var divIncompatible = document.createElement('div');
            divIncompatible.className = 'incompatible';
            divIncompatible.innerHTML = '&nbsp;<strong>Console patchée</strong>';
            container.appendChild(divIncompatible);
            var infos = document.createElement('div');
            infos.className = 'infos';
            infos.innerHTML = '<p>Votre console est incompatible avec la faille RCM.</br>Votre console nécessite l’installation d’une puce.</br><a href="https://homebrew-france.fr/boutique">Plus d’infos</a></p>';
            container.appendChild(infos);
            resultat.appendChild(container);
        }

        if (xawSelector === "XAW") {
            if (numberInput >= 10000000000 && numberInput <= 10074000000) {
                compatible();
            } else if (numberInput > 10074000000 && numberInput <= 10120000000) {
                maybeCompatible();
            } else if (numberInput > 10120000000 && numberInput <= 40000000000) {
                incompatible();
            } else if (numberInput >= 40000000000 && numberInput <= 40011000000) {
                compatible();
            } else if (numberInput > 40011000000 && numberInput <= 40012000000) {
                maybeCompatible();
            } else if (numberInput > 40012000000 && numberInput <= 70000000000) {
                incompatible();
            } else if (numberInput >= 70000000000 && numberInput <= 70017800000) {
                compatible();
            } else if (numberInput > 70017800000 && numberInput <= 70030000000) {
                maybeCompatible();
            } else if (numberInput > 70030000000 && numberInput <= 99999999999) {
                incompatible();
            } else {
                alert("Numéro de série invalide");
            }
        } else if (xawSelector === "XAJ") {
            if (numberInput >= 10000000000 && numberInput <= 10020000000) {
                compatible();
            } else if (numberInput > 10020000000 && numberInput <= 10030000000) {
                maybeCompatible();
            } else if (numberInput > 10030000000 && numberInput <= 40000000000) {
                incompatible();
            } else if (numberInput >= 40000000000 && numberInput <= 40046000000) {
                compatible();
            } else if (numberInput > 40046000000 && numberInput <= 40060000000) {
                maybeCompatible();
            } else if (numberInput > 40060000000 && numberInput <= 70000000000) {
                incompatible();
            } else if (numberInput >= 70000000000 && numberInput <= 70040000000) {
                compatible();
            } else if (numberInput > 70040000000 && numberInput <= 70050000000) {
                maybeCompatible();
            } else if (numberInput > 70050000000 && numberInput <= 99999999999) {
                incompatible();
            } else {
                alert("Numéro de série invalide");
            }
        } else if (["XKJ", "XJW", "XKW", "XWW"].includes(xawSelector)) {
            if (numberInput >= 10000000000) {
                incompatible();
            }
        } else {
            alert("Numéro de série invalide");
        }
    });
});

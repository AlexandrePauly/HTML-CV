// Initialisation de variables au chargement de la page
let scrollDefault = 0; // Valeur du scroll initialisée à 0
let positionPercent = 0; // Valeur de la position de #content-skills initialisé à 0
let boolPercent = false; // Booléen initialisé à false (prend true lorsque l'animation s'est effectuée 1 fois) -- Animation pour les barres de pourcentages des compétences

// Fonction pour détecter le chargement de la page
document.addEventListener("DOMContentLoaded", function () {  
    // Affectation de la position des éléments une fois la page chargée
    positionPercent = document.getElementById("content-skills").getBoundingClientRect().y;
});

// Fonction pour détecter les scroll sur la page
addEventListener("scroll", () => {
    // Initialisation de variables
    const scrollActual = window.scrollY; // Valeur actuelle du scroll

    // Si l'utilisateur arrive à l'élément à animer, on effectue l'animation si elle n'a jamais été effectuée
    if(positionPercent <= scrollActual && !boolPercent){
      boolPercent = true;
      
      // Fonction pour lancer l'animation
      animateSkills();
    }

    scrollDefault = scrollActual; // Valeur modifiée pour détecter par la suite si l'utilisateur est descendu ou monté sur la page
});

function animateSkills() {
  // Tableau des pourcentages respectifs
  const tabPercent = [70, 60, 94, 95, 90, 75, 80, 85, 75, 55, 87, 80];

  // Itération de chaque barre de pourcentage
  for(let i = 0 ; i < tabPercent.length ; i++){
    const skillBar = document.getElementsByClassName("percent")[i]; // Élément html de la barre de pourcentage
    let currentPercent = 0;

    // Incrémentation de la barre pourcentage par pourcentage
    function updateBar() {
        if (currentPercent < tabPercent[i]) {
            currentPercent++;
            skillBar.style.width = currentPercent + "%";
            requestAnimationFrame(updateBar);
        }
    }

    // Démarrez l'animation
    updateBar();
  }
}

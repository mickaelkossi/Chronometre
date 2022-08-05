// On recupere les elements avec le Id
let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

// On va creer trois variables qui vont contenir le temps qui defile
let heures = 0;
let minutes = 0;
let secondes = 0;

let timeout;

// On crée une variable pour stopper le chronometre
let estArrete = true;

// On crée une fonction pour demarrer le chronometre
const demarrer = () => {
    if(estArrete){
        estArrete = false;
        // On declare une fonction qui va lancer le temps
        defilerTemps();
    }
};

// On crée une fonction pour arreter le chronometre
const arreter = () => {
    // On met un point d'exclamation pour dire "si le est Arrete est faux"
    if (!estArrete){
        estArrete = true;
        clearTimeout(timeout)
    }
}

const defilerTemps = () => {
    // On verifie si on arreté donc si elle est arreté, la fonction ne doit rien faire
    // Si estarrete est vrai, on return, c'est a dire qu'on arrete l'execution de la fonction
    if(estArrete) return;
    // Dans l'affichage, on veut avoir deux chiffres, pour cela, on va convertir les chiffres en chaine de caracteres
    // parseInt sert a convertir une chaine de caractere en Int(chiffres)
    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    // On peut incrémenter les secondes car a chaque fois qu'on appele la fonction defilerTemps, on veut augmenterla valeur d'une seconde
    secondes++;

    if(secondes == 60){
        minutes++;
        secondes = 0;
    }

    if(minutes == 60){
        heures++;
        minutes = 0;
    }

    // Affichage
    // On veut afficher deux chiffres
    if(secondes < 10){
        // Si le chiffre est inferieur a 10, on rajoute un 0
        // On rajoute manuelement un 0 devant
        // On va convertir le chiffre en chaine de caracteres
        secondes = "0" + secondes; 
    }

    if(minutes < 10){
        // Si le chiffre est inferieur a 10, on rajoute un 0
        // On rajoute manuelement un 0 devant
        // On va convertir le chiffre en chaine de caracteres
        minutes = "0" + minutes; 
    }

    if(heures < 10){
        // Si le chiffre est inferieur a 10, on rajoute un 0
        // On rajoute manuelement un 0 devant
        // On va convertir le chiffre en chaine de caracteres
        heures = "0" + heures; 
    }

    // On recupere les valeurs des secondes, minutes et heures afin de les mettre dans la div Chrono
    // On crée une chaine de caractere dynamique
    // On utilise des backtip (``) afin d'intégrer des variables a l'intérieur
    chrono.textContent = `${heures}:${minutes}:${secondes}`;

    // On veut que la fonction defilerTemps se declanche toute les secondes
    // La valeur de 1000 est en millisecondes
    timeout = setTimeout(defilerTemps, 1000);
};

// On va remettre le contenu du texte
// On remet toute les valeurs des variables qu'on a utilisé a leur valeur d'origine
const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout);
};

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);
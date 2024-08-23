
class Voiture {
    constructor(marque, modele, speed) {
        this.marque = marque;
        this.modele = modele;
        this.speed = speed;
    }

    speedUp() {
        this.speed += 10;
    }

    turn() {
        this.speed -= 5;
    }

    getSpeed() {
        return this.speed;
    }
}


let voiture1 = new Voiture("Bmw", "Serie 1", 80);
let voiture2 = new Voiture("Mercedes", "GLB", 100);


console.log("Course de Voiture");

voiture1.speedUp();
console.log("La voiture " + voiture1.marque + " " + voiture1.modele + " avance désormais à " + voiture1.getSpeed() + " km/h");
voiture1.speedUp();
console.log("La voiture " + voiture1.marque + " " + voiture1.modele + " avance désormais à " + voiture1.getSpeed() + " km/h");
voiture1.speedUp();
console.log("La voiture " + voiture1.marque + " " + voiture1.modele + " avance désormais à " + voiture1.getSpeed() + " km/h");


voiture2.speedUp();
console.log("La voiture " + voiture2.marque + " " + voiture2.modele + " avance désormais à " + voiture2.getSpeed() + " km/h");
voiture2.speedUp();
console.log("La voiture " + voiture2.marque + " " + voiture2.modele + " avance désormais à " + voiture2.getSpeed() + " km/h");
voiture2.turn();
console.log("La voiture " + voiture2.marque + " " + voiture2.modele + " avance désormais à " + voiture2.getSpeed() + " km/h");
voiture2.turn();
console.log("La voiture " + voiture2.marque + " " + voiture2.modele + " avance désormais à " + voiture2.getSpeed() + " km/h");


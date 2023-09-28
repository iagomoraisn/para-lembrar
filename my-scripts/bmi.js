const readline = require('readline-sync');

const weightInKg = 80;
const heightInCm = 178;

function handleBMI(weight, height) {
    console.log(`Weight: ${weight}, Height: ${height}`);
    const heightInMeters = height / 100;
    const heightSquared = heightInMeters ** 2;

    const bmi = weight / heightSquared;

    return bmi;
}

function main() {
    const weight = readline.questionInt('What\'s your weight? (kg) ');
    const height = readline.questionInt('What\'s your height? (cm) ');
    
    const bmi = handleBMI(weightInKg, heightInCm);
    console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();

// calculando indice de massa corporal;

let krepsininkai = [{
    krepsininkas: 23,
    ugis: 211,
    dvitaskiai: 15,
    tritaskiai: 2
}, {
    krepsininkas: 9,
    ugis: 195,
    dvitaskiai: 20,
    tritaskiai: 5
}, {
    krepsininkas: 11,
    ugis: 199,
    dvitaskiai: 98,
    tritaskiai: 6
}, {
    krepsininkas: 57,
    ugis: 215,
    dvitaskiai: 14,
    tritaskiai: 1
}, {
    krepsininkas: 69,
    ugis: 191,
    dvitaskiai: 48,
    tritaskiai: 2
}];



// Raskite vidutinį krepšininkų ūgį? ATS.: 202.2
let averageHeight = 0;
const heights = ugiai.forEach(i => {
    averageHeight += i;
});
const result = averageHeight / ugiai.length;

// Raskite kiek krepšininkų yra didesnių už vidutinį krepšininkų ūgį? ATS.: 2
const biggerThanAverage = ugiai.filter(val => val > result).length;

// Raskite aukščiausio krepšininko dvitaškių skaičių? ATS.: 15
let tallest = krepsininkai[0].ugis;
for (let i = 0; i < krepsininkai.length; i++) {
    if (krepsininkai[i].ugis > tallest) {
        tallest = krepsininkai[i].ugis;
    }
}
let indexOfTallest = krepsininkai.findIndex(i => i.ugis === tallest);
let tallestCount = krepsininkai[indexOfTallest].dvitaskiai;


// let tallest = Math.max(...ugiai);
// const tallestCount = dvitaskiai[ugiai.indexOf(tallest)] ??????????????;

// Raskite žemiausio krepšininko tritaškių skaičių ir marškinėlių nr.? ATS.: 2 ir 69
let smallest = krepsininkai[0]; 
for (let i = 1; i < krepsininkai.length; i++) {
     if (smallest.ugis > krepsininkai[i].ugis) {
         smallest = krepsininkai[i]; } } 
         let smallestCount = smallest.tritaskiai; 
         let smallestNum = smallest.krepsininkas; 
         console.log(smallestCount, smallestNum);






// let smallest = Math.min(...ugiai);
// const smallestCount = tritaskiai[ugiai.indexOf(smallest)];
// const smallestNum = krepsininkai[ugiai.indexOf(smallest)];
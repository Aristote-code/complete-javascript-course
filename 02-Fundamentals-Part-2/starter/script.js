'use strict';

/* // functions
// -> function declarations
function CalcAge (birth) {
    return 2037 - birth;
}

// -> function expressions
const CalcAge2 = function (birth) {
    return 2037 - birth;
}

// -> arrow functions
const CalcAge3 = birth => 2037 - birth;

const retirement = birth => {
    const age = birth - 2024;
    const retire = 85 - age;
    return retire; 
} */

// coding challenge 1

/* const Average = function (round1,round2,round3) {
    const Avg = (round1 + round2 + round3)/3;
    console.log(Avg);
}

const AvgDolhins = Average(44,23,71);
const AvgKoalas = Average(65,54,49);

const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= (avgKoalas * 2)) {
        console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    }

    if (avgKoalas >= (avgDolhins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log(`No one wins`);
    }
}

checkWinner(AvgDolhins, AvgKoalas); */

// const calcTip = function (bill) {
//     if (50 <= bill <= 300){
//         const Tip = bill * (15/100);
//         return Tip;
//     }
//     else{
//         const Tip = bill * (20/100);
//         return Tip;
//     }
// }

// console.log(calcTip(100))

// const bills = [125, 555, 44];

// console.log(calcTip(bills[0]))
// console.log(calcTip(bills[1]))
// console.log(calcTip(bills[2]))

/* const jonas = {
    Firstname: 'Jonas',
    LastName: 'Schmed',
    age: 2024 - 2002,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(`${jonas.Firstname} has ${jonas.friends.length} friends, and his best friend is 
called ${jonas.friends[0]}`) */

/* const jonas = {
    Firstname: 'Jonas',
    LastName: 'Schmed',
    birthYear: 2002,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: false,
    checkLic: function() {
        if (this.hasDriversLicense) {
            return 'a';
        } else{
            return 'no';
        }
    },

    calcAge: function() {
        console.log(`${this.Firstname} is a ${2024-(this.birthYear)}-year old ${this.job}, and 
        he has ${this.checkLic()} driver's license`);
    }
};

jonas.calcAge(); */

// const mark = {
//     FirstName: 'Mark',
//     LastName: 'Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function(){
//         return (this.mass/(this.height**2));
//     }
// };

// const john = {
//     FirstName: 'John',
//     LastName: 'Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function(){
//         return (this.mass/(this.height**2));
//     }
// }

/* const Compare = {
     mark : {
        FirstName: 'Mark',
        LastName: 'Miller',
        mass: 78,
        height: 1.69,
    
        calcBMI: function(){
            return (this.mass/(this.height**2));
        }
    },
    
     john : {
        FirstName: 'John',
        LastName: 'Smith',
        mass: 92,
        height: 1.95,
    
        calcBMI: function(){
            return (this.mass/(this.height**2));
        }
    },

    compare : function () {
        if(this.mark.calcBMI() > this.john.calcBMI()){
            console.log(`${this.mark.FirstName}'s BMI (${this.mark.calcBMI()}) is higher than ${this.john.FirstName}'s (${this.john.calcBMI()})!`);
        }
        else{
            console.log(`${this.john.FirstName}'s BMI (${this.john.calcBMI()}) is higher than ${this.mark.FirstName}'s (${this.mark.calcBMI()})!`);
        }
    }

}

Compare.compare(); */

/* const bil = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function (bills) {
    let tips = [];
    let totals = [];

    for (let i = 0; i < bills.length; i++){
        if (50 <= bills[i] <= 300){
            let Tip = bills[i] * (15/100);
            tips.push(Tip);
            let total = Tip + bills[i];
            totals.push(total);
        }
        else{
            let Tip = bills[i] * (20/100);
            tips.push(Tip);
            let total = Tip + bills[i];
            totals.push(total);
        }
        
    }
    console.log(tips, totals);
    return {tips, totals};
}

calcTip(bil);
 */

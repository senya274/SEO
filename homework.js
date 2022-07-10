
// Задание 1 //

let myTownName = 'Vasilkov';
let myTownCountry = 'Ukraine';
let myTownPeopleNumber = '40000';
let Stadium = 'true';
console.log(Stadium)


// задание 2 //

let a = 40;
let b = 70;
let S = a * b;          // Площадь 2800//
console.log(S)

// задание 3 //

let speedOfFirst = 95;
let speedOfSecond = 114;
let time = 2;
// скорость сближения равна сумме скоростей обоих автомобилей //
let convergenceSpeed = speedOfSecond + speedOfFirst;
// умножаем скорость сближения на 2 часа //
let result = convergenceSpeed * time;

console.log(result);  // 418км //

// задание 4 //

 const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20){
    console.log("randomNumber меньше 20");
}else if (randomNumber > 50){
    console.log("randomNumber больше 50");
}else {
    console.log("randomNumber больше 20, и меньше 50");
}

// задание 5 //
switch(randomNumber){
    case 'randomNumber < 20' :
        console.log("randomNumber меньше 20");
       break
        case 'randomNumber > 50' :
            console.log("randomNumber больше 50");
            break
            default :
            console.log("randomNumber больше 20, и меньше 50");
}
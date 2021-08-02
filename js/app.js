'use strict';
let fullName = prompt('Enter your name please');
alert('Hello ' + fullName + ' welcome to my website');
console.log(fullName);

let myName = prompt('Is my name Omar?').toLowerCase();

if (myName === 'yes') {
    // myName = myName.toLowerCase();

    // console.log('Correct, good job');
    alert('Correct, good job');
    console.log('Correct');

}
else if(myName === 'no'){
    // console.log('Ooops, it is not correct');
    alert('Ooops, it is not correct');
}
else{
    alert('enter avalid value');
}

let myAge = prompt('Am i 20 years old?').toLowerCase();
if(myAge === 'yes'){
    alert('incorrect ');
}
else if(myAge === 'no'){
    // myAge = myAge.toLowerCase();

    // console.log('Correct, good job');
    alert('Correct, good job');
    console.log('Correct');

}
else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}

let myEducation = prompt('Do you think i am still studying in college?').toLowerCase();

if(myEducation === 'yes'){
    // myEducation = myEducation.toLowerCase();
    
    alert('Correct, good job');
    console.log('Correct, good job');
    
}
else if(myEducation === 'no'){
    // console.log('Ooops, it is not correct');
    alert('Incorrect');
}
else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}

let myFavFood = prompt('Is it my favorite Mansaf?').toLowerCase();

if(myFavFood === 'yes'){
    // myFavFood = myFavFood.toLowerCase();
    
    alert('Correct, good job');
    console.log('Correct, good job');
}
else if(myFavFood === 'no'){
    // console.log('Ooops, it is not correct');
    alert('Incorrect');
}
else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}

let myHobbie = prompt('Do you think that my favorite hobbie is Volleyball?').toLowerCase();
if(myHobbie === 'yes'){
    alert('Incorrect');
}
else if(myHobbie === 'no'){
    // myHobbie = myHobbie.toLowerCase();
    
    alert('Correct, good job');
    console.log('Correct, good job');
}
else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}






'use strict';

let fullName = prompt('Enter your name please');
alert('Hello ' + fullName + ' welcome to my website');
console.log(fullName);
let score = 0;

function myName(){
let myName = prompt('Is my name Omar?').toLowerCase();

if (myName === 'yes') {
    // myName = myName.toLowerCase();

    // console.log('Correct, good job');
    alert('Correct, good job');
    console.log('Correct');
    score+=1;
    
    

}





else if(myName === 'no'){
    // console.log('Ooops, it is not correct');
    alert('Ooops, it is not correct');
}
else{
    alert('enter avalid value');
}
}
myName();

function myAge(){
let myAge = prompt('Am i 20 years old?').toLowerCase();
if(myAge === 'yes'){
    alert('incorrect ');
}
else if(myAge === 'no'){
    // myAge = myAge.toLowerCase();

    // console.log('Correct, good job');
    alert('Correct, good job');
    console.log('Correct');
    score+=1;
    

}


else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}
}
myAge();

function myEducation(){

let myEducation = prompt('Do you think i am still studying in college?').toLowerCase();

if(myEducation === 'yes'){
    // myEducation = myEducation.toLowerCase();

    alert('Correct, good job');
    console.log('Correct, good job');
    score+=1;
    

}
else if(myEducation === 'no'){
    // console.log('Ooops, it is not correct');
    alert('Incorrect');
}
else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}
}
myEducation();

function myFavFood(){

let myFavFood = prompt('Is it my favorite Mansaf?').toLowerCase();

if(myFavFood === 'yes'){
    // myFavFood = myFavFood.toLowerCase();

    alert('Correct, good job');
    console.log('Correct, good job');
    score+=1;
    
}
else if(myFavFood === 'no'){
    // console.log('Ooops, it is not correct');
    alert('Incorrect');
}
else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}
}
myFavFood();

function myHobbie(){

let myHobbie = prompt('Do you think that my favorite hobbie is Volleyball?').toLowerCase();
if(myHobbie === 'yes'){
    alert('Incorrect');
}
else if(myHobbie === 'no'){
    // myHobbie = myHobbie.toLowerCase();

    alert('Correct, good job');
    console.log('Correct, good job');
    score += 1;
    
}
else{
    // console.log('Ooops, it is not correct');
    alert(' Enter a valid value');
}
}
myHobbie();

function guess(){

let guess;
alert('Lest\'s play a guess game together');


for(let i = 0; i < 4 ; i++){


    guess = Number(prompt('What do you think my Favorit number?'));

    if(guess === 4) {
        alert(' Good job, ' + guess + ' is the correct answer');
        score +=1;
        break;

    }

    else if(guess > 4){
        alert('Too high');
    }

    else if (guess < 4){
        alert('Too low');
    }



}
}
guess();
alert('The correct answer is 4 ' );


function myFavMovie(){
let myFavMovie = ['Fast and furious', 'Titanic', 'Avatar', 'Dumb And Dumber', 'The Karate Kid', 'Doom '];

for(let z = 0; z < 6; z++){

    let userAnswer = prompt('What is my favorite movie? ');

    let w;

    for(w = 0; w < myFavMovie.length; w++){
        if(userAnswer === myFavMovie[w]){

            alert('Nice, it\'s correct');
            console.log('Correct' + userAnswer);
            score += 1;
            break;
        }
        
    }
    if(userAnswer === myFavMovie){
        break;

    }
    else{
        alert('Your answer not correct');

    }


}
}
myFavMovie();
alert('The correct answers are (Fast and furious, Titanic, Avatar, Dumb And Dumber, The Karate Kid, Doom )');

alert('Your score is ' + score + 'out of 7');




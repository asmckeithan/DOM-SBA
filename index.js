console.log(`Game Styling and code `)
//adding 
const header = document.getElementsByTagName('h1')
console.log(header)




console.log(`Form Styles and Validation` )
// first we find the form 
const form = document.getElementById('form');
console.log(form)
//next syle the form 
form.style = ("box-shadow: 4px 4px 4px #0c3170");


console.log("Creating a Div Element with style ")
const div = document.createElement('div');
form.prepend (div);
div.style.display = 'inline-block';
div.style.width = '200px';
div.textContent = "Sign-up \n to continue Playing" ;
div.style.fontSize = '20px';
div.style.padding = '20px'
div.style.marginTop = '4px'
console.log(div);

//Start Game 
const startGameBtn = document.getElementById('button')
startGameBtn.addEventListener('click', function (event){
    alert(" Let the Games Begin! ")
    event.preventDefault
})

//Now We work on the game card 
const submitBtn = document.getElementById('submit-btn')
submitBtn.addEventListener('click', function(event){
alert ('Awesome Job')
    //if the answer is incorrect we need to alert the user of incorrect answer 
    if (event !== result ){
        alert ("Incorrect Please Try Again ")
    }



})
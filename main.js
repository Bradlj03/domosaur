//Change the span with the class mess-with-me to have a font size of 40px

const changeSpan = document.querySelector('span.mess-with-me');
changeSpan.style.fontSize = '40px'
//Change the paragraph with the class mess-with-me to have a background color of green.
 const paragraphMessW = document.querySelector('p.mess-with-me')
 paragraphMessW.style.backgroundColor = 'green';

 //Hide the second dinosaur's image so that it's no longer visible, and so that the
// area below it moves up to take the space. If you're not sure of how to do this, 
// look up the CSS rule for that!

//The trick to hiding any element on your web page is to insert either a " display: none; " or " visibility: hidden;
// " rule for that element. The " display: none; " rule not only hides the element, but also removes it from the document flow.

const hideDino = document.querySelector('#hide-me');
hideDino.style.display = "none";

//Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
// key word was width...
const changeFirstDino = document.querySelector('#triceratops')
changeFirstDino.width = '324px'

////////////////////////////////////////////////////////////////
                     //event  listeners//
///////////////////////////////////////////////////////////////

//Add an event listener to the span with the class mess-with-me
// so that when it is clicked, the font color changes to orange.
let spanBackgroud = document.querySelector('span.mess-with-me');

spanBackgroud.addEventListener('click', function(){
    spanBackgroud.style.backgroundColor = 'orange'
});




//Add an event listener to the first dinosaur so that when they are 
//clicked, they receive a red border.
 
let redDino = document.querySelector('#triceratops')
redDino.addEventListener('click', function(){
    redDino.style.border = '1px solid red'
})

//Add an event listener to the feathered dinosaur, so that when they 
//are clicked, they become 50% transparent.

let featherDino = document.querySelector('#feathers')
featherDino.addEventListener('click', function(){
    featherDino.style.opacity = '0.5'
})

//Add an event listener to the "Switch Background Color" button so that 
//when it is clicked, we switch the background color of the row of dinosaurs
// to a color of your choice.

let switchColorButton = document.querySelector("#toggle");
let rowOfDinos = document.querySelector("#row");
rowOfDinos.style.backgroundColor = "white";


function changeBackgroundToBlack() {
    if (rowOfDinos.style.backgroundColor === "white"){
        rowOfDinos.style.backgroundColor = "black";
    }
    else {
        rowOfDinos.style.backgroundColor = "white";
    }
}
switchColorButton.addEventListener("click", changeBackgroundToBlack);





//Add an event listener to the dinosaur with the id biggify that, when HOVERED,
//grows the image to 200 pixels wide. Note that this is a different event, and
//you'll likely need to do some research on what different string you'll need to pass. 
//It's not gonna be click!

let dinoGrow = document.querySelector("#biggify");
dinoGrow.addEventListener("mouseover", function () {
    dinoGrow.style.width = "200px";
})
dinoGrow.addEventListener("mouseleave", function () {
    dinoGrow.style.width = "162px";
})

console.log("Hellosen Matrosen");




/* Ingredient Selection */

const mySelectables = document.querySelectorAll('.Ingredient');

mySelectables.forEach((e) => {
    
    e.addEventListener("click", result)

    function result() {
        e.classList.toggle('active');
        
    }


})





/* Selection > 0 toggles Recipes visible - doesn't work yet, not finished */

const mySelection = document.querySelectorAll('.active');

console.log(mySelection);




/* Ingredient Remove Selection */

const myRemoveButtons = document.querySelectorAll('.IngredientRemove');

myRemoveButtons.forEach((e) => {
    
    e.addEventListener("click", result)

    function result() {
        e.classList.toggle('active');
        
    }


})
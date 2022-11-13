let widthButton = document.querySelector('.width-btn') ;

let userInput = document.querySelector('.width-input') ; 


let box = document.querySelector('.container') ; 

let clearButton = document.querySelector('.clear') ; 

let resetButton = document.querySelector('.reset') ; 




widthButton.addEventListener('click', () => {
    console.log(`Adjusting width... width now ${userInput.value} px`) ;

    box.style.width = `${userInput.value}px`; 
})

resetButton.addEventListener('click', () => {
    // console.log(`Adjusting width... width now ${userInput.value} px`) ;

    box.style.width = `fit-content`; 
})

clearButton.addEventListener('click', () => {
    userInput.value = ""; 
})

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        widthButton.click() ; 
    }
})

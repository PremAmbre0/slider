
// function
function offsetCalc(value){

    const slider_width = parseInt(getComputedStyle(range).getPropertyValue('width'));
    const valueBox_width = parseInt(getComputedStyle(valueBox).getPropertyValue('width'));
    const offset = value*(slider_width)/100 - value*(valueBox_width/100);
    
    return offset;
}

// global variables
const range = document.querySelector('.range')
const valueBox = document.querySelector('.val')

//calls
range.oninput = function(e){
    const value = Number(e.target.value); ;
    valueBox.value = `${value}`;

    left = offsetCalc(value);
    valueBox.style.left = `${left}px`;
}
valueBox.oninput =  function(e){
    const value = Number(e.target.value)
    valueBox.value = `${value}`;
    range.value = value

    left = offsetCalc(value);
    valueBox.style.left = `${left}px`;
}
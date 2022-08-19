
function getPin (){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4){
        return pin;
    }
    else{
        
        return getPin();
    }
}

function generatePin (){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('genetate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumber = document.getElementById('typed-number');
    const previouseTypedNumber = typedNumber.value;
    if (isNaN (number)){
        if(number === 'C'){
            typedNumber.value = '';
        }
        else if(number == '<'){
            const digit = previouseTypedNumber.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            typedNumber.value = remainingDigit;
        }
    }
    else{
        const newTypedNumber = previouseTypedNumber + number;
        typedNumber.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displatPinvalue = document.getElementById('display-pin');
    const currentPin = displatPinvalue.value;

    const typedNumberValue = document.getElementById('typed-number');
    const currentTypedPin = typedNumberValue.value;
    const pinSuccessValue = document.getElementById('pin-success')
    const pinErrorValue = document.getElementById('pin-error')
    if(currentPin == currentTypedPin){
        pinSuccessValue.style.display = 'block';
        pinErrorValue.style.display = 'none';
    }
    else{
        pinSuccessValue.style.display = 'none';
        pinErrorValue.style.display = 'block';
    }

})

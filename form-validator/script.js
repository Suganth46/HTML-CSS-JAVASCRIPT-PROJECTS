const form=document.getElementById('form-content');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password1=document.getElementById('new-password');
const password2=document.getElementById('confirm-password');

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function checkRequired(inputArr){
    let inputRequired=false;
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is required`);
            inputRequired=true;
        }
        else{
            showSuccess(input);
        }
    }
    );
    return inputRequired;
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,
            `${getFieldName(input)} minimum character is ${min}`
        );
    }
    else if(input.value.length > max){
        showError(input,
            `${getFieldName(input)} maximum character is ${max}`
        );
    }
    else{
        showSuccess(input);
    }
}
function checkEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value.trim())){
        showSuccess(email);
    }
    else{
        showError(email,`Email is invalid`);
    }
}
function checkPasswordMatch(password1,password2){
    if(password1.value !== password2.value){
        showError(password2,"password not match");
    }
}
form.addEventListener('submit',function (e) {
    e.preventDefault();

    if(checkRequired([username,email,password1,password2])){
        checkLength(username,3,15);
        checkLength(password1,6,15);
        checkEmail(email);
        checkPasswordMatch(password1,password2);
    }
});
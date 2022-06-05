"use Strict"; //javascrip moderno On

//Menu Hamburguesa
const menuHamburguesa = document.getElementById('menu');

menuHamburguesa.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('nav__link--action');
});

//ValidationFormulario

const form = document.getElementById('formRegistration');
const formInpust = document.querySelectorAll('input');

const datos = (temp, nameFielset) =>{
    if(temp == true){
        document.getElementById(`${nameFielset}`).classList.remove('form__fielset-incorrecto');
        document.querySelector(`#${nameFielset} .form__paragraph-valitacion`).classList.remove('form__paragraph-valitacion--action');
        document.getElementById(`${nameFielset}`).classList.add('form__fielset-correcto');
        document.querySelector(`#${nameFielset} box-icon`).setAttribute('name','check-circle');
    }else{
        document.getElementById(`${nameFielset}`).classList.remove('form__fielset-correcto');
        document.getElementById(`${nameFielset}`).classList.add('form__fielset-incorrecto');
        document.querySelector(`#${nameFielset} box-icon`).setAttribute('name','x-circle');
        document.querySelector(`#${nameFielset} .form__paragraph-valitacion`).classList.add('form__paragraph-valitacion--action');
    }
}

const  validarFormulario = (e) =>{
    let nameFielset = '';
    switch (e.target.name){
        case "name":
            nameFielset= 'fielsetName';
            if (e.target.value.length > 3){
                const temp = true;
                datos(temp, nameFielset);
            }else{
                const temp = false;
                datos(temp, nameFielset);
            }
        break;
        case "surname":
            nameFielset= 'fielsetSurname';
            if (e.target.value.length > 3){
                const temp = true;
                datos(temp, nameFielset);
            }else{
                const temp = false;
                datos(temp, nameFielset);
            }
        break;
        case "useremail":
            const emailValidation =  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            nameFielset= 'fielsetEmail';
            if (emailValidation.test(e.target.value)){
                const temp = true;
                datos(temp, nameFielset);
            }else{
                const temp = false;
                datos(temp, nameFielset);
            }
        break;
        case "age":
                nameFielset= 'fielsetAge';
                let stringNumero = Number(e.target.value);
            if (stringNumero > 0 && stringNumero < 100 && Number.isInteger(stringNumero)){
                const temp = true;
                datos(temp, nameFielset);
            }else{
                const temp = false;
                datos(temp, nameFielset);
            }
        break;
        case "sexo":
                nameFielset= 'fielsetSexo';
        break;
    }
}
formInpust.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
})




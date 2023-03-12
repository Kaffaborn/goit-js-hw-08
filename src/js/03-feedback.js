import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    emailArea: document.querySelector('.feedback-form input[name="email"]'),
    textArea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500))

populateTextArea();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}

function populateTextArea() {
    const savedMsg = localStorage.getItem(STORAGE_KEY);
    const parsedMsg = JSON.parse(savedMsg);

    if (savedMsg) {
        refs.emailArea.value = parsedMsg.email;
        refs.textArea.value = parsedMsg.message;
    }
}
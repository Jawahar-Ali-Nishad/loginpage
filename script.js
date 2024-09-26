const WRAPPER = document.querySelector(".wrapper");
const LOGIN_LINK = document.querySelector(".login-link");
const REGISTER_LINK = document.querySelector(".register-link");
const BTNPOPUP = document.querySelector(".btn-login");
const ICONCLOSE = document.querySelector(".icon-close"); 

REGISTER_LINK.addEventListener('click', () => {
    WRAPPER.classList.add('active');
});

LOGIN_LINK.addEventListener('click', () => {
    WRAPPER.classList.remove('active');
});


BTNPOPUP.addEventListener('click', () => {
    WRAPPER.classList.add('active-popup');
});


ICONCLOSE.addEventListener('click', () => {
    WRAPPER.classList.remove('active-popup');
    WRAPPER.classList.remove('active'); 
});

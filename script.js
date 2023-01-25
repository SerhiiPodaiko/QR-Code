const container = document.querySelector('.container');
const formBtn = document.querySelector('.form-btn');
const formInput = document.querySelector('.form-input');
const codeImg = document.querySelector('.results-img');

const _baseUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data`;

formBtn.addEventListener('click', function() {
    const inputValue = formInput.value;
    if (!inputValue) return;
    formBtn.innerText = 'Loading...'

    codeImg.src = `${_baseUrl}=${inputValue}`
    codeImg.addEventListener('load', function() {
        container.classList.add('active');
        formBtn.innerText = 'Generate QR Code'
    });
});

formInput.addEventListener('keyup', function() {
    if(!formInput.value) {
        container.classList.remove('active');
    }
});

//modal 1
function modal() {
    let overlayEng = document.querySelector('.popup_engineer'),
        headerBtn = document.querySelector('.header_btn'),
        popupPhone = document.querySelector('.phonesPopup');

    headerBtn.addEventListener('click', function () {
        overlayEng.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    overlayEng.addEventListener('click', function (event) {
        if (event.target.parentNode.classList.contains('popup_close') || event.target.classList.contains('popup_engineer')) {
            overlayEng.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    //modal 2
    document.addEventListener('click', function (e) {
        if (e.target.parentNode.classList.contains('popup_close') ||
            e.target.classList.contains('phonesPopup')) {
            e.preventDefault();
            popupPhone.style.display = 'none';
        } else if (e.target.classList.contains('phone_link')) {
            e.preventDefault();
            popupPhone.style.display = 'block';
        }
    });

    // 60 seconds popup
    setTimeout(function () {
        popupPhone.style.display = 'block';
    }, 60000);
}


module.exports = modal;
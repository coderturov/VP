//Calc

function calc() {
    let calcBtns = document.querySelectorAll('.popup_calc_btn'),
        calcClose1 = document.querySelector('.popup_calc_close'),
        calcPopup1 = document.querySelector('.popup_calc'),
        balconySelect = document.querySelector('.balcon_icons'),
        smallBalconyImg = balconySelect.querySelectorAll('img'),
        bigBalcony = document.querySelector('.big_img'),
        bigBalconyImg = bigBalcony.querySelectorAll('img'),
        calcPopup1Height = document.querySelector('#height'),
        calcPopup1Width = document.querySelector('#width'),
        calcPopup1Continue = document.querySelector('.popup_calc_button'),
        calcPopupProfile = document.querySelector('.popup_calc_profile'),
        calcPopupProfileClose = document.querySelector('.popup_calc_profile_close'),
        calcPopupProfileSelect = document.querySelector('select.form-control'),
        calcPopupProfileCheckboxCold = document.querySelectorAll('.checkbox')[0],
        calcPopupProfileCheckboxWarm = document.querySelectorAll('.checkbox')[1],
        calcPopupProfileContinue = document.querySelector('.popup_calc_profile_button'),
        calcPopupEnd = document.querySelector('.popup_calc_end'),
        calcPopupEndClose = document.querySelector('.popup_calc_end_close'),
        calcInfo = {};

    for (let i = 0; i < calcBtns.length; i++) {
        showPopup(calcBtns[i], calcPopup1);
    }

    function showPopup(button, popup) {
        button.addEventListener('click', function () {
            popup.style.display = 'block';
        });
    }
    calcClose1.addEventListener('click', function () {
        calcPopup1.style.display = 'none';
        for (let key in calcInfo) {
            delete calcInfo[key];
        }
    });
    balconySelect.addEventListener('click', function (e) {
        let target = event.target;
        if (target.tagName == 'IMG') {
            e.preventDefault();
            for (let i = 0; i < smallBalconyImg.length; i++) {
                if (target == smallBalconyImg[i]) {
                    for (let j = 0; j < bigBalconyImg.length; j++) {
                        bigBalconyImg[j].style.display = 'none';

                    }

                    bigBalconyImg[i].style.display = 'inline-block';

                    calcInfo.selectedBalcony = i + 1;
                }
            }
        }
    });

    function Plastic() {
        let opp = calcPopupProfileSelect.options[2];
        if (opp.selected) {
            calcPopupProfileCheckboxCold.checked = false;
            calcPopupProfileCheckboxCold.disabled = true;
        } else {
            calcPopupProfileCheckboxCold.disabled = false;
        }
    }

    calcPopupProfileSelect.addEventListener("change", Plastic);
    calcPopup1Height.addEventListener('input', function () {
        calcPopup1Height.value = calcPopup1Height.value.replace(/\D/g, '');
    });
    calcPopup1Width.addEventListener('input', function () {
        calcPopup1Width.value = calcPopup1Width.value.replace(/\D/g, '');
    });

    calcPopup1Continue.addEventListener('click', function (e) {
        if (calcPopup1Height.value == '' || calcPopup1Width.value == '') {
            e.preventDefault();
        } else {
            calcInfo.width = calcPopup1Width.value;
            calcInfo.height = calcPopup1Height.value;
            if (calcInfo.selectedBalcony == undefined) {
                calcInfo.selectedBalcony = 1;
            }
            calcPopup1.style.display = 'none';
            calcPopupProfile.style.display = 'block';
        }
    });
    calcPopupProfileClose.addEventListener('click', function () {
        calcPopupProfile.style.display = 'none';
        for (let key in calcInfo) {
            delete calcInfo[key];
        }
    });
    calcPopupProfileCheckboxCold.addEventListener('click', function (e) {
        if (calcPopupProfileCheckboxWarm.checked) {
            e.preventDefault();
        }
    });
    calcPopupProfileCheckboxWarm.addEventListener('click', function (e) {
        if (calcPopupProfileCheckboxCold.checked) {
            e.preventDefault();
        }
    });

    calcPopupProfileContinue.addEventListener('click', function (e) {
        if (calcPopupProfileCheckboxWarm.checked || calcPopupProfileCheckboxCold.checked) {
            calcInfo.select = calcPopupProfileSelect.options[calcPopupProfileSelect.selectedIndex].value;
            if (calcPopupProfileCheckboxWarm.checked) {
                calcInfo.checkbox = 'Warm';
            } else if (calcPopupProfileCheckboxCold.checked) {
                calcInfo.checkbox = 'Cold';
            }
            calcPopupProfile.style.display = 'none';
            calcPopupEnd.style.display = 'block';
        } else {
            e.preventDefault();
        }
    });
    calcPopupEndClose.addEventListener('click', function () {
        calcPopupEnd.style.display = 'none';
        for (let key in calcInfo) {
            delete calcInfo[key];
        }
    });

    //Form
    let message = {
        loading: '<div class="status-ico-div"><class="status-ico" alt="loading"><span class="status-ico-div-span">Идёт загрузка, подождите...</span></div>',
        success: '<div class="status-ico-div"><class="status-ico" alt="checked"><span class="status-ico-div-span">Заявка успешно оставлена!</span></div>',
        failure: '<div class="status-ico-div"><class="status-ico" alt="fail"><span class="status-ico-div-span">Произошла ошибка!</span></div>'
    };
    let form = document.querySelectorAll('.form'),
        statusMessage = document.createElement('div'),
        phoneInputs = document.querySelectorAll('input[type="tel"]');


    for (let i = 0; i < phoneInputs.length; i++) {
        addMask(phoneInputs[i]);
    }

    function addMask(input) {
        input.addEventListener('input', function () {
            input.value = input.value.replace(/[^0-9+() ]/ig, '');
        });
    }

    statusMessage.classList.add('status');
    statusMessage.classList.add('status-ico-div');

    for (let i = 0; i < form.length; i++) {
        sendForm(form[i]);
    }


    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let inputs = elem.getElementsByTagName('input');
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open("POST", '../server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    if (elem.classList.contains('calcForm')) {
                        obj.height = calcInfo.height;
                        obj.width = calcInfo.width;
                        obj.selectedBalcony = calcInfo.selectedBalcony;
                        obj.checkbox = calcInfo.checkbox;
                        obj.select = calcInfo.select;
                    }
                    let json = JSON.stringify(obj);

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };

                    request.send(json);
                });
            } // End postData


            function clearInput() {
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHtml = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }

}

module.exports = calc;
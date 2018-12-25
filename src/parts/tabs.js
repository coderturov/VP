    //Tabs 1
    function tabs() {
    let glazing = document.querySelector('.glazing'),
        tab = glazing.querySelectorAll('.glazing_block'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.tab-content'),
        tabLink = document.querySelectorAll('.tab-link');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tabLink[i].classList.remove('active');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
            tabLink[b].classList.add('active');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && (target.classList.contains('glazing_block') || target.parentNode.classList.contains('glazing_block'))) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i] || target.parentNode == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Tabs 2

let tabInfo = document.querySelectorAll('.tab_head_info'),
tabHead = document.querySelector('.tab_head'),
tabMaterial = document.querySelectorAll('.tab_material'),
styleSelector = document.querySelectorAll('.style_selector');



function hideTabMaterial(a) {
for (let i = a; i < tabMaterial.length; i++) {
    tabMaterial[i].classList.remove('show');
    tabMaterial[i].classList.add('hide');
    styleSelector[i].classList.remove('after_click');

}
}
hideTabMaterial(1);

function showTabMaterial(b) {
if (tabMaterial[b].classList.contains('hide')) {
    tabMaterial[b].classList.remove('hide');
    tabMaterial[b].classList.add('show');
    styleSelector[b].classList.add('after_click');

}
}

tabHead.addEventListener('click', function (event) {
let target = event.target;
if (target && target.classList.contains('tab_head_info')) {
    for (let i = 0; i < tabInfo.length; i++) {

        if (target == tabInfo[i]) {
            hideTabMaterial(0);
            showTabMaterial(i);
            break;
        }
    }
}
});

}

    module.exports = tabs;
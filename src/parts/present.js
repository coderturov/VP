// present
function present() {
    let img = document.querySelectorAll('.worksImg'),
        overlay = document.querySelector('.img-overlay'),
        link = document.querySelectorAll('.link');

    for (let i = 0; i < img.length; i++) {
        Images(img[i]);
    }

    function Images(elem) {
        elem.addEventListener('click', function (e) {
            e.preventDefault();
            let srcVal = elem.getAttribute('src');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            let newImg = document.createElement('img');
            let num;
            for (let i = 0; i < img.length; i++) {
                num = i + 1;
                if (srcVal.slice(14, 15) == num) {
                    srcVal = link[i].getAttribute('href');
                }
            }

            newImg.setAttribute('src', srcVal);
            newImg.classList.add('img-overlay_img');
            overlay.appendChild(newImg);
            overlay.addEventListener('click', function () {
                overlay.removeChild(newImg);
                overlay.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
    }
}
module.exports = present;
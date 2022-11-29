let images = document.querySelectorAll(".lazyload");
if (images) {
    lazyload(images);
}
document.addEventListener("DOMContentLoaded", function() { 
    let selectors = document.querySelectorAll('.selector')
    selectors.forEach(el => {
        el.addEventListener('click', function () {
            let answer = this.nextElementSibling,
                arrow = el.querySelector('.arrow');
            answer.classList.toggle('active');
            arrow.classList.toggle('up')
        })
    })

  });

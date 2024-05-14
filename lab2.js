let buttons = document.querySelectorAll('.down-test button');
let obj1 = document.querySelector('.test1');
let obj2 = document.querySelector('.test2');
let obj3 = document.querySelector('.test3');
let sli1 = document.querySelector('.slide-active');
let sli2 = document.querySelector('.slide2');
let sli3 = document.querySelector('.slide3');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let dataSlideValue = button.getAttribute('data-slide');
        console.log(dataSlideValue);

        if (dataSlideValue === "1") {
            obj2.classList.remove('test-active');
            obj2.classList.add('test2');
            obj3.classList.remove('test-active');
            obj3.classList.add('test3');

            obj1.classList.remove('test1');
            obj1.classList.add('test-active');

            sli2.classList.remove('active');
            sli3.classList.remove('active');

            sli1.classList.add('slide-active');
            obj1.classList.remove('slide1');
            sli2.classList.add('slide2');
            sli2.classList.remove('slide-active');
            sli3.classList.add('slide3');
            sli3.classList.remove('slide-active');

        } else if (dataSlideValue === "2") {
            obj1.classList.remove('test-active');
            obj1.classList.add('test1');
            obj3.classList.remove('test-active');
            obj3.classList.add('test3');

            obj2.classList.remove('test2');
            obj2.classList.add('test-active');

            sli1.classList.remove('active');
            sli3.classList.remove('active');

            sli2.classList.add('slide-active');
            sli2.classList.remove('slide2');
            sli1.classList.add('slide1');
            sli1.classList.remove('slide-active');
            sli3.classList.add('slide3');
            sli3.classList.remove('slide-active');

        } else if (dataSlideValue === "3") {
            obj1.classList.remove('test-active');
            obj1.classList.add('test1');
            obj2.classList.remove('test-active');
            obj2.classList.add('test2');

            obj3.classList.remove('test3');
            obj3.classList.add('test-active');

            sli1.classList.remove('active');
            sli2.classList.remove('active');

            sli3.classList.add('slide-active');
            sli3.classList.remove('slide3');
            sli1.classList.add('slide1');
            sli1.classList.remove('slide-active');
            sli2.classList.add('slide2');
            sli2.classList.remove('slide-active');
        }
    });
});

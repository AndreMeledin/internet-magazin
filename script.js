$(document).ready(function(){
    $('.new-product__content').slick({
        dots:true,
        slidesToShow:4,
        initialSlide:2,
        variableWidth:true
    });
    // $('.page-card__slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.page-card__slider-nav'
    // });
    //     $('.page-card__slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.page-card__slider-for',
    //     centerMode: true,
    //     focusOnSelect: true
    // });
});



const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll );
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight){
                animItemPoint =window.innerHeight  - window.innerHeight / animStart;
            } 

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else{
                if(!animItem.classList.contains('_anim-no-hide'))
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top:rect.top + scrollTop, left: rect.left + scrollLeft};
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
    
}

document.querySelectorAll(".accordion-item__trigger").forEach((item) =>
    item.addEventListener('click', () =>{
        const parent = item.parentNode;

        parent.classList.toggle("accordion-item__active");
    })
)
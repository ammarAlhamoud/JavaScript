window.addEventListener('load', function(){
    //how many slides
    const slidecount = document.querySelectorAll('#slider-wrapper ul li').length;
    //how wide is each slid
    const slidewidth = document.querySelector('#slider-wrapper').offsetWidth;
    //total slider width
    const totalWidth = slidecount * slidewidth + 'px';
    //DOM Element
    const slider = document.querySelector('#slider-wrapper ul');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#prev');

    let leftPosition = 0;
    let counter = 0;
    slider.style.width = totalWidth;

    next.addEventListener('click', function(evt){
        evt.preventDefault();
        counter++;
        if(counter  == slidecount){counter = 0;}
        leftPosition = `-${counter * slidewidth}px`;
        slider.style.left = leftPosition;

    });

    prev.addEventListener('click', function(evt){
        evt.preventDefault();
        counter--;
        if(counter  < 0){counter = slidecount - 1;}
        leftPosition = `-${counter * slidewidth}px`;
        slider.style.left = leftPosition;

    });
});

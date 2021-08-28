(function(){
    "use strict";

    const  myImages = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    let currenImage = 0;
    const container = document.getElementById('content');

    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function (event){
        event.preventDefault();
        currenImage++;
        if(currenImage > myImages.length-1){
            currenImage = 0;
        }

        swapImage();
    })
    
    prevBtn.addEventListener('click', function (event){
        event.preventDefault();
        currenImage--;
        if(currenImage < 0){
            currenImage = myImages.length-1;
        }

        swapImage();
    })

    function swapImage(){
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myImages[currenImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);
        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }
})();
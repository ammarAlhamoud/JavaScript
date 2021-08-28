(function(){
    "use strict";

    const  myImages = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    let currenImage = 0;
    const container = document.getElementById('content');
    const stop = document.getElementById('stop');
    const play = document.getElementById('play');


    let timer = null; 

    function swapImage(){
        currenImage++;
        if(currenImage > myImages.length-1){
            currenImage = 0;
        }

        internalSwapImage();
    }
    
    stop.addEventListener('click', function(event){
        event.preventDefault();
        clearInterval(timer);
        timer = null;
    })

    play.addEventListener('click', function(event){
        event.preventDefault();
        timer = setInterval(swapImage, 2000);
    })
  
    container.addEventListener('mouseover', function(event){
        event.preventDefault();
        clearInterval(timer);
    })

    container.addEventListener('mouseout', function(event){
        event.preventDefault();
        if(timer != null){
            timer = setInterval(swapImage, 2000);
        }
    })

    function internalSwapImage(){
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myImages[currenImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);
        if(container.children.length > 2){
            container.removeChild(container.children[0]);
        }
    }
})();
(function(){
    "use strict";

    const  myImages = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    let currenImage = 0;

    document.getElementById('next').onclick = nextPhoto;
    document.getElementById('previous').onclick = previousPhoto;


    function nextPhoto(){
        currenImage++;
        if(currenImage > myImages.length-1){
            currenImage = 0;
        }
        document.getElementById('myimage').src = myImages[currenImage];    
    }

    function previousPhoto(){
        currenImage--;
        if(currenImage < 0){
            currenImage = myImages.length-1;
        }
        document.getElementById('myimage').src = myImages[currenImage];    
    }
})();
// Smooth Scroll
$('nav ul li a').click(function(){
    const thisSection = $(this).attr('href');
    const thislinke = $(this);
    
    $('html, body').stop().animate({scrollTop: $(thisSection).offset().top - 100}, 800,
    'easeOutExpo', function(){
        $('nav ul li a').removeAttr('class');
        thislinke.addClass('selected');
    });
});


// Flexslider
$(window).load(function(){
    $('.flexslider').flexslider({
        animation: 'slide',
        slideshowSpeed: 2000,
        // direction: 'vertical',
        revers: true,
        pauseOnHover: true,
        before: function () {
            $(".cta").css("bottom", "-223px")
        }, 
        start: function () {
            $(".cta").animate({ bottom: "0" }, 600, "easeInCirc")
        }, 
        after: function () {
            $(".cta").animate({ bottom: "0" }, 600, "easeInCirc")
        }
        
    });
    
});

// Tabs
$(window).load(function(){
    $('#tabs>ul>li>a').click(function(){
        $('#tabs>ul>li>a').css({background: '#a2a2a2', color: '#cecece'});
        $(this).css({background: '#eaeaea', color: '#333'});
        const thistab = $(this).attr('href');
        $('#tabs>div:visible').fadeOut(200, function(){
            $(thistab).fadeIn(200);
        });
    })
});

// Content Rotator
$(window).load(function(){
    let counter = 1;
	function contentRotator(){
		$(`#q${counter}`).fadeIn(2000, function(){
			if($(this).is('#q6')){
				setTimeout(function(){
					$(`#q${counter}`).fadeOut(2000, function(){
						counter = 1;
						contentRotator();
					});
				}, 7000);
			}
			else
			{
				setTimeout(function(){
					$(`#q${counter}`).fadeOut(2000, function(){
						counter++;
						contentRotator();
					});
				}, 7000);
			}
		});


	}

	contentRotator();
});

// Features Rotator 
$(window).load(function(){
    const galore_original = $('#features ul li');

    $('#features ul li').first().css({'font-weight': 'bold', 'color': 'red'});
    
});


$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.slider2').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  cssEase: 'linear'
});



$(document).ready(function() {
	$('.heder__burger').click(function(event) {
		$('.heder__burger,.heder_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	//при клике на форму текс исчезает 
	$('.GetIn').click(function(event) {
		var value1 = document.getElementById('input1').value;
		var value2 = document.getElementById('input2').value;
		var value3 = document.getElementById('input3').value;
		var value4 = document.getElementById('input4').value;
		var value5 = document.getElementById('input5').value;
		if (value1) {
			$('.GetinTouch-form-line-span1').css('opacity', '0')
		} else {
			if ($('#input1').is(':focus')) {
				$('.GetinTouch-form-line-span1').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span1').css('opacity', '1')
			}
		}
		if (value2) {
			$('.GetinTouch-form-line-span2').css('opacity', '0')
		} else {
			if ($('#input2').is(':focus')) {
				$('.GetinTouch-form-line-span2').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span2').css('opacity', '1')
			}
		}
		if (value3) {
			$('.GetinTouch-form-line-span3').css('opacity', '0')
		} else {
			if ($('#input3').is(':focus')) {
				$('.GetinTouch-form-line-span3').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span3').css('opacity', '1')
			}
		}
		if (value4) {
			$('.GetinTouch-form-line-span4').css('opacity', '0')
		} else {
			if ($('#input4').is(':focus')) {
				$('.GetinTouch-form-line-span4').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span4').css('opacity', '1')
			}
		}
		if (value5) {
			$('.GetinTouch-form-line-span5').css('opacity', '0')
		} else {
			if ($('#input5').is(':focus')) {
				$('.GetinTouch-form-line-span5').css('opacity', '0')
			} else {
				$('.GetinTouch-form-line-span5').css('opacity', '1')
			}
		}
	});
	
		
});
function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();

window.addEventListener('scroll', function(){
	var heder = document.getElementById('elem');
	heder.classList.toggle('sticky', window.scrollY > 0);
});
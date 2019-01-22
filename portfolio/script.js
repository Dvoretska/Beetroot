$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({scrollTop: pos}, 'slow');
});

$(window).scroll(function() {
    let topSkillsMenu = $('.skills-menu').offset().top;
    let bottomSkillsMenu = $('.skills-menu').offset().top + $('.skills-menu').outerHeight();
	  let topWorkDot = $('.work-dot').offset().top;
    let bottomWorkDot = $('.work-dot').offset().top + $('.work-dot').outerHeight();
	  let topEdDot = $('.ed-dot').offset().top;
    let bottomEdDot = $('.ed-dot').offset().top + $('.ed-dot').outerHeight();
    let screenBottom = $(window).scrollTop() + $(window).innerHeight();
    let screenTop = $(window).scrollTop();
    if ((screenBottom > topSkillsMenu) && (screenTop < bottomSkillsMenu)){
        $('.fill').addClass('animated');
    } else {
        $('.fill').removeClass('animated');
    }
    if ((screenBottom > topWorkDot) && (screenTop < bottomWorkDot)){
        $('.work-dot').addClass('dot-animated');
    } else {
        $('.work-dot').removeClass('dot-animated');
    }
    if ((screenBottom > topEdDot) && (screenTop < bottomEdDot)){
        $('.ed-dot').addClass('dot-animated');
    } else {
        $('.ed-dot').removeClass('dot-animated');
    }
});
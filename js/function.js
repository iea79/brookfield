$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.full__height').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

    // Catalog button hover
    $('.navbar__item_catalog').mouseenter(function() {
    	$(this).addClass('open');
    });
    $('.navbar__item_catalog').mouseleave(function() {
    	$(this).removeClass('open');
    });

    // Home sliders
    $('.top_slider_content').slick({
    	dots: true,
    	arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.top_slider_img',
		fade: true,
		autoplay: true,
		autoplaySpeed: 6000
    });
    $('.top_slider_img').slick({
    	dots: false,
    	arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.top_slider_content',
		fade: true,
		autoplay: true,
		autoplaySpeed: 6000
    });

    $('.home_content_slider').slick({
    	dots: true,
    	arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
    })

    $('.sidebar_slider').slick({
    	dots: true,
    	arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
    });

    $("#fancy").fancybox();

    $('.product_more_box_close').click(function() {
    	$(this).closest('.product_more_box').removeClass('open');
    });
    $('.product_btn').click(function() {
    	$(this).closest('.product_more_box').addClass('open');
    });

});
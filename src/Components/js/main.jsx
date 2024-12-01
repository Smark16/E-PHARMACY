import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

export default function initializeMain() {
    // Dropdown on mouse hover
    function toggleNavbarMethod() {
        if ($(window).width() > 992) {
            $('.navbar .dropdown')
                .on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                })
                .on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
        } else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    $(document).ready(function () {
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
            return false;
        });

        // Vendor carousel
        $('.vendor-carousel').owlCarousel({
            loop: true,
            margin: 29,
            nav: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                768: { items: 4 },
                992: { items: 5 },
                1200: { items: 6 },
            },
        });

        // Related carousel
        $('.related-carousel').owlCarousel({
            loop: true,
            margin: 29,
            nav: false,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                768: { items: 3 },
                992: { items: 4 },
            },
        });

        // Product Quantity
        $('.quantity button').on('click', function () {
            const button = $(this);
            const input = button.parent().parent().find('input');
            const oldValue = parseFloat(input.val()) || 0;
            const newVal = button.hasClass('btn-plus') ? oldValue + 1 : Math.max(0, oldValue - 1);
            input.val(newVal);
        });
    });
}

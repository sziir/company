import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '../sass/style.scss';
import '../css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery/dist/jquery.min.js';
// import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery-circle-progress/dist/circle-progress.js'
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';
import { data } from 'jquery-circle-progress/dist/circle-progress.js';


$(function () {
    $('.thumbnail2').hover(function () {
        $(this).find('.project-category').hide();
        $(this).find('.caption2').slideDown(250);
    },
        function () {
            $(this).find('.caption2').slideUp(250);
            $(this).find('.project-category').show(250);
        }
    );
    var pathname = window.location.pathname;
    $('.navbar-nav > li > a[href="' + pathname + '"]').parent().addClass('active');

    if (pathname == '/blog-details.html' || pathname == '/add-blog.html') {
        $('.navbar-nav > li > a[href="/blog.html"]').parent().addClass('active');
    }
    if (pathname == '/project-details.html') {
        $('.navbar-nav > li > a[href="/projects.html"]').parent().addClass('active');
    }

    let modalId = $('#image-gallery');

            loadGallery(true, 'a.thumbnail');

            //This function disables buttons when needed
            function disableButtons(counter_max, counter_current) {
                $('#show-previous-image, #show-next-image')
                    .show();
                if (counter_max === counter_current) {
                    $('#show-next-image')
                        .hide();
                } else if (counter_current === 1) {
                    $('#show-previous-image')
                        .hide();
                }
            }


            function loadGallery(setIDs, setClickAttr) {
                let current_image,
                    selector,
                    counter = 0;

                $('#show-next-image, #show-previous-image')
                    .click(function () {
                        if ($(this)
                            .attr('id') === 'show-previous-image') {
                            current_image--;
                        } else {
                            current_image++;
                        }

                        selector = $('[data-image-id="' + current_image + '"]');
                        updateGallery(selector);
                    });

                function updateGallery(selector) {
                    let $sel = selector;
                    current_image = $sel.data('image-id');
                    $('#image-gallery-title')
                        .text($sel.data('title'));
                    $('#image-gallery-image')
                        .attr('src', $sel.data('image'));
                    disableButtons(counter, $sel.data('image-id'));
                }

                if (setIDs == true) {
                    $('[data-image-id]')
                        .each(function () {
                            counter++;
                            $(this)
                                .attr('data-image-id', counter);
                        });
                }
                $(setClickAttr)
                    .on('click', function () {
                        updateGallery($(this));
                    });
    }
    
    $(".custom-file-input").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

});
var year = new Date().getFullYear();
document.getElementById('date').innerHTML = year;
document.getElementById('fullyear').innerHTML = new Date().getFullYear();



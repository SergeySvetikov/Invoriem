$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 2,
                margin: 24,
                loop: true,
                dots: false,
            },
            601: {
                items: 3,
                dots: false,
                margin: 32,
                loop: true,
            },
            1001: {
                items: 3,
                margin: 32,
                dots: false,
                loop: true,
            }
        }
    });
});

/* Video */
const VIDEO_OVERLAY_CLASS = 'video-overlay';
const VIDEO_NONE_CLASS = 'none';
const VIDEO_HIDDEN_CLASS = 'hidden';
const NO_SCROLL_CLASS = 'no-scroll';
const videoWrapper = document.querySelector('.video');

videoWrapper.addEventListener('click', function () {
    const videoBtn = document.querySelector('#video-btn');
    const videoPicture = document.querySelector('.video__picture');
    const video = document.querySelector('#video-file');
    if (video.paused) {
        videoPicture.classList.add(VIDEO_HIDDEN_CLASS);
        videoWrapper.classList.remove(VIDEO_OVERLAY_CLASS);
        videoBtn.classList.add(VIDEO_NONE_CLASS);
        video.play();
    } else {
        videoWrapper.classList.add(VIDEO_OVERLAY_CLASS);
        videoBtn.classList.remove(VIDEO_NONE_CLASS);
        video.pause();
    }
});

/* Mobile Nav */
const openNavbtn = document.querySelector('#openMobileNav');
const mobileNav = document.querySelector('#mobileNav');
const closeNavbtn = document.querySelector('#closeMobileNav');
openNavbtn.onclick = function () {
    mobileNav.classList.remove(VIDEO_NONE_CLASS);
    document.body.classList.add(NO_SCROLL_CLASS);
}
closeNavbtn.onclick = function () {
    mobileNav.classList.add(VIDEO_NONE_CLASS);
    document.body.classList.remove(NO_SCROLL_CLASS);
}

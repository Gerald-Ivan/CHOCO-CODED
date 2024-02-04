   var swiper = new Swiper(".mySwiper", {
                    slidesPerView: 3,
                    spaceBetween: 30,
     loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        520: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 4,
                        },
                    },
                });
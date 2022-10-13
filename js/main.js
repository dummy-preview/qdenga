$(document).ready(function() {

    // e preload

    $(window).on('load', function() {
        // $("#preloader").fadeOut(1750);
        $("#preloader").delay(3500).fadeOut("slow", function() {
            $(this).remove()
        })
    });
    $("#menu-toggler").click(function() {
        toggleBodyClass("menu-active");
    });
    $(".menu-item").click(function() {
        toggleBodyClass("menu-active");
    });

    $(".nav__link").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close1").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close2").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });
    $("#close3").click(function() {
        $("body.menu-active").removeClass("menu-active");
    });

    function toggleBodyClass(className) {
        document.body.classList.toggle(className);
    }

    $('.kuis3__select--item1 img').click(function() {
        setTimeout(function() {
            $('.kuis3__cta2').fadeIn(700);
            $('.block-kuis31').fadeOut(100);
            $('.block-kuis32').fadeIn(700);

        }, 3000);
        $('.kuis3__cta').fadeOut();
        // $('#hand').get(0).play();
        $('#hand1').fadeOut(100);
        $('#hand').fadeIn(100);
        $('.kuis3__kids--hand').addClass('hand-move');
        setTimeout(function() {
            $(".kuis3__kids--hand").removeClass("hand-move");
            $('.shadowkids50').fadeIn();
            $('.kuis3__kids--hand').fadeOut();
        }, 3000);
        setTimeout(function() {
            $('.kuis3__kids--hand').fadeOut(100);
        }, 3000);
        setTimeout(function() {
            $('.kuis3__kids--hand').fadeIn();
        }, 5500);
    });
    $('.kuis3__select--item2 img').click(function() {
        $('.kuis3__cta2').fadeOut(100);
        $('.block-kuis31').fadeIn(100);
        $('.kuis3__kids--hand').addClass('hand-move');
        setTimeout(function() {
            $(".kuis3__kids--hand").removeClass("hand-move");
            $('.shadowkids50').fadeOut();
            $('.shadowkids100').fadeIn(500);
        }, 3000);
        setTimeout(function() {
            $('.kuis3__kids--hand').fadeOut(100);
        }, 3000);
        // setTimeout(function() {
        //     $('.kuis3__kids--hand').fadeIn();
        // }, 5500);
    });

    $('.close').click(function() {
        $('.modal').fadeOut();
    });
    $("#startCount").on("click", function(evt) {
        setTimeout(function() {
            var $el = $("#el"),
                value = 50;
            evt.preventDefault();
            $({ percentage: 0 }).stop(true).animate({ percentage: value }, {
                duration: 2000,
                easing: "easeOutExpo",
                step: function() {
                    var percentageVal = Math.round(this.percentage * 10) / 10;
                    $el.text(percentageVal);
                }
            }).promise().done(function() {
                $el.text(value);
            });
        }, 2500);
    });
    $("#startCount2").on("click", function(evt) {
        setTimeout(function() {
            var $el2 = $(".presen-0"),
                value = 100;
            evt.preventDefault();
            $({ percentage: 50 }).stop(true).animate({ percentage: value }, {
                duration: 2000,
                easing: "easeOutExpo",
                step: function() {
                    var percentageVal2 = Math.round(this.percentage * 10) / 10;
                    $el2.text(percentageVal2);
                }
            }).promise().done(function() {
                $el2.text(value);
            });
        }, 3000);
    });

});

const node = document.getElementById('exportable');

const build = (el, filename) => {
    $('#exportable').addClass('two-x');
    domtoimage.toJpeg(el, {
        quality: .9
    }).
    then(dataUrl => {
        var link = document.createElement('a');
        link.download = filename + '.jpg';
        link.href = dataUrl;
        link.click();
        link.remove();
        $('#exportable').removeClass('two-x');
    });
};

const updateText = (el, string) => {
    $(el).text(string);
};

const templates = () => {
    const select = $('#template');
    $.each(whitepapers, function(index, data) {
        console.log(whitepapers[index]);
        const template = '<option value="' + data.name + '">' + data.name + '</option>';
        select.add(template);
    });
};


$(() => {
    const download = $('.download');
    download.on('click', () => {
        const filename = $('#filename').val();
        const title = $('#title').val();
        const name = $('#namer').val();
        if (filename) {
            build(node, filename);
        } else {
            alert('Filename is required');
        }
    });

    $('input').each(function() {
        let elFor = $(this).attr('data-for');
        console.log(elFor);
        if (elFor) {
            $(this).on('focus', () => {
                $(elFor).addClass('focused');
            }).on('blur', () => {
                $(elFor).removeClass('focused');
            });
            $(this).on('keyup', () => {
                if ($(this).val().length > 0) {
                    updateText(elFor, $(this).val());
                } else {
                    updateText(elFor, $(this).attr('placeholder'));
                }
            });
        }
    });
});
$('input[type="text"]').on('keydown, keyup', function() {
    var timer = 0;
    var sensor_word = ['anjing', 'kontol', 'cebong', 'kampret'];
    var sensor_replace = ['an***', 'ko**', 'ce***', 'kan*'];
    clearTimeout(timer);
    var new_value = this.value;
    var new_sensor = $('#title').val();

    $.each(sensor_word, function(idx, word) {
        new_sensor = new_sensor.replace(word, '*****');
    });

    timer = setTimeout(function() {
        $('.title').text(new_sensor);
    }, 0);

});
// 
const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    on: {
        init: function() {},
        orientationchange: function() {},
        beforeResize: function() {
            let vw = window.innerWidth;
            if (vw < 508) {
                mySwiper.params.slidesPerView = 2;
                mySwiper.params.slidesPerColumn = 2;
                mySwiper.params.slidesPerGroup = 2;
            } else {
                mySwiper.params.slidesPerView = 3;
                mySwiper.params.slidesPerColumn = 2;
                mySwiper.params.slidesPerGroup = 3;
            }
            mySwiper.init();
        }
    }
});

// pop up
function onClick(element) {
    document.getElementById("modal01").style.display = "block";
}

function onClick1(element) {
    document.getElementById("modal02").style.display = "block";
}

function onClick2(element) {
    document.getElementById("modal03").style.display = "block";
}

function onClick3(element) {
    document.getElementById("modal04").style.display = "block";
}

function onClick4(element) {
    document.getElementById("modal05").style.display = "block";
}

function onClick5(element) {
    document.getElementById("modal06").style.display = "block";
}

function onClick6(element) {
    document.getElementById("modal07").style.display = "block";
}

function onClick7(element) {
    document.getElementById("modal08").style.display = "block";
}

function onClick8(element) {
    document.getElementById("modal09").style.display = "block";
}

// s parallax
$.fn.moveIt = function() {
    var $window = $(window);
    var instances = [];

    $(this).each(function() {
        instances.push(new moveItItem($(this)));
    });

    window.addEventListener('scroll', function() {
        var scrollTop = $window.scrollTop();
        instances.forEach(function(inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}

var moveItItem = function(el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
    this.el.css('transform', 'translateY(' + (scrollTop / this.speed) + 'px)');
};

$(function() {
    $('[data-scroll-speed]').moveIt();
});

$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    console.log("scrollTop>>>" + scrollTop);
    if (scrollTop == 0) {
        $("#scrollFx").css({ "bottom": "-1000px" });
    } else {
        $("#scrollFx").css({ "bottom": ($(window).scrollTop()) + "px" });
    }
    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 50) {
    //         $(".header").addClass("fixshow");
    //         $(".home").addClass("home-space");
    //     } else {
    //         $(".header").removeClass("fixshow");
    //         $(".home").removeClass("home-space");
    //     }
    // });
});


// e parallax


var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito6'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('hand'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'images/suntikan.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('kids'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/karakter.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito7'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito8'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito9'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito10'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mosquito11'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mosquito.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('shield'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/shield.json',
    name: 'myAnimation',
});
var animation = bodymovin.loadAnimation({
    container: document.getElementById('mascot'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'images/mascot.json',
    name: 'myAnimation',
});


let result = document.querySelector('.result'),
    img_result = document.querySelector('.img-result'),
    img_w = "300",
    img_h = document.querySelector('.img-h'),
    // options = document.querySelector('.options'),
    save = document.querySelector('.save'),
    cropped = document.querySelector('.cropped'),
    dwn = document.querySelector('.download'),
    upload = document.querySelector('#file-input'),
    cropper = '';

upload.addEventListener('change', e => {
    if (e.target.files.length) {
        const reader = new FileReader();
        reader.onload = e => {
            if (e.target.result) {
                let img = document.createElement('img');
                img.id = 'image';
                img.src = e.target.result;
                result.innerHTML = '';
                result.appendChild(img);
                save.classList.remove('hide');
                cropper = new Cropper(img);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});


save.addEventListener('click', e => {
    e.preventDefault();
    let imgSrc = cropper.getCroppedCanvas({
        width: img_w
    }).toDataURL();
    cropped.classList.remove('hide');
    img_result.classList.remove('hide');
    dwn.classList.remove('hide');
    $('.download').fadeIn();
    cropped.src = imgSrc;
    // dwn.classList.remove('hide');
    // dwn.download = 'imagename.png';
    // dwn.setAttribute('href', imgSrc);
});
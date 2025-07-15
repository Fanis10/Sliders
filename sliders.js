function slider() {
  var swiper = new Swiper('.slider .mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
      navigation: {
          nextEl: ".slider .swiper-button-next",
          prevEl: ".slider .swiper-button-prev",
      },
      pagination: {
          el: ".slider .swiper-pagination",
          clickable: true,
      },
  })
}

slider();

// Inputs
 $('input').on('input', function() {
    var $label = $(this).prev('label');
    if ($(this).val().trim() !== '') {
      $label.addClass('input-title--active');
    } else {
      $label.removeClass('input-title--active');
    }
  });

// Modal
    $("[data-modal]").click(function () {
        let modalId = $(this).attr("data-modal")

        openModal(modalId)
    })

    function openModal(modalId){
        $(`#${modalId}`).addClass("modal--active")
        $("body").addClass("fixed-body")
    }

    $(".modal").click(function () {
        closeModal()
    })

    $("._close-modal").click(function () {
        closeModal()
    })

    $(".modal__dialog").click(function (e) {
        e.stopPropagation()
    })


    function closeModal() {
        $('.modal').removeClass("modal--active")
        $("body").removeClass("fixed-body")
    }

var swiper = new Swiper(".left", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  
  
  $(function () {
    
    // 메일폼 보이기
    $('button').click(function () {
      $('.sendmail').css('display', 'flex');
    });
    $('.close').click(function () {
      $('.sendmail').css('display', 'none');
    });
    $('.call > a:first-child').click(function(){
      $('.sendmail').css('display', 'flex');
    });
    
    // mail
    document.querySelector('#contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const fromName = document.querySelector('input[name="from_name"]').value;
  
      emailjs.init("nADFt3EPe95zGD-gB");
      emailjs.sendForm('service_6e55q2e', 'template_d76j924', this)
          .then(function() {
              alert(`${fromName}님, 메일 전송 완료 되었습니다 :) 빠른시일내에 답변드리겠습니다. 관심가져주셔서 감사합니다 :)`)
          }, function(error) {
              alert(`${fromName}님, 메일 전송이 실패했습니다 :(`)
              console.log('전송실패', error);
          });
  });
  });


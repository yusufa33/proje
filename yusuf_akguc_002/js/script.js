document.addEventListener("DOMContentLoaded", function() {
  // Preloader'ı gizlemek için fonksiyon
  function hidePreloader() {
      var preloader = document.getElementById("preloader");
      preloader.style.display = 'none';
  }

  // Carousel fonksiyonları
  var carousel = document.querySelector('.carousel');
  var images = carousel.getElementsByTagName('img');
  var currentIndex = 0;

  function showImage(index) {
      for (var i = 0; i < images.length; i++) {
          images[i].style.display = 'none';
      }
      images[index].style.display = 'block';
  }

  document.getElementById('prev').addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      showImage(currentIndex);
  });

  document.getElementById('next').addEventListener('click', function() {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      showImage(currentIndex);
  });

  // Başlangıçta ilk resmi göster
  showImage(currentIndex);

  // Preloader'ı gizle
  hidePreloader();
});

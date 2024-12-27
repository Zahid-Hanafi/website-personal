const meteorShower = document.getElementById('meteor-shower');

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');

    meteor.style.left = `${Math.random() * 100}vw`;
    meteor.style.top = `${Math.random() * 100}vh`;

    const size = Math.random() * 5 + 5;
    meteor.style.width = `${size}px`;
    meteor.style.height = `${size}px`;

    const speed = Math.random() * 2 + 1;
    meteor.style.animationDuration = `${speed}s`;

    const colors = ['lightblue', 'purple', 'cyan', 'white'];
    meteor.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    meteorShower.appendChild(meteor);

    setTimeout(() => {
        meteor.remove();
    }, speed * 1000);
}

setInterval(createMeteor, 300);


document.addEventListener("DOMContentLoaded", function() {
  const lightboxLinks = document.querySelectorAll('.lightbox');
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.classList.add('lightbox-overlay');
  const lightboxImage = document.createElement('img');
  const closeButton = document.createElement('span');
  closeButton.classList.add('lightbox-close');
  closeButton.textContent = '×';

  lightboxOverlay.appendChild(lightboxImage);
  lightboxOverlay.appendChild(closeButton);
  document.body.appendChild(lightboxOverlay);

  lightboxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const imgSrc = link.getAttribute('href');
      lightboxImage.src = imgSrc;
      lightboxOverlay.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', function() {
    lightboxOverlay.style.display = 'none';
  });

  lightboxOverlay.addEventListener('click', function(e) {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.style.display = 'none';
    }
  });
});


let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); 
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";  
}



    function toggleImages(id) {
      
      const allContainers = document.querySelectorAll(".image-container");

      
      allContainers.forEach((container) => {
        if (container.id !== id) {
          container.style.display = "none";
        }
      });

      
      const targetContainer = document.getElementById(id);
      if (targetContainer.style.display === "none") {
        targetContainer.style.display = "flex";
      } else {
        targetContainer.style.display = "none";
      }
    }

    function openModal(img) {
      const modal = document.getElementById("modal");
      const modalImg = document.getElementById("modal-img");
      modal.style.display = "flex";
      modalImg.src = img.src;
    }

    function closeModal() {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
    }

   
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        closeModal();
      }
    });
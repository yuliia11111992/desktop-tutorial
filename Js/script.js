// ===== BURGER MENU =====
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const menuOverlay = document.getElementById('menuOverlay');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle burger menu
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close menu when clicking on overlay
menuOverlay.addEventListener('click', () => {
  burger.classList.remove('active');
  navMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
});

// Close menu when clicking outside (дополнительная защита)
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});


// Close menu when clicking on nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
    burger.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ===== POPUP =====
const popup = document.getElementById('popup');
const openBtns = document.querySelectorAll('.open-popup');
const closeBtn = document.querySelector('.close-popup');
const popupBg = document.querySelector('.popup-bg');
let popupOpened = false;

// Open popup
const openPopup = () => {
  popup.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  popupOpened = true;
};

// Close popup
const closePopup = () => {
  popup.classList.add('hidden');
  document.body.style.overflow = '';
};

// Open popup on button click
openBtns.forEach(btn => {
  btn.addEventListener('click', openPopup);
});

// Close popup on close button click
closeBtn.addEventListener('click', closePopup);

// Close popup when clicking on background
popupBg.addEventListener('click', closePopup);

// Close popup on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    closePopup();
  }
});

// Auto-open popup after 5 seconds
setTimeout(() => {
  if (!popupOpened) {
    openPopup();
  }
}, 5000);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== FORM SUBMISSIONS =====
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here you can add your form submission logic
    // For example, sending data to a server
    
    alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    
    // Close popup if form is inside popup
    if (form.closest('.popup')) {
      closePopup();
    }
    
    // Reset form
    form.reset();
  });
});
//Get elements from the DOM
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

//Toggle open/close menu 
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 300; // Velocità dell'animazione

  const animateCounters = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const updateCount = () => {
          const target = +counter.getAttribute('data-count');
          const count = +counter.innerText.replace('k', '');

          const increment = target / speed;

          if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}k`;
            setTimeout(updateCount, 1);
          } else {
            counter.innerText = `${target}k`;
          }
        };
        updateCount();
        observer.unobserve(counter);
      }
    });
  };

  const observer = new IntersectionObserver(animateCounters, {
    threshold: 0.5
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });
});

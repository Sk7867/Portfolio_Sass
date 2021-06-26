window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 30) {
        document
          .querySelector(`nav ul li a[href="#${id}"]`)
          .parentElement.classList.add('active');
      } else {
        document
          .querySelector(`nav ul li a[href="#${id}"]`)
          .parentElement.classList.remove('active');
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });
});

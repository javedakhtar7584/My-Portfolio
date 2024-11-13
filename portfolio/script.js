document.querySelectorAll('.fade-in').forEach((element, index) => {
    element.style.animationDelay = `${index * 0.3}s`;
    element.classList.add('fade-in');
});

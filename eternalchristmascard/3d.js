const cardImage = document.querySelector('.card img');

cardImage.addEventListener('mousemove', (e) => {

    const { width, height, left, top } = cardImage.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y / height) - 0.5) * -30;
    const rotateY = ((x / width) - 0.5) * 30;
    const rotateZ = ((x / width) - 0.5) * 10;

    cardImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
});

cardImage.addEventListener('mouseleave', () => {
    cardImage.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
});

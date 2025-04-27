const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.style.transform = 'scale(1)'; // Start at normal scale
    button.style.transition = 'transform 0.3s';
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)'; // Return to normal scale
    });
});

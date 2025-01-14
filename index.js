const nav = document.querySelectorAll('.nav .navigation');

nav.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline'; 
    });

    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none'; 
    });
});

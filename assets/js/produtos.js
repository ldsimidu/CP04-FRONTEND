document.querySelectorAll('.product-image').forEach(function(image) {
    let originalSrc = image.src;
    let hoverSrc = image.getAttribute('data-hover');
    
    image.addEventListener('mouseover', function() {
        image.src = hoverSrc;
    });
    
    image.addEventListener('mouseout', function() {
        image.src = originalSrc;
    });
});
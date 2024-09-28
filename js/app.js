// sublinks code start
document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
    let timeout;
    const menu = dropdown.querySelector('.dropdown-menu');
    dropdown.onmouseenter = () => (clearTimeout(timeout), menu.style.display = 'block', menu.style.opacity = '1');
    dropdown.onmouseleave = () => timeout = setTimeout(() => (menu.style.opacity = '0', setTimeout(() => menu.style.display = 'none', 20)), 50);
});

// sublinks code end


const words = ['HTML', 'CSS', 'JavaScript', 'React'];
let index = 0, charIndex = 0, isDeleting = false;
const dynamicText = document.getElementById('dynamic-text');

function typeEffect() {
    const currentWord = words[index];

    dynamicText.textContent = currentWord.slice(0, charIndex);
    charIndex += isDeleting ? -1 : 1;

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 150);
}
document.addEventListener('DOMContentLoaded', typeEffect);





// Get the image element
const image = document.getElementById("interactive-image");

// Add a mousemove event listener to the container
document.querySelector(".container-five").addEventListener("mousemove", function(e) {
  const container = this.getBoundingClientRect(); // Get container position

  // Calculate the relative mouse position within the container
  const xPos = (e.clientX - container.left) / container.width; 
  const yPos = (e.clientY - container.top) / container.height;

  // Calculate the movement based on mouse position (adjust values for desired effect)
  const moveX = (xPos - 0.8) * 40; // Move -10 to +10 pixels based on X position
  const moveY = (yPos - 0.8) * 40; // Move -10 to +10 pixels based on Y position

  // Apply the transform to the image
  image.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

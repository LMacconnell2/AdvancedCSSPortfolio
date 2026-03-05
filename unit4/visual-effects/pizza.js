const pizza = document.getElementById('pizza');
const canvas = document.createElement('canvas');
const resetButton = document.getElementById('reset');
const ctx = canvas.getContext('2d');

function init() {
    // Since CSS already put it at -100vw, we just move it to 0
    // We use a tiny timeout to ensure the browser registers the starting position
    requestAnimationFrame(() => {
        pizza.style.transform = 'translateX(0) rotate(0deg)';
    });
}

// Call init when the page or image is ready
window.addEventListener('load', init);

function removePizza() {
    // 1. Start the "Fly Away" animation
    pizza.style.transition = 'transform 1s ease-in';
    pizza.style.transform = 'translateX(100vw) rotate(360deg)';
}

function newPizza() {
    // 2. Wait for it to be off-screen to reset the "bites"
    setTimeout(() => {
        // Prepare for the "Fly In" from the opposite side
        pizza.style.transition = 'none';
        pizza.style.transform = 'translateX(-100vw) rotate(-360deg)';

        // Clear the canvas (Reset to solid black)
        ctx.globalCompositeOperation = 'source-over'; 
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        updateMask();

        // 3. Trigger the "Fly In" animation
        // Use a tiny timeout or requestAnimationFrame to let the 'none' transition stick
        requestAnimationFrame(() => {
            pizza.style.transition = 'transform 1s ease-out';
            pizza.style.transform = 'translateX(0) rotate(0deg)';
        });
    }, 1000); // Matches the 1s transition duration
}

function resetCanvas() {
    removePizza();
    newPizza();
}

resetButton.addEventListener('click', resetCanvas);

// 1. Initialize the mask once the image is loaded
pizza.onload = () => {
  canvas.width = pizza.clientWidth;
  canvas.height = pizza.clientHeight;

  // Fill the entire canvas with black (Solid = Visible)
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  updateMask();
};

// 2. The "Bite" Function
pizza.addEventListener('click', (e) => {
  const rect = pizza.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // This is the magic: it tells the canvas to "erase" where we draw
  ctx.globalCompositeOperation = 'destination-out';

  // Draw a "bite" circle
  ctx.beginPath();
  ctx.arc(x, y, 60, 0, Math.PI * 2);
  ctx.fill();

  updateMask();
});

// 3. Apply the canvas pixels to the CSS mask
function updateMask() {
  const dataUrl = canvas.toDataURL();
  pizza.style.maskImage = `url(${dataUrl})`;
}
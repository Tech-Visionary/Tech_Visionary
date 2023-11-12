document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });
});
const textElement = document.getElementById('animatedText');
    let count = 0;

    setInterval(() => {
      count++;
      textElement.textContent = `Hello, I'm animated! (${count})`;
    }, 1000);
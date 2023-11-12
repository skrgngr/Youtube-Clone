var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}
// JavaScript kodu
document.getElementById('show-more-button').addEventListener('click', function() {
    var content = document.getElementById('content');
    var icon = document.getElementById('icon');
    var buttonText = document.getElementById('button-text');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        icon.className = 'fa-solid fa-chevron-up';
        buttonText.textContent = 'Daha az göster';
    } else {
        content.style.display = 'none';
        icon.className = 'fa-solid fa-chevron-down';
        buttonText.textContent = 'Daha fazla göster';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const userProfile = document.querySelector('.user-profile');
    const userIcon = document.querySelector('.nav-right .user-icon');

    userIcon.addEventListener('click', function () {
        userProfile.style.display = userProfile.style.display === 'block' ? 'none' : 'block';
    });
});













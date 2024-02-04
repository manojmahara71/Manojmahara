// script.js
function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle('open');
}

window.addEventListener('mouseup', function(event) {
    var sidebar = document.getElementById("mySidebar");
    if (event.target != sidebar && event.target.parentNode != sidebar) {
        sidebar.classList.remove('open');
    }
});

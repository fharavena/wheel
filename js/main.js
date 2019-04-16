function unlock_wheel() {
    document.getElementById("pantalla_inicial").style.display = "none";

    var img = document.getElementById("rueda_imagen");

    img.classList.add("change_courses");

    setTimeout(function() {
        img.classList.remove("change_courses");
    }, 300);

}
var group;
random();

function random () {
    group = Math.random();
    redirect();
}

function redirect () {
    if (group < 0.5) {
        window.location.href = "https://github.com";
    } else {
        window.location.href = "https://google.com";
    }
}
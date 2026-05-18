var group;
random();

function random () {
    group = Math.random(); // Generates a random number between 0 and 1
    redirect();
}

function redirect () {
    if (group < 0.5) {
        window.location.href = "https://github.com"; // Change this to your desired URL for group A
    } else {
        window.location.href = "https://google.com"; // Change this to your desired URL for group B
    }
}
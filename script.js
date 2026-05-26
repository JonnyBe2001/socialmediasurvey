var group;
random();

function random () {
    group = Math.random(); // Generates a random number between 0 and 1
    redirect();
}

function redirect () {
    if (group < 0.1) {
        window.location.href = "https://on23grupped.limesurvey.net/689853?lang=de&newtest=Y"; // Survey with timer
    } else {
        window.location.href = "https://on23grupped.limesurvey.net/689853?lang=de&newtest=Y"; // Survey without timer
    }
}
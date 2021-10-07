const locations = {
    "Brooklyn": {
        "Latitude": 40.67,
        "Longitude": -73.94
    },
    "Jerusalem": {
        "Latitude": 31.76,
        "Longitude": 35.21
    },
    "Lakewood": {
        "Latitude": 40.08,
        "Longitude": -74.20
    },
    "Los Angeles": {
        "Latitude": 34.05,
        "Longitude": -118.24
    },
    "Miami": {
        "Latitude": 25.76,
        "Longitude": -80.19
    }
}

window.onload = function() {

    const location_div = document.getElementById("locations");

    var tabindex = 0;

    for (const [key, value] of Object.entries(locations)) {
        var newHTML = `<div tabindex=${tabindex} class= 'kai-tl focusable' id='${key.replace(/\s/g , "-")}'> <span class='kai-tl-primary'> ${key} </span> </div> <hr/>`;
        location_div.innerHTML += newHTML;
        tabindex ++;
    }

    if (localStorage.getItem('location') != null) {
        const default_location = document.getElementById(localStorage.getItem('location').replace(/\s/g, "-"));
        default_location.focus();
    } else {
        document.getElementById("Jerusalem").focus()
    }

}

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
    switch (e.key) {
        case 'Enter':
            var element = document.activeElement;
            var text = element.textContent.trim();

            if (locations.hasOwnProperty(text)) {
                localStorage.setItem('location', text);
                localStorage.setItem('latitude', locations[text]["Latitude"]);
                localStorage.setItem('longitude', locations[text]["Longitude"]);
                window.location.href = "zmanimlist.html";
            }
            break;
        case 'ArrowUp':
            nav(-1);
            break;
        case 'ArrowDown':
            nav(1);
            break;
        case 'ArrowRight':
            nav(1);
            break;
        case 'ArrowLeft':
            nav(-1);
            break;
        default:
            break;
    }
}

function nav(move) {
    const currentIndex = document.activeElement.tabIndex;
    const next = currentIndex + move;
    const items = document.querySelectorAll('.focusable');
    const targetElement = items[next];
    targetElement.focus();

}

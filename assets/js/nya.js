const SEARCHES = [
    "where should i bury the body",
    "why does my eye twitch",
    "why is my poop green",
    "why do i feel so empty",
    "why do i always feel hungry",
    "why do i always have diarrhea",
    "why does my anus itch",
    "why does my belly button smell",
    "why does my cat attack me",
    "why does my dog eat poop",
    "why does my fart smell so bad",
    "why does my mom hate me",
    "why does my pee smell bad",
    "why does my poop float",
    "proof that the earth is flat",
];

// https://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/

var f = ["🌑", "🌒", "🌓", "🌔", "🌝", "🌖", "🌗", "🌘"];

function moon() {
    location.hash = " - Phoenixthrush UwU - " + f[Math.floor((Date.now() / 100) % f.length)];
    setTimeout(moon, 50);
}

// https://github.com/feross/TheAnnoyingSite.com/blob/master/static/index.html/

function confirmPageUnload() {
    window.addEventListener("beforeunload", (event) => {
        speak("Please don't go!");
        event.returnValue = true;
    });
}

function blockRightClick() {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
}

function blockBackButton() {
    window.addEventListener("popstate", () => {
        window.history.forward();
    });
}

function wave() {
    var i,
        n,
        s = "";

    for (i = 0; i < 20; i++) {
        n = Math.floor(Math.sin(Date.now() / 200 + i / 2) * 4) + 4;

        s += String.fromCharCode(0x2581 + n);
    }

    document.title = s;
    setTimeout(wave, 50);
}

function websiteSearches() {
    var search = SEARCHES[Math.floor(Math.random() * SEARCHES.length)];
    window.open("https://www.google.com/search?q=" + search, "_blank");
    setTimeout(websiteSearches, 500);
}

moon();
confirmPageUnload();
blockRightClick();
blockBackButton();
wave();
setTimeout(websiteSearches, 60000);
// fullscreen(); todo
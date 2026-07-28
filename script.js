const enter = document.getElementById("enterBtn");
const loader = document.getElementById("loader");
const website = document.getElementById("website");
const music = document.getElementById("music");

enter.onclick = function () {

```
loader.style.opacity = "0";

setTimeout(function () {

    loader.style.display = "none";
    website.style.display = "block";

    if (music) {
        music.play().catch(function (error) {
            console.log("Music playback error:", error);
        });
    }

}, 800);
```

};

// Countdown

var weddingDate = new Date("September 4, 2026 19:00:00").getTime();

setInterval(function () {

```
var now = new Date().getTime();

var distance = weddingDate - now;

var days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
);

var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
);

var minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
);

var seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
```

}, 1000);

// Back To Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

```
if (document.documentElement.scrollTop > 500) {
    topBtn.style.display = "block";
} else {
    topBtn.style.display = "none";
}
```

};

topBtn.onclick = function () {

```
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

};

// RSVP Form

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function (e) {

```
e.preventDefault();

const data = new URLSearchParams();

data.append(
    "name",
    document.getElementById("name").value
);

data.append(
    "guests",
    document.getElementById("guests").value
);

data.append(
    "attendance",
    document.getElementById("attendance").value
);

data.append(
    "message",
    document.getElementById("message").value
);


fetch(
    "https://script.google.com/macros/s/AKfycbzrYbTYJhZgmH-iBoHInzKojXRvj62QlXruw6z9t0xJfRcXVslaZeX5OFLhf18doJtfsw/exec",
    {
        method: "POST",
        body: data
    }
)

.then(function () {

    alert(
        "🎉 Thank you! Your attendance has been confirmed."
    );

    form.reset();

})

.catch(function (error) {

    console.error("Error:", error);

    alert(
        "❌ Something went wrong. Please try again."
    );

});
```

});

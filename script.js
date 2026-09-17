const rain = document.getElementById("rain");
const cursor = document.getElementById("cursor");
const cursorGlow = document.getElementById("cursorGlow");
const profileCard = document.getElementById("profileCard");
const clickEffects = document.getElementById("clickEffects");

const playButton = document.getElementById("playButton");
const prevTrack = document.getElementById("prevTrack");
const nextTrack = document.getElementById("nextTrack");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const currentTimeElement =
    document.getElementById("currentTime");

const durationElement =
    document.getElementById("duration");

const trackCover =
    document.getElementById("trackCover");

const trackTitle =
    document.getElementById("trackTitle");

const trackArtist =
    document.getElementById("trackArtist");

const activityImage =
    document.getElementById("activityImage");

const activityName =
    document.getElementById("activityName");

const activityDetails =
    document.getElementById("activityDetails");

const activityLabel =
    document.getElementById("activityLabel");

const activityStatus =
    document.getElementById("activityStatus");

const avatar =
    document.getElementById("avatar");

const onlineDot =
    document.getElementById("onlineDot");

const soundcloudWidget =
    document.getElementById("soundcloudWidget");


/* =========================
   Tracks
========================= */

const tracks = [
    {
        title: "Don't B Affraid",
        artist: "tony shhnow",
        cover: "https://i.postimg.cc/cJMSdczX/image.png",
        url: "https://soundcloud.com/snowmanservin/dont-b-affraid-p-mtrsprt-ok"
    },
    {
        title: "//WHAT U NED BBY FT BLXXDN//",
        artist: "pinstripes",
        cover: "https://i.postimg.cc/13vdBYbK/image.png",
        url: "https://soundcloud.com/mehwiththemuha/whatyouneed"
    },
    {
        title: "𝓌𝑒 𝒷𝑜𝓉𝒽 𝒹𝒾𝑒",
        artist: "pinstripes",
        cover: "https://i.postimg.cc/SsnfVrHZ/image.png",
        url: "https://soundcloud.com/mehwiththemuha/we-both-die"
    },
    {
        title: "a cry for help that you will all ignore",
        artist: "the problem",
        cover: "https://i.postimg.cc/QM0ffVtn/image.png",
        url: "https://soundcloud.com/0000_oooo/cry"
    },
    {
        title: "ネ​ッ​テ​ィ​・​マ​リ​ア​・​ス​テ​ィ​ー​ブ​ン​ス",
        artist: "Miraidempa 未来電波基地",
        cover: "https://i.postimg.cc/Fz7FYfd7/image.png",
        url: "https://soundcloud.com/iliillilil/9b9a922d-4ce5-41dc-9957-fafaadb178f4"
    }
];

let currentTrack = 0;
let widget = null;
let widgetReady = false;
let currentDuration = 0;


/* =========================
   Rain
========================= */

function createRain() {
    const amount =
        window.innerWidth < 600 ? 55 : 95;

    rain.innerHTML = "";

    for (let i = 0; i < amount; i++) {
        const drop =
            document.createElement("span");

        drop.className = "raindrop";

        if (Math.random() > 0.65) {
            drop.classList.add("soft");
        }

        if (Math.random() > 0.84) {
            drop.classList.add("heavy");
        }

        drop.style.left =
            `${Math.random() * 105}%`;

        drop.style.height =
            `${12 + Math.random() * 38}px`;

        drop.style.animationDuration =
            `${0.8 + Math.random() * 1.8}s`;

        drop.style.animationDelay =
            `${Math.random() * -3}s`;

        rain.appendChild(drop);
    }
}

createRain();

window.addEventListener(
    "resize",
    createRain
);


/* =========================
   Cursor
========================= */

let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;

document.addEventListener(
    "mousemove",
    (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left =
            `${mouseX - 2}px`;

        cursor.style.top =
            `${mouseY - 2}px`;
    }
);


function animateGlow() {
    glowX +=
        (mouseX - glowX) * 0.09;

    glowY +=
        (mouseY - glowY) * 0.09;

    cursorGlow.style.left =
        `${glowX}px`;

    cursorGlow.style.top =
        `${glowY}px`;

    requestAnimationFrame(
        animateGlow
    );
}

animateGlow();


/* =========================
   Card tilt
========================= */

document.addEventListener(
    "mousemove",
    (event) => {
        if (window.innerWidth <= 600) {
            return;
        }

        const rect =
            profileCard.getBoundingClientRect();

        const centerX =
            rect.left +
            rect.width / 2;

        const centerY =
            rect.top +
            rect.height / 2;

        const x =
            (event.clientX - centerX) /
            rect.width;

        const y =
            (event.clientY - centerY) /
            rect.height;

        const rotateX =
            -y * 5;

        const rotateY =
            x * 5;

        profileCard.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    }
);


profileCard.addEventListener(
    "mouseleave",
    () => {
        profileCard.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
);


/* =========================
   Click ripple
========================= */

document.addEventListener(
    "click",
    (event) => {
        const ripple =
            document.createElement("span");

        ripple.className =
            "click-ripple";

        ripple.style.left =
            `${event.clientX}px`;

        ripple.style.top =
            `${event.clientY}px`;

        clickEffects.appendChild(
            ripple
        );

        setTimeout(
            () => ripple.remove(),
            450
        );
    }
);


/* =========================
   Animated title
========================= */

const titleFrames = [
    "",
    "m",
    "ma",
    "may",
    "maye",
    "mayee",
    "maye",
    "may",
    "ma",
    "m",
    ""
];

let titleIndex = 0;

function animateTitle() {
    document.title =
        titleFrames[titleIndex];

    titleIndex++;

    if (
        titleIndex >=
        titleFrames.length
    ) {
        titleIndex = 0;

        setTimeout(
            animateTitle,
            700
        );

        return;
    }

    setTimeout(
        animateTitle,
        170
    );
}

animateTitle();


/* =========================
   SoundCloud player
========================= */

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const remaining =
        Math.floor(seconds % 60);

    return `${minutes}:${remaining
        .toString()
        .padStart(2, "0")}`;
}


function updateTrackInterface(track) {
    trackCover.src =
        track.cover;

    trackTitle.textContent =
        track.title;

    trackArtist.textContent =
        track.artist;
}


function loadTrack(
    index,
    autoplay = false
) {
    currentTrack =
        (index + tracks.length) %
        tracks.length;

    const track =
        tracks[currentTrack];

    updateTrackInterface(
        track
    );

    progress.value = 0;

    currentTimeElement.textContent =
        "0:00";

    durationElement.textContent =
        "0:00";

    currentDuration = 0;

    if (!widgetReady) {
        return;
    }

    widget.load(
        track.url,
        {
            auto_play: autoplay,
            hide_related: true,
            show_comments: false,
            show_user: false,
            show_reposts: false,
            show_teaser: false,
            visual: false,
            buying: false,
            liking: false,
            sharing: false,
            download: false,
            show_playcount: false,
            show_artwork: false
        },
        () => {
            widget.getDuration(
                (duration) => {
                    currentDuration = duration;

                    durationElement.textContent =
                        formatTime(
                            duration / 1000
                        );
                }
            );
        }
    );
}


function togglePlay() {
    console.log("PLAY CLICK", {
        widgetReady,
        widget
    });

    if (!widgetReady) {
        console.log("Widget is not ready");
        return;
    }

    widget.isPaused((paused) => {
        console.log("Paused:", paused);

        if (paused) {
            widget.play();
        } else {
            widget.pause();
        }
    });
}


playButton.addEventListener(
    "click",
    togglePlay
);


prevTrack.addEventListener(
    "click",
    () => {
        loadTrack(
            currentTrack - 1,
            true
        );
    }
);


nextTrack.addEventListener(
    "click",
    () => {
        loadTrack(
            currentTrack + 1,
            true
        );
    }
);


/* =========================
   SoundCloud initialization
========================= */

function initSoundCloud() {
    if (
        typeof SC === "undefined" ||
        !SC.Widget
    ) {
        console.warn(
            "SoundCloud Widget API не загрузился."
        );

        return;
    }

    console.log(
        "SC READY TO INIT",
        SC,
        soundcloudWidget
    );

    soundcloudWidget.src =
        "https://w.soundcloud.com/player/?url=" +
        encodeURIComponent(tracks[0].url) +
        "&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false";

    widget =
        SC.Widget(
            soundcloudWidget
        );

    widget.bind(
        SC.Widget.Events.READY,
        () => {
            console.log("SOUNDCLOUD READY!");
            widgetReady = true;

            widget.setVolume(
                Number(volume.value) * 100
            );

            widget.getDuration(
                (duration) => {
                    currentDuration =
                        duration;

                    durationElement.textContent =
                        formatTime(
                            duration / 1000
                        );
                }
            );
        }
    );


    widget.bind(
        SC.Widget.Events.PLAY,
        () => {
            playButton.textContent =
                "Ⅱ";

            widget.getDuration(
                (duration) => {
                    currentDuration =
                        duration;

                    durationElement.textContent =
                        formatTime(
                            duration / 1000
                        );
                }
            );
        }
    );


    widget.bind(
        SC.Widget.Events.PAUSE,
        () => {
            playButton.textContent =
                "▶";
        }
    );


    widget.bind(
        SC.Widget.Events.PLAY_PROGRESS,
        (event) => {
            const position =
                event.currentPosition || 0;

            if (!currentDuration) {
                return;
            }

            progress.value =
                (position / currentDuration) * 100;

            currentTimeElement.textContent =
                formatTime(
                    position / 1000
                );
        }
    );


    widget.bind(
        SC.Widget.Events.FINISH,
        () => {
            loadTrack(
                currentTrack + 1,
                true
            );
        }
    );


    widget.bind(
        SC.Widget.Events.ERROR,
        (error) => {
            console.warn(
                "SoundCloud error:",
                error
            );

            playButton.textContent =
                "▶";
        }
    );


    loadTrack(
        0,
        false
    );
}


/* =========================
   Progress
========================= */

progress.addEventListener(
    "input",
    () => {
        if (
            !widgetReady ||
            !currentDuration
        ) {
            return;
        }

        const position =
            (Number(progress.value) / 100) *
            currentDuration;

        widget.seekTo(position);
    }
);


/* =========================
   Volume
========================= */

volume.addEventListener(
    "input",
    () => {
        if (!widgetReady) {
            return;
        }

        widget.setVolume(
            Number(volume.value) * 100
        );
    }
);

widgetReady = false;


/* =========================
   Discord / Lanyard
========================= */

const DISCORD_ID =
    "1222100487604801601";


function getLanyardImage(image, applicationId) {
    if (!image) {
        return null;
    }

    if (image.startsWith("mp:external/")) {
        return image.replace(
            "mp:external/",
            "https://media.discordapp.net/external/"
        );
    }

    if (image.startsWith("spotify:")) {
        return image.replace(
            "spotify:",
            ""
        );
    }

    if (
        applicationId &&
        !image.startsWith("http")
    ) {
        return (
            `https://cdn.discordapp.com/app-assets/` +
            `${applicationId}/${image}.png`
        );
    }

    return image;
}


async function updateDiscord() {
    try {
        const response =
            await fetch(
                `https://api.lanyard.rest/v1/users/${DISCORD_ID}`
            );

        if (!response.ok) {
            throw new Error(
                "Lanyard request failed"
            );
        }

        const result =
            await response.json();

        if (!result.success) {
            throw new Error(
                "Lanyard returned an error"
            );
        }

        const data =
            result.data;


        /* =========================
           Status
        ========================= */

        const online =
            data.discord_status !==
            "offline";

        onlineDot.style.background =
            online
                ? "#43d17a"
                : "#8b8d91";

        onlineDot.style.boxShadow =
            online
                ? "0 0 0 3px rgba(67,209,122,.14), 0 0 14px rgba(67,209,122,.4)"
                : "none";

        activityStatus.textContent =
            online
                ? `● ${data.discord_status}`
                : "● offline";


        /* =========================
           Discord avatar
        ========================= */

        if (
            data.discord_user?.avatar
        ) {
            avatar.src =
                `https://cdn.discordapp.com/avatars/` +
                `${DISCORD_ID}/` +
                `${data.discord_user.avatar}.png?size=256`;
        }


        /* =========================
           Activity
        ========================= */

        const activities =
            data.activities || [];

        const activity =
            activities.find(
                item =>
                    item.type !== 4
            );


        if (activity) {

            activityLabel.textContent =
                activity.type === 2
                    ? "Listening to music"
                    : "Currently playing";

            activityName.textContent =
                activity.name ||
                "Discord Activity";

            activityDetails.textContent =
                activity.details ||
                activity.state ||
                "";


            const image =
                getLanyardImage(
                    activity.assets?.large_image,
                    activity.application_id
                );


            if (image) {
                activityImage.src =
                    image;
            }


            // Показываем активность
            activityImage.style.display =
                "";

            activityName.style.display =
                "";

            activityDetails.style.display =
                "";

            activityLabel.style.display =
                "";

        } else {

            // Ничего не слушает и не играет.
            // Полностью очищаем старую активность.

            activityLabel.textContent =
                "";

            activityName.textContent =
                "";

            activityDetails.textContent =
                "";

            activityImage.removeAttribute(
                "src"
            );


            // Скрываем старые данные

            activityImage.style.display =
                "none";

            activityName.style.display =
                "none";

            activityDetails.style.display =
                "none";

            activityLabel.style.display =
                "none";
        }

    } catch (error) {

        console.warn(
            "Lanyard unavailable:",
            error
        );
    }
}


updateDiscord();

setInterval(
    updateDiscord,
    15000
);


/* =========================
   Start
========================= */

initSoundCloud();

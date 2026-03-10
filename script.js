const container = document.getElementById("card-grids");
const button = document.getElementById("mute-button");
const audio = document.querySelector(".background-audio");
const icon = button.querySelector("i");
console.log(container);

const platforms = [
  {
    name: "Github",
    url: "https://github.com/AlwaysNameless",
    color: "rgba(26, 26, 26, .9)",
    icon: "fa-brands fa-github",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/758340064328941629",
    color: "rgba(88, 101, 242, .9)",
    icon: "fa-brands fa-discord",
  },
  {
    name: "Twitter",
    url: "https://x.com/PassiveNameless",
    color: "rgba(0, 0, 0, .9)",
    icon: "fa-brands fa-x-twitter",
  },

  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@passivenameless",
    color: "rgba(254, 40, 88, .9)",
    icon: "fa-brands fa-tiktok",
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/user/PassiveNamelesss/",
    color: "rgba(255, 69, 0, .9)",
    icon: "fa-brands fa-reddit-alien",
  },
];

function createCard(platform) {
  return `<a style="background-color: ${platform.color}" href="${platform.url}"> <i class="${platform.icon}"> </i>
  ${platform.name}

  </a>`;
}

for (let i = 0; i < platforms.length; i++) {
  container.innerHTML += createCard(platforms[i]);
}

button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    icon.className = "fa-solid fa-volume-high";
    audio.volume = 0.3;
  } else {
    audio.pause();
    icon.className = "fa-solid fa-volume-xmark";
    console.log("clicked");
  }
});

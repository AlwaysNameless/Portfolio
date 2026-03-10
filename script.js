const container = document.getElementById("card-grids");
const button = document.getElementById("mute-button");
const audio = document.querySelector(".background-audio");
const icon = button.querySelector("i");
console.log(container);

const platforms = [
  {
    // {
    //   name: "MEDIA-LINK",
    //   url: "URL-LINK",
    //   color: "COLOR-CODE-HTML",
    //   icon: "FONTS-AWESOME",
    // },

    name: "Github",
    url: "https://github.com/AlwaysNameless",
    color: "#1a1a1a",
    icon: "fa-brands fa-github",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/758340064328941629",
    color: "#5865F2",
    icon: "fa-brands fa-discord",
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@passivenameless",
    color: "#fe2858",
    icon: "fa-brands fa-tiktok",
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

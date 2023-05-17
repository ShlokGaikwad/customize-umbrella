const uploadButton = document.querySelector(".upload-file");
const loaderContainer = document.getElementById("loader-container");
const imgUpload = document.querySelector(".img-upload");
const umbrellaImage = document.querySelector("[data-image]");
const imageContainer = document.querySelector(".image-container");
const logoContainer = document.querySelector(".logo-container");
const logoImage = document.querySelector(".image");
const inputUploadLogo = document.querySelector("#upload");
const uploadIcon = document.querySelector(".upload-icon");
const buttonName = document.getElementById("buttonName");

function showLoader() {
  loaderContainer.style.opacity = "1";
}

function hideLoader() {
  loaderContainer.style.opacity = "0";
}

(() => {
  document.body.style.backgroundColor = "rgba(52, 181, 329, 0.2)";
})();

let currentColor = "blue";
let hasLogo = true;
let load = true;
let currentLogo = "";
const umbrellas = {
  blue: {
    image: "./images/Blue umbrella.png",
    color: "#34B5E5",
    backgroundColor: "rgba(52, 181, 229, 0.3)",
  },
  yellow: {
    image: "./images/Yello umbrella.png",
    color: "#FED34E",
    backgroundColor: "rgba(254, 211, 78,0.3)",
  },
  pink: {
    image: "./images/Pink umbrella.png",
    color: "#D9378D",
    backgroundColor: "rgba(217, 55, 141,0.3)",
  },
};
const showLoading = (callback) => {
  umbrellaImage.src = "./images/loader_icon.svg";
  umbrellaImage.classList.add("loader-icon");

  imageContainer.classList.add("loader-logo");

  setTimeout(() => {
    umbrellaImage.classList.remove("loader-icon");

    uploadIcon.src = "./images/upload_icon.svg";
    uploadIcon.classList.remove("loader-icon");

    imageContainer.classList.remove("loader-logo");
    callback();
  }, 500);
  uploadIcon.classList.add("loader-icon");
  uploadIcon.src = "./images/loader_icon.svg";
};

const handleUmbrellaChange = (newColor) => {
  currentColor = newColor;
  const { image, color, backgroundColor } = umbrellas[newColor];
  umbrellaImage.src = image;
  imgUpload.style.backgroundColor = color;
  document.body.style.backgroundColor = backgroundColor;
};

const changeColorOnCheck = (color) => {
  if (color === currentColor) return;

  if (hasLogo) showLoading(() => handleUmbrellaChange(color));
  else handleUmbrellaChange(color);
};

uploadButton.addEventListener("change", () => {
  hasLogo = true;
  showLoading(() => {
    let loading = true;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(inputUploadLogo.files[0]);
    fileReader.addEventListener("load", () => {
      buttonName.innerText = inputUploadLogo.files[0].name;
      logoContainer.innerHTML = `<img src=${fileReader.result} alt"upload-image" id='uImage'>`;

      uploadIcon.src = "./images/upload_icon.svg";
    });
    umbrellaImage.src = umbrellas[currentColor].image;
  });
});

const mesImg = document.querySelectorAll("img");
const playBtn = document.querySelectorAll(".overlay");

const actionButton = document.querySelector(".btn1:nth-child(5)");
const parDefautButton = document.querySelector(".btn1:nth-child(2)");
const animationButton = document.querySelector(".btn1:nth-child(3)");
const comedieButton = document.querySelector(".btn1:nth-child(4)");
const aventureButton = document.querySelector(".btn1:nth-child(6)");
const drameButton = document.querySelector(".btn1:nth-child(7)");
const horreurButton = document.querySelector(".btn1:nth-child(8)");

// Gestionnaire pour le bouton "Horreur"
horreurButton.addEventListener("click", function () {
  mesImg.forEach((img) => {
    img.parentElement.style.display = "none";
  });
  // Afficher les images spécifiques pour Horreur
  mesImg.forEach((img) => {
    if (img.src.includes("m4.jpg") || img.src.includes("s3.jpg")) {
      img.parentElement.style.display = "block";
    }
  });
});

// Gestionnaire pour le bouton "Animation"
animationButton.addEventListener("click", function () {
  mesImg.forEach((img) => {
    img.parentElement.style.display = "none";
  });
  // Afficher les images spécifiques pour l'animation
  mesImg.forEach((img) => {
    if (img.src.includes("m6.jpeg") || img.src.includes("m2.jpg")) {
      img.parentElement.style.display = "block";
    }
  });
});

// Gestionnaire pour le bouton "Drame"
drameButton.addEventListener("click", function () {
  mesImg.forEach((img) => {
    img.parentElement.style.display = "none";
  });
  // Afficher les images spécifiques pour Drame
  mesImg.forEach((img) => {
    if (img.src.includes("m4.jpg") || img.src.includes("s5.jpg")) {
      img.parentElement.style.display = "block";
    }
  });
});

// Gestionnaire pour le bouton "Aventure"
aventureButton.addEventListener("click", function () {
  mesImg.forEach((img) => {
    img.parentElement.style.display = "none";
  });
  // Afficher les images spécifiques pour Aventure
  mesImg.forEach((img) => {
    if (
      img.src.includes("s1.jpg") ||
      img.src.includes("s2.jpg") ||
      img.src.includes("m2.jpg")
    ) {
      img.parentElement.style.display = "block";
    }
  });
});

// Gestionnaire pour le bouton "Comédie"
comedieButton.addEventListener("click", function () {
  mesImg.forEach((img) => {
    img.parentElement.style.display = "none";
  });
  // Afficher les images spécifiques pour la comédie
  mesImg.forEach((img) => {
    if (img.src.includes("m1.jpg") || img.src.includes("m5.jpg")) {
      img.parentElement.style.display = "block";
    }
  });
});

// Gestionnaire pour le bouton "Action"
actionButton.addEventListener("click", function () {
  mesImg.forEach((img, index) => {
    img.parentElement.style.display = "none";

    // Afficher les images spécifiques
    if (
      img.src.includes("m2.jpg") ||
      img.src.includes("s2.jpg") ||
      img.src.includes("s3.jpg") ||
      img.src.includes("s6.jpg")
    ) {
      img.parentElement.style.display = "block";
    }
  });
});

// Gestionnaire pour le bouton "Par Défault"
parDefautButton.addEventListener("click", function () {
  mesImg.forEach((img) => {
    img.parentElement.style.display = "block";
  });
});

// Gérer l'effet hover sur les images
for (let i = 0; i < mesImg.length; i++) {
  mesImg[i].addEventListener("mouseover", function () {
    this.style.borderRadius = "8px";
    this.style.opacity = "0.2";
    this.style.boxShadow = "0 0 20px red";
    playBtn[i].style.opacity = "1";
    playBtn[i].style.fontSize = "25px";
  });

  mesImg[i].addEventListener("mouseout", function () {
    this.style.borderRadius = "";
    this.style.opacity = "";
    this.style.boxShadow = "";
    playBtn[i].style.opacity = "";
    playBtn[i].style.fontSize = "";
  });
}

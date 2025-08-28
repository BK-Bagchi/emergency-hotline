document.getElementById("heart-count").innerHTML = 0;
document.getElementById("coin-count").innerHTML = 100;
document.getElementById("copy-count").innerHTML = 0;

const allHeart = document.getElementsByClassName("heart-icon");
Array.from(allHeart).forEach((heart) => {
  heart.addEventListener("click", () => {
    document.getElementById("heart-count").innerHTML =
      parseInt(document.getElementById("heart-count").innerHTML) + 1;
  });
});

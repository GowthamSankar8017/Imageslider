const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");

const imglist = ["one", "two", "three", "four"];

let index = 0;

btns.forEach((butt) => {
  butt.addEventListener("click", () => {
    // console.log("gowtham");
    if (butt.classList.contains("btn-left")) {
      index--;
      if (index < 0) {
        index = imglist.length - 1;
      }
      container.style.background = `url("./${imglist[index]}.jpg") center/cover fixed no-repeat`;
    } else {
      index++;
      if (index === imglist.length) {
        index = 0;
      }
      container.style.background = `url("./${imglist[index]}.jpg") center/cover fixed no-repeat`;
    }
  });
});

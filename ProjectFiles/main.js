let divCliked = document.querySelector(".other-info .box-images .img-box");
const inputFile = document.querySelector(".img-box .input-file");

divCliked.addEventListener("click", () => {
  inputFile.click();
});

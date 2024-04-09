const buttonLastPage = document.querySelector(".btn-last-page");
const menField = document.getElementById("grown-men");
const womenField = document.getElementById("grown-women");
const childrenField = document.getElementById("kids");
const numberOfDrinkers = document.getElementById("alcohol-drinkers");

buttonLastPage.addEventListener("click", e => {
  e.preventDefault();
  if (validateNumberOfPeople()) return;
  localStorage.setItem("Men", menField.value);
  localStorage.setItem("Women", womenField.value);
  localStorage.setItem("Children", childrenField.value);
  localStorage.setItem("Drinkers", numberOfDrinkers.value);
  window.location.href = "./result.html";
})

const validateNumberOfPeople = () => {
  if (!menField.value || !womenField.value || !childrenField.value || !numberOfDrinkers.value) {
    alert("Todos os campos devem estar preenchidos!");
    return true;
  }
  if (menField.value < 0 || womenField.value < 0 || childrenField.value < 0 || numberOfDrinkers.value < 0) {
    alert("Os campos não podem conter valores negativos!");
    return true;
  }

}

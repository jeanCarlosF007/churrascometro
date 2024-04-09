const buttonNextPage = document.querySelector(".btn-next-page");
const nameField = document.getElementById("user");
const mailField = document.getElementById("mail");
const postalCodeField = document.getElementById("postal");
const form = document.querySelector(".initial-fields")

nameField.value = sessionStorage.getItem("Name");
mailField.value = sessionStorage.getItem("Mail");
postalCodeField.value = sessionStorage.getItem("Postal Code");

buttonNextPage.addEventListener("click", e => {
  e.preventDefault();
  if (validateFields()) return;
  if (validatePostalCode()) return;
  removeErrorMessage();
  sessionStorage.setItem("Name", nameField.value);
  sessionStorage.setItem("Mail", mailField.value);
  sessionStorage.setItem("Postal Code", postalCodeField.value);
  localStorage.setItem("Name", nameField.value);
  localStorage.setItem("Mail", mailField.value);
  localStorage.setItem("Postal Code", postalCodeField.value);
  window.location.href = "./number-of-people.html";
})

const validateFields = () => {
  if (!nameField.value || nameField.value.length < 3) {
    removeErrorMessage();
    createErrorMessage(`O campo 'Nome' deve conter um nome com ao menos 3 caracteres!`);
    return true;
  }
  if (!mailField.value || !validateMail(mailField.value)) {
    removeErrorMessage();
    createErrorMessage(`E-mail inválido ou não preenchido!`);
    return true;
  }

  if (!postalCodeField.value) {
    removeErrorMessage();
    createErrorMessage(`Você deve preencher o CEP!`);
    return true;
  }
}

const validatePostalCode = (postalCode) => {
  const postalParameter = postalCodeField.value;
  const postalUrl = `https://viacep.com.br/ws/${postalParameter}/json/`;
  if (postalParameter.length !== 8) {
    removeErrorMessage();
    createErrorMessage(`CEP Inválido!`);
    return true;
  }
  fetch(postalUrl).then(response => {
    response.json().then(data => {
      if (data.erro) {
        removeErrorMessage();
        createErrorMessage(`CEP Inválido!`);
        return true;
      }
      localStorage.setItem("Adress", `Street : ${data.logradouro} | Neighbour: ${data.bairro} | City/State: ${data.localidade}/${data.uf}`);
    });
  })
}

const validateMail = (email) => {
  const nameArray = email.split('');
  const endMailArray = nameArray.splice(-4, 4);
  const endMailString = endMailArray.join('');
  const endingDotCom = endMailString === ".com";
  const endingDotBr = endMailString === "m.br";
  const validationOne = nameArray.filter(el => el === "@");
  const validationTwo = endingDotCom || endingDotBr;
  return validationOne.length === 1 && validationTwo;
}

const createErrorMessage = (message) => {
  const errorMessage = document.createElement('p');
  errorMessage.classList.add("error-message");
  errorMessage.id = "errorId";
  errorMessage.innerText = message;
  form.appendChild(errorMessage);
}

const removeErrorMessage = () => {
  let toRemove = document.querySelector(".error-message");
  if (toRemove === null) return;
  if (toRemove.parentNode) {
    toRemove.parentElement.removeChild(toRemove);
  }
}

const loginForm = document.querySelector("#login-form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const itemList = document.querySelector("#items");

// creating li item using function

// Event Listener on form
loginForm.addEventListener("submit", onSubmit);
/// on Submit
function onSubmit(e) {
  e.preventDefault();
  const obj = {};
  obj.name = inputName.value;
  obj.email = inputEmail.value;
  obj.phone = inputPhone.value;

  // li: creating li element
  function li() {
    let li = document.createElement("li");
    li.className = "item-list";

    li.appendChild(
      document.createTextNode(`${obj.name} ${obj.email} ${obj.phone}`)
    );
    itemList.appendChild(li);
  }
  function locStorage() {
    obj.name = inputName.value;
    obj.email = inputEmail.value;
    obj.phone = inputPhone.value;
    localStorage.setItem(obj.email, JSON.stringify(obj));
  }

  li();
  locStorage();
}

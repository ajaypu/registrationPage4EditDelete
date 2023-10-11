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
    let delBtn = document.createElement("button");
    delBtn.className = "item-del";

    li.appendChild(
      document.createTextNode(`${obj.name} ${obj.email} ${obj.phone}`)
    );
    li.appendChild(delBtn);
    delBtn.appendChild(document.createTextNode("Delete"));
    itemList.appendChild(li);
    delBtn.addEventListener("click", DelItem);
    function DelItem(e) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
      localStorage.removeItem(obj.email);
    }
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

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
    // Creating Edit element
    let edtBtn = document.createElement("button");
    edtBtn.className = "item-edt";

    li.appendChild(
      document.createTextNode(`${obj.name} ${obj.email} ${obj.phone}`)
    );
    li.appendChild(delBtn);
    li.appendChild(edtBtn);
    delBtn.appendChild(document.createTextNode("Delete"));
    edtBtn.appendChild(document.createTextNode("Edit"));
    itemList.appendChild(li);
    delBtn.addEventListener("click", DelItem);
    edtBtn.addEventListener("click", edtItem);
    function DelItem(e) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
      localStorage.removeItem(obj.email);
    }
  }
  function edtItem(e) {
    if (localStorage.getItem(obj.email)) {
      if (e.target.classList.contains("item-edt") !== -1) {
        const edtData = JSON.parse(localStorage.getItem(obj.email));
        const li = e.target.parentElement;
        inputName.value = edtData.name;
        inputEmail.email = edtData.email;
        inputPhone.phone = edtData.phone;
        itemList.removeChild(li);
        localStorage.removeItem(obj.email);
      }
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

function generateList(data) {
  let list = document.createElement("ul");
  const body = document.body;
  body.append(list);

  for (item in data) {
    const listItem = document.createElement("li");
    listItem.append(`${item}: ${data[item]}`);
    list.append(listItem);
  }
}

if (!localStorage.formData) {
  alert("User didn't entered data");
} else {
  const formData = JSON.parse(localStorage.getItem("formData"));
  generateList(formData);
}

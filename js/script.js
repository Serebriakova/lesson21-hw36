(function () { 
const form = document.getElementById("form");
// const form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
event.preventDefault();
let inputs = event.target.querySelectorAll("input, select, textarea");
// console.log(inputs);
const data = {};

for (item of inputs) {
    data[item.name] = item.value;
}

localStorage.setItem("formData", JSON.stringify(data));
console.log(data);
}
);


document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.formData) return;
    const formData = JSON.parse(localStorage.getItem("formData"));

    form.querySelectorAll("input, select, textarea")
        .forEach(item => {
           item.value = formData[item.name];
    })
});
})();


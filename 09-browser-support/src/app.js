// import "core-js/stable";
// import "regenerator-runtime/runtime";

const button = document.querySelector("button");
const textPagargraph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textPagargraph.textContent;
  const promise = new Promise();
  console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  } else {
    alert("feature not available, please copy manually!");
  }
});

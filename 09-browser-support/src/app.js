const button = document.querySelector("button");
const textPagargraph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textPagargraph.textContent;
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

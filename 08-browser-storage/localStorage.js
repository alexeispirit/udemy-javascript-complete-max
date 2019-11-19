const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";

storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("uid", userId);
});

retrBtn.addEventListener("click", () => {
  const extractedId = localStorage.getItem("uid");
  if (extractedId) {
    console.log(`Got the id: ${extractedId}`);
  } else {
    console.log("Could not find id");
  }
});

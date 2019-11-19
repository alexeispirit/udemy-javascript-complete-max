const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = { name: "Alex", age: 30 };

let db;
const dbRequest = indexedDB.open("StoregeDummy", 1);

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({
      id: "p1",
      title: "First product",
      price: 12.99,
      tags: ["Expensive", "Luxury"]
    });
  };
};

dbRequest.onsuccess = function(event) {
  db = event.target.result;
};

dbRequest.onerror = function(error) {
  console.log(error);
};

storeBtn.addEventListener("click", () => {
  if (db) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({
      id: "p2",
      title: "First product",
      price: 12.99,
      tags: ["Expensive", "Luxury"]
    });
  }
});

retrBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productsStore.get("p2");

  request.onsuccess = function() {
    console.log(request.result);
  };
});

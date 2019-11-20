class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is not available in your browser - please use a modern browser or enter your address manually"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      successResult => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude
        };
        console.log(coordinates);
      },
      error => {
        alert(
          "Could not locate you unfortunately. Please enter an address manually"
        );
      }
    );
  }

  findAddressHandler() {}
}

new PlaceFinder();

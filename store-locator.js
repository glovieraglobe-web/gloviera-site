const CONFIGURATION = {
  locations: [
    {
      title: "GLOVI\u00c9RA UNISEX SALON",
      address1: "SCO NO.3 , Near Auston Gym, opposite to Gulmohar Complex,",
      address2: "Kharar, Punjab, India",
      coords: { lat: 30.7405544, lng: 76.6732201 },
      placeId: "ChIJsZrHD8HvDzkRCTltz-Tzgsk",
      actions: [
        {
          label: "Book appointment",
          defaultUrl: "https://www.gloviera.com"
        }
      ]
    }
  ],
  mapOptions: {
    center: { lat: 38.0, lng: -100.0 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 4,
    zoomControl: true,
    maxZoom: 17,
    mapId: ""
  },
  mapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  capabilities: {
    input: true,
    autocomplete: true,
    directions: false,
    distanceMatrix: true,
    details: false,
    actions: true
  }
};

window.GLOVIERA_STORE_LOCATOR = CONFIGURATION;
window.CONFIGURATION = CONFIGURATION;

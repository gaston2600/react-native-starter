export const PHONE_REGEXP = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
export const GOOGLE_MAPS_APIKEY = "AIzaSyBLgrrbyKrR8ueJbQZNWRQXWT5L3cnlYbM";
export const TRIP_STATUS = [
  { index: 0, name: "Request", value: "request" },
  { index: 1, name: "Draft", value: "draft" },
  { index: 2, name: "Accepted", value: "accepted" },
  { index: 3, name: "In progress", value: "in_progress" },
  { index: 4, name: "Finished", value: "finished" },
  { index: 5, name: "Canceled by client", value: "canceled_by_client" },
  { index: 6, name: "Canceled by driver", value: "canceled_by_driver" },
  { index: 7, name: "Canceled by you", value: "canceled_by_you" },
  { index: 8, name: "Canceled by administration", value: "canceled_by_admin" },
]
export const COLORS_LIST = [
  {
    "color": "Black",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 255, 255, 1],
      "hex": "#000"
    }
  },
  {
    "color": "White",
    "category": "value",
    "code": {
      "rgba": [0, 0, 0, 1],
      "hex": "#DDD"
    }
  },
  {
    "color": "Red",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 0, 0, 1],
      "hex": "#f60404"
    }
  },
  {
    "color": "Blue",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [0, 0, 255, 1],
      "hex": "#00F"
    }
  },
  {
    "color": "Yellow",
    "category": "hue",
    "type": "primary",
    "code": {
      "rgba": [255, 255, 0, 1],
      "hex": "#FF0"
    }
  },
  {
    "color": "Green",
    "category": "hue",
    "type": "secondary",
    "code": {
      "rgba": [0, 255, 0, 1],
      "hex": "#0F0"
    }
  },
]
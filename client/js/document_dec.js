// declare all the element variables the are needed for the DOM
var map;

var fruitTreeLocations = [];
var comments = [];
var likes = [];
var fruitTreeTypes = [];
var userCoords = { lat: 0, lng: 0 };
var markers = [];
var infoObj = [];

<<<<<<< HEAD

var treeIconMap = [
  {
    cherry:
      'https://icons.iconarchive.com/icons/icons-land/3d-food/32/Fruit-Cherry-icon.png',
    apple:
      'https://icons.iconarchive.com/icons/custom-icon-design/flatastic-7/24/Apple-icon.png',
    pear: 'https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/24/32351-pear-icon.png',
  },
];

=======
>>>>>>> b3bdd70 (larger fruit icons)
var treeIconMap = [{
   cherry: "https://icons.iconarchive.com/icons/icons-land/3d-food/32/Fruit-Cherry-icon.png",
    apple:"https://icons.iconarchive.com/icons/bingxueling/fruit-vegetables/48/apple-red-icon.png",
    pear:"https://icons.iconarchive.com/icons/google/noto-emoji-food-drink/24/32351-pear-icon.png",
}]
<<<<<<< HEAD

=======
>>>>>>> b3bdd70 (larger fruit icons)

const mapDiv = document.querySelector('#map');
const fruitTreeSelectMap = document.querySelector('.fruit-tree-select-map');

const findMeBtn = document.querySelector('#find-me-btn');

// Get location form
const locationForm = document.querySelector('#location-form');

const locationInput = document.querySelector('#location-input');

//Location form outputs
const formattedAddressDiv = document.querySelector('#formatted-address');
const addressComponentsDiv = document.querySelector('#address-components');
const geometryDiv = document.querySelector('#geometry');

//GeoFindMe
const statusP = document.querySelector('#status');
const userCoordsP = document.querySelector('#user-coords');

const fruitTreeListDiv = document.querySelector('.fruit-tree-list-container');
const fruitList = document.querySelector('.fruit-tree-list');

const createFruitTreeContainer = document.querySelector(
  '.create-fruit-tree-container'
);

const addFruitForm = document.querySelector('.add-fruit-form');
const fruitTreeSelect = document.querySelector('.fruit-tree-select');
const fruitDetails = document.querySelector('#fruit-details');
const fruitTreeSubmit = document.querySelector('.fruit-tree-submit');
const userLat = document.querySelector('.user-lat');
const userLng = document.querySelector('.user-lng');

function initMap() {
  let mapOptions = {
    center: { lat: -37.8136, lng: 144.9631 },
    zoom: 8,
  };

  map = new google.maps.Map(mapDiv, mapOptions);
}

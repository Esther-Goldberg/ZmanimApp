"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var locations = {
  "Brooklyn": {
    "Latitude": 40.67,
    "Longitude": -73.94
  },
  "Jerusalem": {
    "Latitude": 31.76,
    "Longitude": 35.21
  },
  "Lakewood": {
    "Latitude": 40.08,
    "Longitude": -74.20
  },
  "Los Angeles": {
    "Latitude": 34.05,
    "Longitude": -118.24
  },
  "Miami": {
    "Latitude": 25.76,
    "Longitude": -80.19
  }
};

window.onload = function () {
  var location_div = document.getElementById("locations");
  var tabindex = 0;

  for (var _i = 0, _Object$entries = Object.entries(locations); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    var newHTML = "<div tabindex=".concat(tabindex, " class= 'kai-tl focusable' id='").concat(key.replace(/\s/g, "-"), "'> <span class='kai-tl-primary'> ").concat(key, " </span> </div> <hr/>");
    location_div.innerHTML += newHTML;
    tabindex++;
  }

  if (localStorage.getItem('location') != null) {
    var default_location = document.getElementById(localStorage.getItem('location').replace(/\s/g, "-"));
    default_location.focus();
  } else {
    document.getElementById("Jerusalem").focus();
  }
};

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
  switch (e.key) {
    case 'Enter':
      var element = document.activeElement;
      var text = element.textContent.trim();

      if (locations.hasOwnProperty(text)) {
        localStorage.setItem('location', text);
        localStorage.setItem('latitude', locations[text]["Latitude"]);
        localStorage.setItem('longitude', locations[text]["Longitude"]);
        window.location.href = "zmanimlist.html";
      }

      break;

    case 'ArrowUp':
      nav(-1);
      break;

    case 'ArrowDown':
      nav(1);
      break;

    case 'ArrowRight':
      nav(1);
      break;

    case 'ArrowLeft':
      nav(-1);
      break;

    default:
      break;
  }
}

function nav(move) {
  var currentIndex = document.activeElement.tabIndex;
  var next = currentIndex + move;
  var items = document.querySelectorAll('.focusable');
  var targetElement = items[next];
  targetElement.focus();
}
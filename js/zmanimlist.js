"use strict";

var date;
var zmanimCalendar = new KosherZmanim.ZmanimCalendar();
var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
var zmanim_location = localStorage.getItem('location');

window.onload = function () {
  var header = document.getElementById('header');
  header.innerText = zmanim_location;
  date = new Date();
};

function show_zmanim() {
  var date_formatted = date.toLocaleDateString("en-US");
}

document.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
  switch (e.key) {
    case 'Enter':
      window.location.href = "index.html";
      break;

    case 'SoftLeft':
      date.setDate(date.getDate() - 1);
      break;

    case 'SoftRight':
      date.setDate(date.getDate() + 1);
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
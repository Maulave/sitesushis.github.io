"use strict";

var btnMenu = document.getElementById('btnMenu');
var btnFullMenu = document.getElementById('fullMenu');
var btnCloseMenu = document.getElementById('closeFullMenu');
btnMenu.addEventListener('click', function () {
  btnFullMenu.style.display = 'flex';
});
btnCloseMenu.addEventListener('click', function () {
  btnFullMenu.style.display = 'none';
});
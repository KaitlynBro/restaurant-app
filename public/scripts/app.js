'use strict';

//smooth scroll for menu section
$('#menuButton').on('click', function () {
    $('html,body').animate({
        scrollTop: $('.menuContainer').offset().top }, 'slow');
});

//smooth scroll for menu section
$('#seeMoreButton').on('click', function () {
    $('html,body').animate({
        scrollTop: $('.menuContainer').offset().top }, 'slow');
});

//smooth scroll for gallery section
$('#galleryButton').on('click', function () {
    $('html,body').animate({
        scrollTop: $('#galleryContainer').offset().top }, 'slow');
});

//smooth scroll for specials section
$('#specialsButton').on('click', function () {
    $('html,body').animate({
        scrollTop: $('#specialsContainer').offset().top }, 'slow');
});

//smooth scroll for contact section
$('#contactButton').on('click', function () {
    $('html,body').animate({
        scrollTop: $('#contactContainer').offset().top }, 'slow');
});

// //preventing page refresh on submit
$('#submitButton').on('submit', function (e) {
    e.preventDefault();
});

var monday = document.getElementById('monday');
var tuesday = document.getElementById('tuesday');
var wednesday = document.getElementById('wednesday');
var thursday = document.getElementById('thursday');
var saturday = document.getElementById('saturday');
var sunday = document.getElementById('sunday');
var mondayImage = document.getElementById('pic1');

$(monday).on('click', function () {
    document.getElementById('pic6').style.display = 'none';
    document.getElementById('pic5').style.display = 'none';
    document.getElementById('pic4').style.display = 'none';
    document.getElementById('pic3').style.display = 'none';
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic1').style.display = 'block';
    $('#specialsText').empty();
    document.getElementById('specialsText').append('$10 for Lightly Fried White Fish with Avocado Mash and Potato Wedges with Creamy Ranch Dip');
});
$(tuesday).on('click', function () {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic3').style.display = 'none';
    document.getElementById('pic4').style.display = 'none';
    document.getElementById('pic5').style.display = 'none';
    document.getElementById('pic6').style.display = 'none';
    document.getElementById('pic2').style.display = 'block';
    $('#specialsText').empty();
    document.getElementById('specialsText').append('$15 for Peppered Salmon and Corn');
});
$(wednesday).on('click', function () {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic4').style.display = 'none';
    document.getElementById('pic5').style.display = 'none';
    document.getElementById('pic6').style.display = 'none';
    document.getElementById('pic3').style.display = 'block';
    $('#specialsText').empty();
    document.getElementById('specialsText').append('$4 for 1 Pint of Hollano Beer');
});
$(thursday).on('click', function () {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic3').style.display = 'none';
    document.getElementById('pic5').style.display = 'none';
    document.getElementById('pic6').style.display = 'none';
    document.getElementById('pic4').style.display = 'block';
    $('#specialsText').empty();
    document.getElementById('specialsText').append('$10 for Salmon Sushi, Soy Sauce Drizzle, and Cavier ');
});
$(saturday).on('click', function () {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic3').style.display = 'none';
    document.getElementById('pic4').style.display = 'none';
    document.getElementById('pic6').style.display = 'none';
    document.getElementById('pic5').style.display = 'block';
    $('#specialsText').empty();
    document.getElementById('specialsText').append('$8 for any Appetizer (pictured above: Deep Fried Plaintain Bananas wrapped in Zuchini');
});
$(sunday).on('click', function () {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic3').style.display = 'none';
    document.getElementById('pic4').style.display = 'none';
    document.getElementById('pic5').style.display = 'none';
    document.getElementById('pic6').style.display = 'block';
    $('#specialsText').empty();
    document.getElementById('specialsText').append('$5 for Any Dessert (pictured above: Frozen Fruit Cheesecake)');
});

/*need to do
1. find DRY way to apply smooth scroll on multiple buttons
2. find DRY way to display / hide elements in gallery images section
4. i want to remove all jquery and use only vanilla js
*/
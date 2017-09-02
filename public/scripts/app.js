"use strict";

var tastyImages = {
    Monday: "../../assets/monday.png",
    Tuesday: "assets/salmon.png",
    Wednesday: "assets/beer.png",
    Thursday: "assets/salmon.png",
    Saturday: "assets/zuchini.png",
    Sunday: "assets/cheesecake.png"
};

var mondayImage = tastyImages.Monday;
var tuesdayImage = tastyImages.Tuesday;
var wednesdayImage = tastyImages.Wednesday;
var thursdayImage = tastyImages.Thursday;
var saturdayImage = tastyImages.Saturday;
var sundayImage = tastyImages.Sunday;

function getSelectedDay() {
    $('.galleryButton').on('click', function (e) {
        e.preventDefault();
        document.getElementById('specialsPictures').innerHTML = $(this).val();
    });
}

$('.galleryButton').on('click', function (e) {
    e.preventDefault();
    var chosenDay = $(this).val();
    $('.todaysSpecial').attr('src', tastyImages[chosenDay]);
    $('#specialsPictures').empty().append("<img src='" + tastyImages[chosenDay] + "'/>");
});

// //smooth scroll for menu section
// $('#menuButton').on('click', function() {
//     $('html,body').animate({
//         scrollTop: $('.menuContainer').offset().top},
//         'slow');
// });

// //smooth scroll for menu section
// $('#seeMoreButton').on('click', function() {
//     $('html,body').animate({
//         scrollTop: $('.menuContainer').offset().top},
//         'slow');
// });

// //smooth scroll for gallery section
// $('#galleryButton').on('click', function() {
//     $('html,body').animate({
//         scrollTop: $('#galleryContainer').offset().top},
//         'slow');
// });

// //smooth scroll for specials section
// $('#specialsButton').on('click', function() {
//     $('html,body').animate({
//         scrollTop: $('#specialsContainer').offset().top},
//         'slow');
// });

// //smooth scroll for contact section
// $('#contactButton').on('click', function() {
//     $('html,body').animate({
//         scrollTop: $('#contactContainer').offset().top},
//         'slow');
// });

// // //preventing page refresh on submit
// $('#submitButton').on('submit', function(e) {
//     e.preventDefault();
// })


// /*need to do
// 1. find DRY way to apply smooth scroll on multiple buttons
// 2. find DRY way to display / hide elements in gallery images section
// 4. i want to remove all jquery and use only vanilla js
// */
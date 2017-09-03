const tastyImages = {
    Monday: "../../assets/monday.png",
    Tuesday: "assets/salmon.png",
    Wednesday: "assets/beer.png",
    Thursday: "assets/sushi.png",
    Saturday: "assets/zuchini.png",
    Sunday: "assets/cheesecake.png"
};

let mondayImage = tastyImages.Monday;
let tuesdayImage = tastyImages.Tuesday;
let wednesdayImage = tastyImages.Wednesday;
let thursdayImage = tastyImages.Thursday;
let saturdayImage = tastyImages.Saturday;
let sundayImage = tastyImages.Sunday;

let galleryButtons = document.getElementsByClassName('galleryButton');

//creating function to be passed down and executed into for loop 
function clickedOn() {
  let chosenDay = this.value;
  console.log('clickedon function works' + this);
  $('todaysSpecial').attr('src', tastyImages[chosenDay]);
  document.getElementById('specialsPictures').innerHTML = `<img src='${tastyImages[chosenDay]}'/>`;
};

//looping over gallery buttons, passing down clickedOn function
for (var i = 0; i < galleryButtons.length; i++) {
  galleryButtons[i].addEventListener('click', clickedOn);
}


// $('.galleryButton').on('click', function(e){
//     e.preventDefault();
//     let chosenDay = $(this).val();
//     $('.todaysSpecial').attr('src', tastyImages[chosenDay]);
//     $('#specialsPictures').empty().append(`<img src='${tastyImages[chosenDay]}'/>`);
// });

//smooth scroll for menu section
$('#menuButton').on('click', function() {
    $('html,body').animate({
        scrollTop: $('.menuContainer').offset().top},
        'slow');
});

//smooth scroll for menu section
$('#seeMoreButton').on('click', function() {
    $('html,body').animate({
        scrollTop: $('.menuContainer').offset().top},
        'slow');
});

//smooth scroll for gallery section
$('#galleryButton').on('click', function() {
    $('html,body').animate({
        scrollTop: $('#galleryContainer').offset().top},
        'slow');
});

//smooth scroll for specials section
$('#specialsButton').on('click', function() {
    $('html,body').animate({
        scrollTop: $('#specialsContainer').offset().top},
        'slow');
});

//smooth scroll for contact section
$('#contactButton').on('click', function() {
    $('html,body').animate({
        scrollTop: $('#contactContainer').offset().top},
        'slow');
});

// //preventing page refresh on submit
$('#submitButton').on('submit', function(e) {
    e.preventDefault();
});


// /*need to do
// 1. find DRY way to apply smooth scroll on multiple buttons
// 4. i want to remove all jquery and use only vanilla js
// */


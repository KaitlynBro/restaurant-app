//storing specials gallery images into object
const tastyImages = {
    Monday: "../../assets/monday.png",
    Tuesday: "assets/salmon.png",
    Wednesday: "assets/beer.png",
    Thursday: "assets/sushi.png",
    Saturday: "assets/zuchini.png",
    Sunday: "assets/cheesecake.png"
};

//storing above objects values into variables
let mondayImage = tastyImages.Monday;
let tuesdayImage = tastyImages.Tuesday;
let wednesdayImage = tastyImages.Wednesday;
let thursdayImage = tastyImages.Thursday;
let saturdayImage = tastyImages.Saturday;
let sundayImage = tastyImages.Sunday;
let galleryButtons = document.getElementsByClassName('galleryButton');

//creating function to be passed down and executed into for loop on click event
function galleryButtonClickedOn() {
  let chosenDay = this.value;
  document.getElementById('specialsPictures').innerHTML = `<img src='${tastyImages[chosenDay]}'/>`;
};

//looping over gallery buttons, passing down clickedOn function to be executed on click event
for (var i = 0; i < galleryButtons.length; i++) {
  galleryButtons[i].addEventListener('click', galleryButtonClickedOn);
}
 
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

// smooth scroll for specials section
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

//preventing page refresh on submit
$('#submitButton').on('submit', function(e) {
    e.preventDefault();
});

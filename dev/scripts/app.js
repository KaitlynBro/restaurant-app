const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const saturday = document.getElementById('saturday');
const sunday = document.getElementById('sunday');
const specialsSection = document.getElementById('specialsPictures');
const galleryButtons = document.getElementsByClassName('galleryButton');
const galleryImages = document.getElementsByClassName('specialsImage');


//first method tried - cannot read property style of null
monday.addEventListener('click', function() {
    function OnClick() {
        specialsSection.innerHTML = '';
    }
    function showContent() {
        document.getElementById('pic1').style.display = 'block';
    }
})

//second method tried
//loop over buttons on click, check what button was pressed, find the matching information (ie. if monday was pressed, find monday image), empty container if any current info is there, append new info
for (var i = 0 ; i < galleryButtons.length; i++) {
   galleryButtons[i].addEventListener('click', function() {
        console.log(galleryImages)
   }); 
}
 

 

//third method, switched the event listener and the for loop around - said add event listener not a function
galleryButtons.addEventListener('click', function() {
    for (var i = 0; i < galleryButtons.length; i++) {
        console.log(this.value)
    }
})

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
})


/*need to do
1. find DRY way to apply smooth scroll on multiple buttons
2. find DRY way to display / hide elements in gallery images section
4. i want to remove all jquery and use only vanilla js
*/


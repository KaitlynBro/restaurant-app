
//smooth scroll for menu section
$('#menuButton').on('click', function() {
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

//preventing page refresh on submit
$('#submitButton').click(function(e) {
    e.preventDefault();
});

const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const saturday = document.getElementById('saturday');
const sunday = document.getElementById('sunday');


$(monday).on('click', function() {
    $('specialsGallery').empty();
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic1').style.display = 'block';
})
$(tuesday).on('click', function() {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic3').style.display = 'none';
    document.getElementById('pic2').style.display = 'block';
})
$(wednesday).on('click', function() {
    document.getElementById('pic1').style.display = 'none';
    document.getElementById('pic2').style.display = 'none';
    document.getElementById('pic3').style.display = 'block';
})
$



/*need to do
1. find DRY way to apply smooth scroll on multiple buttons
2. find DRY way to display / hide elements in gallery images section
*/







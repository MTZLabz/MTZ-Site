$('.slider-storie').slick({
    dots: true,
    infinite: false,
    speed: 0,
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});

const button = document.querySelector('button');
function ocultaForm(char) {
    console.log(char);
}
function Checkfiles(){
    var fup = document.getElementById('filename');
    var fileName = fup.value;
    var ext = fileName.substring(fileName.lastIndexOf('.') + 1);

    if(ext =="jpeg" || ext=="png"){
        return true;
    }
    else{
        return false;
    }
}
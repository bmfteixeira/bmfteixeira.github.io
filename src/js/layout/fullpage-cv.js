import $ from 'jquery';
import '../lib/slick.js';

export default (() => {
  let globalScroll; 

 const slick = $('.slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    centerMode: true,
    infinite: false,
    vertical: true,
    adaptiveHeight: true
   });
})();
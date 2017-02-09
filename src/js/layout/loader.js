import '../lib/typed.js';
import 'gsap';
import $ from 'jquery';

export default (() => {
  const loader = $('.loader');
  const loaderText = $('.loader__text');
  const loaderCursor = $('.typed-cursor');

  const aboutW = $('.about-wrapper');
  const aboutAvatar = $('.about__avatar');
  const aboutIntro = $('.about__intro');
  const aboutTitle = $('.about h1');
  const aboutSubTitle = $('.about h2');

  const loadingTL = new TimelineMax({
    paused: true,
  });

  $(loaderText).typed({
    strings: ["h^150el^250lo ^400wo^300rld^650."],
    typeSpeed: 100,
    onStringTyped: function() { 
      if($(loaderText).text() === 'hello world.') {
        loadingTL.play();   
      }
    }
  });

  loadingTL
  .set([aboutAvatar, aboutTitle, aboutSubTitle], {
    opacity: 0,
  })
  .set(aboutAvatar, {
    y:30,
  })
  .set([aboutTitle, aboutSubTitle], {
    y:20,
  })
  .set(aboutW, {
    x:'100%',
    opacity: 0,
    boxShadow:'-9px 6px 30px rgba(0, 0, 0, 0.0)',
    borderLeft: '1px solid rgba(0, 0, 0, 0.0)',
  })
  .to(loaderCursor, 0, {
    display: 'none',
  })
  .to(loader, .4, {
    opacity: 0,
    display: 'none',
  }, "+=0.4")
  .to(aboutW, .5, {
    x:'0%',
    opacity: 1,
    ease: Power3.easeOut,
  },'+=0.2')
  .to(aboutW, 0.2, {
    borderLeft: '1px solid rgba(0, 0, 0, 0.4)',
    boxShadow:'-9px 6px 30px rgba(0, 0, 0, 0.3)',
    ease: Power3.ease,
  })
  .to(aboutAvatar, .3, {
    y: 0,
    opacity: 1,
    ease: Power2.ease,
    onStart: function() {
      $(aboutIntro).typed({
        strings: ["H^20ello. ^120I'^30m"],
        typeSpeed: 30,
      });
    }
  })
  .to(aboutTitle, .3, {
    y: 0,
    opacity: 1,
    color: '#627B8B',
    ease: Power2.easeOut,
    onStart: function() {
      $('.background').addClass('no-gray');
      $(aboutAvatar).addClass('no-gray');
    }
  },'+=0.6')
  .to(aboutSubTitle, .3, {
    y: 0,
    opacity: 1,
    ease: Power2.easeOut,
  });

})();
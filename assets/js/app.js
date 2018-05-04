'use strict';

Noty.overrideDefaults({
  layout: 'topCenter',
  theme: 'bootstrap-v4',
  timeout: 5000
});

document.addEventListener('DOMContentLoaded', function () {

  // Detech mobile

  function detectMob() {
    if (navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  }


  // Scrolling

  var shadowedEl = document.getElementById('shadowed');
  var navbarEl = document.getElementById('navbar');
  var navbarBurger = document.getElementById('navbarBurger');
  var NAVBAR_HEIGHT = 52;
  var THRESHOLD = 160;
  var navbarOpen = false;
  var horizon = NAVBAR_HEIGHT;
  var whereYouStoppedScrolling = 0;
  var scrollFactor = 0;
  var currentTranslate = 0;

  navbarBurger.addEventListener('click', function (el) {
    navbarOpen = !navbarOpen;
    shadowedEl.style.display = shadowedEl.style.display == 'none' ? 'block' : 'none';
  });


  if (detectMob()) {

    function upOrDown(lastY, currentY) {
      if (currentY >= lastY) {
        return goingDown(currentY);
      }
      return goingUp(currentY);
    }

    function goingDown(currentY) {
      if (!navbarOpen) {
        var trigger = NAVBAR_HEIGHT;
        whereYouStoppedScrolling = currentY;

        if (currentY > horizon) {
          horizon = currentY;
        }

        translateHeader(currentY, false);
      }
    }

    function goingUp(currentY) {
      if (!navbarOpen) {
        var trigger = 0;

        if (currentY < whereYouStoppedScrolling - NAVBAR_HEIGHT) {
          horizon = currentY + NAVBAR_HEIGHT;
        }

        translateHeader(currentY, true);
      }
    }

    function constrainDelta(delta) {
      return Math.max(0, Math.min(delta, NAVBAR_HEIGHT));
    }

    function translateHeader(currentY, upwards) {
      // let topTranslateValue;
      var translateValue = void 0;

      if (upwards && currentTranslate == 0) {
        translateValue = 0;
      } else if (currentY <= NAVBAR_HEIGHT) {
        translateValue = currentY * -1;
      } else {
        var delta = constrainDelta(Math.abs(currentY - horizon));
        translateValue = delta - NAVBAR_HEIGHT;
      }

      if (translateValue != currentTranslate) {
        var navbarStyle = '\n        transform: translateY(' + translateValue + 'px);\n      ';
        currentTranslate = translateValue;
        navbarEl.setAttribute('style', navbarStyle);
      }

      if (currentY > THRESHOLD * 2) {
        scrollFactor = 1;
      } else if (currentY > THRESHOLD) {
        scrollFactor = (currentY - THRESHOLD) / THRESHOLD;
      } else {
        scrollFactor = 0;
      }

      var translateFactor = 1 + translateValue / NAVBAR_HEIGHT;
    }

    translateHeader(window.scrollY, false);

    var ticking = false;
    var lastY = 0;

    window.addEventListener('scroll', function () {
      var currentY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          upOrDown(lastY, currentY);
          ticking = false;
          lastY = currentY;
        });
      }

      ticking = true;
    });
  }


  // Dropdowns

  var $metalinks = getAll('#meta a');

  if ($metalinks.length > 0) {
    $metalinks.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.preventDefault();
        var target = $el.getAttribute('href');
        var $target = document.getElementById(target.substring(1));
        $target.scrollIntoView(true);
        // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
        return false;
      });
    });
  }

  // Dropdowns

  var $dropdowns = getAll('.dropdown:not(.is-hoverable)');

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation();
        $el.classList.toggle('is-active');
      });
    });

    document.addEventListener('click', function (event) {
      closeDropdowns();
    });
  }

  function closeDropdowns() {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Toggles

  var $burgers = getAll('.navbar-burger');

  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Modals

  var rootEl = document.documentElement;
  var $modals = getAll('.modal');
  var $modalButtons = getAll('.modal-button');
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        rootEl.classList.add('is-clipped');
        $target.classList.add('is-active');
      });
    });
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals();
      });
    });
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event;
    if (e.keyCode === 27) {
      closeModals();
      closeDropdowns();
    }
  });

  function closeModals() {
    rootEl.classList.remove('is-clipped');
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active');
    });
  }

  // Functions

  function getAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  }

  // Heading anchor

  var contentEl = document.getElementsByClassName('content');
  for (var el of contentEl) {
    [].forEach.call(el.querySelectorAll('h1, h2, h3, h4, h5, h6'), (function (head) {
      head.innerHTML = `
        <a href="#${head.id}">
          ${toHashTag(head.tagName.substring(1))}
        </a>
        <span>${head.innerText}</span>
      `;
    }));
  }

  function toHashTag(num) {
    var hashTags = '';
    for(var i = 0; i < num; i++) {
      hashTags += '#';
    }
    return hashTags;
  }

  // Add external link to _blank

  var links = document.links;
  for (var i = 0, linksLength = links.length; i < linksLength; i++) {
    if (links[i].hostname != window.location.hostname && !links[i].classList.contains('non-blank')) {
      links[i].target = '_blank';
    }
  }

  // Add sub doc

  var docs = document.getElementById('docs');
  if (docs) {
    for (var subDocs of document.getElementsByClassName('sub-docs')) {
      for (var h2 of docs.getElementsByTagName('h2')) {
        subDocs.innerHTML += `<li><a href="#${h2.id}">${h2.innerText.substring(3)}</a></li>`;
      }
    }
  }

  // JavaScript test script

  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
  }

  function jsonToQueryString(json) {
    return '?' +
      Object.keys(json).map(function(key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key]);
      }).join('&');
  }

  var messageCoppied = [
    'Ctrl + C 😆',
    'Copy is how we learning 🤓',
    'Kopi dessu! 😊',
    '01100011 01101111 01110000 01111001',
    `alert('Copied');`,
    'navigator.clipboard.writeText()',
    'ลอง "shift + insert" ดูสิ 👍',
    'ก็อปปี้วันนี้ เป็นโปรแกรมเมอร์ในวันหน้า 🤪',
    'เจ็บๆๆๆ กดคัดลอกเบาๆหน่อยสิ!!! 🤕',
    'คัดลอกได้ แต่หัดเขียนเองด้วยนะจ๊ะ! 😉',
    'ในห้องสอบลอกใครไม่ได้ แต่โค้ดเราลอกคนอื่นได้ 🤫',
    'หลังคัดลอก ลองเขียนเองดู สนุกเหมือนกันนะเออ 😄',
    'ชอบลอกคนอื่นยังดีกว่าไม่ลองทำอะไรเลย 😤',
    'คัดลอกเรียบร้อย! 😗',
    'Copied! 😙',
    'สำเนาข้อความแล้วนะออเจ้า 🙂',
  ];
  var highlights = document.querySelectorAll('.language-javascript');
  if (highlights) {
    for (var highlight of highlights) {
      highlight.prepend(htmlToElement(`<i title="Run a code" class="runner fas fa-play"></i>`));
      highlight.prepend(htmlToElement(`<i title="Open in editor" class="runner fas fa-code"></i>`));
      highlight.prepend(htmlToElement(`<i title="Copy a code" class="runner fas fa-copy"></i>`));
      [].filter.call(highlight.children, element => {
        if (element.classList.contains('fa-play')) {
          element.addEventListener('click', function (event) {
            try {
              eval(event.target.parentElement.querySelector('code').innerText);
            } catch (e) {
              new Noty({
                text: e.message,
                type: 'error'
              }).show();
            }
          });
        }
        if (element.classList.contains('fa-code')) {
          element.addEventListener('click', function (event) {
            var win = window.open(`/nong-program/editor${jsonToQueryString({ value: event.target.parentElement.querySelector('code').innerText })}`, '_blank');
            win.focus();
          });
        }
        if (element.classList.contains('fa-copy')) {
          element.addEventListener('click', function (event) {
            if (getChromeVersion() >= 66) {
              navigator.clipboard.writeText(event.target.parentElement.querySelector('code').innerText);
              new Noty({
                text: messageCoppied[Math.floor(Math.random()*messageCoppied.length)],
                type: 'info'
              }).show();
            } else {
              alert('การคัดลอกข้อความจะรองรับเฉพาะบน Google Chrome เวอร์ชั่น 66 ขึ้นไป เนื่องจากเราใช้ Async Clipboard API ในการคัดลอก\n\nอ่านเพิ่มเติมที่ https://developers.google.com/web/updates/2018/04/nic66#async-clipboard');
            }
          });
        }
      });
    }
  }

  // Add line for highlight

  var elementsCode = document.querySelectorAll('pre.highlight');
  for (var code of elementsCode) {
    var lineCount = code.innerText.split(/\r\n|\r|\n/).length - 1;
    var html = '<div class="editor lines"><ul class="line">';
    for (var i = 0; i < lineCount; i++) {
      html += `<li class="no">${i + 1}</li>`;
    }
    html += '</ul></div>';
    code.prepend(htmlToElement(html));
  }

  // Tippy.js

  tippy('[title]', {
    animation: 'perspective',
    distance: 5,
    duration: [150, 150],
    dynamicTitle: true
  });

  // Scroll spy

  gumshoe.init({
    selector: '#desktop-sidebar [data-gumshoe] a',
    activeClass: 'is-active'
  });

});


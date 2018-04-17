'use strict';

document.addEventListener('DOMContentLoaded', function () {

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

  // Scrolling

  var shadowedEl = document.getElementById('shadowed');
  var navbarEl = document.getElementById('navbar');
  var navbarBurger = document.getElementById('navbarBurger');
  var specialShadow = document.getElementById('specialShadow');
  var NAVBAR_HEIGHT = 52;
  var THRESHOLD = 160;
  var navbarOpen = false;
  var horizon = NAVBAR_HEIGHT;
  var whereYouStoppedScrolling = 0;
  var scrollFactor = 0;
  var currentTranslate = 0;

  navbarBurger.addEventListener('click', function (el) {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
      rootEl.classList.add('bd-is-clipped-touch');
      shadowedEl.style.display = shadowedEl.style.display == 'none' ? 'block' : 'none';
    } else {
      rootEl.classList.remove('bd-is-clipped-touch');
      shadowedEl.style.display = shadowedEl.style.display == 'none' ? 'block' : 'none';
    }
  });

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
    specialShadow.style.opacity = scrollFactor;
    specialShadow.style.transform = 'scaleY(' + translateFactor + ')';
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

  // Popup Sharing

  function popupSharing(url, provider) {
    return window.open(url, 'Share to ' + provider, 'menubar=1,resizable=1,width=600,height=350')
  }

  var $onShare = Array.prototype.slice.call(document.querySelectorAll('.on-share'), 0);
  if ($onShare.length > 0) {
    $onShare.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var url = $el.dataset.url;
        var provider = $el.dataset.provider;
        switch (provider) {
          case 'facebook':
            return popupSharing('https://www.facebook.com/sharer/sharer.php?u=' + url, provider);
          case 'twitter':
            return popupSharing('https://twitter.com/intent/tweet?url=' + url, provider);
          case 'google':
            return popupSharing('https://plus.google.com/share?url=' + url, provider);
          case 'pinterest':
            return popupSharing('http://pinterest.com/pin/create/button/?url=' + url, provider);
        }
      });
    });
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

  document.addEventListener("DOMContentLoaded",function(){
    var links = document.links;
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
      if (links[i].hostname != window.location.hostname) {
        links[i].target = '_blank';
        links[i].className += ' externalLink';
      }
    }

    var docs = document.getElementById('docs');
    if (docs) {
      for (var subDocs of document.getElementsByClassName('sub-docs')) {
        for (var h2 of docs.getElementsByTagName('h2')) {
          subDocs.innerHTML += `<li><a href="#${h2.id}">${h2.innerText.substring(3)}</a></li>`;
        }
      }
    }
  });
});

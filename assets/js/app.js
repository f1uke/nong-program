'use strict';

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

  if (detectMob()) {

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

  var highlights = document.querySelectorAll('.language-javascript');
  if (highlights) {
    for (var highlight of highlights) {
      highlight.prepend(htmlToElement(`<i title="Run a code" class="runner fas fa-play"></i>`));
      highlight.prepend(htmlToElement(`<i title="Copy a code" class="runner fas fa-copy"></i>`));
      [].filter.call(highlight.children, element => {
        if (element.classList.contains('fa-play')) {
          element.addEventListener('click', function (event) {
            eval(event.target.parentElement.querySelector('code').innerText);
          });
        }
        if (element.classList.contains('fa-copy')) {
          element.addEventListener('click', function (event) {
            navigator.clipboard.writeText(event.target.parentElement.querySelector('code').innerText).then(function () {
              document.querySelector('.tippy-content').textContent = 'Copied!';
              event.target._tippy.show();
            });
          });
          element.addEventListener('mouseleave', function (event) {
            document.querySelector('.tippy-content').textContent = 'Copy a code';
          });
        }
      });
    }
  }

  // Tippy.js

  tippy('[title]', {
    animation: 'perspective',
    distance: 5,
    duration: [150, 150],
    dynamicTitle: true
  });

});

// Offset navbar

(function(document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: 62,

    /**
     * Establish events, and fix initial scroll position if a hash is provided.
     */
    init: function() {
      this.scrollToCurrent();
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    /**
     * Return the offset amount to deduct from the normal scroll position.
     * Modify as appropriate to allow for dynamic calculations
     */
    getFixedOffset: function() {
      return this.OFFSET_HEIGHT_PX;
    },

    /**
     * If the provided href is an anchor which resolves to an element on the
     * page, scroll to it.
     * @param  {String} href
     * @return {Boolean} - Was the href an anchor.
     */
    scrollIfAnchor: function(href, pushToHistory) {
      var match, rect, anchorOffset;

      if(!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if(match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        // Add the state to history as-per normal anchor links
        if(HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    /**
     * Attempt to scroll to the current location's hash.
     */
    scrollToCurrent: function() {
      this.scrollIfAnchor(window.location.hash);
    },

    /**
     * If the click event's target was an anchor, fix the scroll position.
     */
    delegateAnchors: function(e) {
      var elem = e.target;

      if(
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    }
  };

  window.addEventListener(
    'DOMContentLoaded', anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);

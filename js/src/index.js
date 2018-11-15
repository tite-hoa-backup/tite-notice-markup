"use strict";



/* ==============================
    accordion script
============================== */
(function(){
    var accordion = document.getElementsByClassName('accordion__container--header');
    
    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
    
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            }
            else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }
})();



/* ==============================
    getFullYear
============================== */
(function(){
    var d = new Date();
    var y = d.getFullYear();
    document.getElementsByClassName("copyright__container--text")[0].innerHTML = y;
})();



/* ==============================
    meta Tags **meta [name, content]**
============================== */
(function(){
    var thisUrl = window.location.href;
    var thisTitle = document.title;
    var thisDesc = document.querySelector('meta[name="description"]').getAttribute('content');
    var thisKeys = document.querySelector('meta[name="keywords"]').getAttribute('content');
    var thisOGImg = document.querySelector('meta[property="og:image"]').getAttribute('content');

    var metaLists = [
        { name: 'url', content: thisUrl },
        { name: 'identifier-URL', content: thisUrl },
        { name: 'pagename', content: thisTitle },
        { name: 'HandheldFriendly', content: 'true' },
        { name: 'referrer', content: 'origin-when-cross-origin' },
        { name: 'twitter:url', content: thisUrl },
        { name: 'twitter:domain', content: thisUrl },
        { name: 'twitter:title', content: thisTitle },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: thisDesc },
        { name: 'twitter:image', content: thisOGImg },
        { name: 'twitter:image:src', content: thisOGImg },
        { name: 'twitter:image:alt', content: thisTitle },
        { property: 'og:img:alt', content: thisOGImg },
        { property: 'og:img:url', content: thisOGImg },
        { property: 'og:img:secure_url', content: thisOGImg },
        { property: 'article:tag', content: thisKeys },
        { property: 'al:web:url', content: thisUrl },
        { itemprop: 'name', content: thisTitle },
        { itemprop: 'description', content: thisDesc },
        { itemprop: 'image', content: thisOGImg },
        { rel: 'apple-touch-icon', sizes: '57x57' },
        { rel: 'apple-touch-icon', sizes: '60x60' },
        { rel: 'apple-touch-icon', sizes: '72x72' },
        { rel: 'apple-touch-icon', sizes: '76x76' },
        { rel: 'apple-touch-icon', sizes: '114x114' },
        { rel: 'apple-touch-icon', sizes: '120x120' },
        { rel: 'apple-touch-icon', sizes: '144x144' },
        { rel: 'apple-touch-icon', sizes: '152x152' },
        { rel: 'apple-touch-icon', sizes: '180x180' },
        { rel: 'icon', sizes: '192x192' },
        { rel: 'icon', sizes: '32x32' },
        { rel: 'icon', sizes: '96x96' },
        { rel: 'icon', sizes: '16x16' },
        { rel: 'manifest', href: '/favicon/manifest.json' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '/favicon/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' },
    ];

    var headTitle = document.querySelector('head');
    metaLists.forEach(function(metaList) {
        if (metaList.name) {
            var setMeta = document.createElement('meta');
            setMeta.setAttribute('name', metaList.name);
            setMeta.setAttribute('content', metaList.content);
            headTitle.appendChild(setMeta);
        }

        else if (metaList.property) {
            var setMeta = document.createElement('meta');
            setMeta.setAttribute('property', metaList.property);
            setMeta.setAttribute('content', metaList.content);
            headTitle.appendChild(setMeta);
        }

        else if (metaList.itemprop) {
            var setMeta = document.createElement('meta');
            setMeta.setAttribute('itemprop', metaList.itemprop);
            setMeta.setAttribute('content', metaList.content);
            headTitle.appendChild(setMeta);
        }

        else if (metaList.rel == 'apple-touch-icon') {
            var setLink = document.createElement('link');
            setLink.setAttribute('rel', metaList.rel);
            setLink.setAttribute('sizes', metaList.sizes);
            setLink.setAttribute('href', '/favicon/apple-icon-' + metaList.sizes + '.png');
            headTitle.appendChild(setLink);
        }

        else if (metaList.rel == 'icon' || metaList.rel == 'manifest') {
            var setLink = document.createElement('link');
            setLink.setAttribute('rel', metaList.rel);

            if (metaList.rel == 'icon') {
                setLink.setAttribute('type', 'image/png');
                setLink.setAttribute('sizes', metaList.sizes);

                if (metaList.sizes == '192x192')
                    setLink.setAttribute('href', '/favicon/android-icon-' + metaList.sizes + '.png');
                else
                    setLink.setAttribute('href', '/favicon/favicon-' + metaList.sizes + '.png');
                
            } else {
                setLink.setAttribute('href', metaList.href);
            }

            headTitle.appendChild(setLink);
        }
    });
})();



/* ==============================
    ripple effect
============================== */
// (function() {
//     var removeRipple, debounce, length, ripple, rippleContainer, ripples, makeRipple;

//         debounce = function debounce(func, delay) {
//             var inDebounce = undefined;

//             return function () {
//                 var context = this;
//                 var args = arguments;
//                 clearTimeout(inDebounce);

//                 return inDebounce = setTimeout(function () {
//                 return func.apply(context, args);
//                 }, delay);
//             };
//         };

//         makeRipple = function makeRipple(e) {
//             var ripple = this;
//             var setRipple = document.createElement('span');

//             var size = ripple.offsetWidth;
//             var pos = ripple.getBoundingClientRect();
//             var x = e.clientX - pos.left - size / 2;
//             var y = e.clientY - pos.top - size / 2;
//             style = 'will-change: top, left, height, width, auto; zoom: 1; top: ' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';

//             ripple.rippleContainer.appendChild(setRipple);

//             return setRipple.setAttribute('style', style);
//         };

//         removeRipple = function removeRipple() {
//             while (this.rippleContainer.firstChild) {
//                 this.rippleContainer.removeChild(this.rippleContainer.firstChild);
//             }
//         };

//         ripples = document.querySelectorAll('[ripple]');

//         for (var i = 0, length = ripples.length; i < length; i++) {
//             ripple = ripples[i];
//             ripple.style.position = 'relative';
//             ripple.style.overflow = 'hidden';

//             rippleContainer = document.createElement('div');
//             rippleContainer.className = 'ripple--container';
//             rippleContainer.style.zoom = '1';
//             rippleContainer.style.overflow = 'hidden';
//             rippleContainer.style.position = 'absolute';
//             rippleContainer.style.transform = 'translate3d(0, 0, 0)';
//             rippleContainer.style.webkitTransform = 'translate3d(0, 0, 0)';
//             rippleContainer.style.willChange = 'top, left, right, bottom, auto';
//             rippleContainer.style.top = '0';
//             rippleContainer.style.left = '0';
//             rippleContainer.style.right = '0';
//             rippleContainer.style.bottom = '0';

//             ripple.addEventListener('mousedown', makeRipple);
//             ripple.addEventListener('mouseup', debounce(removeRipple, 2000));
//             ripple.rippleContainer = rippleContainer;
//             ripple.appendChild(rippleContainer);
//         }

//         // ripple style
//         var styleEl = document.createElement('style');
//         styleEl.innerHTML = '[ripple] .ripple--container span {will-change:transform,opacity,auto;zoom:1;overflow:hidden;-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);-webkit-border-radius:100%;-moz-border-radius:100%;border-radius:100%;position:absolute;opacity:0.5;background-color:rgba(0,0,0,0.1);-webkit-animation:rippler 1000ms;-moz-animation:rippler 1000ms;-o-animation:rippler 1000ms;animation:rippler 1000ms;}@-webkit-keyframes rippler{to{opacity:0;-webkit-transform:scale(2);transform:scale(2);}}@-moz-keyframes rippler{to{opacity:0;-webkit-transform:scale(2);-moz-transform:scale(2);transform:scale(2);}}@-o-keyframes rippler{to{opacity:0;-webkit-transform:scale(2);-o-transform:scale(2);transform:scale(2);}}@keyframes rippler{to{opacity:0;-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2);transform:scale(2);}}';
//         document.head.appendChild(styleEl);
// })();

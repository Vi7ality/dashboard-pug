(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=()=>{let n="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",o),n.addEventListener("click",o),window.addEventListener("resize",function(){window.innerWidth>=1200&&document.querySelector(".mobilie-menu.is-open")&&(e.classList.remove("is-open"),overlay.classList.remove("active"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=index.a17b9925.js.map

(()=>{"use strict";function e(e,t,n){const c=new DocumentFragment,o=function(e,t){const n=document.createElement("header"),c=function(){const e=document.createElement("div");e.classList.add("nav-div"),n.appendChild(e);const t=document.createElement("span");t.classList.add("logo"),t.textContent="LOGO",e.appendChild(t);const c=document.createElement("nav");e.appendChild(c);const o=function(){const e=document.createElement("ul");return["HOME","MENU","CONTACTS"].forEach((t=>{const n=document.createElement("li");n.textContent=t,e.appendChild(n)})),e}();return c.appendChild(o),e}();n.appendChild(c);const o=function(){const c=document.createElement("div");n.appendChild(c);const o=document.createElement("h1");o.textContent=`${e}`,c.appendChild(o);const d=document.createElement("p");return d.textContent=`${t}`,c.appendChild(d),c}();return n.appendChild(o),n}(e,t);c.appendChild(o);const d=function(e){const t=document.createElement("div");return t.classList.add("main"),t.replaceChildren(e),t}(n);c.appendChild(d);const a=function(){const e=document.createElement("footer"),t=document.createElement("span");return t.textContent="2023 Rider-7",e.appendChild(t),e}();return c.appendChild(a),c}function t(e,t){const n=document.createElement("div");n.classList.add("content-slot","content-slot-normal");const c=document.createElement("img");c.classList.add("content-img"),n.appendChild(c);const o=function(){const n=document.createElement("div");n.classList.add("content-text");const c=document.createElement("h2");c.classList.add("content-title"),c.textContent=e,n.appendChild(c);const o=document.createElement("p");return o.classList.add("content-paragraph"),o.textContent=t,n.appendChild(o),n}();return n.appendChild(o),n}function n(){return e(c,o,d.cloneNode(!0))}const c="TITLE",o="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.",d=(()=>{const e=new DocumentFragment;for(let n=0;n<3;n++){const n=t("Header","Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus vel ex non laoreet. Quisque tempus volutpat maximus.");e.appendChild(n)}return e})();function a(e){const t=document.createElement("div");t.classList.add("menu-slot");const n=document.createElement("h2");n.classList.add("menu-slot-title"),n.textContent=e,t.appendChild(n);const c=document.createElement("img");return c.classList.add("menu-slot-img"),t.appendChild(c),t}const s=(()=>{const e=new DocumentFragment;for(let t=0;t<3;t++){const t=a("FOOD NAME");e.appendChild(t)}return e})();function l(t){t.preventDefault();const c=document.getElementById("content");switch(t.target.textContent){case"HOME":c.replaceChildren(n().cloneNode(!0));break;case"MENU":c.replaceChildren(function(){const t=document.createElement("div");return t.classList.add("menu"),t.appendChild(s.cloneNode(!0)),e("MENU","In cursus vel ex non laoreet. Quisque tempus volutpat maximus.",t)}().cloneNode(!0))}document.querySelector("nav").addEventListener("click",l)}document.getElementById("content").replaceChildren(n().cloneNode(!0)),document.querySelector("nav").addEventListener("click",l)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENDUGdDQyxHQUFrQmYsV0FBVSxJQWU1QzVCLFNBQVM0QyxjQUFjLE9BQy9CQyxpQkFBaUIsUUFBU1IsRUFFbEMsQ0FoQ29CckMsU0FBU3dDLGVBQWUsV0FDaEN4QixnQkFBZ0JVLElBQWtCRSxXQUFVLElBRXhDNUIsU0FBUzRDLGNBQWMsT0FDL0JDLGlCQUFpQixRQUFTUixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGVtcGxhdGVzL3BhZ2UtdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGVtcGxhdGVzL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhlYWRlciAodGl0bGUsIHN1YnRpdGxlKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IG5hdkRpdiA9IChmdW5jdGlvbiBuYXZEaXYgKCkge1xyXG5cclxuICAgICAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZCgnbmF2LWRpdicpO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZEaXYpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nKTtcclxuICAgICAgICBsb2dvLnRleHRDb250ZW50ID0gJ0xPR08nO1xyXG5cclxuICAgICAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IHVsID0gKGZ1bmN0aW9uIHVsICgpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICAgICAgY29uc3QgdGFiTmFtZXMgPSBbJ0hPTUUnLCAnTUVOVScsICdDT05UQUNUUyddO1xyXG5cclxuICAgICAgICAgICAgdGFiTmFtZXMuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgbGkudGV4dENvbnRlbnQgPSBuYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdWxcclxuXHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmF2RGl2O1xyXG5cclxuICAgIH0pKCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2RGl2KTtcclxuXHJcbiAgICBjb25zdCBoZXJvRGl2ID0gKGZ1bmN0aW9uIGhlcm9EaXYgKCkge1xyXG5cclxuICAgICAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlcm9EaXYpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaGVyb1RpdGxlLnRleHRDb250ZW50ID0gYCR7dGl0bGV9YDtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9UaXRsZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGVyb1N1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGhlcm9TdWJ0aXRsZS50ZXh0Q29udGVudCA9IGAke3N1YnRpdGxlfWA7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvU3VidGl0bGUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBoZXJvRGl2O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pKCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XHJcbiAgICBcclxuICAgIHJldHVybiBoZWFkZXI7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBtYWluIChjb250ZW50KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgbWFpbi5yZXBsYWNlQ2hpbGRyZW4oY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBmb290ZXIgKCkge1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cclxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9ICcyMDIzIFJpZGVyLTcnO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGVtcGxhdGUgKGhlcm9UaXRsZSwgaGVyb1N1YnRpdGxlLCBjb250ZW50KSB7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IF9oZWFkZXIgPSBoZWFkZXIoaGVyb1RpdGxlLCBoZXJvU3VidGl0bGUpO1xyXG4gICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQoX2hlYWRlcik7XHJcbiAgICBcclxuICAgIGNvbnN0IF9tYWluID0gbWFpbihjb250ZW50KTtcclxuICAgIHRlbXBsYXRlLmFwcGVuZENoaWxkKF9tYWluKTtcclxuXHJcbiAgICBjb25zdCBfZm9vdGVyID0gZm9vdGVyKCk7XHJcbiAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZChfZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY29udGVudFNsb3QgKGhlYWRlclRleHQsIHBhcmFncmFwaFRleHQpIHtcclxuXHJcbiAgICBjb25zdCBjb250ZW50U2xvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudFNsb3QuY2xhc3NMaXN0LmFkZCgnY29udGVudC1zbG90JywgJ2NvbnRlbnQtc2xvdC1ub3JtYWwnKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb250ZW50SW1nLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaW1nJyk7XHJcbiAgICBjb250ZW50U2xvdC5hcHBlbmRDaGlsZChjb250ZW50SW1nKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50VGV4dCA9IChmdW5jdGlvbiBjb250ZW50VGV4dCAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudFRleHQuY2xhc3NMaXN0LmFkZCgnY29udGVudC10ZXh0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtdGl0bGUnKTtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXJUZXh0O1xyXG4gICAgICAgIGNvbnRlbnRUZXh0LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnY29udGVudC1wYXJhZ3JhcGgnKTtcclxuICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBwYXJhZ3JhcGhUZXh0O1xyXG4gICAgICAgIGNvbnRlbnRUZXh0LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjb250ZW50VGV4dDtcclxuXHJcbiAgICB9KSgpO1xyXG4gICAgY29udGVudFNsb3QuYXBwZW5kQ2hpbGQoY29udGVudFRleHQpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50U2xvdDtcclxuXHJcbn0iLCJpbXBvcnQgeyBnZXRUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9wYWdlLXRlbXBsYXRlLmpzJztcclxuaW1wb3J0IHsgY29udGVudFNsb3QgfSBmcm9tICcuLi90ZW1wbGF0ZXMvY29tcG9uZW50cy5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvbWVUZW1wbGF0ZSgpIHtcclxuXHJcbiAgICByZXR1cm4gIGdldFRlbXBsYXRlKGhlcm9UaXRsZSwgaGVyb1N1YnRpdGxlLCBob21lQ29udGVudC5jbG9uZU5vZGUodHJ1ZSkpOyAvLyBUT0RPOiBSZW1vdmUgdGVtcG9yYXJ5IGNvbnRlbnQgbGF0ZXIuXHJcblxyXG59XHJcblxyXG4vLyBUT0RPOiBUZW1wb3JhcnkgY29udGVudCBmb3IgaG9tZSBwYWdlLiBSZW1vdmUgbGF0ZXIuXHJcbmNvbnN0IGhlcm9UaXRsZSA9ICdUSVRMRSc7XHJcbmNvbnN0IGhlcm9TdWJ0aXRsZSA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBjdXJzdXMgdmVsIGV4IG5vbiBsYW9yZWV0LiBRdWlzcXVlIHRlbXB1cyB2b2x1dHBhdCBtYXhpbXVzLic7XHJcblxyXG5jb25zdCBob21lQ29udGVudCA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9ICdIZWFkZXInO1xyXG4gICAgY29uc3QgcGFyYWdyYXBoVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBjdXJzdXMgdmVsIGV4IG5vbiBsYW9yZWV0LiBRdWlzcXVlIHRlbXB1cyB2b2x1dHBhdCBtYXhpbXVzLic7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IF9ob21lU2xvdCA9IGNvbnRlbnRTbG90KGhlYWRlclRleHQsIHBhcmFncmFwaFRleHQpO1xyXG4gICAgICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKF9ob21lU2xvdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaG9tZUNvbnRlbnQ7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBnZXRUZW1wbGF0ZSB9IGZyb20gJy4uL3RlbXBsYXRlcy9wYWdlLXRlbXBsYXRlLmpzJztcclxuXHJcbmZ1bmN0aW9uIG1lbnVTbG90IChmb29kTmFtZSkge1xyXG5cclxuICAgIGNvbnN0IG1lbnVTbG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51U2xvdC5jbGFzc0xpc3QuYWRkKCdtZW51LXNsb3QnKTtcclxuXHJcbiAgICBjb25zdCBzbG90VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc2xvdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2xvdC10aXRsZScpO1xyXG4gICAgc2xvdFRpdGxlLnRleHRDb250ZW50ID0gZm9vZE5hbWU7XHJcbiAgICBtZW51U2xvdC5hcHBlbmRDaGlsZChzbG90VGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHNsb3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHNsb3RJbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1zbG90LWltZycpO1xyXG4gICAgbWVudVNsb3QuYXBwZW5kQ2hpbGQoc2xvdEltZyk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVTbG90O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lbnVUZW1wbGF0ZSgpIHtcclxuXHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICByZXR1cm4gIGdldFRlbXBsYXRlKGhlcm9UaXRsZSwgaGVyb1N1YnRpdGxlLCBtZW51KTsgLy8gVE9ETzogUmVtb3ZlIHRlbXBvcmFyeSBjb250ZW50IGxhdGVyLlxyXG5cclxufVxyXG5cclxuLy8gVE9ETzogVGVtcG9yYXJ5IGNvbnRlbnQgZm9yIG1lbnUgcGFnZS4gUmVtb3ZlIGxhdGVyLlxyXG5jb25zdCBoZXJvVGl0bGUgPSAnTUVOVSc7XHJcbmNvbnN0IGhlcm9TdWJ0aXRsZSA9ICdJbiBjdXJzdXMgdmVsIGV4IG5vbiBsYW9yZWV0LiBRdWlzcXVlIHRlbXB1cyB2b2x1dHBhdCBtYXhpbXVzLic7XHJcblxyXG5jb25zdCBtZW51Q29udGVudCA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWVudUNvbnRlbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgY29uc3QgZm9vZE5hbWUgPSAnRk9PRCBOQU1FJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgX21lbnVTbG90ID0gbWVudVNsb3QoZm9vZE5hbWUpO1xyXG4gICAgICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKF9tZW51U2xvdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWVudUNvbnRlbnQ7XHJcblxyXG59KSgpOyIsImltcG9ydCB7IGdldEhvbWVUZW1wbGF0ZSB9IGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHsgZ2V0TWVudVRlbXBsYXRlIH0gZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xyXG5cclxuLy8gSVNTVUU6IEVudGlyZSBwYWdlIGdldHMgcmVwbGFjZWQgZXZlcnl0aW1lLCB3aGljaCB0aGVuIHJlcXVpcmVzIHRoZSBuYXZpZ2F0aW9uIGV2ZW50IGxpc3RlbmVyIHRvIGJlIHJlY3JlYXRlZCBldmVyeXRpbWVcclxuLy8gICAgICAgIGZvciBuYXZpZ2F0aW9uIHRvIHdvcmsuXHJcblxyXG4oZnVuY3Rpb24gaW5pdGlhbGlzZSAoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKGdldEhvbWVUZW1wbGF0ZSgpLmNsb25lTm9kZSh0cnVlKSk7XHJcblxyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XHJcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZpZ2F0aW9uRGVsZWdhdG9yKTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIG5hdmlnYXRpb25EZWxlZ2F0b3IgKGUpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBob21lICgpIHtcclxuICAgICAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbihnZXRIb21lVGVtcGxhdGUoKS5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1lbnUgKCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKGdldE1lbnVUZW1wbGF0ZSgpLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gICAgc3dpdGNoIChlLnRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIGNhc2UgJ0hPTUUnOlxyXG4gICAgICAgICAgICBob21lKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ01FTlUnOlxyXG4gICAgICAgICAgICBtZW51KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdmlnYXRpb25EZWxlZ2F0b3IpO1xyXG5cclxufSJdLCJuYW1lcyI6WyJnZXRUZW1wbGF0ZSIsImhlcm9UaXRsZSIsImhlcm9TdWJ0aXRsZSIsImNvbnRlbnQiLCJ0ZW1wbGF0ZSIsIkRvY3VtZW50RnJhZ21lbnQiLCJfaGVhZGVyIiwidGl0bGUiLCJzdWJ0aXRsZSIsImhlYWRlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm5hdkRpdiIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwibG9nbyIsInRleHRDb250ZW50IiwibmF2IiwidWwiLCJmb3JFYWNoIiwibmFtZSIsImxpIiwiaGVyb0RpdiIsIl9tYWluIiwibWFpbiIsInJlcGxhY2VDaGlsZHJlbiIsIl9mb290ZXIiLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJjb250ZW50U2xvdCIsImhlYWRlclRleHQiLCJwYXJhZ3JhcGhUZXh0IiwiY29udGVudEltZyIsImNvbnRlbnRUZXh0IiwicGFyYWdyYXBoIiwiZ2V0SG9tZVRlbXBsYXRlIiwiaG9tZUNvbnRlbnQiLCJjbG9uZU5vZGUiLCJpIiwiX2hvbWVTbG90IiwibWVudVNsb3QiLCJmb29kTmFtZSIsInNsb3RUaXRsZSIsInNsb3RJbWciLCJtZW51Q29udGVudCIsIl9tZW51U2xvdCIsIm5hdmlnYXRpb25EZWxlZ2F0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRFbGVtZW50QnlJZCIsInRhcmdldCIsIm1lbnUiLCJnZXRNZW51VGVtcGxhdGUiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
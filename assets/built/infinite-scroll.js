!function(n,t){var r,o,i,s,l,c,u,d;function a(){if(404===this.status)return n.removeEventListener("scroll",v),void n.removeEventListener("resize",f);this.response.querySelectorAll("article.post-card").forEach(function(e){o.appendChild(t.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?r.href=e.href:(n.removeEventListener("scroll",v),n.removeEventListener("resize",f)),d=t.documentElement.scrollHeight,l=s=!1}function e(){var e;l||(c+u<=d-i?s=!1:(l=!0,(e=new n.XMLHttpRequest).responseType="document",e.addEventListener("load",a),e.open("GET",r.href),e.send(null)))}function m(){s||n.requestAnimationFrame(e),s=!0}function v(){c=n.scrollY,m()}function f(){u=n.innerHeight,d=t.documentElement.scrollHeight,m()}t.documentElement.classList.contains("no-infinite-scroll")||(!(r=t.querySelector("link[rel=next]"))||(o=t.querySelector(".post-feed"))&&(l=s=!(i=300),c=n.scrollY,u=n.innerHeight,d=t.documentElement.scrollHeight,n.addEventListener("scroll",v,{passive:!0}),n.addEventListener("resize",f),m()))}(window,document);
//# sourceMappingURL=infinite-scroll.js.map
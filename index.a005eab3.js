const e=document.querySelector("#container-events-js"),t=document.querySelector("#load-more-js"),n=document.querySelector("#choose-country-select"),c=document.querySelector("#search-event-js"),o=document.querySelector(".search-btn");let s=-1,d=" ",l=d;function a(){let t=c.value;fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=G9QyoGR1xwN3XvcF7b5mopd7Xn36MiG5&page=${s}&size=20&countryCode=${d}&keyword=${t}`).then((e=>e.json())).then((t=>{console.log(t);for(const n of t._embedded.events)e.insertAdjacentHTML("beforeend",`\n                    <div class="card">\n                    <img src="" alt="">\n                    <h5 class="title-event" id="title-event-js">${n.name}</h5>\n                    <p class="date" id="date-js">${n.dates.start.localDate}</p>\n                    <p class="place" id="place-js">${n._embedded.venues[0].name}</p>\n                    </div>\n                    `)})).catch((e=>alert("Sorry, there are no events in this country(")))}n.addEventListener("click",(function(){d=n.value,l===d?s+=1:(s=0,e.innerHTML=" ")})),o.addEventListener("click",a),t.addEventListener("click",a),window.addEventListener("keyup",(e=>{e.preventDefault,"Enter"===e.code&&a()}));const r=document.getElementById("myModal"),i=document.getElementById("myBtn"),u=document.getElementsByClassName("close")[0];i.onclick=function(){r.style.display="block"},u.onclick=function(){r.style.display="none"},window.onclick=function(e){e.target==r&&(r.style.display="none")};
//# sourceMappingURL=index.a005eab3.js.map
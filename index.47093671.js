const e=document.querySelector("#container-events-js"),t=document.querySelector("#load-more-js"),n=document.querySelector("#choose-country-select"),c=document.querySelector("#search-event-js");document.querySelector(".search-btn");let o=-1,s=" ",r=s;n.addEventListener("click",(function(){s=n.value,r===s?o+=1:(o=0,e.innerHTML=" ")})),t.addEventListener("click",(function(){let t=c.value;fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=G9QyoGR1xwN3XvcF7b5mopd7Xn36MiG5&page=${o}&size=20&countryCode=${s}&keyword=${t}`).then((e=>e.json())).then((t=>{console.log(t);for(const n of t._embedded.events)e.insertAdjacentHTML("beforeend",`\n                    <div class="card">\n                    <img src="" alt="">\n                    <h5 class="title-event" id="title-event-js">${n.name}</h5>\n                    <p class="date" id="date-js">${n.dates.start.localDate}</p>\n                    <p class="place" id="place-js">${n._embedded.venues[0].name}</p>\n                    </div>\n                    `)})).catch((e=>alert("Sorry, there are no events in this country(")))})),console.log("hello");
//# sourceMappingURL=index.47093671.js.map

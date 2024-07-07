
const containerOfEvents = document.querySelector("#container-events-js")
const btnLoadMore = document.querySelector("#load-more-js")

const BASE_ID = "https://app.ticketmaster.com/discovery/v2/events.json"

let sizeNumb = 0
function loadMore() {
    fetch(`${BASE_ID}?apikey=G9QyoGR1xwN3XvcF7b5mopd7Xn36MiG5&page=${sizeNumb}&size=20`).then(response => response.json()).then(events => {
        console.log(events._embedded.events)
        for (const event of events._embedded.events) {

            containerOfEvents.insertAdjacentHTML("beforeend", `
                <div class="card">
                <img src="" alt="">
                <h5 class="title-event" id="title-event-js">${event.name}</h5>
                <p class="date" id="date-js">${event.dates.start.localDate}</p>
                <p class="place" id="place-js">${event._embedded.venues[0].name}</p>
                </div>
                `)
            }
        })
    sizeNumb+=1
}
    
btnLoadMore.addEventListener("click", loadMore)






















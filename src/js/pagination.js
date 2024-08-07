
const containerOfEvents = document.querySelector("#container-events-js")
const btnLoadMore = document.querySelector("#load-more-js")
const container = document.querySelector("#choose-country-select")
const searchEvent = document.querySelector("#search-event-js")
const searchBtn = document.querySelector(".search-btn")

const BASE_ID = "https://app.ticketmaster.com/discovery/v2/events.json"

function firstLoad() {
    fetch(`${BASE_ID}?apikey=G9QyoGR1xwN3XvcF7b5mopd7Xn36MiG5&page=0&size=20`)
    .then(response => response.json())
    .then(events => {
        console.log(events)
        for (const event of events._embedded.events) {

            containerOfEvents.insertAdjacentHTML("beforeend", `
                <div class="card">
                    <img class="img-card" id="${event.id}" src="${event.images[0].url}" alt="">
                    <h5 class="title-event" id="title-event-js">${event.name}</h5>
                    <p class="date" id="date-js">${event.dates.start.localDate}</p>
                    <p class="place" id="place-js">${event._embedded.venues[0].name}</p>
                </div>
                `)
        }
    })
}

firstLoad()

let sizeNumb = -1
let valueCountry = " "
let preValue = valueCountry
function getValue() {
    valueCountry = container.value
    if (preValue === valueCountry) {
        sizeNumb += 1
    } else {
        sizeNumb = 0
        containerOfEvents.innerHTML = " "
    }
}

function loadMore() {

    let searchValue = searchEvent.value
    fetch(`${BASE_ID}?apikey=G9QyoGR1xwN3XvcF7b5mopd7Xn36MiG5&page=${sizeNumb}&size=20&countryCode=${valueCountry}&keyword=${searchValue}`)
        .then(response => response.json())
        .then(events => {
            console.log(events)
            for (const event of events._embedded.events) {

                containerOfEvents.insertAdjacentHTML("beforeend", `
                    <div class="card">
                        <img class="img-card" id="${event.id}" src="${event.images[0].url}" alt="">
                        <h5 class="title-event" id="title-event-js">${event.name}</h5>
                        <p class="date" id="date-js">${event.dates.start.localDate}</p>
                        <p class="place" id="place-js">${event._embedded.venues[0].name}</p>
                    </div>
                    `)
            }
        })
        .catch(error => alert("Sorry, there are no events in this country("))

}

container.addEventListener("click", getValue)
searchBtn.addEventListener("click", loadMore)
btnLoadMore.addEventListener("click", loadMore)

window.addEventListener("keyup", (e) => {
    e.preventDefault
    if (e.code === "Enter") {
        loadMore()
    }
})






















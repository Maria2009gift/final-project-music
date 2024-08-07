const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.querySelector(".close");

const BASE_ID = "https://app.ticketmaster.com/discovery/v2/events.json"

function closeModal() {
    modal.style.display = "none"
}

function onBackdropClick(e) {
        if (e.target == modal) {
            modal.style.display = "none"
        }}

const openModal = (event) => {
    console.log(event.target.classList[0])
    if (event.target.classList[0] === "img-card") {
        modal.style.display = "block"
        let id = event.target.id

        fetch(`${BASE_ID}?apikey=G9QyoGR1xwN3XvcF7b5mopd7Xn36MiG5&id=${id}`)
        .then(response => response.json())
        .then(eventNC => {
            let event = eventNC._embedded.events[0]
            console.log(event);

            modal.innerHTML = `<div class="modal-content">
            <p class="close">&times;</p>
            <img class="kolo" src="${event.images[0].url}" alt="">
            <div class="wrapper-content">
    
                <img class="kvadrat" src="${event.images[0].url}" alt="">
                <div class="text">
                    <h2 class="title-text">INFO</h2>
                    <p class="p-text">${event.info === undefined ? `sorry, there is no info for this event :(` : event.info}</p>
         
                    <h2 class="title-text">WHEN</h2>
                    <p class="p-text">${event.dates.start.localDate}</p>
                    <p class="p-text">${event.dates.start.localTime === undefined ? ` ` : event.dates.start.localTime.slice(0, 5)} (${event.dates.timezone})</p>
                            
                    <h2 class="title-text">WHERE</h2>
                    <p class="p-text">${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].country.name}, ${event._embedded.venues[0].name === undefined ? ` ` : event._embedded.venues[0].name}</p>
                        
                    <h2 class="title-text">WHO</h2>
                    <p class="p-text">${event.name}</p>
            
                    <h2 class="title-text">PRICES</h2>
    
                    <div class="wrapper-prices standart">
                        <p class="p-prices p-text">Standart ${event.priceRanges[0].min} ${event.priceRanges[0].currency} </p>
                        <button class="buy">BUY TICKETS</button>
                    </div>
                    <div class="wrapper-prices vip">
                        <p class="p-prices p-text">VIP ${event.priceRanges[0].max} ${event.priceRanges[0].currency}</p>
                        <button class="buy">BUY TICKETS</button>
                    </div>
    
                </div>
            </div>
            <button class="inf">MORE FROM THIS AUTHOR</button>
        </div>`

        const span = document.querySelector(".close");
        span.addEventListener("click", closeModal)
        })

    }

}

document.addEventListener("click", openModal);
window.addEventListener("click", onBackdropClick);



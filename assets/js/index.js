const BASE_URL = '';
var val = document.getElementById("val");
var formForBuy = document.getElementById("formForBuy");
// console.log(formForBuy.NbrTicket.value);

const headers = {
    'Content-Type': 'application/json'
};

async function buyMyTickets() {
    event.preventDefault()

    console.log(formForBuy.firstName.value,
        formForBuy.lastName.value,
        formForBuy.email.value,
        formForBuy.telephone.value,
        formForBuy.NbrTicket.value, );

    await axios.post('https://myroadshow.vercel.app/api/tickets/buy', {
        "firstname": formForBuy.firstName.value,
        "lastname": formForBuy.lastName.value,
        "num_tel": formForBuy.telephone.value,
        "email": formForBuy.email.value,
        "nb_ticket": formForBuy.NbrTicket.value,
    }, {
        headers
    }).then(async(response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
}


// val.addEventListener('click', function() {
//     axios.get("https://reqres.in/api/users").then((response) => {
//             const users = response.data.data;
//             // appendToDOM(users);
//             console.log(users);
//         })
//         .catch((error) => console.error(error));
// })



const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');
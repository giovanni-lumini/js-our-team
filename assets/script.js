/* Dato un array di oggetti rappresentante un team di un’azienda:
-creare una pagina dedicata in cui mostrare una card per ciascun componente

Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:) */

const team_members = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

/* console.log(team_members); */

const card_row_el = document.querySelector(".row");
const card_name_el = document.querySelector(".card_name");
const card_role_el = document.querySelector(".card_role");
const card_contact_el = document.querySelector(".card_contact");

for (let i = 0; i < team_members.length; i++) {
  let team_member = team_members[i];
  let {name, role, email, img} = team_member;
  let markup = `
    <div class="col-4">
      <div class="card mb-3 bg-black">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${img}" width="150px" class=" rounded-start" alt="...">
          </div>
          <div class="col-md-8 px-3">
            <div class="card-body">
              <h5 class="card_name text-white">${name}</h5>
              <p class="card_role text-white">${role}</p>
              <p class="card_contact text-primary">${email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  card_row_el.innerHTML += markup;
}
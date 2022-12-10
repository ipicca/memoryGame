let time = 0;

// Evento click en nivel
document.addEventListener('click', (evt) => {
    let lvl = evt.target.id;
    if (evt.target.className.includes('level') && lvl != '') {
        lvl === "extreme" ? time = 31 : time = 46
    }
    const tiempoString = JSON.stringify(time);
    sessionStorage.setItem("tiempo", tiempoString)
    //Reservamos la variable elegida para utilizar en app.js
}
);

//Evento click en play
const btn = document.querySelector('#btn')
btn.addEventListener("click", () => {
    time == 0 ? Swal.fire('Please choose a level') : location.href = "./game.html";
}
);


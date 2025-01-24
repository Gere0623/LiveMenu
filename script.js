




// !!! temporaneo

var elem_lista = `<a href="#">
                    <div class="row m-0 my-2">
                        <div class="col rounded bg-light py-2 px-2">
                            <div class="row p-2">
                                <div class="col-4 d-flex justify-content-center">
                                    <img class="img-fluid" src="img/hamburger.png" alt="hamburger">
                                </div>
                                <div class="col d-flex justify-content-center flex-column">
                                    <h1>Hamburger</h1>
                                    <p>è un Hamburger</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>`;

function popolaLista() {
    for (let i = 0; i < 10; i++)
        document.getElementById("lista").innerHTML += elem_lista;
}

popolaLista();

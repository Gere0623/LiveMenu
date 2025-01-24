var elem_lista = `<div class="row m-0 my-2 elemento">
            <div class="col rounded bg-light py-2 px-2">
                <div class="row p-2">
                    <div class="col-4 d-flex justify-content-center">
                        <img class="img-fluid" src="img/hamburger.png" alt="hamburger">
                    </div>
                    <div class="col d-flex justify-content-center flex-column">
                        <h1>hamburger</h1>
                        <p>è un hamburger -_-</p>
                    </div>
                </div>
            </div>
        </div>`; 

function popolaLista(){
    for(let i = 0; i < 10; i++)
        document.getElementById("lista").innerHTML += elem_lista;
}

popolaLista();
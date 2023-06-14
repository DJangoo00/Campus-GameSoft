// IMPLEMENTACION DE RECURSOS
////////////////////////////////////////////////////////////////////////////////////////////////////
// instanciar listas para guardar informacion
var listaClientesCGS = [];
var listaVideojuegosCGS = [];
/////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion home

////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion clientes

function agregarCliente (){
    event.preventDefault();
    const clientenIDeValue = document.getElementById("formNumIde").value;
    const clienteNameValue = document.getElementById("formNombres").value;
    const clienteApellidoValue = document.getElementById("formApellidos").value;
    const clienteTelValue = document.getElementById("formTel").value;
    const clienteEmailValue = document.getElementById("formCorreo").value;
    const clienteBirthdayValue = document.getElementById("formBirthday").value.toString();
    const clienteNacionalidadValue = document.getElementById("formNacionalidad").value;
    const cliente = {
        clienteIDe: clientenIDeValue,
        clienteName: clienteNameValue,
        clienteApellido: clienteApellidoValue,
        clienteTel: clienteTelValue,
        clienteEmail: clienteEmailValue,
        clienteBirthday: clienteBirthdayValue,
        clienteNacionalidad: clienteNacionalidadValue,
        clientePuntos: 0,
    };
    alert(`Se guardara el cliente ${clienteNameValue} ${clienteApellidoValue} en el registro`);
    listaClientesCGS.push(cliente);
    console.log("consoleAgregarCliente",listaClientesCGS);
    mostrarClientes ();
    llenarCampos();
    guardarLocalStorage();
};
function eliminarClienteCliente (){
    event.preventDefault();
    const eliminarCliente = document.getElementById("inputIdCliente").value;
    alert(`Se eliminarClientea al cliente ${listaClientesCGS[eliminarCliente].clienteName} ${listaClientesCGS[eliminarCliente].clienteApellido} del registro`);
    listaClientesCGS.splice(eliminarCliente,1);
    console.log("consoleeliminarClienteCliente",listaClientesCGS);
    mostrarClientes ();
    llenarCampos();
    guardarLocalStorage();
    
};
function crearRowCliente (nID, numIden, name, apellido, tel, email, birthday, nacionalidad){
    //crear contenedores y etiquetas
    const contenedorCliente = document.getElementById("listadoClientes");
    const trow = document.createElement("tr");
    const thID = document.createElement("th");
    const tdNumIden = document.createElement("td");
    const tdName = document.createElement("td");
    const tdApellido = document.createElement("td");
    const tdTel = document.createElement("td");
    const tdEmail = document.createElement("td");
    const tdBirthday = document.createElement("td");
    const tdNacionalidad = document.createElement("td");
    
    // crear nodes
    const nodeID = document.createTextNode(nID);
    const nodeNumIden = document.createTextNode(numIden);
    const nodeName = document.createTextNode(name);
    const nodeApellido = document.createTextNode(apellido);
    const nodeTel = document.createTextNode(tel);
    const nodeEmail = document.createTextNode(email);
    const nodeBirthday = document.createTextNode(birthday);
    const nodeNacionalidad = document.createTextNode(nacionalidad);

    //agregar node a la etiqueta
    thID.appendChild(nodeID);
    tdNumIden.appendChild(nodeNumIden);
    tdName.appendChild(nodeName);
    tdApellido.appendChild(nodeApellido);
    tdTel.appendChild(nodeTel);
    tdEmail.appendChild(nodeEmail);
    tdBirthday.appendChild(nodeBirthday);
    tdNacionalidad.appendChild(nodeNacionalidad);

    //crear atributos para cada etiqueta
    thID.setAttribute("scope", "row");
    
    //agregar etiquetas al row
    trow.appendChild(thID);
    trow.appendChild(tdNumIden);
    trow.appendChild(tdName);
    trow.appendChild(tdApellido);
    trow.appendChild(tdTel);
    trow.appendChild(tdEmail);
    trow.appendChild(tdBirthday);
    trow.appendChild(tdNacionalidad);

    //agregar row al contenedor
    contenedorCliente.appendChild(trow);
};
function mostrarClientes (){
    document.getElementById("listadoClientes").innerHTML="";
    console.log("consolMostrarClientes",listaClientesCGS)
    listaClientesCGS.forEach(element => {
        const nIDe = listaClientesCGS.indexOf(element);
        const numIden = element.clienteIDe;
        const name = element.clienteName;
        const apellido = element.clienteApellido;
        const tel = element.clienteTel;
        const email = element.clienteEmail;
        const birthday = element.clienteBirthday;
        const nacionalidad = element.clienteNacionalidad;
        console.log(element)
        //llamar funcion para crear cada row
        crearRowCliente(nIDe, numIden, name, apellido, tel, email, birthday, nacionalidad);
    });
};
////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion videojuegos
function agregarvideojuego(){
    event.preventDefault();
    const videojuegoNombreValue = document.getElementById("formNombreVideojuego").value;
    const videojuegoTematicaValue = document.getElementById("formTematicaVideojuego").value;
    const videojuegoValorValue = document.getElementById("formValorVideojuego").value;
    const videojuegoPuntosValue = document.getElementById("formPuntosVideojuego").value;
    const videojuego = {
        videojuegoNombre: videojuegoNombreValue,
        videojuegoTematica: videojuegoTematicaValue,
        videojuegoValor: videojuegoValorValue,
        videojuegoPuntos: videojuegoPuntosValue,
    };
    alert(`Se guardara el videojuego ${videojuegoNombreValue} en el registro`);
    listaVideojuegosCGS.push(videojuego);
    console.log("consoleAgregarVideojuego",listaVideojuegosCGS);
    mostrarVideojuego();
    llenarCampos();
    guardarLocalStorage();
};

function eliminarvideojuego(){
    event.preventDefault();
    const eliminarvideojuego = document.getElementById("inputIdVideojuego").value;
    alert(`Se eliminara el videojuego ${listaVideojuegosCGS[eliminarvideojuego].videojuegoNombre} del registro`);
    listaVideojuegosCGS.splice(eliminarvideojuego,1);
    console.log("consoleeliminarClienteCliente",listaVideojuegosCGS);
    mostrarVideojuego();
    llenarCampos();
    guardarLocalStorage();
};

function crearRowVideojuego(nID, name, tematica, valor, puntos){
    //crear contenedores y etiquetas
    const contenedorVideojuego = document.getElementById("listadoVideojuegos");
    const trow = document.createElement("tr");
    const thID = document.createElement("th");
    const tdName = document.createElement("td");
    const tdTematica = document.createElement("td");
    const tdValorLicencia = document.createElement("td");
    const tdPuntos = document.createElement("td");
    // crear nodes
    const nodethID = document.createTextNode(nID);
    const nodeThName = document.createTextNode(name);
    const nodeTdTematica = document.createTextNode(tematica);
    const nodeTdValorLicencia = document.createTextNode(valor);
    const nodeTdPuntos = document.createTextNode(puntos);
    //agregar node a la etiqueta
    thID.appendChild(nodethID);
    tdName.appendChild(nodeThName);
    tdTematica.appendChild(nodeTdTematica);
    tdValorLicencia.appendChild(nodeTdValorLicencia);
    tdPuntos.appendChild(nodeTdPuntos);
    //crear atributos para cada etiqueta
    thID.setAttribute("scope", "row");
    //agregar etiquetas al row
    trow.appendChild(thID);
    trow.appendChild(tdName);
    trow.appendChild(tdTematica);
    trow.appendChild(tdValorLicencia);
    trow.appendChild(tdPuntos);
    //agregar row al contenedor
    contenedorVideojuego.appendChild(trow);
};

function mostrarVideojuego(){
    document.getElementById("listadoVideojuegos").innerHTML="";
    console.log("consolMostrarvideojuegos",listaVideojuegosCGS)
    listaVideojuegosCGS.forEach(element => {
        const nID = listaVideojuegosCGS.indexOf(element);
        const name = element.videojuegoNombre;
        const tematica = element.videojuegoTematica;
        const valor = element.videojuegoValor;
        const puntos = element.videojuegoPuntos;
        console.log(element)
        //llamar funcion para crear cada row
        crearRowVideojuego(nID, name, tematica, valor, puntos);
});
}
////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion ventas
function llenarCampos(){
    //select para clientes
    const ventasSelectCLiente  = document.getElementById("ventasInCLiente");
    ventasSelectCLiente.innerHTML = "<option selected>Seleccione el Cliente</option>";
    listaClientesCGS.forEach(element => {
        const conteOpCliente = document.createElement("option");
        const nodeOpCliente = document.createTextNode((element.clienteName));
        const valuOpCliente = listaClientesCGS.indexOf(element);

        conteOpCliente.appendChild(nodeOpCliente);

        conteOpCliente.setAttribute("value", valuOpCliente);

        ventasSelectCLiente.appendChild(conteOpCliente)
    });
    //select para videojuegos
    const ventasSelectVideojuego = document.getElementById("ventasInVideojuego");
    ventasSelectVideojuego.innerHTML = "<option selected>Seleccione el videojuego</option>";
    listaVideojuegosCGS.forEach(element => {
        const conteOpVideojuego = document.createElement("option");
        const nodeOpVideojuego= document.createTextNode(element.videojuegoNombre);
        const valuOpVideojuego = listaVideojuegosCGS.indexOf(element);

        conteOpVideojuego.appendChild(nodeOpVideojuego);

        conteOpVideojuego.setAttribute("value", valuOpVideojuego);

        ventasSelectVideojuego.appendChild(conteOpVideojuego)
    });

};
const mostrarFactura = {
    mTdUserName : document.getElementById("mTdUserName"),
    mTdUserIDe : document.getElementById("mTdUserIDe"),
    mTdGameName : document.getElementById("mTdGameName"),
    mTGameValu : document.getElementById("mTdGameValu"),
    mTdGameIS : document.getElementById("mTdGameIS"),
    mTdGameeIva : document.getElementById("mTdGameIva"),
    mTGameValuTotal : document.getElementById("mTGameValuTotal"),
    mTGamePuntos : document.getElementById("mTGamePuntos"),
    limpiarCampos : function (){
        this.mTdUserName.innerHTML="";
        this.mTdUserIDe.innerHTML="";
        this.mTdGameName.innerHTML="";
        this.mTGameValu.innerHTML="";
        this.mTdGameIS.innerHTML="";
        this.mTdGameeIva.innerHTML="";
        this.mTGameValuTotal.innerHTML="";
        this.mTGamePuntos.innerHTML="";
    },
    llenarCampos: function(userNAme, userId, gameName, gameValu, gameIS, gameIva, gameValuTotal, gamePuntos){
        this.mTdUserName.innerHTML=(userNAme);
        this.mTdUserIDe.innerHTML=(userId);
        this.mTdGameName.innerHTML=(gameName);
        this.mTGameValu.innerHTML=(gameValu);
        this.mTdGameIS.innerHTML=(gameIS);
        this.mTdGameeIva.innerHTML=(gameIva);
        this.mTGameValuTotal.innerHTML=(gameValuTotal);
        this.mTGamePuntos.innerHTML=(gamePuntos);
    },
};
function generarFactura(){
    event.preventDefault();
    mostrarFactura.limpiarCampos
    const ventasCliente  = document.getElementById("ventasInCLiente").value;
    const ventasVideojuego = document.getElementById("ventasInVideojuego").value;
    let cliente = listaClientesCGS[ventasCliente];
    let videojuego = listaVideojuegosCGS[ventasVideojuego];
    console.log("cliente",cliente);
    console.log("videojuego",videojuego);
    let videojuegoValor = videojuego.videojuegoValor;
    let impuestoEspecial = (videojuegoValor)*0.04
    let iva = (videojuegoValor)*0.16
    let valutotal = (impuestoEspecial + iva) + Number(videojuegoValor);
    let user = cliente.clienteName + " " + cliente.clienteApellido;
    let userId = cliente.clientenIDe;
    let videojuegoName = videojuego.videojuegoNombre;
    let videojuegoPuntos = videojuego.videojuegoPuntos;
    mostrarFactura.llenarCampos(user, userId, videojuegoName, videojuegoValor, impuestoEspecial, iva, valutotal, videojuegoPuntos);
    let clientePuntos = Number(cliente.clientePuntos) + Number(videojuegoPuntos)
    listaClientesCGS[ventasCliente].clientePuntos = clientePuntos;
    console.log(clientePuntos);
    guardarLocalStorage();
};
/////////////////////////////////////////////////////////////////
// implementacion de recursos para seccion fidelizacion
function llenarCliFidelizacion (){
    event.preventDefault();
    const fidelizacionSelectCLiente  = document.getElementById("selectClientePuntos");
    fidelizacionSelectCLiente.innerHTML = "<option selected>Seleccione el Cliente</option>";
    listaClientesCGS.forEach(element => {
        const conteOpCliente = document.createElement("option");
        const nodeOpCliente = document.createTextNode((element.clienteName));
        const valuOpCliente = listaClientesCGS.indexOf(element);

        conteOpCliente.appendChild(nodeOpCliente);

        conteOpCliente.setAttribute("value", valuOpCliente);

        fidelizacionSelectCLiente.appendChild(conteOpCliente)
    });
};
function mostrarPuntos(){
    event.preventDefault();
    const cliente  = document.getElementById("selectClientePuntos").value;
    let puntos = listaClientesCGS[cliente].clientePuntos;
    console.log("puntos",puntos);
    document.getElementById("mostrarPuntos").innerHTML = `${puntos} Puntos`;
};
//funcion visualuzar contenido
function visualizarContenido(){
    mostrarClientes ();
    mostrarVideojuego();
    llenarCampos();
};

////////////////////////////////////////////////////////////////
//funciones para localstorage
function guardarLocalStorage () {
    //guargar clientes
    console.log("guardarlocal: ",JSON.stringify(listaClientesCGS));
    localStorage.setItem("clientesCGS", JSON.stringify(listaClientesCGS));
    console.log("storageCliente",JSON.parse(localStorage.getItem("clientesCGS")));
    //guardar juegos
    console.log("guardarlocal: ",JSON.stringify(listaVideojuegosCGS));
    localStorage.setItem("juegosCGS",JSON.stringify(listaVideojuegosCGS));
    console.log("storagevideojuegos",JSON.parse(localStorage.getItem("juegosCGS")));
};
const leerLocalStorage = {
    localListaClientesCGS: JSON.parse(localStorage.getItem("clientesCGS")),
    localListaVideojuegosCGS: JSON.parse(localStorage.getItem("juegosCGS")),
};
////////////////////////////////////////////////////////////////////////
//traeer informacion existente

//falta implementar
function cargarInfo() {
    if (leerLocalStorage.localListaClientesCGS != null) {
        console.log("lectura de local",leerLocalStorage.localListaClientesCGS);
        leerLocalStorage.localListaClientesCGS.forEach(element => {
            listaClientesCGS.push(element)});
        };
    if (leerLocalStorage.localListaVideojuegosCGS != null) {
        console.log("lectura de local",leerLocalStorage.localListaVideojuegosCGS);
        leerLocalStorage.localListaVideojuegosCGS.forEach(element => {
            listaVideojuegosCGS.push(element)});
        }
};

////////////////////////////////////////////////////////////////////////////////////////////////////
//Ejecucion en prueba
console.log("prueba leer localstorage",leerLocalStorage.localListaClientesCGS);
console.log("prueba leer localstorage",leerLocalStorage.localListaVideojuegosCGS);
cargarInfo();
visualizarContenido();
// EJECUCION
document.getElementById("btnAgregarCliente").addEventListener("click",agregarCliente);
document.getElementById("btnDeleteCliente").addEventListener("click",eliminarClienteCliente);
document.getElementById("btnAgregarVideojuego").addEventListener("click",agregarvideojuego);
document.getElementById("btnDeleteVideojuego").addEventListener("click",eliminarvideojuego);
document.getElementById("btnComprarTiquete").addEventListener("click", generarFactura);
document.getElementById("selectClientePuntos").addEventListener("mouseover", llenarCliFidelizacion);
document.getElementById("inPuntosMostrar").addEventListener("click", mostrarPuntos);
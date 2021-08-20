function proses() {

    let namaresto = document.getElementById('namaresto').value;
    let tanggal = document.getElementById('tanggal').value;
    let namakasir = document.getElementById('namakasir').value;
    let item = document.getElementById('item').value;
    let harga = document.querySelector('.harga').value;



    document.getElementById('idresto').innerHTML = namaresto;
    document.getElementById('idtanggal').innerHTML = tanggal;
    document.getElementById('idkasir').innerHTML = namakasir;
    document.getElementById('iditem').innerHTML = item;
    document.getElementById('idharga').innerHTML = harga;
}


const btnAdd = document.querySelector(".btn-add");
const newContaineritem = document.getElementById("additem")
const newContainerharga = document.getElementById("addharga")
btnAdd.addEventListener("click", addBaru)
function addBaru(){
    const newitem = document.createElement("input")
    const newharga = document.createElement("input")
    newitem.setAttribute("class","item")
    newharga.setAttribute("class","harga")
    newitem.classList.add('form-control')
    newharga.classList.add('form-control')
    newitem.classList.add('item')
    newharga.classList.add('harga')
    newitem.classList.add('mt-2')
    newharga.classList.add('mt-2')
    newContaineritem.appendChild(newitem);
    newContainerharga.appendChild(newharga);
}

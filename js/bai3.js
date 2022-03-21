var so1 = null;
var so2 = null;
var pheptinh = null;
var kq = null;
function ganso(x) {
    if (pheptinh) {
        so2 = x;
    }
    else {
        so1 = x;
    }
}
function ganpheptinh(x) {
    pheptinh = x;
}
function thuchien() {
    switch (pheptinh) {
        case '+':
            kq = Number(so1) + Number(so2);
            break;
        case '-':
            kq = Number(so1) - Number(so2);
            break;
        case 'x':
            kq = Number(so1) * Number(so2);
            break;
        case ':':
            kq = Number(so1) / Number(so2);
            break;
    }
    document.getElementById("so1").value = so1;
    document.getElementById("pheptinh").value = pheptinh;
    document.getElementById("so2").value = so2;
    document.getElementById("kq").value = kq;
}
function lamlai() {
    so1 = null;
    so2 = null;
    pheptinh = null;
    kq = null;
    document.getElementById("so1").value = so1;
    document.getElementById("pheptinh").value = pheptinh;
    document.getElementById("so2").value = so2;
    document.getElementById("kq").value = kq;
}


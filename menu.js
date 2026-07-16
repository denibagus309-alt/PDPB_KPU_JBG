if(sessionStorage.getItem("login")!="true"){

window.location="login.html";

}

function logout(){

if(confirm("Apakah Anda yakin ingin keluar?")){

sessionStorage.clear();

localStorage.clear();

window.location="login.html";

}

}

//console.log("Parogram çalıştı");

//Bu bir fonksiyon. Bu yanlızca tetiklenince yada çağrılınca çalışır.
function closePromo(){
    //alert("Çalışrı");
    // console.log("Kapat fonksiyonu çalıştı");
     document.getElementById("promo").style.display="none";
}
window.onscroll = function(){topFunction()};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
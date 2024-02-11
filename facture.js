function resultat(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)*Number(b);
    t3.value = c;
    var d = document.getElementById("t4").value;
    var e = document.getElementById("t5").value;
    var f = Number(d)*Number(e);
    t6.value = f;
    var g = document.getElementById("t7").value;
    var h = document.getElementById("t8").value;
    var i = Number(g)*Number(h);
    t9.value = i;
    var j = Number(c)+Number(f)+Number(i);
    t10.value = j;
}

function reinitialiser(){
    window.location.reload();
}
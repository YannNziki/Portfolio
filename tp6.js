function calcul_moyenne(){
    var n1= prompt ("Donner la premiere note:");
    var n2= prompt ("Donner la deuxieme note");
    var n3= prompt ("Donner la troisieme note");
   
    var somme = Number(n1)+Number(n2)+Number(n3);
   
    document.write ("Voici la somme:" +somme+ "<Hr>");
    var moyenne = somme/3;
    
    document.write ("Voici la moyenne:" +moyenne+ "<br>");

    if (moyenne<10)
    document.write("Vous etes redoublant");
    else 
    document.write("Vous etes Admis");


}

function test_age(){
    var age= prompt ("Donnez votre age:");
    if (age<18){
    document.write("Vous etes Mineure");
        document.bgColor = "red"; 

    }
    else{
    document.write("Vous etes Majeure");
    document.bgColor = "green"
    }
}

function simple_affichage(){
    var nom= prompt ("Quelle est votre nom?");
    var prenom = prompt ("Quelle est votre prenom?");

    document.write ('<div style = "margin:auto; width:300px; border:2px solid blue;">');
    document.write ("Bonjour" + nom + prenom );
    document.write ('</div>');
}

function test_couleur(){
    var c = prompt("Donner une couleur");
    if(c=="rouge"|| c == "Rouge"){
        document.body.style.background = "red"
    }
    else if (c=="bleu"|| c == "BLEU"){
        document.body.style.background = "blue"
    }
    else {
        document.body.write("Couleur non comprise");
    }
}
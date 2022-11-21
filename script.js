// <---------Horloge
function afficheHeure(e){
    let dateActuel = new Date();
    let date = dateActuel.getDay();
    let heure = dateActuel.getHours();
    let minute = dateActuel.getMinutes();
    let seconde = dateActuel.getSeconds();
    let temps = "am";
    console.log('allo');
   minute = AfficherZero(minute);
   seconde = AfficherZero(seconde);
    
    if( heure > 12){
        temps = "pm";
        heure = (heure)%12;
    }
    else{
        temps ="am"
    }

 let displayHeure = document.getElementById('horloge');
 displayHeure.innerHTML = heure + ":" + minute + ":" + seconde + " " + temps;
 return;
}
setInterval(afficheHeure, 1000);
function AfficherZero(valeur){

    if(valeur < 10){
        valeur = "0" + valeur;
    }


 return valeur;
}
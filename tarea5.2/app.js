
function calcularnota(nota) {
  
    let notaletra = '';
    
    if (nota >= 90){
        notaletra = 'A';
    } else if (nota >= 80){
            notaletra = 'B';
    } else if (nota >= 70){
            notaletra = 'C';
    } else if (nota >= 60){
            notaletra = 'D';
    } else {
        notaletra = 'F'; 
    }
    
    console.log(nota + ' es igual a ' + notaletra);

}


calcularnota(100);
calcularnota(80);
calcularnota(59);
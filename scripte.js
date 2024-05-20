function Convertir() {
    let tauxDeChange = [["USD to MAD", 10.4], ["USD to EUR", 0.95], ["USD to GBP", 0.8],
    ["EUR to MAD", 10.849], ["EUR to GBP", 0.866], ["GBP to MAD", 12.528]];
    let montant = document.getElementById("montant").value;
    let deviseSource = document.getElementById("deviseSource").value;
    let deviseCible = document.getElementById("deviseCible").value;
    let resultat = document.getElementById("resultat");
    let sensConvertir1 = deviseSource + " to " + deviseCible;
    let sensConvertir2 = deviseCible + " to " + deviseSource;
    let taux;

    for (let i = 0; i < tauxDeChange.length; i++) {
        if (montant <= 0) {
            alert("enter un montant valide"); break
        }
        else if (sensConvertir1 === tauxDeChange[i][0]) {
            taux = tauxDeChange[i][1];

            resultat.innerHTML = montant * taux + " " + deviseCible
        }
           else if (sensConvertir2 === tauxDeChange[i][0]) {
            taux = tauxDeChange[i][1];

            resultat.innerHTML = montant / taux + " " + deviseCible
        }
        else if (deviseSource == deviseCible) {
            alert("entrer une devise differente de " + deviseSource); break
        }
       
        }  
    }
    


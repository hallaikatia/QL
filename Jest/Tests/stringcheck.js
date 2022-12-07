function isEmpty(chaine){
    let nouvelle_chaine = chaine.trim();
    return nouvelle_chaine.length == 0;
}

function isInt(chaine){
    return (Number.isInteger(Number.parseInt(chaine)));
}

function isSmallPositiveInt(chaine){
    if(isInt(chaine)){
        let entier = parseInt(chaine);
        if(entier >= 0 && entier < 100){
            return true;
        }
    }
    return false;
}
module.exports = {isEmpty, isInt, isSmallPositiveInt};

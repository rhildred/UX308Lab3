//Take a variable with distance in **kilometres** as input and output the same distance *convert*ed to **miles**.
function convertKilometersToMiles(kilometers){
    let miles = kilometers/1.609;
    return miles;
}

export {convertKilometersToMiles}
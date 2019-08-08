let resultado=document.getElementById('cont')
let e = document.getElementById('exampleFormControlSelect1');
let watt = e.options[e.selectedIndex].value;

let price;
let cost = 100;
let getPrice = () => {
    switch (watt){
        case '1':
            price = 250 * cost
            break
        case '2':
            price = 400 * cost
            break
        case '3':
            price = 1000 * cost
            break
        case '4':
            price = 2000 * cost
            break
        case '5':
            price = 2500 * cost
            break
        default:
            price = 250 * cost
    }
}

document.getElementById('price').innerHTML= getPrice()
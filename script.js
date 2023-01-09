// Shopping Cart
let main_dish = ''
let drink = ''
let dessert = ''

// Send Button
const sendButton = document.querySelector('button');

// Pick the selected plate
function pickPlate(element) {
    //Verify if the selected dish is the main dish, the drink or the dessert

    // Main Dish
    if(element.classList.contains('main-dish')) {
        if(main_dish == '') {
            main_dish = element    
            addStyle(main_dish)
        } else {
            if(element != main_dish) {
                addStyle(main_dish)
                main_dish = element
                addStyle(main_dish)
            }
        }
    // Drink
    } else if(element.classList.contains('drink')) {
        if(drink == '') {
            drink = element    
            addStyle(drink)
        } else {
            if(element != drink) {
                addStyle(drink)
                drink = element
                addStyle(drink)
            }
        }
    // Dessert        
    } else {
        if(dessert == '') {
            dessert = element    
            addStyle(dessert)
        } else {
            if(element != dessert) {
                addStyle(dessert)
                dessert = element
                addStyle(dessert)
            }
        }
    }
    handleSendButton()
}

// Add the selected style to the plate
function addStyle(plate) {
    const check = plate.querySelector('.bottom-part-container .check-container')
    check.classList.toggle('hide')
    plate.classList.toggle('active');
}

// Verify if all the dishes are selected if so, then it removes the disabled attribute.
function handleSendButton() {
    if(main_dish != '' && drink != '' && dessert != '') {
        sendButton.removeAttribute('disabled')
        sendButton.innerText = 'Fechar Pedido'
    }
}

// Send all the information of the order via whatsapp 
function sendInfo() {
    const mainPrice = (Number(main_dish.children[3].children[0].innerText.replace('R$ ', '').replace(',', '.')) + Number(drink.children[3].children[0].innerText.replace ('R$ ', '').replace(',', '.')) + Number(dessert.children[3].children[0].innerText.replace('R$ ', '').replace(',', '.'))).toFixed(2);

    const whatsappLink = "https://wa.me/5521980921862?text="
    const messageTemplate = `
    Olá, gostaria de fazer o pedido: \n- Prato: ${main_dish.children[1].innerText} 
    \n- Bebida: ${drink.children[1].innerText} 
    \n- Sobremesa: ${dessert.children[1].innerText} 
    \n- Total: R$ ${mainPrice}
    `;
    const encodedMessage = encodeURIComponent(messageTemplate)

    window.open(whatsappLink + encodedMessage, "_blank")
}
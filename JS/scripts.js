
(function() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const checkoutBtn = document.getElementById('checkout');


    // FIRSTNAME
    firstName.addEventListener("change", function(event) {
        //if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);

        if (firstName.value === "" || !fname) {
            document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");        
        } else {
            document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
        }

        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    // LASTNAME
    lastName.addEventListener("change", function(event){
        //if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);
        
        if (lastName.value === "" || !lname) {
            document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
        } else {
            document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
        }

        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    email.addEventListener("change", function(event){
        //if the 3 fields aren't empty enable checkout button
        let fname = checkName(firstName.value);
        let lname = checkName(lastName.value);
        let mail = validateEmail(email.value);

        if (email.value === "" || !mail) {
            document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        } else {
            document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
        }

        if(fname && lname && mail === true){
            checkoutBtn.disabled = false;
            document.getElementById('custom-error').style.display = "none";
        } else {
            document.getElementById('custom-error').style.display = "block";
        }
    });

    checkoutBtn.addEventListener('click', function(){
        document.getElementsByClassName('modal')[0].innerHTML = "<center><h1> Checkout Complete! </h1></center>";
    });

    //products actions - remove item
    const removeBtn = document.getElementsByClassName('remove-item');
    const updateRow = function(event){
        event.preventDefault();
        let target = event.target;
        console.log(target);
        let targetPrice = target.parentElement.parentElement.children[4].innerHTML;  //parent.parent ??
        deleteRow(target);
        updatePrice(targetPrice);
    };

    // add click events for remove buttons
    for(let i = 0; i < removeBtn.length; i++){
        removeBtn[i].addEventListener('click', updateRow, false);
    }

    // increase quantity
    const increaseBtn = document.getElementsByClassName('add');
    const increaseQuantity = function(event){
        event.preventDefault();
        let target = event.target;
        let quantity = target.parentElement.children[1].innerHTML;
        let total = document.getElementsByClassName('total')[0];
        let unitPrice = target.parentElement.parentElement.children[2].innerHTML;
        let rowTotal = target.parentElement.parentElement.children[4];


        rowTotal.innerHTML = Number(quantity) * Number(unitPrice);
    }

    // add click events for - and + buttons
    for(let i = 0; i < increaseBtn.length; i++){
        increaseBtn[i].addEventListener('click', increaseQuantity, false);
    }

})();

// function checkName(name){

// }


/***************  MAIN FUNCTION  ****************/
// (function() {
// })();
// /********************* END MAIN FUNCTION **********************/

// /********** HELP FUNCTIONS **********/
function checkName(name) {
    let letters = /^[A-Za-z]+$/;
    if (name.match(letters)){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const deleteRow = (target) => {
    target.parentElement.parentElement.style.display = "none";
}

const updatePrice = (targetPrice) => {
    let total = document.getElementsByClassName('total')[0];
    total.innerHTML = total.innerHTML - targetPrice;
}

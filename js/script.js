// function getDiscount(){
//     SelectedDiscount = document.querySelector('#selector');
//     valueSelectedDiscount = SelectedDiscount.value
//     console.log(valueSelectedDiscount);

//     let textSelector = document.querySelector('#selector');
//     text = textSelector.options[textSelector.selectedIndex].text;
// }

// function getPrice(){
//     initialPrice = document.querySelector('#input');
//     valueInitialPrice = initialPrice.value   

//     console.log(valueInitialPrice);
// }

// function operation() {
//     switch (valueSelectedDiscount) {
//         case 'discount_10':
//             resultOperation = Math.floor(valueInitialPrice*10)/100; 
//             console.log('el resultado es ' + resultOperation);

//             let showResult = document.querySelector('#results');
//             showResult.textContent = (`El ${text} de ${valueInitialPrice} es ${resultOperation}`)
//             break;
//         case 'discount_25':
//             resultOperation = Math.floor(valueInitialPrice*25)/100; 
//             console.log('el resultado es ' + resultOperation);
            
//             break;
//         case 'discount_50':
//             resultOperation = Math.floor(valueInitialPrice*50)/100; 
//             console.log('el resultado es ' + resultOperation);

//             break;
//         case 'discount_75':
//             resultOperation = Math.floor(valueInitialPrice*75)/100; 
//             console.log('el resultado es ' + resultOperation);

//             break;
//         case 'discount_90':
//             resultOperation = Math.floor(valueInitialPrice*90)/100; 
//             console.log('el resultado es ' + resultOperation);

//             break;
//         default:
//           console.log('No funciona.');
//       }
// }



const allCoupons = [
    {
        discountName: 'Puoy',
        discount: 10,
    },
    {
        discountName: 'Platzi2021',
        discount: 25,
    },
    {
        discountName: 'NeverStopLearn',
        discount: 50,
    },
    {
        discountName: 'JSCourse',
        discount: 75,
    },
    {
        discountName: 'Versa',
        discount: 90,
    }
];

function validateCoupon(){
   
    userPriceValue = document.querySelector('#inputPrice').value;
    userCouponValue = document.querySelector('#inputCoupon').value;
   
    const couponValidator = allCoupons.some((element) => {
        return element.discountName == userCouponValue;
    });
    console.log(couponValidator)

    if(couponValidator) {
        // const PriceValue = userPriceValue;
        const coupon = allCoupons.find((element) => {
            return element.discountName === userCouponValue;
        });

        // const CouponDiscount = coupon.discount;
        console.log(`El codigo de cupon es valido`)
        const result = (userPriceValue * coupon.discount)/100;

        const coupon_validate = document.querySelector('#coupon_validate');
        const discount_total = document.querySelector('#discount_total');
        const results_finalPrice = document.querySelector('#results_finalPrice');
        coupon_validate.innerText = (`El codigo del cupon es valido
        `);
        discount_total.innerText = (`Se ha descontado el ${coupon.discount}% a tu producto`);
        results_finalPrice.innerText = (`El precio total de tu producto es $${result}USD`);
    }
    else {
        const coupon_validate = document.querySelector('#coupon_validate');
        coupon_validate.innerText = (`El codigo del cupon es invalido`)
    }
}

// function calculateDiscount(){
//     const calculate = userPriceValue - 


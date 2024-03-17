//  this is the context of the namaste js 1

// CallBack Hell

// console.log("HEllo");

// setTimeout(() => {
    
// console.log("HEllo3");
// }, 5000);
// console.log("HEll2");

ap1.createOrder(Cart, function () {

    ap2.proceedtoPayment( function () {
    
        api3.showorderSummary(function () {
    
            api.updateWallet(function () {
    
 // the structure made by simultanoeusly calling the api forms an figure of 
 // pryamid of doom, which is also call as callback hell 
           
            })
        
        })
    
    })

}) 


// issues (iversion of the control -- loosing controls over the functions)
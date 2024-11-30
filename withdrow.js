

//step 1: add EventLishtener to withdrow button

document.getElementById('btn_withdrawNow').addEventListener('click',function(){

    //step 2: get deposit amount from the deposit field
    // For input field to use .value to get the input value
    const withdrowField = document.getElementById('withdrawNow_field')
    const newWithdrowAmountString =withdrowField.value
    const newWithdrowAmount =parseFloat(newWithdrowAmountString);
    console.log(newWithdrowAmount)
    
    //step 3: get the current deposit value
    
    const withdrowTotal =document.getElementById('Withdrow_total')
    const previousWithdrowTotalString =withdrowTotal.innerText;
    const previousWithdrowTotal =parseFloat(previousWithdrowTotalString);
    console.log(previousWithdrowTotal);
    
    //step 4: add number set to total deposit
    const currentWithdrowAmount = newWithdrowAmount + previousWithdrowTotal;
    
    //set the deposit total;
    withdrowTotal.innerText = currentWithdrowAmount;
    
    //step 5: get balance total value
    
    const balanceTotal = document.getElementById('Balance_total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalancetotal =parseFloat(previousBalanceTotalString);
    console.log(previousBalancetotal);
    
    //step 6: calculate current total balance
    const currentTotalBalance = previousBalancetotal -  newWithdrowAmount;
    balanceTotal.innerText= currentTotalBalance;
    
    //step 7: clear the deposit field
    
    withdrowField.value ="";
    
    })
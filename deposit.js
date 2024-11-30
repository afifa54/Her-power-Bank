

//step 1: add EventLishtener to deposit button

document.getElementById('btn_depositNow').addEventListener('click',function(){

//step 2: get deposit amount from the deposit field
// For input field to use .value to get the input value
const depositField = document.getElementById('depositNow_field')
const newDepositAmountString =depositField.value
const newDepositAmount =parseFloat(newDepositAmountString);
console.log(newDepositAmount)

//step 3: get the current deposit value

const depositTotal =document.getElementById('Deposit_total')
const previousDepositTotalString =depositTotal.innerText;
const previousDeposit =parseFloat(previousDepositTotalString);
console.log(previousDeposit);

//step 4: add number set to total deposit
const currentDepositAmount = newDepositAmount + previousDeposit;

//set the deposit total;
depositTotal.innerText = currentDepositAmount;

//step 5: get balance total value

const balanceTotal = document.getElementById('Balance_total');
const previousBalanceTotalString = balanceTotal.innerText;
const previousTotalBalance =parseFloat(previousBalanceTotalString);
console.log(previousTotalBalance);

//step 6: calculate current total balance
const currentTotalBalance = previousTotalBalance +  newDepositAmount;
balanceTotal.innerText= currentTotalBalance;

//step 7: clear the deposit field

depositField.value ="";

})
/*
  1. add event listener to the deposit button 
  2. get deposit amount from the deposit input field
  2.5. convert string deposit amount to a number type
  3. get the deposit total
  4.calculate new deposit and set the value to the deposit total 
  5. get the total balance
  6. calculate new total balance and set the value to the total balance

  7. clear the deposit input field after getting the value
*/

// step-1: 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step-2: 
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);
    // console.log(newDeposit);

    // step-3: 
    const totalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

    // step-4: 
    const currentTotalDeposit = previousTotalDeposit + newDeposit;

    totalDepositElement.innerText = currentTotalDeposit;

    // step-5: 
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    // step-6: 
    const currentTotalBalance = previousTotalBalance + newDeposit;

    totalBalanceElement.innerText = currentTotalBalance;



   // step-7: 
    depositField.value = '';
})
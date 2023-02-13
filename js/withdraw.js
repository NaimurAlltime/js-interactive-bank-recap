/*
  1. add event listener to the withdraw button 
  2. get withdraw amount from the deposit input field
  2.5. convert string withdraw amount to a number type
  3. get the withdraw total
  4.calculate new withdraw and set the value to the withdraw total 
  5. get the total balance
  6. calculate new total balance and set the value to the total balance

  7. clear the withdraw input field after getting the value
*/

// step-1: 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    // step-3: 
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previousTotalWithdrawString = totalWithdrawElement.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

    // step-4:
    const currentTotalWithdraw = previousTotalWithdraw + newWithdraw;

    totalWithdrawElement.innerText = currentTotalWithdraw;

    // step-5:
    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    // step-6:
    const currentTotalBalance = previousTotalBalance - newWithdraw;

    totalBalanceElement.innerText = currentTotalBalance;

   // step-7: 
    withdrawField.value = '';
})
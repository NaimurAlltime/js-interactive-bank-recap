document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositString = depositField.value;
    const newDeposit = parseFloat(newDepositString);
    // console.log(newDeposit);

    const totalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

    const currentTotalDeposit = previousTotalDeposit + newDeposit;

    totalDepositElement.innerText = currentTotalDeposit;

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);

    const currentTotalBalance = previousTotalBalance + newDeposit;

    totalBalanceElement.innerText = currentTotalBalance;




    depositField.value = '';
})
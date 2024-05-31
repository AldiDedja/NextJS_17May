let account = {
    name : "Aldi",
    balance : 25000
};


function withdraw(account, amount) {
    if (amount > account.balance) {
        console.log(`Your requested withdrawal of $${amount} is not available, your balance is not sufficient. Please try another amount! Your current balance is: $${account.balance}.`);
    }
    else {
        account.balance -= amount ; 
        console.log(`$${amount} is withdrawn successfully from your account balance. Your current balance is: $${account.balance}.`);
    }
}

withdraw(account, 26000); //case when the amount requested is > account balance 



withdraw(account, 10000); //case when the amount requested is within the balance available in the account
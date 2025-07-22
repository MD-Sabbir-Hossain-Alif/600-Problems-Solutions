
//TODO: MFS: Practice
/* ------------------------------- Project 03 ------------------------------- */

const userDatabase = (function () {
    const users = [];
    const transactionHistory = [];
    let processingFee = 0;
    return {
        registerUser: function (name, pin) {

            // validation Regex method

            if(typeof name !== "string") {
                // console.log(name)
                return "error"
            }

            function validPin(pin) {
                const stringPin = pin.toString()
                const regex = /^\d{4}$/;
                return regex.test(stringPin);
            }

            if(!validPin(pin)) {
                // console.log()
                return "error"
            }

            //new user
            const newUser = {
                id: users.length + 1,
                name,
                pin,
                balance: 0
            };
            users.push(newUser);
            return true;

        },
        // getUsers: function() {
        //     return users;
        // },

        loginUser: function(name, pin) {
            const user = users.find(user => user.name === name && user.pin === pin);
            return user;
        },

        addMoney: function(name, pin, amount) {
            const user = this.loginUser(name, pin);
            if(user) {
                user.balance += amount;
                // console.log(`Account Name: ${user.name} & New Balance: ${user.balance}`);
                this.transactionRecord("Agent/Bank/Others", user.name, amount);
                return `Account Name: ${user.name} & New Balance: ${user.balance}`;
            }
            return `Sorry! Your money was not added. Your money will be refunded`;
        },

        checkBalance: function(name, pin) {
            const user = this.loginUser(name, pin);
            if(user) {
                return `Balance: ${user.balance}`
            }
            return `You have no Access for check this account Balance`
        },

        sendMoney: function(name, pin, receiverName, amount ) {
            const user = this.loginUser(name, pin);
            if(!user) {
                return "You have no access to sand money"
            }

            const sendMoneyFee = 15;
            const totalAmount = amount + sendMoneyFee;

            if(user.balance < totalAmount) {
                return "You have insuffcient Balance"
            }

            const receiver = users.find(receiver => receiver.name === receiverName);
            if(!receiver) {
                return "Receiver not found"
            }

            user.balance -= totalAmount;
            receiver.balance += amount;

            //add sendMoney fee to ProcessingFee
            processingFee += sendMoneyFee;

            this.transactionRecord(user.name, receiver.name, amount);

            return `Sent money successfully`
        },

        getProcessingFee: function() {
            return processingFee;
        },

        transactionRecord: function(sender, receiver, amount) {
            const transaction = {
                sender,
                receiver,
                amount
            }
            transactionHistory.push(transaction);
        },

        getTransactionRecord: function() {
            return transactionHistory;
        }
    };
} ) ();

console.log(userDatabase.registerUser("Alice",1234));
console.log(userDatabase.registerUser("Sabbir",3435));
// Output: true

// console.log(userDatabase.getUsers());

console.log(userDatabase.loginUser("Alice", 1234))
// Output: false

console.log(userDatabase.addMoney("Alice", 1234, 6000))
// Output: Account Name: Alice & New Balance: 6000

console.log(userDatabase.addMoney("Sabbir", 3435, 3000))
// Output: Account Name: Sabbir & New Balance: 3000

console.log(userDatabase.checkBalance("Alice", 1234))
// Output: Balance 6000

console.log(userDatabase.sendMoney("Alice", 1234, "Sabbir", 2000))
console.log(userDatabase.sendMoney("Alice", 1234, "Sabbir", 2000))
// Output: Sent money successfully

console.log(userDatabase.checkBalance("Alice", 1234))
// Output: Balance 1970

console.log(userDatabase.checkBalance("Sabbir", 3435))
// Output: Balance 7000

console.log(userDatabase.getTransactionRecord());
// Output: []

console.log(userDatabase.getProcessingFee())
// Output: 30

//? Oh no, it took me around 16 hours to complete this MFS project.
//? I feel like I was working on a real project — it was both exciting and frustrating, and it really challenged my mindset
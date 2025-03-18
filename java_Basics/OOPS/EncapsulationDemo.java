
/*  Encapsulation is the process of hiding the internal details of a class and only
     exposing what is necessary. 
     It helps in data security, modularity, and maintainability in object-oriented programming.*/


// Example:
class BankAccount {
    private String owner;
    private double balance;

    BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println(amount + " deposited successfully.");
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println(amount + " withdrawn successfully.");
        } else {
            System.out.println("Invalid withdrawal amount.");
        }
    }
}

public class EncapsulationDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("John Doe", 1000);
        System.out.println("Initial Balance: " + account.getBalance());

        account.deposit(500);
        System.out.println("Updated Balance: " + account.getBalance());

        account.withdraw(200);
        System.out.println("Final Balance: " + account.getBalance());
    }
}

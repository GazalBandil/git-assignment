// 2) Write a program to demonstrate the use of arithmetic, logical, and relational operators.


public class Operators {
    public static void main(String[] args) {
        // Arithmetic Operators
        int a = 10, b = 5;
        System.out.println("Arithmetic Operators:");
        System.out.println("Addition: " + (a + b));  
        System.out.println("Subtraction: " + (a - b)); 
        System.out.println("Multiplication: " + (a * b)); 
        System.out.println("Division: " + (a / b)); 
        System.out.println("Modulus: " + (a % b));

        // Relational Operators
        System.out.println("\nRelational Operators:");
        System.out.println("a == b: " + (a == b)); 
        System.out.println("a != b: " + (a != b)); 
        System.out.println("a > b: " + (a > b)); 
        System.out.println("a < b: " + (a < b)); 
        System.out.println("a >= b: " + (a >= b));
        System.out.println("a <= b: " + (a <= b)); 

        // Logical Operators
        boolean x = true, y = false;
        System.out.println("\nLogical Operators:");
        System.out.println("x && y: " + (x && y)); 
        System.out.println("x || y: " + (x || y));
        System.out.println("!x: " + (!x)); 
    }
}

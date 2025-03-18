

import java.util.Scanner;

public class ExceptionHandlingDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Enter a number: ");
            int number = Integer.parseInt(scanner.nextLine());
            System.out.println("You entered: " + number);
        } catch (NumberFormatException e) {
            System.out.println("Oops! That wasn't a valid number. Try again.");
        } finally {
            scanner.close();
            System.out.println("Program execution complete.");
        }
    }
}


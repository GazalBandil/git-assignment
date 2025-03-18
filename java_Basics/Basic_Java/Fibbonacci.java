import java.util.Scanner;
public class Fibbonacci{

    public static void main (String[] args){

         Scanner sc = new Scanner(System.in);

         System.out.println("Enter the number to find the fibonacci series");
            int num = sc.nextInt();

            int fib0 = 0;
            int fib1 = 1;

            int  fib;

            System.out.println("The fibonacci series is:" + fib0);
            System.out.println("The fibonacci series is:" + fib1);

            for(int i= 2 ; i<=num ; i++){

               fib = fib0 + fib1;
               System.out.println("The fibonacci series is:" + fib);

                fib0 = fib1;
                fib1 = fib;

            }

          


    }
}
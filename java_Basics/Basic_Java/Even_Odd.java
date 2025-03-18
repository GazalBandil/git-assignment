import java.util.Scanner;

public class Even_Odd{


    public static void main (String[] args){
       
       Scanner sc = new Scanner(System.in);

       System.out.println("Enter the number to check whether it is even or odd");
       int num = sc.nextInt();

       if(num%2 == 0){
        System.out.println("the number is even");
       }
       else{
        System.out.println("the number is odd");
       }
    }
} 
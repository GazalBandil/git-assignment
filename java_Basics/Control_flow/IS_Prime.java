// 1) Write a program to check if a given number is prime using an if-else statement.

import java.util.Scanner;
public class IS_Prime{
    public static void main (String[] args){
      
      Scanner sc = new Scanner(System.in);
      int num = sc.nextInt();

      if(num == 1 || num == 0){
            System.out.println("The number is not prime");
        }
        else{
            int count = 0;
            for(int i = 2; i<num ; i++){
                if(num%i == 0){
                    count++;
                }
            }
            if(count == 0){
                System.out.println("The number is prime");
            }
            else{
                System.out.println("The number is not prime");
            }
      }
          
    }
}
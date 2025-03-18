// 1) Write a program to find the average of elements in an array.

import java.util.Arrays;
import java.util.Scanner;

public class AvgofElements{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        int sum = 0;

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];  
        }

        double average = sum / n; 
        System.out.println("Average = " + average);

     
    }
}

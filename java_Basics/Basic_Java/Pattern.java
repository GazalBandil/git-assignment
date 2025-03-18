import java.util.Scanner;

public class Pattern{

    public static void main (String[] args){
        Scanner sc  = new Scanner(System.in);
        System.out.println("Type no of rows and Column");
        int row = sc.nextInt();
        
       
       //Patern of Square
        for(int i=0; i<row ;i++){
            for(int j=0;j<row;j++){
                System.out.print("* ");
            }
            System.out.println();
        }

        //Pattern of triangle

        for(int i = 1; i<=row ; i++){

            for(int j = row ;j>=i ; j--){
                System.out.print(" ");
            }

            for(int k = 1 ; k<=i ; k++){
                System.out.print("* ");
            }

             System.out.println();
        }
       



       

    }
}
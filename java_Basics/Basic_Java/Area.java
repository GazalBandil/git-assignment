
import java.util.Scanner;



public class Area{

    
public static double AreaOfCircle(int r){
    final double pi = 3.14;
    return pi*r*r;
};

public static double AreaOfRectangle(int l , int b){
    return l*b;
};

public static double AreaOfTriangle(int base , int height){
    return 0.5*base*height;
};

    public static void main (String[] args){

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the radius for circle");
        int r = sc.nextInt();
        System.out.println("The area of circle is:" + AreaOfCircle(r));

        System.out.println("Enter the length and breadth for rectangle");
        int l = sc.nextInt();
        int b = sc.nextInt();
        System.out.println("The area of rectangle is:" + AreaOfRectangle( l , b));

        System.out.println("Enter the base and height for triangle");
        int base = sc.nextInt();
        int height = sc.nextInt();
        System.out.println("The area of triangle is:" + AreaOfTriangle(base , height));
    }
}
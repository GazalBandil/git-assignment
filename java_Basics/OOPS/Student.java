
// Create a class to represent a student with attributes like name, roll number, and marks.

public class Student{

    private String name;
    private int rollNumber;
    private double marks;

    public Student(String name, int rollNumber, double marks){
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public void displayStudentInfo() {
        System.out.println("Student Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }



    public static void main(String[] args){

        Student s1 = new Student("Jhon", 101,90);
        Student s2 = new Student("Alice", 102,80);
        
        s1.displayStudentInfo();
        s2.displayStudentInfo();


    }
}

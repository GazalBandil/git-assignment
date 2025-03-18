
// Implement inheritance to create a "GraduateStudent" class that extends the "Student" class with additional features.


class Student {
    protected String name;
    protected int rollNumber;
    protected double marks;

   
    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

  
    public void displayStudentInfo() {
        System.out.println("Student Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

class GraduateStudent extends Student {
    private String researchTopic;

 
    public GraduateStudent(String name, int rollNumber, double marks, String researchTopic) {
        super(name, rollNumber, marks); 
        this.researchTopic = researchTopic;
    }

   
    @Override
    public void displayStudentInfo() {
        super.displayStudentInfo(); 
        System.out.println("Research Topic: " + researchTopic);
    }

    public static void main(String[] args) {
        GraduateStudent gradStudent = new GraduateStudent("Alice", 201, 92.5, "Machine Learning");
        gradStudent.displayStudentInfo();
    }
}

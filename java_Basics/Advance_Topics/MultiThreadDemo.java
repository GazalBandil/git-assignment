
// multi threading in java
// Threading in Java: Either extend Thread or implement Runnable.
// Example: Two separate tasks (Task1 and Task2) running simultaneously.
// Start Method: Begins execution of each thread.

// Example code
class Task1 extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task1 is running: " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Task1 interrupted");
            }
        }
    }
}

class Task2 implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Task2 is running: " + i);
            try {
                Thread.sleep(700);
            } catch (InterruptedException e) {
                System.out.println("Task2 interrupted");
            }
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        Task1 thread1 = new Task1();
        Thread thread2 = new Thread(new Task2());

        thread1.start();
        thread2.start();
    }
}

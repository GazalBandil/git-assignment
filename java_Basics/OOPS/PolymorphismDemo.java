class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}

class AdvancedCalculator extends Calculator {
    @Override
    int add(int a, int b) {
        System.out.println("Using Advanced Calculator");
        return a + b;
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        Calculator basic = new Calculator();
        AdvancedCalculator advanced = new AdvancedCalculator();

        System.out.println("Basic Calculator: " + basic.add(5, 10));
        System.out.println("Basic Calculator (Three Numbers): " + basic.add(3, 4, 5));
        System.out.println("Advanced Calculator: " + advanced.add(5, 10));
    }
}


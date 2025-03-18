/*Interface vs Abstract class

 Abstract Class: Works like a blueprint with some implemented methods and some left abstract for subclasses.
 Interface: A strict contract where all methods are abstract, ensuring any class implementing it must define them.

 Example: A Vehicle abstract class represents common properties of vehicles, while an Electric interface ensures electric vehicles have a chargeBattery method.
 A Car class extends Vehicle and implements Electric to demonstrate both concepts.*/

abstract class Vehicle {
    String name;

    Vehicle(String name) {
        this.name = name;
    }

    abstract void start();

    void stop() {
        System.out.println(name + " has stopped.");
    }
}

interface Electric {
    void chargeBattery();
}

class Car extends Vehicle implements Electric {
    Car(String name) {
        super(name);
    }

    @Override
    void start() {
        System.out.println(name + " starts with a key or push button.");
    }

    @Override
    public void chargeBattery() {
        System.out.println(name + " is charging...");
    }
}

public class InterfaceVsAbstract {
    public static void main(String[] args) {
        Car myCar = new Car("Tesla");
        myCar.start();
        myCar.chargeBattery();
        myCar.stop();
    }
}



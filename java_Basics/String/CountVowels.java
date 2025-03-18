import java.util.HashSet;
import java.util.Scanner;

public class CountVowels {
    public static int countVowels(String str) {
        HashSet<Character> vowels = new HashSet<>();
        for (char c : "aeiouAEIOU".toCharArray()) {
            vowels.add(c);
        }

        int count = 0;
        for (char ch : str.toCharArray()) {
            if (vowels.contains(ch)) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();
        System.out.println("Number of vowels: " + countVowels(str));
    }
}


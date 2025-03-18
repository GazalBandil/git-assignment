import java.util.Arrays;

public class AnagramChecker {
    public static boolean areAnagrams(String first, String second) {
        if (first.length() != second.length()) return false;

        char[] firstArr = first.toCharArray();
        char[] secondArr = second.toCharArray();

        Arrays.sort(firstArr);
        Arrays.sort(secondArr);

        return Arrays.equals(firstArr, secondArr);
    }

    public static void main(String[] args) {
        String word1 = "listen";
        String word2 = "silent";

        if (areAnagrams(word1, word2)) {
            System.out.println("They are anagrams!");
        } else {
            System.out.println("Not anagrams.");
        }
    }
}
public class SmallestIntegerFinder {
    public static int findSmallestInt(int[] args) {
        int smallestInt = args[0];

        for (int num : args) {
            if (num < smallestInt) {
                smallestInt = num;
            }
        }

        return smallestInt;
    }
}

public class SumArray {

    public static double sum(double[] numbers) {
        if (numbers.length == 0) {
            return 0.0;
        }
        double total = 0;
        for (int i = 0 ; i < numbers.length ; i++) {
            total += numbers[i];
        }
        return total;
    }
}

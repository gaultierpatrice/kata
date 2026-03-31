import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class BeachClub {
    String name;
    private int availableDeckchairs;
    private int availableUmbrellas;
    private int availableTowels;
    private ArrayList<Rental> rentals;

    public BeachClub(String name, int deckchairs, int umbrellas, int towels) {
        this.name = name;
        this.availableDeckchairs = deckchairs;
        this.availableUmbrellas = umbrellas;
        this.availableTowels = towels;
        this.rentals = new ArrayList<>();
    }

    public boolean rent(String customerName,int deckchairs, int umbrellas, int towels ) {
        if (deckchairs < 0 || umbrellas < 0 || towels < 0 ) {
            return false;
        }
        if (deckchairs == 0 && umbrellas == 0 && towels == 0) {
            return false;
        }
        if (deckchairs > availableDeckchairs || umbrellas > availableUmbrellas || towels > availableTowels) {
            return false;
        }
        Rental rental = new Rental(customerName,deckchairs,umbrellas,towels);
        rentals.add(rental);

        availableDeckchairs -= deckchairs;
        availableUmbrellas -= umbrellas;
        availableTowels -= towels;
        return true;
    }
    public Map< String, Integer> getRemainingStock() {
        Map< String, Integer> stock = new HashMap<>();
        stock.put("Available deckchairs", availableDeckchairs);
        stock.put("Available umbrellas", availableUmbrellas);
        stock.put("Available towels", availableTowels);
        return stock;
    }
    public int getActiveRentals() {
        return rentals.toArray().length;
    }

    public boolean returnRental(String customerName) {
        return rentals.removeIf(rental -> {
            if (rental.customerName.equals(customerName)) {
                availableDeckchairs += rental.deckchairs;
                availableUmbrellas += rental.umbrellas;
                availableTowels += rental.towels;
                return true;
            }
            return false;
        });
    }
}

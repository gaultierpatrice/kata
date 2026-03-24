import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Greenhouse {
    private Plant[] plants;

    public Greenhouse() {
        this.plants = new Plant[0];
    }

    public void addPlant (Plant plant) {
        Plant[] newPlants = new Plant[this.plants.length + 1] ;
        System.arraycopy(this.plants, 0 , newPlants, 0, this.plants.length);
        newPlants[this.plants.length] = plant;
        this.plants = newPlants;
    }

    public void waterAll(int amount) {
        for(Plant plant  : plants) {
            plant.water(amount);
        }
    }

    public void passDayForAll() {
        for(Plant plant  : plants) {
            plant.passDay();
        }
    }

    public Plant[] getPlantInDifficulty() {
        return Arrays.stream(plants).filter(plant -> plant.waterLevel < 2).toArray(Plant[]::new);
    }

    public Map<Plant.Status, Integer> countByStatus() {
        return Arrays.stream(plants).reduce(
                new HashMap<>(Map.of(Plant.Status.seed, 0, Plant.Status.sprout, 0, Plant.Status.flower, 0)),
                (acc, plant) -> {
                    acc.put(plant.status, acc.get(plant.status) + 1);
                    return acc;
                },
                (a, b) -> a
        );
    }
}

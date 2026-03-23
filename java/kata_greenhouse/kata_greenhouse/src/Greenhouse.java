import java.util.Map;

public class Greenhouse {
    public Plant[] plants;

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
            plant.waterLevel += amount;
        }
    }

    public void passDayForAll() {
        for(Plant plant  : plants) {
            plant.passDay();
        }
    }

    public Plant[] getPlantInDifficulty() {

       return plants;
    }

    public Map<Plant.Status, Integer> countByStatus() {
        return Map.of();
    }
}

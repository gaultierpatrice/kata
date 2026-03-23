public class Plant {

    String name;
    int waterLevel = 0;
    int growthLevel = 0;
    String status = "seed";



    public Plant(String name) {
        this.name = name;
    }

    public void addWater( int amount) {
        if (amount <= 0) {
            return;
        } else {
            this.waterLevel += amount;
        }
    }
    public void passDay() {
        if (this.waterLevel >= 2 ) {
            this.growthLevel += 1;
            this.waterLevel -= 2;
            System.out.println("eau consommée");
        }
        if (growthLevel >= 3) {
            this.status = "sprout";
        }
        if ( growthLevel > 6 ) {
            this.status = "flower";
        }
    }
    public void getSummary() {
        System.out.println("La plante possède " + this.waterLevel + " niveau d'eau, son growthLevel :" + growthLevel + " et est à l'état : " + this.status);
    }
}

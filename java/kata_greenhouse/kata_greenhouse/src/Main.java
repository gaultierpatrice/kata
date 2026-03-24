void main() {
    Plant tulip = new Plant("Tulipe");
    Plant daisy = new Plant("Pâquerette");
    Plant rose = new Plant("Rose");

    Greenhouse greenhouse = new Greenhouse();

    greenhouse.addPlant(tulip);
    greenhouse.addPlant(daisy);
    greenhouse.addPlant(rose);

    greenhouse.waterAll(5);
    greenhouse.passDayForAll();
    greenhouse.waterAll(5);
    greenhouse.passDayForAll();
    greenhouse.passDayForAll();
    greenhouse.passDayForAll();
    greenhouse.passDayForAll();
    tulip.getSummary();

    System.out.println(Arrays.toString(greenhouse.getPlantInDifficulty()));

    Plant lilas = new Plant("Lilas");
    greenhouse.addPlant(lilas);

    System.out.println(greenhouse.countByStatus());


}

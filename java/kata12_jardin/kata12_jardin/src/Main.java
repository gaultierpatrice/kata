void main() {
    System.out.println("Hello!");

    Plant tulip = new Plant("Tulipe");
    Plant rose = new Plant("Rose");
    Plant daisy = new Plant("Pâquerette");
    Plant lavender = new Plant("Lavande");

    tulip.addWater(4);
    rose.addWater(6);
    daisy.addWater(2);
    lavender.addWater(8);

    tulip.passDay();
    rose.passDay();
    daisy.passDay();
    lavender.passDay();

    tulip.passDay();
    rose.passDay();
    daisy.passDay();
    lavender.passDay();

    tulip.addWater(2);
    rose.passDay();
    daisy.passDay();
    lavender.passDay();

    tulip.getSummary();
    rose.getSummary();
    daisy.getSummary();
    lavender.getSummary();
}

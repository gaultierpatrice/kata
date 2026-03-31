void main() {
    BeachClub beachClub = new BeachClub("Sunny Waves", 20, 12, 30);

    beachClub.rent("Lina",2,1,2);
    beachClub.rent("Sam", 4, 2, 4);
    beachClub.rent("Noa", 1, 1, 1);
    beachClub.rent("Ari", 6, 3, 6);
    beachClub.rent("Mina", 3, 2, 3);


    System.out.println(beachClub.getRemainingStock());
    System.out.println(beachClub.getActiveRentals());
    System.out.println(beachClub.rent("Charlie", 5, 1, 2));
    System.out.println(beachClub.returnRental("Sam"));
    System.out.println(beachClub.getRemainingStock());
    System.out.println(beachClub.getActiveRentals());
    System.out.println(beachClub.returnRental("Unknown"));

}

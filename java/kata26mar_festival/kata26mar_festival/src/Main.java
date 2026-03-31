void main() {
    System.out.println("Hello World");

    FestivalEvent workshop = new FestivalEvent("Atelier rempotage", 10, 12, 12);
    FestivalEvent concert = new FestivalEvent("Concert acoustique", 11, 13, 20);
    FestivalEvent picnic = new FestivalEvent("Pique-nique collectif", 13, 15, 30);

    System.out.println(workshop.register(11));;
    System.out.println(concert.register(20));
    System.out.println(picnic.register(10));
}

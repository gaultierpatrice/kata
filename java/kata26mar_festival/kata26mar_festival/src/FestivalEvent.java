public class FestivalEvent {
    //attributs
    String name;
    private int startHour;
    private int endHour;
    private int maxAttendees;
    private int registeredAttendees = 0;
    private boolean isValid;

    //constructor
    public FestivalEvent(String name, int startHour, int endHour, int maxAttendees) {
        this.name = name;
        this.startHour = startHour;
        this.endHour = endHour;
        this.maxAttendees = maxAttendees;

        this.isValid = this.startHour > this.endHour && this.maxAttendees > 0;

    }


    //methods
    public boolean register(int count) {
        if (count <= 0) {
            return false;
        }
        if (registeredAttendees + count > maxAttendees) {
            System.out.println("Cannot register : book " + maxAttendees + " tickets max!");
            return false;
        }
        this.registeredAttendees = count;
        System.out.println("You booked " + registeredAttendees + " tickets for " + this.name + "!");
        return true;
    }

    public boolean isFull() {
        return registeredAttendees == maxAttendees;
    }

    public int getRemainingPlaces() {
        return maxAttendees - registeredAttendees;
    }

    public boolean hasConflictWith(FestivalEvent FestivalEvent) {
        return this.startHour < FestivalEvent.endHour && this.endHour > FestivalEvent.startHour;
    }


}

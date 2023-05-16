export const hall = [
  {
    RoomName: "Tesla",
    id: "101",
    bookedStatus: "vacant",
    customerName: "",
    date: new Date().toLocaleDateString(),
    StartTime: "",
    EndTime: "",
    SeatCapacity: 50,
    Amenities: "VC, AirConditioned, Projector",
    Price: "5000",
  },
  {
    RoomName: "Kelvin",
    id: "102",
    bookedStatus: "booked",
    customerName: "Kumar",
    date: new Date().toLocaleDateString(),
    StartTime: new Date("July 1, 2022, 9:00:00").toLocaleTimeString(),
    EndTime: new Date("July 1, 2022, 13:00:00").toLocaleTimeString(),
    SeatCapacity: 50,
    Amenities: "VC, AirConditioned, Projector",
    Price: "10000",
  },
  {
    RoomName: "Celsius",
    id: "103",
    bookedStatus: "booked",
    customerName: "Steve",
    date: new Date().toLocaleDateString(),
    StartTime: new Date("July 1, 2022, 14:00:00").toLocaleTimeString(),
    EndTime: new Date("July 1, 2022, 17:00:00").toLocaleTimeString(),
    SeatCapacity: 90,
    Amenities: "AirConditioned, Projector,Dining Hall",
    Price: "5000",
  },
  {
    RoomName: "Kaplan",
    id: "104",
    bookedStatus: "vacant",
    customerName: "",
    date: new Date().toLocaleDateString(),
    StartTime: "",
    EndTime: "",
    SeatCapacity: 30,
    Amenities: "Podium, Non-AC, Projector",
    Price: "3000",
  },
  {
    RoomName: "Charles",
    id: "105",
    bookedStatus: "booked",
    customerName: "Joseph",
    date: new Date().toLocaleDateString(),
    StartTime: new Date("July 1, 2022, 12:00:00").toLocaleTimeString(),
    EndTime: new Date("July 1, 2022, 15:00:00").toLocaleTimeString(),
    SeatCapacity: 80,
    Amenities: "Podium, AC, Projector, High Tea-Cafeteria",
    Price: "3000",
  },
];

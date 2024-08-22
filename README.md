I have mentioned API endpoints below for reference:

1. https://hall-booking-task-tuho.onrender.com/room/createroom
2. https://hall-booking-task-tuho.onrender.com/room/bookroom
3. https://hall-booking-task-tuho.onrender.com/room/roombookingdetails
4. https://hall-booking-task-tuho.onrender.com/room/customerbookingdetails
5. https://hall-booking-task-tuho.onrender.com/room/customerbookfrequency


   Data sample for create room:
   {
    "numberOfSeats":"10",
     "amenities":["chair","swimmingpool", "yoga", "parking"], 
     "pricePerHour":"10"
   }
   

   Data sample for bookroom:
   {
    "customerName":"Guvi",
    "Date":"20/07/2021",
    "Starttime":"16:30",
    "Endtime":"23:00",
    "RoomId":"2"
    }

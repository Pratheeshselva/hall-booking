let rooms = []
let bookings = []


const createroom = (req,res)=>{
    try {
        const { numberOfSeats, amenities, pricePerHour } = req.body;
        req.body.id = rooms.length? rooms[rooms.length-1].id + 1 : 1
        rooms.push(req.body)
       console.log(rooms)

        res.status(201).send({
            message:"Room is created successfully",
            rooms
        })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const bookroom = (req,res)=>{
try {
    const { CustomerName, Date, Starttime, Endtime, RoomId } = req.body;
    const Dupchecks = bookings.find(booking =>booking.RoomId == req.body.RoomId && booking.Date == req.body.Date &&  (booking.Starttime < req.body.Endtime && booking.Endtime > req.body.Starttime))
    const availablerooms = rooms.filter(room => String(room.id) !== String(req.body.RoomId) )
   
 

    if (!Dupchecks){
        req.body.id = bookings.length? bookings[bookings.length-1].id + 1 : 1
        bookings.push(req.body)
        const bookedroom = req.body
       
        res.status(201).send({
            message:"Booking successfull",
            bookedroom
        })
    

    }
    else{
          res.status(400).send({
            message: "Room already Booked or specific time slot not available",
            Availableroom_ids : availablerooms.map(e=> e.id)
          })
    }
    
   

   

} catch (error) {
    res.status(500).send({
        message:error.message || "Internal Server Error",
        error
    })
}
}

const   roombookingdetails = (req,res)=>{
    try {
        const bookingdetails = bookings.map(booking =>{
            const roomdetails = rooms.find(e => e.id == booking.RoomId )
           
            return {
             RoomId: roomdetails? booking.RoomId : "NA",
              Bookedstatus : roomdetails? "Booked" :"Available",
              CustomerName: roomdetails? booking.customerName : "NA",
              Date:roomdetails? booking.Date : "NA",
              Starttime:roomdetails? booking.Starttime : "NA",
              Endtime:roomdetails? booking.Endtime : "NA"

            }
        })
       res.status(200).send({
        message: "Rooms with booked data",
        bookingdetails
       })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const customerbookingdetails = (req,res)=>{
    try {
        const customerdetails = bookings.map(booking=>{
            const roomdetails = rooms.find(e=> e.id == booking.RoomId)
            return{
                CustomerName: roomdetails? booking.customerName : "NA",
                RoomId : roomdetails? booking.RoomId : "NA",
                Date:roomdetails? booking.Date : "NA",
                Starttime:roomdetails? booking.Starttime : "NA",
                Endtime:roomdetails? booking.Endtime : "NA"
            }
        })
        res.status(200).send({
            message: "Customers with booked data",
            customerdetails
           })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

const customerbookfrequency = (req,res)=>{
    try {
        const customernames = bookings.map(booking=> booking.customerName)
        console.log(customernames)
      const customerbookings = bookings.map(booking=>{
        const room = rooms.find(e=> e.id == booking.RoomId)
        return {
            customerName: booking.customerName,
            RoomId: booking.RoomId,
            Date: booking.Date,
            Starttime:booking.Starttime,
            Endtime:booking.Endtime,
            BookingId: booking.RoomId,
            Bookingdate:booking.Date,
            Bookingstatus: 'Booked'
        }
      })
      


        res.status(200).send({
            message: "Data fetch successful",
            customerbookings
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}

export default {createroom,bookroom,roombookingdetails,customerbookingdetails, customerbookfrequency}
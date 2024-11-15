module.exports = {
    hotelrooms: [],
    staff: [],

    // Add a room to the hotel
    addHotelRoom(roomNumber, roomtype) {
        if (this.hotelrooms.find(room => room.roomNumber === roomNumber)) {
            console.log(`Room ${roomNumber} already exists.`);
            return;
        }
        this.hotelrooms.push({ roomNumber, roomtype });
        console.log(`Hotel Room ${roomNumber} has been added.`);
    },

    // Get room by room number
    getRoom(roomNumber) {
        const room = this.hotelrooms.find(room => room.roomNumber === roomNumber);
        if (!room) {
            return "Room not found.";
        }
        return room;
    },

    // Get total amount of rooms
    getNumberOfRooms() {
        return this.hotelrooms.length;
    },

    // Add staff to the hotel
    addStaff(staffname,role) {
        this.staff.push({staffname:staffname, role:role});
        console.log(`Staff ${staffname} has been added.`);
    }, 

    // Get staff by name
    getStaff(staffname) {
        const staffMember = this.staff.find(staff => staff.staffname === staffname);
        if (!staffMember) {
            return "Staff member not found.";
        }
        return staffMember;
    },

    // Get all the staffs
    getAllStaff() {
        return this.staff;
    },
    
     // Get total number of staffs
     getNumberOfStaffs() {
        return this.staff.length;
    },

}
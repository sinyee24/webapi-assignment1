# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# How to use my node module

1. Download or Copy the code in LouSinYee_webapi.js
2. Create a app.js into the folder
3. Try out the differnet functions with the following codes:

```

const api = require("./webapi-assignment1/LouSinYee_webapi.js");

api.addHotelRoom("123","Standard");
api.addHotelRoom("124","Standard");
api.addHotelRoom("125","Standard");

console.log(api.getRoom("124"));
console.log(api.getRoom("125"));

console.log("The total number of rooms is ",api.getNumberOfRooms());

api.addStaff("Tom","Receptionist");
api.addStaff("Jerry","Bellboy");

console.log("The total number of staff is ",api.getNumberOfStaffs());

console.log(api.getStaff("Jerry"));

console.log(api.getAllStaff());
```

# Functions

1. addHotelRoom
    - Adding new room including room number and room type.

2. getRoom
    - Get room by room number.

3. getNumberOfRooms
    - Get the total amount of rooms.

4. addStaff
    - Add new staff including name and role.

5. getNumberOfStaffs
    - Get the total number of staffs.

6. getStaff
    - Get staff by name.

7. getAllStaff
    - Get all the saff.

# References
Provide the references that you have used to support your assignment. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
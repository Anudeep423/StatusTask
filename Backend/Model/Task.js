const mongoose = require("mongoose");


const TaskSchmema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Priority : {
        type : String,
        required : true
    },
    Date : {
        type : String,
        required : true
    },
    DueDate : {
        type : String,
        required : true
    },
    TaskStatus : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Task", TaskSchmema);

// Priority (Select any one from drop down menu - High, Medium, Low)
// 3. Date Created (Automatically capture Date and Time)
// 4. Due Date (Enter date)
// 5. Task status (at the time of creation, it will be "To Do". Should be able to change the tas
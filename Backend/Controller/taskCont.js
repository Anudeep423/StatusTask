const Task = require("../Model/Task")


exports.SaveTask = (req,res) => {
    
    const task = new Task(req.body);
    task.save((err, task) => {
        if (err) {
          return res.status(400).json({
            err: "NOT able to save user in DB"
          });
        }
        res.json({
          task
        });
      });

}
const db = require("../models")

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).sort({day:-1}).limit(1).then(function(data){
            console.log("testing the api call")
            res.json(data)
        })
    })

    app.post("/api/workouts", (req, res) => {
        // getting data from front end
        let data = req.body;
        
        db.Workout.create({
            
            day: new Date().setDate(new Date().getDate())
        }).then(response => {
            res.json(response)
        })
    })
}
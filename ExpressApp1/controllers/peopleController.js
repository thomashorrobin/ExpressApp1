(function (peopleController) {
    
    var people = [
        { id: 1, name: 'Thomas Horrobin', age: 25 },
        { id: 2, name: 'William Fussey', age: 31 },
        { id: 3, name: 'Blake Crayton-Brown', age: 25 }
    ];


    peopleController.init = function (app) {
        console.log('got here');

        app.get("/api/people", function (req, res) { 
            res.set("Content-Type", "application/json");
            res.send(people);
        });
        
        app.get("/api/people/:id", function (req, res) {
            console.log(req.params.id);
            res.set("Content-Type", "application/json");
            people.forEach(function (element, index) {
                if (element.id == req.params.id) {
                    res.send(element);
                }
            });
            //res.send('error');
        });
    };

})(module.exports);
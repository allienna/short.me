var appRouter = function(app) {

    var cats = [
        {
            "lastUpdate": 1460493345571,
            "name": "Toto",
            "score": 50,
            "url": "http://placekitten.com/500/200"
        },
        {
            "lastUpdate": 1460493457055,
            "name": "testtest",
            "score": 34,
            "url": "http://placekitten.com/500/300"
        }
    ];

    app.get("/cats", function(request, response) {
        response.json(cats)
    });

    app.post("/cats", function(request, response) {
        var lastUpdate = request.body.lastUpdate ? request.body.lastUpdate : new Date().getTime();
        var name = request.body.name;
        var url = request.body.url;

        var kitten = {
            "lastUpdate": lastUpdate,
            "name": name,
            "score": 0,
            "url": url
        }
        cats.push(kitten);

        response.json(cats);

    });
    
    app.put("/cats/:cat_id", function(request, response) {
       var catId = request.params.cat_id
       if(catId > cats.length) {
           res.send('Cat is not in the list', 404);
       }
       
       var cat = cats[catId];
       cat.score = request.body.score;
       response.json(cats);
    });
}

module.exports = appRouter
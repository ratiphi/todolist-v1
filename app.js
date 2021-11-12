const express = require("express");
const app = express();

app.set('view engine', 'ejs');

var items = ["Buy food", "Cook food", "Eat food"];

app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var currentDay = today.toLocaleDateString("en-US", options);

    res.render("list", {
        day: currentDay,
        itemList: items
    });
});

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    //console.log(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
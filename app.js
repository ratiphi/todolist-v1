const express = require("express");
const app = express();
let items = ["Buy food", "Cook food", "Eat food"];

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let currentDay = today.toLocaleDateString("en-US", options);

    res.render("list", {
        day: currentDay,
        itemList: items
    });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    //console.log(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
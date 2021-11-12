const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");
const items = ["Buy food"];
const workItems = ["Check email"];
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    let currentDay = date.getDate();
    res.render("list", {
        listTitle: currentDay,
        itemList: items,
        route: "/"
    });
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        itemList: workItems,
        route: "/work"
    });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    //console.log(item);
    res.redirect("/");
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    //console.log(item);
    res.redirect("/work");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
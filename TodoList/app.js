const express = require("express");
const bodyParser = require("body-parser");
const { render } = require("ejs");
const date = require(__dirname + "/date.js");
const app = express();

let items = ["dummy_data"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/", function (req, res) {

    let day = date.getDateEng();

    res.render("list", { listTitle: day, newListItem: items });
});
app.get("/work", function (req, res) {
    res.render("list", { listTitle: " Work-List", newListItem: workItems })
});
app.get("/about", function (req, res) {
    res.render("about");
});


app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work-List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.listen(3000, function (request, response) {
    console.log("running on 3000 port");
});
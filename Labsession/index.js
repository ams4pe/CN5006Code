var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.send("Hello, it is my first Express application!");
});

app.get("/about", function (req, res) {
    res.send("This is a basic Express application");
});

app.get("/users/:userId/books/:bookId", function (req, res) {
    res.send(req.params);
});

app.get("/GetStudents", function (req, res) {
    fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
        if (err) {
            res.status(500).send("Error reading the file");
            return;
        }
        res.json({
            status: true,
            Status_Code: 200,
            "Requested At": new Date(),
            "Request URL": req.url,
            "Request Method": req.method,
            studentdata: JSON.parse(data)
        });
    });
});

app.get("/GetStudentid/:id", function (req, res) {
    fs.readFile(__dirname + "/Student.json", "utf8", function (err, data) {
        if (err) {
            res.status(500).send("Error reading the file");
            return;
        }
        var students = JSON.parse(data);
        var student = students["Student" + req.params.id];
        if (student) {
            res.json(student);
        } else {
            res.json({
                status: false,
                message: "Student not found",
                Status_Code: 404
            });
        }
    });
});

app.get("/studentinfo", function (req, res) {
    res.sendFile(__dirname + "/StudentInfo.html");
});

app.post("/submit-data", function (req, res) {
    var name = req.body.firstName + " " + req.body.lastName;
    var age = req.body.age;
    var gender = req.body.gender;
    var qualification = req.body.qualification;

    res.json({
        status: true,
        message: "Form Submitted Successfully",
        data: {
            name: name,
            age: age,
            gender: gender,
            qualification: qualification
        }
    });
});

app.listen(5000, function () {
    console.log("Server is running on port 5000");
});

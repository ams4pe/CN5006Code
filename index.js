const express = require("express")
const fs = require("fs")
const bodyParser = require("body-parser")


const app = express()
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', function (request, response) {
response.send('Welcome to Express. This is my first server');
});


// exercise 2
app.get('/about', function (request, response) {
    response.send('This is a basic express application');
});

app.get('/users/:userId/books/bookId',function(request, response){

    response.send(request.params)
    });

    


app.get('/GetStudents',function (req,res) 
{ studentdata={} 
fs.readFile(__dirname + "/" + "Student.json", 'utf8', 
function (err, data) { console.log( data ); 
res.json({ 'status':true, 'Status_Code':200, 
'requested at': req.localtime, 'requrl':req.url, 
'request Method':req.method, 'studentdata':JSON.parse(
 data)}); 
}); 
}) 

app.listen(8000, function() {
    console.log("Server is running on port 8000");
})

app.get('/GetStudentid/:id',(req,res)=>{ 
    studentdata={} 
    fs.readFile(__dirname + "/" + "Student.json", 'utf8'
 , function (err, data) { 
    
    var students= JSON.parse(data) 
    var student=students["Student"+req.params.id]  
    console.log("student",student) 
    if (student) 
      
    res.json(student)  
    else 
    res.json({ 'status':true, 'Status_Code':200, 
    'requested at': req.localtime, 'requrl':req.url, 
    'request Method':req.method, 'studentdata':JSON.parse(data)}); 
    }); 
     
    })
    
    app.get('/studentinfo',function(request,response) 
{ 
res.sendFile('StudentInfo.html', { root:   __dirname }); 
}) 

app.post('/submit-data', function (req, res) { 
    var name = req.body.firstName + ' ' + req.body.lastName+
     ' '; 
    var Age= req.body.myAge+ ' Gender: ' + req.body.gender+''  
    Qual= ' Qualification'+ req.body.Qual  
    console.log(req.body.Qual) 
    res.send({ 
    status: true, 
    message: 'form Details', data: { 
    name: name, age:Age, Qualification:Qual, 
    } 
    }); 
    }); 
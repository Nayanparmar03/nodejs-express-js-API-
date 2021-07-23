const express = require("express");

const router = express.Router();

const {Employee} = require('../employee/employees');

router.get('/api/employees', (req, res)=>{
    Employee.find({}, (err, data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
        }
    })
});

//save database Employee
router.post('/api/employee/add',(req, res)=>{
    const emp = new Emlpoyee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    emp.save((err, data)=>{
        res.status(200).json({code: 200, message:'Employee added successfully', 
        addEmployee:data});
    });
});


//get employee
router.get('/api/employee/:id',(req, res)=>{
    Employee.findById(req.params.id, (err, data)=>{
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
        }
    });
});


//update employee
router.put('/api/employee/edit/:id', (req, res)=>{
    const emp={
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, {$set:emp}, {new:true},(err, data)=>{
        if(!err){
            res.status(200).json({code:200, message:"employee updated data successfully", updateEmployee: data});

        }
        else{
            console.log(err);
        }
    });
});


//delete employee
router.delete('/api/employee/:id',(req, res)=>{
    Employee.findByIdAndRemove(req.params.id, (err, data)=>{
        if(!err){

            res.status(200).json({code:200, message: "employee data deleted successfullt",
        deleteEmployee:data});
        }
        else{
            console.log(err);
        }
    });

});


module.exports = router;
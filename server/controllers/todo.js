const ToDo = require('../models/todo'),
      User = require('../models/user')

class Controller {

    static create(req, res) {
        const todo = new ToDo({
            name: req.body.name,
            description: req.body.description,
            status: false,
            due_date: req.body.due_date,
            user_id: req.data._id
        })

        todo.save(function(err, todo) {
            if (err) {
                console.log('salah di save nya, ' + err);
                res.status(500).json({message: err})
            }
            else {
                User.findOneAndUpdate({
                    _id: req.data._id
                }, {
                    $push: { todo_list: todo._id}
                })
                    .then(() => {
                        console.log('Added task to User');
                        res.status(201).json({
                            message: `Successfully added ${req.body.name} to ${req.data.name}'s list of tasks`
                        })
                        
                    })
                    .catch(err => {
                        res.status(500).json({message: err})
                    })
            }
        })
    }

    static showAllTodo(req, res) {
        ToDo.find({
            user_id: req.data._id
        })
         .then( todos => {
            res.status(200).json({
                data: todos
            })
         })
         .catch(err => {
             console.log();
             
         })
    }
}

module.exports = Controller 
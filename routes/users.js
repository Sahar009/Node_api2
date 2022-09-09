import express from 'express';

const router = express.Router();

const users =[
    {
        firstName: "sahar",
        lastName: "skilinbidi",
        age: 22
    },

    {
        firstName: "thomas",
        lastName: "muller",
        age: 22
    }
]
// All routes in here are starting with /users

router.get('/', (req, res) => {
    console.log(users);

    res.send(users); 
});


router.post('/', (res, req) => {

         const user = req.body;

       
         
         users.push(user);


         res.send(`uUser with the name ${user.username} addedto the data basa`);
});

export default router;
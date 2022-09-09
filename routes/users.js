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

router.get('/', (req, res) => {
    console.log(users);

    res.send(users); 
});

export default router;
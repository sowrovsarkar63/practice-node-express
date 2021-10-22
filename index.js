const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
    res.send(
        "WOW. I am Excited to learn Node and express with nodemon. automatic restart"
    );
});

// user array

const users = [
    {
        id: 0,
        name: "Shabana",
        email: "Shabana@gmail.com",
        phone: "01788888888",
    },
    {
        id: 1,
        name: "Shabnoor",
        email: "Shabnoor@gmail.com",
        phone: "01788888888",
    },
    {
        id: 2,
        name: "Shrabonti",
        email: "Shrabonti@gmail.com",
        phone: "01788888888",
    },
    {
        id: 3,
        name: "Suchorita",
        email: "Suchorita@gmail.com",
        phone: "01788888888",
    },
    { id: 4, name: "Soniya", email: "Soniya@gmail.com", phone: "01788888888" },
    {
        id: 5,
        name: "Susmita",
        email: "Susmita@gmail.com",
        phone: "01788888888",
    },
];

// daynamic api
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];

    res.send(user);
});

// find and display search result

app.get("/users", (req, res) => {
    const search = req.query.search;

    if (search) {
        const searchResult = users.filter((user) =>
            user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
        res.send(searchResult);
    } else {
        res.send(users);
    }
});

// Listen app via port

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});

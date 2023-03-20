const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing thoughts
    await Thought.deleteMany({});

    // Drop existing users
    await User.deleteMany({});


    const user = [
        {
            username: "ZiBi",
            email: "zaira@gmail.com"
        },
        {
            username: "AdiAzi",
            email: "adik@gmail.com"
        },
        {
            username: "RiRi",
            email: "rihanna@gmail.com"
        },
        {
            username: "Selena",
            email: "selena@gmail.com"
        },
        {
            username: "JamesM",
            email: "james@gmail.com"
        },
        {
            username: "Samira",
            email: "samira@gmail.com"
        },
        {
            username: "Lirina",
            email: "lirina@gmail.com"
        },
        {
            username: "lSamuel",
            email: "sam@gmail.com"
        }
    ];
    const thoughts = [
        {
            thoughtText: "This is interesting",
            username: "ZiBi",
            userId: "5edff358a0fcb779aa7b118b"
        },
        {
            thoughtText: "What a boring text",
            username: "RiRi",
            userId: "6edff358a0fcb779aa7b118b"
        },
        {
            thoughtText: "have never read anything like this",
            username: "AdiAzi",
            userId: "7edff358a0fcb779aa7b118b"
        },
        {
            thoughtText: "Here's a similar text",
            username: "Selena",
            userId: "8edff358a0fcb779aa7b118b"
        },
        {
            thoughtText: "Here's a cool thought...",
            username: "lernantino",
            userId: "9edff358a0fcb779aa7b118b"
        }
    ]
    await User.collection.insertMany(user);


    await Thought.collection.insertMany( thoughts )


 
    console.info('Seeding complete!');
    process.exit(0);
});



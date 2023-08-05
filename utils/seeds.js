const connection = require('../config/connection');
const {User,Thought} = require('../models');

const users = [
    {
        username: 'Ryan',
        email: 'ryankang@test.com'
    },
    {
        username: 'Jesus',
        email: 'jesuschrist@test.com'
    },
    {
        username: 'Dom',
        email: 'domtoretto@test.com'
    },
    {
        username: 'Kevin',
        email: 'kevinkimm@test.com'
    }
]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('You are connected');
    await User.deleteMany({});
    await Thought.deleteMany({});

    await User.insertMany(users);

    console.log('Seeded data!');
    process.exit(0);
})
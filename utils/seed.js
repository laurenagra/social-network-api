const connection = require('../config/connection');
const { Thought, User } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thought
  await Thought.deleteMany({});

  // Drop existing user
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Add user to the collection and await the results
  await User.collection.insertOne({
    username: "banana",
    email: "banana@email.com"
  });

  // Add thought to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: "Here's a cool thought...",
    username: "bananana",
    // thoughtId: "5edff358a0fcb779aa7b118b"
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
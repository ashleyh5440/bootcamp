const db = require('../config/connection');
const { Profile, User, Message } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const userSeeds = require('./userSeeds.json');
const messageSeeds = require('./messageSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    try{
      await cleanDB('Profile', 'profiles');
      await cleanDB('User', 'users');
      await cleanDB('Message', 'messages');
    }
    catch(err){
      console.log(err);
      console.log("Continuing the seed");
    }
    
    await Profile.create(profileSeeds);
    const messages = await Message.create(messageSeeds);
    const userData = userSeeds.map( (user, index) => {
      if(index === 0){
        user.messages = [];
        user.messages.push(messages[0]._id);
        user.messages.push(messages[1]._id);
      }
      return user;
    });
    await User.create(userData);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});

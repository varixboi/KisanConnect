const mongoose = require('mongoose');

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

async function dbConnect() {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }
  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };
    global.mongoose.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    global.mongoose.conn = await global.mongoose.promise;
  } catch (e) {
    global.mongoose.promise = null;
    throw e;
  }

  return global.mongoose.conn;
}

module.exports = dbConnect;

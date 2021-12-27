// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB

let mongoUrl = 'mongodb://localhost/mern-crud';
if (process.env.MONGODB) {
  mongoUrl = `mongodb://${process.env.MONGODB}/mern-crud`;
}

module.exports = {
  db: mongoUrl
};

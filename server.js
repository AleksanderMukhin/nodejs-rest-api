const app = require('./app');
const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Oleksander:150487-mO@cluster0.swrdjil.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .then(()=>app.listen(3000))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })

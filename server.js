const app = require('./app');
const { db } = require('./database/db');

db.authenticate()
.then(()=>
console.log('Database.Authenticated!')
)
.catch((error)=> console.log(error));

db.sync()
.then(()=> console.log('Database Synced!😎'));




const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

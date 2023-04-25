require('dotenv').config();
const app = require('./app');
const { db } = require('./database/db');
const initModel = require('./models/initModels');



//Autenticaciòn con la base de datos
db.authenticate()
.then(()=>console.log('Database.Authenticated!'))
.catch((error)=> console.log(error));

//relaciones
initModel();

//Sincronizacion con la base de datos
db.sync()
.then(()=> console.log('Database Synced!😎'))
.catch((error)=>console.log(error));

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});


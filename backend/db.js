const mongoose = require('mongoose');

const url = "mongodb://sunitaR:krishang@ac-pivg9it-shard-00-00.qsrpstb.mongodb.net:27017,ac-pivg9it-shard-00-01.qsrpstb.mongodb.net:27017,ac-pivg9it-shard-00-02.qsrpstb.mongodb.net:27017/stackoverflow?ssl=true&replicaSet=atlas-cjofdc-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      })
      .then(() => console.log("MongoDB is connected successfully"))
      .catch((err) => console.log("Error: ", err));
  };
  
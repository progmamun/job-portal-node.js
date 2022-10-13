const express = require('express');
const app = express();
const cors = require("cors");
const errorHandler = require('./middleware/error');

// Router file
const userRoute = require("./routes/user.route");
const jobRoute = require("./routes/job.route");
const managerRoute = require("./routes/manager.route");
const adminRoute = require("./routes/admin.route");

// Body Parser
app.use(express.json());

app.use(cors());
app.use(express.static('public'));


// Mount routers
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/jobs", jobRoute);
app.use("/manager", managerRoute);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(errorHandler);

module.exports = app;
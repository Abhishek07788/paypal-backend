const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/db");
const UserRouter = require("./Routes/user.routes");
const sprintRouter = require("./Routes/sprint.routes");
const taskRouter = require("./Routes/tasks.routes");

dotenv.config();
let PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/sprint", sprintRouter);
app.use("/task", taskRouter);

app.use("/", (req, res) => {
  res.send("Hello Paypal");
});

app.listen(PORT || 8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");

const app = express();

// Middle ware dependencies
app.use(express.json());
app.use(cors());

const account = require("./routes/account");
app.use("/account", account);

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

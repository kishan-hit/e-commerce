const express = require('express');

const app = express();

const port = 8000;

const apiRoutes = require("./routes/apiRoutes");

app.get('/', (req, res) => {
    res.json({message: "API runnning..."});
});

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})
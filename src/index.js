// httpstatuses.com
const app = require("./app");
const port = process.env.PORT;

// run on port 4000
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

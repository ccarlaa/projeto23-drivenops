import app from "./app.js";

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is up and running on port 4000`);
})

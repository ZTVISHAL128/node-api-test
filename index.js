const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");

app.use(express.json()); // Parse JSON request body

app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

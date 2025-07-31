const app = require("express")();

app.get("/contact", (req, res) => res.json({ email: "toto@top.com" }));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);




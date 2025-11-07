app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // pass control to next handler
});

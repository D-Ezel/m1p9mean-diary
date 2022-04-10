import express from "express";
import accountRouter from "./routes/account.routes.js";
import locationRouter from "./routes/location.routes.js";
import restoRouter from "./routes/resto.routes.js";
import cityRouter from "./routes/city.routes.js";
import dishesRouter from "./routes/dishes.routes.js";
import cartRouter from "./routes/cart.routes.js";
const app = express();

app.use("/account",accountRouter);
app.use("/location",locationRouter);
app.use("/resto",restoRouter);
app.use("/city", cityRouter);
app.use("/dishes", dishesRouter);
app.use("/cart", cartRouter)


export default app;
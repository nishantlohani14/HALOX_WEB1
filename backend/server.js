import app from "./app.js";

app.listen(process.env.PORT,()=>{
  console.log(`Port running successfully on ${process.env.PORT}`);
});
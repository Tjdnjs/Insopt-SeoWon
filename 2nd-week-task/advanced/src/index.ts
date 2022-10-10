import express, { application, NextFunction, Request, Response } from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/templates'));
app.use("/api", require("./api"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`
          #############################################
              🛡️ Server listening on port: ${PORT} 🛡️
          #############################################
      `);
  }); // 3000 번 포트에서 서버를 실행하겠다!
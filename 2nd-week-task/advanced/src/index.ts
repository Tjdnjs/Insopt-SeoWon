import express, { application, NextFunction, Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", require("./api"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>IN SOPT - SERVER</h1><h2>Seminar2</h2><button type="button"><a href="/api/blog">blog</a></button><button type="button"><a href="/api/comment">comment</a></button><button type="button"><a href="/api/members">members</a></button><button type="button"><a href="/api/movie">movie</a></button><button type="button"><a href="/api/user">user</a></button>');
});

app.listen(PORT, () => {
    console.log(`
          #############################################
              🛡️ Server listening on port: ${PORT} 🛡️
          #############################################
      `);
  }); // 3000 번 포트에서 서버를 실행하겠다!
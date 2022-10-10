import express, { Request, Response, Router } from 'express';
import { template } from './data/page'

const router: Router = express.Router();

const page = template + `
<body>
    <h1>IN SOPT - SERVER / Seminar2</h1>
    <h2>${__filename.replace(__dirname+'/', '')}</h2>
    <section>
        <button type="button"><a href="./user/create">create</a></button>
        <button type="button"><a href="./user/read">read</a></button>
        <button type="button"><a href="./user/update">update</a></button>
        <button type="button"><a href="./user/delete">delete</a></button>
    </section>
</body>
</html>` 

router.get("/", (req: Request, res: Response) => {
    return res.send(page);
});

router.get("/read", (req: Request, res: Response) => {
    const user = {
        name: "PSW",
        group: "yb"
    }
    return res.status(200).json({
        status: 200,
        message: '유저 조회 성공',
        data: user
    });
});

module.exports = router;
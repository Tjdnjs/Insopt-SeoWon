import express, { Request, Response, Router } from 'express';
import { template } from './data/page'

const router: Router = express.Router();

const page = template + `
<body>
    <h1>IN SOPT - SERVER / Seminar2</h1>
    <h2>${__filename.replace(__dirname+'/', '')}</h2>
    <section>
        <button type="button"><a href="#">create</a></button>
        <button type="button"><a href="./movie/read">read</a></button>
        <button type="button"><a href="#">update</a></button>
        <button type="button"><a href="#">delete</a></button>
    </section>
</body>
</html>` 

router.get("/", (req: Request, res: Response) => {
    return res.send(page);
});

router.get("/read", (req: Request, res: Response) => {
    const movie = {
        title: 'movie title',
        created: 'XXXX.XX.XX'
    }
    return res.status(200).json({
        status: 200,
        message: '영화 조회 성공',
        data: movie
    });
});

module.exports = router;
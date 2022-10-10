import express, { Request, Response, Router } from 'express';
import { template } from './data/page'

const router: Router = express.Router();

const page = template + `
<body>
    <h1>IN SOPT - SERVER / Seminar2</h1>
    <h2>${__filename.replace(__dirname+'/', '')}</h2>
    <section>
        <button type="button"><a href="./comment/create">create</a></button>
        <button type="button"><a href="./comment/read">read</a></button>
        <button type="button"><a href="./comment/update">update</a></button>
        <button type="button"><a href="./comment/delete">delete</a></button>
    </section>
</body>
</html>` 

router.get("/", (req: Request, res: Response) => {
    // console.log(__dirname + 'blog.html')
    return res.send(page);
});

router.get("/read", (req: Request, res: Response) => {
    const comment = {
        PostId: 1,
        comment: 'test comment',
        author: 'user2'
    }
    return res.status(200).json({
        status: 200,
        message: '댓글 조회 성공',
        data: comment
    });
});

module.exports = router;
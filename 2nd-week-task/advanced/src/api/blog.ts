import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    const post = {
        post_id: 1,
        title: 'test title',
        content : 'test content',
        author : 'user1',
    }
    return res.status(200).json({
        status: 200,
        message: '블로그 조회 성공',
        data: post
    });
});

module.exports = router;
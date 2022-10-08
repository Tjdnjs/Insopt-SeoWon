import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
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
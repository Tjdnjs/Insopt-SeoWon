import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
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
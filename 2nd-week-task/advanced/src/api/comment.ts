import express, { Request, Response, Router } from 'express';
import { template } from './data/page'
import { comment_data } from './data/comment';
import { blog_post } from './data/blog'

const router: Router = express.Router();

const page = template + `
<body>
    <h1>IN SOPT - SERVER / Seminar2</h1>
    <h2>${__filename.replace(__dirname+'/', '')}</h2>
    <section>
    <button type="button"><a href="#">create</a></button>
    <button type="button"><a href="./comment/read">read</a></button>
    <button type="button"><a href="#">update</a></button>
    <button type="button"><a href="#">delete</a></button>
    </section>
</body>
</html>` 

router.get("/", (req: Request, res: Response) => {
    // console.log(__dirname + 'blog.html')
    return res.send(page);
});

// create post
router.post('/create', (req: Request, res: Response) => {
    const PostId = parseInt(req.body.PostId);
    const comment = req.body.comment;
    const author = req.body.author;

    let post = []
    for(let i=0; i<blog_post.length; i++) {
        post.push(blog_post[i].post_id);
    }

    if (post.find(x => x==PostId) === undefined) {
        return res.json({
            success: false,
            error: "Post not found"
        })
    }

    if (PostId && comment && author) {
        const new_comment = {PostId: PostId, comment: comment, author: author};
        comment_data.push(new_comment);
        return res.redirect('read');
    }
});

router.get("/read", (req: Request, res: Response) => {
    type comment ={
        [key : string]: string|number;
    }

    let comment : comment = {};

    // array 형식 출력 X -> 각 객체를 comment1 : ~ comment2 : ~ 로 출력하기
    for(let i=0; i<comment_data.length; i++) {
        comment['comment'+(i+1)] = JSON.parse(JSON.stringify(comment_data[i]));
    }

    return res.status(200).json({
        status: 200,
        message: '댓글 조회 성공',
        data: comment
    });
});

module.exports = router;
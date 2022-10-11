import express, { Request, Response, Router } from 'express';
import { template } from './data/page'
import { blog_post } from './data/blog'
const router: Router = express.Router();

const page = template + `
<body>
    <h1>IN SOPT - SERVER / Seminar2</h1>
    <h2>${__filename.replace(__dirname+'/', '')}</h2>
    <section>
    <button type="button"><a href="#">create</a></button>
    <button type="button"><a href="./blog/read">read</a></button>
    <button type="button"><a href="#">update</a></button>
    <button type="button"><a href="#">delete</a></button>
    </section>
</body>
</html>` 
router.get("/", (req: Request, res: Response) => {
    return res.send(page);
});

// create post
router.post('/create', (req: Request, res: Response) => {
    const post_id = parseInt(req.body.post_id);
    const title = req.body.title;
    const content = req.body.content;
    const author = req.body.author;
    if (post_id && title && content && author) {
        const new_post = {post_id: post_id, title: title, content: content, author: author};
        blog_post.push(new_post);
        return res.redirect('read');
    }
});

router.get("/read", (req: Request, res: Response) => {
    type blog ={
        [key : string]: string|number;
    }

    let blog : blog = {};
    
    // array 형식 출력 X -> 각 객체를 post1 : ~ post2 : ~ 로 출력하기
    for(let i=0; i<blog_post.length; i++) {
        blog['post'+(i+1)] = JSON.parse(JSON.stringify(blog_post[i]));
    }

    return res.status(200).json({
        status: 200,
        message: '블로그 조회 성공',
        data: blog
    });
});

module.exports = router;
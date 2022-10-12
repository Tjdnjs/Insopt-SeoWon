import express, { Request, Response, Router } from 'express';
import { members } from './data/members';
import { template } from './data/page'

const router: Router = express.Router();

const page = template + `
<body>
    <h1>IN SOPT - SERVER / Seminar2</h1>
    <h2>${__filename.replace(__dirname+'/', '')}</h2>
    <section>
        <button type="button"><a href="#">create</a></button>
        <button type="button"><a href="./members/read">read</a></button>
        <button type="button"><a href="#">update</a></button>
        <button type="button"><a href="#">delete</a></button>
    </section>
</body>
</html>` 

router.get("/", (req: Request, res: Response) => {
    return res.send(page);
});

router.get("/read", (req: Request, res: Response) => {
    
    type member ={
        [key : string]: object
    }
    
    let member : member = {};
    
    // array 형식 출력 X -> 각 객체를 member1 : ~ member2 : ~ 로 출력하기
    for(let i=0; i<members.length; i++) {
        member['member'+(i+1)] = members[i];
    }

    return res.status(200).json({
        status: 200,
        message: '멤버 조회 성공',
        data: member
    });
});

module.exports = router;
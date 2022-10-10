import express, { Request, Response, Router } from 'express';
import { members } from './data/members';
import { template } from './data/page'

const router: Router = express.Router();

const page = template + `
<body>
    <h1>IN SOPT - SERVER / Seminar2</h1>
    <h2>${__filename.replace(__dirname+'/', '')}</h2>
    <section>
        <button type="button"><a href="./members/create">create</a></button>
        <button type="button"><a href="./members/read">read</a></button>
        <button type="button"><a href="./members/update">update</a></button>
        <button type="button"><a href="./members/delete">delete</a></button>
    </section>
</body>
</html>` 

router.get("/", (req: Request, res: Response) => {
    return res.send(page);
});

router.get("/read", (req: Request, res: Response) => {
    
    type member ={
        [key : string]: string|number;
    }
    
    let member : member = {};
    
    for(let i=0; i<members.length; i++) {
        member['member'+(i+1)] = JSON.parse(JSON.stringify(members[i]));
    }

    return res.status(200).json({
        status: 200,
        message: '멤버 조회 성공',
        data: member
    });
});

module.exports = router;
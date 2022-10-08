import express, { Request, Response, Router } from 'express';
import { stringify } from 'querystring';
import { members } from './data/members';

const router: Router = express.Router();

type member ={
    [key : string]: string|number;
}

let member : member = {};

for(let i=0; i<members.length; i++) {
    member['member'+(i+1)] = JSON.parse(JSON.stringify(members[i]));
}

router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: '멤버 조회 성공',
        data: member
    });
});

module.exports = router;
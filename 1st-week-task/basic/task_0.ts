// ~는 ~살이고 ~에 살고 ~를 좋아합니다
// 파트원 소개 객체

// 파트원 소개 배열에 타입으로 지정할 인터페이스

interface member{
    name: string;
    age: number;
    live: string;
    mbti: string;
    food: string;
    group: string;
}

const members: member[] = [
    {
        name: '박서원',
        age: 22,
        live: '용인',
        mbti: 'INTJ',
        food: '마라탕',
        group: 'YB',
    },{
        name: '김민욱',
        age: 26,
        live: '회기',
        mbti: 'ESFJ',
        food: '치킨',
        group: 'OB',
    },{
        name: '김다현',
        age: 24,
        live: '고속터미널',
        mbti: 'ESFP',
        food: '민트초코',
        group: 'YB',
    }
];

members.map((mem) => console.log(`${mem.name}은(는) SOPT 31기 서버파트 ${mem.group} 입니다 !\n${mem.age}살이고 ${mem.live}에 삽니다. mbti는 ${mem.mbti}이고 음식 중 ${mem.food}를(을) 가장 좋아합니다.
`))
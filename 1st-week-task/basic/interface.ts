interface SOPT{
    name: string;
    age: number;
    isSOPT: boolean; // isSOPT ?: boolean; 이와 같이 지정하면 optional 값이 됨
}

const introduce: SOPT = {
    name: '박서원',
    age: 22,
    isSOPT: true
}


// 배열에도 타입 적용 가능
const introduces: SOPT[] = [
    {
        name: '박서원',
        age: 22,
        isSOPT: true
    },{
        name: '권세훈',
        age: 18,
        isSOPT: true
    }
];
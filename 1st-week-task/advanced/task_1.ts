/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

interface Member{
    name: string;
    group: string;
}

interface Dinner{
    member: Member[];
    menu: string[];
    shuffle: (data: any[]) => any[];
    organize: (data: Member[]) => void;
}

const dinner: Dinner = {
    member : [ 
      { name: "권세훈", group: "ob" },{ name: '이종현', group: 'ob' },
      { name: '김민욱', group: 'ob' },{ name: '현세빈', group: 'ob' },
      { name: '박서원', group: 'yb' },{ name: '김다현', group: 'yb' },
      { name: '장한빛', group: 'yb' },{ name: '전선희', group: 'yb' }
    ],
    menu : [
      '햄버거', '스테이크', '피자', '치킨', '떡볶이', '김치볶음밥', '파스타', '술', '우동', '김밥'
    ],
    shuffle(array) {
      array.sort(() => Math.random() - 0.5);
      return array;
    },
    organize(array) {
      this.shuffle(array);
      this.shuffle(this.menu);
      const dinnerMember = array.map((mem)=>[mem.name+`(${mem.group})`]);
      console.log(`${dinnerMember[0]}님은 ${dinnerMember[1]}님과 함께 ${this.menu[0]}을(를) 드시면 됩니다 !`);
    },
  };
  
dinner.organize(dinner.member);
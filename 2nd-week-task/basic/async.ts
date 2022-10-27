// 동기 코드와 비슷하게 생김 / 암묵적으로 promise를 반환
// await : resolve, reject 와 같은 promise 객체를 기다림 (async 내부에서만 사용 가능)

// 첫 인자 : callback 함수, 두번째 인자 time : 하나의 행동을 하기까지 걸리는 시간
const Me = (callback: () => void, time: number) => {
    setTimeout(callback, time);
};
  
//* 기상
const WakeUp = (): Promise<string> => {
    // 바로 promise 객체를 return
    // 성공 : resolve, 실패 : reject
    return new Promise((resolve, reject) => {
        Me(() => {
         console.log('[현재] 기상!');
         resolve('기상 성공');
       }, 1000);
    });
};

//* 화장실
const GoBathRoom = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        Me(async () => {
            const now = await WakeUp();
            console.log('[현재] 화장실 도착');
            resolve(`${now} -> 화장실 도착 완료`);
        }, 3000)
    });
};

//* 양치 준비
const Ready = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        Me(async () => {
            const now = await GoBathRoom();
            console.log('[현재] 칫솔 / 치약 준비');
            resolve(`${now} -> 칫솔 / 치약 준비 완료`);
        }, 1000)
    });
};

//* 양치
const Bruth_teeth = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        Me(async () => {
            const now = await Ready();
            console.log('[현재] 양치 중');
            resolve(`${now} -> 양치 완료`);
        }, 1000)
    });
};

//* 완료
const Done = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        Me(async () => {
            const now = await Bruth_teeth();
            console.log('[현재] 모두 완료함');
            resolve(`${now} -> 준비 완료 !`);
        }, 1000)
    });
};

Done()
   .then((now) => {
        console.log(`\n${now}`);
    })
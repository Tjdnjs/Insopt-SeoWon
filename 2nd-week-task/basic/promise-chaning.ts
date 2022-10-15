//? promise-chaining.ts

const me = (callback: () => void, time: number) => {
    setTimeout(callback, time);
  };
  
  //* 기상
  const wakeUp = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log('[현재] 기상!');
        resolve('기상 성공');
      }, 1000);
    });
  };
  
  //* 화장실
  const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log('[현재] 화장실 도착');
        resolve(`${now} -> 화장실 도착 완료`);
      }, 3000);
    });
  };
  
  //* 양치 준비
  const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log('[현재] 칫솔 / 치약 준비');
        resolve(`${now} -> 칫솔 / 치약 준비 완료`);
      }, 1000);
    });
  };
  
  //* 양치
  const brush_teeth = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log('[현재] 양치 중');
        resolve(`${now} -> 양치 완료`);
      }, 1000);
    });
  };
  
  //* 완료
  const done = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      me(() => {
        console.log('[현재] 모두 완료함');
        resolve(`${now} -> 준비 완료 !`);
      }, 1000);
    });
  };
  
  
  wakeUp()
    .then((now) => goBathRoom(now))
    .then((now) => ready(now))
    .then((now) => brush_teeth(now))
    .then((now) => done(now))
    .then((now) => console.log(`\n${now}`));
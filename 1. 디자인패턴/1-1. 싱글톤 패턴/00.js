/**
 * 
 * 싱글톤 패턴 ( singleton pattern)
 * 
 * -> 하나의 클래스에 오직 하나의 인스턴스만 가지는 패턴. 보통 데이터베이스 연결 모듈에 많이 사용 .
 * 
 * 
 * 장점 : 인스턴스를 생성할 때 드는 비용이 줄어듦
 * 단점 : 의존성이 높아진다. -> 의존성 주입을 통해 느슨하게 만들 수 있음. 02.js 참고
 * ====> TDD(Test Driven Development)할때 걸림돌이 된다. 
 *       TDD를 할때는 단위 테스트를 주로 하는데, 단위 테스트는 서로가 독립적이어야 함.
 *       하지만 싱글톤 패턴은 하나의 인스턴스를 기반으로 하기 때문에 '독립적인' 인스턴스를 만들기가 어려움.
 * 
 */

// 싱글톤 패턴 예제 1 --- 자바스크립트에서는 {} 또는 new Object 로 객체 생성시 어떤 객체와도 같지 않기 때문에 싱글톤 패턴 구현 가능.
const obj = {
    a : 27
}

const obj2 = {
    a : 27
}

console.log(obj === obj2) // false

//하나의 인스턴스를 가지는 싱글톤 클래스 구현
// 
class Singleton {
    constructor() {
        if(!Singleton.instance) {
            Singleton.instance = this
        }
        return Singleton.instance
    }
    getInstance() {
        return this.instance
    }
}

const a = new Singleton()
const b = new Singleton()
console.log(a === b) // true
/**
 * 자바스크립트에서의 옵저버 패턴
 * 
 * -> 프록시 객체를 통해 구현 가능.
 * 
 * 프록시 객체
 * 
 * => 프록시(proxy) 객체는 어떠한 대상의 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 작업을 가로챌 수 있는 객체를 뜻함.
 * => 매개변수 : 1. target : 프록시할 대상
 *              2. handler : 프록시 객체의 target 동작을 가로채서 정의할 동작들이 정해져 있는 함수
 */

//프록시 객체
/**
 * 설명 : new Proxy로 선언한 객체의 a와 b라는 속성에 특정 문자열을 담아서 handler에 "name이라는 속성에 접근할 때는 a와 b를 합쳐라" 를 구현.
 * p변수에 name 속성이 없음에도 name속성에 접근하려 할 때 그 부분을 가로채 문자열을 만들어 반환한다.
 * 
 */
const handler = {
    get : function(target, name) {
        return name === 'name' ? `${target.a} ${target.b}` : target[name] 
    }
}

const p = new Proxy({a : 'LJH', b : 'IS KING'},handler)
console.log(p.name)



//프록시 객체를 이용한 옵저버 패턴
function createReactiveObject(target, callback) {
    const proxy = new Proxy(target, {
        set(obj, prop, value) {
            if ( value != obj[prop]) {
                const prev = obj[prop]
                obj[prop] = value
                callback(`${prop}가 [${prev}] >> [${value}] 로 변경되었습니다. `)
            }
            return true
        }
    })
    return proxy
}

const a = {
    "체력" : "100"
}

const b = createReactiveObject(a, console.log)
b.체력 = "80"
b.체력 = "30"
/**
 * 
 * 팩토리 패턴 ( factory pattern)
 * 
 * -> 객체를 사용하는 코드에서 객체 생성 부분을 떼어내 추상화한 패턴이자 상속 관계에 있는 두 클래스에서 상위 클래스가 중요한 뼈대를 결정하고
 *    하위 클래스에서 객체 생성에 관한 구체적인 내용을 결정하는 패턴.
 *    ++ 느슨한 결합을 가지며 상위 클래스에서는 인스턴스 생성 방식에 대해 전혀 알 필요가 없기 때문에 더 많은 유연성을 가진다.
 *    ++ 객체 생성 로직이 분리되어 있으므로, 유지 보수성 증대
 * 
 * 
 * ex)
 * 레시피(하위클래스)가 전달되고 바리스타 공장(상위 클래스)에서 이를 토대로 생산하는 생산공정을 생각하면 된다.
 * 
 * 
 * 라떼 레시피 - 아메리카노 레시피 - 우유 레시피 -----|바리스타 공장
 * -------------------------------------------------|
 * 
 */

//예제 1 ==> 전달 받은 값에 따라 다른 객체를 생성. 바리스타 공장 - new Object 레시피 - 42,'abc'
const num = new Object(42)
const str = new Object('abc')

console.log(num.constructor.name); // number
console.log(str.constructor.name); // String

//예제 2 ==> 커피 팩토리 위의 보기 구현

class Latte {
    constructor() {
        this.name = "latte"
    }
}
class Espresso {
    constructor() {
        this.name = "Espresso"
    }
}
class LatteFactory {
    static createCoffe() {
        return new Latte()
    }
}

class EspressoFactory {
    static createCoffe() {
        return new Espresso()
    }
}

const factoryList = { LatteFactory, EspressoFactory }

class CoffeFactory {
    static createCoffe(type) {
        const factory = factoryList[type]
        return factory.createCoffe()
    }
}

const main = () => {
    // 라떼 커피 주문
    const coffe = CoffeFactory.createCoffe("LatteFactory")
    //커피 이름 부른다.
    console.log(coffe.name) // latte
}


main()
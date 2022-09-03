/**
 * 
 * Vue js 3.0 의 옵저버 패턴
 * 
 * vue.js 3.0에서는 ref나 reactive로 정의하면 해당 값이 변경되었을 대 자동으로 DOM에 있는 값이 변경된다.
 * 
 * DOM ( Document Object Model)
 *  -> 문서 객체 모델, 웹 브라우저상의 화면을 이루고 있는 요소들을 자칭.
 * 
 */


//Vue js 3.0 실제 코드.
/*
 function createReactiveObject(
    target: Target,
    isReadonly: boolean,
    baseHandlers: ProxyHandler<any>,
    collectionHandlers: ProxyHandler<any>,
    proxyMap: WeakMap<Target, any>
) {
    if (!isObject(target)) {
        if (__DEV__) {
            console.warn(`value cannot be made reactive: ${String(target)}`)
        }
        return target
    }
    // target is already a Proxy, return it.
    // exception: calling readonly() on a reactive object
    if (
        target[ReactiveFlags.RAW] &&
        !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
    ) {
        return target
    }
    // target already has corresponding Proxy
    const existingProxy = proxyMap.get(target)
    if (existingProxy) {
        return existingProxy
    }
    // only a whitelist of value types can be observed.
    const targetType = getTargetType(target)
    if (targetType === TargetType.INVALID) {
        return target
    }
    const proxy = new Proxy(
        target,
        targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
    )
    proxyMap.set(target, proxy)
    return proxy
}*/
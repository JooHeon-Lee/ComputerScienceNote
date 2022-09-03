/**
 * 옵저버 패턴(observer pattern)은 주체가 어떤 객체의 상태 변화를 관찰하다가 상태 변화가 있을 때마다 메서드 등을 통해
 * 옵저버 목록에 있는 옵저버들에게 변화를 알려주는 디자인 패턴.
 * 
 * 주체 : 객체의 상태 변화를 보고 있는 관찰자.
 * 옵저버 : 객체의 상태 변화에 따라 전달되는 메서드 등을 기반으로 '추가 변화 사항'이 생기는 객체들을 의미.
 * 
 * EX)트위터
 * 주체 -----(팔로우 알려줌) -----> A
 *     ㄴ----(팔로우 알려줌) -----> B
 * 
 * 옵저버 패턴은 주로 이벤트 기반 시스템에서 사용. MVC 패턴에서 사용되기도 함.
 * Model 에서 변경 사항이 생겨 update() 메서드로 옵저버인 view에 알려주고 이를 기반으로 controller가 작동.
 * 
 */

import java.util.ArrayList;
import java.util.List;

interface Subject {
    public void register(Observer obj);
    public void unregister(Observer obj);
    public void notifyObservers();
    public Object getUpdate(Observer obj);
}

interface Observer {
    public void update();
}

class Topic implements Subject {
    private List<Observer> observers;
    private String message;

    public Topic() {
        this.observers = new ArrayList<>();
        this.message = "";
    }

    @Override
    public void register(Observer obj) {
        if (!observers.contains(obj)) observers.add(obj);
    }

    @Override
    public void unregister(Observer obj) {
        observers.remove(obj);
    }

    @Override
    public void notifyObservers() {
        this.observers.forEach(Observer::update);
    }

    @Override
    public Object getUpdate(Observer obj) {
        return this.message;
    }

    public void postMessage(String msg) {
        System.out.println("Message sended to Topic : " + msg);
        this.message = msg;
        notifyObservers();
    }
}

class TopicSubscriber implements Observer {
    private String name;
    private Subject topic;

    public TopicSubscriber(String name, Subject topic) {
        this.name = name;
        this.topic = topic;
    }

    @Override
    public void update() {
        String msg = (String) topic.getUpdate(this);
        System.out.println(name + ":: got message >> " + msg);
    }
}

public class 00 {
    public static void main(String[] args) {
        Topic topic = new Topic();
        Observer a = new TopicSubscriber("a", topic);
        Observer b = new TopicSubscriber("b", topic);
        Observer c = new TopicSubscriber("c", topic);
        topic.register(a);
        topic.register(b);
        topic.register(c);

        topic.postMessage("옵저버 패턴 테스트!");
        
    }
}

/**
 * 실행결과
 * Message sended to Topic: 옵저버 패턴 테스트!
 * a :: got message >> 옵저버 패턴 테스트!
 * b :: got message >> 옵저버 패턴 테스트!
 * c :: got message >> 옵저버 패턴 테스트!
 * 
 */
/**
 * 
 * 전략 패턴( strategy pattern )은 정책 패턴(policy pattern) 이라고도 하며, 객체의 행위를 바꾸고 싶은 경우 '직접' 수정하지 않고
 * 전략이라고 부르는 '캡슐화한 알고리즘'을 컨텍스트안에서 바꿔주면서 상호 교체가 가능하게 만드는 패턴.
 * 
 * ++ 컨텍스트란 ? 상황, 맥락, 문맥을 의미하며 개발자가 어떠한 작업을 완료하는 데 필요한 모든 관련 정보
 * 
 * ----------------컨텍스트--------------------
 * |                전략                        |
 * |     ----------------------------------     |
 * |    |                                  |    |
 *      |                    =================================> A
 *      |                   =================================> B
 *      |                   =================================> C
 * |    |                                  |    |
 * |     ----------------------------------     |                                  
 * |--------------------------------------------
 * 
 * 물건을 살때 네이버페이, 또는 카카오페이 등 결제하듯이 
 * 결제 방식의 '전략'만 바꿔서 두 가지 방식으로 결제하는것을 말함.
 * 
 */

// 예제 1 => 결제 구현

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

interface PaymentStrategy {
    public void pay(int amount);
}

class KAKAOCardStrategy implements PaymentStrategy {
    private String name;
    private String cardNumber;
    private String cvv;
    private String dateOfExpiry;

    public KAKAOCardStrategy(String nm, String ccNum, String cvv, String expiryDate) {
        this.name = nm;
        this.cardNumber = ccNum;
        this.cvv = cvv;
        this.dateOfExpiry = expiryDate;
    }

    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using KAKAOCard");
    }
}


class LUNACardStrategy implements PaymentStrategy {
    private String emailId;
    private String password;

    public LUNACardStrategy(String email, String pwd) {
        this.emailId = email;
        this.password = pwd;
    }

    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using LUNACard");
    }
}

class Item {
    private String name;
    private int price;
    public Item(String name, int cost) {
        this.name = name;
        this.price = cost;
    }

    public String getName() {
        return this.name;
    }

    public int getPrice() {
        return this.price;
    }
}

class ShoppingCart {
    List<Item> items;

    public ShoppingCart() {
        this.items = new ArrayList<Item>();
    }

    public void addItem(Item item) {
        this.items.add(item);
    }

    public void removeItem(Item item) {
        this.items.remove(item);
    }

    public int calculateTotal() {
        int sum = 0;
        for (Item item : items) {
            sum += item.getPrice();
        }

        return sum;
    }

    public void pay(PaymentStrategy paymentMethod) {
        int amount = calculateTotal();
        paymentMethod.pay(amount);
    }
}


public class LJH {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();

        Item A = new Item("shoe",100);
        Item B = new Item("shirt",500);

        cart.addItem(A);
        cart.addItem(B);

        //pay by LUNACard
        cart.pay(new LUNACardStrategy("sjwngjs@naver.com","test2");

        //pay by KAKAOCard
        cart.pay(new KAKAOCardStrategy("LJH", "123", "1234", "12/01"));
    }
}

//결과
// 100 paid using LUNACard
// 500 paid using KAKAOCard
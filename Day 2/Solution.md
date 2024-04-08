# Solution

### Common Method

It is used to add two numbers represented by linked lists in a way that simulates the addition process digit by digit, considering any carry that may result from adding corresponding digits. This approach is typically referred to as "simulated addition" or "digit-wise addition" using linked lists.

```js
var addTwoNumbers = function(l1, l2) {
    const dum = new ListNode();
    let carry = 0;
    let fake = dum;

    while(l1 || l2 || carry){
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        fake.next = new ListNode(sum % 10);
        fake = fake.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dum.next;
};
```

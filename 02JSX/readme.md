# JSX 문법

https://react-anyone.vlpt.us/03.html

# var vs const vs let

var (더이상 쓰지 않음)<br>
const (한번 선언 후 고정적인 값)<br>
let (유동적인 값)

# Props 와 State

리액트에서 데이터를 다룰 때 사용하는 개념.<br>
props는 부모컴포넌트가 자식컴포넌트한테 데이터를 넘겨줄때 사용함.<br>


# 비구조화 할당

```js
const object = {a:1,b:2};
const {a,b} = object;

console.log(a); //1
console.log(b); //2
```

```js
function sayHello({name,age}) {
	console.log(name+'의 나이는'+age);
}
sayHello({name:'react',age:'20'});  // react의 나이는20
```
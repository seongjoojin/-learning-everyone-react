# LifeCycle API

1. 나타날 때
2. 업데이트 될 때
3. 사라질 때

https://velopert.com/1130<br>
https://react-anyone.vlpt.us/05.html<br>
http://projects.wojtekmaj.pl/react-lifecycle-meclethods-diagram/

## 컴포넌트 생성

### constructor

컴포넌트가 만들어질때 호출되는 함수.

### componentDidMount

외부 라이브러리와 연동할때 많이 사용함.

## 컴포넌트 업데이트

### static getDerivedStateFromProps()

props로 받아온 값을 state로 동기화 하는 작업을 해줘야 하는 경우 사용됨.


### shouldComponentUpdate

컴포넌트의 성능을 최적화 해줌. (업데이트를 막는 함수)

```
shouldComponentUpdate(nextProps,nextState){
    // return false하면 업데이트를 안함
    return true;
}
```

### getSnapshotBeforeUpdate

DOM 변화가 일어나기 직전의 DOM 상태를 가져오고, 여기서 리턴하는 값은 componentDidUpdate에서 3번째 파라미터를 받아올 수 있게 됨.

### componentDidUpdate

컴포넌트가 실제로 업데이트 되고난 다음에 호출되는 부분

## 컴포넌트 제거

### componentWillUnmount

등록했었던 이벤트를 제거함. 

## 컴포넌트 에러 발생

### componentDidCatch

컴포넌트 자신의 render 함수에서 에러가 발생해버리는 것은 잡아낼 수는 없지만, 그 대신에 컴포넌트의 자식 컴포넌트 내부에서 발생하는 에러들은 잡아낼 수 있음.
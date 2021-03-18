'use strict';

// json있는 데이터를 불러와서 자바스크립트 배열로 변경
function loadItem() {
    return fetch('./data/data.json')
    .then(respone => respone.json())
    .then(json => json.items)
}
//console.log(loadItem());

// 리스트에 출력하기
// ul에 li이 넣어주기
function update(items){
    const itemList = document.querySelector('.item_list');
    itemList.innerHTML = items.map(item => createLi(item)).join('');
}
// 원하는 모양의 li생성
function createLi(item){
    return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="itme_thumb">
            <span class="itme_desc">${item.gender}, ${item.size}</span>
        </li>
    `;
};

// 3. 버튼을 누르면 정렬되야함
// 누른 버튼이 무엇인지 받아옴
// 아이템 리스트에서 버튼타입과 같은 것을 찾음
function btnClick(){}
function fliter() {
    const btn = document.querySelector('.btn_type');
    btn.addEventListener('click',

    );
}
// 타입과 다른것을 안보이게 처리



// // 1. 로드 시 아이템이 뿌려짐
loadItem()
.then(items => {
    update(items);
});
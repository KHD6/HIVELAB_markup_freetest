const tabSections = document.querySelectorAll('.section');

tabSections.forEach(section => {

    const btns = section.querySelectorAll('.tab-btn');
    const groups = section.querySelectorAll('.product-group');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;

            // 현재 섹션 내의 버튼과 그룹만 초기화
            btns.forEach(b => b.classList.remove('active'));
            groups.forEach(g => g.classList.remove('active'));

            // 클릭된 요소만 활성화
            btn.classList.add('active');
            const targetEl = section.querySelector(`#${target}`);
            if (targetEl) targetEl.classList.add('active');
        });
    });
});

// 레이어 팝업 노출 구현
const btnPopup = document.getElementById('btn-popup');
const popup = document.getElementById('delivery-popup');
const btnClose = document.querySelector('.btn-close');

btnPopup.addEventListener('click', () => {
    popup.classList.add('active');
});

btnClose.addEventListener('click', () => {
    popup.classList.remove('active');
});

// 접기/펼치기 기능 구현
const btnFold = document.getElementById('btn-fold');
const accordion = document.getElementById('accordion-content');

btnFold.addEventListener('click', () => {
    accordion.classList.toggle('is-folded');

    // 버튼 텍스트 변경 logic
    if (accordion.classList.contains('is-folded')) {
        btnFold.innerText = '펼치기v';
    } else {
        btnFold.innerText = '접기^';
    }
});
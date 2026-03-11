// DOM 요소 캐싱
const elements = {
    pickBtn: document.getElementById('color-button'),
    resultSection: document.getElementById('result'),
    colorBox: document.getElementById('color-box'),
    hexText: document.getElementById('color-hex'),
    rgbText: document.getElementById('color-rgb'),
    copyButtons: document.querySelectorAll('.result-color > button')
};

// HEX를 RGB 객체로 변환 (비트 연산 활용)
// >> : 원하는 색상을 오른쪽 끝으로 밀어내기
// & 255 (0xFF) : 앞의 불필요한 값을 지우고 마지막 8비트만 남기는 마스크 역할
const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
};

// 클립보드 복사 공통 함수
const copyToClipboard = async (text) => {
    if (!text) return;
    try {
        await navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    } catch (err) {
        console.error('클립보드 복사 실패:', err);
    }
};

// 색상 선택 및 UI 업데이트 실행 함수 (옵션 1: 기본 EyeDropper API)
const handlePickColor = async () => {
    if (!window.EyeDropper) {
        return alert('EyeDropper API is not supported in this browser.');
    }

    try {
        const eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();

        // UI에 HEX 색상 적용
        elements.colorBox.style.backgroundColor = sRGBHex;
        elements.colorBox.textContent = sRGBHex; 
        elements.hexText.textContent = sRGBHex;

        // RGB 변환 및 적용
        const { r, g, b } = hexToRgb(sRGBHex);
        elements.rgbText.textContent = `${r}, ${g}, ${b}`;

        // 결과 영역 표시
        elements.resultSection.classList.remove('d-none');
    } catch (error) {
        console.log('색상 선택 취소됨');
    }
};

// ----------------------------------------------------
// 이벤트 리스너
// ----------------------------------------------------

// 1. 색상 선택 버튼 클릭
elements.pickBtn.addEventListener('click', handlePickColor);

// 2. 색상 박스 클릭 시 직접 복사
elements.colorBox.addEventListener('click', (e) => {
    const colorText = e.target.textContent.trim();
    copyToClipboard(colorText);
});

// 3. 각각의 Copy 버튼 클릭 이벤트
elements.copyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const targetId = e.target.dataset.target;
        const colorText = document.getElementById(targetId).textContent.trim();
        copyToClipboard(colorText);
    });
});
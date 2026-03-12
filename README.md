# My Color Picker
브라우저 화면상의 어떤 색상이든 간편하게 추출하고 HEX/RGB 값을 복사할 수 있는 가벼운 크롬 확장 프로그램입니다.
---


## 기능
1.브라우저 화면 내 픽셀의 색상을 추출 기능
2.추출된 색상의 HEX, RGB 값을 클립보드로 복사 기능
---

## API
[EyeDropper API](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API)
---

## 설치 및 사용 방법
1. 로컬
 + 저장소 파일을 다운로드합니다
 + 크롬 브라우저를 열고 주소창에 chrome://extensions/를 입력합니다
 + 오른쪽 상단의 **개발자 모드**를 활성화합니다
 + **압축해제된 확장 프로그램을 로드합니다** 버튼을 클릭하고 프로젝트 폴더를 선택합니다
 + 브라우저 툴바에서 **My Color Picker** 아이콘을 고정하여 사용합니다
---

### 파일 구조
```txt
├── manifest.json       # 확장 프로그램 설정 및 권한 정의
├── popup.html          # 사용자 인터페이스(UI) 구조
├── popup.js            # 색상 추출 및 비트 연산 기반 RGB 변환 로직
└── img/
    └── icon128_white.png # 확장 프로그램 공식 아이콘
```
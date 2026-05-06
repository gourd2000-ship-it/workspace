# Next.js Starter Kit

Next.js 15 App Router 기반의 프로덕션 준비 스타터 킷입니다.

## 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| Next.js | v15 | 풀스택 프레임워크 (App Router) |
| TypeScript | v5 | 타입 안전성 |
| Tailwind CSS | v4 | 스타일링 (config-less, CSS-first) |
| shadcn/ui | 최신 | UI 컴포넌트 라이브러리 |
| lucide-react | 최신 | 아이콘 |
| next-themes | 최신 | 다크 모드 |
| sonner | 최신 | Toast 알림 |

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 열면 쇼케이스 페이지를 확인할 수 있습니다.

## 디렉토리 구조

```
src/
├── app/
│   ├── layout.tsx        # 루트 레이아웃 (폰트, ThemeProvider)
│   ├── page.tsx          # 홈페이지 (쇼케이스)
│   └── globals.css       # Tailwind v4 토큰 + 글로벌 스타일
├── components/
│   ├── theme-provider.tsx # next-themes 래퍼
│   ├── theme-toggle.tsx   # 다크/라이트 전환 버튼
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── sonner.tsx
└── lib/
    └── utils.ts           # cn() 헬퍼 유틸리티
```

## shadcn 컴포넌트 추가

```bash
npx shadcn@latest add <component>
# 예시
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
```

## 다크 모드

헤더의 토글 버튼으로 라이트/다크 모드를 전환합니다. 시스템 설정을 기본값으로 사용합니다.

## 커스터마이징

### 색상 토큰 변경

`src/app/globals.css`의 `:root` (라이트) 와 `.dark` (다크) 블록에서 oklch 값을 수정합니다.

```css
:root {
  --primary: oklch(0.205 0 0); /* 변경 */
}
```

### 새 컴포넌트 추가

shadcn CLI를 사용하거나 `src/components/ui/`에 직접 작성합니다.

## 스크립트

```bash
npm run dev    # 개발 서버 (Turbopack)
npm run build  # 프로덕션 빌드
npm run start  # 프로덕션 서버
npm run lint   # ESLint 검사
```

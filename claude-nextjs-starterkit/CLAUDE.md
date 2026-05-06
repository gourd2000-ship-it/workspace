# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev      # 개발 서버 실행 (Turbopack, http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

shadcn 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처

**Next.js 15 App Router** 기반 스타터 킷. 테스트 설정 없음.

### 테마 시스템

`next-themes`를 사용하며 `ThemeProvider`가 루트 레이아웃(`src/app/layout.tsx`)에서 전체 앱을 감쌉니다. 다크모드는 `attribute="class"` 방식으로 동작합니다 — HTML에 `.dark` 클래스가 토글됩니다.

### Tailwind v4 + CSS 변수 구조

이 프로젝트는 **Tailwind CSS v4** (config-less, CSS-first)를 사용합니다. `tailwind.config.js`가 없으며, 모든 설정은 `src/app/globals.css`의 `@theme inline` 블록에서 관리됩니다.

디자인 토큰은 CSS 변수(oklch 색상값)로 `globals.css`의 `:root`(라이트)와 `.dark`(다크) 블록에 정의됩니다. shadcn/ui 컴포넌트는 이 변수를 직접 참조하므로, 색상 변경은 해당 CSS 변수만 수정하면 됩니다.

### shadcn/ui 컴포넌트

`components.json`에 따라 `new-york` 스타일, `neutral` 베이스 컬러로 설정되어 있습니다. 추가된 컴포넌트는 `src/components/ui/`에 위치합니다. `cn()` 유틸리티(`src/lib/utils.ts`)는 `clsx` + `tailwind-merge` 조합으로 조건부 클래스 병합에 사용됩니다.

### 경로 별칭

`@/`는 `src/`를 가리킵니다 (`tsconfig.json` 기준).

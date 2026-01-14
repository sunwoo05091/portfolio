# Implementation Plan: Terminal-Style Portfolio Website

**Status**: 🔄 In Progress
**Started**: 2026-01-14
**Last Updated**: 2026-01-14
**Estimated Completion**: -

---

**⚠️ CRITICAL INSTRUCTIONS**: After completing each phase:

1. ✅ Check off completed task checkboxes
2. 🧪 Run all quality gate validation commands
3. ⚠️ Verify ALL quality gate items pass
4. 📅 Update "Last Updated" date above
5. 📝 Document learnings in Notes section
6. ➡️ Only then proceed to next phase

⛔ **DO NOT skip quality gates or proceed with failing checks**

---

## 📋 Overview

### Feature Description

**터미널/해커 스타일 포트폴리오 웹사이트**

Flutter 모바일 + 프론트엔드 개발자를 위한 개성있는 포트폴리오 사이트.
Matrix 스타일의 떨어지는 문자 배경 효과와 타이핑 애니메이션, 모노스페이스 폰트를 활용한 사이버펑크/해커 미학의 포트폴리오.

### 핵심 특징

- **인트로 애니메이션**: "안녕하세요" → "프론트엔드 개발자 김선우입니다" 순차 페이드 인/아웃 후 메인 진입
- **Matrix Rain 배경**: 캔버스 기반 떨어지는 녹색 문자 애니메이션
- **타이핑 애니메이션**: 텍스트가 타자기처럼 나타나는 효과
- **모노스페이스 폰트**: JetBrains Mono, Fira Code 등 개발자 폰트
- **네온 그린 컬러 스킴**: #00ff00 계열의 사이버펑크 색상
- **프로젝트 쇼케이스**: Flutter/프론트엔드 프로젝트 갤러리
- **반응형 디자인**: 모바일/데스크톱 최적화

### Success Criteria

- [ ] 인트로 애니메이션이 자연스럽게 동작 (페이드 인/아웃 → 메인 전환)
- [ ] Matrix 배경 애니메이션이 부드럽게 동작 (60fps)
- [ ] 타이핑 애니메이션이 자연스럽게 작동
- [ ] 모든 섹션 (Hero, About, Projects, Contact) 완성
- [ ] 모바일/데스크톱 반응형 디자인 완료
- [ ] Lighthouse 성능 점수 90+ 달성
- [ ] Next.js로 정적 배포 가능

### User Impact

방문자가 일반적인 포트폴리오가 아닌, 개성있고 기억에 남는 인터랙티브 경험을 하게 됨.
Flutter + 프론트엔드 개발자로서의 기술력과 창의성을 동시에 어필.

---

## 🏗️ Architecture Decisions

| Decision               | Rationale                                   | Trade-offs             |
| ---------------------- | ------------------------------------------- | ---------------------- |
| Next.js 14+ App Router | 최신 React 기능, SEO 최적화, 정적 생성 지원 | 학습 곡선, 복잡성 증가 |
| TypeScript             | 타입 안정성, 개발자 경험 향상               | 초기 설정 시간         |
| Tailwind CSS           | 빠른 스타일링, 유틸리티 클래스              | 커스텀 디자인 제약     |
| Canvas API (Matrix)    | 성능 최적화, 부드러운 애니메이션            | CSS 대비 복잡한 구현   |
| Framer Motion          | 선언적 애니메이션, React 통합               | 번들 크기 증가         |

---

## 📦 Dependencies

### Required Before Starting

- [ ] Node.js 18+ 설치
- [ ] pnpm 또는 npm 설치

### External Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0",
    "@testing-library/react": "^14.0.0",
    "@testing-library/jest-dom": "^6.0.0",
    "jest": "^29.0.0",
    "jest-environment-jsdom": "^29.0.0"
  }
}
```

---

## 🧪 Test Strategy

### Testing Approach

**TDD Principle**: Write tests FIRST, then implement to make them pass

### Test Pyramid for This Feature

| Test Type             | Coverage Target | Purpose                          |
| --------------------- | --------------- | -------------------------------- |
| **Unit Tests**        | ≥70%            | 컴포넌트 로직, 유틸리티 함수     |
| **Integration Tests** | Critical paths  | 컴포넌트 상호작용, 페이지 렌더링 |
| **E2E Tests**         | Key user flows  | 전체 사이트 네비게이션           |

### Test File Organization

```
__tests__/
├── components/
│   ├── MatrixRain.test.tsx
│   ├── TypeWriter.test.tsx
│   ├── ProjectCard.test.tsx
│   └── Navigation.test.tsx
├── pages/
│   └── Home.test.tsx
└── utils/
    └── animation.test.ts
```

---

## 🚀 Implementation Phases

### Phase 1: Project Foundation

**Goal**: Next.js 프로젝트 초기화 및 기본 구조 설정
**Status**: ⏳ Pending

#### Tasks

**🔴 RED: Write Failing Tests First**

- [ ] **Test 1.1**: 홈페이지 렌더링 테스트 작성
  - File(s): `__tests__/pages/Home.test.tsx`
  - Expected: Tests FAIL - 컴포넌트가 아직 없음
  - Details: 페이지 타이틀, 기본 레이아웃 존재 확인

**🟢 GREEN: Implement to Make Tests Pass**

- [ ] **Task 1.2**: Next.js 프로젝트 생성

  - Command: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir`
  - Goal: 기본 프로젝트 구조 생성

- [ ] **Task 1.3**: 프로젝트 구조 설정

  - 디렉토리 구조:
    ```
    src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   ├── ui/
    │   └── sections/
    ├── lib/
    │   └── utils.ts
    └── styles/
        └── fonts.ts
    ```

- [ ] **Task 1.4**: Tailwind 커스텀 설정

  - 네온 그린 컬러 팔레트 추가
  - 모노스페이스 폰트 설정 (JetBrains Mono)
  - 다크 테마 기본 설정

- [ ] **Task 1.5**: Jest 테스트 환경 설정
  - jest.config.js 생성
  - Testing Library 설정

**🔵 REFACTOR: Clean Up Code**

- [ ] **Task 1.6**: 코드 정리 및 린팅 통과 확인

#### Quality Gate ✋

**Build & Tests**:

- [ ] `npm run build` 성공
- [ ] `npm run lint` 에러 없음
- [ ] `npm test` 통과

**Validation Commands**:

```bash
npm run build
npm run lint
npm test
```

---

### Phase 2: Intro Animation

**Goal**: 첫 방문 시 인트로 애니메이션 → 메인 페이지 전환
**Status**: ⏳ Pending

#### 인트로 플로우

```
[검은 화면]
     ↓ (0.5초 대기)
"안녕하세요" (페이드 인 + 타이핑)
     ↓ (1초 유지)
"안녕하세요" (페이드 아웃)
     ↓ (0.3초 대기)
"프론트엔드 개발자" (페이드 인 + 타이핑)
"김선우입니다" (페이드 인 + 타이핑)
     ↓ (1초 유지)
전체 페이드 아웃
     ↓
Matrix 애니메이션과 함께 메인 홈페이지 등장
```

#### Tasks

**🔴 RED: Write Failing Tests First**

- [ ] **Test 2.1**: IntroAnimation 컴포넌트 테스트
  - File(s): `__tests__/components/IntroAnimation.test.tsx`
  - Expected: Tests FAIL
  - Details:
    - "안녕하세요" 텍스트 렌더링 확인
    - "프론트엔드 개발자 김선우입니다" 텍스트 렌더링 확인
    - onComplete 콜백 호출 확인
    - 애니메이션 시퀀스 완료 확인

**🟢 GREEN: Implement to Make Tests Pass**

- [ ] **Task 2.2**: IntroAnimation 컴포넌트 구현

  - File(s): `src/components/ui/IntroAnimation.tsx`
  - Features:
    - Framer Motion AnimatePresence 활용
    - 순차적 페이드 인/아웃 시퀀스
    - 타이핑 효과와 결합
    - 완료 후 콜백으로 메인 전환

- [ ] **Task 2.3**: 인트로 상태 관리

  - File(s): `src/app/page.tsx` 수정
  - Logic:
    - `showIntro` 상태로 인트로/메인 전환
    - sessionStorage로 재방문 시 인트로 스킵 (선택적)
    - 스킵 버튼 제공 (선택적)

- [ ] **Task 2.4**: 인트로 스타일링
  - 전체 화면 검은 배경
  - 중앙 정렬 텍스트
  - 부드러운 페이드 전환
  - 네온 그린 텍스트 글로우 효과

**🔵 REFACTOR: Clean Up Code**

- [ ] **Task 2.5**: 애니메이션 타이밍 미세 조정
  - 자연스러운 전환 속도
  - 접근성 (prefers-reduced-motion 대응)

#### Quality Gate ✋

**Build & Tests**:

- [ ] `npm run build` 성공
- [ ] `npm test` 통과

**Manual Test Checklist**:

- [ ] 인트로 텍스트가 순서대로 나타남
- [ ] 페이드 인/아웃이 부드러움
- [ ] 메인 페이지로 자연스럽게 전환
- [ ] 재방문 시 동작 확인 (스킵 또는 재생)

---

### Phase 3: Matrix Rain Background

**Goal**: Canvas 기반 Matrix 스타일 떨어지는 문자 배경 애니메이션
**Status**: ⏳ Pending

#### Tasks

**🔴 RED: Write Failing Tests First**

- [ ] **Test 2.1**: MatrixRain 컴포넌트 테스트 작성
  - File(s): `__tests__/components/MatrixRain.test.tsx`
  - Expected: Tests FAIL
  - Details:
    - 캔버스 요소 렌더링 확인
    - 애니메이션 시작/정지 기능 확인
    - 리사이즈 핸들링 확인

**🟢 GREEN: Implement to Make Tests Pass**

- [ ] **Task 2.2**: MatrixRain 컴포넌트 구현

  - File(s): `src/components/ui/MatrixRain.tsx`
  - Features:
    - Canvas API로 떨어지는 문자 애니메이션
    - 한글/영문/숫자/기호 혼합 문자
    - 녹색 그라데이션 효과
    - 반응형 캔버스 크기

- [ ] **Task 2.3**: 애니메이션 유틸리티 함수

  - File(s): `src/lib/matrixUtils.ts`
  - Functions:
    - `getRandomChar()`: 랜덤 문자 생성
    - `initColumns()`: 컬럼 초기화
    - `draw()`: 프레임 렌더링

- [ ] **Task 2.4**: 레이아웃에 MatrixRain 통합
  - 전체 페이지 배경으로 적용
  - z-index 및 opacity 조정

**🔵 REFACTOR: Clean Up Code**

- [ ] **Task 2.5**: 성능 최적화
  - requestAnimationFrame 사용
  - 메모리 누수 방지 (cleanup)
  - FPS 제한 옵션

#### Quality Gate ✋

**Build & Tests**:

- [ ] `npm run build` 성공
- [ ] `npm test` 통과
- [ ] 60fps 애니메이션 성능 확인

**Manual Test Checklist**:

- [ ] Matrix 애니메이션이 부드럽게 동작
- [ ] 브라우저 리사이즈 시 캔버스 크기 조정
- [ ] 메모리 사용량 안정적

---

### Phase 4: TypeWriter Animation & Typography

**Goal**: 타이핑 애니메이션 컴포넌트 및 타이포그래피 시스템
**Status**: ⏳ Pending

#### Tasks

**🔴 RED: Write Failing Tests First**

- [ ] **Test 4.1**: TypeWriter 컴포넌트 테스트
  - File(s): `__tests__/components/TypeWriter.test.tsx`
  - Expected: Tests FAIL
  - Details:
    - 텍스트가 한 글자씩 나타남
    - 커서 깜빡임 효과
    - 완료 콜백 호출

**🟢 GREEN: Implement to Make Tests Pass**

- [ ] **Task 4.2**: TypeWriter 컴포넌트 구현

  - File(s): `src/components/ui/TypeWriter.tsx`
  - Features:
    - 타이핑 속도 조절 가능
    - 커서 깜빡임 애니메이션
    - 지연 시작 옵션
    - 다중 라인 지원

- [ ] **Task 4.3**: 폰트 및 타이포그래피 설정

  - JetBrains Mono 웹폰트 로드
  - 글로벌 타이포그래피 스타일
  - 반응형 폰트 크기

- [ ] **Task 4.4**: 글리치 텍스트 효과 (선택적)
  - CSS 기반 글리치 애니메이션
  - 호버 시 효과 적용

**🔵 REFACTOR: Clean Up Code**

- [ ] **Task 4.5**: 애니메이션 훅 추출
  - `useTypeWriter` 커스텀 훅
  - 재사용 가능한 애니메이션 로직

#### Quality Gate ✋

**Build & Tests**:

- [ ] `npm run build` 성공
- [ ] `npm test` 통과

**Manual Test Checklist**:

- [ ] 타이핑 애니메이션 자연스러움
- [ ] 폰트 로딩 완료 후 표시
- [ ] 접근성 고려 (prefers-reduced-motion)

---

### Phase 5: Hero Section & About

**Goal**: 메인 히어로 섹션과 자기소개 섹션 구현
**Status**: ⏳ Pending

#### Tasks

**🔴 RED: Write Failing Tests First**

- [ ] **Test 5.1**: Hero 섹션 테스트

  - File(s): `__tests__/components/sections/Hero.test.tsx`
  - Details: 이름, 직함, CTA 버튼 존재 확인

- [ ] **Test 5.2**: About 섹션 테스트
  - File(s): `__tests__/components/sections/About.test.tsx`
  - Details: 소개 텍스트, 스킬 목록 확인

**🟢 GREEN: Implement to Make Tests Pass**

- [ ] **Task 5.3**: Hero 섹션 구현

  - File(s): `src/components/sections/Hero.tsx`
  - Content:
    - 이름 + 타이핑 애니메이션
    - "Flutter Mobile + Frontend Developer" 직함
    - ASCII 아트 로고 (선택적)
    - 스크롤 다운 인디케이터

- [ ] **Task 5.4**: About 섹션 구현

  - File(s): `src/components/sections/About.tsx`
  - Content:
    - 터미널 스타일 자기소개
    - 기술 스택 표시 (Flutter, React, TypeScript 등)
    - 경력/경험 요약

- [ ] **Task 5.5**: 스킬 배지 컴포넌트
  - 기술 스택을 태그 형태로 표시
  - 호버 효과 및 카테고리 구분

**🔵 REFACTOR: Clean Up Code**

- [ ] **Task 5.6**: 섹션 레이아웃 통일

#### Quality Gate ✋

**Build & Tests**:

- [ ] `npm run build` 성공
- [ ] `npm test` 통과

**Manual Test Checklist**:

- [ ] Hero 섹션 비주얼 확인
- [ ] About 섹션 내용 가독성
- [ ] 모바일 반응형 확인

---

### Phase 6: Projects Showcase

**Goal**: 프로젝트 쇼케이스 갤러리 구현
**Status**: ⏳ Pending

#### Tasks

**🔴 RED: Write Failing Tests First**

- [ ] **Test 6.1**: ProjectCard 컴포넌트 테스트

  - File(s): `__tests__/components/ProjectCard.test.tsx`
  - Details: 프로젝트 정보 렌더링 확인

- [ ] **Test 6.2**: Projects 섹션 테스트
  - File(s): `__tests__/components/sections/Projects.test.tsx`
  - Details: 프로젝트 목록 표시 확인

**🟢 GREEN: Implement to Make Tests Pass**

- [ ] **Task 6.3**: 프로젝트 데이터 구조 정의

  - File(s): `src/data/projects.ts`
  - Type:
    ```typescript
    interface Project {
      id: string;
      title: string;
      description: string;
      techStack: string[];
      imageUrl?: string;
      liveUrl?: string;
      githubUrl?: string;
      featured: boolean;
    }
    ```

- [ ] **Task 6.4**: ProjectCard 컴포넌트 구현

  - File(s): `src/components/ui/ProjectCard.tsx`
  - Features:
    - 터미널 윈도우 스타일 카드
    - 기술 스택 태그
    - 호버 시 상세 정보 표시
    - 링크 버튼 (Live, GitHub)

- [ ] **Task 6.5**: Projects 섹션 구현
- File(s): `src/components/sections/Projects.tsx`
  - Features:
    - 그리드 레이아웃
    - 필터링 (선택적)
    - 스크롤 애니메이션

**🔵 REFACTOR: Clean Up Code**

- [ ] **Task 6.6**: 프로젝트 카드 애니메이션 추가
  - Framer Motion 활용
  - stagger 애니메이션

#### Quality Gate ✋

**Build & Tests**:

- [ ] `npm run build` 성공
- [ ] `npm test` 통과

**Manual Test Checklist**:

- [ ] 프로젝트 카드 디자인 확인
- [ ] 호버 인터랙션 동작
- [ ] 반응형 그리드 레이아웃

---

### Phase 7: Contact & Final Polish

**Goal**: 연락처 섹션 및 최종 마무리
**Status**: ⏳ Pending

#### Tasks

**🔴 RED: Write Failing Tests First**

- [ ] **Test 7.1**: Contact 섹션 테스트
  - File(s): `__tests__/components/sections/Contact.test.tsx`
  - Details: 연락처 정보, 소셜 링크 확인

**🟢 GREEN: Implement to Make Tests Pass**

- [ ] **Task 7.2**: Contact 섹션 구현

  - File(s): `src/components/sections/Contact.tsx`
  - Content:
    - 이메일 주소 (터미널 스타일 표시)
    - 소셜 링크 (GitHub, LinkedIn 등)
    - 간단한 메시지 또는 CTA

- [ ] **Task 7.3**: Navigation 구현

  - 스크롤 기반 네비게이션
  - 부드러운 스크롤 이동
  - 현재 섹션 하이라이트

- [ ] **Task 7.4**: SEO 및 메타데이터

  - Open Graph 태그
  - favicon 설정
  - sitemap 생성

- [ ] **Task 7.5**: 성능 최적화
  - 이미지 최적화 (next/image)
  - 폰트 최적화
  - 코드 스플리팅

**🔵 REFACTOR: Clean Up Code**

- [ ] **Task 7.6**: 최종 코드 리뷰 및 정리
  - 불필요한 코드 제거
  - 일관된 코드 스타일
  - 접근성 검토

#### Quality Gate ✋

**Build & Tests**:

- [ ] `npm run build` 성공
- [ ] `npm test` 통과
- [ ] Lighthouse 점수 90+

**Manual Test Checklist**:

- [ ] 전체 사이트 플로우 확인
- [ ] 모바일/태블릿/데스크톱 테스트
- [ ] 크로스 브라우저 테스트 (Chrome, Safari, Firefox)
- [ ] 접근성 테스트

---

## ⚠️ Risk Assessment

| Risk                           | Probability | Impact | Mitigation Strategy           |
| ------------------------------ | ----------- | ------ | ----------------------------- |
| Canvas 성능 이슈 (저사양 기기) | Medium      | Medium | FPS 제한, reduced-motion 대응 |
| 폰트 로딩 지연                 | Low         | Low    | font-display: swap, 로컬 폴백 |
| 브라우저 호환성                | Low         | Medium | polyfill, feature detection   |
| 애니메이션 과다로 접근성 저하  | Medium      | High   | prefers-reduced-motion 대응   |

---

## 🔄 Rollback Strategy

### If Phase 1 Fails

- 프로젝트 디렉토리 삭제 후 재시작
- create-next-app 옵션 재검토

### If Phase 2 Fails (Matrix Animation)

- Canvas 대신 CSS 애니메이션으로 대체
- 또는 정적 배경 이미지 사용

### If Later Phases Fail

- git revert로 이전 안정 버전 복구
- 해당 기능 단순화 또는 제거

---

## 📊 Progress Tracking

### Completion Status

- **Phase 1 (Foundation)**: ⏳ 0%
- **Phase 2 (Intro Animation)**: ⏳ 0%
- **Phase 3 (Matrix Rain)**: ⏳ 0%
- **Phase 4 (TypeWriter)**: ⏳ 0%
- **Phase 5 (Hero & About)**: ⏳ 0%
- **Phase 6 (Projects)**: ⏳ 0%
- **Phase 7 (Contact & Polish)**: ⏳ 0%

**Overall Progress**: 0% complete

---

## 📝 Notes & Learnings

### Implementation Notes

- (추후 작성)

### Blockers Encountered

- (추후 작성)

---

## 📚 References

### Design Inspiration

- Matrix (1999) Visual Effects
- Hacker terminal aesthetics
- Cyberpunk 2077 UI

### Technical References

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## ✅ Final Checklist

**Before marking plan as COMPLETE**:

- [ ] All phases completed with quality gates passed
- [ ] Full integration testing performed
- [ ] Performance benchmarks meet targets (Lighthouse 90+)
- [ ] Accessibility requirements met (WCAG)
- [ ] Responsive design verified
- [ ] Cross-browser testing completed
- [ ] Ready for deployment

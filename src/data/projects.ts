export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "mobile" | "web" | "other";
  images?: string[];
  inProgress?: boolean;
  externalLinks?: {
    title: string;
    url: string;
  }[];
  details: {
    summary: string;
    role: string;
    team: string;
    period?: string;
    achievements: string[];
    features: {
      title: string;
      items: string[];
    }[];
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Journeye",
    description: "호텔 예약과 AI 기반 컨시어지 서비스를 하나의 앱에서 경험할 수 있는 통합 모바일 플랫폼",
    techStack: ["Flutter", "Dart", "WebSocket", "AWS EC2", "Riverpod", "BLoC"],
    featured: true,
    category: "mobile",
    githubUrl: "https://github.com",
    images: ["/journeye.png", "/journeye2.png", "/journeye3.png"],
    details: {
      summary: "Journeye는 사용자가 호텔 예약과 AI 기반 컨시어지 서비스를 하나의 앱에서 경험할 수 있도록 설계된 통합 모바일 플랫폼입니다. 사용자의 현재 위치를 기반으로 주변 호텔 및 컨시어지 정보를 실시간으로 노출하며, 체크인, 리뷰 작성, 채팅 및 알림 기능을 통해 맞춤형 여행 경험을 제공합니다.",
      role: "프론트엔드 개발 (70% 기여)",
      team: "총 3명 (프론트엔드 1명, 백엔드 1명, 디자이너 1명)",
      achievements: [
        "초기 기획 단계부터 디자이너와 협업하여 myRealtrip, Agoda, Airbnb 등을 벤치마킹한 사용자 여정 설계",
        "SliverAppBar, NestedScrollView 등 커스텀 컴포넌트 개발 및 반응형 디자인 구현",
        "BLoC 패턴 도입으로 실시간 채팅/알림 응답 속도 40% 개선",
        "Riverpod → BLoC 기반 아키텍처 전환으로 코드 가독성 50% 향상",
        "iOS/Android 플랫폼 배포를 위한 Xcode, AndroidManifest.xml 설정 직접 수행",
        "백엔드 팀과 협업하여 RDB 설계 및 데이터 모델링 참여",
      ],
      features: [
        {
          title: "서비스 주요 기능",
          items: [
            "회원가입 및 비밀번호 찾기 - 간소화된 인증 절차와 안정적인 계정 관리",
            "위치 기반 호텔/컨시어지 노출 - 현재 위치 기반 맞춤형 추천",
            "예약 및 결제 - 실시간 예약 프로세스와 결제 시스템",
            "실시간 채팅 및 알림 - WebSocket 기반 사용자-관리자 소통",
            "딥링크 처리 - 모바일(AppLinks) 및 웹(PathUrlStrategy) 지원",
          ],
        },
        {
          title: "상태 관리 아키텍처 개선",
          items: [
            "초기 Riverpod으로 전역 상태(로그인, 알림, 메뉴) 관리",
            "실시간 이벤트 처리를 위해 BLoC 패턴의 이벤트/상태 스트림 원칙 도입",
            "UI와 비즈니스 로직 분리로 테스트 및 유지보수성 향상",
            "NotificationNotifier, ChatNotifier 등 별도 Notifier로 로직 집중",
            "의존성 주입을 통한 모듈 간 결합도 감소",
          ],
        },
        {
          title: "기술적 성과",
          items: [
            "웹소켓 알림 및 채팅 UI 업데이트 지연 40% 개선",
            "이벤트 기반 상태 전환으로 단위 테스트 검증 가능",
            "채팅 및 알림 기능의 응답 속도와 안정성 개선",
          ],
        },
      ],
    },
  },
  {
    id: "2",
    title: "Journeye PMS",
    description: "호텔 체크인/이용객 관리 및 실시간 양방향 번역 소통을 지원하는 호텔 관리 시스템",
    techStack: ["React", "TypeScript", "Redux", "Zustand", "WebSocket", "AWS EC2"],
    featured: true,
    category: "web",
    images: ["/pms.png", "/pms2.png", "/pms3.png", "/pms4.png"],
    details: {
      summary: "Journeye PMS는 호텔측에서 체크인 및 이용객 관리, Journeye 앱 사용자들과의 실시간 소통을 할 수 있는 관리 시스템입니다. 호텔 투숙객들과의 1대1 양방향 번역 소통을 지원하며 고객 맞춤형 응대 서비스가 가능합니다.",
      role: "프론트엔드 개발",
      team: "총 3명 (프론트엔드 1명, 백엔드 1명, 디자이너 1명)",
      achievements: [
        "Redux와 Zustand를 활용해 복잡한 상태 관리를 간소화하고 시스템 성능 및 유지보수성 향상",
        "반응형 디자인과 최적화 기법 적용으로 실제 호텔 프론트에서 긍정적인 사용자 경험 피드백",
        "REST API와 WebSocket을 효과적으로 통합하여 실시간 데이터 업데이트 및 고객 소통 기능 구현",
        "기획, 백엔드, 디자인 팀과의 긴밀한 협업을 통해 전체 시스템의 확장성과 안정성 확보",
      ],
      features: [
        {
          title: "서비스 주요 기능",
          items: [
            "체크인/체크아웃 관리 - 실시간 처리 및 고객 맞춤형 응대",
            "실시간 커뮤니케이션 - 호텔과 앱 사용자 간 양방향 번역 및 소통",
            "예약 및 고객 관리 - 통합 예약, 고객 정보, 객실 상태 관리",
          ],
        },
        {
          title: "체크인 모듈 상태 관리 개선 (Zustand 도입)",
          items: [
            "문제: roomInfo, customerInfo 등 다양한 상태를 useState/useReducer로 관리하며 props drilling 발생",
            "해결: 체크인 관련 모든 상태를 Zustand 전역 스토어에서 관리",
            "결과: 코드 간결화, 가독성 및 유지보수성 대폭 향상, 확장 및 디버깅 용이",
          ],
        },
        {
          title: "채팅 모듈 상태 관리 개선 (Zustand 도입)",
          items: [
            "문제: 개별 useState와 useEffect로 채팅방 정보, 메시지 목록, 답변 처리 등 상태 분산 관리",
            "해결: 모든 채팅 관련 상태를 하나의 전역 스토어에 집중 관리",
            "결과: 상태 관리 로직 집중으로 유지보수 용이, 실시간 데이터 처리와 UI 반응 속도 개선",
          ],
        },
      ],
    },
  },
  {
    id: "3",
    title: "퀘스트스쿨",
    description: "AI 챗봇 기반 진로·진학 플랫폼으로, 예약 관리 시스템과 실시간 상담을 지원하는 교육 솔루션",
    techStack: ["TypeScript", "Next.js", "Redux", "Recoil", "Turborepo", "Tailwind CSS", "AWS"],
    featured: true,
    category: "web",
    liveUrl: "https://aboutquestschool.kr/",
    images: [],
    externalLinks: [
      { title: "서비스 바로가기", url: "https://aboutquestschool.kr/" },
      { title: "머니투데이 기사", url: "https://news.mt.co.kr/mtview.php?no=2025031815162994195" },
    ],
    details: {
      summary: "본 프로젝트는 AI 챗봇을 기반으로 한 진로·진학 플랫폼으로, 사용자가 쉽고 편리하게 예약할 수 있는 예약 관리 시스템과 실시간 상담 지원을 위한 챗봇 연동 기능을 제공합니다. 또한, 관리자와 선생님을 위한 전용 페이지를 통해 상담 예약 및 진행 상황을 체계적으로 관리할 수 있도록 설계된 통합 솔루션입니다.",
      role: "프론트엔드 개발 (교사/학생/관리자 전체 담당)",
      team: "총 3명 (프론트엔드 1명, 백엔드 1명, 디자이너 1명)",
      period: "2024.10 ~ 2025.01",
      achievements: [
        "MVP 기준 1개월 이내 개발 완료 및 실제 서비스 운영 진입",
        "실제 상담 100건 이상 처리되며 실사용 기반 피드백 확보",
        "외부 API 연동 안정성 확보 및 사용자 권한 체계 완전 구현",
        "내부 테스트 기준 기능 안정성 95% 이상 달성",
        "코드 구조 개선으로 테스트 및 유지보수 용이성 향상",
      ],
      features: [
        {
          title: "AWS 아키텍처 설계",
          items: [
            "GitHub와 CodeCommit 연동, CodeBuild/CodePipeline을 이용한 CI/CD 파이프라인 자동화",
            "Elastic Beanstalk와 Auto Scaling을 활용한 탄력적인 인프라 운영",
            "Amazon Cognito와 SSL 인증서 관리를 통한 보안 및 사용자 인증 체계 강화",
          ],
        },
        {
          title: "코드 구조 설계",
          items: [
            "Axios Interceptor를 활용한 반복 요청 일관 관리 및 코드 재사용성 향상",
            "useAuth, useAuthUpdate 등 커스텀 Hook으로 인증 로직 간결화",
            "Recoil의 Atomic 상태 관리로 불필요한 리렌더링 감소 및 코드 복잡도 최소화",
            "TypeScript 기반 REST API 구현으로 타입 안정성 확보",
          ],
        },
        {
          title: "선생님 영역",
          items: [
            "선생님 전용 관리 페이지 구현 (예약 승인, 상담 진행 모니터링, 통계 확인)",
            "별도 레이아웃과 대시보드 설계로 관리 데이터 접근성 및 보안 강화",
            "사용자 권한 관리 시스템 구현",
          ],
        },
        {
          title: "학생 영역",
          items: [
            "예약 신청, 상담 요청 및 실시간 AI 챗봇 상담 기능 제공",
            "단순화된 메뉴 및 UI 구성으로 직관적인 사용자 경험 제공",
            "커리어넷 API 연동을 통한 설문 데이터 실시간 수집 및 시각화",
          ],
        },
        {
          title: "유지보수 및 확장성",
          items: [
            "UI 컴포넌트, 기능별 로직, 전역 상태 관리를 체계적으로 분리하여 모듈화",
            "Redux store와 slice 구성으로 상태 변화 흐름 명확화 및 디버깅 효율 향상",
            "createAsyncThunk를 통한 비동기 API 호출 로직과 상태 업데이트 통합 처리",
          ],
        },
      ],
    },
  },
  {
    id: "4",
    title: "소방조법 시뮬레이션",
    description: "소방사들이 실제 화재 현장에서 사다리차를 효과적으로 운용하는 방법을 훈련하기 위한 VR 시뮬레이션",
    techStack: ["Unreal Engine 5.1", "Visual C++", "UE5-Blueprint", "Windows"],
    featured: true,
    category: "other",
    images: [],
    externalLinks: [
      { title: "시연 영상 (YouTube)", url: "https://www.youtube.com/watch?v=MZFBWuBhl9s" },
    ],
    details: {
      summary: "실제 환경을 모방하고 사다리차 운용에 필요한 기술과 절차를 가상세계로 제공하여 훈련자들이 실제 상황에 대비할 수 있도록 도와주고, 소방사들이 실제 화재 현장에서 사다리차를 효과적으로 운용하는 방법을 훈련하고 연습하기 위한 시뮬레이션 개발입니다.",
      role: "콘텐츠 기획 및 제작 (기여도 100%)",
      team: "총 3명 (클라이언트 2명, 3D 디자이너 1명)",
      achievements: [
        "소방 조이스틱 통신 프로토콜 분석 및 인풋 시스템 통합 구현",
        "실제 소방 현장 운용 룰을 반영한 시뮬레이션 플로우 설계",
        "안정적인 Windows 환경 버전 릴리즈 완료",
        "YouTube 시연 영상을 통한 프로젝트 성과 공개",
      ],
      features: [
        {
          title: "개발 환경",
          items: [
            "Visual C++를 통해 시스템의 핵심 로직 구현",
            "UE5-Blueprint를 활용한 비주얼 스크립트 기반 기능 구성",
            "Unreal Engine 5.1 기반 고품질 시뮬레이션 환경 구현",
            "Windows 11 환경에서 개발 및 최적화",
          ],
        },
        {
          title: "소방 조이스틱 통신 프로토콜 분석",
          items: [
            "장치의 통신 프로토콜을 면밀히 분석하여 시리얼 통신 패킷 데이터 처리 알고리즘 개발",
            "PlayerController에서 State 패턴을 도입하여 상태 파악",
            "FireBasetruck 및 하위 사다리차 시스템으로 정확한 데이터 전달 구현",
          ],
        },
        {
          title: "시뮬레이션 플로우 구현",
          items: [
            "실제 소방 현장에서의 운용 룰을 반영한 시뮬레이션 룰 셋 설계",
            "임무 달성 여부 등 이벤트를 실시간으로 처리하는 플로우 구현",
            "사용자들이 상황 변화를 즉각 체감할 수 있는 직관적인 환경 제공",
          ],
        },
        {
          title: "릴리즈 및 최적화",
          items: [
            "Windows 플랫폼에 최적화하여 안정적인 운영 환경 구축",
            "전반적인 시스템 검증 및 디버깅 완료",
            "완성도 높은 제품 성공적 출시",
          ],
        },
      ],
    },
  },
  {
    id: "5",
    title: "엄지",
    description: "4가지 사용자 역할을 지원하는 Flutter 기반 건물 관리 플랫폼",
    techStack: ["Flutter", "Dart", "Riverpod", "GoRouter", "Dio", "Firebase Messaging", "Hive"],
    featured: true,
    category: "mobile",
    images: ["/building.png", "/building2.png", "/building3.png", "/building4.png"],
    details: {
      summary: "본 프로젝트는 4가지 사용자 역할(입주민, 관리자, 담당자, 본사)을 지원하는 Flutter 기반 건물 관리 애플리케이션입니다. Clean Architecture 기반 모듈식 구조로 민원 접수/처리, 출퇴근 관리, 공지사항, FCM 푸시 알림 등 핵심 기능을 통합 제공합니다.",
      role: "Flutter 개발 (단독)",
      team: "총 2명 (Flutter 개발자 1명, 백엔드 개발자 1명)",
      period: "2024.10 ~ 2025.01",
      achievements: [
        "Clean Architecture 기반 완전한 계층 분리 달성",
        "JWT 자동 갱신 + 암호화 저장으로 인증 보안 강화",
        "권한 기반 동적 라우팅으로 4가지 역할 완전 분리",
        "6개 독립 모듈 + 16개 공용 위젯으로 코드 중복 최소화",
      ],
      features: [
        {
          title: "아키텍처 설계",
          items: [
            "각 사용자 역할을 독립 모듈로 분리, domain/data/presentation 3계층 적용",
            "비즈니스 로직과 UI를 명확히 분리하여 유연한 구조 확보",
            "GoRouter로 51개 라우트를 역할별로 분기 처리",
            "승인 상태(대기/승인/거절)에 따른 자동 리다이렉트 구현",
          ],
        },
        {
          title: "JWT 자동 갱신 시스템",
          items: [
            "Dio Interceptor로 토큰 자동 첨부 및 401 에러 시 자동 갱신",
            "flutter_secure_storage로 암호화 저장하여 보안 강화",
            "로그인/로그아웃 시 토큰 자동 관리",
          ],
        },
        {
          title: "입주민 기능",
          items: [
            "3단계 회원가입 프로세스",
            "민원 등록 (이미지 업로드 포함)",
            "승인 상태별 화면 분기",
          ],
        },
        {
          title: "관리자/담당자/본사 기능",
          items: [
            "관리자: 담당자 계정 발급/관리, 입주민 승인, 공지사항 관리",
            "담당자: 출퇴근 체크 및 월별 기록 조회, 민원 처리",
            "본사: 건물/부서 등록 및 관리, 관리자 계정 발급",
          ],
        },
        {
          title: "유지보수 및 확장성",
          items: [
            "UseCase 패턴으로 비즈니스 로직 캡슐화, UI 독립 테스트 가능",
            "FCM 알림: 포그라운드/백그라운드 핸들러 분리",
            "Riverpod 상태 관리 최적화로 불필요한 리렌더링 방지",
            "환경별 설정(.env) 관리로 배포 유연성 확보",
          ],
        },
      ],
    },
  },
  {
    id: "6",
    title: "Ally SDK",
    description: "시각장애인을 위한 웹 접근성 AI 솔루션 - 이미지 대체 텍스트 자동 생성 및 관리 SDK",
    techStack: ["Node.js", "Express.js", "JavaScript", "Sharp", "Cheerio", "Swagger", "OpenAPI"],
    featured: true,
    category: "web",
    images: [],
    details: {
      summary: "시각장애인을 위한 웹 접근성 AI 솔루션으로, 웹사이트의 이미지에 자동으로 대체 텍스트(Alt Text)를 생성하고 관리하는 SDK 시스템입니다. 웹사이트 운영자가 스크립트 태그 하나로 쉽게 접근성을 준수할 수 있도록 돕는 솔루션입니다.",
      role: "풀스택 개발",
      team: "개인 프로젝트",
      achievements: [
        "IIFE 패턴 기반 경량 SDK 설계로 웹사이트에 간편한 적용",
        "pHash(지각 해시) 기반 이미지 중복/유사성 판별 시스템 구현",
        "Shadow DOM을 활용한 스타일 격리 및 접근성 배지 구현",
        "Focus Trap 구현으로 스크린 리더 사용자 경험 최적화",
      ],
      features: [
        {
          title: "메인 SDK (ally-sdk.js)",
          items: [
            "웹사이트에 <script> 태그로 삽입하여 동작",
            "API 키 기반 인증 (data-api-key 속성)",
            "하위 SDK들(Badge, AltText, Crawl) 동적 로드 및 초기화",
            "페이지 상태 체크 및 크롤링 주기 관리 (일/주/월 단위)",
          ],
        },
        {
          title: "웹 크롤링 SDK (crawlSDK.js)",
          items: [
            "페이지 내 모든 이미지 수집 (<img> 태그 + CSS 배경 이미지)",
            "이미지 메타데이터 추출: 원본/렌더링 크기, 파일 형식, Base64 인코딩",
            "pHash 기반 이미지 식별 및 중복 감지",
            "AI 서버 연동: 페이지 요약 및 우선순위 분류 API",
          ],
        },
        {
          title: "대체 텍스트 SDK (altTextSDK.js)",
          items: [
            "서버 등록 이미지와 페이지 이미지 자동 매칭",
            "AI 생성 대체 텍스트 자동 적용 ('Alt by 앨리:' 접두사)",
            "스크린 리더 전용 설명 영역 생성 (aria-describedby)",
            "이미지 상태 추적 (user_draft/ai_draft/reviewed)",
          ],
        },
        {
          title: "접근성 배지 SDK (badgeSDK.js)",
          items: [
            "Shadow DOM으로 스타일 격리된 접근성 배지 렌더링",
            "다양한 디자인 옵션 (라벨형 한글/영문, 아이콘형 사각/원형)",
            "플로팅/인라인 배치 모드 지원",
            "Focus Trap 구현으로 팝업 다이얼로그 접근성 보장",
          ],
        },
        {
          title: "서버 API",
          items: [
            "HTML + 이미지 폴더 업로드 → 이미지 메타데이터 추출",
            "웹사이트 SDK 설치 여부 확인 API",
            "병렬 처리: 5개씩 배치로 이미지 동시 처리",
            "Swagger (OpenAPI 3.0) 기반 API 문서화",
          ],
        },
      ],
    },
  },
  {
    id: "7",
    title: "치매머니",
    description: "치매 환자와 보호자를 위한 금융 관리 및 케어 서비스 플랫폼",
    techStack: ["Flutter", "Dart", "Riverpod", "Firebase"],
    featured: true,
    category: "mobile",
    images: [],
    inProgress: true,
    details: {
      summary: "치매 환자와 보호자를 위한 통합 금융 관리 및 케어 서비스 플랫폼입니다.",
      role: "프론트엔드 개발",
      team: "진행중",
      achievements: [],
      features: [],
    },
  },
];

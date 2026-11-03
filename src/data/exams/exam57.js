// 제57회 SQLD 기출 복원 모의고사 (2025년 5월)
// 필드: n 번호, s 과목(1|2), topic 출제 영역(교재 성적 분석표 기준), q 문제(HTML), b 지문 블록, o 보기, a 정답(1~4), e 해설(HTML)
// 블록: {code} | {title, table:{h,r}} | {box} | {erd:{ents, rels, note?}}
// 보기: 문자열 | {code} | {table} | {text, code}
// 정답은 교재 정답표(제57회 정답 및 해설)와 대조 완료

export default {
  id: "sqld-57",
  round: 57,
  title: "제57회 기출 복원 모의고사",
  date: "2025년 5월",
  minutes: 90,
  questions: [
  {
    "n": 1,
    "s": 1,
    "topic": "데이터 모델의 이해",
    "q": "아래에서 설명하는 스키마 구조로 가장 적절한 것은?",
    "b": [
      {
        "box": "모든 사용자 관점의 데이터베이스 스키마를 통합하여 데이터베이스 전체의 논리적 구조와 데이터 간의 관계를 정의한다."
      }
    ],
    "o": [
      "내부 스키마(Internal Schema)",
      "논리 스키마(Logical Schema)",
      "개념 스키마(Conceptual Schema)",
      "외부 스키마(External Schema)"
    ],
    "a": 3,
    "e": "모든 사용자 관점을 통합해 DB 전체의 논리적 구조를 정의하는 것은 개념 스키마입니다. 외부 스키마는 사용자별 관점, 내부 스키마는 물리적 저장 구조입니다."
  },
  {
    "n": 2,
    "s": 1,
    "topic": "엔터티",
    "q": "발생 시점에 따라 구분할 수 있는 엔터티의 유형으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "행위 엔터티",
      "중심 엔터티",
      "기본 엔터티",
      "사건 엔터티"
    ],
    "a": 4,
    "e": "발생 시점에 따른 분류는 기본(키)·중심(메인)·행위 엔터티입니다. 사건 엔터티는 유무형에 따른 분류(유형·개념·사건)에 속합니다."
  },
  {
    "n": 3,
    "s": 1,
    "topic": "관계",
    "q": "아래 ERD에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "고객",
              "c": 0,
              "r": 0,
              "pk": [
                "# 고객번호"
              ],
              "at": [
                "* 고객명"
              ]
            },
            {
              "name": "계약",
              "c": 1,
              "r": 0,
              "pk": [
                "# 계약번호",
                "# 고객번호(FK)",
                "# 서비스번호(FK)",
                "# 납부자번호(FK)"
              ],
              "at": [
                "* 계약기간",
                "* 계약금액"
              ]
            },
            {
              "name": "서비스",
              "c": 2,
              "r": 0,
              "pk": [
                "# 서비스번호"
              ],
              "at": [
                "* 서비스명"
              ]
            },
            {
              "name": "납부자",
              "c": 1,
              "r": 1,
              "pk": [
                "# 납부자번호"
              ],
              "at": [
                "* 납부자명"
              ]
            }
          ],
          "rels": [
            {
              "a": "고객",
              "b": "계약",
              "aEnd": "none",
              "bEnd": "many",
              "line": "mix"
            },
            {
              "a": "서비스",
              "b": "계약",
              "aEnd": "none",
              "bEnd": "many",
              "line": "mix"
            },
            {
              "a": "납부자",
              "b": "계약",
              "aEnd": "none",
              "bEnd": "many",
              "line": "mix"
            }
          ],
          "note": "교재 원본(바커 표기법) 그대로 옮김 · # 식별자, * 필수 속성 · 점선 쪽 = 선택 참여, 실선 쪽 = 필수 참여"
        }
      }
    ],
    "o": [
      "[계약] 테이블은 고객번호, 서비스번호, 납부자번호를 모두 외래 키로 가진다.",
      "한 명의 고객은 여러 건의 계약을 가질 수 있다.",
      "각 계약은 하나의 서비스와만 연결된다.",
      "[계약] 테이블은 고객과 납부자 간의 M:N 관계를 해소하는 역할을 한다."
    ],
    "a": 4,
    "e": "계약은 고객·서비스·납부자 세 엔터티를 함께 연결하는 엔터티입니다. 고객과 납부자 두 엔터티 사이의 M:N만 해소한다고 볼 수 없습니다. ①②③은 그림(# …(FK), 계약 쪽 까마귀발)과 일치합니다."
  },
  {
    "n": 4,
    "s": 1,
    "topic": "속성",
    "q": "다른 속성을 이용해 값을 계산하거나 도출할 수 있는 속성은?",
    "o": [
      "기본 속성",
      "파생 속성",
      "설계 속성",
      "일반 속성"
    ],
    "a": 2,
    "e": "다른 속성으로부터 계산·변형되어 생기는 속성은 파생 속성입니다."
  },
  {
    "n": 5,
    "s": 1,
    "topic": "관계",
    "q": "아래 ERD에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "상품",
              "c": 0,
              "r": 0,
              "pk": [
                "상품번호"
              ],
              "at": [
                "상품명",
                "상품분류코드",
                "재고수량"
              ]
            },
            {
              "name": "주문",
              "c": 1,
              "r": 0,
              "pk": [
                "주문번호",
                "상품번호(FK)"
              ],
              "at": [
                "주문일시",
                "주문금액"
              ]
            }
          ],
          "rels": [
            {
              "a": "상품",
              "b": "주문",
              "aEnd": "one",
              "bEnd": "zeroMany",
              "label": "식별"
            }
          ]
        }
      }
    ],
    "o": [
      "하나의 상품은 여러 개의 주문과 연결될 수 있다.",
      "한 주문은 오직 한 개의 상품과 연결되도록 설계되어 있다.",
      "상품과 주문의 관계는 1:N이다.",
      "하나의 주문은 여러 개의 상품을 포함할 수 있다."
    ],
    "a": 4,
    "e": "상품 쪽은 1, 주문 쪽은 0..N입니다. 주문 한 건은 상품 하나에만 연결되므로 여러 상품을 포함할 수 없습니다."
  },
  {
    "n": 6,
    "s": 1,
    "topic": "식별자",
    "q": "주식별자에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "주식별자를 구성하는 속성은 유일성을 만족하는 최소한의 속성 집합이어야 한다.",
      "주식별자는 NULL 값을 허용한다.",
      "주식별자는 엔터티 내 모든 인스턴스를 유일하게 구별할 수 있어야 한다.",
      "주식별자의 값은 일반적으로 자주 변경되지 않는 안정적인 속성이어야 한다."
    ],
    "a": 2,
    "e": "주식별자는 반드시 값이 있어야 합니다(존재성). NULL을 허용하지 않습니다."
  },
  {
    "n": 7,
    "s": 1,
    "topic": "관계",
    "q": "아래 ERD에 대한 설명으로 가장 적절한 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "부서",
              "c": 0,
              "r": 0,
              "pk": [
                "부서번호"
              ],
              "at": [
                "부서명"
              ]
            },
            {
              "name": "사원",
              "c": 1,
              "r": 0,
              "pk": [
                "사원번호"
              ],
              "at": [
                "부서번호(FK)",
                "주민등록번호",
                "성명",
                "입사일"
              ]
            }
          ],
          "rels": [
            {
              "a": "부서",
              "b": "사원",
              "aEnd": "one",
              "bEnd": "zeroMany",
              "line": "dashed",
              "label": "비식별"
            }
          ]
        }
      }
    ],
    "o": [
      "사원은 부서와 식별 관계로 연결되어 있으며, 부서가 삭제되면 사원도 함께 삭제된다.",
      "부서번호는 사원의 일반 속성으로만 존재하며, 관계 제약은 적용되지 않는다.",
      "주민등록번호는 본질식별자이지만, 데이터 관리의 편의성을 고려해 별도의 식별자가 주식별자로 채택되었다.",
      "부서와 사원은 비식별 관계로, 사원은 부서 없이도 존재할 수 있다."
    ],
    "a": 3,
    "e": "주민등록번호는 사람을 구분하는 본질식별자(후보키)이지만, 관리 편의를 위해 사원번호를 주식별자로 정했습니다. ① 점선 = 비식별 관계. ② FK이므로 참조 제약이 적용됩니다. ④ 부서 쪽이 필수(|)라 사원은 반드시 부서에 속합니다."
  },
  {
    "n": 8,
    "s": 1,
    "topic": "정규화",
    "q": "아래 테이블에서 제1정규형(1NF)을 만족하기 위한 방법으로 가장 적절한 것은?",
    "b": [
      {
        "title": "프로젝트",
        "table": {
          "h": [
            "프로젝트ID",
            "담당자"
          ],
          "r": [
            [
              "P101",
              "김철수, 이영희"
            ],
            [
              "P102",
              "박민수, 최수정, 이준호"
            ],
            [
              "P103",
              "강지우"
            ]
          ]
        }
      }
    ],
    "o": [
      "프로젝트별 담당자를 한 행에 하나씩 저장할 수 있도록 테이블을 새로 만들어 다중값 속성을 분리한다.",
      "담당자 다중값 속성을 그대로 두고, 값들을 쉼표(,)로 구분하여 하나의 칼럼에 저장한다.",
      "담당자 속성을 담당자1, 담당자2 등 별도의 칼럼으로 나누어 저장한다.",
      "프로젝트당 최대 담당자 수를 미리 정하고, 그 수에 맞춰 고정된 개수의 칼럼을 생성하여 저장한다."
    ],
    "a": 1,
    "e": "1NF는 모든 속성이 원자값을 가져야 합니다. 다중값 속성은 별도 테이블로 분리해 한 행에 하나씩 저장합니다. ③④처럼 칼럼을 반복하는 것도 1NF 위반입니다."
  },
  {
    "n": 9,
    "s": 1,
    "topic": "관계",
    "q": "아래 ERD에 대한 설명으로 가장 적절한 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "학생",
              "c": 0,
              "r": 0,
              "pk": [
                "학번"
              ],
              "at": [
                "이름",
                "전공"
              ]
            },
            {
              "name": "수강신청",
              "c": 1,
              "r": 0,
              "pk": [
                "신청ID",
                "학번(FK)"
              ],
              "at": [
                "과목코드",
                "과목명"
              ]
            }
          ],
          "rels": [
            {
              "a": "학생",
              "b": "수강신청",
              "aEnd": "one",
              "bEnd": "zeroMany",
              "label": "식별"
            }
          ]
        }
      }
    ],
    "o": [
      "한 학생은 여러 과목을 수강신청할 수 있다.",
      "학생 인스턴스를 생성할 때 반드시 같은 학번을 참조하는 수강신청 인스턴스도 함께 생성해야 한다.",
      "수강신청 인스턴스를 삭제하면 해당 학생 인스턴스도 함께 삭제해야 한다.",
      "수강신청 인스턴스의 학번(FK)은 NULL을 허용하므로, 학생 인스턴스 없이도 수강신청 인스턴스를 생성할 수 있다."
    ],
    "a": 1,
    "e": "학생 1 : 수강신청 0..N 관계이므로 한 학생이 여러 건을 신청할 수 있습니다. ② 수강신청 쪽이 ○(선택)라 없어도 됩니다. ③ 자식을 지운다고 부모를 지울 필요는 없습니다. ④ 학번(FK)은 PK에 포함된 식별 관계라 NULL이 될 수 없습니다."
  },
  {
    "n": 10,
    "s": 1,
    "topic": "NULL 속성의 이해",
    "q": "NULL에 대한 설명으로 가장 적절한 것은?",
    "o": [
      "NULL과의 비교 연산 결과는 항상 FALSE이다.",
      "집계 함수(SUM, AVG 등)는 NULL 값을 제외하고 계산한다.",
      "NULL은 숫자 0과 동일한 의미를 가진다.",
      "IE 표기법에서는 속성명 앞에 동그라미(O)로 NULL 허용 여부를 표시한다."
    ],
    "a": 2,
    "e": "집계 함수는 NULL을 제외하고 계산합니다. ① NULL과의 비교 결과는 UNKNOWN입니다. ③ NULL은 0이 아닌 '값 없음'입니다. ④ 속성 앞 동그라미로 NULL 허용을 표시하는 것은 바커 표기법입니다."
  },
  {
    "n": 11,
    "s": 2,
    "topic": "WHERE 절",
    "q": "SQL의 실행 결과가 아래와 같을 때, 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "title": "CUSTOMER",
        "table": {
          "h": [
            "FIRST_NAME",
            "LAST_NAME"
          ],
          "r": [
            [
              "Jason",
              "Park"
            ],
            [
              "Mason",
              "Choi"
            ],
            [
              "Emily",
              "Lee"
            ],
            [
              "Eric",
              "Kim"
            ],
            [
              "Wilson",
              "Jung"
            ]
          ]
        }
      },
      {
        "code": "SELECT *\nFROM CUSTOMER\nWHERE [    ㉠    ];"
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "FIRST_NAME",
            "LAST_NAME"
          ],
          "r": [
            [
              "Jason",
              "Park"
            ],
            [
              "Mason",
              "Choi"
            ],
            [
              "Wilson",
              "Jung"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "RTRIM(FIRST_NAME, 'n') = FIRST_NAME"
      },
      {
        "code": "INSTR(LOWER(FIRST_NAME), 'son') = 3"
      },
      {
        "code": "REGEXP_LIKE(FIRST_NAME, 'son$', 'i')"
      },
      {
        "code": "FIRST_NAME LIKE '_son'"
      }
    ],
    "a": 3,
    "e": "'son'으로 끝나는(대소문자 무시) 이름은 Jason, Mason, Wilson입니다. ①은 n으로 끝나지 않는 Emily, Eric, ②는 Wilson이 4번째 위치라 빠짐, ④는 4글자 이름만 일치해 결과가 없습니다."
  },
  {
    "n": 12,
    "s": 2,
    "topic": "함수",
    "q": "아래 SQL의 실행 결과가 <u>다른</u> 하나는? (단, DBMS는 오라클로 가정함)",
    "o": [
      {
        "code": "SELECT SUBSTR(\n  'AI ENGINEER', 4, 2\n)\nFROM DUAL;"
      },
      {
        "code": "SELECT SUBSTR(\n  'AI ENGINEER', INSTR('AI ENGINEER', 'EN'), 2\n)\nFROM DUAL;"
      },
      {
        "code": "SELECT SUBSTR(\n  'AI ENGINEER', 7, 2\n)\nFROM DUAL;"
      },
      {
        "code": "SELECT SUBSTR(\n  'AI ENGINEER', -8, 2\n)\nFROM DUAL;"
      }
    ],
    "a": 3,
    "e": "'AI ENGINEER'는 11자(공백 포함)입니다. ① 4번째부터 'EN', ② INSTR = 4 → 'EN', ④ 뒤에서 8번째 = 4번째 → 'EN'. ③ 7번째부터는 'IN'."
  },
  {
    "n": 13,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 SQL의 빈칸 ㉠에 들어갔을 때 오류가 발생하는 것은? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "SELECT [  ㉠  ], COUNT(STUDENT_ID)\nFROM STUDENT\nGROUP BY MAJOR, YEAR;"
      }
    ],
    "o": [
      {
        "code": "MIN(STUDENT_ID)"
      },
      {
        "code": "MAJOR"
      },
      {
        "code": "YEAR"
      },
      {
        "code": "GPA"
      }
    ],
    "a": 4,
    "e": "GROUP BY에 없는 칼럼(GPA)은 집계 함수 없이 SELECT에 쓸 수 없습니다."
  },
  {
    "n": 14,
    "s": 2,
    "topic": "함수",
    "q": "아래 SQL의 실행 결과는? (단, 현재 시각은 2025년 6월 15일 14시 35분 26초이며, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "SELECT\n  TO_CHAR(\n      SYSDATE,\n      'YY-MM-DD HH24:MI:SS') AS NRM,\n  TO_CHAR(\n      TRUNC(SYSDATE),\n      'YY-MM-DD HH24:MI:SS') AS TRC,\n  TO_CHAR(\n      ROUND(SYSDATE),\n      'YY-MM-DD HH24:MI:SS') AS RND\nFROM DUAL;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "NRM",
            "TRC",
            "RND"
          ],
          "r": [
            [
              "25-06-15 14:35:26",
              "25-06-15 14:35:26",
              "25-06-16 00:00:00"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "NRM",
            "TRC",
            "RND"
          ],
          "r": [
            [
              "25-06-15 14:35:26",
              "25-06-15 00:00:00",
              "25-06-16 00:00:00"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "NRM",
            "TRC",
            "RND"
          ],
          "r": [
            [
              "25-06-15 00:00:00",
              "25-06-15 00:00:00",
              "25-06-16 00:00:00"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "NRM",
            "TRC",
            "RND"
          ],
          "r": [
            [
              "25-06-15 14:35:26",
              "25-06-15 00:00:00",
              "25-06-15 00:00:00"
            ]
          ]
        }
      }
    ],
    "a": 2,
    "e": "TRUNC(SYSDATE)는 시간을 버려 6월 15일 00:00:00. ROUND(SYSDATE)는 정오(12시) 이후이므로 다음 날 6월 16일 00:00:00."
  },
  {
    "n": 15,
    "s": 2,
    "topic": "WHERE 절",
    "q": "[주문] 테이블이 있을 때, 2024년 5월부터 2024년 8월까지의 총주문금액을 구하는 SQL로 가장 적절한 것은? (단, DBMS는 오라클로 가정함)",
    "o": [
      {
        "code": "SELECT SUM(주문금액)\nFROM 주문\nWHERE EXTRACT(YEAR FROM 주문일) = 2024\nAND EXTRACT(MONTH FROM 주문일)\n    IN (5, 6, 7, 8);"
      },
      {
        "code": "SELECT SUM(주문금액)\nFROM 주문\nWHERE 주문일 BETWEEN DATE '2024-05-01'\nAND DATE '2024-08-31';"
      },
      {
        "code": "SELECT SUM(주문금액)\nFROM 주문\nWHERE TO_CHAR(주문일, 'MM')\n      IN ('5', '6', '7', '8');"
      },
      {
        "code": "SELECT SUM(주문금액)\nFROM 주문\nWHERE EXTRACT(YEAR FROM 주문일) = 2024\nAND EXTRACT(MONTH FROM 주문일)\n    IN (5, 6, 7, 8)\nAND EXTRACT(DAY FROM 주문일) <= 30;"
      }
    ],
    "a": 1,
    "e": "② 8월 31일 00:00:00까지만 포함해 31일 낮 주문이 빠집니다. ③ TO_CHAR 'MM'은 '05'처럼 두 자리라 일치하지 않고 연도 조건도 없습니다. ④ 31일 주문이 빠집니다."
  },
  {
    "n": 16,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 SQL을 실행할 때 오류가 발생하는 것의 개수로 가장 적절한 것은?",
    "b": [
      {
        "code": "CREATE TABLE MOVIE (\n  TITLE   VARCHAR2(30),\n  RATING  NUMBER\n);"
      },
      {
        "title": "MOVIE",
        "table": {
          "h": [
            "TITLE",
            "RATING"
          ],
          "r": [
            [
              "Avatar",
              "9.0"
            ],
            [
              "Titanic",
              "8.5"
            ],
            [
              "Inception",
              "9.3"
            ],
            [
              "Matrix",
              "8.7"
            ],
            [
              "Interstellar",
              "9.1"
            ]
          ]
        }
      },
      {
        "code": "(가) SELECT SUM(RATING)\n     FROM MOVIE\n     WHERE SUM(RATING) > 25;\n(나) SELECT (\n         SELECT RATING\n         FROM MOVIE\n         WHERE RATING >= 9) AS TOP_R\n     FROM MOVIE;\n(다) SELECT TITLE, SUM(RATING)\n     FROM MOVIE\n     GROUP BY RATING;\n(라) SELECT TITLE, RATING\n     FROM MOVIE\n     GROUP BY RATING;"
      }
    ],
    "o": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "a": 4,
    "e": "(가) 집계 함수는 WHERE에 쓸 수 없음. (나) 스칼라 서브쿼리가 3행을 반환해 오류. (다)(라) GROUP BY에 없는 TITLE을 SELECT에 사용해 오류. 4개 모두 오류입니다."
  },
  {
    "n": 17,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 SQL을 실행했을 때 ID가 3인 행의 CNT_3의 값은?",
    "b": [
      {
        "title": "NUMS",
        "table": {
          "h": [
            "ID",
            "VAL"
          ],
          "r": [
            [
              "1",
              "2"
            ],
            [
              "2",
              "3"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "1"
            ],
            [
              "5",
              "3"
            ]
          ]
        }
      },
      {
        "code": "SELECT ID, VAL,\n  COUNT(CASE\n        WHEN VAL = 3 THEN 1 END)\n  OVER(\n        ORDER BY ID\n        ROWS BETWEEN UNBOUNDED\n        PRECEDING AND CURRENT ROW)\n  AS CNT_3\nFROM NUMS\nORDER BY ID;"
      }
    ],
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 2,
    "e": "ID 1~3까지 누적으로 VAL = 3인 행을 셉니다. ID 2, 3 → 2."
  },
  {
    "n": 18,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 테이블을 참고할 때 SQL의 실행 결과가 <u>다른</u> 하나는?",
    "b": [
      {
        "title": "TBL_SALES",
        "table": {
          "h": [
            "PROD_ID",
            "SALES",
            "REGION"
          ],
          "r": [
            [
              "1",
              "900",
              "A"
            ],
            [
              "2",
              "900",
              "B"
            ],
            [
              "3",
              "850",
              "C"
            ],
            [
              "4",
              "800",
              "D"
            ],
            [
              "5",
              "800",
              "D"
            ],
            [
              "6",
              "750",
              "E"
            ],
            [
              "7",
              "750",
              "E"
            ],
            [
              "8",
              "700",
              "F"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT SALES\nFROM (\n  SELECT SALES, RANK() OVER (ORDER BY\n  SALES DESC) AS RNK\n  FROM TBL_SALES\n)\nWHERE RNK <= 3;"
      },
      {
        "code": "SELECT SALES\nFROM (\n  SELECT SALES, DENSE_RANK() OVER (\n  ORDER BY SALES DESC) AS RNK\n  FROM TBL_SALES\n)\nWHERE RNK <= 2;"
      },
      {
        "code": "SELECT *\nFROM (\n  SELECT DISTINCT SALES\n  FROM TBL_SALES\n  ORDER BY SALES DESC\n)\nWHERE ROWNUM <= 3;"
      },
      {
        "code": "SELECT SALES\nFROM (\n  SELECT SALES\n  FROM TBL_SALES\n  ORDER BY SALES DESC\n)\nWHERE ROWNUM <= 3;"
      }
    ],
    "a": 3,
    "e": "①②④는 900, 900, 850. ③은 DISTINCT로 중복을 없앤 뒤 3건이라 900, 850, 800입니다."
  },
  {
    "n": 19,
    "s": 2,
    "topic": "그룹 함수",
    "q": "아래 테이블을 참고할 때 SQL의 실행 결과가 <u>다른</u> 하나는?",
    "b": [
      {
        "title": "PRODUCT",
        "table": {
          "h": [
            "PNAME",
            "PRICE"
          ],
          "r": [
            [
              "Pen",
              "100"
            ],
            [
              "Book",
              "200"
            ],
            [
              "Note",
              "100"
            ],
            [
              "Pen",
              "NULL"
            ],
            [
              "Ruler",
              "200"
            ],
            [
              "NULL",
              "300"
            ],
            [
              "Book",
              "NULL"
            ],
            [
              "Eraser",
              "400"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT COUNT(DISTINCT PNAME)\nFROM   PRODUCT;"
      },
      {
        "code": "SELECT COUNT(*)\nFROM   (SELECT DISTINCT PNAME\n        FROM PRODUCT);"
      },
      {
        "code": "SELECT COUNT(PNAME)\nFROM   (SELECT DISTINCT PNAME\n        FROM PRODUCT);"
      },
      {
        "code": "SELECT COUNT(*)\nFROM   (SELECT DISTINCT PNAME\n        FROM PRODUCT\n        WHERE PNAME IS NOT NULL);"
      }
    ],
    "a": 2,
    "e": "DISTINCT PNAME은 Pen, Book, Note, Ruler, Eraser, NULL의 6행입니다. COUNT(*)는 NULL 행도 세어 6, 나머지는 NULL을 빼고 5입니다."
  },
  {
    "n": 20,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 실행 결과를 참고할 때 SQL의 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "title": "상품",
        "table": {
          "h": [
            "상품ID",
            "카테고리",
            "판매연도",
            "매출"
          ],
          "r": [
            [
              "101",
              "식품",
              "2023",
              "500"
            ],
            [
              "102",
              "식품",
              "2022",
              "600"
            ],
            [
              "103",
              "의류",
              "2022",
              "800"
            ],
            [
              "104",
              "식품",
              "2023",
              "900"
            ],
            [
              "105",
              "의류",
              "2023",
              "400"
            ]
          ]
        }
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "카테고리",
            "판매연도",
            "합계매출"
          ],
          "r": [
            [
              "식품",
              "2022",
              "600"
            ],
            [
              "식품",
              "2023",
              "1400"
            ],
            [
              "식품",
              "NULL",
              "2000"
            ],
            [
              "의류",
              "2022",
              "800"
            ],
            [
              "의류",
              "2023",
              "400"
            ],
            [
              "의류",
              "NULL",
              "1200"
            ],
            [
              "NULL",
              "NULL",
              "3200"
            ]
          ]
        }
      },
      {
        "code": "SELECT 카테고리, 판매연도,\n       SUM(매출) AS 합계매출\nFROM 상품\nGROUP BY [  ㉠  ](카테고리, 판매연도)\nORDER BY 카테고리, 판매연도;"
      }
    ],
    "o": [
      {
        "code": "CUBE"
      },
      {
        "code": "ROLLUP"
      },
      {
        "code": "GROUPING SETS"
      },
      {
        "code": "GROUPING"
      }
    ],
    "a": 2,
    "e": "카테고리별 소계와 총계만 있고 판매연도별 소계는 없으므로 ROLLUP입니다."
  },
  {
    "n": 21,
    "s": 2,
    "topic": "표준 조인",
    "q": "아래 SQL의 실행 시 출력되는 행의 개수로 가장 적절한 것은?",
    "b": [
      {
        "title": "AUTHOR",
        "table": {
          "h": [
            "A_ID",
            "NAME"
          ],
          "r": [
            [
              "A001",
              "Kim"
            ],
            [
              "A002",
              "Lee"
            ],
            [
              "A003",
              "Park"
            ],
            [
              "A004",
              "Choi"
            ],
            [
              "A005",
              "Han"
            ],
            [
              "A006",
              "Jung"
            ]
          ]
        }
      },
      {
        "title": "BOOK",
        "table": {
          "h": [
            "BOOK_NO",
            "A_ID"
          ],
          "r": [
            [
              "B100",
              "A001"
            ],
            [
              "B101",
              "A002"
            ],
            [
              "B102",
              "A003"
            ],
            [
              "B103",
              "A004"
            ],
            [
              "B104",
              "A005"
            ]
          ]
        }
      },
      {
        "code": "SELECT *\nFROM AUTHOR A LEFT JOIN BOOK B\nON A.A_ID = B.A_ID\nUNION ALL\nSELECT *\nFROM AUTHOR A RIGHT JOIN BOOK B\nON A.A_ID = B.A_ID\nUNION ALL\nSELECT *\nFROM AUTHOR A INNER JOIN BOOK B\nON A.A_ID <> B.A_ID;"
      }
    ],
    "o": [
      "34",
      "35",
      "36",
      "37"
    ],
    "a": 3,
    "e": "LEFT JOIN 6행(A006 포함) + RIGHT JOIN 5행 + <> 조인 6×5−5 = 25행 → 36."
  },
  {
    "n": 22,
    "s": 2,
    "topic": "서브쿼리",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "고객",
        "table": {
          "h": [
            "고객번호",
            "고객이름"
          ],
          "r": [
            [
              "C001",
              "김수연"
            ],
            [
              "C002",
              "박민호"
            ],
            [
              "C003",
              "이영숙"
            ]
          ]
        }
      },
      {
        "title": "고객정보",
        "table": {
          "h": [
            "고객번호",
            "전화번호"
          ],
          "r": [
            [
              "C001",
              "02-123-4567"
            ],
            [
              "C001",
              "010-1234-4567"
            ],
            [
              "C002",
              "031-987-6543"
            ],
            [
              "C003",
              "010-9865-1234"
            ],
            [
              "C003",
              "010-9876-5432"
            ]
          ]
        }
      },
      {
        "code": "SELECT 고객이름\nFROM 고객\nWHERE EXISTS (\n  SELECT 1\n  FROM 고객정보\n  WHERE 고객정보.고객번호 = 고객.고객번호\n        AND 전화번호\n        NOT BETWEEN '010-0000-0000'\n        AND '010-9999-9999')\nAND NOT EXISTS (\n  SELECT 1\n  FROM 고객정보\n  WHERE 고객정보.고객번호 = 고객.고객번호\n        AND 전화번호\n        BETWEEN '010-0000-0000'\n        AND '010-9999-9999');"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "고객이름"
          ],
          "r": [
            [
              "김수연"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "고객이름"
          ],
          "r": [
            [
              "박민호"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "고객이름"
          ],
          "r": [
            [
              "김수연"
            ],
            [
              "박민호"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "고객이름"
          ],
          "r": [
            [
              "이영숙"
            ]
          ]
        }
      }
    ],
    "a": 2,
    "e": "010이 아닌 번호가 있으면서 010 번호는 하나도 없는 고객입니다. 김수연은 010 번호가 있고, 이영숙은 010 번호만 있어 박민호만 남습니다."
  },
  {
    "n": 23,
    "s": 2,
    "topic": "표준 조인",
    "q": "다음 두 테이블에 대해 LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, INNER JOIN을 각각 실행하여 생성되는 결과의 레코드 수를 구한 뒤, 이 값을 모두 합한 결과는?",
    "b": [
      {
        "title": "A",
        "table": {
          "h": [
            "A_KEY"
          ],
          "r": [
            [
              "A"
            ],
            [
              "C"
            ],
            [
              "E"
            ],
            [
              "G"
            ]
          ]
        }
      },
      {
        "title": "B",
        "table": {
          "h": [
            "B_KEY"
          ],
          "r": [
            [
              "B"
            ],
            [
              "D"
            ],
            [
              "F"
            ],
            [
              "G"
            ]
          ]
        }
      },
      {
        "code": "(가) SELECT A_KEY, B_KEY\n     FROM A LEFT JOIN B\n     ON A_KEY = B_KEY;\n(나) SELECT A_KEY, B_KEY\n     FROM A RIGHT JOIN B\n     ON A_KEY = B_KEY;\n(다) SELECT A_KEY, B_KEY\n     FROM A FULL OUTER JOIN B\n     ON A_KEY = B_KEY;\n(라) SELECT A_KEY, B_KEY\n     FROM A INNER JOIN B\n     ON A_KEY = B_KEY;"
      }
    ],
    "o": [
      "13",
      "14",
      "15",
      "16"
    ],
    "a": 4,
    "e": "일치하는 값은 G 하나. LEFT 4 + RIGHT 4 + FULL 7 + INNER 1 = 16."
  },
  {
    "n": 24,
    "s": 2,
    "topic": "표준 조인",
    "q": "두 테이블 간 동일한 이름을 가진 칼럼의 동등 조인(EQUI JOIN)을 수행하는 방식의 JOIN은?",
    "o": [
      "INNER JOIN",
      "CROSS JOIN",
      "OUTER JOIN",
      "NATURAL JOIN"
    ],
    "a": 4,
    "e": "NATURAL JOIN은 이름이 같은 모든 칼럼으로 자동 동등 조인합니다."
  },
  {
    "n": 25,
    "s": 2,
    "topic": "집합 연산자",
    "q": "아래 테이블을 참고할 때 SQL의 실행 결과가 <u>다른</u> 하나는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "title": "T1",
        "table": {
          "h": [
            "VAL"
          ],
          "r": [
            [
              "A"
            ],
            [
              "B"
            ],
            [
              "C"
            ],
            [
              "D"
            ]
          ]
        }
      },
      {
        "title": "T2",
        "table": {
          "h": [
            "VAL"
          ],
          "r": [
            [
              "A"
            ],
            [
              "B"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT VAL\nFROM T1\nMINUS\nSELECT VAL\nFROM T2\nORDER BY 1;"
      },
      {
        "code": "SELECT A.VAL\nFROM T1 A LEFT JOIN T2 B\nON A.VAL = B.VAL\nWHERE B.VAL IS NULL\nORDER BY 1;"
      },
      {
        "code": "SELECT A.VAL\nFROM T1 A, T2 B\nWHERE A.VAL <> B.VAL\nORDER BY 1;"
      },
      {
        "code": "SELECT A.VAL\nFROM T1 A\nWHERE A.VAL NOT IN (SELECT VAL FROM T2)\nORDER BY 1;"
      }
    ],
    "a": 3,
    "e": "①②④는 C, D. ③은 T2의 각 행과 다르면 모두 나와 A, B, C, C, D, D(6행)입니다."
  },
  {
    "n": 26,
    "s": 2,
    "topic": "집합 연산자",
    "q": "집합 연산자 INTERSECT에 대한 설명으로 가장 적절한 것은?",
    "o": [
      "두 결과 집합의 교집합을 구하며, 중복된 행을 하나로 축소해 반환한다.",
      "두 결과 집합의 교집합을 구하며, 중복된 행도 모두 반환한다.",
      "두 결과 집합의 합집합을 구하며, 중복된 행을 하나로 축소해 반환한다.",
      "두 결과 집합의 합집합을 구하며, 중복된 행도 모두 반환한다."
    ],
    "a": 1,
    "e": "INTERSECT는 교집합이며 중복을 제거합니다. ③은 UNION, ④는 UNION ALL입니다."
  },
  {
    "n": 27,
    "s": 2,
    "topic": "계층형 질의와 셀프 조인",
    "q": "아래 테이블과 실행 결과를 참고할 때 SQL의 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "title": "MEMBER",
        "table": {
          "h": [
            "M_ID",
            "NAME"
          ],
          "r": [
            [
              "101",
              "LEE"
            ],
            [
              "103",
              "KIM"
            ],
            [
              "104",
              "CHOI"
            ],
            [
              "105",
              "LEE"
            ],
            [
              "107",
              "KIM"
            ]
          ]
        }
      },
      {
        "code": "SELECT A.M_ID, A.NAME\nFROM MEMBER A LEFT JOIN MEMBER B\nON A.NAME = B.NAME\nAND ( [   ㉠   ] )\nWHERE B.M_ID IS NULL\nORDER BY A.M_ID;"
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "M_ID",
            "NAME"
          ],
          "r": [
            [
              "104",
              "CHOI"
            ],
            [
              "105",
              "LEE"
            ],
            [
              "107",
              "KIM"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "A.M_ID <= B.M_ID"
      },
      {
        "code": "A.M_ID < B.M_ID"
      },
      {
        "code": "A.M_ID >= B.M_ID"
      },
      {
        "code": "A.M_ID > B.M_ID"
      }
    ],
    "a": 2,
    "e": "이름이 같으면서 자기보다 M_ID가 큰 행이 없는(B가 NULL) 행, 즉 이름별 가장 큰 M_ID만 남습니다. ① <=는 자기 자신과도 조인되어 결과가 없습니다."
  },
  {
    "n": 28,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "부서별로 사원수가 가장 많은 부서를 찾기 위한 SQL을 수행하고자 한다. 빈칸 ㉠, ㉡에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "code": "SELECT 부서\nFROM 직원\nGROUP BY 부서\n[  ㉠  ] >= [  ㉡  ] (\n          SELECT COUNT(*)\n          FROM 직원\n          GROUP BY 부서);"
      }
    ],
    "o": [
      {
        "code": "HAVING COUNT(*), ANY"
      },
      {
        "code": "HAVING COUNT(*), ALL"
      },
      {
        "code": "ORDER BY COUNT(*), ANY"
      },
      {
        "code": "ORDER BY COUNT(*), ALL"
      }
    ],
    "a": 2,
    "e": "그룹 조건은 HAVING에 쓰고, 모든 부서의 사원수보다 크거나 같아야 하므로 >= ALL입니다."
  },
  {
    "n": 29,
    "s": 2,
    "topic": "서브쿼리",
    "q": "아래 SQL에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "회원",
              "c": 0,
              "r": 0,
              "pk": [
                "회원번호"
              ],
              "at": [
                "회원명",
                "가입일"
              ]
            },
            {
              "name": "메일발송",
              "c": 1,
              "r": 0,
              "pk": [
                "메일ID",
                "회원번호(FK)",
                "이벤트번호(FK)"
              ],
              "at": [
                "발송일자",
                "발송상태"
              ]
            },
            {
              "name": "이벤트",
              "c": 2,
              "r": 0,
              "pk": [
                "이벤트번호"
              ],
              "at": [
                "이벤트명",
                "이벤트기간"
              ]
            }
          ],
          "rels": [
            {
              "a": "회원",
              "b": "메일발송",
              "aEnd": "one",
              "bEnd": "zeroMany",
              "label": "식별"
            },
            {
              "a": "이벤트",
              "b": "메일발송",
              "aEnd": "one",
              "bEnd": "zeroMany",
              "label": "식별"
            }
          ]
        }
      },
      {
        "code": "SELECT A.회원번호, A.회원명\nFROM 회원 A\nWHERE NOT EXISTS (\n  SELECT 1 --------------------- ㉠\n  FROM 메일발송 M JOIN 이벤트 E\n  ON M.이벤트번호 = E.이벤트번호\n  WHERE M.회원번호 = A.회원번호\n  AND M.발송일자 < DATE '2020-01-20'\n);"
      }
    ],
    "o": [
      "2020-01-20 이전에 메일 발송 기록이 전혀 없는 회원을 조회한다.",
      "㉠ 위치에는 EXISTS 절의 특성상 실제 칼럼명 대신 상수를 사용해도 결과에는 영향이 없다.",
      "서브쿼리의 FROM 절에 여러 테이블을 나열할 때 조인 조건이 없어도 NOT EXISTS의 결과는 변하지 않는다.",
      "M.회원번호 = A.회원번호 조건은 서브쿼리에서 외부 쿼리의 A.회원번호 값을 참조하여 비교하는 역할을 한다."
    ],
    "a": 3,
    "e": "조인 조건이 없으면 카티션 곱이 됩니다. 특히 이벤트 테이블이 비어 있으면 결과가 0건이 되어 NOT EXISTS 결과가 달라질 수 있습니다. 조인 조건은 결과에 영향을 줍니다."
  },
  {
    "n": 30,
    "s": 2,
    "topic": "서브쿼리",
    "q": "학생 테이블에서 학과별로 점수가 가장 높은 학생을 조회하는 SQL로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      {
        "code": "SELECT 학과, 이름, 점수\nFROM 학생 S1\nWHERE NOT EXISTS (\n      SELECT 1\n      FROM 학생 S2\n      WHERE S2.학과 = S1.학과\n      AND S2.점수 > S1.점수\n);"
      },
      {
        "code": "SELECT S1.학과, S1.이름, S1.점수\nFROM 학생 S1\nJOIN (\n  SELECT 학과, MAX(점수) AS 최고점수\n  FROM 학생\n  GROUP BY 학과\n) S2\nON S1.학과 = S2.학과\nAND S1.점수 = S2.최고점수;"
      },
      {
        "code": "SELECT 학과, 이름, 점수\nFROM (\n  SELECT 학과, 이름, 점수,\n         RANK() OVER (PARTITION BY 학과\n         ORDER BY 점수 DESC) AS RK\n  FROM 학생\n) T\nWHERE T.RK = 1;"
      },
      {
        "code": "SELECT 학과, 이름, 점수\nFROM 학생 S1\nWHERE S1.점수 >= ANY (\n      SELECT 점수\n      FROM 학생 S2\n      WHERE S2.학과 = S1.학과\n);"
      }
    ],
    "a": 4,
    "e": ">= ANY는 학과 최저점 이상이면 참이라 학과의 모든 학생이 조회됩니다. 최고점만 고르려면 >= ALL을 써야 합니다."
  },
  {
    "n": 31,
    "s": 2,
    "topic": "관계형 데이터베이스 개요",
    "q": "SQL 명령어의 종류가 올바르게 연결되지 <u>않은</u> 것은?",
    "o": [
      "DDL - CREATE",
      "DCL - GRANT",
      "DML - DROP",
      "TCL - ROLLBACK"
    ],
    "a": 3,
    "e": "DROP은 DDL입니다."
  },
  {
    "n": 32,
    "s": 2,
    "topic": "정규 표현식",
    "q": "정규 표현식 메타 문자에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      ". : 공백 문자를 제외한 임의의 한 문자와 일치",
      "$ : 입력 문자열의 끝 위치와 일치",
      "^ : 입력 문자열의 시작 위치와 일치",
      "\\w : 영문자, 숫자, 밑줄(_) 중 하나와 일치"
    ],
    "a": 1,
    "e": "'.'는 공백을 포함한 임의의 한 문자와 일치합니다(기본적으로 줄바꿈만 제외)."
  },
  {
    "n": 33,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 실행 결과를 출력하는 SQL로 가장 적절한 것은? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "title": "SALES_RESULTS",
        "table": {
          "h": [
            "PRODUCT_ID",
            "PERIOD",
            "AMOUNT"
          ],
          "r": [
            [
              "P1",
              "1월",
              "100"
            ],
            [
              "P1",
              "2월",
              "200"
            ],
            [
              "P2",
              "1월",
              "150"
            ],
            [
              "P2",
              "2월",
              "250"
            ]
          ]
        }
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "PRODUCT_ID",
            "PERIOD",
            "AMOUNT"
          ],
          "r": [
            [
              "P1",
              "1월",
              "100"
            ],
            [
              "P1",
              "2월",
              "200"
            ],
            [
              "P1",
              "소계",
              "300"
            ],
            [
              "P2",
              "1월",
              "150"
            ],
            [
              "P2",
              "2월",
              "250"
            ],
            [
              "P2",
              "소계",
              "400"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT PRODUCT_ID,\n       PERIOD,\n       SUM(AMOUNT) AS AMOUNT\nFROM SALES_RESULTS\nGROUP BY PERIOD, ROLLUP (PRODUCT_ID)\nORDER BY PRODUCT_ID, PERIOD;"
      },
      {
        "code": "SELECT NVL(PRODUCT_ID, '전체')\n         AS PRODUCT_ID,\n       NVL(PERIOD, '소계') AS PERIOD,\n       SUM(AMOUNT) AS AMOUNT\nFROM SALES_RESULTS\nGROUP BY CUBE (PRODUCT_ID, PERIOD)\nORDER BY PRODUCT_ID, PERIOD;"
      },
      {
        "code": "SELECT NVL(PRODUCT_ID, '전체')\n         AS PRODUCT_ID,\n       NVL(PERIOD, '소계') AS PERIOD,\n       SUM(AMOUNT) AS AMOUNT\nFROM SALES_RESULTS\nGROUP BY GROUPING SETS (\n       (PRODUCT_ID),\n       (PERIOD)\n)\nORDER BY PRODUCT_ID, PERIOD;"
      },
      {
        "code": "SELECT NVL(PRODUCT_ID, '전체')\n         AS PRODUCT_ID,\n       NVL(PERIOD, '소계') AS PERIOD,\n       SUM(AMOUNT) AS AMOUNT\nFROM SALES_RESULTS\nGROUP BY GROUPING SETS (\n       (PRODUCT_ID, PERIOD),\n       (PRODUCT_ID)\n)\nORDER BY PRODUCT_ID, PERIOD;"
      }
    ],
    "a": 4,
    "e": "(상품, 기간)별 행과 상품별 소계만 필요합니다. ①은 기간별 소계, ②는 총계·기간별 소계까지, ③은 상세 행 없이 소계만 나옵니다."
  },
  {
    "n": 34,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "직원",
        "table": {
          "h": [
            "직원ID",
            "부서코드",
            "직원명",
            "급여"
          ],
          "r": [
            [
              "001",
              "100",
              "김수연",
              "2500"
            ],
            [
              "002",
              "100",
              "박민호",
              "3000"
            ],
            [
              "003",
              "200",
              "이영숙",
              "4500"
            ],
            [
              "004",
              "200",
              "오지훈",
              "3000"
            ],
            [
              "005",
              "200",
              "한진아",
              "2500"
            ],
            [
              "006",
              "300",
              "장민호",
              "4500"
            ],
            [
              "007",
              "300",
              "최영희",
              "3000"
            ]
          ]
        }
      },
      {
        "code": "SELECT Y.직원ID, Y.부서코드, Y.직원명, Y.급여\nFROM (SELECT 직원ID,\n        MAX(급여) OVER (PARTITION BY 부서코드)\n        AS 최고급여\n      FROM 직원\n) X\nJOIN 직원 Y ON X.직원ID = Y.직원ID\n    AND X.최고급여 = Y.급여;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "직원ID",
            "부서코드",
            "직원명",
            "급여"
          ],
          "r": [
            [
              "003",
              "200",
              "이영숙",
              "4500"
            ],
            [
              "006",
              "300",
              "장민호",
              "4500"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "직원ID",
            "부서코드",
            "직원명",
            "급여"
          ],
          "r": [
            [
              "002",
              "100",
              "박민호",
              "3000"
            ],
            [
              "003",
              "200",
              "이영숙",
              "4500"
            ],
            [
              "006",
              "300",
              "장민호",
              "4500"
            ],
            [
              "007",
              "300",
              "최영희",
              "3000"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "직원ID",
            "부서코드",
            "직원명",
            "급여"
          ],
          "r": [
            [
              "001",
              "100",
              "김수연",
              "2500"
            ],
            [
              "005",
              "200",
              "한진아",
              "2500"
            ],
            [
              "007",
              "300",
              "최영희",
              "3000"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "직원ID",
            "부서코드",
            "직원명",
            "급여"
          ],
          "r": [
            [
              "002",
              "100",
              "박민호",
              "3000"
            ],
            [
              "003",
              "200",
              "이영숙",
              "4500"
            ],
            [
              "006",
              "300",
              "장민호",
              "4500"
            ]
          ]
        }
      }
    ],
    "a": 4,
    "e": "부서별 최고 급여와 자기 급여가 같은 직원: 100번 박민호(3000), 200번 이영숙(4500), 300번 장민호(4500)."
  },
  {
    "n": 35,
    "s": 2,
    "topic": "그룹 함수",
    "q": "아래 SQL의 실행 결과는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "SELECT NVL(COUNT(*), -1)\nFROM DUAL\nWHERE 1 = 2;"
      }
    ],
    "o": [
      "-1",
      "0",
      "NULL",
      "1"
    ],
    "a": 2,
    "e": "조건에 맞는 행이 없어도 COUNT(*)는 0을 반환합니다. 0은 NULL이 아니므로 NVL은 0을 그대로 돌려줍니다."
  },
  {
    "n": 36,
    "s": 2,
    "topic": "서브쿼리",
    "q": "아래에서 설명하는 서브쿼리의 종류로 가장 적절한 것은?",
    "b": [
      {
        "box": "메인쿼리의 조건부에서 두 개 이상의 칼럼을 한꺼번에 조회하고 비교해야 할 때 활용된다. 서브쿼리의 실행 결과로 여러 개의 칼럼을 반환한다. 서브쿼리와 메인쿼리에서 비교하려는 칼럼 들의 개수 및 위치가 반드시 일치해야 한다."
      }
    ],
    "o": [
      "다중행 서브쿼리",
      "다중칼럼 서브쿼리",
      "단일칼럼 서브쿼리",
      "단일행 서브쿼리"
    ],
    "a": 2,
    "e": "여러 칼럼을 한꺼번에 비교하는 서브쿼리는 다중칼럼 서브쿼리입니다."
  },
  {
    "n": 37,
    "s": 2,
    "topic": "DML",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "T1",
        "table": {
          "h": [
            "ID",
            "NAME"
          ],
          "r": [
            [
              "10",
              "John"
            ],
            [
              "20",
              "Mary"
            ]
          ]
        }
      },
      {
        "title": "T2",
        "table": {
          "h": [
            "ID",
            "NAME"
          ],
          "r": [
            [
              "10",
              "Jack"
            ],
            [
              "20",
              "James"
            ],
            [
              "30",
              "Luke"
            ],
            [
              "40",
              "Laura"
            ]
          ]
        }
      },
      {
        "code": "MERGE INTO T1\nUSING T2\nON (T1.ID = T2.ID)\nWHEN MATCHED THEN\n  UPDATE SET T1.NAME = T2.NAME\n  WHERE T1.ID <= 10\nWHEN NOT MATCHED THEN\n  INSERT (ID, NAME) VALUES (T2.ID, T2.NAME)\n  WHERE T2.ID >= 40;\n\nSELECT * FROM T1;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "ID",
            "NAME"
          ],
          "r": [
            [
              "10",
              "John"
            ],
            [
              "20",
              "Mary"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "ID",
            "NAME"
          ],
          "r": [
            [
              "10",
              "Jack"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "ID",
            "NAME"
          ],
          "r": [
            [
              "20",
              "James"
            ],
            [
              "40",
              "Laura"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "ID",
            "NAME"
          ],
          "r": [
            [
              "10",
              "Jack"
            ],
            [
              "20",
              "Mary"
            ],
            [
              "40",
              "Laura"
            ]
          ]
        }
      }
    ],
    "a": 4,
    "e": "ID 10은 일치 + 조건 만족 → Jack으로 수정. ID 20은 일치하지만 조건(<= 10) 불만족 → Mary 유지. ID 30은 불일치지만 조건(>= 40) 불만족 → 삽입 안 함. ID 40은 삽입 → Laura."
  },
  {
    "n": 38,
    "s": 2,
    "topic": "TCL",
    "q": "트랜잭션에서 데이터를 수정하고 아직 COMMIT을 수행하지 않았다. 이에 관한 설명으로 가장 적절하지 <u>않은</u> 것은? (단, DBMS는 오라클로 가정함)",
    "o": [
      "다른 세션은 COMMIT 전이라도 수정된 내용을 조회로 확인할 수 있다.",
      "다른 세션은 현재 수정 중인 동일한 행을 동시에 수정할 수 없다.",
      "같은 세션에서는 아직 COMMIT하지 않았어도 본인이 수정한 내용을 조회할 수 있다.",
      "같은 세션에서 ROLLBACK을 실행하면 이번 트랜잭션의 모든 변경사항이 취소된다."
    ],
    "a": 1,
    "e": "COMMIT 전 변경 내용은 다른 세션에서 볼 수 없습니다(변경 전 데이터가 보임)."
  },
  {
    "n": 39,
    "s": 2,
    "topic": "DDL",
    "q": "아래 SQL의 실행 결과는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "CREATE TABLE PAIRS (\n  VAL1 CHAR(50),\n  VAL2 CHAR(50)\n);\n\nINSERT INTO PAIRS (VAL1, VAL2)\nVALUES ('cat', 'cat');\nINSERT INTO PAIRS (VAL1, VAL2)\nVALUES ('dog', '    dog');\nINSERT INTO PAIRS (VAL1, VAL2)\nVALUES ('fish', 'fish    ');\nINSERT INTO PAIRS (VAL1, VAL2)\nVALUES ('bird', '    bird    ');\n\nSELECT COUNT(*)\nFROM PAIRS\nWHERE VAL1 = VAL2;"
      }
    ],
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 2,
    "e": "CHAR는 뒤쪽을 공백으로 채워 저장하므로 뒤 공백 차이는 같게 비교됩니다. 앞 공백은 다른 값입니다. cat, fish가 같아 2건."
  },
  {
    "n": 40,
    "s": 2,
    "topic": "그룹 함수",
    "q": "아래 SQL의 실행 결과를 순서대로 나열한 것은?",
    "b": [
      {
        "title": "SALES_INFO",
        "table": {
          "h": [
            "PROD_ID",
            "PRICE"
          ],
          "r": [
            [
              "P001",
              "500"
            ],
            [
              "P001",
              "700"
            ],
            [
              "P001",
              "NULL"
            ],
            [
              "P002",
              "900"
            ],
            [
              "P002",
              "1100"
            ]
          ]
        }
      },
      {
        "code": "(가) SELECT SUM(PRICE)/COUNT(PRICE)\n     FROM SALES_INFO\n     WHERE PROD_ID = 'P001';\n(나) SELECT SUM(PRICE)/COUNT(*)\n     FROM SALES_INFO\n     WHERE PRICE > (SELECT MIN(PRICE)\n                    FROM SALES_INFO\n                    WHERE PROD_ID = 'P002');"
      }
    ],
    "o": [
      "400, 1100",
      "400, 600",
      "600, 1100",
      "600, 600"
    ],
    "a": 3,
    "e": "(가) 1200 / 2(NULL 제외) = 600. (나) PRICE > 900인 행은 1100 하나 → 1100 / 1 = 1100."
  },
  {
    "n": 41,
    "s": 2,
    "topic": "계층형 질의와 셀프 조인",
    "q": "오라클 계층형 질의에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "code": "SELECT ...\nFROM 테이블명\nWHERE 조건식 AND 조건식\nSTART WITH 조건식\nCONECT BY[NOCYCLE] 조건식 AND 조건식\nORDER SINGLES BY 칼럼, 칼럼 ...;"
      }
    ],
    "o": [
      "START WITH 절은 계층형 질의의 루트 노드를 지정하는 데 사용한다.",
      "CONNECT BY 절은 자식 노드들의 계층 단계(LEVEL)를 지정하는 데 사용한다.",
      "ORDER SIBLINGS BY 절은 같은 부모를 가진 형제 노드들 간의 정렬 순서를 지정하는 데 사용한다.",
      "WHERE 절은 계층형 질의의 전체 결과 집합에 대해 조건을 적용하는 데 사용한다."
    ],
    "a": 2,
    "e": "CONNECT BY는 부모와 자식 노드의 연결 관계(조건)를 지정합니다. LEVEL을 지정하는 절이 아닙니다. (지문의 CONECT, SINGLES는 교재 원문 그대로이며 CONNECT, SIBLINGS의 오기입니다.)"
  },
  {
    "n": 42,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 테이블과 실행 결과를 참고할 때 SQL의 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "code": "CREATE TABLE 일자별매출 (\n  일자      NUMBER,\n  상품코드  VARCHAR2(2),\n  매출금액  NUMBER\n);"
      },
      {
        "title": "일자별매출",
        "table": {
          "h": [
            "일자",
            "상품코드",
            "매출금액"
          ],
          "r": [
            [
              "20250101",
              "A",
              "150"
            ],
            [
              "20250102",
              "B",
              "200"
            ],
            [
              "20250102",
              "A",
              "250"
            ],
            [
              "20250103",
              "B",
              "500"
            ],
            [
              "20250104",
              "C",
              "450"
            ],
            [
              "20250105",
              "D",
              "150"
            ]
          ]
        }
      },
      {
        "code": "SELECT A.일자, A.상품코드,\n       [    ㉠    ] 매출금액\nFROM 일자별매출 A\nORDER BY A.일자, A.상품코드;"
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "일자",
            "상품코드",
            "매출금액"
          ],
          "r": [
            [
              "20250101",
              "A",
              "150"
            ],
            [
              "20250102",
              "A",
              "600"
            ],
            [
              "20250102",
              "B",
              "600"
            ],
            [
              "20250103",
              "B",
              "1100"
            ],
            [
              "20250104",
              "C",
              "1550"
            ],
            [
              "20250105",
              "D",
              "1700"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SUM(매출금액) OVER(PARTITION BY 상품코드\nORDER BY 일자)"
      },
      {
        "code": "SUM(매출금액) OVER(ORDER BY 일자 ROWS\nBETWEEN UNBOUNDED PRECEDING AND CURRENT\nROW)"
      },
      {
        "code": "(SELECT SUM(B.매출금액) FROM 일자별매출 B\nWHERE B.일자 <= A.일자)"
      },
      {
        "code": "SUM(매출금액) OVER(PARTITION BY 상품코드\nORDER BY 일자 ROWS BETWEEN UNBOUNDED\nPRECEDING AND CURRENT ROW)"
      }
    ],
    "a": 3,
    "e": "상품 구분 없이 일자 기준 누적합이고, 같은 날짜 두 행이 같은 값(600)입니다. 자기 일자 이하를 모두 더하는 스칼라 서브쿼리 ③이 맞습니다. ②는 ROWS라 같은 날짜가 400, 600으로 갈리고, ①④는 상품별 누적입니다."
  },
  {
    "n": 43,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "PLAYERS",
        "table": {
          "h": [
            "PLAYER_ID",
            "SCORE"
          ],
          "r": [
            [
              "P01",
              "10"
            ],
            [
              "P02",
              "20"
            ],
            [
              "P03",
              "20"
            ],
            [
              "P04",
              "30"
            ],
            [
              "P05",
              "100"
            ]
          ]
        }
      },
      {
        "code": "SELECT TOTAL_PLAYERS\nFROM (\n    SELECT P.*,\n       COUNT(*) OVER (\n         ORDER BY SCORE\n         RANGE BETWEEN UNBOUNDED\n         PRECEDING AND CURRENT ROW)\n       AS TOTAL_PLAYERS\n    FROM PLAYERS P\n) T\nWHERE T.PLAYER_ID = 'P05';"
      }
    ],
    "o": [
      "1",
      "2",
      "4",
      "5"
    ],
    "a": 4,
    "e": "SCORE 오름차순 누적 개수입니다. P05(100)는 가장 마지막이라 전체 5명이 포함됩니다."
  },
  {
    "n": 44,
    "s": 2,
    "topic": "PIVOT 절과 UNPIVOT 절",
    "q": "아래 SQL의 실행 결과는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "title": "SALES",
        "table": {
          "h": [
            "NAME",
            "APR",
            "MAY",
            "JUN"
          ],
          "r": [
            [
              "North",
              "120",
              "180",
              "130"
            ],
            [
              "South",
              "200",
              "210",
              "190"
            ],
            [
              "West",
              "150",
              "170",
              "160"
            ]
          ]
        }
      },
      {
        "code": "SELECT NAME,\n       SALES_MONTH,\n       SALES_VOLUME\nFROM SALES\nUNPIVOT (\n  SALES_VOLUME\n  FOR SALES_MONTH IN (APR, MAY, JUN)\n  )\nORDER BY NAME, SALES_MONTH;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "NAME",
            "SALES_MONTH",
            "SALES_VOLUME"
          ],
          "r": [
            [
              "North",
              "APR",
              "120"
            ],
            [
              "North",
              "JUN",
              "130"
            ],
            [
              "North",
              "MAY",
              "180"
            ],
            [
              "South",
              "APR",
              "200"
            ],
            [
              "South",
              "JUN",
              "190"
            ],
            [
              "South",
              "MAY",
              "210"
            ],
            [
              "West",
              "APR",
              "150"
            ],
            [
              "West",
              "JUN",
              "160"
            ],
            [
              "West",
              "MAY",
              "170"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "NAME",
            "SALES_MONTH",
            "SALES_VOLUME"
          ],
          "r": [
            [
              "North",
              "APR",
              "120"
            ],
            [
              "North",
              "MAY",
              "180"
            ],
            [
              "North",
              "JUN",
              "130"
            ],
            [
              "South",
              "APR",
              "200"
            ],
            [
              "South",
              "MAY",
              "210"
            ],
            [
              "South",
              "JUN",
              "190"
            ],
            [
              "West",
              "APR",
              "150"
            ],
            [
              "West",
              "MAY",
              "170"
            ],
            [
              "West",
              "JUN",
              "160"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "NAME",
            "SALES_MONTH",
            "SALES_VOLUME"
          ],
          "r": [
            [
              "North",
              "APR",
              "470"
            ],
            [
              "South",
              "MAY",
              "560"
            ],
            [
              "West",
              "JUN",
              "480"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "NAME",
            "SALES_MONTH",
            "SALES_VOLUME"
          ],
          "r": [
            [
              "North",
              "APR",
              "120"
            ],
            [
              "South",
              "APR",
              "200"
            ],
            [
              "West",
              "APR",
              "150"
            ],
            [
              "North",
              "MAY",
              "180"
            ],
            [
              "South",
              "MAY",
              "210"
            ],
            [
              "West",
              "MAY",
              "170"
            ],
            [
              "North",
              "JUN",
              "130"
            ],
            [
              "South",
              "JUN",
              "190"
            ],
            [
              "West",
              "JUN",
              "160"
            ]
          ]
        }
      }
    ],
    "a": 1,
    "e": "UNPIVOT은 월 칼럼을 행으로 펼칩니다. SALES_MONTH 값은 문자열 'APR', 'MAY', 'JUN'이라 ORDER BY에서 알파벳순(APR → JUN → MAY)으로 정렬됩니다."
  },
  {
    "n": 45,
    "s": 2,
    "topic": "DDL",
    "q": "RENAME COLUMN 명령어에 대한 설명으로 가장 적절하지 <u>않은</u> 것은? (단, DBMS는 오라클로 가정함)",
    "o": [
      "칼럼은 제약 조건이 설정되어 있어도 이름을 변경할 수 있다.",
      "RENAME COLUMN 명령어는 칼럼명뿐만 아니라 데이터 타입도 변경할 수 있다.",
      "기본값(DEFAULT)이 지정된 칼럼도 RENAME COLUMN으로 이름을 변경할 수 있다.",
      "RENAME COLUMN으로 칼럼명을 변경해도 기존 칼럼의 데이터 타입과 속성은 그대로 유지된다."
    ],
    "a": 2,
    "e": "RENAME COLUMN은 이름만 바꿉니다. 데이터 타입 변경은 ALTER TABLE … MODIFY로 합니다."
  },
  {
    "n": 46,
    "s": 2,
    "topic": "ORDER BY 절",
    "q": "아래 SQL에 대한 적절한 설명을 모두 고른 것은?",
    "b": [
      {
        "code": "SELECT 제품명, 가격\nFROM 제품\nORDER BY 가격 DESC NULLS LAST\nOFFSET 3 ROWS\nFETCH FIRST 5 ROWS ONLY;"
      },
      {
        "box": "(가) FETCH FIRST 5 ROWS ONLY는 OFFSET 이후의 행 중 최대 5개까지만 출력한다.\n(나) ORDER BY 절에 의해 가격이 높은 순으로 정렬되고, NULL 값은 항상 결과의 마지막에 위치한다.\n(다) OFFSET과 FETCH는 ORDER BY보다 먼저 적용되므로, 정렬되기 전 순서 기준으로 3개 행을 건너뛰고 5개 행을 가져온다."
      }
    ],
    "o": [
      "(나)",
      "(가), (나)",
      "(가), (다)",
      "(가), (나), (다)"
    ],
    "a": 2,
    "e": "(가)(나)는 옳습니다. (다) OFFSET/FETCH는 ORDER BY로 정렬한 뒤에 적용됩니다."
  },
  {
    "n": 47,
    "s": 2,
    "topic": "DDL",
    "q": "제약 조건에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "제약 조건은 지정된 테이블의 칼럼에 적용된다.",
      "PRIMARY KEY는 고유키 제약과 NOT NULL 제약을 포함하는 제약이다.",
      "CHECK는 조건식의 결과가 TRUE일 때 데이터 입력을 허용하고, FALSE이면 거부한다.",
      "UNIQUE는 속성을 고유하게 식별해야 하므로 여러 개의 NULL을 가질 수 없다."
    ],
    "a": 4,
    "e": "UNIQUE 칼럼은 NULL을 여러 개 가질 수 있습니다(NULL끼리는 같은 값으로 보지 않음)."
  },
  {
    "n": 48,
    "s": 2,
    "topic": "계층형 질의와 셀프 조인",
    "q": "아래 데이터 모델에서 카테고리ID가 10인 카테고리를 기준으로 해당 카테고리의 모든 하위 카테고리를 최하위까지 전개하기 위한 SQL로 가장 적절한 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "카테고리",
              "c": 0,
              "r": 0,
              "pk": [
                "카테고리ID"
              ],
              "at": [
                "카테고리명",
                "상위카테고리ID(FK)"
              ]
            }
          ],
          "rels": []
        }
      },
      {
        "box": "[관계] 카테고리 엔터티의 자기 참조(순환) 관계\n상위카테고리ID(FK) → 카테고리ID, 점선(비식별), 양쪽 모두 ○(선택), 하위 쪽 까마귀발(N)"
      }
    ],
    "o": [
      {
        "code": "SELECT *\nFROM 카테고리\nSTART WITH 카테고리ID = 10\nCONNECT BY PRIOR 카테고리ID = 상위카테고리ID;"
      },
      {
        "code": "SELECT *\nFROM 카테고리\nSTART WITH 카테고리ID = 10\nCONNECT BY PRIOR 상위카테고리ID = 카테고리ID;"
      },
      {
        "code": "SELECT *\nFROM 카테고리\nSTART WITH 상위카테고리ID IS NULL\nCONNECT BY PRIOR 카테고리ID = 상위카테고리ID;"
      },
      {
        "code": "SELECT *\nFROM 카테고리\nSTART WITH 상위카테고리ID IS NULL\nCONNECT BY PRIOR 상위카테고리ID = 카테고리ID;"
      }
    ],
    "a": 1,
    "e": "카테고리 10에서 시작(START WITH 카테고리ID = 10)하고, 부모의 카테고리ID가 자식의 상위카테고리ID가 되도록 아래로 내려갑니다(PRIOR 카테고리ID = 상위카테고리ID). ②는 위쪽(역방향) 전개, ③④는 최상위부터 시작합니다."
  },
  {
    "n": 49,
    "s": 2,
    "topic": "Top N 쿼리",
    "q": "아래 SQL의 실행 결과와 동일한 것은?",
    "b": [
      {
        "code": "SELECT TOP 5 주문번호, 고객명, 주문일자, 주문금액\nFROM 주문\nORDER BY 주문일자 DESC;"
      }
    ],
    "o": [
      {
        "code": "SELECT 주문번호, 고객명, 주문일자, 주문금액\nFROM 주문\nWHERE ROWNUM <= 5\nORDER BY 주문일자 DESC;"
      },
      {
        "code": "SELECT 주문번호, 고객명, 주문일자, 주문금액\nFROM (\n  SELECT 주문번호, 고객명, 주문일자, 주문금액,\n         ROW_NUMBER() OVER (ORDER BY 주문일자\n         ASC) AS RN\n  FROM 주문\n)\nWHERE RN <= 5;"
      },
      {
        "code": "SELECT 주문번호, 고객명, 주문일자, 주문금액\nFROM (\n  SELECT 주문번호, 고객명, 주문일자, 주문금액,\n         RANK() OVER (ORDER BY 주문일자 DESC)\n         AS RN\n  FROM 주문\n)\nWHERE RN <= 5;"
      },
      {
        "code": "SELECT 주문번호, 고객명, 주문일자, 주문금액\nFROM (\n  SELECT 주문번호, 고객명, 주문일자, 주문금액,\n         ROW_NUMBER() OVER (ORDER BY 주문일자\n         DESC) AS RN\n  FROM 주문\n)\nWHERE RN <= 5;"
      }
    ],
    "a": 4,
    "e": "TOP 5는 정렬 후 정확히 5행입니다. ROW_NUMBER(주문일자 DESC) ≤ 5가 같습니다. ① ROWNUM이 정렬 전에 적용, ② 오름차순, ③ RANK는 동순위가 있으면 5행을 넘을 수 있습니다."
  },
  {
    "n": 50,
    "s": 2,
    "topic": "정규 표현식",
    "q": "아래 SQL의 실행 결과는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "title": "CITIES",
        "table": {
          "h": [
            "CITY"
          ],
          "r": [
            [
              "London"
            ],
            [
              "Lisbon"
            ],
            [
              "Larcon"
            ],
            [
              "Lyon"
            ],
            [
              "Luton"
            ]
          ]
        }
      },
      {
        "code": "SELECT CITY\nFROM CITIES\nWHERE REGEXP_LIKE(\n  CITY, '^L[^aeiou][A-Za-z]*on$', 'i'\n);"
      }
    ],
    "o": [
      "London, Larcon, Luton",
      "London, Lisbon, Larcon",
      "Lyon",
      "Lisbon, Luton"
    ],
    "a": 3,
    "e": "L 다음 두 번째 글자가 모음이 아니어야 하고 'on'으로 끝나야 합니다. London(o), Lisbon(i), Larcon(a), Luton(u)은 두 번째 글자가 모음이라 제외되고 Lyon만 남습니다."
  }
],
};

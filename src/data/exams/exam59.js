// 제59회 SQLD 기출 복원 모의고사 (2025년 11월)
// 필드: n 번호, s 과목(1|2), topic 출제 영역, q 문제(HTML), b 지문 블록, o 보기, a 정답(1~4), e 해설(HTML)
// 블록: {code} | {title, table:{h,r}} | {box} | {erd:{ents, rels}}
// 보기: 문자열 | {code} | {table} | {text, code}

export default {
  id: "sqld-59",
  round: 59,
  title: "제59회 기출 복원 모의고사",
  date: "2025년 11월",
  minutes: 90,
  questions: [
  {
    "n": 1,
    "s": 1,
    "q": "데이터 모델링의 특징으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "추상화",
      "최적화",
      "명확화",
      "단순화"
    ],
    "a": 2,
    "e": "데이터 모델링의 3대 특징은 추상화·단순화·명확화입니다. 최적화는 특징이 아닙니다.",
    "topic": "데이터 모델의 이해"
  },
  {
    "n": 2,
    "s": 1,
    "q": "아래 데이터 모델에서 속성에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "box": "[테이블]\n직원(<u>직원ID</u>, 직급코드, 기본급, 수당율, 수당금액)\n직급구분(<u>직급코드</u>, 직급명)\n* 직원 테이블은 각 직원의 급여 관련 기본 정보를 관리한다.\n* 직급구분 테이블은 사원, 대리, 과장 등 직급을 구분하기 위한 값을 관리한다.\n* 수당금액은 기본급과 수당율을 기반으로 산정되는 값이다."
      }
    ],
    "o": [
      "직급코드는 직급 체계를 관리하기 위해 도입된 설계 속성이다.",
      "직급명은 더 이상 분해할 수 없는 단순 속성이다.",
      "수당금액은 계산을 통해 얻어지는 파생 속성이다.",
      "기본급은 직무 정보에 따라 여러 값을 가질 수 있는 다중값 속성이다."
    ],
    "a": 4,
    "e": "기본급은 직원 한 명당 하나의 값만 갖는 단일값 속성입니다.",
    "topic": "속성"
  },
  {
    "n": 3,
    "s": 1,
    "q": "각 속성이 가질 수 있는 값의 범위로 가장 적절한 것은?",
    "o": [
      "도메인",
      "데이터 타입",
      "관계",
      "제약 조건"
    ],
    "a": 1,
    "e": "속성이 가질 수 있는 값의 범위를 도메인(Domain)이라고 합니다.",
    "topic": "속성"
  },
  {
    "n": 4,
    "s": 1,
    "q": "관계 표기법의 요소로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "관계명",
      "관계 정의",
      "관계 차수",
      "관계 선택사양"
    ],
    "a": 2,
    "e": "관계 표기법의 3요소는 관계명, 관계차수(Cardinality), 관계선택사양(Optionality)입니다.",
    "topic": "관계"
  },
  {
    "n": 5,
    "s": 1,
    "q": "정규화에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "데이터 일관성을 유지하고 중복을 최소화하며, 데이터 모델의 유연성을 높이는 데 활용된다.",
      "제2정규형은 기본 키가 아닌 모든 속성이 기본 키의 일부분에만 종속되지 않아야 한다.",
      "조회 성능을 높이기 위해 테이블을 큰 단위로 통합하는 과정이다.",
      "주문상세 엔터티에서 상품번호 칼럼이 상품명을 결정하는 구조는 정규화 대상에 해당한다."
    ],
    "a": 3,
    "e": "조회 성능을 위해 테이블을 통합하는 것은 반정규화입니다. 정규화는 테이블을 분해하는 과정입니다.",
    "topic": "정규화"
  },
  {
    "n": 6,
    "s": 1,
    "q": "아래 데이터 모델에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "A",
              "c": 0,
              "r": 0,
              "pk": [
                "KEY1"
              ],
              "at": []
            },
            {
              "name": "B",
              "c": 1,
              "r": 0,
              "pk": [
                "KEY1(FK)",
                "KEY2"
              ],
              "at": []
            },
            {
              "name": "C",
              "c": 1,
              "r": 1,
              "pk": [
                "KEY1(FK)",
                "KEY2(FK)",
                "KEY3"
              ],
              "at": []
            },
            {
              "name": "D",
              "c": 0,
              "r": 1,
              "pk": [
                "KEY1(FK)",
                "KEY2(FK)",
                "KEY3(FK)",
                "KEY4"
              ],
              "at": []
            }
          ],
          "rels": [
            {
              "p": "A",
              "ch": "B",
              "id": true,
              "cm": true
            },
            {
              "p": "B",
              "ch": "C",
              "id": true,
              "cm": true
            },
            {
              "p": "C",
              "ch": "D",
              "id": true,
              "cm": true
            }
          ]
        }
      }
    ],
    "o": [
      "A는 부모 엔터티이고 B는 자식 엔터티이며, 두 엔터티 간의 관계는 1:M 식별자 관계이다.",
      "A의 KEY1은 A에서는 주식별자이고 B, C, D에서는 부모로부터 상속된 외부식별자로 사용된다.",
      "A와 B를 비식별자 관계로 변경하면 부모 키가 자식의 주식별자에 포함되지 않으므로, A와 C 조인에 필요한 칼럼 수가 줄어 조인이 더 수월해진다.",
      "A와 B, B와 C는 모두 식별자 관계이므로 C는 상속된 KEY1을 사용해 C.KEY1 = A.KEY1 형태로 A와 직접 조인할 수 있어, B를 거치지 않고도 조인이 가능하다."
    ],
    "a": 3,
    "e": "비식별자 관계로 바꾸면 KEY1이 C까지 상속되지 않아, A와 C를 조인하려면 B를 거쳐야 합니다. 조인이 더 복잡해집니다.",
    "topic": "식별자"
  },
  {
    "n": 7,
    "s": 1,
    "q": "아래 데이터 모델에서 정규화가 필요한 이유로 가장 적절한 것은?",
    "b": [
      {
        "code": "[테이블 생성]\nCREATE TABLE ENROLLMENTS (\n    수강번호   CHAR(5) PRIMARY KEY,\n    학생ID     NUMBER,\n    학생명     VARCHAR2(50),\n    전공학과   VARCHAR2(50)\n);"
      },
      {
        "title": "ENROLLMENTS",
        "table": {
          "h": [
            "수강번호",
            "학생ID",
            "학생명",
            "전공학과"
          ],
          "r": [
            [
              "E201",
              "10",
              "김하늘",
              "데이터과학"
            ],
            [
              "E202",
              "20",
              "박서윤",
              "경영학"
            ],
            [
              "E203",
              "10",
              "김하늘",
              "데이터과학"
            ],
            [
              "E204",
              "30",
              "최민호",
              "소프트웨어공학"
            ],
            [
              "E205",
              "20",
              "박서윤",
              "경영학"
            ],
            [
              "E206",
              "40",
              "이서준",
              "전자공학"
            ]
          ]
        }
      }
    ],
    "o": [
      "학생ID와 학생명이 후보 키가 될 수 없다.",
      "학생명과 전공학과가 기본 키 전체에 완전 함수 종속되어 있다.",
      "기본 키인 수강번호가 학생명과 전공학과를 직접 결정하지 못한다.",
      "수강번호가 학생ID를 결정하고 학생ID가 학생명과 전공학과를 결정하므로, 이행 함수 종속이 발생한다."
    ],
    "a": 4,
    "e": "수강번호 → 학생ID → (학생명, 전공학과) 이행 함수 종속이 있어 제3정규화가 필요합니다.",
    "topic": "정규화"
  },
  {
    "n": 8,
    "s": 1,
    "q": "아래에서 설명하는 식별자의 특징으로 가장 적절한 것은?",
    "b": [
      {
        "box": "제품 엔터티에서 한 번 부여된 제품코드가 시간이 지나 변경된다면, 기존 제품이 사라지고 새로운 제품이 생성된 것으로 간주되므로 주식별자로 적합하지 않다."
      }
    ],
    "o": [
      "최소성",
      "불변성",
      "유일성",
      "존재성"
    ],
    "a": 2,
    "e": "주식별자 값은 한 번 정해지면 변하지 않아야 합니다(불변성).",
    "topic": "식별자"
  },
  {
    "n": 9,
    "s": 1,
    "q": "아래 데이터 모델에 대한 식별자 분류로 가장 적절한 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "카테고리목록",
              "c": 0,
              "r": 0,
              "pk": [
                "# 카테고리코드"
              ],
              "at": [
                "* 카테고리명",
                "* 정렬순서"
              ]
            },
            {
              "name": "도서목록",
              "c": 1,
              "r": 0,
              "pk": [
                "# 도서번호"
              ],
              "at": [
                "* 도서명",
                "* 저자",
                "* 출판사"
              ]
            },
            {
              "name": "대여도서목록",
              "c": 2,
              "r": 0,
              "pk": [
                "# 대여번호(FK)",
                "# 도서번호(FK)"
              ],
              "at": [
                "* 반납예정일",
                "* 연장횟수"
              ]
            },
            {
              "name": "회원목록",
              "c": 1,
              "r": 1,
              "pk": [
                "# 회원번호"
              ],
              "at": [
                "* 회원명",
                "* 연락처",
                "* 이메일"
              ]
            },
            {
              "name": "대여목록",
              "c": 2,
              "r": 1,
              "pk": [
                "# 대여번호"
              ],
              "at": [
                "* 회원번호(FK)",
                "* 대여일자",
                "* 담당직원"
              ]
            }
          ],
          "noSym": true,
          "note": "교재 원본(바커 표기법) 그대로 옮김: # 식별자, * 필수 속성, 까마귀발과 세로줄 위치도 원본과 동일",
          "rels": [
            {
              "p": "도서목록",
              "ch": "카테고리목록",
              "id": false,
              "nb": true,
              "fb": true,
              "mix": true
            },
            {
              "p": "대여도서목록",
              "ch": "도서목록",
              "id": true,
              "nb": true,
              "fb": true
            },
            {
              "p": "대여도서목록",
              "ch": "대여목록",
              "id": true,
              "nb": true,
              "fb": true
            },
            {
              "p": "대여목록",
              "ch": "회원목록",
              "id": false,
              "nb": true,
              "fb": true,
              "mix": true
            }
          ]
        }
      }
    ],
    "o": [
      "대여번호 + 도서번호: 복합식별자, 외부식별자, 본질식별자",
      "대여번호: 외부식별자, 단일식별자, 주식별자",
      "카테고리코드 + 카테고리명: 복합식별자, 보조식별자, 본질식별자",
      "도서번호: 본질식별자, 단일식별자, 주식별자"
    ],
    "a": 4,
    "e": "도서번호는 도서목록의 단일 주식별자이며 업무에서 생겨난 본질식별자입니다. ① 대여번호+도서번호는 대여도서목록 자신의 주식별자이므로 외부식별자로 분류하지 않습니다. ② 대여번호는 대여목록에서 내부식별자입니다. ③ 카테고리목록의 식별자는 카테고리코드 하나입니다.",
    "topic": "식별자"
  },
  {
    "n": 10,
    "s": 1,
    "q": "아래 ERD에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "계약서",
              "c": 0,
              "r": 0,
              "pk": [
                "계약ID"
              ],
              "at": [
                "계약일자",
                "거래처ID"
              ]
            },
            {
              "name": "계약항목",
              "c": 1,
              "r": 0,
              "pk": [
                "항목번호",
                "계약ID(FK)"
              ],
              "at": [
                "상품코드",
                "수량",
                "단가"
              ]
            }
          ],
          "rels": [
            {
              "p": "계약서",
              "ch": "계약항목",
              "id": true,
              "cm": true
            }
          ]
        }
      }
    ],
    "o": [
      "계약항목 엔터티는 계약서 엔터티가 존재하지 않더라도 단독으로 생성될 수 있다.",
      "계약항목은 항상 특정 계약서에 속하므로, 계약항목의 계약ID는 NULL을 허용할 수 없다.",
      "계약서는 업무규칙상 최소 1개 이상의 계약항목을 가져야 한다.",
      "계약항목의 항목번호는 동일한 계약ID 내에서만 유일하면 된다."
    ],
    "a": 1,
    "e": "식별 관계이므로 계약항목은 부모인 계약서 없이는 생성될 수 없습니다.",
    "topic": "관계"
  },
  {
    "n": 11,
    "s": 2,
    "q": "TCL에 대한 설명으로 옳은 것의 개수는?",
    "b": [
      {
        "box": "(가) DDL 명령어를 실행하면 해당 시점에 자동 COMMIT이 발생한다.\n(나) ROLLBACK은 SAVEPOINT가 있더라도 항상 트랜잭션 전체를 처음 상태로 되돌린다.\n(다) COMMIT을 수행하면 이전에 설정한 SAVEPOINT는 그대로 유지된다.\n(라) 트랜잭션은 하나의 논리적 작업 단위를 의미하며, 그 안의 작업은 모두 성공하거나 모두 실패해야 한다."
      }
    ],
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 2,
    "e": "옳은 것은 (가), (라) 2개입니다. (나) ROLLBACK TO SAVEPOINT로 일부만 되돌릴 수 있습니다. (다) COMMIT하면 SAVEPOINT는 모두 사라집니다.",
    "topic": "TCL"
  },
  {
    "n": 12,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "상품",
        "table": {
          "h": [
            "상품ID",
            "상품명",
            "가격",
            "카테고리"
          ],
          "r": [
            [
              "P01",
              "가방",
              "18000",
              "A"
            ],
            [
              "P02",
              "신발",
              "15000",
              "B"
            ],
            [
              "P03",
              "지갑",
              "15000",
              "A"
            ],
            [
              "P04",
              "모자",
              "18000",
              "C"
            ],
            [
              "P05",
              "시계",
              "20000",
              "B"
            ]
          ]
        }
      },
      {
        "code": "SELECT COUNT(DISTINCT 가격)\nFROM   상품\nWHERE  가격 >= (\n          SELECT AVG(가격)\n          FROM 상품\n          WHERE 카테고리 IN ('A', 'B')\n);"
      }
    ],
    "o": [
      "2",
      "3",
      "4",
      "5"
    ],
    "ol": 1,
    "a": 1,
    "e": "A·B 카테고리 평균 = (18000+15000+15000+20000)/4 = 17000. 17000 이상인 가격은 18000, 18000, 20000 → DISTINCT로 2개.",
    "topic": "서브쿼리"
  },
  {
    "n": 13,
    "s": 2,
    "q": "오류가 발생하는 SQL은? (단, 현재 날짜는 2025년 12월 31일로 가정함)",
    "o": [
      {
        "code": "SELECT EXTRACT(DAY\n  FROM TRUNC(SYSDATE, 'YYYY'))\nFROM DUAL;"
      },
      {
        "code": "SELECT TO_CHAR(ADD_MONTHS(SYSDATE, -1),\n  'MM')\nFROM DUAL;"
      },
      {
        "code": "SELECT EXTRACT(MONTH FROM TO_CHAR(\n  SYSDATE, 'YYYY-MM-DD'))\nFROM DUAL;"
      },
      {
        "code": "SELECT TO_CHAR(SYSDATE, 'YYYYMM'),\n  EXTRACT(YEAR\n    FROM ADD_MONTHS(SYSDATE, 1))\nFROM DUAL;"
      }
    ],
    "a": 3,
    "e": "EXTRACT는 날짜형에 사용합니다. TO_CHAR의 결과는 문자열이므로 EXTRACT(MONTH FROM 문자열)은 오류가 발생합니다.",
    "topic": "함수"
  },
  {
    "n": 14,
    "s": 2,
    "q": "SQL의 실행 결과가 아래와 같을 때, 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "title": "ORDER_HISTORY",
        "table": {
          "h": [
            "ORDER_ID",
            "CUST_ID",
            "ORDER_DTM"
          ],
          "r": [
            [
              "101",
              "C01",
              "2025-12-05 08:00:00"
            ],
            [
              "102",
              "C02",
              "2025-12-05 18:30:00"
            ],
            [
              "103",
              "C01",
              "2025-12-06 00:00:00"
            ],
            [
              "104",
              "C03",
              "2025-12-06 10:20:00"
            ],
            [
              "105",
              "C02",
              "2025-12-06 23:59:59"
            ],
            [
              "106",
              "C04",
              "2025-12-07 01:00:00"
            ],
            [
              "107",
              "C01",
              "2025-12-07 12:45:00"
            ]
          ]
        }
      },
      {
        "code": "SELECT CUST_ID,\n       TO_CHAR(ORDER_DTM, 'YYYYMMDD')\n         AS ORDER_DATE,\n       TO_CHAR(ORDER_DTM, 'HH24:MI')\n         AS ORDER_TIME\nFROM ORDER_HISTORY\n[    ㉠    ]\nORDER BY ORDER_DTM;"
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "CUST_ID",
            "ORDER_DATE",
            "ORDER_TIME"
          ],
          "r": [
            [
              "C01",
              "20251206",
              "00:00"
            ],
            [
              "C03",
              "20251206",
              "10:20"
            ],
            [
              "C02",
              "20251206",
              "23:59"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "WHERE ORDER_DTM\n  BETWEEN TO_DATE(\n    '20251205', 'YYYYMMDD')\n  AND TO_DATE(\n    '20251206', 'YYYYMMDD')\n    + 0.99999"
      },
      {
        "code": "WHERE ORDER_DTM >= TO_DATE(\n    '20251206', 'YYYYMMDD')\n  AND ORDER_DTM < TO_DATE(\n    '20251207', 'YYYYMMDD')"
      },
      {
        "code": "WHERE TRUNC(ORDER_DTM)\n  BETWEEN TO_DATE(\n    '20251206', 'YYYYMMDD')\n  AND TO_DATE(\n    '20251207', 'YYYYMMDD')"
      },
      {
        "code": "WHERE ORDER_DTM\n  BETWEEN TO_DATE(\n    '20251206', 'YYYYMMDD')\n    - 0.00001\n  AND TO_DATE(\n    '20251206', 'YYYYMMDD')\n    + 0.5"
      }
    ],
    "a": 2,
    "e": "12월 6일 00:00:00 이상 ~ 12월 7일 00:00:00 미만이 정확히 6일 하루입니다. ①은 5일 행 포함, ③은 7일 행 포함, ④는 6일 12시까지만 포함(23:59 누락).",
    "topic": "WHERE 절"
  },
  {
    "n": 15,
    "s": 2,
    "q": "아래 SQL의 실행 결과로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "code": "(가) SELECT ROUND(-173.4, -2) FROM DUAL;\n(나) SELECT TRUNC(-98.99, -1) FROM DUAL;\n(다) SELECT CEIL(-12.01) FROM DUAL;\n(라) SELECT FLOOR(7.999) FROM DUAL;"
      }
    ],
    "o": [
      "(가) -200",
      "(나) -100",
      "(다) -12",
      "(라) 7"
    ],
    "ol": 1,
    "a": 2,
    "e": "TRUNC(-98.99, -1)은 십의 자리 아래를 버려 -90입니다.",
    "topic": "함수"
  },
  {
    "n": 16,
    "s": 2,
    "q": "NULL에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "NULL은 산술 연산에서 더하거나 뺄 수 없다.",
      "NULL은 정의되지 않은 값으로, 0이나 공백(Space)으로 대체할 수 없다.",
      "NOT NULL 제약 조건은 해당 칼럼에 NULL 값을 허용하지 않는 조건이다.",
      "WHERE COL = NULL과 같은 조건식을 통해 NULL 값을 비교할 수 있다."
    ],
    "a": 4,
    "e": "NULL 비교는 IS NULL / IS NOT NULL을 사용해야 합니다. = NULL은 항상 UNKNOWN이라 아무 행도 반환하지 않습니다.",
    "topic": "WHERE 절"
  },
  {
    "n": 17,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "TBL",
        "table": {
          "h": [
            "STU_ID",
            "SCORE",
            "EXTRA_POINT"
          ],
          "r": [
            [
              "S01",
              "82",
              "18"
            ],
            [
              "S02",
              "47",
              "9"
            ],
            [
              "S03",
              "91",
              "4"
            ],
            [
              "S04",
              "60",
              "25"
            ]
          ]
        }
      },
      {
        "code": "SELECT\n  CASE\n    WHEN SCORE + EXTRA_POINT >= 100\n    THEN 'A'\n    WHEN SCORE < EXTRA_POINT * 3\n    THEN 'B'\n    WHEN SCORE >= 90 THEN 'C'\n    ELSE 'D'\n  END AS GRADE\nFROM TBL\nORDER BY STU_ID;"
      }
    ],
    "o": [
      "A, B, C, B",
      "A, D, C, D",
      "A, D, C, B",
      "D, D, C, B"
    ],
    "a": 3,
    "e": "S01: 82+18=100 → A / S02: 56, 47<27 거짓, 47<90 → D / S03: 95, 91<12 거짓, 91≥90 → C / S04: 85, 60<75 참 → B.",
    "topic": "SELECT 문"
  },
  {
    "n": 18,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "회원",
        "table": {
          "h": [
            "회원ID",
            "회원명"
          ],
          "r": [
            [
              "101",
              "김민수"
            ],
            [
              "102",
              "박지은"
            ],
            [
              "103",
              "최현우"
            ]
          ]
        }
      },
      {
        "title": "회원전화",
        "table": {
          "h": [
            "회원ID",
            "전화번호"
          ],
          "r": [
            [
              "101",
              "010-234-5678"
            ],
            [
              "101",
              "010-834-5678"
            ],
            [
              "102",
              "011-335-0000"
            ],
            [
              "102",
              "011-135-9999"
            ],
            [
              "103",
              "016-2333-8888"
            ],
            [
              "103",
              "016-133-0000"
            ]
          ]
        }
      },
      {
        "code": "SELECT M.회원명, T.전화번호\nFROM   회원 M, 회원전화 T\nWHERE  M.회원ID = T.회원ID\nAND REGEXP_LIKE(\n      T.전화번호,\n      '^01(0|1|6)-(2|3)\\d{2}');"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "회원명",
            "전화번호"
          ],
          "r": [
            [
              "김민수",
              "010-234-5678"
            ],
            [
              "박지은",
              "011-335-0000"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "회원명",
            "전화번호"
          ],
          "r": [
            [
              "김민수",
              "010-834-5678"
            ],
            [
              "박지은",
              "011-335-0000"
            ],
            [
              "최현우",
              "016-133-0000"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "회원명",
            "전화번호"
          ],
          "r": [
            [
              "김민수",
              "010-234-5678"
            ],
            [
              "박지은",
              "011-135-9999"
            ],
            [
              "최현우",
              "016-2333-8888"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "회원명",
            "전화번호"
          ],
          "r": [
            [
              "김민수",
              "010-234-5678"
            ],
            [
              "박지은",
              "011-335-0000"
            ],
            [
              "최현우",
              "016-2333-8888"
            ]
          ]
        }
      }
    ],
    "a": 4,
    "e": "패턴: 010/011/016 → '-' → 2 또는 3 → 숫자 2개. 010-234, 011-335, 016-233(3) 이 일치합니다. 8xx, 1xx로 시작하는 번호는 불일치.",
    "topic": "정규 표현식"
  },
  {
    "n": 19,
    "s": 2,
    "q": "아래 테이블을 참고할 때 실행 결과가 <u>다른</u> 하나는?",
    "b": [
      {
        "title": "DEPT",
        "table": {
          "h": [
            "ID",
            "MANAGER",
            "TEAM"
          ],
          "r": [
            [
              "10",
              "김도현",
              "데이터연구팀"
            ],
            [
              "11",
              "이수진",
              "AI연구센터"
            ],
            [
              "12",
              "박지훈",
              "연구기획팀"
            ],
            [
              "13",
              "최민아",
              "영업1팀"
            ],
            [
              "14",
              "정유진",
              "임상연구부"
            ],
            [
              "15",
              "한지민",
              "중앙연구소"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT *\nFROM DEPT\nWHERE TEAM LIKE '%연구%';"
      },
      {
        "code": "SELECT *\nFROM DEPT\nWHERE INSTR(TEAM, '연구') > 1;"
      },
      {
        "code": "SELECT *\nFROM DEPT\nWHERE REGEXP_LIKE(TEAM, '연구');"
      },
      {
        "code": "SELECT *\nFROM DEPT\nWHERE INSTR(TEAM, '연구') > 0;"
      }
    ],
    "a": 2,
    "e": "'연구기획팀'은 '연구'가 1번째 위치라 INSTR = 1이고, > 1 조건에서 빠집니다. 나머지는 '연구'가 포함된 5건을 모두 반환합니다.",
    "topic": "WHERE 절"
  },
  {
    "n": 20,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "TBL",
        "table": {
          "h": [
            "ID",
            "CODE",
            "AMT"
          ],
          "r": [
            [
              "A1",
              "X1",
              "120"
            ],
            [
              "A1",
              "X2",
              "380"
            ],
            [
              "A2",
              "C1",
              "100"
            ],
            [
              "A2",
              "Y1",
              "260"
            ],
            [
              "A3",
              "C2",
              "260"
            ],
            [
              "A4",
              "X3",
              "500"
            ],
            [
              "A5",
              "C3",
              "NULL"
            ]
          ]
        }
      },
      {
        "code": "SELECT ID, CODE, AMT\nFROM   TBL\nWHERE  (ID = 'A1' AND AMT >= 300)\n       OR ID = 'A2'\n       AND (CODE LIKE 'C%' OR AMT > 250);"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "ID",
            "CODE",
            "AMT"
          ],
          "r": [
            [
              "A1",
              "X2",
              "380"
            ],
            [
              "A2",
              "Y1",
              "260"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "ID",
            "CODE",
            "AMT"
          ],
          "r": [
            [
              "A1",
              "X2",
              "380"
            ],
            [
              "A3",
              "C2",
              "260"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "ID",
            "CODE",
            "AMT"
          ],
          "r": [
            [
              "A1",
              "X2",
              "380"
            ],
            [
              "A2",
              "C1",
              "100"
            ],
            [
              "A2",
              "Y1",
              "260"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "ID",
            "CODE",
            "AMT"
          ],
          "r": [
            [
              "A2",
              "Y1",
              "260"
            ],
            [
              "A3",
              "C2",
              "260"
            ]
          ]
        }
      }
    ],
    "a": 3,
    "e": "AND가 OR보다 먼저 계산됩니다. (A1 AND AMT≥300) OR (A2 AND (C로 시작 OR AMT>250)) → A1/X2, A2/C1, A2/Y1.",
    "topic": "WHERE 절"
  },
  {
    "n": 21,
    "s": 2,
    "q": "아래 SQL에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "서점",
              "c": 0,
              "r": 0,
              "pk": [
                "점포코드: VARCHAR2(5)"
              ],
              "at": [
                "위치: VARCHAR2(30)"
              ]
            },
            {
              "name": "고객",
              "c": 0,
              "r": 1,
              "pk": [
                "고객ID: VARCHAR2(10)"
              ],
              "at": [
                "고객명: VARCHAR2(20)",
                "주소: VARCHAR2(50)",
                "점포코드: VARCHAR2(5) (FK)"
              ]
            }
          ],
          "rels": []
        }
      },
      {
        "code": "SELECT\n   COUNT(고객ID) AS A,\n   COUNT(주소) AS C,\n   COUNT(고객ID) - COUNT(주소) AS M,\n   COUNT(점포코드) AS B\nFROM 고객;"
      }
    ],
    "o": [
      "C는 주소가 있는 고객 수, M은 주소가 없는 고객 수를 의미한다.",
      "B는 점포코드가 입력된 고객 수이며, 입력된 점포코드는 모두 [서점] 테이블에 존재하는 값이어야 한다.",
      "[고객] 테이블의 점포코드는 NULL을 허용하므로 특정 서점에 소속되지 않은 고객도 존재할 수 있다.",
      "A는 고객ID의 중복 여부에 따라 달라지므로 실제 고객 수와 다를 수 있다."
    ],
    "a": 4,
    "e": "고객ID는 기본키라 중복·NULL이 없으므로 COUNT(고객ID)는 실제 고객 수와 같습니다.",
    "topic": "그룹 함수"
  },
  {
    "n": 22,
    "s": 2,
    "q": "아래 SQL의 실행 결과가 <u>다른</u> 하나는? (단, DBMS는 오라클로 가정함)",
    "o": [
      {
        "code": "SELECT NVL(NULL, -100) FROM DUAL;"
      },
      {
        "code": "SELECT NVL2(NULL, -100, 0) FROM DUAL;"
      },
      {
        "code": "SELECT NULLIF(-100, 0) FROM DUAL;"
      },
      {
        "code": "SELECT COALESCE(NULL, -100, 0, 200)\nFROM DUAL;"
      }
    ],
    "a": 2,
    "e": "NVL2(expr, A, B)는 expr이 NULL이면 B를 반환하므로 0. 나머지는 모두 -100.",
    "topic": "함수"
  },
  {
    "n": 23,
    "s": 2,
    "q": "모든 도서의 도서명과 해당 도서의 상위분류명을 출력하는 SQL로 가장 적절한 것은?",
    "b": [
      {
        "box": "[테이블]\n도서(<u>도서ID</u>, 도서명, 출판년도, 상위분류ID)\n* 상위분류ID는 도서ID를 참조한다.\n* 최상위분류는 상위분류ID가 NULL이다."
      }
    ],
    "o": [
      {
        "code": "SELECT A.도서명, B.도서명 AS 상위분류명\nFROM 도서 A LEFT OUTER JOIN 도서 B\nON A.상위분류ID = B.도서ID;"
      },
      {
        "code": "SELECT A.도서명, B.도서명 AS 상위분류명\nFROM 도서 A LEFT OUTER JOIN 도서 B\nON A.도서ID = B.상위분류ID;"
      },
      {
        "code": "SELECT A.도서명, B.도서명 AS 상위분류명\nFROM 도서 A INNER JOIN 도서 B\nON A.상위분류ID = B.도서ID"
      },
      {
        "code": "SELECT A.도서명, B.도서명 AS 상위분류명\nFROM 도서 A RIGHT OUTER JOIN 도서 B\nON A.상위분류ID = B.도서ID;"
      }
    ],
    "a": 1,
    "e": "모든 도서(A)를 남기면서 A의 상위분류ID로 부모(B)를 찾아야 하므로 A LEFT OUTER JOIN B ON A.상위분류ID = B.도서ID.",
    "topic": "조인"
  },
  {
    "n": 24,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "상담내역",
        "table": {
          "h": [
            "상담코드",
            "상담원",
            "종료일자"
          ],
          "r": [
            [
              "C001",
              "J",
              "2025-12-01"
            ],
            [
              "C002",
              "J",
              "2025-12-02"
            ],
            [
              "C003",
              "J",
              "NULL"
            ],
            [
              "C004",
              "K",
              "2025-12-02"
            ],
            [
              "C005",
              "K",
              "2025-12-03"
            ],
            [
              "C006",
              "L",
              "2025-12-02"
            ],
            [
              "C007",
              "L",
              "NULL"
            ],
            [
              "C008",
              "L",
              "NULL"
            ],
            [
              "C009",
              "M",
              "2025-12-03"
            ],
            [
              "C010",
              "M",
              "NULL"
            ]
          ]
        }
      },
      {
        "code": "SELECT 상담원,\n       COUNT(종료일자) AS 종료건수\nFROM   상담내역\nWHERE  종료일자 IS NULL\n       OR 종료일자 >= DATE '2025-12-02'\nGROUP BY 상담원\nHAVING COUNT(*) >= 2 AND COUNT(종료일자) >= 2\nORDER BY 상담원;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "상담원",
            "종료건수"
          ],
          "r": [
            [
              "J",
              "2"
            ],
            [
              "K",
              "2"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "상담원",
            "종료건수"
          ],
          "r": [
            [
              "K",
              "1"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "상담원",
            "종료건수"
          ],
          "r": [
            [
              "J",
              "1"
            ],
            [
              "K",
              "2"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "상담원",
            "종료건수"
          ],
          "r": [
            [
              "K",
              "2"
            ]
          ]
        }
      }
    ],
    "a": 4,
    "e": "WHERE 통과: J(C002, C003), K(C004, C005), L(C006, C007, C008), M(C009, C010). COUNT(종료일자) ≥ 2 를 만족하는 건 K(2건)뿐입니다.",
    "topic": "GROUP BY, HAVING 절"
  },
  {
    "n": 25,
    "s": 2,
    "q": "집합 연산자에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "집합 연산자는 두 집합의 합집합, 교집합, 차집합을 구할 수 있는 연산자를 제공한다.",
      "UNION은 두 질의 결과에서 중복된 행을 제거한 합집합을 반환한다.",
      "상호 호환되는 칼럼 타입이라도 반드시 동일한 데이터 타입으로 맞춰야 한다.",
      "각 SELECT 문에는 ORDER BY 절을 단독으로 사용할 수 없다."
    ],
    "a": 3,
    "e": "집합 연산은 대응 칼럼의 데이터 타입이 서로 호환되기만 하면 됩니다. 완전히 동일할 필요는 없습니다.",
    "topic": "집합 연산자"
  },
  {
    "n": 26,
    "s": 2,
    "q": "가장 높은 연봉을 받는 사원의 사원명, 부서명, 연봉을 조회하는 SQL로 가장 적절한 것은?",
    "b": [
      {
        "box": "[테이블]\n사원(<u>사원ID</u>, 사원명, 성별)\n부서(<u>부서ID</u>, 부서명, 위치)\n급여(<u>사원ID</u>, <u>부서ID</u>, 연봉)\n* 급여 테이블의 사원ID와 부서ID는 각각 사원 테이블과 부서 테이블을 참조하는 외래 키이다."
      }
    ],
    "o": [
      {
        "code": "SELECT E.사원명, D.부서명, G.연봉\nFROM   급여 G\nJOIN   사원 E\nON     G.사원ID = E.사원ID, 부서 D\nWHERE  D.부서ID = G.부서ID\nAND    G.연봉 = (\n         SELECT MAX(연봉)\n         FROM   급여);"
      },
      {
        "code": "SELECT E.사원명, D.부서명, G.연봉\nFROM   사원 E\nLEFT OUTER JOIN 급여 G\nON     E.사원ID = G.사원ID, 부서 D\nWHERE  D.부서ID = G.부서ID\nAND    G.연봉 IN (\n         SELECT MAX(연봉)\n         FROM   급여\n         GROUP BY 부서ID);"
      },
      {
        "code": "SELECT E.사원명, D.부서명,\n       MAX(G.연봉) AS 연봉\nFROM   사원 E\nNATURAL JOIN 급여 G, 부서 D\nWHERE  D.부서ID = G.부서ID\nGROUP BY E.사원명, D.부서명;"
      },
      {
        "code": "SELECT E.사원명, D.부서명,\n       MAX(G.연봉) AS 연봉\nFROM   부서 D\nRIGHT OUTER JOIN 급여 G\nON     D.부서ID = G.부서ID, 사원 E\nWHERE  E.사원ID = G.사원ID\nGROUP BY E.사원명, D.부서명;"
      }
    ],
    "a": 1,
    "e": "전체 급여의 MAX와 같은 연봉을 가진 행만 조회하는 ①이 정답. ②는 부서별 최고 연봉을 모두 반환하고, ③④는 GROUP BY로 모든 사원의 연봉을 반환합니다(③은 NATURAL JOIN 칼럼에 별칭을 써서 오류 소지도 있음).",
    "topic": "서브쿼리"
  },
  {
    "n": 27,
    "s": 2,
    "q": "아래 테이블을 참고할 때 오류가 발생하는 SQL은?",
    "b": [
      {
        "title": "TBL1",
        "table": {
          "h": [
            "C1",
            "C2"
          ],
          "r": [
            [
              "2101",
              "NULL"
            ],
            [
              "2102",
              "500"
            ],
            [
              "2103",
              "700"
            ],
            [
              "2104",
              "300"
            ],
            [
              "2105",
              "NULL"
            ]
          ]
        }
      },
      {
        "title": "TBL2",
        "table": {
          "h": [
            "C1",
            "C2"
          ],
          "r": [
            [
              "10",
              "500"
            ],
            [
              "10",
              "700"
            ],
            [
              "20",
              "300"
            ],
            [
              "10",
              "300"
            ],
            [
              "20",
              "NULL"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT C1, A.C2, B.C2\nFROM TBL1 A JOIN TBL2 B USING (C1);"
      },
      {
        "code": "SELECT *\nFROM TBL1 NATURAL JOIN TBL2;"
      },
      {
        "code": "SELECT *\nFROM TBL1 A JOIN TBL2 B ON A.C1 = B.C1\nAND (A.C2 = B.C2 OR A.C2 IS NULL\n     OR B.C2 IS NULL);"
      },
      {
        "code": "SELECT *\nFROM TBL1 A NATURAL JOIN TBL2 B USING (C1);"
      }
    ],
    "a": 4,
    "e": "NATURAL JOIN은 USING이나 ON 절과 함께 쓸 수 없어 문법 오류가 발생합니다. (결과가 0건인 것은 오류가 아닙니다)",
    "topic": "조인"
  },
  {
    "n": 28,
    "s": 2,
    "q": "아래 오라클 SQL을 ANSI SQL로 변환한 것으로 가장 적절한 것은?",
    "b": [
      {
        "code": "SELECT A.COL1, B.COL2\nFROM TBL A, TBL B\nWHERE A.COL1 = B.COL1(+);"
      }
    ],
    "o": [
      {
        "code": "SELECT A.COL1, B.COL2\nFROM TBL A RIGHT OUTER JOIN TBL B\nON A.COL1 = B.COL1;"
      },
      {
        "code": "SELECT A.COL1, B.COL2\nFROM TBL A LEFT OUTER JOIN TBL B\nON A.COL1 = B.COL1;"
      },
      {
        "code": "SELECT A.COL1, B.COL2\nFROM TBL A INNER JOIN TBL B\nON A.COL1 = B.COL1;"
      },
      {
        "code": "SELECT A.COL1, B.COL2\nFROM TBL A LEFT OUTER JOIN TBL B\nON A.COL1 = B.COL1\nWHERE B.COL1 IS NOT NULL;"
      }
    ],
    "a": 2,
    "e": "(+)가 붙은 쪽(B)이 NULL로 채워지는 쪽이므로 A 기준 LEFT OUTER JOIN입니다.",
    "topic": "조인"
  },
  {
    "n": 29,
    "s": 2,
    "q": "아래 테이블을 참고할 때 실행 결과가 <u>다른</u> 하나는?",
    "b": [
      {
        "title": "T1",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "A",
              "100"
            ],
            [
              "A",
              "101"
            ],
            [
              "B",
              "101"
            ],
            [
              "B",
              "999"
            ],
            [
              "C",
              "101"
            ],
            [
              "D",
              "100"
            ],
            [
              "E",
              "500"
            ]
          ]
        }
      },
      {
        "title": "T2",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "A",
              "100"
            ],
            [
              "B",
              "101"
            ],
            [
              "B",
              "888"
            ],
            [
              "X",
              "101"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT COUNT(*)\nFROM   T1 A\nWHERE  (A.COL1, A.COL2)\nIN (SELECT COL1, COL2 FROM T2);"
      },
      {
        "code": "SELECT COUNT(*)\nFROM   T1 A, T2 B\nWHERE A.COL1 = B.COL1\nOR A.COL2 = B.COL2;"
      },
      {
        "code": "SELECT COUNT(*)\nFROM   T1 A\nWHERE  EXISTS (SELECT 1\n               FROM T2 B\n               WHERE A.COL1 = B.COL1\n               AND A.COL2 = B.COL2);"
      },
      {
        "code": "SELECT COUNT(*)\nFROM   T1 A INNER JOIN T2 B\nON A.COL1 = B.COL1\nAND A.COL2 = B.COL2;"
      }
    ],
    "a": 2,
    "e": "①③④는 (COL1, COL2)가 모두 같은 (A,100), (B,101) → 2건. ②는 OR 조건이라 한쪽만 같아도 조인되어 12건이 됩니다.",
    "topic": "조인"
  },
  {
    "n": 30,
    "s": 2,
    "q": "아래 조건에서 설명하는 SQL로 가장 적절한 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "지점",
              "c": 0,
              "r": 0,
              "pk": [
                "지점ID"
              ],
              "at": [
                "지점명"
              ]
            },
            {
              "name": "매출실적",
              "c": 1,
              "r": 0,
              "pk": [
                "실적ID",
                "지점ID(FK)"
              ],
              "at": [
                "매출일자",
                "매출금액",
                "매출구분"
              ]
            }
          ],
          "rels": [
            {
              "p": "지점",
              "ch": "매출실적",
              "id": true,
              "co": true
            }
          ]
        }
      },
      {
        "box": "[조건]\n모든 지점을 대상으로 매출구분이 '오프라인'인 매출금액의 합계를 지점ID와 함께 조회한다. 해당 조건에 해당하는 매출이 한 건도 없는 지점은 매출금액의 합계를 0으로 표시한다."
      }
    ],
    "o": [
      {
        "code": "SELECT B.지점ID,\n  NVL(SUM(A.매출금액), 0) AS 오프라인매출합계\nFROM   매출실적 A JOIN 지점 B\nON A.지점ID = B.지점ID\nWHERE  A.매출구분 = '오프라인'\nGROUP BY B.지점ID;"
      },
      {
        "code": "SELECT B.지점ID,\n       NVL((\n         SELECT SUM(A.매출금액)\n         FROM   매출실적 A\n         WHERE  A.지점ID = B.지점ID\n         AND    A.매출구분 = '오프라인'\n       ), 0) AS 오프라인매출합계\nFROM   매출실적 B;"
      },
      {
        "code": "SELECT B.지점ID,\n  NVL(SUM(A.매출금액), 0) AS 오프라인매출합계\nFROM   지점 B LEFT OUTER JOIN 매출실적 A\nON B.지점ID = A.지점ID\nWHERE  A.매출구분 = '오프라인'\nGROUP BY B.지점ID;"
      },
      {
        "code": "SELECT B.지점ID,\n  NVL(SUM(A.매출금액), 0) AS 오프라인매출합계\nFROM   지점 B LEFT OUTER JOIN 매출실적 A\nON B.지점ID = A.지점ID\nAND A.매출구분 = '오프라인'\nGROUP BY B.지점ID;"
      }
    ],
    "a": 4,
    "e": "모든 지점을 남기려면 지점 기준 LEFT OUTER JOIN을 하고, 매출구분 조건은 ON 절에 넣어야 합니다. ③처럼 WHERE에 두면 NULL 행이 걸러져 INNER JOIN과 같아집니다. ②는 FROM이 매출실적이라 '모든 지점'이 아니고 행도 중복됩니다.",
    "topic": "조인"
  },
  {
    "n": 31,
    "s": 2,
    "q": "트랜잭션의 특성으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "원자성(Atomicity)",
      "일관성(Consistency)",
      "독립성(Independence)",
      "영속성(Durability)"
    ],
    "a": 3,
    "e": "ACID의 I는 고립성(Isolation)입니다.",
    "topic": "TCL"
  },
  {
    "n": 32,
    "s": 2,
    "q": "모든 프로젝트에 참여한 직원의 이름을 조회하는 SQL로 가장 적절한 것은?",
    "b": [
      {
        "box": "[테이블]\n직원(<u>직원ID</u>, 직원명)\n프로젝트(<u>프로젝트ID</u>, 프로젝트명)\n참여내역(<u>직원ID</u>, <u>프로젝트ID</u>)\n* 참여내역 테이블의 직원ID와 프로젝트ID는 각각 직원 테이블과 프로젝트 테이블을 참조하는 외래 키이다."
      }
    ],
    "o": [
      {
        "code": "SELECT E.직원명\nFROM   직원 E JOIN 참여내역 A\nON     E.직원ID = A.직원ID\nGROUP BY E.직원명\nHAVING COUNT(DISTINCT A.프로젝트ID) =\n       (SELECT COUNT(*) FROM 참여내역);"
      },
      {
        "code": "SELECT E.직원명\nFROM   직원 E\nWHERE  NOT EXISTS (\n         SELECT A.프로젝트ID\n         FROM   참여내역 A\n         WHERE  A.직원ID = E.직원ID\n         EXCEPT\n         SELECT P.프로젝트ID\n         FROM   프로젝트 P);"
      },
      {
        "code": "SELECT E.직원명\nFROM   직원 E\nWHERE  NOT EXISTS (\n         SELECT P.프로젝트ID\n         FROM   프로젝트 P\n         EXCEPT\n         SELECT A.프로젝트ID\n         FROM   참여내역 A\n         WHERE  A.직원ID = E.직원ID);"
      },
      {
        "code": "SELECT E.직원명\nFROM   직원 E\nWHERE  EXISTS (\n         SELECT 1\n         FROM   프로젝트 P\n         WHERE  NOT EXISTS (\n                  SELECT 1\n                  FROM   참여내역 A\n                  WHERE  A.프로젝트ID =\n                         P.프로젝트ID\n                  AND    A.직원ID =\n                         E.직원ID));"
      }
    ],
    "a": 3,
    "e": "(전체 프로젝트 − 그 직원이 참여한 프로젝트)가 공집합이면 모든 프로젝트에 참여한 것입니다. ①은 참여내역 전체 행 수와 비교해 틀리고, ②는 항상 공집합이라 전 직원이 나오며, ④는 반대로 참여하지 않은 프로젝트가 있는 직원을 찾습니다.",
    "topic": "집합 연산자"
  },
  {
    "n": 33,
    "s": 2,
    "q": "아래 SQL에 대한 설명으로 가장 적절한 것은?",
    "b": [
      {
        "code": "SELECT 회원ID, 강좌ID, 결제금액\nFROM   수강내역\nWHERE  결제금액 >= (\n         SELECT MAX(결제금액)\n         FROM   수강내역\n         GROUP BY 강좌ID);"
      }
    ],
    "o": [
      "모든 강좌에서 최고 결제금액 이상을 결제한 회원이 정상적으로 조회된다.",
      "강좌가 두 개 이상 존재하면 서브쿼리가 여러 행을 반환하여 단일행 서브쿼리 비교에서 오류가 발생한다.",
      {
        "text": "아래 SQL과 항상 동일한 결과가 조회된다.",
        "code": "SELECT 회원ID, 강좌ID, 결제금액\nFROM   수강내역\nWHERE  결제금액 >= ANY (\n         SELECT MAX(결제금액)\n         FROM   수강내역\n         GROUP BY 강좌ID);"
      },
      {
        "text": "아래 SQL과 항상 동일한 결과가 조회된다.",
        "code": "SELECT 회원ID, 강좌ID, 결제금액\nFROM   수강내역\nWHERE  결제금액 >= ALL (\n         SELECT MAX(결제금액)\n         FROM   수강내역\n         GROUP BY 강좌ID);"
      }
    ],
    "a": 2,
    "e": "GROUP BY 강좌ID 때문에 서브쿼리가 강좌 수만큼 행을 반환합니다. 단일행 비교 연산자(>=)에 여러 행이 오면 오류(ORA-01427)가 발생합니다.",
    "topic": "서브쿼리"
  },
  {
    "n": 34,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "TAB1",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "10",
              "A"
            ],
            [
              "20",
              "A"
            ],
            [
              "30",
              "B"
            ],
            [
              "40",
              "A"
            ],
            [
              "50",
              "C"
            ],
            [
              "NULL",
              "A"
            ]
          ]
        }
      },
      {
        "title": "TAB2",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "10",
              "A"
            ],
            [
              "15",
              "B"
            ],
            [
              "25",
              "A"
            ],
            [
              "35",
              "C"
            ],
            [
              "40",
              "A"
            ],
            [
              "NULL",
              "A"
            ]
          ]
        }
      },
      {
        "code": "SELECT SUM(COL1)\nFROM   (SELECT COL1, COL2 FROM TAB1\n        UNION ALL\n        SELECT COL1, COL2 FROM TAB2)\nWHERE COL2 IN ('A', 'C')\n      AND COL1 >= 20;"
      }
    ],
    "o": [
      "170",
      "190",
      "210",
      "230"
    ],
    "a": 3,
    "e": "TAB1: 20+40+50 = 110, TAB2: 25+35+40 = 100 → 합계 210. (NULL은 COL1 >= 20 조건에서 제외)",
    "topic": "집합 연산자"
  },
  {
    "n": 35,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "TBL1",
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "1"
            ],
            [
              "1"
            ],
            [
              "2"
            ],
            [
              "3"
            ],
            [
              "4"
            ],
            [
              "5"
            ]
          ]
        }
      },
      {
        "title": "TBL2",
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "1"
            ],
            [
              "3"
            ],
            [
              "3"
            ],
            [
              "6"
            ]
          ]
        }
      },
      {
        "title": "TBL3",
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "2"
            ],
            [
              "3"
            ],
            [
              "4"
            ],
            [
              "4"
            ],
            [
              "7"
            ]
          ]
        }
      },
      {
        "code": "SELECT CODE\nFROM   (\n         SELECT CODE FROM TBL1\n         MINUS\n         SELECT CODE FROM TBL2)\nINTERSECT (\n         SELECT CODE FROM TBL3\n         MINUS\n         SELECT CODE FROM TBL2)\nORDER BY CODE;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "2"
            ],
            [
              "4"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "2"
            ],
            [
              "4"
            ],
            [
              "5"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "2"
            ],
            [
              "4"
            ],
            [
              "7"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "2"
            ],
            [
              "4"
            ],
            [
              "6"
            ]
          ]
        }
      }
    ],
    "a": 1,
    "e": "TBL1 − TBL2 = {2, 4, 5}, TBL3 − TBL2 = {2, 4, 7} → 교집합 {2, 4}.",
    "topic": "집합 연산자"
  },
  {
    "n": 36,
    "s": 2,
    "q": "아래 SQL의 실행 결과와 동일한 것은?",
    "b": [
      {
        "code": "SELECT 회원.회원ID,\n       SUM(구매.구매금액) AS 총구매금액\nFROM   회원, 구매\nWHERE  회원.회원ID = 구매.회원ID\nAND    회원.회원ID IN (\n         SELECT 회원ID\n         FROM   구매\n         WHERE  구매일자\n         BETWEEN DATE '2025-01-01'\n         AND DATE '2025-12-31')\nGROUP BY 회원.회원ID;"
      }
    ],
    "o": [
      {
        "code": "SELECT 회원.회원ID,\n       SUM(구매.구매금액) AS 총구매금액\nFROM   회원 JOIN 구매\nON     회원.회원ID = 구매.회원ID\nWHERE  구매.구매일자 BETWEEN DATE '2025-01-01'\n                      AND DATE '2025-12-31'\nGROUP BY 회원.회원ID;"
      },
      {
        "code": "SELECT 회원.회원ID,\n       SUM(구매.구매금액) AS 총구매금액\nFROM   회원 JOIN 구매\nON     회원.회원ID = 구매.회원ID\nWHERE  EXISTS (\n         SELECT 1\n         FROM   구매\n         WHERE  구매.회원ID = 회원.회원ID\n         AND    구매.구매일자\n                BETWEEN DATE '2025-01-01'\n                AND DATE '2025-12-31')\nGROUP BY 회원.회원ID;"
      },
      {
        "code": "SELECT 회원.회원ID,\n       SUM(구매.구매금액) AS 총구매금액\nFROM   회원, 구매\nWHERE  회원.회원ID = 구매.회원ID\nAND    구매.구매일자 BETWEEN DATE '2025-01-01'\n                      AND DATE '2025-12-31'\nGROUP BY 회원.회원ID;"
      },
      {
        "code": "SELECT 회원.회원ID,\n       SUM(구매.구매금액) AS 총구매금액\nFROM   회원 LEFT JOIN 구매\nON     회원.회원ID = 구매.회원ID\nAND    구매.구매일자 BETWEEN DATE '2025-01-01'\n                      AND DATE '2025-12-31'\nGROUP BY 회원.회원ID;"
      }
    ],
    "a": 2,
    "e": "원래 SQL은 '2025년에 구매 이력이 있는 회원'의 <b>전체 기간</b> 구매금액 합계입니다. EXISTS 상관 서브쿼리로 회원만 걸러내는 ②가 동일합니다. ①③은 2025년 구매만 합산하고, ④는 모든 회원이 나옵니다.",
    "topic": "서브쿼리"
  },
  {
    "n": 37,
    "s": 2,
    "q": "아래 SQL의 실행 결과를 순서대로 나열한 것은?",
    "b": [
      {
        "code": "SELECT REGEXP_SUBSTR(\n  'x7k29k49', 'k.9') FROM DUAL;\nSELECT REGEXP_SUBSTR(\n  'm2z880z90', 'z[0-9]{2}', 5, 1) FROM DUAL;\nSELECT REGEXP_SUBSTR(\n  'u1p2p3p4', 'p\\d+p', 1, 1) FROM DUAL;"
      }
    ],
    "o": [
      "k49, z88, NULL",
      "k49, z90, NULL",
      "k29, z88, p2p",
      "k29, z90, p2p"
    ],
    "a": 4,
    "e": "① 처음 일치하는 'k29'. ② 5번째 글자('8')부터 찾으므로 'z88'은 건너뛰고 'z90'. ③ 'p2p'가 첫 일치.",
    "topic": "정규 표현식"
  },
  {
    "n": 38,
    "s": 2,
    "q": "아래 테이블을 참고할 때 오류가 발생하는 INSERT 문은?",
    "b": [
      {
        "code": "CREATE TABLE 예약(\n    예약ID     NUMBER PRIMARY KEY,\n    예약일시   DATE NOT NULL,\n    고객ID     NUMBER,\n    예약상태   VARCHAR2(3) DEFAULT 'OK',\n    확인일시   DATE\n);"
      }
    ],
    "o": [
      {
        "code": "INSERT INTO 예약 (예약ID, 예약일시, 고객ID,\n예약상태, 확인일시) VALUES (300, SYSDATE,\n10, '100', SYSDATE + 1);"
      },
      {
        "code": "INSERT INTO 예약 (예약ID, 예약일시, 고객ID)\nVALUES (301, TO_DATE('2026/05/01', 'YYYY/\nMM/DD'), 10);"
      },
      {
        "code": "INSERT INTO 예약 (예약ID, 예약일시, 고객ID,\n확인일시) VALUES (302, SYSDATE - 3, 10,\n20260501);"
      },
      {
        "code": "INSERT INTO 예약 (예약ID, 예약일시, 고객ID,\n예약상태, 확인일시) VALUES (303, SYSDATE,\n10, 'END', TO_DATE('2026-05-01'));"
      }
    ],
    "a": 3,
    "e": "DATE 칼럼(확인일시)에 숫자 20260501을 넣으면 NUMBER→DATE 암시적 변환이 되지 않아 오류(ORA-00932)가 납니다. 'END'는 3바이트라 VARCHAR2(3)에 들어갑니다.",
    "topic": "DML"
  },
  {
    "n": 39,
    "s": 2,
    "q": "아래 실행 결과를 출력하는 SQL로 가장 적절한 것은?",
    "b": [
      {
        "title": "분류",
        "table": {
          "h": [
            "카테고리",
            "상위카테고리",
            "조회수"
          ],
          "r": [
            [
              "3",
              "NULL",
              "90"
            ],
            [
              "2",
              "NULL",
              "140"
            ],
            [
              "5",
              "3",
              "60"
            ],
            [
              "8",
              "3",
              "110"
            ],
            [
              "6",
              "2",
              "160"
            ],
            [
              "12",
              "6",
              "180"
            ],
            [
              "15",
              "6",
              "210"
            ]
          ]
        }
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "카테고리",
            "상위카테고리",
            "조회수"
          ],
          "r": [
            [
              "15",
              "6",
              "210"
            ],
            [
              "6",
              "2",
              "160"
            ],
            [
              "2",
              "NULL",
              "140"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT 카테고리, 상위카테고리, 조회수\nFROM   분류\nSTART WITH 카테고리 = 2\nCONNECT BY PRIOR 카테고리 = 상위카테고리;"
      },
      {
        "code": "SELECT 카테고리, 상위카테고리, 조회수\nFROM   분류\nSTART WITH 카테고리 = 2\nCONNECT BY 카테고리 = PRIOR 상위카테고리;"
      },
      {
        "code": "SELECT 카테고리, 상위카테고리, 조회수\nFROM   분류\nSTART WITH 카테고리 = 15\nCONNECT BY 카테고리 = PRIOR 상위카테고리;"
      },
      {
        "code": "SELECT 카테고리, 상위카테고리, 조회수\nFROM   분류\nSTART WITH 카테고리 = 15\nCONNECT BY PRIOR 카테고리 = 상위카테고리;"
      }
    ],
    "a": 3,
    "e": "15에서 시작해 부모 방향(역방향)으로 올라갑니다: 15 → 6 → 2. 역방향 전개는 CONNECT BY 카테고리 = PRIOR 상위카테고리.",
    "topic": "계층형 질의와 셀프 조인"
  },
  {
    "n": 40,
    "s": 2,
    "q": "CTAS(Create Table As Select)에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "기본 키, 외래 키, 고유 키 등의 제약 조건은 복사되지 않는다.",
      "생성된 테이블은 ALTER TABLE 명령으로 변경할 수 있다.",
      "CTAS로 생성할 때 모든 데이터 타입을 새로 정의해야 한다.",
      "원본 테이블의 NOT NULL 제약 조건은 그대로 유지된다."
    ],
    "a": 3,
    "e": "CTAS는 SELECT 결과의 칼럼 데이터 타입을 그대로 가져오므로 새로 정의할 필요가 없습니다.",
    "topic": "DDL"
  },
  {
    "n": 41,
    "s": 2,
    "q": "아래 테이블과 실행 결과를 참고할 때 SQL의 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "title": "매출",
        "table": {
          "h": [
            "카테고리",
            "판매일자",
            "지역",
            "매출액"
          ],
          "r": [
            [
              "식품",
              "20250105",
              "서울",
              "120000"
            ],
            [
              "식품",
              "20250118",
              "경기",
              "180000"
            ],
            [
              "식품",
              "20250203",
              "서울",
              "210000"
            ],
            [
              "식품",
              "20250220",
              "경기",
              "130000"
            ],
            [
              "식품",
              "20250302",
              "서울",
              "160000"
            ],
            [
              "의류",
              "20250122",
              "부산",
              "300000"
            ],
            [
              "의류",
              "20250127",
              "서울",
              "150000"
            ],
            [
              "의류",
              "20250211",
              "서울",
              "220000"
            ],
            [
              "의류",
              "20250310",
              "서울",
              "250000"
            ],
            [
              "의류",
              "20250328",
              "대구",
              "300000"
            ],
            [
              "가전",
              "20250214",
              "경기",
              "400000"
            ],
            [
              "가전",
              "20250228",
              "서울",
              "210000"
            ],
            [
              "가전",
              "20250305",
              "대구",
              "350000"
            ],
            [
              "가전",
              "20250320",
              "부산",
              "200000"
            ]
          ]
        }
      },
      {
        "code": "SELECT 카테고리,\n       SUBSTR(판매일자, 1, 6) AS 판매월, 지역,\n       SUM(매출액) AS 총매출\nFROM   매출\nGROUP BY [    ㉠    ]\nORDER BY 카테고리, 판매월, 지역;"
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "카테고리",
            "판매월",
            "지역",
            "총매출"
          ],
          "r": [
            [
              "식품",
              "NULL",
              "NULL",
              "800000"
            ],
            [
              "의류",
              "NULL",
              "NULL",
              "1220000"
            ],
            [
              "가전",
              "NULL",
              "NULL",
              "1160000"
            ],
            [
              "NULL",
              "202501",
              "NULL",
              "750000"
            ],
            [
              "NULL",
              "202502",
              "NULL",
              "1170000"
            ],
            [
              "NULL",
              "202503",
              "NULL",
              "1260000"
            ],
            [
              "NULL",
              "NULL",
              "서울",
              "1320000"
            ],
            [
              "NULL",
              "NULL",
              "경기",
              "710000"
            ],
            [
              "NULL",
              "NULL",
              "부산",
              "500000"
            ],
            [
              "NULL",
              "NULL",
              "대구",
              "650000"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "CUBE(카테고리, SUBSTR(판매일자,1,6), 지역)"
      },
      {
        "code": "CUBE((카테고리, SUBSTR(판매일자,1,6), 지역))"
      },
      {
        "code": "GROUPING SETS ((카테고리, 지역), (SUBSTR(판매일자,1,6)))"
      },
      {
        "code": "GROUPING SETS ((카테고리), (SUBSTR(판매일자,\n1,6)), (지역))"
      }
    ],
    "a": 4,
    "e": "결과가 카테고리별, 판매월별, 지역별 소계만 각각 있고 총계나 조합 소계가 없으므로 세 칼럼을 각각 따로 묶은 GROUPING SETS입니다.",
    "topic": "그룹 함수"
  },
  {
    "n": 42,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "주문내역",
        "table": {
          "h": [
            "주문ID",
            "고객ID",
            "쿠폰코드",
            "결제금액"
          ],
          "r": [
            [
              "101",
              "1",
              "A10",
              "50000"
            ],
            [
              "102",
              "1",
              "NULL",
              "30000"
            ],
            [
              "103",
              "2",
              "B20",
              "NULL"
            ],
            [
              "104",
              "2",
              "A10",
              "40000"
            ],
            [
              "105",
              "NULL",
              "B20",
              "0"
            ],
            [
              "106",
              "3",
              "NULL",
              "NULL"
            ],
            [
              "107",
              "NULL",
              "NULL",
              "NULL"
            ],
            [
              "108",
              "3",
              "C30",
              "70000"
            ],
            [
              "109",
              "3",
              "C30",
              "NULL"
            ]
          ]
        }
      },
      {
        "code": "SELECT COUNT(고객ID) AS 고객ID수,\n       COUNT(DISTINCT 쿠폰코드) AS 쿠폰코드수,\n       COUNT(결제금액) AS 결제건수\nFROM 주문내역;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "고객ID수",
            "쿠폰코드수",
            "결제건수"
          ],
          "r": [
            [
              "7",
              "4",
              "5"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "고객ID수",
            "쿠폰코드수",
            "결제건수"
          ],
          "r": [
            [
              "7",
              "3",
              "5"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "고객ID수",
            "쿠폰코드수",
            "결제건수"
          ],
          "r": [
            [
              "8",
              "4",
              "4"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "고객ID수",
            "쿠폰코드수",
            "결제건수"
          ],
          "r": [
            [
              "8",
              "3",
              "4"
            ]
          ]
        }
      }
    ],
    "a": 2,
    "e": "COUNT(칼럼)은 NULL을 제외합니다. 고객ID NULL 아닌 행 7개, 쿠폰코드 종류 A10·B20·C30 = 3, 결제금액 NULL 아닌 행 5개(0도 포함).",
    "topic": "그룹 함수"
  },
  {
    "n": 43,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "code": "CREATE TABLE T1 (\n    A NUMBER,\n    B NUMBER\n);\n\nCREATE TABLE T2 (\n    C NUMBER\n);\n\nINSERT INTO T1(A) VALUES (5);\nINSERT INTO T1(B) VALUES (3);\nINSERT INTO T1(A) VALUES (7);\nINSERT INTO T2(C) VALUES (100);\nINSERT INTO T2(C) VALUES (200);\n\nUPDATE T1 SET B = 4\nWHERE B IS NULL;\n\nDELETE FROM T1\nWHERE A IS NULL;\n\nTRUNCATE TABLE T2;\n\nINSERT INTO T2(C) VALUES (300);\n\nINSERT INTO T1(B) VALUES (6);\n\nUPDATE T1 SET A = 2\nWHERE B = 4;\n\nROLLBACK;\n\nSELECT SUM(A) + SUM(B)\nFROM T1;"
      }
    ],
    "o": [
      "8",
      "12",
      "20",
      "NULL"
    ],
    "a": 3,
    "e": "TRUNCATE는 DDL이라 실행 시 자동 COMMIT됩니다. 그 시점 T1 = (5,4), (7,4). 이후 작업은 ROLLBACK으로 취소 → SUM(A)=12, SUM(B)=8 → 20.",
    "topic": "TCL"
  },
  {
    "n": 44,
    "s": 2,
    "q": "아래 SQL의 빈칸 ㉠에 들어갔을 때 실행 결과가 <u>다른</u> 하나는?",
    "b": [
      {
        "code": "CREATE TABLE 일자별방문자 (\n    방문일자 VARCHAR2(8),\n    방문자수 NUMBER,\n    CONSTRAINT 일자별방문자_PK PRIMARY KEY (방문일자)\n);"
      },
      {
        "title": "일자별방문자",
        "table": {
          "h": [
            "방문일자",
            "방문자수"
          ],
          "r": [
            [
              "20251201",
              "320"
            ],
            [
              "20251202",
              "450"
            ],
            [
              "20251203",
              "500"
            ],
            [
              "20251204",
              "300"
            ],
            [
              "20251205",
              "200"
            ],
            [
              "20251206",
              "280"
            ],
            [
              "20251207",
              "310"
            ]
          ]
        }
      },
      {
        "code": "SELECT 방문일자,\n       [    ㉠    ] AS 방문자수\nFROM 일자별방문자\nORDER BY 방문일자;"
      }
    ],
    "o": [
      {
        "code": "LAG(방문자수) OVER(ORDER BY 방문일자)"
      },
      {
        "code": "LAG(방문자수) OVER(ORDER BY 방문일자 DESC)"
      },
      {
        "code": "LAG(방문자수, 1) OVER(ORDER BY 방문일자 DESC)"
      },
      {
        "code": "LEAD(방문자수) OVER(ORDER BY 방문일자)"
      }
    ],
    "a": 1,
    "e": "②③④는 모두 '다음 날' 방문자수를 가져옵니다. ①만 '전날' 방문자수를 가져옵니다.",
    "topic": "윈도우 함수"
  },
  {
    "n": 45,
    "s": 2,
    "q": "권한 제어에 대한 적절한 설명을 모두 고른 것은?",
    "b": [
      {
        "box": "(가) ROLLBACK 명령 수행 시 트랜잭션에서 발생한 변경 사항뿐 아니라, 그동안 수행된 GRANT 명령도 함께 취소된다.\n(나) GRANT는 특정 사용자에게 필요한 권한을 명시적으로 부여하기 위해 사용하는 명령어이다.\n(다) REVOKE는 권한을 회수하더라도 사용자가 다른 사용자에게 재부여한 권한에는 영향을 주지 않는다.\n(라) ROLE은 여러 권한을 하나의 단위로 묶어 관리하며, 사용자에게 한 번에 부여하거나 삭제할 수 있는 논리적 그룹이다."
      }
    ],
    "o": [
      "(가), (다)",
      "(나), (라)",
      "(나), (다), (라)",
      "(가), (나), (라)"
    ],
    "a": 2,
    "e": "(가) GRANT는 DCL로 자동 COMMIT되어 ROLLBACK 대상이 아닙니다. (다) WITH GRANT OPTION으로 재부여한 객체 권한은 REVOKE 시 연쇄적으로 회수됩니다.",
    "topic": "DCL"
  },
  {
    "n": 46,
    "s": 2,
    "q": "SQL의 실행 결과가 아래와 같을 때 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "title": "지점매출",
        "table": {
          "h": [
            "지점거래ID",
            "지점코드",
            "고객ID",
            "매출금액"
          ],
          "r": [
            [
              "1",
              "S1",
              "C001",
              "100"
            ],
            [
              "2",
              "S1",
              "C001",
              "250"
            ],
            [
              "3",
              "S1",
              "C002",
              "150"
            ],
            [
              "4",
              "S2",
              "C001",
              "200"
            ],
            [
              "5",
              "S2",
              "C003",
              "300"
            ],
            [
              "6",
              "S3",
              "C004",
              "400"
            ],
            [
              "7",
              "S3",
              "C004",
              "100"
            ],
            [
              "8",
              "S3",
              "C005",
              "50"
            ]
          ]
        }
      },
      {
        "code": "SELECT 지점코드, 고객ID,\n       [    ㉠    ] AS 총매출금액\nFROM   지점매출\nORDER BY 지점코드, 고객ID;"
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "지점코드",
            "고객ID",
            "총매출금액"
          ],
          "r": [
            [
              "S1",
              "C001",
              "350"
            ],
            [
              "S1",
              "C001",
              "350"
            ],
            [
              "S1",
              "C002",
              "500"
            ],
            [
              "S2",
              "C001",
              "200"
            ],
            [
              "S2",
              "C003",
              "500"
            ],
            [
              "S3",
              "C004",
              "500"
            ],
            [
              "S3",
              "C004",
              "500"
            ],
            [
              "S3",
              "C005",
              "550"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SUM(매출금액) OVER(ORDER BY 고객ID)"
      },
      {
        "code": "SUM(매출금액) OVER(PARTITION BY 지점코드)"
      },
      {
        "code": "SUM(매출금액) OVER(PARTITION BY 지점코드\nORDER BY 고객ID ROWS BETWEEN UNBOUNDED\nPRECEDING AND CURRENT ROW)"
      },
      {
        "code": "SUM(매출금액) OVER(PARTITION BY 지점코드\nORDER BY 고객ID RANGE BETWEEN UNBOUNDED\nPRECEDING AND CURRENT ROW)"
      }
    ],
    "a": 4,
    "e": "지점별 누적합인데, 같은 고객ID 두 행이 같은 값(350, 500)을 가집니다. 동일한 정렬값을 하나의 범위로 묶는 RANGE 방식입니다. ROWS면 100, 350처럼 행 단위로 누적됩니다.",
    "topic": "윈도우 함수"
  },
  {
    "n": 47,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "TBL",
        "table": {
          "h": [
            "COL1",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "15",
              "10",
              "300"
            ],
            [
              "40",
              "20",
              "310"
            ],
            [
              "25",
              "10",
              "305"
            ],
            [
              "55",
              "30",
              "315"
            ],
            [
              "35",
              "10",
              "330"
            ],
            [
              "65",
              "40",
              "345"
            ],
            [
              "45",
              "20",
              "360"
            ]
          ]
        }
      },
      {
        "code": "SELECT\n  MAX(COL1) OVER(\n    ORDER BY COL1 DESC\n    ROWS BETWEEN 2 PRECEDING AND 1 FOLLOWING\n  ) AS COL1,\n  SUM(COL2) OVER(\n    ORDER BY COL2, COL1\n    ROWS BETWEEN CURRENT ROW AND 2 FOLLOWING\n  ) AS COL2,\n  FIRST_VALUE(COL3) OVER(\n    ORDER BY COL3 DESC\n    RANGE BETWEEN 20 PRECEDING AND 10 FOLLOWING\n  ) AS COL3\nFROM TBL\nORDER BY COL1;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "COL1",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "35",
              "30",
              "360"
            ],
            [
              "40",
              "40",
              "360"
            ],
            [
              "45",
              "50",
              "360"
            ],
            [
              "55",
              "70",
              "360"
            ],
            [
              "65",
              "90",
              "360"
            ],
            [
              "65",
              "70",
              "360"
            ],
            [
              "65",
              "40",
              "360"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "COL1",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "25",
              "30",
              "310"
            ],
            [
              "35",
              "40",
              "315"
            ],
            [
              "40",
              "50",
              "330"
            ],
            [
              "45",
              "70",
              "315"
            ],
            [
              "55",
              "90",
              "360"
            ],
            [
              "65",
              "70",
              "315"
            ],
            [
              "65",
              "40",
              "345"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "COL1",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "35",
              "10",
              "310"
            ],
            [
              "40",
              "20",
              "315"
            ],
            [
              "45",
              "30",
              "330"
            ],
            [
              "55",
              "50",
              "315"
            ],
            [
              "65",
              "70",
              "360"
            ],
            [
              "65",
              "100",
              "315"
            ],
            [
              "65",
              "140",
              "345"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "COL1",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "35",
              "30",
              "315"
            ],
            [
              "40",
              "40",
              "315"
            ],
            [
              "45",
              "50",
              "345"
            ],
            [
              "55",
              "70",
              "330"
            ],
            [
              "65",
              "70",
              "330"
            ],
            [
              "65",
              "90",
              "360"
            ],
            [
              "65",
              "40",
              "360"
            ]
          ]
        }
      }
    ],
    "a": 4,
    "e": "원본 행(COL1 = 15, 25, 35, 40, 45, 55, 65)별로 계산하면<br>• MAX: COL1 내림차순, 앞 2행~뒤 1행 → 35, 40, 45, 55, 65, 65, 65<br>• SUM: (COL2, COL1) 순, 현재+다음 2행 → 30, 40, 50, 70, 90, 70, 40<br>• FIRST_VALUE: COL3 내림차순, 값 기준 +20 ~ −10 범위의 첫 값 → 315, 315, 345, 330, 360, 330, 360<br>마지막 ORDER BY COL1은 별칭(계산된 COL1)을 기준으로 정렬하므로, 65가 같은 세 행의 순서는 정해지지 않습니다. 세 칼럼 값의 조합이 일치하는 것은 ④입니다.",
    "topic": "윈도우 함수"
  },
  {
    "n": 48,
    "s": 2,
    "q": "아래 테이블에서 가장 높은 총점을 가진 학생 정보를 모두 조회하는 SQL로 가장 적절하지 <u>않은</u> 것은? (단, ①②의 DBMS는 오라클, ③④의 DBMS는 SQL Server로 가정함)",
    "b": [
      {
        "title": "성적",
        "table": {
          "h": [
            "학번",
            "이름",
            "중간",
            "기말",
            "총점"
          ],
          "r": [
            [
              "101",
              "김민수",
              "82",
              "91",
              "173"
            ],
            [
              "102",
              "박지현",
              "88",
              "92",
              "180"
            ],
            [
              "103",
              "최현우",
              "90",
              "94",
              "184"
            ],
            [
              "104",
              "한지훈",
              "92",
              "92",
              "184"
            ],
            [
              "105",
              "정아름",
              "75",
              "89",
              "164"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT 학번, 이름, 총점\nFROM   성적\nWHERE  총점 = (SELECT MAX(총점) FROM 성적);"
      },
      {
        "code": "SELECT 학번, 이름, 총점\nFROM   (\n         SELECT 학번, 이름, 총점,\n           RANK() OVER(ORDER BY 총점 DESC)\n           AS R\n         FROM   성적)\nWHERE  R = 1;"
      },
      {
        "code": "SELECT TOP 1 학번, 이름, 총점\nFROM   성적\nORDER  BY 총점 DESC;"
      },
      {
        "code": "SELECT TOP (1) WITH TIES 학번, 이름, 총점\nFROM   성적\nORDER  BY 총점 DESC;"
      }
    ],
    "a": 3,
    "e": "최고점 184가 2명인데, TOP 1은 한 명만 반환합니다. 동점자를 모두 포함하려면 WITH TIES가 필요합니다.",
    "topic": "SELECT 문"
  },
  {
    "n": 49,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "상품재고",
        "table": {
          "h": [
            "상품ID",
            "상품명",
            "카테고리",
            "재고수량",
            "할인율"
          ],
          "r": [
            [
              "P101",
              "모니터",
              "A",
              "30",
              "NULL"
            ],
            [
              "P102",
              "키보드",
              "A",
              "50",
              "NULL"
            ],
            [
              "P103",
              "마우스",
              "B",
              "80",
              "NULL"
            ],
            [
              "P104",
              "헤드셋",
              "B",
              "20",
              "NULL"
            ],
            [
              "P105",
              "스피커",
              "C",
              "40",
              "NULL"
            ]
          ]
        }
      },
      {
        "code": "SELECT 할인율\nFROM   상품재고\nWHERE  (재고수량 > 0 AND 할인율 > 0)\n   OR  (카테고리 = 'A' AND 할인율 IS NOT NULL)\n   OR  1 = 2;"
      }
    ],
    "o": [
      "0",
      "NULL",
      "오류가 발생한다.",
      "공집합"
    ],
    "a": 4,
    "e": "할인율이 전부 NULL이라 '할인율 > 0'은 UNKNOWN, 'IS NOT NULL'은 FALSE, 1=2는 FALSE → 조건을 만족하는 행이 없어 공집합입니다.",
    "topic": "WHERE 절"
  },
  {
    "n": 50,
    "s": 2,
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "주문",
        "table": {
          "h": [
            "주문ID",
            "주문구분",
            "수량",
            "취소여부"
          ],
          "r": [
            [
              "G001",
              "온라인",
              "10",
              "N"
            ],
            [
              "G002",
              "온라인",
              "5",
              "Y"
            ],
            [
              "G003",
              "오프라인",
              "3",
              "N"
            ],
            [
              "G004",
              "오프라인",
              "NULL",
              "N"
            ],
            [
              "G005",
              "온라인",
              "8",
              "N"
            ]
          ]
        }
      },
      {
        "code": "SELECT SUM(CASE\n             WHEN 주문구분 = '온라인'\n              AND 취소여부 = 'N' THEN 수량\n             ELSE 0\n           END)\n     + SUM(CASE\n             WHEN 주문구분 = '오프라인'\n              AND 취소여부 = 'N' THEN -수량\n             ELSE 0\n           END) AS 순수수량\nFROM   주문;"
      }
    ],
    "o": [
      "10",
      "15",
      "13",
      "18"
    ],
    "a": 2,
    "e": "온라인 미취소: 10 + 8 = 18. 오프라인 미취소: −3 + NULL(SUM에서 무시) = −3. 18 + (−3) = 15.",
    "topic": "SELECT 문"
  }
],
};

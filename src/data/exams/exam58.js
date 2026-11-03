// 제58회 SQLD 기출 복원 모의고사 (2025년 8월)
// 필드: n 번호, s 과목(1|2), topic 출제 영역(교재 성적 분석표 기준), q 문제(HTML), b 지문 블록, o 보기, a 정답(1~4), e 해설(HTML)
// 블록: {code} | {title, table:{h,r}} | {box} | {erd:{ents, rels, note?}}
// 보기: 문자열 | {code} | {table} | {text, code}
// 정답은 교재 정답표(제58회 정답 및 해설)와 대조 완료

export default {
  id: "sqld-58",
  round: 58,
  title: "제58회 기출 복원 모의고사",
  date: "2025년 8월",
  minutes: 90,
  questions: [
  {
    "n": 1,
    "s": 1,
    "topic": "엔터티",
    "q": "아래 데이터 모델에서 키 엔터티로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "상품",
              "c": 0,
              "r": 0,
              "pk": [
                "# 상품ID"
              ],
              "at": [
                "* 상품명",
                "* 단가",
                "* 재고수량"
              ]
            },
            {
              "name": "배송",
              "c": 1,
              "r": 0,
              "pk": [
                "# 배송ID",
                "# 주문ID(FK)"
              ],
              "at": [
                "* 운송장번호",
                "* 배송상태",
                "* 출고일자"
              ]
            },
            {
              "name": "주문상품",
              "c": 0,
              "r": 1,
              "pk": [
                "# 주문ID(FK)",
                "# 상품ID(FK)"
              ],
              "at": [
                "* 수량",
                "* 판매단가"
              ]
            },
            {
              "name": "주문",
              "c": 1,
              "r": 1,
              "pk": [
                "# 주문ID",
                "# 회원ID(FK)",
                "# 주소ID(FK)"
              ],
              "at": [
                "* 주문일자",
                "* 총금액"
              ]
            },
            {
              "name": "주소",
              "c": 2,
              "r": 1,
              "pk": [
                "# 주소ID",
                "# 회원ID(FK)"
              ],
              "at": [
                "* 수신자명",
                "* 기본주소",
                "* 우편번호"
              ]
            },
            {
              "name": "결제",
              "c": 0,
              "r": 2,
              "pk": [
                "# 결제ID",
                "# 주문ID(FK)"
              ],
              "at": [
                "* 결제수단",
                "* 결제금액",
                "* 결제일자"
              ]
            },
            {
              "name": "회원",
              "c": 2,
              "r": 2,
              "pk": [
                "# 회원ID"
              ],
              "at": [
                "* 회원명",
                "* 이메일",
                "* 가입일자"
              ]
            }
          ],
          "rels": [
            {
              "a": "상품",
              "b": "주문상품",
              "aEnd": "one",
              "bEnd": "zeroMany"
            },
            {
              "a": "주문",
              "b": "배송",
              "aEnd": "one",
              "bEnd": "zeroMany"
            },
            {
              "a": "주문",
              "b": "주문상품",
              "aEnd": "one",
              "bEnd": "oneMany"
            },
            {
              "a": "주소",
              "b": "주문",
              "aEnd": "one",
              "bEnd": "oneMany"
            },
            {
              "a": "주문상품",
              "b": "결제",
              "aEnd": "one",
              "bEnd": "zeroMany"
            },
            {
              "a": "주문",
              "b": "결제",
              "aEnd": "one",
              "bEnd": "oneMany",
              "route": "elbow",
              "ux": 0.3
            },
            {
              "a": "회원",
              "b": "주문",
              "aEnd": "one",
              "bEnd": "zeroMany",
              "route": "elbow",
              "ux": 0.7
            },
            {
              "a": "회원",
              "b": "주소",
              "aEnd": "one",
              "bEnd": "zeroMany"
            }
          ],
          "note": "교재 원본 그대로 옮김 · # 식별자, * 필수 속성"
        }
      }
    ],
    "o": [
      "회원",
      "상품",
      "주문상품",
      "주문"
    ],
    "a": 3,
    "e": "키 엔터티는 다른 엔터티의 도움 없이 스스로 생성되는 엔터티입니다(회원, 상품). 주문은 키 엔터티에서 발생한 메인 엔터티, 주문상품은 두 부모(주문·상품)로부터 생기는 행위 엔터티입니다."
  },
  {
    "n": 2,
    "s": 1,
    "topic": "엔터티",
    "q": "엔터티의 특징으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "유일하게 구분할 수 있는 식별자를 가지고 있어야 한다.",
      "다른 엔터티와 관계를 가질 수 없으며 독립적으로 존재해야 한다.",
      "최소한 하나 이상의 속성을 포함해야 한다.",
      "반드시 업무에 필요하고 실제로 활용되는 관리 대상이어야 한다."
    ],
    "a": 2,
    "e": "엔터티는 다른 엔터티와 최소 한 개 이상의 관계가 있어야 합니다."
  },
  {
    "n": 3,
    "s": 1,
    "topic": "속성",
    "q": "속성에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "엔터티의 성질이나 상태를 구체적으로 설명하는 최소의 데이터 단위이다.",
      "엔터티의 주식별자에 함수적으로 종속될 수 있으며, 이를 통해 엔터티의 의미를 표현한다.",
      "하나의 속성에 여러 개의 값이 동시에 저장되도록 정의할 수 있다.",
      "특성에 따라 기본 속성, 파생 속성, 설계 속성 등으로 구분할 수 있다."
    ],
    "a": 3,
    "e": "하나의 속성은 한 인스턴스에서 하나의 값만 가져야 합니다(원자값). 여러 값을 가지면 정규화 대상입니다."
  },
  {
    "n": 4,
    "s": 1,
    "topic": "관계",
    "q": "아래 ERD에 대한 설명으로 가장 적절한 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "자동차",
              "c": 0,
              "r": 0,
              "pk": [
                "자동차ID"
              ],
              "at": [
                "블랙박스ID(FK)",
                "모델명"
              ]
            },
            {
              "name": "블랙박스",
              "c": 1,
              "r": 0,
              "pk": [
                "블랙박스ID"
              ],
              "at": [
                "펌웨어버전"
              ]
            }
          ],
          "rels": [
            {
              "a": "자동차",
              "b": "블랙박스",
              "aEnd": "one",
              "bEnd": "zeroOne"
            }
          ]
        }
      }
    ],
    "o": [
      "자동차는 블랙박스가 없어도 존재할 수 있다.",
      "하나의 블랙박스는 여러 대의 자동차와 연결될 수 있다.",
      "자동차에는 반드시 블랙박스가 한 개 이상 있어야 한다.",
      "하나의 자동차는 여러 개의 블랙박스와 연결될 수 있다."
    ],
    "a": 1,
    "e": "까마귀발이 없으므로 1:1 관계이고, 블랙박스 쪽 ○는 선택(0 또는 1)을 뜻합니다. 따라서 자동차는 블랙박스 없이도 존재할 수 있습니다."
  },
  {
    "n": 5,
    "s": 1,
    "topic": "엔터티",
    "q": "아래 ERD에 대한 설명으로 가장 적절한 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "고객",
              "c": 0,
              "r": 0,
              "pk": [
                "# 고객ID"
              ],
              "at": [
                "* 고객명"
              ]
            },
            {
              "name": "상품",
              "c": 1,
              "r": 0,
              "pk": [
                "# 상품코드"
              ],
              "at": [
                "* 상품명"
              ]
            },
            {
              "name": "계약",
              "c": 0,
              "r": 1,
              "pk": [
                "# 계약번호",
                "# 고객ID(FK)"
              ],
              "at": [
                "* 계약일자"
              ]
            },
            {
              "name": "계약항목",
              "c": 1,
              "r": 1,
              "pk": [
                "# 계약번호(FK)",
                "# 상품코드(FK)"
              ],
              "at": [
                "* 계약수량",
                "* 계약단가"
              ]
            }
          ],
          "rels": [
            {
              "a": "고객",
              "b": "계약",
              "aEnd": "none",
              "bEnd": "oneMany",
              "line": "mix"
            },
            {
              "a": "상품",
              "b": "계약항목",
              "aEnd": "none",
              "bEnd": "oneMany",
              "line": "mix"
            },
            {
              "a": "계약",
              "b": "계약항목",
              "aEnd": "none",
              "bEnd": "oneMany",
              "line": "mix"
            }
          ],
          "note": "교재 원본(바커 표기법) 그대로 옮김 · # 식별자, * 필수 속성 · 점선 쪽 = 선택 참여, 실선 쪽 = 필수 참여"
        }
      }
    ],
    "o": [
      "고객은 반드시 하나 이상의 계약을 가지고 있어야 한다.",
      "계약은 고객의 체결 행위에 의해 발생하는 사건 엔터티이다.",
      "하나의 계약은 오직 하나의 계약항목만을 가질 수 있다.",
      "계약항목은 독립적으로 존재할 수 있는 기본 엔터티이다."
    ],
    "a": 2,
    "e": "계약은 고객이 체결하는 행위로 발생하는 사건(행위) 엔터티입니다. ① 고객 쪽이 점선이라 계약이 없어도 됩니다. ③ 계약항목 쪽이 까마귀발이라 여러 개를 가질 수 있습니다. ④ 계약항목은 계약·상품에 종속되는 엔터티입니다."
  },
  {
    "n": 6,
    "s": 1,
    "topic": "관계",
    "q": "비식별자 관계에 의해 속성을 생성하는 경우로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "여러 개의 엔터티가 통합되더라도 각 엔터티가 별도의 관계를 유지하는 경우",
      "자식 엔터티에서 별도의 주식별자를 새로 생성한 경우",
      "자식 엔터티에서 부모로부터 상속받은 속성이 반드시 필수일 필요가 없는 경우",
      "부모와 자식 엔터티의 데이터 생명주기를 동일하게 관리해야 하는 경우"
    ],
    "a": 4,
    "e": "부모와 자식의 생명주기를 함께 관리해야 하면 부모 키를 자식의 주식별자로 쓰는 식별자 관계를 사용합니다."
  },
  {
    "n": 7,
    "s": 1,
    "topic": "정규화",
    "q": "제3정규형을 만족하는 데이터 모델에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "각 속성은 반드시 하나의 값만 가져야 한다.",
      "모든 속성은 기본 키 전체에 대해 완전하게 종속되어야 한다.",
      "기본 키가 아닌 속성은 다른 속성에 종속되지 않고 기본 키에만 종속되어야 한다.",
      "이행 함수 종속을 허용해야 한다."
    ],
    "a": 4,
    "e": "제3정규형은 이행 함수 종속을 제거한 상태입니다."
  },
  {
    "n": 8,
    "s": 1,
    "topic": "관계",
    "q": "상호 배타적 관계의 예로 가장 적절한 것은?",
    "o": [
      "결제수단 테이블과 결제 테이블에서, 한 결제 건에 카드와 현금을 동시에 사용하는 경우",
      "사원 테이블과 부서 테이블에서, 사원이 특정 부서에 소속되는 경우",
      "차량 테이블에서, 차량이 법인 소속이거나 개인 소유로만 구분되어 사용하는 경우",
      "학생 테이블과 강의 테이블에서, 한 학생이 여러 강의를 수강할 수 있는 경우"
    ],
    "a": 3,
    "e": "상호 배타적 관계는 둘 중 하나와만 관계를 맺는 경우입니다. 차량은 법인 소속이거나 개인 소유 중 하나입니다."
  },
  {
    "n": 9,
    "s": 1,
    "topic": "관계",
    "q": "아래 ERD에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "b": [
      {
        "erd": {
          "ents": [
            {
              "name": "환자",
              "c": 0,
              "r": 0,
              "pk": [
                "환자ID"
              ],
              "at": [
                "성명",
                "출생일"
              ]
            },
            {
              "name": "진료기록",
              "c": 1,
              "r": 0,
              "pk": [
                "진료ID",
                "환자ID(FK)"
              ],
              "at": [
                "진료일시",
                "진료과",
                "진단명"
              ]
            }
          ],
          "rels": [
            {
              "a": "환자",
              "b": "진료기록",
              "aEnd": "one",
              "bEnd": "zeroMany",
              "label": "식별"
            }
          ]
        }
      }
    ],
    "o": [
      "하나의 진료기록은 반드시 하나의 환자에 속한다.",
      "환자는 진료기록을 가질 수도 있고 가지지 않을 수도 있다.",
      "한 명의 환자는 여러 개의 진료ID를 가질 수 없다.",
      "진료기록에는 환자를 식별할 수 있는 정보가 포함된다."
    ],
    "a": 3,
    "e": "진료기록 쪽이 ○ + 까마귀발(0..N)이므로 한 환자는 여러 진료기록(진료ID)을 가질 수 있습니다."
  },
  {
    "n": 10,
    "s": 1,
    "topic": "모델이 표현하는 트랜잭션의 이해",
    "q": "트랜잭션에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "트랜잭션은 데이터베이스에서 하나의 논리적 연산 단위를 의미한다.",
      "트랜잭션은 부분적으로 실행된 상태를 그대로 유지하거나 일부만 취소하는 것이 가능하다.",
      "트랜잭션은 동시에 수행되는 다른 트랜잭션의 영향을 받지 않아야 한다.",
      "트랜잭션 수행이 완료되면 커밋을 통해 결과가 데이터베이스에 영구적으로 반영된다."
    ],
    "a": 2,
    "e": "원자성(Atomicity)에 따라 트랜잭션은 모두 반영되거나 모두 취소되어야 합니다."
  },
  {
    "n": 11,
    "s": 2,
    "topic": "함수",
    "q": "아래 SQL의 실행 결과가 <u>다른</u> 하나는? (단, DBMS는 오라클로 가정함)",
    "o": [
      {
        "code": "SELECT REPLACE('00A0BC00', '0') FROM DUAL;"
      },
      {
        "code": "SELECT LTRIM('00A0BC', '0') FROM DUAL;"
      },
      {
        "code": "SELECT RTRIM('A0BC00', '0') FROM DUAL;"
      },
      {
        "code": "SELECT TRIM('0' FROM '00A0BC00') FROM DUAL;"
      }
    ],
    "a": 1,
    "e": "REPLACE는 모든 '0'을 지워 'ABC'. 나머지는 양 끝의 '0'만 지워 모두 'A0BC'."
  },
  {
    "n": 12,
    "s": 2,
    "topic": "WHERE 절",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "EMP",
        "table": {
          "h": [
            "ENAME"
          ],
          "r": [
            [
              "KIM"
            ],
            [
              "KAN"
            ],
            [
              "KANG"
            ],
            [
              "KING"
            ],
            [
              "K_N"
            ],
            [
              "PK_NG"
            ]
          ]
        }
      },
      {
        "code": "SELECT COUNT(*) CNT\nFROM   (SELECT ENAME\n        FROM EMP\n        WHERE ENAME\n        LIKE '%K_N%'\n        UNION ALL\n        SELECT ENAME\n        FROM EMP\n        WHERE ENAME\n        LIKE '%K\\_N%' ESCAPE '\\');"
      }
    ],
    "o": [
      "5",
      "6",
      "7",
      "8"
    ],
    "a": 3,
    "e": "'%K_N%'(_는 아무 한 글자): KAN, KANG, KING, K_N, PK_NG → 5건. '%K\\_N%'(_ 문자 그대로): K_N, PK_NG → 2건. UNION ALL이므로 5 + 2 = 7."
  },
  {
    "n": 13,
    "s": 2,
    "topic": "WHERE 절",
    "q": "PRICE의 값이 NULL이 아닌 경우를 조회하는 SQL로 가장 적절한 것은?",
    "o": [
      {
        "code": "SELECT * FROM PRODUCT\nWHERE PRICE NOT NULL;"
      },
      {
        "code": "SELECT * FROM PRODUCT\nWHERE PRICE <> NULL;"
      },
      {
        "code": "SELECT * FROM PRODUCT\nWHERE PRICE != NULL;"
      },
      {
        "code": "SELECT * FROM PRODUCT\nWHERE PRICE IS NOT NULL;"
      }
    ],
    "a": 4,
    "e": "NULL 비교는 IS NULL / IS NOT NULL을 사용합니다. ①은 문법 오류, ②③은 결과가 항상 공집합입니다."
  },
  {
    "n": 14,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 STUDENT 테이블에서 수강생이 3명 이상인 강좌(COURSE)를 출력하는 SQL로 가장 적절하지 <u>않은</u> 것은? (단, COURSE 칼럼에는 NOT NULL 제약 조건이 걸려 있음)",
    "b": [
      {
        "box": "[테이블]\nSTUDENT (<u>ID</u>, NAME, MAJOR, GRADE, COURSE)"
      }
    ],
    "o": [
      {
        "code": "SELECT COURSE\nFROM STUDENT\nGROUP BY COURSE\nHAVING COUNT(ID) >= 3;"
      },
      {
        "code": "SELECT COURSE\nFROM STUDENT\nGROUP BY COURSE\nHAVING COUNT(*) >= 3;"
      },
      {
        "code": "SELECT COURSE\nFROM STUDENT\nWHERE COUNT(ID) >= 3;"
      },
      {
        "code": "SELECT DISTINCT COURSE\nFROM STUDENT\nWHERE COURSE IN (\n        SELECT COURSE\n        FROM STUDENT\n        GROUP BY COURSE\n        HAVING COUNT(*) >= 3);"
      }
    ],
    "a": 3,
    "e": "집계 함수는 WHERE 절에 쓸 수 없어 오류가 발생합니다. 그룹 조건은 HAVING에 씁니다."
  },
  {
    "n": 15,
    "s": 2,
    "topic": "ORDER BY 절",
    "q": "ORDER BY 절에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "여러 개의 칼럼을 동시에 지정하여 우선순위를 두고 정렬할 수 있다.",
      "ORDER BY 절은 SELECT 문에서 가장 마지막 단계에 실행된다.",
      "ORDER BY 절의 기본 정렬 방식은 오름차순이다.",
      "SELECT 절에 포함되지 않은 칼럼은 ORDER BY 절에서 정렬 기준으로 사용할 수 없다."
    ],
    "a": 4,
    "e": "SELECT 절에 없는 칼럼도 ORDER BY에 사용할 수 있습니다(단, GROUP BY나 DISTINCT를 쓰는 경우는 제한)."
  },
  {
    "n": 16,
    "s": 2,
    "topic": "조인",
    "q": "아래 테이블에 대한 SQL의 실행 결과가 <u>다른</u> 하나는?",
    "b": [
      {
        "box": "[테이블]\nEMP(<u>ENO</u>, ENAME, DEPTNO)\nDEPT(<u>DEPTNO</u>, DNAME)"
      }
    ],
    "o": [
      {
        "code": "SELECT *\nFROM EMP INNER JOIN DEPT USING (DEPTNO);"
      },
      {
        "code": "SELECT *\nFROM EMP LEFT JOIN DEPT USING (DEPTNO);"
      },
      {
        "code": "SELECT *\nFROM EMP JOIN DEPT USING (DEPTNO);"
      },
      {
        "code": "SELECT * FROM EMP NATURAL JOIN DEPT;"
      }
    ],
    "a": 2,
    "e": "①③④는 DEPTNO가 일치하는 행만 반환하는 내부 조인입니다(공통 칼럼이 DEPTNO 하나뿐이라 NATURAL JOIN도 같음). ②는 부서가 없는 사원까지 포함하는 외부 조인입니다."
  },
  {
    "n": 17,
    "s": 2,
    "topic": "그룹 함수",
    "q": "아래 SQL의 실행 결과를 순서대로 나열한 것은?",
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
              "10",
              "NULL",
              "50"
            ],
            [
              "20",
              "30",
              "NULL"
            ],
            [
              "30",
              "40",
              "0"
            ]
          ]
        }
      },
      {
        "code": "SELECT AVG(COL3)\nFROM TBL;\n\nSELECT AVG(COL3)\nFROM TBL WHERE COL3 > 0;\n\nSELECT AVG(COL3)\nFROM TBL WHERE COL3 IS NOT NULL;"
      }
    ],
    "o": [
      "25, 50, 25",
      "25, NULL, 25",
      "50, 50, 50",
      "50, 50, 0"
    ],
    "a": 1,
    "e": "AVG는 NULL을 제외합니다. 전체: (50+0)/2 = 25. COL3 > 0: 50만 → 50. IS NOT NULL: (50+0)/2 = 25."
  },
  {
    "n": 18,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 테이블에서 월별 총매출액을 조회하는 SQL로 가장 적절하지 <u>않은</u> 것은? (단, S_DATE 칼럼은 DATE 타입임)",
    "b": [
      {
        "title": "SALES",
        "table": {
          "h": [
            "S_ID",
            "S_DATE",
            "M_ID",
            "AMT"
          ],
          "r": [
            [
              "1",
              "2018-07-03",
              "201807",
              "1200"
            ],
            [
              "2",
              "2018-07-25",
              "201807",
              "1800"
            ],
            [
              "3",
              "2018-08-10",
              "201808",
              "2000"
            ],
            [
              "4",
              "2018-08-28",
              "201808",
              "2500"
            ],
            [
              "5",
              "2018-09-05",
              "201809",
              "3000"
            ],
            [
              "6",
              "2018-09-21",
              "201809",
              "4000"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT M_ID, SUM(AMT) AS TOTAL\nFROM (\n    SELECT SUBSTR(TO_CHAR(S_DATE,\n    'YYYYMM'), 1, 6) AS M_ID, AMT\n    FROM SALES\n) X\nGROUP BY M_ID\nORDER BY M_ID;"
      },
      {
        "code": "SELECT TO_CHAR(S_DATE, 'YYYYMM') AS M_ID,\n       SUM(AMT) AS TOTAL\nFROM SALES\nGROUP BY S_DATE\nORDER BY TO_CHAR(S_DATE, 'YYYYMM');"
      },
      {
        "code": "SELECT M_ID,\n       SUM(AMT) AS TOTAL\nFROM (\n    SELECT TO_CHAR(S_DATE, 'YYYYMM') AS\n    M_ID, AMT\n    FROM SALES\n) X\nGROUP BY M_ID\nORDER BY TO_DATE(M_ID, 'YYYYMM');"
      },
      {
        "code": "SELECT M_ID, SUM(AMT) AS TOTAL\nFROM (\n    SELECT TO_DATE(TO_CHAR(S_DATE,\n    'YYYYMM'), 'YYYYMM') AS M_ID, AMT\n    FROM SALES\n) X\nGROUP BY M_ID\nORDER BY M_ID;"
      }
    ],
    "a": 2,
    "e": "GROUP BY S_DATE는 날짜(일) 단위로 묶기 때문에 같은 달이 여러 행으로 나옵니다. 월 단위로 묶으려면 월로 변환한 값으로 GROUP BY 해야 합니다."
  },
  {
    "n": 19,
    "s": 2,
    "topic": "조인",
    "q": "아래 테이블과 실행 결과를 참고할 때 SQL의 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "title": "T1",
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
            [
              "A"
            ],
            [
              "B"
            ],
            [
              "B"
            ],
            [
              "C"
            ]
          ]
        }
      },
      {
        "title": "T2",
        "table": {
          "h": [
            "CODE"
          ],
          "r": [
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
        "code": "SELECT T1.CODE AS COL1,\n       T2.CODE AS COL2\nFROM T1 [    ㉠    ] T2\nON T1.CODE = T2.CODE;"
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "B",
              "B"
            ],
            [
              "B",
              "B"
            ],
            [
              "C",
              "C"
            ],
            [
              "A",
              "NULL"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "RIGHT OUTER JOIN"
      },
      {
        "code": "FULL OUTER JOIN"
      },
      {
        "code": "INNER JOIN"
      },
      {
        "code": "LEFT OUTER JOIN"
      }
    ],
    "a": 4,
    "e": "T1의 A가 NULL과 함께 나오고 T2의 D는 나오지 않으므로 T1 기준 LEFT OUTER JOIN입니다."
  },
  {
    "n": 20,
    "s": 2,
    "topic": "Top N 쿼리",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "MY_TAB",
        "table": {
          "h": [
            "C1",
            "C2",
            "C3",
            "C4"
          ],
          "r": [
            [
              "1",
              "1",
              "1",
              "50"
            ],
            [
              "2",
              "1",
              "1",
              "40"
            ],
            [
              "2",
              "2",
              "1",
              "60"
            ],
            [
              "3",
              "1",
              "1",
              "NULL"
            ],
            [
              "1",
              "2",
              "1",
              "NULL"
            ]
          ]
        }
      },
      {
        "code": "SELECT C1, C4, C2, C3\nFROM MY_TAB\nORDER BY C4 DESC NULLS LAST, C1 ASC\nFETCH FIRST 3 ROWS ONLY;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "C1",
            "C4",
            "C2",
            "C3"
          ],
          "r": [
            [
              "2",
              "60",
              "2",
              "1"
            ],
            [
              "2",
              "40",
              "1",
              "1"
            ],
            [
              "1",
              "50",
              "1",
              "1"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "C1",
            "C4",
            "C2",
            "C3"
          ],
          "r": [
            [
              "1",
              "50",
              "1",
              "1"
            ],
            [
              "2",
              "60",
              "2",
              "1"
            ],
            [
              "2",
              "40",
              "1",
              "1"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "C1",
            "C4",
            "C2",
            "C3"
          ],
          "r": [
            [
              "2",
              "60",
              "2",
              "1"
            ],
            [
              "1",
              "50",
              "1",
              "1"
            ],
            [
              "1",
              "NULL",
              "2",
              "1"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "C1",
            "C4",
            "C2",
            "C3"
          ],
          "r": [
            [
              "2",
              "60",
              "2",
              "1"
            ],
            [
              "1",
              "50",
              "1",
              "1"
            ],
            [
              "2",
              "40",
              "1",
              "1"
            ]
          ]
        }
      }
    ],
    "a": 4,
    "e": "C4 내림차순(NULL은 마지막): 60 → 50 → 40 → NULL… 상위 3행은 (2,60), (1,50), (2,40)입니다."
  },
  {
    "n": 21,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 SQL의 실행 결과로 오류가 발생하지 <u>않는</u> 것은?",
    "b": [
      {
        "title": "EMPLOYEE",
        "table": {
          "h": [
            "EMP_ID",
            "EMP_NAME",
            "DEPT",
            "SALARY"
          ],
          "r": [
            [
              "1001",
              "박준호",
              "10",
              "5000"
            ],
            [
              "1002",
              "이서윤",
              "10",
              "3000"
            ],
            [
              "1003",
              "최민수",
              "20",
              "4000"
            ],
            [
              "1004",
              "한지민",
              "20",
              "2000"
            ],
            [
              "1005",
              "김철수",
              "30",
              "6000"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT EMP_ID, EMP_NAME,\n       RANK() OVER (PARTITION BY DEPT\n       ORDER BY SALARY DESC) AS RK\nFROM EMPLOYEE\nWHERE RANK() OVER (PARTITION BY DEPT\n      ORDER BY SALARY DESC) <= 3;"
      },
      {
        "code": "SELECT EMP_ID, EMP_NAME,\n       DENSE_RANK() OVER (PARTITION BY\n       DEPT) AS DRK\nFROM EMPLOYEE;"
      },
      {
        "code": "SELECT DEPT, TOTAL_SAL,\n       RANK() OVER (ORDER BY TOTAL_SAL\n       DESC) AS DEPT_RK\nFROM (\n    SELECT DEPT,\n           SUM(SALARY) AS TOTAL_SAL\n    FROM EMPLOYEE\n    GROUP BY DEPT\n)\nORDER BY DEPT_RK;"
      },
      {
        "code": "SELECT EMP_ID, EMP_NAME,\n       RANK() OVER (ORDER BY SUM(SALARY)\n       DESC) AS RK\nFROM EMPLOYEE;"
      }
    ],
    "a": 3,
    "e": "① 윈도우 함수는 WHERE 절에 쓸 수 없습니다. ② 순위 함수는 OVER 안에 ORDER BY가 필수입니다. ④ GROUP BY 없이 SUM과 개별 칼럼을 함께 쓸 수 없습니다. ③은 인라인 뷰에서 집계한 뒤 순위를 매겨 정상 실행됩니다."
  },
  {
    "n": 22,
    "s": 2,
    "topic": "조인",
    "q": "아래 SQL의 실행 시 출력되는 행의 개수로 가장 적절한 것은?",
    "b": [
      {
        "title": "TAB1",
        "table": {
          "h": [
            "고객명",
            "주문금액"
          ],
          "r": [
            [
              "홍길동",
              "50"
            ],
            [
              "이순신",
              "180"
            ],
            [
              "김유신",
              "220"
            ],
            [
              "장보고",
              "NULL"
            ]
          ]
        }
      },
      {
        "title": "TAB2",
        "table": {
          "h": [
            "등급",
            "최저금액",
            "최고금액"
          ],
          "r": [
            [
              "일반",
              "0",
              "99"
            ],
            [
              "프리미엄",
              "100",
              "199"
            ],
            [
              "VIP",
              "200",
              "299"
            ],
            [
              "VVIP",
              "300",
              "999"
            ]
          ]
        }
      },
      {
        "code": "SELECT *\nFROM TAB1 CROSS JOIN TAB2\nUNION ALL\nSELECT *\nFROM TAB1 INNER JOIN TAB2\nON TAB1.주문금액\nBETWEEN TAB2.최저금액\nAND TAB2.최고금액\nUNION ALL\nSELECT *\nFROM TAB1 FULL OUTER JOIN TAB2\nON TAB1.주문금액\nBETWEEN TAB2.최저금액\nAND TAB2.최고금액;"
      }
    ],
    "o": [
      "22",
      "23",
      "24",
      "25"
    ],
    "a": 3,
    "e": "CROSS JOIN 4×4 = 16. INNER JOIN: 홍길동-일반, 이순신-프리미엄, 김유신-VIP = 3. FULL OUTER JOIN: 3 + 장보고(짝 없음) 1 + VVIP(짝 없음) 1 = 5. 합계 16 + 3 + 5 = 24."
  },
  {
    "n": 23,
    "s": 2,
    "topic": "조인",
    "q": "SQL의 실행 결과가 아래와 같을 때 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "code": "TBL1: {1, 2}\nTBL2: {7, 8, 9}\n\n결과: {{1, 7}, {1, 8}, {1, 9}, {2, 7}, {2, 8},\n       {2, 9}}"
      },
      {
        "code": "SELECT *\nFROM TBL1 [    ㉠    ] TBL2;"
      }
    ],
    "o": [
      {
        "code": "NATURAL JOIN"
      },
      {
        "code": "CROSS JOIN"
      },
      {
        "code": "INNER JOIN"
      },
      {
        "code": "LEFT OUTER JOIN"
      }
    ],
    "a": 2,
    "e": "모든 조합(2×3 = 6건)이 나오는 카티션 곱이므로 CROSS JOIN입니다."
  },
  {
    "n": 24,
    "s": 2,
    "topic": "조인",
    "q": "아래 테이블을 참고할 때 SQL의 실행 결과가 <u>다른</u> 하나는?",
    "b": [
      {
        "code": "CREATE TABLE R1 (\n  VAL VARCHAR2(10)\n);\n\nCREATE TABLE R2 (\n  VAL VARCHAR2(10)\n);\n\nINSERT INTO R1 VALUES ('X');\nINSERT INTO R1 VALUES ('Y');\nINSERT INTO R1 VALUES (NULL);\n\nINSERT INTO R2 VALUES ('X');\nINSERT INTO R2 VALUES ('X');\nINSERT INTO R2 VALUES ('Z');"
      }
    ],
    "o": [
      {
        "code": "SELECT *\nFROM R1\nWHERE VAL IN (SELECT VAL FROM R2);"
      },
      {
        "code": "SELECT *\nFROM R1 NATURAL JOIN R2;"
      },
      {
        "code": "SELECT *\nFROM R1 INNER JOIN R2 USING (VAL);"
      },
      {
        "code": "SELECT *\nFROM R1 JOIN R2 USING (VAL);"
      }
    ],
    "a": 1,
    "e": "IN 서브쿼리는 R1의 행을 기준으로 존재 여부만 보므로 X 1건. 조인(②③④)은 R2의 X 2건과 각각 결합해 X가 2건 나옵니다."
  },
  {
    "n": 25,
    "s": 2,
    "topic": "DDL",
    "q": "아래 SQL을 실행할 때 오류가 발생하는 것의 개수로 가장 적절한 것은?",
    "b": [
      {
        "code": "CREATE TABLE SALES (\n  ITM VARCHAR2(10),\n  AMT NUMBER\n);\n\nINSERT INTO SALES VALUES ('A', 100);\nINSERT INTO SALES VALUES ('B', 100);\nINSERT INTO SALES VALUES ('B', 200);\n\nCREATE VIEW SALE_SUM AS\nSELECT ITM, SUM(AMT) AS TOT\nFROM SALES\nGROUP BY ITM;\n\n(가) SELECT *\n     FROM SALES WHERE ITM = 'Z';\n(나) INSERT INTO\n     SALES VALUES ('Z', 300);\n(다) INSERT INTO\n     SALE_SUM VALUES ('A', 100);\n(라) SELECT SALES.ITM, SALE_SUM.TOT\n     FROM SALES, SALE_SUM\n     WHERE SALES.AMT = SALE_SUM.TOT;"
      }
    ],
    "o": [
      "1개",
      "2개",
      "3개",
      "4개"
    ],
    "a": 1,
    "e": "(다)만 오류입니다. GROUP BY·집계 함수로 만든 뷰에는 INSERT할 수 없습니다. (가)는 0건 조회, (나)는 정상 삽입, (라)는 정상 조인입니다."
  },
  {
    "n": 26,
    "s": 2,
    "topic": "집합 연산자",
    "q": "학과가 'MATH'이면서 직급이 'PROFESSOR'가 아닌 교직원을 조회하려고 할 때, SQL의 빈칸 ㉠에 들어갈 내용으로 가장 적절한 것은?",
    "b": [
      {
        "code": "SELECT PID, PNAME, DEPT, TITLE, SAL\nFROM PROF\nWHERE DEPT = 'MATH'\n[    ㉠    ]\nSELECT PID, PNAME, DEPT, TITLE, SAL\nFROM PROF\nWHERE TITLE = 'PROFESSOR';"
      }
    ],
    "o": [
      {
        "code": "INTERSECT"
      },
      {
        "code": "UNION"
      },
      {
        "code": "UNION ALL"
      },
      {
        "code": "MINUS"
      }
    ],
    "a": 4,
    "e": "MATH 교직원 집합에서 PROFESSOR 집합을 빼는 차집합이므로 MINUS입니다."
  },
  {
    "n": 27,
    "s": 2,
    "topic": "서브쿼리",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "T1",
        "table": {
          "h": [
            "C",
            "D",
            "X",
            "Y"
          ],
          "r": [
            [
              "1",
              "10",
              "a",
              "N"
            ],
            [
              "2",
              "10",
              "b",
              "Y"
            ],
            [
              "3",
              "30",
              "c",
              "N"
            ],
            [
              "4",
              "30",
              "c",
              "N"
            ],
            [
              "5",
              "50",
              "d",
              "X"
            ],
            [
              "6",
              "NULL",
              "e",
              "N"
            ]
          ]
        }
      },
      {
        "title": "T2",
        "table": {
          "h": [
            "D",
            "E"
          ],
          "r": [
            [
              "10",
              "e"
            ],
            [
              "20",
              "x"
            ],
            [
              "30",
              "E"
            ],
            [
              "NULL",
              "E"
            ],
            [
              "50",
              "E"
            ],
            [
              "40",
              "NULL"
            ]
          ]
        }
      },
      {
        "code": "SELECT COUNT(DISTINCT C)\nFROM T1\nWHERE D IN (\n  SELECT D\n  FROM T2\n  WHERE UPPER(E) = 'E'\n        AND D IS NOT NULL\n);"
      }
    ],
    "o": [
      "4",
      "5",
      "6",
      "7"
    ],
    "a": 2,
    "e": "서브쿼리 결과 D = {10, 30, 50}. T1에서 D가 이 값인 C는 1, 2, 3, 4, 5 → 5개. (D가 NULL인 C=6은 IN에 걸리지 않음)"
  },
  {
    "n": 28,
    "s": 2,
    "topic": "조인",
    "q": "아래 테이블을 참고할 때 SQL의 실행 결과가 <u>다른</u> 하나는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "title": "학생",
        "table": {
          "h": [
            "학번",
            "이름"
          ],
          "r": [
            [
              "S1",
              "홍길동"
            ],
            [
              "S2",
              "김철수"
            ],
            [
              "S3",
              "이영희"
            ],
            [
              "S4",
              "박민수"
            ],
            [
              "S5",
              "최지우"
            ]
          ]
        }
      },
      {
        "title": "성적",
        "table": {
          "h": [
            "시험번호",
            "학번",
            "점수"
          ],
          "r": [
            [
              "T1",
              "S1",
              "80"
            ],
            [
              "T2",
              "S1",
              "90"
            ],
            [
              "T3",
              "S2",
              "70"
            ],
            [
              "T4",
              "S2",
              "85"
            ],
            [
              "T5",
              "S4",
              "100"
            ],
            [
              "T6",
              "S5",
              "60"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT S.학번, S.이름,\n       (SELECT NVL(SUM(G.점수), 0)\n        FROM 성적 G\n        WHERE G.학번 = S.학번) AS 총점\nFROM 학생 S\nORDER BY S.학번;"
      },
      {
        "code": "SELECT S.학번,\n       (SELECT 이름\n        FROM 학생\n        WHERE 학번 = S.학번) AS 이름,\n       (SELECT NVL(SUM(점수), 0)\n        FROM 성적\n        WHERE 학번 = S.학번) AS 총점\nFROM 학생 S\nORDER BY S.학번;"
      },
      {
        "code": "SELECT S.학번, S.이름,\n       SUM(G.점수) AS 총점\nFROM 학생 S\nJOIN 성적 G ON S.학번 = G.학번\nWHERE S.학번 IN (SELECT 학번 FROM 성적)\nGROUP BY S.학번, S.이름\nORDER BY S.학번;"
      },
      {
        "code": "SELECT S.학번, S.이름,\n       NVL(SUM(G.점수), 0) AS 총점\nFROM 학생 S\nLEFT JOIN 성적 G ON S.학번 = G.학번\nGROUP BY S.학번, S.이름\nORDER BY S.학번;"
      }
    ],
    "a": 3,
    "e": "①②④는 성적이 없는 S3(이영희)도 총점 0으로 5명 모두 나옵니다. ③은 INNER JOIN이라 S3가 빠져 4명만 나옵니다."
  },
  {
    "n": 29,
    "s": 2,
    "topic": "집합 연산자",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "TBL1",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "A",
              "NULL"
            ],
            [
              "A",
              "100"
            ],
            [
              "B",
              "100"
            ],
            [
              "B",
              "150"
            ],
            [
              "C",
              "200"
            ],
            [
              "C",
              "NULL"
            ]
          ]
        }
      },
      {
        "title": "TBL2",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "A",
              "NULL"
            ],
            [
              "B",
              "100"
            ],
            [
              "B",
              "200"
            ],
            [
              "C",
              "100"
            ],
            [
              "D",
              "NULL"
            ],
            [
              "E",
              "300"
            ]
          ]
        }
      },
      {
        "title": "TBL3",
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "A",
              "NULL"
            ],
            [
              "B",
              "200"
            ],
            [
              "C",
              "100"
            ],
            [
              "C",
              "NULL"
            ],
            [
              "E",
              "300"
            ],
            [
              "F",
              "200"
            ]
          ]
        }
      },
      {
        "code": "SELECT COL1, COL2\nFROM TBL1\nUNION ALL\nSELECT COL1, COL2\nFROM TBL2\nMINUS\nSELECT COL1, COL2\nFROM TBL3;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "COL1",
            "COL2"
          ],
          "r": [
            [
              "A",
              "NULL"
            ],
            [
              "A",
              "100"
            ],
            [
              "B",
              "100"
            ],
            [
              "B",
              "150"
            ],
            [
              "C",
              "200"
            ],
            [
              "C",
              "NULL"
            ]
          ]
        }
      },
      {
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
              "100"
            ],
            [
              "B",
              "150"
            ],
            [
              "C",
              "200"
            ],
            [
              "D",
              "NULL"
            ]
          ]
        }
      },
      {
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
              "100"
            ],
            [
              "B",
              "150"
            ],
            [
              "C",
              "100"
            ],
            [
              "C",
              "200"
            ],
            [
              "D",
              "NULL"
            ]
          ]
        }
      },
      {
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
              "100"
            ],
            [
              "B",
              "150"
            ],
            [
              "C",
              "200"
            ],
            [
              "E",
              "300"
            ]
          ]
        }
      }
    ],
    "a": 2,
    "e": "집합 연산자는 위에서부터 차례로 처리합니다. (TBL1 UNION ALL TBL2) MINUS TBL3. MINUS는 중복을 제거하고, 집합 연산에서 NULL끼리는 같은 값으로 봅니다. 남는 행: (A,100), (B,100), (B,150), (C,200), (D,NULL)."
  },
  {
    "n": 30,
    "s": 2,
    "topic": "그룹 함수",
    "q": "집계 함수에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "집계 함수는 여러 행을 대상으로 계산을 수행하며, 이때 NULL 값은 기본적으로 제외하고 처리된다.",
      "집계 함수는 HAVING 절에서 그룹별 조건을 지정할 때 사용할 수 있다.",
      "COUNT(*)는 테이블의 모든 행을 대상으로 하며, 일부 칼럼이 NULL이어도 행은 집계 대상에 포함된다.",
      "집계 함수는 WHERE 절에서 직접 사용할 수 있다."
    ],
    "a": 4,
    "e": "집계 함수는 WHERE 절에 쓸 수 없습니다. 그룹 조건은 HAVING 절에 씁니다."
  },
  {
    "n": 31,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 실행 결과를 출력하는 SQL로 가장 적절한 것은?",
    "b": [
      {
        "title": "대출현황",
        "table": {
          "h": [
            "도서코드",
            "대출월",
            "지점",
            "대출수"
          ],
          "r": [
            [
              "B001",
              "202401",
              "중앙",
              "30"
            ],
            [
              "B001",
              "202401",
              "분관",
              "45"
            ],
            [
              "B001",
              "202402",
              "중앙",
              "40"
            ],
            [
              "B001",
              "202402",
              "분관",
              "35"
            ],
            [
              "B002",
              "202401",
              "중앙",
              "20"
            ],
            [
              "B002",
              "202401",
              "분관",
              "25"
            ],
            [
              "B002",
              "202402",
              "중앙",
              "22"
            ],
            [
              "B002",
              "202402",
              "분관",
              "28"
            ]
          ]
        }
      },
      {
        "title": "실행 결과",
        "table": {
          "h": [
            "도서코드",
            "대출월",
            "지점",
            "대출수"
          ],
          "r": [
            [
              "B001",
              "202401",
              "중앙",
              "30"
            ],
            [
              "B001",
              "202401",
              "분관",
              "45"
            ],
            [
              "B001",
              "202401",
              "NULL",
              "75"
            ],
            [
              "B001",
              "202402",
              "중앙",
              "40"
            ],
            [
              "B001",
              "202402",
              "분관",
              "35"
            ],
            [
              "B001",
              "202402",
              "NULL",
              "75"
            ],
            [
              "B002",
              "202401",
              "중앙",
              "20"
            ],
            [
              "B002",
              "202401",
              "분관",
              "25"
            ],
            [
              "B002",
              "202401",
              "NULL",
              "45"
            ],
            [
              "B002",
              "202402",
              "중앙",
              "22"
            ],
            [
              "B002",
              "202402",
              "분관",
              "28"
            ],
            [
              "B002",
              "202402",
              "NULL",
              "50"
            ]
          ]
        }
      }
    ],
    "o": [
      {
        "code": "SELECT 도서코드, 대출월, 지점,\n       SUM(대출수) AS 대출수\nFROM 대출현황\nGROUP BY 도서코드, 대출월, CUBE (지점);"
      },
      {
        "code": "SELECT 도서코드, 대출월, 지점,\n       SUM(대출수) AS 대출수\nFROM 대출현황\nGROUP BY CUBE (도서코드, 대출월, 지점);"
      },
      {
        "code": "SELECT 도서코드, 대출월, 지점,\n       SUM(대출수) AS 대출수\nFROM 대출현황\nGROUP BY ROLLUP (도서코드, 지점), 대출월;"
      },
      {
        "code": "SELECT 도서코드, 대출월, 지점,\n       SUM(대출수) AS 대출수\nFROM 대출현황\nGROUP BY ROLLUP (도서코드, 대출월, 지점);"
      }
    ],
    "a": 1,
    "e": "결과는 (도서코드, 대출월, 지점)별 행과 (도서코드, 대출월)별 소계만 있습니다. 도서코드·대출월은 항상 묶고 지점만 소계를 내는 GROUP BY 도서코드, 대출월, CUBE(지점)입니다. ②④는 총계 등 추가 행이 생기고, ③은 대출월만으로 묶인 행이 생깁니다."
  },
  {
    "n": 32,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "PRODUCT",
        "table": {
          "h": [
            "PNAME"
          ],
          "r": [
            [
              "TV"
            ],
            [
              "PC"
            ],
            [
              "PHONE"
            ],
            [
              "DESK"
            ]
          ]
        }
      },
      {
        "code": "SELECT COUNT(*) CNT\nFROM PRODUCT\nHAVING COUNT(*) > 4;"
      }
    ],
    "o": [
      "0",
      "1",
      "오류가 발생한다.",
      "공집합"
    ],
    "a": 4,
    "e": "GROUP BY 없이 HAVING을 쓰면 테이블 전체를 한 그룹으로 봅니다. COUNT(*) = 4라 조건(> 4)을 만족하지 않아 행이 하나도 나오지 않습니다(공집합)."
  },
  {
    "n": 33,
    "s": 2,
    "topic": "서브쿼리",
    "q": "아래 SQL에 대한 설명으로 가장 적절한 것은?",
    "b": [
      {
        "box": "[테이블]\n학생(<u>학번</u>, 이름, 학년, 장학금, 전공)\n강좌(<u>강좌코드</u>, 강좌명)\n수강(<u>학번</u>, <u>강좌코드</u>)\n* 수강 테이블의 학번과 강좌코드는 각각 학생 테이블과 강좌 테이블을 참조하는 외래 키이다."
      },
      {
        "code": "WITH X AS (\n  SELECT C.강좌코드,\n         C.강좌명,\n         SUM(S.장학금) AS 총장학금\n  FROM 강좌 C\n  JOIN 수강 E ON C.강좌코드 = E.강좌코드\n  JOIN 학생 S ON S.학번 = E.학번\n  GROUP BY C.강좌코드, C.강좌명\n)\nSELECT X1.강좌코드, X1.강좌명, X1.총장학금\nFROM   X X1\nWHERE  X1.총장학금 = (\n         SELECT MAX(총장학금) FROM X);"
      }
    ],
    "o": [
      "각 강좌를 수강하는 학생들의 장학금 총합이 가장 큰 강좌를 반환한다.",
      "각 강좌의 평균 장학금이 가장 높은 강좌를 반환한다.",
      "모든 학생 중 장학금이 가장 큰 학생이 수강하는 강좌를 반환한다.",
      "각 강좌의 수강 인원수가 가장 많은 강좌를 반환한다."
    ],
    "a": 1,
    "e": "WITH 절 X는 강좌별 수강생 장학금 합계(SUM)이고, 그중 최댓값과 같은 강좌를 조회합니다."
  },
  {
    "n": 34,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "SALES",
        "table": {
          "h": [
            "STORE",
            "CATEGORY",
            "AMOUNT"
          ],
          "r": [
            [
              "S1",
              "A",
              "100"
            ],
            [
              "S1",
              "A",
              "150"
            ],
            [
              "S1",
              "B",
              "200"
            ],
            [
              "S2",
              "A",
              "50"
            ],
            [
              "S2",
              "B",
              "NULL"
            ],
            [
              "S3",
              "B",
              "300"
            ]
          ]
        }
      },
      {
        "code": "SELECT STORE,\n       CATEGORY,\n       SUM(AMOUNT) AS TOTAL\nFROM SALES\nGROUP BY ROLLUP (STORE, CATEGORY)\nHAVING GROUPING(STORE)\n       + GROUPING(CATEGORY) != 1;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "STORE",
            "CATEGORY",
            "TOTAL"
          ],
          "r": [
            [
              "S1",
              "A",
              "250"
            ],
            [
              "S1",
              "B",
              "200"
            ],
            [
              "S2",
              "A",
              "50"
            ],
            [
              "S2",
              "B",
              "0"
            ],
            [
              "S3",
              "B",
              "300"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "STORE",
            "CATEGORY",
            "TOTAL"
          ],
          "r": [
            [
              "S1",
              "NULL",
              "450"
            ],
            [
              "S2",
              "NULL",
              "50"
            ],
            [
              "S3",
              "NULL",
              "300"
            ],
            [
              "NULL",
              "NULL",
              "800"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "STORE",
            "CATEGORY",
            "TOTAL"
          ],
          "r": [
            [
              "S1",
              "A",
              "250"
            ],
            [
              "S1",
              "B",
              "200"
            ],
            [
              "S2",
              "A",
              "50"
            ],
            [
              "S2",
              "B",
              "NULL"
            ],
            [
              "S3",
              "B",
              "300"
            ],
            [
              "NULL",
              "NULL",
              "800"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "STORE",
            "CATEGORY",
            "TOTAL"
          ],
          "r": [
            [
              "S1",
              "NULL",
              "450"
            ],
            [
              "S2",
              "NULL",
              "50"
            ],
            [
              "S3",
              "NULL",
              "300"
            ]
          ]
        }
      }
    ],
    "a": 3,
    "e": "GROUPING 합: 상세 행 = 0, STORE별 소계 = 1, 총계 = 2. != 1이므로 소계만 빠지고 상세 행과 총계가 남습니다. S2/B는 값이 NULL뿐이라 SUM도 NULL입니다."
  },
  {
    "n": 35,
    "s": 2,
    "topic": "GROUP BY, HAVING 절",
    "q": "GROUPING SETS에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "GROUPING SETS의 결과를 정렬하려면 ORDER BY 절을 사용해야 한다.",
      "GROUPING SETS는 여러 GROUP BY 결과를 합친 것과 동일한 집계 효과를 제공한다.",
      "GROUPING SETS는 인수의 나열 순서에 따라 결과가 자동으로 정렬된다.",
      "GROUPING SETS는 ROLLUP이나 CUBE와 함께 사용할 수 있다."
    ],
    "a": 3,
    "e": "GROUPING SETS는 인수 순서와 관계없이 결과가 같고, 자동 정렬되지 않습니다. 정렬이 필요하면 ORDER BY를 씁니다."
  },
  {
    "n": 36,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "사원",
        "table": {
          "h": [
            "부서",
            "이름",
            "연봉"
          ],
          "r": [
            [
              "A",
              "김철수",
              "5000"
            ],
            [
              "A",
              "박영희",
              "3000"
            ],
            [
              "B",
              "최민수",
              "7000"
            ],
            [
              "B",
              "정하나",
              "6000"
            ],
            [
              "C",
              "오지훈",
              "4000"
            ],
            [
              "C",
              "유미나",
              "2000"
            ]
          ]
        }
      },
      {
        "code": "SELECT 부서, 이름, COL2, COL3\nFROM (\n  SELECT 부서, 이름, 연봉,\n         ROW_NUMBER() OVER (\n           PARTITION BY 부서\n           ORDER BY 연봉 DESC\n         ) AS COL1,\n         SUM(연봉) OVER (\n           PARTITION BY 부서\n           ORDER BY 연봉 DESC\n           RANGE BETWEEN\n           UNBOUNDED PRECEDING\n           AND CURRENT ROW\n         ) AS COL2,\n         MAX(연봉) OVER (\n           ORDER BY 부서, 연봉 DESC\n           ROWS BETWEEN\n           UNBOUNDED PRECEDING\n           AND CURRENT ROW\n         ) AS COL3\n  FROM 사원\n)\nWHERE COL1 = 2\nORDER BY 1;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "부서",
            "이름",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "A",
              "박영희",
              "8000",
              "5000"
            ],
            [
              "B",
              "정하나",
              "13000",
              "7000"
            ],
            [
              "C",
              "유미나",
              "6000",
              "7000"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "부서",
            "이름",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "A",
              "김철수",
              "5000",
              "3000"
            ],
            [
              "B",
              "최민수",
              "7000",
              "6000"
            ],
            [
              "C",
              "오지훈",
              "4000",
              "2000"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "부서",
            "이름",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "A",
              "박영희",
              "8000",
              "7000"
            ],
            [
              "B",
              "정하나",
              "13000",
              "7000"
            ],
            [
              "C",
              "유미나",
              "6000",
              "7000"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "부서",
            "이름",
            "COL2",
            "COL3"
          ],
          "r": [
            [
              "A",
              "김철수",
              "5000",
              "5000"
            ],
            [
              "B",
              "최민수",
              "7000",
              "7000"
            ],
            [
              "C",
              "오지훈",
              "4000",
              "7000"
            ]
          ]
        }
      }
    ],
    "a": 1,
    "e": "COL1 = 2는 부서별 연봉 2위(박영희, 정하나, 유미나). COL2는 부서 내 누적합(8000, 13000, 6000). COL3는 전체를 (부서, 연봉 DESC) 순으로 본 누적 최댓값으로, 박영희 시점 5000, 정하나 시점 7000, 유미나 시점 7000입니다."
  },
  {
    "n": 37,
    "s": 2,
    "topic": "DML",
    "q": "데이터 조작어에 해당하지 <u>않는</u> 명령어는?",
    "o": [
      "INSERT",
      "CREATE",
      "UPDATE",
      "DELETE"
    ],
    "a": 2,
    "e": "CREATE는 데이터 정의어(DDL)입니다."
  },
  {
    "n": 38,
    "s": 2,
    "topic": "윈도우 함수",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "title": "TBL",
        "table": {
          "h": [
            "NO"
          ],
          "r": [
            [
              "10"
            ],
            [
              "20"
            ],
            [
              "30"
            ],
            [
              "40"
            ],
            [
              "50"
            ],
            [
              "60"
            ]
          ]
        }
      },
      {
        "code": "SELECT GROUP_NO,\n       MIN(NO) AS MIN_NO,\n       MAX(NO) AS MAX_NO\nFROM (\n  SELECT NO,\n         NTILE(3) OVER (ORDER BY NO)\n         AS GROUP_NO\n  FROM TBL\n) X\nGROUP BY GROUP_NO\nORDER BY GROUP_NO;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "GROUP_NO",
            "MIN_NO",
            "MAX_NO"
          ],
          "r": [
            [
              "1",
              "10",
              "30"
            ],
            [
              "2",
              "30",
              "50"
            ],
            [
              "3",
              "50",
              "60"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "GROUP_NO",
            "MIN_NO",
            "MAX_NO"
          ],
          "r": [
            [
              "1",
              "10",
              "40"
            ],
            [
              "2",
              "30",
              "50"
            ],
            [
              "3",
              "50",
              "60"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "GROUP_NO",
            "MIN_NO",
            "MAX_NO"
          ],
          "r": [
            [
              "1",
              "20",
              "20"
            ],
            [
              "2",
              "40",
              "40"
            ],
            [
              "3",
              "60",
              "60"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "GROUP_NO",
            "MIN_NO",
            "MAX_NO"
          ],
          "r": [
            [
              "1",
              "10",
              "20"
            ],
            [
              "2",
              "30",
              "40"
            ],
            [
              "3",
              "50",
              "60"
            ]
          ]
        }
      }
    ],
    "a": 4,
    "e": "6행을 NTILE(3)으로 나누면 2행씩: (10, 20), (30, 40), (50, 60)."
  },
  {
    "n": 39,
    "s": 2,
    "topic": "계층형 질의와 셀프 조인",
    "q": "아래 SQL의 실행 결과는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "SELECT COUNT(*)\nFROM DUAL\nSTART WITH LEVEL = 3\nCONNECT BY LEVEL <= 4;"
      }
    ],
    "o": [
      "0",
      "1",
      "2",
      "공집합"
    ],
    "a": 1,
    "e": "START WITH 시점의 LEVEL은 1이므로 LEVEL = 3인 시작 행이 없습니다. 조회 행이 없어도 COUNT(*)는 0 한 행을 반환합니다."
  },
  {
    "n": 40,
    "s": 2,
    "topic": "PIVOT 절과 UNPIVOT 절",
    "q": "아래 SQL의 실행 결과는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "title": "RECORDS",
        "table": {
          "h": [
            "DEPT",
            "MON",
            "CNT"
          ],
          "r": [
            [
              "Sales",
              "Apr",
              "10"
            ],
            [
              "Sales",
              "May",
              "NULL"
            ],
            [
              "Sales",
              "Jun",
              "15"
            ],
            [
              "HR",
              "Apr",
              "NULL"
            ],
            [
              "HR",
              "May",
              "8"
            ],
            [
              "HR",
              "Jun",
              "NULL"
            ],
            [
              "RnD",
              "Apr",
              "5"
            ],
            [
              "RnD",
              "May",
              "6"
            ],
            [
              "RnD",
              "Jun",
              "7"
            ]
          ]
        }
      },
      {
        "code": "SELECT DEPT, APR, MAY, JUN\nFROM   (\n         SELECT DEPT, MON, CNT\n         FROM RECORDS\n       )\nPIVOT  (\n         SUM(CNT)\n         FOR MON IN (\n           'Apr' AS APR,\n           'May' AS MAY,\n           'Jun' AS JUN\n         )\n       )\nORDER BY DEPT;"
      }
    ],
    "o": [
      {
        "table": {
          "h": [
            "DEPT",
            "APR",
            "MAY",
            "JUN"
          ],
          "r": [
            [
              "HR",
              "0",
              "8",
              "0"
            ],
            [
              "RnD",
              "5",
              "6",
              "7"
            ],
            [
              "Sales",
              "10",
              "0",
              "15"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "DEPT",
            "APR",
            "MAY",
            "JUN"
          ],
          "r": [
            [
              "HR",
              "NULL",
              "8",
              "NULL"
            ],
            [
              "RnD",
              "5",
              "6",
              "7"
            ],
            [
              "Sales",
              "10",
              "NULL",
              "15"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "DEPT",
            "APR",
            "MAY",
            "JUN"
          ],
          "r": [
            [
              "HR",
              "NULL",
              "8",
              "NULL"
            ],
            [
              "RnD",
              "10",
              "NULL",
              "15"
            ],
            [
              "Sales",
              "5",
              "6",
              "7"
            ]
          ]
        }
      },
      {
        "table": {
          "h": [
            "DEPT",
            "APR",
            "MAY",
            "JUN"
          ],
          "r": [
            [
              "HR",
              "NULL",
              "NULL",
              "NULL"
            ],
            [
              "RnD",
              "5",
              "6",
              "NULL"
            ],
            [
              "Sales",
              "10",
              "NULL",
              "15"
            ]
          ]
        }
      }
    ],
    "a": 2,
    "e": "PIVOT은 DEPT별로 월을 칼럼으로 펼칩니다. NULL만 있는 칸의 SUM은 0이 아니라 NULL입니다."
  },
  {
    "n": 41,
    "s": 2,
    "topic": "정규 표현식",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "code": "SELECT REGEXP_INSTR('AB1CD2EF3GH',\n                    '[A-Z]{2}[0-9]', 1, 2)\nFROM DUAL;"
      }
    ],
    "o": [
      "1",
      "3",
      "4",
      "7"
    ],
    "a": 3,
    "e": "'영문 2자 + 숫자 1자' 패턴은 AB1(1번째 위치), CD2(4번째 위치), EF3… 순서로 나옵니다. 두 번째 일치(CD2)의 시작 위치는 4입니다."
  },
  {
    "n": 42,
    "s": 2,
    "topic": "정규 표현식",
    "q": "아래 SQL의 빈칸 ㉠에 들어갔을 때 실행 결과로 NULL이 출력되는 것은? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "SELECT\n  REGEXP_SUBSTR('[  ㉠  ]', '^\\D{2}\\d{3}$')\nFROM DUAL;"
      }
    ],
    "o": [
      {
        "code": "AB012"
      },
      {
        "code": "9X123"
      },
      {
        "code": "_A999"
      },
      {
        "code": "Z-787"
      }
    ],
    "a": 2,
    "e": "패턴은 '숫자가 아닌 문자 2개 + 숫자 3개'로 문자열 전체가 이루어져야 합니다. '9X123'은 첫 글자가 숫자라 일치하지 않아 NULL입니다. '_', '-'도 숫자가 아닌 문자라 ③④는 일치합니다."
  },
  {
    "n": 43,
    "s": 2,
    "topic": "SELECT 문",
    "q": "아래 SQL의 실행 결과는? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "SELECT '''X''Y''' AS R1\nFROM DUAL;"
      }
    ],
    "o": [
      {
        "code": "X'Y"
      },
      {
        "code": "'X'Y'"
      },
      {
        "code": "'X''Y'"
      },
      {
        "code": "''X'Y''"
      }
    ],
    "a": 2,
    "e": "문자열 안에서 작은따옴표 두 개('')는 작은따옴표 한 개를 뜻합니다. 바깥 따옴표를 빼고 '' → ' 로 바꾸면 'X'Y' 입니다."
  },
  {
    "n": 44,
    "s": 2,
    "topic": "DDL",
    "q": "아래 SQL에 대한 설명으로 가장 적절한 것은? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "DROP TABLE T1 CASCADE CONSTRAINTS;"
      }
    ],
    "o": [
      "T1 테이블의 데이터만 모두 삭제되고, 테이블 구조는 남는다.",
      "T1 테이블과 T1 테이블을 참조하는 자식 테이블이 함께 삭제된다.",
      "T1 테이블과 T1 테이블의 부모 테이블이 함께 삭제된다.",
      "T1 테이블과 T1 테이블을 참조하는 외래 키 제약 조건이 함께 삭제된다."
    ],
    "a": 4,
    "e": "CASCADE CONSTRAINTS는 T1을 참조하던 다른 테이블의 외래 키 제약 조건까지 함께 삭제합니다. 다른 테이블 자체는 삭제되지 않습니다."
  },
  {
    "n": 45,
    "s": 2,
    "topic": "계층형 질의와 셀프 조인",
    "q": "아래 SQL에 대한 설명으로 가장 적절하지 <u>않은</u> 것은? (단, DBMS는 오라클로 가정함)",
    "b": [
      {
        "code": "SELECT 과목코드, 과목명\nFROM 과목\nWHERE 과목코드 NOT IN (700,800)\nSTART WITH 상위과목코드 IS NULL\nCONNECT BY 상위과목코드 = PRIOR 과목코드;"
      }
    ],
    "o": [
      "상위과목에서 하위과목으로 전개되는 순방향 계층형 질의이다.",
      "동일한 계층 구조는 재귀적 CTE(Common Table Expression)로도 구현할 수 있다.",
      "무한 루프를 방지하기 위해 CONNECT BY NOCYCLE 옵션을 지정할 수 있다.",
      "상위과목코드가 NULL이면서 과목코드가 700 또는 800인 경우 전개가 중단된다."
    ],
    "a": 4,
    "e": "WHERE 절은 계층 전개가 끝난 뒤 결과에서 해당 행만 제외합니다. 700, 800 행이 출력되지 않을 뿐 그 하위 과목은 계속 전개됩니다."
  },
  {
    "n": 46,
    "s": 2,
    "topic": "TCL",
    "q": "아래 SQL의 실행 결과는?",
    "b": [
      {
        "code": "CREATE TABLE T3 (NO NUMBER);\n\nINSERT INTO T3 VALUES (1);\nINSERT INTO T3 VALUES (2);\n\nSAVEPOINT SV;\n\nUPDATE T3 SET NO = 5 WHERE NO = 1;\n\nSAVEPOINT SV;\n\nINSERT INTO T3 VALUES (0);\n\nSAVEPOINT SV;\n\nDELETE FROM T3\nWHERE NO BETWEEN 2 AND 5;\n\nROLLBACK TO SV;\n\nUPDATE T3 SET NO = 1 WHERE NO = 0;\n\nDELETE FROM T3 WHERE NO = 2;\n\nINSERT INTO T3 VALUES (3);\n\nCOMMIT;\n\nSELECT MIN(NO) FROM T3;"
      }
    ],
    "o": [
      "0",
      "1",
      "3",
      "5"
    ],
    "a": 2,
    "e": "같은 이름의 SAVEPOINT는 마지막 것으로 덮어씁니다. ROLLBACK TO SV는 마지막 SV(5, 2, 0 상태)로 돌아갑니다. 이후 0→1, 2 삭제, 3 추가 → (5, 1, 3). MIN = 1."
  },
  {
    "n": 47,
    "s": 2,
    "topic": "DDL",
    "q": "제약 조건에 대한 설명으로 가장 적절하지 <u>않은</u> 것은?",
    "o": [
      "기본 키 제약을 정의하면 DBMS는 UNIQUE 인덱스를 만들며 기본 키 칼럼에는 NULL을 넣을 수 있다.",
      "UNIQUE 제약은 칼럼 값의 중복을 막지만 NULL은 허용된다.",
      "외래 키 제약은 다른 테이블의 기본 키나 UNIQUE 칼럼을 참조하여 무결성을 보장한다.",
      "CHECK 제약은 행 입력이나 수정 시 조건식이 TRUE인지 검사하여 데이터의 유효성을 제한한다."
    ],
    "a": 1,
    "e": "기본 키는 UNIQUE + NOT NULL이므로 NULL을 넣을 수 없습니다."
  },
  {
    "n": 48,
    "s": 2,
    "topic": "DCL",
    "q": "아래 SQL을 모두 실행할 경우, PRODUCT 테이블에 대한 DELETE 권한을 가지고 있는 사용자는?",
    "b": [
      {
        "code": "DBA: GRANT SELECT, INSERT, DELETE\n     ON PRODUCT TO A1;\nDBA: GRANT DELETE\n     ON PRODUCT TO A2\n     WITH GRANT OPTION;\nA2:  GRANT DELETE\n     ON PRODUCT TO A3;\nDBA: REVOKE DELETE\n     ON PRODUCT FROM A2 RESTRICT;"
      }
    ],
    "o": [
      "DBA, A1",
      "DBA, A1, A2",
      "DBA, A1, A3",
      "DBA, A1, A2, A3"
    ],
    "a": 4,
    "e": "RESTRICT는 회수할 권한이 다른 사용자에게 재부여되어 있으면 REVOKE를 실패시킵니다. A2가 A3에게 DELETE를 부여했으므로 회수되지 않아 DBA, A1, A2, A3 모두 권한을 가집니다."
  },
  {
    "n": 49,
    "s": 2,
    "topic": "DDL",
    "q": "아래 SQL에 대한 설명으로 가장 적절한 것은? (단, 매장ID는 매장 테이블의 기본 키이고, 상품ID는 상품 테이블의 기본 키임)",
    "b": [
      {
        "code": "CREATE TABLE 판매 (\n  영수증번호  VARCHAR2(20),\n  매장ID      NUMBER,\n  상품ID      NUMBER,\n  수량        NUMBER,\n  CONSTRAINT sale_pk\n    PRIMARY KEY (영수증번호, 매장ID),\n  CONSTRAINT sale_fk1\n    FOREIGN KEY (매장ID)\n    REFERENCES 매장(매장ID),\n  CONSTRAINT sale_fk2\n    FOREIGN KEY (상품ID)\n    REFERENCES 상품(상품ID)\n);"
      }
    ],
    "o": [
      "하나의 상품은 반드시 한 매장에서만 판매될 수 있다.",
      "한 매장에서는 동일한 상품을 여러 번 판매할 수 없다.",
      "동일한 영수증번호가 여러 매장에서 발생할 수 있다.",
      "수량 칼럼은 반드시 1 이상의 값을 가져야 한다."
    ],
    "a": 3,
    "e": "기본 키가 (영수증번호, 매장ID) 조합이므로 매장이 다르면 같은 영수증번호를 쓸 수 있습니다. ①② 상품ID에는 그런 제약이 없고, ④ 수량에는 CHECK 제약이 없습니다."
  },
  {
    "n": 50,
    "s": 2,
    "topic": "DML",
    "q": "아래 테이블에 대한 INSERT 구문 수행 시 오류가 발생하지 <u>않는</u> SQL은?",
    "b": [
      {
        "code": "CREATE TABLE STUDENT (\n  학번  NUMBER(3) PRIMARY KEY,\n  이름  VARCHAR2(10) NOT NULL,\n  학년  NUMBER(1) DEFAULT 1\n);\n\nINSERT INTO\nSTUDENT (학번, 이름) VALUES (101, 'Kim');\nINSERT INTO\nSTUDENT (학번, 이름) VALUES (102, 'Lee');"
      }
    ],
    "o": [
      {
        "code": "INSERT INTO STUDENT VALUES (102, 'Park', 2);"
      },
      {
        "code": "INSERT INTO STUDENT (학번) VALUES (103);"
      },
      {
        "code": "INSERT INTO STUDENT (학번, 학년)\nVALUES ('Hong', 2);"
      },
      {
        "code": "INSERT INTO STUDENT (학번, 이름, 학년)\nVALUES (103, 'Choi', 3);"
      }
    ],
    "a": 4,
    "e": "① 학번 102 중복(PK 위반). ② 이름이 NOT NULL인데 값이 없음. ③ 숫자 칼럼 학번에 'Hong' 입력 불가(이름도 누락). ④만 정상입니다."
  }
],
};

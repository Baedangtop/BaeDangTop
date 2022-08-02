export const result = [
  [
    {
      input: ["연배당률(현재)", "현재가", "요구수익률"],
      result: "A+B+C",
    },
    {
      input: ["배당금(또는 주당배당금)", "순이익(또는 주당순이익)"],
      result: "A/B",
    },
    {
      input: ["주당배당금", "기초주가"],
      result: "A/B",
    },
    {
      input: ["주당배당금", "기초주가"], // 고민
      result: "A/B",
    },
    {
      input: ["배당금", "주식수"],
      result: "A/B",
    },
  ],
  [
    {
      input: ["주가", "주당수익, EPS"],
      result: "A/B",
    },
    {
      input: ["주가", "주당장부가치"],
      result: "A/B",
    },
    {
      input: ["주가", "주당매출"],
      result: "A/B",
    },
    {
      input: ["액면가", "채권가격", "잔존만기(일수)"],
      result: "((A-B)/B)*(365/C)",
    },
    {
      input: ["연간배당금", "연간요구수익률"],
      result: "A/(B*0.01)",
    },
    {
      input: ["예상매출", "예상이익"],
      result: "A-(B*0.01)",
    },
    {
      input: ["기간당배당금", "(기간당)할인율"],
      result: "A/(B*0.01)",
    },
    {
      input: ["매도호가", "매수호가"],
      result: "A-B",
    },
    {
      input: ["시초가", "기말가"],
      result: "(B-A)/A",
    },
    {
      input: ["무위험이자율", "베타", "시장수익률"],
      result: "A+B*(C-A)",
    },
    {
      input: ["주주지분", "주식수"],
      result: "A/B",
    },
    {
      input: ["총자산", "주주지분"],
      result: "A/B",
    },
    {
      input: ["연이자", "현재채권가격"],
      result: "A/B",
    },
    {
      input: ["순이익", "주식수", "기타전환가능자산"],
      result: "A/(B+C)",
    },
  ],
];

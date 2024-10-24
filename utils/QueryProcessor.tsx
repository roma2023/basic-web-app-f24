export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "YOUR ANDREW ID SHOULD BE HERE RSAPARKH" );
  }

  if (query.toLowerCase().includes("name")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "romaaaaaaaaaa" );
  }

  if (query.toLowerCase().includes("plus")) {
    const parts = query.split(" ");
    return (parts[2] + parts[4]).toString();
  }

  "Which of the following numbers is the largest: 52, 23, 8?"
  if (query.toLowerCase().includes("largest")) {
    const parts = query.split(" ");
    const num1 = parts[8].split(",")[0];
    const num2 = parts[9].split(",")[0];
    const num3 = parts[10].split(",")[0];
    return (Math.max(parseInt(num1), parseInt(num2), parseInt(num3)).toString());
  }

  return "";
}

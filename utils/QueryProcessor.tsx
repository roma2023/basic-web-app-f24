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
    const num2 = parts[4].split("?")[0]
    return (parseInt(parts[2]) + parseInt(num2)).toString();
  }

  if (query.toLowerCase().includes("minus")) {
    const parts = query.split(" ");
    const num2 = parts[4].split("?")[0]
    return (parseInt(parts[2]) - parseInt(num2)).toString();
  }

  if (query.toLowerCase().includes("multiplied")) {
    const parts = query.split(" ");
    return (parseInt(parts[2]) * parseInt(parts[5])).toString();
  }

  "Which of the following numbers is the largest: 52, 23, 8?"
  if (query.toLowerCase().includes("largest")) {
    const parts = query.split(" ");
    const num1 = parts[8].split(",")[0];
    const num2 = parts[9].split(",")[0];
    const num3 = parts[10].split(",")[0];
    return (Math.max(parseInt(num1), parseInt(num2), parseInt(num3)).toString());
  }

  "Which of the following numbers is both a square and a cube: 64, 125, 1369, 4564, 1559, 2312, 3491?"

  if (query.toLowerCase().includes("square")) {
    const parts = query.split(" ");
    const num1 = parts[13].split(",")[0];
    const num2 = parts[14].split(",")[0];
    const num3 = parts[15].split(",")[0];
    const num4 = parts[16].split(",")[0];
    const num5 = parts[17].split(",")[0];
    const num6 = parts[18].split(",")[0];
    const num7 = parts[19].split("?")[0];
    
    for (let i = 0; i < 7; i++) {
      if (Math.sqrt(parseInt(num1)) % 1 === 0.0 && Math.cbrt(parseInt(num1)) % 1 === 0.0) {
        return (num1);
      }
      if (Math.sqrt(parseInt(num2)) % 1 === 0.0 && Math.cbrt(parseInt(num2)) % 1 === 0.0) {
        return (num2);
      }
      if (Math.sqrt(parseInt(num3)) % 1 === 0.0 && Math.cbrt(parseInt(num3)) % 1 === 0.0) {
        return (num3);
      }
      if (Math.sqrt(parseInt(num4)) % 1 === 0.0 && Math.cbrt(parseInt(num4)) % 1 === 0.0) {
        return (num4);
      }
      if (Math.sqrt(parseInt(num5)) % 1 === 0.0 && Math.cbrt(parseInt(num5)) % 1 === 0.0) {
        return (num5);
      }
      if (Math.sqrt(parseInt(num6)) % 1 === 0.0 && Math.cbrt(parseInt(num6)) % 1 === 0.0) {
        return (num6);
      }
      if (Math.sqrt(parseInt(num7)) % 1 === 0.0 && Math.cbrt(parseInt(num7)) % 1 === 0.0) {
        return (num7);
      }
    }
  }

  
  "Which of the following numbers are primes: 17, 69, 3, 56, 37?"
  if (query.toLowerCase().includes("primes")) {
    const parts = query.split(" ");
    const num1 = parts[7].split(",")[0];
    const num2 = parts[8].split(",")[0];
    const num3 = parts[9].split(",")[0];
    const num4 = parts[10].split(",")[0];
    const num5 = parts[11].split("?")[0];
    
    var isPrime = true
    for(let i = 2; i < parseInt(num1); i++) {
      if (parseInt(num1) % i === 0) {
        isPrime = false;
        break
      }
    }
    if (isPrime) {
      return (num1);
    }

    var isPrime = true
    for(let i = 2; i < parseInt(num2); i++) {
      if (parseInt(num2) % i === 0) {
        const isPrime = false;
        break
      }
    }
    if (isPrime) {
      return (num2);
    }
    var isPrime = true
    for(let i = 2; i < parseInt(num3); i++) {
      if (parseInt(num3) % i === 0) {
        const isPrime = false;
        break
      }
    }
    if (isPrime) {
      return (num3);
    }
    var isPrime = true
    for(let i = 2; i < parseInt(num4); i++) {
      if (parseInt(num4) % i === 0) {
        const isPrime = false;
        break
      }
    }
    if (isPrime) {
      return (num4);
    }
    
    var isPrime = true
    for(let i = 2; i < parseInt(num5); i++) {
      if (parseInt(num5) % i === 0) {
        const isPrime = false;
        break
      }
    }
    if (isPrime) {
      return (num5);
    }
  }
  
  return "";
}

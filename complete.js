function solution(S) {
    let found = S.includes('ba');
    if (found === true) {
        return false;
    }
    return true;
}

console.log(solution('baa'));

function solution(S) {
    let map = {};
    let count = 0;
    for (let char of S) {
        if (map[char]) {
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    } 
    for (let key in map) {
        if (map[key] % 2 == 1) {
            count += 1;
        }
    }
    return count;
}

console.log(solution('abacaba'));

function solution(S) {
    let reversed = S.split('').reverse().join('');
    if (S === reversed) {
        return true;
    }
    return false;
}

console.log(solution('daad'));

function solution(S) {
    let arr = S.split('');
    let newArr = [];

    while (arr.length > 0) {
        if (arr.length > 0) {
            let firstElement = arr.shift();
            newArr.push(firstElement);
        }
        if (arr.length > 0) {
            let lastElement = arr.pop();
            newArr.push(lastElement);
        }
    }

    return newArr.join('');
}

console.log(solution('130')); 

function solution(S) {
    let value = parseFloat(S);

    if (value < 35) {
        return 'hypothermia';
    }
    else if (value < 37.6) {
        return 'normal';
    }
    else if (value < 41) {
        return 'fever';
    }
    else {
        return 'hyperpyrexia';
    }
}

console.log(solution('35'));

function solution(X) {
    let sorted = X.sort((a, b) => a - b);
    let widest = -1;
    for (let i = 0; i < sorted.length - 1; i++) {
      let diff = sorted[i + 1] - sorted[i];
      widest = Math.max(widest, diff);
    }
    return widest; 
  }
  
  console.log(solution([3, 9, 7, 11, 3]));


function solution(A, B) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        if (obj[A[i]]) {
            obj[A[i]] += B[i];
        } else {
            obj[A[i]] = B[i];
        }
    }
    let max = 0;
    let countryCode = '';
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            countryCode = key;
        }
    }
    return countryCode.substring(0, 2);
}

console.log(solution(["CCOOOOOO", "BB00000", "DDOOOOOO"], [2, 7, 11]));

function solution(visits) {
    
    if (!visits || visits.length === 0) return 0;
  
    const dayMap = {
      "Mon": 0,
      "Tue": 1,
      "Wed": 2,
      "Thu": 3,
      "Fri": 4,
      "Sat": 5,
      "Sun": 6
    };
  
    let cards = 0;
    let prevDayValue = -1; 
    visits.forEach(visit => {
      let currentDayValue = dayMap[visit];
      if (prevDayValue === -1 || currentDayValue <= prevDayValue) {
        cards++;
      }
      prevDayValue = currentDayValue;
    });
  
    return cards;
  }
  
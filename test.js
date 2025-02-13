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
  
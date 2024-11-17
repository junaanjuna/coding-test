function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);
    
    const result = emergency.map(value => sorted.indexOf(value) + 1);
   
    return result;
}
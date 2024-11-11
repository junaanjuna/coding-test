function solution(age) {
    let answer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let str = String(age);
    let result = '';
    for(let i = 0; i < str.length; i++){
        result += answer[Number(str[i])];
    }
    return result;
}
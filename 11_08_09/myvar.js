// a 변수에 'hello a' 문자열을 내보냄
module.exports.a = 'hello a'

function student(){
    // js의 this는 java의 this와 반대
    
    // java this = 소유한것이 기준이 되어 같은 변수명을 정확하게 표현하기 위해 쓴다.
    // js this = 호출한 사람의 기준 부르자마자 기준이 된다.
    this.name = 'yydh'
    this.hello = 'welcome to yydh'
}

// 함수 내보내기
module.exports = student
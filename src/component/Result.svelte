<script>
    export let params = {}
    let resultType = params.resultType;

    const resultArr = {

        ESTJ: "사무실에서의 CEO, 단백질쉐이크 ",
        ESFJ: "친구들의 모국 여행 계획자, 밀푀유나베 ",
        ENFJ: "교회나 사회적 단체의 지도자 , 죽 ",
        ENTJ: "비즈니스 대표 , 스테이크 ",
        ISTJ: "기계공학자, 3분요리 ",
        ISFJ: "학교에서 엄마 역할을 하는 선생님, 된장찌개 ",
        INFJ: "심리 상담사, 국밥 ",
        INTJ: "과학자나 철학자, 하와이안피자 ",
        ESTP: "파티 호스트, 타코 ",
        ESFP: "연예인, 떡볶이 ",
        ENFP: "신뢰받는 선생님 , 치킨 ",
        ENTP: "TV 쇼 호스트, 파스타 ",
        ISTP: "메카닉, 제육볶음 ",
        ISFP: "예술가, 밥 ",
        INFP: "작가, 비빔밥 ",
        INTP: "프로그래머, 돈까스",

    }
    const resultObj = resultArr[resultType];
    const resultVals = resultObj.split(",");
    const resultJob = resultVals[0];
    const resultFood = resultVals[1];

</script>
<result>
    <h1 class="title">내 성격에 딱<br>어울리는 음식은?</h1>
    <h2>{resultJob} 같은 당신은 {resultFood}이 어울립니다!</h2>
    <a href="/">
        <div class="start-btn">
            다시하기
        </div>
    </a>
</result>
<style>
    .title {
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -.5px;
        line-height : 1.6;
    }
    .start-btn {
        background-color : #5950d6;
        width: 200px;
        display: inline-block;
        padding: 1.5em 1.5em 1.5em;
        margin-top: 10px;
        border-radius: 10px;
        color: #fff;
        font-weight: bold;
    }
</style>
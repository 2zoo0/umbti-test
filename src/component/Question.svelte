<script>
	const questionArr = [
		{"question" : "생각을 정리하고 자신의 내면과 깊이 있는 대화를 즐기는 편이냐"
		, "a1" : "즐긴다"
	    , "a2" : "아니다"
	    , "type" : "energy"},
		{"question" : "주말에 자신만의 시간을 갖는걸 더 선호하는지 친구들과 함께 보내는 시간을 더 선호하는지"
		, "a1" : "나만의 시간"
	    , "a2" : "친구만남"
	    , "type" : "energy"},
		{"question" : "주말에 계획을 세울때 외부적인 활동을 먼저 계획하는 편인가"
		, "a1" : "집에도 할게 많다"
	    , "a2" : "나가야된다"
	    , "type" : "energy"},
		
		{"question" : "결정을 내리기전 구체적인 정보와 사실을 살펴보냐 or 직관적인 느낌적인 요소를 더 중요시하냐 (쇼핑할때 리뷰보냐 내 맘에 들면 그만 )"
		, "a1" : "구체적인 정보와 사실"
	    , "a2" : "느낌적인 요소"
	    , "type" : "infomation"},
		{"question" : "자세한 설명없이 누군가 말을 했을 때 이해가 잘되냐"
		, "a1" : "상세설명 더 필요"
	    , "a2" : "추론가능"
	    , "type" : "infomation"},
		{"question" : "경험적이고 구체적인것에 의존하는것보다 직관적인 추론에 의존하는것을 더 좋아하냐"
		, "a1" : "경험"
	    , "a2" : "직관적인 추론"
	    , "type" : "infomation"},
		
		{"question" : "결정을 내릴때 자신의 감정에 우선순위를 두는 편인가요"
		, "a1" : "그렇다"
	    , "a2" : "아니다"
	    , "type" : "decisions"},
		{"question" : "감정적으로 힘들어지는 상황에서도 논리적으로 문제를 해결하려는 편인가요"
		, "a1" : "감정이 힘들면 안된다"
	    , "a2" : "논리가 중요하다"
	    , "type" : "decisions"},
		{"question" : "결정을 내릴 때 다른사람의 감정에도 고려하는편인가요"
		, "a1" : "그렇다"
	    , "a2" : "아니다"
	    , "type" : "decisions"},
		
		{"question" : "일상행활에서 갑자기 생각나는 일이 있을 때 그것을 처리하는 것이 편하다"
		, "a1" : "그렇다"
	    , "a2" : "계획이 먼저다"
	    , "type" : "lifestyle"},
		{"question" : "계획이 있더라도 일정에 얽매이지 않고 갑자기 친구들과 놀러가기를 결정하는 경우가 많은 편인가"
		, "a1" : "그렇다"
	    , "a2" : "아니다"
	    , "type" : "lifestyle"},
		{"question" : "계획이 바뀌었을때 스트레스를 받는편인가"
		, "a1" : "안 받는다"
	    , "a2" : "스트레스 받는다"
	    , "type" : "lifestyle"},
	];
	let score = {
		          energy : 0,
		          infomation : 0,
				  decisions : 0,
				  lifestyle : 0
				};

    let questionObj = questionArr.pop();		
	let questionTxt = questionObj.question;
	let aTxt1 = questionObj.a1;
	let aTxt2 = questionObj.a2;
	let type = questionObj.type;

	const fn_selection = (a) => {
		let answer = a.target.value;
		if (answer === 'a1') {
			score[type] = score[type] + 1;
		}
		if (questionArr.length > 0) {
			questionObj = questionArr.pop();		
			questionTxt = questionObj.question;
			aTxt1 = questionObj.a1;
			aTxt2 = questionObj.a2;
			type = questionObj.type;	
			console.log(score)
		} else {
			let energy    = score.energy     > 1 ? "I" : "E" ;
			let infomation= score.infomation > 1 ? "S" : "N" ;
			let decisions = score.decisions  > 1 ? "F" : "T" ;
			let lifestyle = score.lifestyle  > 1 ? "P" : "J" ; 

			let resultType = energy + infomation + decisions + lifestyle ;

			document.location.href = '#/result/'+resultType;
		}
	}

</script>

<question>
	<h1>질문?</h1>
	<p>{questionTxt}</p>
	<button on:click={fn_selection} value="a1">{aTxt1}</button>
	<button on:click={fn_selection} value="a2">{aTxt2}</button>


</question>

<style>
	question {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		question {
			max-width: none;
		}
	}
</style>
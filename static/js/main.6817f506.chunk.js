(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{107:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},136:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),o=(a(35),a(75),a(76),a(10)),i=a(149);function u(){return r.a.createElement(i.a,{size:"large"})}var l=a(29),m=a.n(l),d=a(59),h=(a(90),a(151));a(107);function w(e){var t=e.setIndex,a=e.setQuestionData,c=e.setViewed,s=e.setLoading,o=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s(!0),a({response_code:0,results:[{question:"Grand Central Terminal, Park Avenue, New York is the world's",correct_answer:"largest railway station",incorrect_answers:["highest railway station","longest railway station","None of the above"]},{question:"First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",correct_answer:"1967",incorrect_answers:["1968","1958","1922"]},{question:"Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",correct_answer:"Africa",incorrect_answers:["Asia","Europe","Australia"]},{question:"Garampani sanctuary is located at",correct_answer:"Diphu, Assam",incorrect_answers:["Kohima, Nagaland","Junagarh, Gujarat","Gangtok, Sikkim"]},{question:"Hitler party which came into power in 1933 is known as",correct_answer:"Nazi Party",incorrect_answers:["Labour Party","Ku-Klux-Klan","Democratic Party"]},{question:"Golf player Vijay Singh belongs to which country?",correct_answer:"Fiji",incorrect_answers:["USA","India","UK"]},{question:"Fastest shorthand writer was",correct_answer:"Dr. G. D. Bist",incorrect_answers:["J.R.D. Tata","J.M. Tagore","Khudada Khan"]},{question:"What does LTS stand for in the software market?",correct_answer:"Long Term Support",incorrect_answers:["Long Taco Service","Ludicrous Transfer Speed","Ludicrous Turbo Speed"]},{question:"This mobile OS held the largest market share in 2012.",correct_answer:"iOS",incorrect_answers:["Android","BlackBerry","Symbian"]},{question:"What does the computer software acronym JVM stand for?",correct_answer:"Java Virtual Machine",incorrect_answers:["Java Vendor Machine","Java Visual Machine","Just Virtual Machine"]}]}),s(!1)}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"title"},"Quiz"),r.a.createElement(h.a,{className:"toggle",onClick:function(e){e.preventDefault(),o(),c(!1),t(0)}},"Start"))}a(125);function f(e){var t=e.question,a=e.totalQuestions,n=e.index;return r.a.createElement("div",{className:"question"}," (".concat(n+1,"/ ").concat(a,")"),r.a.createElement("br",null),t)}a(126);function p(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(null),u=Object(o.a)(i,2),l=u[0],m=u[1],d=e.answers,w=e.index,f=e.setIndex,p=e.setResult,b=e.hintNum,v=e.setHintNum;console.log(w),Object(n.useEffect)((function(){d.correct_answer&&(s([d.correct_answer,d.incorrect_answers].flat()),m(d.correct_answer))}),[w]);var g,_=function(e){return e.sort((function(){return Math.random()-.5}))};return r.a.createElement("div",{className:"options"},_((g=c,Array.isArray(g)?g:[])).map((function(e,t){return r.a.createElement(E,{option:e,correctOption:l,index:w,setIndex:f,setResult:p,key:t})})),r.a.createElement("div",null,r.a.createElement(h.a,{onClick:function(){var e=Math.floor(Math.random()*d.incorrect_answers.length);c.length>2&&b>0?(s(_([d.correct_answer,d.incorrect_answers[e]])),v(b-1)):c.length<=2?alert("You can only remove once"):alert("You have used up all the tips")},style:{display:d.correct_answer?"block":"none"}},"Click ME to remove two incorrect answers ",r.a.createElement("br",null)," You have \xa0",r.a.createElement("span",{className:"hintNum"}," ",b," "),"\xa0 times")))}var E=Object(n.memo)((function(e){var t=e.option,a=e.correctOption,n=e.index,c=e.setIndex,s=e.setResult;return r.a.createElement(h.a,{onClick:function(){c(n+1),s(a===t)}},t)})),b=a(152),v=a(150);a(127);function g(e){var t=e.rightAnswer,a=e.setRightAnswer,n=e.totalQuestions,c=e.score,s=e.setGameOver,o=e.setViewed,i=e.setHintNum;return r.a.createElement("div",null,r.a.createElement(b.a,{icon:r.a.createElement(v.a,null),title:r.a.createElement("div",null,r.a.createElement("h1",null,"You got ",t," out of ",n," "),r.a.createElement("h2",null,"Your score: ","",100*c.toFixed(2))),extra:r.a.createElement(h.a,{className:"reStart",type:"primary",onClick:function(){o(!0),s(!1),a(0),i(2)}},"Restart")}))}a(136);var _=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!0),i=Object(o.a)(s,2),l=i[0],m=i[1],d=Object(n.useState)(!1),h=Object(o.a)(d,2),E=h[0],b=h[1],v=Object(n.useState)(null),_=Object(o.a)(v,2),y=_[0],O=_[1],j=Object(n.useState)(0),N=Object(o.a)(j,2),S=N[0],k=N[1],q=Object(n.useState)(2),x=Object(o.a)(q,2),A=x[0],M=x[1],J=Object(n.useState)(0),V=Object(o.a)(J,2),C=V[0],D=V[1],L=Object(n.useState)(!1),T=Object(o.a)(L,2),G=T[0],I=T[1],R=a.map((function(e){return[e.question]})),F=a.map((function(e){return{correct_answer:e.correct_answer,incorrect_answers:e.incorrect_answers}}));return Object(n.useEffect)((function(){!0===y&&D(C+1),0!==S&&S===R.length&&S&&I(!0)}),[S]),r.a.createElement(n.Fragment,null,l&&r.a.createElement(w,{loading:E,setIndex:k,setQuestionData:c,setViewed:m,setLoading:b}),!l&&!G&&(E?r.a.createElement(u,null):r.a.createElement("div",{className:"quizContainer"},r.a.createElement(f,{question:R[S],totalQuestions:R.length,index:S,className:"questions"}),r.a.createElement(p,{hintNum:A,setHintNum:M,answers:F[S]||{},index:S,setIndex:k,setResult:O,className:"options"}))),G&&r.a.createElement(g,{totalQuestions:R.length,setRightAnswer:D,setViewed:m,setHintNum:M,setGameOver:I,rightAnswer:C,score:C/S}))},y=a(153),O=(y.a.Header,y.a.Content);y.a.Footer;var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,{className:"layout"},r.a.createElement(O,null,r.a.createElement("div",{className:"site-layout-content"},r.a.createElement(_,{className:"quiz"})))))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},70:function(e,t,a){e.exports=a(146)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.6817f506.chunk.js.map
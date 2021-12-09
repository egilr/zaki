(this["webpackJsonpadvent-calendar"]=this["webpackJsonpadvent-calendar"]||[]).push([[0],{31:function(n,e,t){"use strict";t.r(e);var i,a,o,r=t(0),s=t(4),g=t.n(s),d=t(9),c=t(18),p=t(2),h=t(3),l=h.b.div(i||(i=Object(p.a)(["\n    display: grid;\n    grid-gap: 20px;\n    grid-template-columns: repeat(6, minmax(200px, 1fr)); //Repeats for each column, set min width to 200px and max to 1 fr (1 part of the available space). Making it a responsive grid.\n    padding: 50px 340px 50px 340px;\n"]))),m=[{id:"1",nr:1,img:"./img/1.jpg",text:"Can I have your picture so I can show Santa what I want for Christmas?",open:!1},{id:"2",nr:2,img:"./img/2.jpg",text:"What do you call people who are afraid of Santa Claus? Claustrophobic",open:!1},{id:"3",nr:3,img:"./img/3.jpg",text:"What is the best Christmas present ever? A broken drum - you can't beat it!",open:!1},{id:"4",nr:4,img:"./img/4.jpg",text:"How do you know when Santa's in the room? You can sense his presents.",open:!1},{id:"5",nr:5,img:"./img/5.jpg",text:"STRESSED is just DESSERTS spelled backward.",open:!1},{id:"6",nr:6,img:"./img/6.jpg",text:"What is the difference between snowmen and snowwomen? Snowballs.",open:!1},{id:"7",nr:7,img:"./img/7.jpg",text:"What nationality is Santa Claus? North Polish",open:!1},{id:"8",nr:8,img:"./img/8.jpg",text:"What kind of motorbike does Santa ride? A Holly Davidson!",open:!1},{id:"9",nr:9,img:"./img/9.jpg",text:"Who is never hungry at Christmas? The turkey - he's always stuffed!",open:!1},{id:"10",nr:10,img:"./img/10.jpg",text:"When you stop believing in Santa Claus is when you start getting clothes for Christmas!",open:!1},{id:"11",nr:11,img:"./img/11.jpg",text:"What goes 'oh oh oh'? Santa walking backwards.",open:!1},{id:"12",nr:12,img:"./img/12.jpg",text:"According to my kids' Christmas lists, they think this parenting gig pays pretty well.",open:!1},{id:"13",nr:13,img:"./img/13.jpg",text:"Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",open:!1},{id:"14",nr:14,img:"./img/14.jpg",text:"What will fall on the lawn first? An autumn leaf or a Christmas catalog?",open:!1},{id:"15",nr:15,img:"./img/15.jpg",text:"What do elves learn in school? The Elf-abet!",open:!1},{id:"16",nr:16,img:"./img/16.jpg",text:"How do you scare a snowman? You get a hairdryer!",open:!1},{id:"17",nr:17,img:"./img/17.jpg",text:"The main thing I want this holiday season is for someone to wake me when it's over.",open:!1},{id:"18",nr:18,img:"./img/18.jpg",text:"Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.",open:!1},{id:"19",nr:19,img:"./img/19.jpg",text:"I bought my son a fridge for Christmas. \u2013 I can't wait to see his face light up when he opens it.",open:!1},{id:"20",nr:20,img:"./img/20.jpg",text:"Santa's elves are just a bunch of subordinate Clauses.",open:!1},{id:"21",nr:21,img:"./img/21.jpg",text:"What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.",open:!1},{id:"22",nr:22,img:"./img/22.jpg",text:"Why do programmers always mix up Halloween and Christmas? Because 31 OCT = 25 DEC.",open:!1},{id:"23",nr:23,img:"./img/23.jpg",text:"What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!",open:!1},{id:"24",nr:24,img:"./img/24.jpg",text:"What's red and white, red and white, red and white? Sant rolling off your roof.",open:!1}],u=function(){return function(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),i=[n[t],n[e]];n[e]=i[0],n[t]=i[1]}return n}(m)},f=t.p+"static/media/hatch_backdrop.3341a517.jpg",b=h.b.div(a||(a=Object(p.a)(["\n  padding-top: 100%; /* padding-top is based on the width - believe it or not!!! */\n  position: relative;\n  cursor: pointer;\n\n  .front {\n    background: center / cover url(",');\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n\n    p {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-family: "Dancing Script", cursive;\n      color: #fff;\n      padding: 20px;\n      width: 50%;\n      height: 50%;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.7);\n      font-weight: 700;\n      font-size: 4rem;\n    }\n\n    &.open {\n      transform: rotateY(180deg);\n    }\n  }\n\n  .back {\n    position: absolute;\n    background: center / cover url(',');\n    top: 0px;\n    left: 0px;\n    z-index: 1;\n    transform: rotateY(180deg);\n\n    p {\n      font-family: "Dancing Script", cursive;\n      color: #fff;\n      padding: 10px;\n      font-size: 1.4rem;\n      text-align: center;\n    }\n\n    &.open {\n      z-index: 2;\n      transform: rotateY(0deg);\n    }\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    transition: all 0.5s;\n    transform-style: preserve-3d;\n    border-radius: 20px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n  }\n'])),(function(n){return n.background}),f),j=t(1),x=function(n){var e=n.hatchData,t=e.id,i=e.nr,a=e.text,o=e.img,r=e.open,s=n.handleClick;return Object(j.jsxs)(b,{background:o,onClick:function(){return s(t)},children:[Object(j.jsx)("div",{className:r?"front open":"front",children:Object(j.jsx)("p",{children:i})}),Object(j.jsx)("div",{className:r?"back open":"back",children:Object(j.jsx)("p",{children:a})})]})},w=t(8),y=t.n(w),v=t(17),k=t.n(v),S=Object(h.a)(o||(o=Object(p.a)(["\n  body {\n    background: center / cover url('./img/calendar_backdrop.jpg');\n    margin: 0;\n  }\n"])));function C(){var n=Object(r.useState)([]),e=Object(c.a)(n,2),t=e[0],i=e[1];Object(r.useEffect)((function(){var n=localStorage.calendar?JSON.parse(localStorage.calendar):u();i(n)}),[]),Object(r.useEffect)((function(){t.length&&localStorage.setItem("calendar",JSON.stringify(t))}),[t]);var a=function(n){var e=t.map((function(e){return e.id===n?Object(d.a)(Object(d.a)({},e),{},{open:!e.open}):e}));y()().format("D")!=n?alert("Du kan kun \xe5bne l\xe5gen for dagen"):(i(e),console.log(y()().format("D")),console.log(n+"hatch id"))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{}),Object(j.jsxs)(l,{children:[Object(j.jsx)(k.a,{}),t.map((function(n){return Object(j.jsx)(x,{hatchData:n,handleClick:a},n.id)}))]})]})}g.a.render(Object(j.jsx)(C,{}),document.getElementById("root"));var O=C,W=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),o(n),r(n)}))};g.a.render(Object(j.jsx)(O,{}),document.getElementById("root")),W()}},[[31,1,2]]]);
//# sourceMappingURL=main.d8ac2d66.chunk.js.map
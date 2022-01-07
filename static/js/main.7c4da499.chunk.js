(this.webpackJsonphangbook=this.webpackJsonphangbook||[]).push([[0],{46:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a,o,r,i,s,c,l,h,u,d,b,j,p,x,f,g,O,m,v,w,y,k,S,q,B,T,z,M,I,R=n(2),C=n.n(R),F=n(37),L=n.n(F),D=(n(46),n(3)),J=n(22),N=n(5),A=n(4),E=[{quote:"She read books as one would breathe air, to fill up and live.",author:"Annie Dillard"},{quote:"Maybe this is why we read, and why in moments of darkness we return to books: to find words for what we already know.",author:"Alberto Manguel"},{quote:"The world was hers for the reading.",author:"Betty Smith"},{quote:"Reading is a conversation. All books talk. But a good book listens as well.",author:"Mark Haddon"},{quote:"You know you've read a good book when you turn the last page and feel a little as if you have lost a friend.",author:"Paul Sweeney"},{quote:"The story is truly finished \u2014 and meaning is made \u2014 not when the author adds the last period, but when the reader enters.",author:"Celeste Ng"},{quote:"Show me a family of readers, and I will show you the people who move the world.",author:"Napoleon Bonaparte"},{quote:"A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.",author:"Charles Baudelaire"},{quote:"Reading should not be presented to children as a chore, a duty. It should be offered as a gift.",author:"Kate DiCamillo"},{quote:"I think books are like people, in the sense that they\u2019ll turn up in your life when you most need them.",author:"Emma Thompson"},{quote:"It wasn\u2019t until I started reading and found books they wouldn\u2019t let us read in school that I discovered you could be insane and happy and have a good life without being like everybody else.",author:"John Waters"},{quote:"Books are a uniquely portable magic.",author:"Stephen King"},{quote:"Books are mirrors: You only see in them what you already have inside you.",author:"Carlos Ruiz Zaf\xf3n"},{quote:"Let\u2019s be reasonable and add an eighth day to the week that is devoted exclusively to reading.",author:"Lena Dunham"},{quote:"If you don\u2019t like to read, you haven\u2019t found the right book.",author:" J.K. Rowling"},{quote:"I can feel infinitely alive curled up on the sofa reading a book.",author:"Benedict Cumberbatch"},{quote:"Books and doors are the same thing. You open them, and you go through into another world.",author:"Jeanette Winterson"},{quote:"A good would take me out of myself and then stuff me back in, outsized, now, and uneasy with the fit.",author:"David Sedaris"},{quote:"Read a lot. Expect something big, something exalting or deepening from a book. No book is worth reading that isn\u2019t worth re-reading.",author:"Susan Sontag"},{quote:"Have books \u2018happened\u2019 to you? Unless your answer to that question is \u2018yes,\u2019 I\u2019m unsure how to talk to you.",author:"Haruki Murakami"},{quote:"Literature is the safe and traditional vehicle through which we learn about the world and pass on values from one generation to the next. Books save lives.",author:"Laurie Anderson"},{quote:"The reading of all good books is like a conversation with the finest minds of past centuries.",author:"Rene Descartes"},{quote:"That\u2019s the thing about books. They let you travel without moving your feet.",author:"Jhumpa Lahiri"},{quote:"A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.",author:"William Styron"},{quote:"I guess a big part of serious fiction\u2019s purpose is to give the reader, who like all of us is sort of marooned in her own skull, to give her imaginative access to other selves.",author:"David Foster Wallace"},{quote:"Reading makes immigrants of us all. It takes us away from home, but more important, it finds homes for us everywhere.",author:"Jean Rhys"},{quote:"That is part of the beauty of all literature. You discover that your longings are universal longings, that you\u2019re not lonely and isolated from anyone. You belong.",author:"F. Scott Fitzgerald"},{quote:"Reading is important. If you know how to read, then the whole world opens up to you.",author:"Barack Obama"}],Y=n(23),H=n(1),Q=[{id:1,tap:"Main",path:"/"},{id:2,tap:"Best Sellers",path:"/bestSellers"},{id:3,tap:"Search Books",path:"/searchBooks"},{id:4,tap:"Today's Book",path:"/todays"}],W=A.a.nav(a||(a=Object(D.a)(["\n    width: 100%;\n    position: absolute;\n    top: 45%;\n    transform: translateY(-50%);\n"]))),K=A.a.ul(o||(o=Object(D.a)(["\n    display: flex;\n    flex-direction: column;\n    /* margin: 25px 0;\n    padding: 25px 0; */\n"]))),P=A.a.li(r||(r=Object(D.a)(["\n    /* float: left; */\n    /* margin: 0 10px; */\n    height: 80px;\n    a {\n        color: #2e2e2e;\n        text-decoration: none;\n        font-weight: bold;\n        font-size: 18px;\n        line-height: 80px;\n        display: flex;\n        justify-content: space-between;\n        border-bottom: #a5a5a5;\n        & > svg {\n            font-weight: bold;\n            height: 80px;\n        }\n    }\n    \n"]))),V=function(){return Object(H.jsx)(W,{children:Object(H.jsx)("nav",{children:Object(H.jsx)(K,{children:Q.map((function(e,t){return Object(H.jsx)(P,{children:Object(H.jsxs)(J.b,{to:e.path,children:[Object(H.jsx)("p",{children:e.tap}),Object(H.jsx)(Y.a,{})]})},t)}))})})})},U=n(6),Z=n(19),G=A.a.div(i||(i=Object(D.a)(["\n    width: 100%;\n    height: auto;\n    position: absolute;\n    bottom: 0;\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    color: #a5a5a5;\n    & > p {\n        font-size: 14px;\n        font-style: italic;\n        font-weight: bold;\n        & > svg {\n            font-size: 12px;\n        }\n    }\n    & > div {\n        font-size: 12px;\n        display: flex;\n        justify-content: center;\n        line-height: 20px;\n    }\n"]))),X=A.a.button(s||(s=Object(D.a)(["\n    font-size: 20px;\n    background: none;\n    border: 0;\n    cursor: pointer;\n"]))),$=function(){var e=Object(R.useState)(E[0].quote),t=Object(U.a)(e,2),n=t[0],a=t[1],o=Object(R.useState)(E[0].author),r=Object(U.a)(o,2),i=r[0],s=r[1];Object(R.useEffect)((function(){var e=Math.floor(Math.random()*E.length);a(E[e].quote),s(E[e].author)}),[]);return Object(H.jsxs)(G,{children:[Object(H.jsxs)("p",{children:[Object(H.jsx)(Z.a,{})," ",n," ",Object(H.jsx)(Z.b,{})]}),Object(H.jsxs)("div",{children:[Object(H.jsxs)("p",{children:[" - ",i]}),Object(H.jsx)("p",{children:Object(H.jsx)(X,{onClick:function(){var e=Math.floor(Math.random()*E.length);a(E[e].quote),s(E[e].author)},children:Object(H.jsx)(Y.b,{})})})]})]})},_=A.a.div(c||(c=Object(D.a)(["\n    width: 80%;\n    height: calc(100%- 200px);\n    margin: 0 auto;\n    position: relative;\n"]))),ee=A.a.header(l||(l=Object(D.a)(["\n    width: 100%;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Montserrat';\n\n"]))),te=A.a.h1(h||(h=Object(D.a)(["\n    display: inline-block;\n    font-size: 20px;\n    text-align: center;\n    padding: 0px;\n    height: auto;\n    span {\n        font-style: italic;\n        font-size: 24px;\n        font-weight: bold;\n    }\n"]))),ne=A.a.nav(u||(u=Object(D.a)(["\n    width: 100%;\n"]))),ae=function(){return Object(H.jsx)(_,{children:Object(H.jsxs)(ee,{children:[Object(H.jsxs)(te,{children:["\ud83d\udcda ",Object(H.jsx)("span",{children:"HangBook"}),",",Object(H.jsx)("br",{})," Hanging out with Books"]}),Object(H.jsx)(ne,{children:Object(H.jsx)(V,{})}),Object(H.jsx)($,{})]})})},oe=n(12),re=n.n(oe),ie=n(14),se=n(15),ce=n.n(se),le=A.a.div(d||(d=Object(D.a)(["\n    width: 20%;\n    height: 260px;\n    /* border: 1px solid blue; */\n"]))),he=A.a.div(b||(b=Object(D.a)(["\n    width: 130px;\n    height: 170px;\n    /* padding: 20px; */\n    margin: 10px auto;\n    background: #f0edf3;\n    border-radius: 20px;\n    position: relative;\n    &:hover {\n        cursor: pointer;\n        background: #fcedf6;\n    }\n"]))),ue=A.a.p(j||(j=Object(D.a)(["\n    font-size: 50px;\n    margin-top: 5px;\n    margin-left: 5px;\n    font-style: italic;\n    font-weight: bold;\n    opacity: .2;\n"]))),de=A.a.img(p||(p=Object(D.a)(["\n    width: 85px;\n    height: auto;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]))),be=A.a.h4(x||(x=Object(D.a)(["\n    margin-top: 20px;\n    text-align: center;\n    color: #a5a5a5;\n    font-size: 14px;\n    font-weight: bold;\n"]))),je=A.a.div(f||(f=Object(D.a)(["\n    position: fixed;\n    height: 520px;\n    width: calc((70vw - 100px) * 0.7);\n    top: calc(10vh + 90px + 56px);\n    right: calc(15vw + 50px);\n    background: rgba(0, 0, 0, 0.75);\n    z-index: 99;\n    border-radius: 20px;\n    overflow: hidden;\n    padding: 30px;\n    display: flex;\n    color: #fff;\n    font-weight: bold;\n"]))),pe=A.a.div(g||(g=Object(D.a)(["\n    width: 80%;\n    height: 100%;\n    margin: 0 auto;\n    padding: 10px;\n    position: relative;\n"]))),xe=A.a.h4(O||(O=Object(D.a)(["\n    text-align: center;\n    font-size: 20px;\n    padding: 20px 0;\n"]))),fe=A.a.img(m||(m=Object(D.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform : translate(-50%, -50%);\n"]))),ge=A.a.div(v||(v=Object(D.a)(["\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    padding: 30px;\n"]))),Oe=A.a.div(w||(w=Object(D.a)(["\n    position: absolute;\n    top: 20px; \n    right: 20px;\n    color: white;\n    font-size: 28px;\n    cursor: pointer;\n"]))),me=A.a.div(y||(y=Object(D.a)(["\n    text-align: center;\n    font-size: 28px;\n    margin: 20px 0;\n    padding: 10px 0 0;\n"]))),ve=A.a.div(k||(k=Object(D.a)(["\n    color: #aaa;\n    width: 80%;\n    margin: 0 auto;\n    font-size: 12px;\n"]))),we=A.a.div(S||(S=Object(D.a)(["\n    margin: 10px 0;\n"]))),ye=A.a.div(q||(q=Object(D.a)(["\n    margin: 20px 0;\n    font-size: 20px;\n"]))),ke=function(e){var t=e.items,n=t.title,a=t.author,o=t.cover,r=t.description,i=t.publisher,s=t.bestRank,c=t.categoryName,l=Object(R.useState)(!1),h=Object(U.a)(l,2),u=h[0],d=h[1];return Object(H.jsxs)(le,{children:[u?Object(H.jsxs)(je,{children:[Object(H.jsxs)(pe,{children:[Object(H.jsxs)(xe,{children:["Best Seller # ",s]}),Object(H.jsx)(fe,{src:o,alt:n})]}),Object(H.jsxs)(ge,{children:[Object(H.jsx)(Oe,{children:Object(H.jsx)(Z.c,{onClick:function(){d(!1)}})}),Object(H.jsx)(me,{children:n}),Object(H.jsx)(ve,{children:c}),Object(H.jsx)(ye,{children:r}),Object(H.jsxs)(we,{children:["\uc9c0\uc740\uc774 : ",a]}),Object(H.jsxs)(we,{children:["\ucd9c\ud310\uc0ac : ",i]})]})]}):null,Object(H.jsxs)(he,{onClick:function(){d((function(e){return!e}))},children:[Object(H.jsx)(ue,{children:s}),Object(H.jsx)(de,{src:o,alt:n})]}),Object(H.jsx)(be,{children:n.length<10?n:n.substr(0,10)+"..."})]})},Se=A.a.h2(B||(B=Object(D.a)(["\n    width: 95%;\n    margin: 0 auto;\n    font-size: 36px;\n    font-weight: bold;\n    margin-bottom: 20px;\n"]))),qe=function(e){var t=e.titleText;return Object(H.jsx)(Se,{children:t})},Be=A.a.div(T||(T=Object(D.a)(["\n    width: 95%;\n    margin: 0 auto;\n    height: 510px;\n    /* border: 1px solid pink; */\n    display: flex;\n    flex-wrap: wrap;\n    /* overflow-x: hidden; */\n    position: relative;\n"]))),Te=A.a.div(z||(z=Object(D.a)(["\n    /* border: 1px solid red; */\n    overflow-x: hidden;\n"]))),ze=function(){var e=Object(R.useState)([]),t=Object(U.a)(e,2),n=t[0],a=t[1],o=Object(R.useState)(!0),r=Object(U.a)(o,2),i=r[0],s=r[1],c=Object(R.useState)(null),l=Object(U.a)(c,2),h=(l[0],l[1]),u="https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=".concat("ttb201403672030001","&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101&Cover=Big");return Object(R.useEffect)((function(){var e=function(){var e=Object(ie.a)(re.a.mark((function e(){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.a.get(u);case 3:t=e.sent,s(!0),h(null),a(t.data.item),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),h(e.t0);case 12:s(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(H.jsxs)("div",{children:[Object(H.jsx)(qe,{titleText:"Best Seller"}),Object(H.jsx)(Te,{children:i?Object(H.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(H.jsx)("p",{children:"Now Loading..."})}):Object(H.jsx)(Be,{children:n.map((function(e){return Object(H.jsx)(ke,{items:e},e.isbbn13)}))})})]})},Me=function(){return Object(H.jsx)("div",{children:Object(H.jsx)("h1",{children:"Today's Book"})})},Ie=function(e){var t=e.recommend.title;return Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"\u3160\u3160\u3160"}),Object(H.jsx)("p",{children:t})]})},Re=function(){var e=Object(R.useState)([]),t=Object(U.a)(e,2),n=t[0],a=t[1],o=Object(R.useState)(!0),r=Object(U.a)(o,2),i=(r[0],r[1]),s=Object(R.useState)(null),c=Object(U.a)(s,2),l=(c[0],c[1]),h="https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=".concat("ttb201403672030001","&QueryType=Bestseller&MaxResults=50&start=1&SearchTarget=Book&output=js&Version=20131101");return Object(R.useEffect)((function(){var e=function(){var e=Object(ie.a)(re.a.mark((function e(){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.a.get(h);case 3:t=e.sent,console.log(t.data.item[Math.floor(Math.random(t.data.item)*t.data.item.length)]),a(t.data.item[Math.floor(Math.random(t.data.item)*t.data.item.length)]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(e.t0);case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(),console.log(a)}),[]),console.log(n),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(qe,{titleText:"Today's Recommend for you"}),Object(H.jsx)("div",{children:n&&Object(H.jsx)(Ie,{recommend:n})})]})},Ce=function(e){var t=e.books,n=t.title,a=t.author,o=(t.cover,t.description),r=t.publisher;return Object(H.jsxs)("div",{children:[Object(H.jsx)("img",{src:t.cover,alt:n}),Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:n}),Object(H.jsx)("li",{children:a}),Object(H.jsx)("li",{children:r}),Object(H.jsx)("li",{children:o})]})]})},Fe=function(e){var t=e.data;return Object(H.jsx)("div",{children:t.map((function(e){return Object(H.jsx)(Ce,{books:e},e.isbn13)}))})},Le=function(e){var t=e.searching,n=Object(R.useRef)(),a=Object(R.useState)(""),o=Object(U.a)(a,2),r=o[0],i=o[1];return Object(H.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),i(""),n.current.focus())},children:[Object(H.jsx)("input",{type:"text",placeholder:"\ucc45 \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694.",value:r,onChange:function(e){return i(e.target.value)},ref:n}),Object(H.jsx)("button",{type:"submit",children:"\ucc3e\uae30"})]})},De=function(){var e=Object(R.useState)([]),t=Object(U.a)(e,2),n=t[0],a=t[1],o=Object(R.useState)(!0),r=Object(U.a)(o,2),i=r[0],s=r[1],c=Object(R.useState)(""),l=Object(U.a)(c,2),h=l[0],u=l[1],d=Object(R.useState)("\ub9ac\uc561\ud2b8"),b=Object(U.a)(d,2),j=b[0],p=b[1],x="https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=".concat("ttb201403672030001","&Query=").concat(j,"&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20070901");Object(R.useEffect)((function(){var e=function(){var e=Object(ie.a)(re.a.mark((function e(){var t,n;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ce.a.get(x);case 3:t=e.sent,console.log(t.data.substring(0,t.data.length-1)),console.log(JSON.parse(t.data.substring(0,t.data.length-1))),n=JSON.parse(t.data.substring(0,t.data.length-1)),console.log(n),s(!0),u(null),a(n.item),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),u("Something went wrong");case 16:s(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[j]);return console.log(n),Object(H.jsxs)("div",{children:[Object(H.jsx)(qe,{titleText:"Search Books"}),Object(H.jsx)(Le,{searching:function(e){p(e)}}),i&&0===a.length&&Object(H.jsx)("h1",{children:"No Data Found"}),n&&!i&&Object(H.jsx)(Fe,{data:n}),h||null]})},Je=(n(71),A.a.div(M||(M=Object(D.a)(["\n  width: 100vw;\n  height: 100vh;\n  background: #e6e9f1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])))),Ne=A.a.div(I||(I=Object(D.a)(["\n  width: 70vw;\n  height: 80vh;\n  padding: 90px 50px;\n  font-family: 'Montserrat';\n  border-radius: 20px;\n  display: grid;\n  grid-template-columns: .3fr .7fr;\n  /* overflow: hidden; */\n  background: #f4f4f6;\n  & > div {\n    /* border: 1px solid green; */\n    overflow-x: hidden;\n  }\n"]))),Ae=function(){return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(Je,{children:Object(H.jsx)(J.a,{children:Object(H.jsxs)(Ne,{children:[Object(H.jsx)(ae,{}),Object(H.jsx)("div",{children:Object(H.jsxs)(N.c,{children:[Object(H.jsx)(N.a,{path:"/",component:Me,exact:!0}),Object(H.jsx)(N.a,{path:"/bestSellers",component:ze}),Object(H.jsx)(N.a,{path:"/searchBooks",component:De}),Object(H.jsx)(N.a,{path:"/todays",component:Re})]})})]})})})})},Ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)}))};n(72);L.a.render(Object(H.jsx)(C.a.StrictMode,{children:Object(H.jsx)(Ae,{})}),document.getElementById("root")),Ee()}},[[73,1,2]]]);
//# sourceMappingURL=main.7c4da499.chunk.js.map
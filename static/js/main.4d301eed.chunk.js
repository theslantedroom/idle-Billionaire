(this.webpackJsonpIdleReact=this.webpackJsonpIdleReact||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,s){},function(e,n,s){},function(e,n,s){},function(e,n,s){},function(e,n,s){},function(e,n,s){},function(e,n,s){},function(e,n,s){},function(e,n,s){},,function(e,n,s){"use strict";s.r(n);var a=s(0),o=s(1),t=s(4),c=s.n(t),l=(s(14),s(2)),i=s(5),r=s(6),p=s(8),d=s(7),u=(s(15),function(e){var n=e.upgradeId,s=e.name,o=e.cost,t=e.effect,c=e.owned,l=e.happinessCost,i=(0,e.numberWithCommas)(o);return!1===c?Object(a.jsxs)("div",{id:"upgrade"+n,className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"roboimg",src:"https://robohash.org/".concat(n,"?set=set4")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"ph2",children:s}),Object(a.jsx)("p",{className:"ph2",children:t}),Object(a.jsx)("h5",{children:"Price"}),Object(a.jsxs)("h2",{className:"ph2",children:["\ud83d\udcb0$",i," \ud83d\ude04 ",l]})]})]}):Object(a.jsxs)("div",{id:"upgrade"+n,className:"tc bg-light-yellow dib br3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{alt:"roboimg",src:"https://robohash.org/".concat(n,"?set=set4")}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"ph2",children:s}),Object(a.jsx)("p",{className:"ph2",children:t}),Object(a.jsx)("h2",{className:"ph2",children:"OWNED"})]})]})}),m=function(e){var n=e.upgrades,s=e.numberWithCommas;return Object(a.jsx)("div",{children:n.map((function(e,o){return Object(a.jsx)(u,{upgradeId:n[o].id,name:n[o].name,cost:n[o].cost,happinessCost:n[o].happinessCost,effect:n[o].effect,dollarIncome:n[o].dollarIncome,clickIncome:n[o].clickIncome,owned:n[o].owned,numberWithCommas:s},o)}))})},h=(s(16),function(e){var n=e.resetButton;return Object(a.jsx)("div",{id:"buttonReset",children:Object(a.jsx)("button",{className:"",onClick:n,children:"RESET Progress"})})}),I=(s(17),function(e){var n=e.onTypeChange,s=(e.searchChange,e.dollarTypeInvoice),o=e.dollarTypeIncome,t=e.cashOut;return Object(a.jsxs)("div",{className:"pa2",children:[Object(a.jsx)("h1",{children:"Type for cashOut"}),Object(a.jsxs)("label",{className:"yellow",htmlFor:"inputText",children:["Income per character = $ ",o]}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{id:"inputText",className:"pa3 ba b--green bg-lightest-blue",type:"text",maxLength:"500",placeholder:"write a book",onChange:n}),Object(a.jsx)("br",{}),Object(a.jsxs)("button",{className:"pa1 f2 grow bw2 shadow-5",id:"cashOut",onClick:t,children:["Sell text for $",s]})]})}),f=(s(18),function(e){var n=e.clickIncome,s=e.clickCashOut;return Object(a.jsxs)("div",{className:"bg-navy pb2",children:[Object(a.jsx)("h1",{className:"mb0",children:"Click for Cash!"}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{className:"yellow",children:"Buck a Click"}),Object(a.jsx)("br",{}),Object(a.jsxs)("button",{className:"pa1 f2 grow bw2 shadow-5",onClick:s,children:["$",n]})]})}),g=(s(19),function(e){var n=e.dollarIncome,s=e.hoursPassed,o=e.daysPassed,t=e.yearsPassed,c=e.mainHappiness,l=e.happinessIncome,i=e.spending,r=e.annualBonus;return Object(a.jsxs)("div",{id:"statbox",className:"statbox light-gray",children:[Object(a.jsxs)("p",{className:"statincome light-green",children:["Your Current Income is $",n," / hour"]}),Object(a.jsxs)("p",{className:" statincome light-green",children:["Your Annual Bonus is $",r]}),Object(a.jsxs)("p",{className:"stathappy",children:["Total \ud83d\ude04: ",c]}),Object(a.jsxs)("p",{className:"stathappy",children:["\ud83d\ude04 per day: ",l]}),Object(a.jsxs)("p",{className:"costliving",children:["Cost of living: $",i," / day"]}),Object(a.jsxs)("p",{className:"light-yellow",children:[Math.round(t)," years / ",Math.round(o)," days / ",s," hours passed"]})]})}),y=(s(20),function(e){var n=e.mainCounter,s=(0,e.numberWithCommas)(n);return Object(a.jsxs)("div",{className:"washed-green dib br3 ma1 bw2 shadow-5 ph2 pv1",children:["Bank Account:",Object(a.jsxs)("div",{className:"green f2",children:["$",s]})]})}),b=(s(21),function(e){return Object(a.jsx)("div",{className:"scrollDiv",style:{overflowY:"scroll",border:"2px solid black",height:"65vh",boxsizing:"border-box"},children:e.children})}),B=[{id:0,name:"Meal Plan",cost:1,happinessCost:0,effect:"+1 happiness/day, -$5/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:1,happinessBoost:0,spending:5,annualBonus:0,owned:!1},{id:1,name:"Birthday Gift",cost:0,happinessCost:1,effect:"$10 each year!",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:10,owned:!1},{id:2,name:"Click for Cash",cost:0,happinessCost:5,effect:"+$5 per Buck a Click",clickIncome:5,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:4,name:"Learn to Write",cost:100,happinessCost:1,effect:"+$5 per character sold",clickIncome:0,dollarIncome:0,dollarTypeIncome:5,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:5,name:"Eyes open for dropped coins",cost:0,happinessCost:10,effect:"+$1 per hour",clickIncome:0,dollarIncome:1,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:6,name:"Buy a bike",cost:500,happinessCost:0,effect:"+ 2 Happiness / day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:2,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:7,name:"Small investment in low risk stocks",cost:1e3,happinessCost:0,effect:"+$200 annually",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:200,owned:!1},{id:8,name:"Buy a computer",cost:1200,happinessCost:0,effect:"+1 happiness/day, +1$/hour",clickIncome:0,dollarIncome:1,dollarTypeIncome:0,dollarBoost:0,happinessIncome:1,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:9,name:"Buy Happiness",cost:200,happinessCost:0,effect:"+10 Happy times",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:50,spending:0,annualBonus:0,owned:!1},{id:10,name:"Take a Vacation",cost:5e3,happinessCost:0,effect:"+1000 Happy Joy",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:1e3,spending:0,annualBonus:0,owned:!1},{id:11,name:"Drinking Habbit",cost:0,happinessCost:0,effect:"-$25/day, +3 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:3,happinessBoost:0,spending:25,annualBonus:0,owned:!1},{id:12,name:"Super Click",cost:1e3,happinessCost:10,effect:"+$10 per Buck a Click",clickIncome:10,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:3,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:13,name:"Reduce spending",cost:0,happinessCost:15,effect:"-$5/day cost of living ",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:-5,annualBonus:0,owned:!1},{id:14,name:"Part Time Job",cost:0,happinessCost:-2,effect:"+$2/hour, -2 happy/day",clickIncome:0,dollarIncome:2,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-2,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:15,name:"Start Selling Art",cost:1800,happinessCost:0,effect:"+$1/hour, +1 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:1,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:16,name:"Irresponsible spending",cost:0,happinessCost:0,effect:"-$200/day, +30 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:30,happinessBoost:0,spending:200,annualBonus:0,owned:!1},{id:17,name:"A real Saver",cost:0,happinessCost:50,effect:"-$50 cost of living, -10 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-10,happinessBoost:0,spending:-50,annualBonus:0,owned:!1},{id:18,name:"Full Time Job",cost:0,happinessCost:100,effect:"+$10/hour, -5 happy/day",clickIncome:0,dollarIncome:10,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-5,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:19,name:"Selling Smiles",cost:0,happinessCost:0,effect:"+$5/hour, -25 happy/day",clickIncome:0,dollarIncome:5,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-25,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:20,name:"Buy a Dividend Fund",cost:5e3,happinessCost:0,effect:"returns $2500 a year!",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:2500,owned:!1},{id:21,name:"Netflix Subscription",cost:0,happinessCost:50,effect:"-$2/day, +10 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:10,happinessBoost:0,spending:2,annualBonus:0,owned:!1},{id:22,name:"Inheritance of the dead",cost:0,happinessCost:500,effect:"+$1000 but you are sad",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:1e3,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:22,name:"Overly Generous",cost:4e3,happinessCost:0,effect:"200 happiness boost!",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:2e3,spending:0,annualBonus:0,owned:!1},{id:23,name:"Greed for Life",cost:1e3,happinessCost:500,effect:"+$10/hour, -20 Happiness/day",clickIncome:0,dollarIncome:10,dollarTypeIncome:0,dollarBoost:0,happinessIncome:-20,happinessBoost:2e3,spending:0,annualBonus:0,owned:!1},{id:24,name:"Hard Work pays off",cost:1e3,happinessCost:200,effect:"+$4/hour",clickIncome:0,dollarIncome:4,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:25,name:"Financial Education",cost:6e3,happinessCost:400,effect:"-$20 cost of living, +$3000/year",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:-20,annualBonus:3e3,owned:!1},{id:26,name:"Joys of Wealth",cost:7500,happinessCost:50,effect:"-$1000/day, + 100 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:1e3,annualBonus:0,owned:!1},{id:27,name:"Buy a Car",cost:2e4,happinessCost:10,effect:"-$10/day, +20 happy/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:20,happinessBoost:0,spending:10,annualBonus:0,owned:!1},{id:28,name:"High School Diploma",cost:800,happinessCost:400,effect:"+$2/hour",clickIncome:0,dollarIncome:2,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:0,spending:0,annualBonus:0,owned:!1},{id:29,name:"A Big night Out",cost:5500,happinessCost:0,effect:"+1000 happiness",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:0,happinessBoost:1e3,spending:0,annualBonus:0,owned:!1},{id:30,name:"Your joy attracts a Lover",cost:0,happinessCost:2e3,effect:"+100 happiness/day, -$40/day",clickIncome:0,dollarIncome:0,dollarTypeIncome:0,dollarBoost:0,happinessIncome:100,happinessBoost:0,spending:40,annualBonus:0,owned:!1}],j=(s(22),function(e){e.searchfield;var n=e.searchChange;return Object(a.jsxs)("div",{className:"pa2",children:[Object(a.jsx)("h1",{className:"mb0",children:"Filter Upgrades"}),Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search ",onChange:n})]})}),C=function(e){Object(p.a)(s,e);var n=Object(d.a)(s);function s(){var e,a,o;if(Object(i.a)(this,s),(e=n.call(this)).onTypeChange=function(n){e.setState((function(e){return{dollarTypeInvoice:e.dollarTypeInvoice+e.dollarTypeIncome}}))},e.onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.saveGame=function(){var n;n={hoursPassed:e.state.hoursPassed,daysPassed:e.state.daysPassed,yearsPassed:e.state.yearsPassed,mainCounter:e.state.mainCounter,mainHappiness:e.state.mainHappiness,dollarTypeIncome:e.state.dollarTypeIncome,dollarTypeInvoice:e.state.dollarTypeInvoice,dollarIncome:e.state.dollarIncome,clickIncome:e.state.clickIncome,happinessIncome:e.state.happinessIncome,spending:e.state.spending,annualBonus:e.state.annualBonus};var s,a=JSON.stringify(n);localStorage.setItem("localSaveFile",a),s={};for(var o=0,t=Object.entries(e.state.upgrades);o<t.length;o++){var c=Object(l.a)(t[o],2),i=c[0],r=c[1];s[i]={value:r}}var p=JSON.stringify(s);localStorage.setItem("localUpgrades",p)},e.payout=function(n){e.setState((function(e){return{mainCounter:e.mainCounter+n}}))},e.cashOut=function(){e.payout(e.state.dollarTypeInvoice),e.setState((function(e){return{dollarTypeInvoice:0}})),document.getElementById("inputText").value="Type for money"},e.clickCashOut=function(){e.payout(e.state.clickIncome)},e.resetButton=function(){clearInterval(e.mainticker),console.log("reset"),e.setState((function(e){return{mainCounter:0}})),e.setState((function(e){return{mainHappiness:0}})),e.setState((function(e){return{hoursPassed:0}})),e.setState((function(e){return{daysPassed:0}})),e.setState((function(e){return{yearsPassed:0}})),e.setState((function(e){return{dollarTypeIncome:1}})),e.setState((function(e){return{dollarTypeInvoice:0}})),e.setState((function(e){return{dollarIncome:0}})),e.setState((function(e){return{clickIncome:1}})),e.setState((function(e){return{happinessIncome:0}})),e.setState((function(e){return{spending:0}})),e.setState((function(e){return{annualBonus:0}}));for(var n=function(){var n=Object(l.a)(a[s],1)[0],o=e.state.upgrades;o[n].owned=!1,e.setState((function(e){return{upgrades:o}}))},s=0,a=Object.entries(e.state.upgrades);s<a.length;s++)n();for(var o=0,t=Object.entries(e.state.upgrades);o<t.length;o++){var c=Object(l.a)(t[o],1)[0],i="upgrade"+e.state.upgrades[c].id;document.getElementById(i).classList.add("bg-light-green"),document.getElementById(i).classList.remove("bg-light-yellow")}localStorage.removeItem("localUpgrades"),localStorage.removeItem("localSaveFile"),window.location.reload()},e.state={tickerInterval:200,upgrades:B,searchfield:"",mainCounter:0,mainHappiness:0,hoursPassed:0,daysPassed:0,yearsPassed:0,dollarTypeIncome:1,dollarTypeInvoice:0,dollarIncome:0,clickIncome:1,happinessIncome:0,spending:0,annualBonus:0},a=localStorage.getItem("localSaveFile"),null!=(o=JSON.parse(a))){console.log("save file detected"),e.state.mainCounter=o.mainCounter,e.state.mainHappiness=o.mainHappiness,e.state.hoursPassed=o.hoursPassed,e.state.daysPassed=o.daysPassed,e.state.yearsPassed=o.yearsPassed,e.state.dollarTypeIncome=o.dollarTypeIncome,e.state.dollarTypeInvoice=o.dollarTypeInvoice,e.state.dollarIncome=o.dollarIncome,e.state.clickIncome=o.clickIncome,e.state.happinessIncome=o.happinessIncome,e.state.spending=o.spending,e.state.annualBonus=o.annualBonus;for(var t=localStorage.getItem("localUpgrades"),c=JSON.parse(t),r=0,p=Object.entries(c);r<p.length;r++){var d=Object(l.a)(p[r],1)[0],u=c[d].value.owned;e.state.upgrades[d].owned=u}}else console.log("no save file detected");return e}return Object(r.a)(s,[{key:"numberWithCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"componentDidMount",value:function(){for(var e=this,n=setInterval((function(){var s=e.state,a=s.hoursPassed,o=s.daysPassed;a<24?e.setState((function(e){return{hoursPassed:e.hoursPassed+1}})):(e.setState((function(e){return{daysPassed:e.daysPassed+1}})),e.setState((function(e){return{hoursPassed:0}})),e.setState((function(e){return{mainCounter:e.mainCounter-e.spending}})),e.setState((function(e){return{mainHappiness:e.mainHappiness+e.happinessIncome}})),365===o&&(e.setState((function(e){return{daysPassed:0}})),e.setState((function(e){return{yearsPassed:e.yearsPassed+1}})))),e.setState((function(e){return{mainCounter:e.mainCounter+e.dollarIncome}})),e.saveGame(),e.state.mainHappiness<=-1e3&&(clearInterval(n),alert("Oh no.. -1000 HAPPINESS... SUICIDE. you lose, Reset button at bottom to start again"),setInterval(n))}),this.state.tickerInterval),s=function(){var n=Object(l.a)(o[a],1)[0],s="upgrade"+e.state.upgrades[n].id,t=e.state.upgrades[n].cost,c=e.state.upgrades[n].dollarIncome,i=e.state.upgrades[n].clickIncome,r=e.state.upgrades[n].dollarTypeIncome,p=e.state.upgrades[n].happinessIncome,d=e.state.upgrades[n].spending,u=e.state.upgrades[n].annualBonus,m=e.state.upgrades[n].happinessCost,h=e.state.upgrades[n].happinessBoost,I=e.state.upgrades[n].dollarBoost;document.getElementById(s).addEventListener("click",(function(s,a,o,l,f,g,y,b,B,j,C,v){!function(n,s,a,o,t,c,l,i,r,p,d,u){if(console.log("click"),e.state.mainCounter>=a&&e.state.mainHappiness>=p&&!1===e.state.upgrades[s].owned||0===a&&e.state.mainHappiness>=p&&!1===e.state.upgrades[s].owned||0===p&&e.state.mainCounter>=a&&!1===e.state.upgrades[s].owned){console.log("can afford"),e.setState((function(e){return{dollarIncome:e.dollarIncome+o}})),e.setState((function(e){return{clickIncome:e.clickIncome+t}})),e.setState((function(e){return{mainCounter:e.mainCounter-a}})),e.setState((function(e){return{dollarTypeIncome:e.dollarTypeIncome+c}})),e.setState((function(e){return{happinessIncome:e.happinessIncome+l}})),e.setState((function(e){return{spending:e.spending+i}})),e.setState((function(e){return{annualBonus:e.annualBonus+r}})),e.setState((function(e){return{mainHappiness:e.mainHappiness-p}})),e.setState((function(e){return{mainHappiness:e.mainHappiness+d}})),e.setState((function(e){return{mainCounter:e.mainCounter+u}})),e.state.spending<0&&e.setState((function(e){return{spending:0}}));var m=e.state.upgrades;m[s].owned=!0,e.setState((function(e){return{upgrades:m}}))}else e.state.mainCounter}(0,n,t,c,i,r,p,d,u,m,h,I)}),!1)},a=0,o=Object.entries(this.state.upgrades);a<o.length;a++)s()}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){var e=this.state,n=e.upgrades,s=e.searchfield,o=e.mainCounter,t=e.mainHappiness,c=e.dollarIncome,l=e.clickIncome,i=e.happinessIncome,r=e.spending,p=e.hoursPassed,d=e.daysPassed,u=e.yearsPassed,B=e.dollarTypeInvoice,C=e.dollarTypeIncome,v=e.annualBonus,O=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"ma1",children:"Billionaire!"}),Object(a.jsx)(y,{mainCounter:o,numberWithCommas:this.numberWithCommas}),Object(a.jsx)(g,{dollarIncome:c,hoursPassed:p,daysPassed:d,yearsPassed:u,mainHappiness:t,happinessIncome:i,spending:r,annualBonus:v}),Object(a.jsxs)(b,{children:[Object(a.jsx)(I,{onTypeChange:this.onTypeChange,dollarTypeInvoice:B,dollarTypeIncome:C,cashOut:this.cashOut}),Object(a.jsx)(f,{clickIncome:l,clickCashOut:this.clickCashOut}),Object(a.jsx)(j,{searchChange:this.onSearchChange}),Object(a.jsx)(m,{upgrades:O,numberWithCommas:this.numberWithCommas})]}),Object(a.jsx)(h,{resetButton:this.resetButton})]})}}]),s}(o.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(n){var s=n.getCLS,a=n.getFID,o=n.getFCP,t=n.getLCP,c=n.getTTFB;s(e),a(e),o(e),t(e),c(e)}))};s(23);c.a.render(Object(a.jsx)(C,{}),document.getElementById("root")),v()}],[[24,1,2]]]);
//# sourceMappingURL=main.4d301eed.chunk.js.map
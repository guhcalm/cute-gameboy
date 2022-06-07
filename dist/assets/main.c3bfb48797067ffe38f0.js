(()=>{"use strict";var a,t={662:(a,t,e)=>{var n,i,r,c,o,d=e(745),l=e(168);!function(a){a[a.ACTIVATE=0]="ACTIVATE",a[a.INACTIVATE=1]="INACTIVATE"}(n||(n={})),function(a){a[a.LEFT=0]="LEFT",a[a.RIGHT=1]="RIGHT",a[a.UP=2]="UP",a[a.DOWN=3]="DOWN"}(i||(i={})),function(a){a[a.SELECT=0]="SELECT",a[a.START=1]="START"}(r||(r={})),function(a){a[a.E=0]="E",a[a.Q=1]="Q"}(c||(c={})),function(a){a[a.DEFAULT=0]="DEFAULT"}(o||(o={}));const u={name:o.DEFAULT,palette:{surface:{main:"gray",on:"white"},background:{main:"white",on:"black"},error:{main:"red",on:"black"},primary:{light:"yellow",main:"orange",dark:"red",on:"black"},secondary:{light:"cyan",main:"green",dark:"blue",on:"black"}}};var s=n.INACTIVATE;const p={status:s,mouse:{position:{x:0,y:0}},settings:{theme:u},keys:{startupSwitcher:s,directionalPad:{left:s,right:s,up:s,down:s},operationalPad:{select:s,start:s},actionPad:{q:s,e:s}}};function y(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function P(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var k=n,f=k.ACTIVATE,T=k.INACTIVATE,A=i,h=A.LEFT,w=A.RIGHT,v=A.UP,E=A.DOWN,b=r,m=b.SELECT,S=b.START,g=c,O=g.Q,I=g.E;const C=(0,l.oM)({name:"gameboy",initialState:p,reducers:{setMousePosition:function(a,t){var e=t.payload;a.mouse=function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){P(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},e)},activateStatus:function(a){a.status=f},inactivateStatus:function(a){a.status=T},clickStartupSwitcher:function(a){a.keys.startupSwitcher=f},unclickStartupSwitcher:function(a){a.keys.startupSwitcher=f},clickDirectionalPad:function(a,t){var e=t.payload;e===h&&(a.keys.directionalPad.left=f),e===w&&(a.keys.directionalPad.right=f),e===v&&(a.keys.directionalPad.up=f),e===E&&(a.keys.directionalPad.down=f)},unclickDirectionalPad:function(a,t){var e=t.payload;e===h&&(a.keys.directionalPad.left=f),e===w&&(a.keys.directionalPad.right=f),e===v&&(a.keys.directionalPad.up=f),e===E&&(a.keys.directionalPad.down=f)},clickOperationalPad:function(a,t){var e=t.payload;e===m&&(a.keys.operationalPad.select=f),e===S&&(a.keys.operationalPad.start=f)},unclickOperationalPad:function(a,t){var e=t.payload;e===m&&(a.keys.operationalPad.select=T),e===S&&(a.keys.operationalPad.start=T)},clickActionPad:function(a,t){var e=t.payload;e===O&&(a.keys.actionPad.q=f),e===I&&(a.keys.actionPad.e=f)},unclickActionPad:function(a,t){var e=t.payload;e===O&&(a.keys.actionPad.q=T),e===I&&(a.keys.actionPad.e=T)}}});var V=e(857),D=e(294),j=e(998);function L(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function N(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}const x=(0,l.oM)({name:"mouse",initialState:{position:{x:0,y:0}},reducers:{setMousePosition:function(a,t){var e=t.payload;a.position=function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?L(Object(e),!0).forEach((function(t){N(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},e.position)}}});const R=function(){var a,t,e;a=(0,j.I0)(),t=x.actions,e=function(e){a(t.setMousePosition({position:{x:e.x,y:e.y}}))},(0,D.useEffect)((function(){return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[])};var q=n.INACTIVATE;const U={startupSwitcher:q,directionalPad:{left:q,right:q,up:q,down:q},operationalPad:{select:q,start:q},actionPad:{q,e:q}};var F=n,G=F.ACTIVATE,H=F.INACTIVATE,Q=i,W=Q.LEFT,M=Q.RIGHT,_=Q.UP,z=Q.DOWN,J=r,Y=J.SELECT,Z=J.START,B=c,K=B.Q,X=B.E;const $=(0,l.oM)({name:"keyboard",initialState:U,reducers:{clickStartupSwitcher:function(a){a.startupSwitcher=n.ACTIVATE},unclickStartupSwitcher:function(a){a.startupSwitcher=n.INACTIVATE},clickDirectionalPad:function(a,t){var e=t.payload;e===W&&(a.directionalPad.left=G),e===M&&(a.directionalPad.right=G),e===_&&(a.directionalPad.up=G),e===z&&(a.directionalPad.down=G)},unclickDirectionalPad:function(a,t){var e=t.payload;e===W&&(a.directionalPad.left=H),e===M&&(a.directionalPad.right=H),e===_&&(a.directionalPad.up=H),e===z&&(a.directionalPad.down=H)},clickOperationalPad:function(a,t){var e=t.payload;e===Y&&(a.operationalPad.select=G),e===Z&&(a.operationalPad.start=G)},unclickOperationalPad:function(a,t){var e=t.payload;e===Y&&(a.operationalPad.select=H),e===Z&&(a.operationalPad.start=H)},clickActionPad:function(a,t){var e=t.payload;e===K&&(a.actionPad.q=G),e===X&&(a.actionPad.e=G)},unclickActionPad:function(a,t){var e=t.payload;e===K&&(a.actionPad.q=H),e===X&&(a.actionPad.e=H)}}});var aa=i,ta=aa.LEFT,ea=aa.RIGHT,na=aa.UP,ia=aa.DOWN,ra=r,ca=ra.SELECT,oa=ra.START,da=c,la=da.Q,ua=da.E,sa=$.actions;const pa=function(){var a=(0,j.I0)(),t=function(t){return function(a,t){65!==a&&37!=a||t(sa.clickDirectionalPad(ta)),68!==a&&39!=a||t(sa.clickDirectionalPad(ea)),87!==a&&38!=a||t(sa.clickDirectionalPad(na)),83!==a&&40!=a||t(sa.clickDirectionalPad(ia)),32===a&&t(sa.clickOperationalPad(oa)),13===a&&t(sa.clickOperationalPad(ca)),81===a&&t(sa.clickActionPad(la)),69===a&&t(sa.clickActionPad(ua)),84!==a&&27!==a||t(sa.clickStartupSwitcher())}(t.keyCode,a)},e=function(t){return function(a,t){65!==a&&37!=a||t(sa.unclickDirectionalPad(ta)),68!==a&&39!=a||t(sa.unclickDirectionalPad(ea)),87!==a&&38!=a||t(sa.unclickDirectionalPad(na)),83!==a&&40!=a||t(sa.unclickDirectionalPad(ia)),32===a&&t(sa.unclickOperationalPad(oa)),13===a&&t(sa.unclickOperationalPad(ca)),81===a&&t(sa.unclickActionPad(la)),69===a&&t(sa.unclickActionPad(ua)),84!==a&&27!==a||t(sa.clickStartupSwitcher())}(t.keyCode,a)};(0,D.useEffect)((function(){return window.addEventListener("keydown",t),window.addEventListener("keyup",e),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",e)}}),[])};const ya=function(){pa()};var Pa=e(893);const ka=function(){return(0,Pa.jsx)("div",{children:"hello world"})};var fa=n.INACTIVATE;const Ta={status:fa,keypad:{startupSwitcher:fa,directionalPad:{left:fa,right:fa,up:fa,down:fa},operationalPad:{select:fa,start:fa},actionPad:{q:fa,e:fa}}};var Aa=n,ha=Aa.ACTIVATE,wa=Aa.INACTIVATE,va=i,Ea=va.LEFT,ba=va.RIGHT,ma=va.UP,Sa=va.DOWN,ga=r,Oa=ga.SELECT,Ia=ga.START,Ca=c,Va=Ca.Q,Da=Ca.E;const ja=(0,l.oM)({name:"hardware",initialState:Ta,reducers:{activateStatus:function(a){a.status=n.ACTIVATE},inactivateStatus:function(a){a.status=n.INACTIVATE},clickStartupSwitcher:function(a){a.keypad.startupSwitcher=n.ACTIVATE},unclickStartupSwitcher:function(a){a.keypad.startupSwitcher=n.INACTIVATE},clickDirectionalPad:function(a,t){var e=t.payload;e===Ea&&(a.keypad.directionalPad.left=ha),e===ba&&(a.keypad.directionalPad.right=ha),e===ma&&(a.keypad.directionalPad.up=ha),e===Sa&&(a.keypad.directionalPad.down=ha)},unclickDirectionalPad:function(a,t){var e=t.payload;e===Ea&&(a.keypad.directionalPad.left=wa),e===ba&&(a.keypad.directionalPad.right=wa),e===ma&&(a.keypad.directionalPad.up=wa),e===Sa&&(a.keypad.directionalPad.down=wa)},clickOperationalPad:function(a,t){var e=t.payload;e===Oa&&(a.keypad.operationalPad.select=ha),e===Ia&&(a.keypad.operationalPad.start=ha)},unclickOperationalPad:function(a,t){var e=t.payload;e===Oa&&(a.keypad.operationalPad.select=wa),e===Ia&&(a.keypad.operationalPad.start=wa)},clickActionPad:function(a,t){var e=t.payload;e===Va&&(a.keypad.actionPad.q=ha),e===Da&&(a.keypad.actionPad.e=ha)},unclickActionPad:function(a,t){var e=t.payload;e===Va&&(a.keypad.actionPad.q=wa),e===Da&&(a.keypad.actionPad.e=wa)}}});const La=function(){return(0,Pa.jsx)("div",{})};var Na=n.INACTIVATE;const xa={status:Na,keypad:{startupSwitcher:Na,directionalPad:{left:Na,right:Na,up:Na,down:Na},operationalPad:{select:Na,start:Na},actionPad:{q:Na,e:Na}}};var Ra=n,qa=Ra.ACTIVATE,Ua=Ra.INACTIVATE,Fa=i,Ga=Fa.LEFT,Ha=Fa.RIGHT,Qa=Fa.UP,Wa=Fa.DOWN,Ma=r,_a=Ma.SELECT,za=Ma.START,Ja=c,Ya=Ja.Q,Za=Ja.E;const Ba=(0,l.oM)({name:"system",initialState:xa,reducers:{activateStatus:function(a){a.status=n.ACTIVATE},inactivateStatus:function(a){a.status=n.INACTIVATE},clickStartupSwitcher:function(a){a.keypad.startupSwitcher=n.ACTIVATE},unclickStartupSwitcher:function(a){a.keypad.startupSwitcher=n.INACTIVATE},clickDirectionalPad:function(a,t){var e=t.payload;e===Ga&&(a.keypad.directionalPad.left=qa),e===Ha&&(a.keypad.directionalPad.right=qa),e===Qa&&(a.keypad.directionalPad.up=qa),e===Wa&&(a.keypad.directionalPad.down=qa)},unclickDirectionalPad:function(a,t){var e=t.payload;e===Ga&&(a.keypad.directionalPad.left=Ua),e===Ha&&(a.keypad.directionalPad.right=Ua),e===Qa&&(a.keypad.directionalPad.up=Ua),e===Wa&&(a.keypad.directionalPad.down=Ua)},clickOperationalPad:function(a,t){var e=t.payload;e===_a&&(a.keypad.operationalPad.select=qa),e===za&&(a.keypad.operationalPad.start=qa)},unclickOperationalPad:function(a,t){var e=t.payload;e===_a&&(a.keypad.operationalPad.select=Ua),e===za&&(a.keypad.operationalPad.start=Ua)},clickActionPad:function(a,t){var e=t.payload;e===Ya&&(a.keypad.actionPad.q=qa),e===Za&&(a.keypad.actionPad.e=qa)},unclickActionPad:function(a,t){var e=t.payload;e===Ya&&(a.keypad.actionPad.q=Ua),e===Za&&(a.keypad.actionPad.e=Ua)}}}),Ka=(0,V.UY)({mouse:x.reducer,keyboard:$.reducer,hardware:ja.reducer,system:Ba.reducer}),Xa=function(a){var t=a.children;return(0,Pa.jsx)(j.zt,{store:$a,children:t})},$a=(0,l.xC)({reducer:{gameboy:C.reducer,domains:Ka}});var at,tt=e(804);const et=(0,tt.vJ)(at||(nt=["\n  *,\n  *::before,\n  *::after {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body,\n  #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n  }\n"],it||(it=nt.slice(0)),at=Object.freeze(Object.defineProperties(nt,{raw:{value:Object.freeze(it)}}))));var nt,it,rt;const ct=tt.ZP.main(rt||(rt=function(a,t){return t||(t=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n"])),(function(a){var t=a.theme;return"\n  // surface\n  --surface: ".concat(t.palette.surface.main,";\n  --on-surface: ").concat(t.palette.surface.on,";\n  // background\n  --background: ").concat(t.palette.background.main,";\n  --on-background: ").concat(t.palette.background.on,";\n  // error\n  --error: ").concat(t.palette.error.main,";\n  --on-error: ").concat(t.palette.error.on,";\n  // primary\n  --primary: ").concat(t.palette.primary.main,";\n  --primary-on-light: ").concat(t.palette.primary.light,";\n  --primary-on-dark: ").concat(t.palette.primary.dark,";\n  --on-primary: ").concat(t.palette.primary.on,";\n  // secondary\n  --secondary: ").concat(t.palette.secondary.main,";\n  --secondary-on-light: ").concat(t.palette.secondary.light,";\n  --secondary-on-dark: ").concat(t.palette.secondary.dark,";\n  --on-primary: ").concat(t.palette.secondary.on,";\n")})),ot=function(a){var t=a.children;return(0,Pa.jsx)(ct,{theme:u,children:t})};var dt=function(a){return a.domains.keyboard},lt=function(a){return a.domains.hardware.keypad},ut=function(a){return a.domains.system.keypad},st=function(a){return a.gameboy.status};const pt=function(a,t){var e=t.startupSwitcher,o=t.directionalPad,d=t.operationalPad,l=t.actionPad,u=(0,j.v9)(dt),s=(0,j.v9)(lt),p=(0,j.v9)(ut);(0,D.useEffect)((function(){u.startupSwitcher!==n.ACTIVATE&&s.startupSwitcher!==n.ACTIVATE&&p.startupSwitcher!==n.ACTIVATE||(a(e.keyboard()),a(e.hardware()),a(e.system()),a(e.gameboy()))}),[u.startupSwitcher,s.startupSwitcher,p.startupSwitcher]),(0,D.useEffect)((function(){console.log("directional Pad was clicked"),u.directionalPad.left!==n.ACTIVATE&&s.directionalPad.left!==n.ACTIVATE||(a(o.keyboard(i.LEFT)),a(o.hardware(i.LEFT)),a(o.system(i.LEFT)),a(o.gameboy(i.LEFT))),u.directionalPad.right!==n.ACTIVATE&&s.directionalPad.right!==n.ACTIVATE||(a(o.keyboard(i.RIGHT)),a(o.hardware(i.RIGHT)),a(o.system(i.RIGHT)),a(o.gameboy(i.RIGHT))),u.directionalPad.up!==n.ACTIVATE&&s.directionalPad.up!==n.ACTIVATE||(a(o.keyboard(i.UP)),a(o.hardware(i.UP)),a(o.system(i.UP)),a(o.gameboy(i.UP))),u.directionalPad.down!==n.ACTIVATE&&s.directionalPad.down!==n.ACTIVATE||(a(o.keyboard(i.DOWN)),a(o.hardware(i.DOWN)),a(o.system(i.DOWN)),a(o.gameboy(i.DOWN)))}),[u.directionalPad,s.directionalPad]),(0,D.useEffect)((function(){u.operationalPad.select!==n.ACTIVATE&&s.operationalPad.select!==n.ACTIVATE||(a(d.keyboard(r.SELECT)),a(d.hardware(r.SELECT)),a(d.system(r.SELECT)),a(d.gameboy(r.SELECT))),u.operationalPad.start!==n.ACTIVATE&&s.operationalPad.start!==n.ACTIVATE||(a(d.keyboard(r.START)),a(d.hardware(r.START)),a(d.system(r.START)),a(d.gameboy(r.START)))}),[u.operationalPad,s.operationalPad]),(0,D.useEffect)((function(){u.actionPad.q!==n.ACTIVATE&&s.actionPad.q!==n.ACTIVATE||(a(l.keyboard(c.Q)),a(l.hardware(c.Q)),a(l.system(c.Q)),a(l.gameboy(c.Q))),u.actionPad.e!==n.ACTIVATE&&s.actionPad.e!==n.ACTIVATE||(a(l.keyboard(c.E)),a(l.hardware(c.E)),a(l.system(c.E)),a(l.gameboy(c.E)))}),[u.actionPad,s.actionPad])};const yt=function(){var a,t,e;R(),ya(),a=(0,j.I0)(),t=C.actions,e=(0,j.v9)((function(a){return a.domains.mouse})),(0,D.useEffect)((function(){a(t.setMousePosition(e))}),[e]),function(){var a=(0,j.I0)(),t=(0,j.v9)(dt),e=(0,j.v9)(lt),i=(0,j.v9)(ut),r=(0,j.v9)(st),c=ja.actions,o=Ba.actions,d=C.actions;(0,D.useEffect)((function(){t.startupSwitcher!==n.ACTIVATE&&e.startupSwitcher!==n.ACTIVATE&&i.startupSwitcher!==n.ACTIVATE||(r===n.ACTIVATE?(a(c.inactivateStatus()),a(o.inactivateStatus()),a(d.inactivateStatus())):(a(c.activateStatus()),a(o.activateStatus()),a(d.activateStatus())))}),[t.startupSwitcher,e.startupSwitcher,i.startupSwitcher])}(),function(){var a=(0,j.I0)(),t=$.actions,e=ja.actions,n=Ba.actions,i=C.actions;pt(a,{startupSwitcher:{keyboard:t.clickStartupSwitcher,hardware:e.clickStartupSwitcher,system:n.clickStartupSwitcher,gameboy:i.clickStartupSwitcher},directionalPad:{keyboard:t.clickDirectionalPad,hardware:e.clickDirectionalPad,system:n.clickDirectionalPad,gameboy:i.clickDirectionalPad},operationalPad:{keyboard:t.clickOperationalPad,hardware:e.clickOperationalPad,system:n.clickOperationalPad,gameboy:i.clickOperationalPad},actionPad:{keyboard:t.clickActionPad,hardware:e.clickActionPad,system:n.clickActionPad,gameboy:i.clickActionPad}}),pt(a,{startupSwitcher:{keyboard:t.unclickStartupSwitcher,hardware:e.unclickStartupSwitcher,system:n.unclickStartupSwitcher,gameboy:i.unclickStartupSwitcher},directionalPad:{keyboard:t.unclickDirectionalPad,hardware:e.unclickDirectionalPad,system:n.unclickDirectionalPad,gameboy:i.unclickDirectionalPad},operationalPad:{keyboard:t.unclickOperationalPad,hardware:e.unclickOperationalPad,system:n.unclickOperationalPad,gameboy:i.unclickOperationalPad},actionPad:{keyboard:t.unclickActionPad,hardware:e.unclickActionPad,system:n.unclickActionPad,gameboy:i.unclickActionPad}})}();var i=(0,j.v9)((function(a){return a.gameboy.keys.directionalPad}));return console.log(i),(0,Pa.jsxs)(ot,{children:[(0,Pa.jsx)(ka,{}),(0,Pa.jsx)(La,{})]})};(0,d.s)(document.querySelector("#root")).render((0,Pa.jsxs)(Xa,{children:[(0,Pa.jsx)(et,{}),(0,Pa.jsx)(yt,{})]}))}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,a=[],n.O=(t,e,i,r)=>{if(!e){var c=1/0;for(u=0;u<a.length;u++){for(var[e,i,r]=a[u],o=!0,d=0;d<e.length;d++)(!1&r||c>=r)&&Object.keys(n.O).every((a=>n.O[a](e[d])))?e.splice(d--,1):(o=!1,r<c&&(c=r));if(o){a.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=a.length;u>0&&a[u-1][2]>r;u--)a[u]=a[u-1];a[u]=[e,i,r]},n.n=a=>{var t=a&&a.__esModule?()=>a.default:()=>a;return n.d(t,{a:t}),t},n.d=(a,t)=>{for(var e in t)n.o(t,e)&&!n.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:t[e]})},n.o=(a,t)=>Object.prototype.hasOwnProperty.call(a,t),(()=>{var a={179:0};n.O.j=t=>0===a[t];var t=(t,e)=>{var i,r,[c,o,d]=e,l=0;if(c.some((t=>0!==a[t]))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(d)var u=d(n)}for(t&&t(e);l<c.length;l++)r=c[l],n.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return n.O(u)},e=self.webpackChunk_guhcalm_cute_gameboy=self.webpackChunk_guhcalm_cute_gameboy||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))})();var i=n.O(void 0,[977],(()=>n(662)));i=n.O(i)})();
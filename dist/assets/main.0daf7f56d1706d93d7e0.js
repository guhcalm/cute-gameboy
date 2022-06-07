(()=>{"use strict";var n,t={840:(n,t,a)=>{var e,r,i,o,c,p=a(745),s=a(168);!function(n){n[n.ACTIVATE=0]="ACTIVATE",n[n.INACTIVATE=1]="INACTIVATE"}(e||(e={})),function(n){n[n.LEFT=0]="LEFT",n[n.RIGHT=1]="RIGHT",n[n.UP=2]="UP",n[n.DOWN=3]="DOWN"}(r||(r={})),function(n){n[n.SELECT=0]="SELECT",n[n.START=1]="START"}(i||(i={})),function(n){n[n.E=0]="E",n[n.Q=1]="Q"}(o||(o={})),function(n){n[n.DEFAULT=0]="DEFAULT"}(c||(c={}));const d={name:c.DEFAULT,palette:{surface:{main:"#bcaaa4",on:"#ffffff"},background:{main:"#bcaaa4",on:"rgb(38,38,38)"},error:{main:"#b00020",on:"#ffffff"},primary:{light:"#EFEBE9",main:"#A1887F",dark:"#6D4C41",on:"rgb(38,38,38)"},secondary:{light:"rgb(110,110,110)",main:"rgb(38,38,38)",dark:"black",on:"#A1887F"},terciary:{light:"#FFB74D",main:"#FB8C00",dark:"#E65100",on:"#ffffff"},quaternary:{light:"#FF5A49",main:"#b71c1c",dark:"#4A0000",on:"#ffffff"},quinary:{light:"#9ab1ed",main:"#143079",dark:"#0a183c",on:"#ffffff"}}};var l=e.INACTIVATE;const x={status:l,mouse:{position:{x:0,y:0}},settings:{theme:d},keys:{startupSwitcher:l,directionalPad:{left:l,right:l,up:l,down:l},operationalPad:{select:l,start:l},actionPad:{q:l,e:l}}};function u(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function h(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}var f=e,v=f.ACTIVATE,y=f.INACTIVATE,b=r,g=b.LEFT,k=b.RIGHT,m=b.UP,P=b.DOWN,w=i,j=w.SELECT,O=w.START,T=o,A=T.Q,E=T.E;const S=(0,s.oM)({name:"gameboy",initialState:x,reducers:{setMousePosition:function(n,t){var a=t.payload;n.mouse=function(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){h(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}({},a)},activateStatus:function(n){n.status=v},inactivateStatus:function(n){n.status=y},clickStartupSwitcher:function(n){n.keys.startupSwitcher=v},unclickStartupSwitcher:function(n){n.keys.startupSwitcher=v},clickDirectionalPad:function(n,t){var a=t.payload;a===g&&(n.keys.directionalPad.left=v),a===k&&(n.keys.directionalPad.right=v),a===m&&(n.keys.directionalPad.up=v),a===P&&(n.keys.directionalPad.down=v)},unclickDirectionalPad:function(n,t){var a=t.payload;a===g&&(n.keys.directionalPad.left=v),a===k&&(n.keys.directionalPad.right=v),a===m&&(n.keys.directionalPad.up=v),a===P&&(n.keys.directionalPad.down=v)},clickOperationalPad:function(n,t){var a=t.payload;a===j&&(n.keys.operationalPad.select=v),a===O&&(n.keys.operationalPad.start=v)},unclickOperationalPad:function(n,t){var a=t.payload;a===j&&(n.keys.operationalPad.select=y),a===O&&(n.keys.operationalPad.start=y)},clickActionPad:function(n,t){var a=t.payload;a===A&&(n.keys.actionPad.q=v),a===E&&(n.keys.actionPad.e=v)},unclickActionPad:function(n,t){var a=t.payload;a===A&&(n.keys.actionPad.q=y),a===E&&(n.keys.actionPad.e=y)}}});var I=a(857),q=a(294),C=a(998);function D(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function z(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}const N=(0,s.oM)({name:"mouse",initialState:{position:{x:0,y:0}},reducers:{setMousePosition:function(n,t){var a=t.payload;n.position=function(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){z(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}({},a.position)}}});const V=function(){var n,t,a;n=(0,C.I0)(),t=N.actions,a=function(a){n(t.setMousePosition({position:{x:a.x,y:a.y}}))},(0,q.useEffect)((function(){return window.addEventListener("mousemove",a),function(){window.removeEventListener("mousemove",a)}}),[])};var L=e.INACTIVATE;const Z={startupSwitcher:L,directionalPad:{left:L,right:L,up:L,down:L},operationalPad:{select:L,start:L},actionPad:{q:L,e:L}};var F=e,R=F.ACTIVATE,M=F.INACTIVATE,U=r,G=U.LEFT,H=U.RIGHT,Q=U.UP,W=U.DOWN,_=i,B=_.SELECT,Y=_.START,X=o,J=X.Q,K=X.E;const $=(0,s.oM)({name:"keyboard",initialState:Z,reducers:{clickStartupSwitcher:function(n){n.startupSwitcher=e.ACTIVATE},unclickStartupSwitcher:function(n){n.startupSwitcher=e.INACTIVATE},clickDirectionalPad:function(n,t){var a=t.payload;a===G&&(n.directionalPad.left=R),a===H&&(n.directionalPad.right=R),a===Q&&(n.directionalPad.up=R),a===W&&(n.directionalPad.down=R)},unclickDirectionalPad:function(n,t){var a=t.payload;a===G&&(n.directionalPad.left=M),a===H&&(n.directionalPad.right=M),a===Q&&(n.directionalPad.up=M),a===W&&(n.directionalPad.down=M)},clickOperationalPad:function(n,t){var a=t.payload;a===B&&(n.operationalPad.select=R),a===Y&&(n.operationalPad.start=R)},unclickOperationalPad:function(n,t){var a=t.payload;a===B&&(n.operationalPad.select=M),a===Y&&(n.operationalPad.start=M)},clickActionPad:function(n,t){var a=t.payload;a===J&&(n.actionPad.q=R),a===K&&(n.actionPad.e=R)},unclickActionPad:function(n,t){var a=t.payload;a===J&&(n.actionPad.q=M),a===K&&(n.actionPad.e=M)}}});var nn=r,tn=nn.LEFT,an=nn.RIGHT,en=nn.UP,rn=nn.DOWN,on=i,cn=on.SELECT,pn=on.START,sn=o,dn=sn.Q,ln=sn.E,xn=$.actions;const un=function(){var n=(0,C.I0)(),t=function(t){return function(n,t){65!==n&&37!=n||t(xn.clickDirectionalPad(tn)),68!==n&&39!=n||t(xn.clickDirectionalPad(an)),87!==n&&38!=n||t(xn.clickDirectionalPad(en)),83!==n&&40!=n||t(xn.clickDirectionalPad(rn)),32===n&&t(xn.clickOperationalPad(pn)),13===n&&t(xn.clickOperationalPad(cn)),81===n&&t(xn.clickActionPad(dn)),69===n&&t(xn.clickActionPad(ln)),84!==n&&27!==n||t(xn.clickStartupSwitcher())}(t.keyCode,n)},a=function(t){return function(n,t){65!==n&&37!=n||t(xn.unclickDirectionalPad(tn)),68!==n&&39!=n||t(xn.unclickDirectionalPad(an)),87!==n&&38!=n||t(xn.unclickDirectionalPad(en)),83!==n&&40!=n||t(xn.unclickDirectionalPad(rn)),32===n&&t(xn.unclickOperationalPad(pn)),13===n&&t(xn.unclickOperationalPad(cn)),81===n&&t(xn.unclickActionPad(dn)),69===n&&t(xn.unclickActionPad(ln)),84!==n&&27!==n||t(xn.unclickStartupSwitcher())}(t.keyCode,n)};(0,q.useEffect)((function(){return window.addEventListener("keydown",t),window.addEventListener("keyup",a),function(){window.removeEventListener("keydown",t),window.removeEventListener("keyup",a)}}),[])};const hn=function(){un()};var fn,vn=function(n){return n.domains.keyboard},yn=function(n){return n.domains.hardware.status},bn=function(n){return n.domains.hardware.keypad},gn=function(n){return n.domains.system.keypad},kn=function(n){return n.gameboy.status},mn=a(804);const Pn=mn.ZP.div(fn||(wn=["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  will-change: width, height;\n  transition: 0.5s width, 0.5s height;\n  &.inactivate {\n    height: 490px;\n    width: ","px;\n  }\n  &.activate {\n    height: 100vh;\n    width: 100vw;\n  }\n"],jn||(jn=wn.slice(0)),fn=Object.freeze(Object.defineProperties(wn,{raw:{value:Object.freeze(jn)}}))),284.2);var wn,jn,On,Tn,An;function En(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Sn=mn.ZP.div(On||(On=En(['\n  height: 25px;\n  margin-bottom: 5px;\n  gap: 5px;\n  width: 100%;\n  border-top-right-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &::before,\n  &::after {\n    will-change: border-radius;\n    transition: 0.5s border-radius;\n    content: "";\n    display: block;\n    background-color: var(--primary);\n    width: 25px;\n    height: 100%;\n  }\n  &::before {\n    box-shadow: inset 5px 5px 5px -5px var(--primary-on-light),\n      inset 20px 20px 20px -20px var(--primary-on-light),\n      8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);\n  }\n  &::after {\n    box-shadow: inset -8px 0px 8px -8px var(--primary-on-dark),\n      inset -20px 0px 20px -20px var(--primary-on-dark),\n      inset 0 5px 5px -5px var(--primary-on-light),\n      inset 0 20px 20px -20px var(--primary-on-light),\n      8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);\n    z-index: 1;\n  }\n\n  &.inactivate {\n    &::after {\n      border-top-right-radius: 10px;\n    }\n    &::before {\n      border-top-left-radius: 10px;\n    }\n  }\n  &.activate {\n    &::after {\n      border-top-right-radius: 0px;\n    }\n    &::before {\n      border-top-left-radius: 0px;\n    }\n  }\n'])));var In=mn.ZP.span(Tn||(Tn=En(["\n  flex-grow: 1;\n  display: block;\n  background-color: var(--primary);\n  position: relative;\n  height: 100%;\n  box-shadow: inset 0 5px 5px -5px var(--primary-on-light),\n    inset 0 20px 20px -20px var(--primary-on-light),\n    8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4);\n"]))),qn=mn.ZP.div(An||(An=En(["\n  position: absolute;\n  font-size: 7px;\n  color: var(--primary);\n  text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);\n  height: 14px;\n  width: 60px;\n  font-weight: 900;\n  bottom: 3.5px;\n  left: 10px;\n  border-radius: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background);\n  box-shadow: inset 0.5px 0.5px 2px var(--primary-on-dark),\n    inset -0.5px -0.5px 2px var(--primary-on-light),\n    inset 1px 1px 8px rgba(0, 0, 0, 0.4), inset 5px 5px 20px rgba(0, 0, 0, 0.4);\n"]))),Cn=a(893);const Dn=function(){var n=(0,C.v9)(yn);return(0,Cn.jsx)(Sn,{className:n?"activate":"inactivate",children:(0,Cn.jsx)(In,{children:(0,Cn.jsx)(qn,{children:"◀ OFF•ON ▶"})})})};var zn;const Nn=mn.ZP.div(zn||(zn=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  padding: 20px 23px;\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  background-color: var(--primary);\n  box-shadow: inset -5px -5px 5px -5px var(--primary-on-dark),\n    inset -20px -20px 20px -20px var(--primary-on-dark),\n    8px 8px 8px rgba(0, 0, 0, 0.4), 20px 20px 30px rgba(0, 0, 0, 0.4),\n    inset 8px 0px 8px -8px var(--primary-on-light),\n    inset 20px 0px 20px -20px var(--primary-on-light);\n  &::before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    background-color: var(--primary-on-light);\n    width: 65%;\n    height: 75%;\n    border-radius: 50% / 15px;\n    filter: blur(10px);\n    opacity: 0.1;\n  }\n\n  will-change: border-radius, width, height;\n  transition: 0.5s border-radius;\n  &.inactivate {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 70px;\n  }\n  &.activate {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n']))),Vn=function(n){var t=n.children,a=(0,C.v9)(yn);return(0,Cn.jsx)(Nn,{className:a?"activate":"inactivate",children:t})};var Ln;const Zn=mn.ZP.div(Ln||(Ln=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  z-index: 1;\n  position: absolute;\n  font-size: 7px;\n  height: 14px;\n  width: 50px;\n  color: var(--primary);\n  background-color: var(--background);\n  font-weight: 900;\n  bottom: 6px;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-shadow: 0.5px 0.5px 1px var(--primary-on-dark);\n  box-shadow: inset 0.5px 0.5px 2px var(--primary-on-dark),\n    inset -0.5px -0.5px 2px var(--primary-on-light),\n    inset 1px 1px 8px rgba(0, 0, 0, 0.4), inset 5px 5px 20px rgba(0, 0, 0, 0.4);\n"]))),Fn=function(){return(0,Cn.jsx)(Zn,{children:"☊PHONES"})};var Rn,Mn,Un,Gn,Hn;function Qn(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const Wn=mn.ZP.div(Rn||(Rn=Qn(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  background-color: var(--secondary);\n  border-radius: 10px;\n  border-bottom-right-radius: 50px;\n  box-shadow: -1px -1px 2px var(--primary-on-dark),\n    1px 1px 1px var(--primary-on-light);\n\n  will-change: height;\n  transition: 0.5s height;\n  &.inactivate {\n    height: 42%;\n  }\n\n  &.activate {\n    height: 42%;\n    @media screen and (min-width: 700px) {\n      height: 60%;\n    }\n  }\n"])));var _n=mn.ZP.div(Mn||(Mn=Qn(["\n  position: relative;\n  height: calc(100% - 50px);\n  width: calc(100% - 100px);\n  background-color: var(--terciary);\n  box-shadow: inset 0 0 15px 5px var(--terciary-on-dark);\n"]))),Bn=mn.ZP.div(Un||(Un=Qn(['\n  position: absolute;\n  top: 12.5px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: calc(100% - 20px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--on-secondary);\n  &::before,\n  &::after {\n    content: "";\n    display: block;\n    flex-grow: 1;\n    height: 8px;\n    border-top: 2px solid var(--quaternary);\n    border-bottom: 2px solid var(--quinary);\n    margin: 5px;\n  }\n  span {\n    font-size: 8px;\n  }\n']))),Yn=mn.ZP.div(Gn||(Gn=Qn(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transform: translateY(calc(100% + 3px));\n  color: var(--quinary);\n  span:nth-child(1) {\n    font-size: 10px;\n    font-weight: 1000;\n  }\n  span:nth-child(2) {\n    font-size: 15px;\n    font-style: italic;\n    font-weight: 500;\n  }\n  span:nth-child(3) {\n    font-size: 5px;\n    font-weight: 1000;\n  }\n"]))),Xn=mn.ZP.div(Hn||(Hn=Qn(['\n  position: absolute;\n  left: 25px;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &::after {\n    will-change: width, height, box-shadow, background-color;\n    transition: box-shadow 0.8s;\n    position: relative;\n    content: "";\n    display: block;\n    border-radius: 50%;\n    background-color: var(--quaternary);\n    position: relative;\n  }\n  span {\n    display: block;\n    position: absolute;\n    color: var(--on-secondary);\n    font-size: 8px;\n    bottom: 0;\n    transform: translateY(calc(100% + 5px));\n  }\n\n  &.inactivate {\n    &::after {\n      width: 7px;\n      height: 7px;\n      box-shadow: inset 0 0 2px var(--quaternary-on-light),\n        inset 0 0 1.5px var(--quaternary-on-dark);\n    }\n  }\n  &.activate {\n    &::after {\n      width: 5px;\n      height: 5px;\n      background-color: #fff6a9;\n      box-shadow: 0 0 15px 4px #ffa500, 0 0 20px 5px #ffa500,\n        0 0 40px 10px #ffa500, 0 0 60px 15px #ff0000, 0 0 10px 3px #ff8d00,\n        0 0 98px 30px #ff0000;\n    }\n  }\n'])));const Jn=function(){var n=(0,C.v9)(yn);return(0,Cn.jsxs)(Wn,{className:n?"activate":"inactivate",children:[(0,Cn.jsx)(Bn,{children:(0,Cn.jsx)("span",{children:"DOT MATRIX WITH STERIO SOUND"})}),(0,Cn.jsx)(Xn,{className:n?"activate":"inactivate",children:(0,Cn.jsx)("span",{children:"Battery"})}),(0,Cn.jsx)(_n,{}),(0,Cn.jsxs)(Yn,{children:[(0,Cn.jsx)("span",{children:"Nitendo"})," ",(0,Cn.jsx)("span",{children:"GAME BOY"})," ",(0,Cn.jsx)("span",{children:"TM"})]})]})};var Kn,$n,nt,tt,at,et;function rt(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const it=mn.ZP.div(Kn||(Kn=rt(['\n  --diameter: 90px;\n  height: var(--diameter);\n  width: var(--diameter);\n  position: absolute;\n  left: 20px;\n  border-radius: 50%;\n  --higher: 40%;\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    backdrop-filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));\n    &::after {\n      width: 30%;\n      height: 30%;\n      content: "";\n      display: block;\n      background-color: var(--secondary-on-dark);\n    }\n  }\n\n  will-change: top;\n  transition: 0.5s top;\n  &.inactivate {\n    top: calc(46% + 30px);\n  }\n  &.activate {\n    top: calc(60% + 40px);\n  }\n'])));var ot=mn.ZP.button($n||($n=rt(["\n  position: absolute;\n  height: var(--higher);\n  width: calc((100% - var(--higher) + 2px) / 2);\n  left: 0;\n  top: 50%;\n  transform: translatey(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(100% 0, 100% 100%, 0 50%);\n  }\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n    inset 0.7px -0.7px 0 0 var(--secondary),\n    inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset 1.4px -1.4px 0 0 var(--secondary-on-dark),\n    inset 2px 2px 2px 0 var(--secondary-on-light),\n    inset 2px -2px 2px 0 var(--secondary-on-light),\n    inset 0px -8px 4px -4px var(--secondary-on-dark),\n    inset 0px 8px 4px -4px var(--secondary-on-light),\n    1px 1px 3px 0 rgba(0, 0, 0, 0.4);\n  &:hover,\n  &:focus,\n  &:active,\n  &.pressed {\n    box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n      inset 0.7px -0.7px 0 0 var(--secondary),\n      inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset 1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset 2px 2px 2px 0 var(--secondary-on-light),\n      inset 2px -2px 2px 0 var(--secondary-on-light);\n  }\n"]))),ct=mn.ZP.button(nt||(nt=rt(["\n  position: absolute;\n  height: var(--higher);\n  width: calc((100% - var(--higher) + 2px) / 2);\n  right: 0;\n  top: 50%;\n  transform: translatey(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(0 0%, 100% 50%, 0% 100%);\n  }\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: inset -0.7px 0.7px 0 0 var(--secondary),\n    inset -0.7px -0.7px 0 0 var(--secondary),\n    inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n    inset -2px 2px 2px 0 var(--secondary-on-light),\n    inset -2px -2px 2px 0 var(--secondary-on-light),\n    inset 0px -8px 4px -4px var(--secondary-on-dark),\n    inset 0px 8px 4px -4px var(--secondary-on-light),\n    0px 2px 2px 0 rgba(0, 0, 0, 0.4);\n  &:hover,\n  &:focus,\n  &:active,\n  &.pressed {\n    box-shadow: inset -0.7px 0.7px 0 0 var(--secondary),\n      inset -0.7px -0.7px 0 0 var(--secondary),\n      inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset -2px 2px 2px 0 var(--secondary-on-light),\n      inset -2px -2px 2px 0 var(--secondary-on-light);\n  }\n"]))),pt=mn.ZP.button(tt||(tt=rt(["\n  position: absolute;\n  height: calc((100% - var(--higher) + 2px) / 2);\n  width: var(--higher);\n  left: 50%;\n  top: 0;\n  transform: translatex(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(0 100%, 50% 0%, 100% 100%);\n  }\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n    inset -0.7px 0.7px 0 0 var(--secondary),\n    inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n    inset 2px 2px 2px 0 var(--secondary-on-light),\n    inset -2px 2px 2px 0 var(--secondary-on-light),\n    1px 1px 3px 0 rgba(0, 0, 0, 0.4);\n  &:hover,\n  &:focus,\n  &:active,\n  &.pressed {\n    box-shadow: inset 0.7px 0.7px 0 0 var(--secondary),\n      inset -0.7px 0.7px 0 0 var(--secondary),\n      inset 1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset -1.4px 1.4px 0 0 var(--secondary-on-dark),\n      inset 2px 2px 2px 0 var(--secondary-on-light),\n      inset -2px 2px 2px 0 var(--secondary-on-light);\n  }\n"]))),st=mn.ZP.button(at||(at=rt(["\n  position: absolute;\n  height: calc((100% - var(--higher) + 2px) / 2);\n  width: var(--higher);\n  left: 50%;\n  bottom: 0;\n  transform: translatex(-50%);\n  background-color: var(--secondary);\n  &::after {\n    clip-path: polygon(0 0%, 50% 100%, 100% 0%);\n  }\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  box-shadow: inset 0.7px -0.7px 0 0 var(--secondary),\n    inset -0.7px -0.7px 0 0 var(--secondary),\n    inset 1px -1px 0 0 var(--secondary-on-dark),\n    inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n    inset 2px -2px 2px 0 var(--secondary-on-light),\n    inset -2px -2px 2px 0 var(--secondary-on-light),\n    inset 0px -32px 20px -20px var(--secondary-on-dark),\n    1px 1px 3px 0 rgba(0, 0, 0, 0.4);\n  &:hover,\n  &:focus,\n  &:active,\n  &.pressed {\n    box-shadow: inset 0.7px -0.7px 0 0 var(--secondary),\n      inset -0.7px -0.7px 0 0 var(--secondary),\n      inset 1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset -1.4px -1.4px 0 0 var(--secondary-on-dark),\n      inset 2px -2px 2px 0 var(--secondary-on-light),\n      inset -2px -2px 2px 0 var(--secondary-on-light);\n  }\n"]))),dt=mn.ZP.button(et||(et=rt(["\n  position: absolute;\n  height: var(--higher);\n  width: var(--higher);\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--secondary);\n  &::after {\n    width: 50% !important;\n    height: 50% !important;\n    border-radius: 50%;\n    transform: rotate(-30deg);\n    background: linear-gradient(\n      var(--secondary-on-dark),\n      var(--secondary-on-light)\n    );\n  }\n"])));const lt=function(){var n=(0,C.v9)(yn);return(0,Cn.jsxs)(it,{className:n?"activate":"inactivate",children:[(0,Cn.jsx)(ot,{}),(0,Cn.jsx)(pt,{}),(0,Cn.jsx)(ct,{}),(0,Cn.jsx)(st,{}),(0,Cn.jsx)(dt,{})]})};var xt,ut;function ht(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const ft=mn.ZP.div(xt||(xt=ht(["\n  --diameter: 110px;\n  height: var(--diameter);\n  width: var(--diameter);\n  position: absolute;\n  right: 20px;\n  transform: rotate(-30deg);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  will-change: top;\n  transition: top 0.5s;\n  &.inactivate {\n    top: calc(46% + 18px);\n  }\n  &.activate {\n    top: calc(60% + 28px);\n  }\n"])));var vt=mn.ZP.button(ut||(ut=ht(["\n  --diameter: 50px;\n  height: var(--diameter);\n  width: var(--diameter);\n  background-color: var(--quaternary);\n  border-radius: 50%;\n  box-shadow: inset 0 0 0 0.7px var(--quaternary),\n    inset 0 0 0 1.4px var(--quaternary-on-dark),\n    inset 0 0 2px 2px var(--quaternary-on-light),\n    inset 0 -15px 8px -8px var(--quaternary-on-dark),\n    inset 0 15px 8px -8px var(--quaternary-on-light),\n    1px 1px 3px rgba(0, 0, 0, 0.4);\n  &:hover,\n  &:focus,\n  &:active,\n  &.pressed {\n    text-shadow: none;\n    box-shadow: inset 0 0 0 0.7px var(--quaternary),\n      inset 0 0 0 1.4px var(--quaternary-on-dark),\n      inset 0 0 2px 2px var(--quaternary-on-light);\n  }\n\n  span {\n    display: block;\n    transform: rotate(30deg);\n    color: var(--quaternary-on-dark);\n    font-weight: 900;\n    font-size: 17px;\n    text-shadow: 0 0 2px var(--quaternary-on-light),\n      0 1px 2px var(--quaternary-on-light);\n  }\n"])));const yt=function(){var n=(0,C.v9)(yn);return(0,Cn.jsxs)(ft,{className:n?"activate":"inactivate",children:[(0,Cn.jsx)(vt,{children:(0,Cn.jsx)("span",{children:"Q"})}),(0,Cn.jsx)(vt,{children:(0,Cn.jsx)("span",{children:"E"})})]})};var bt,gt;function kt(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const mt=mn.ZP.div(bt||(bt=kt(["\n  position: absolute;\n  left: 50%;\n  bottom: 18%;\n  transform: translate(-50%, 50%);\n  display: flex;\n  gap: 5px;\n"])));var Pt=mn.ZP.div(gt||(gt=kt(["\n  position: relative;\n  height: 12px;\n  width: 45px;\n  transform: rotate(-30deg);\n\n  button {\n    background-color: var(--secondary-on-dark);\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n    box-shadow: inset 0 0 0 0.7px var(--secondary),\n      inset 0 0 0 1.4px var(--secondary-on-dark),\n      inset 0 0 2px 2px var(--secondary-on-light),\n      inset 0px -5px 5px -5px var(--secondary-on-dark),\n      inset 0px 5px 5px -5px var(--secondary-on-light),\n      1px 1px 3px rgba(0, 0, 0, 0.4);\n    &:hover,\n    &:focus,\n    &:active,\n    &.pressed {\n      box-shadow: inset 0 0 0 0.7px var(--secondary),\n        inset 0 0 0 1.4px var(--secondary-on-dark),\n        inset 0 0 2px 2px var(--secondary-on-light);\n    }\n  }\n\n  span {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    left: 50%;\n    transform: translate(-50%, calc(100% + 8px));\n    font-size: 8px;\n    font-weight: 900;\n    color: var(--quinary);\n  }\n"])));const wt=function(){return(0,Cn.jsxs)(mt,{children:[(0,Cn.jsxs)(Pt,{children:[(0,Cn.jsx)("button",{}),(0,Cn.jsx)("span",{children:"SELECT"})]}),(0,Cn.jsxs)(Pt,{children:[(0,Cn.jsx)("button",{}),(0,Cn.jsx)("span",{children:"START"})]})]})};var jt;const Ot=mn.ZP.div(jt||(jt=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(['\n  position: absolute;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 75px;\n  height: 80px;\n  right: 20px;\n  bottom: 10px;\n  div {\n    transform: rotate(-30deg);\n    min-width: 100%;\n    margin-top: 15px;\n    height: 55%;\n    display: flex;\n    justify-content: space-between;\n    span {\n      height: 100%;\n      width: 5px;\n      border-radius: 2.5px;\n      background-color: var(--background);\n      position: relative;\n      box-shadow: inset 1px 1px 1px var(--primary-on-dark),\n        inset -1px -1px 1px var(--primary-on-light);\n      &::before {\n        content: "";\n        display: block;\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        height: 35%;\n        opacity: 0.5;\n        background-color: var(--primary-on-dark);\n        filter: blur(1px);\n      }\n    }\n    &::before {\n      content: "";\n      display: block;\n      background-color: var(--primary-on-dark);\n      position: absolute;\n      left: 50%;\n      top: 70%;\n      transform: translateX(-50%);\n      width: 300px;\n      height: 100px;\n      filter: blur(10px);\n    }\n  }\n']))),Tt=function(){return(0,Cn.jsx)(Ot,{children:(0,Cn.jsxs)("div",{children:[(0,Cn.jsx)("span",{}),(0,Cn.jsx)("span",{}),(0,Cn.jsx)("span",{}),(0,Cn.jsx)("span",{}),(0,Cn.jsx)("span",{}),(0,Cn.jsx)("span",{})]})})},At=function(){var n=(0,C.v9)(yn);return(0,Cn.jsxs)(Pn,{className:n?"activate":"inactivate",children:[(0,Cn.jsx)(Dn,{}),(0,Cn.jsxs)(Vn,{children:[(0,Cn.jsx)(Jn,{}),(0,Cn.jsx)(lt,{}),(0,Cn.jsx)(yt,{}),(0,Cn.jsx)(wt,{}),(0,Cn.jsx)(Tt,{})]}),(0,Cn.jsx)(Fn,{})]})};const Et=function(){return(0,Cn.jsx)(At,{})};var St=e.INACTIVATE;const It={status:St,keypad:{startupSwitcher:St,directionalPad:{left:St,right:St,up:St,down:St},operationalPad:{select:St,start:St},actionPad:{q:St,e:St}}};var qt=e,Ct=qt.ACTIVATE,Dt=qt.INACTIVATE,zt=r,Nt=zt.LEFT,Vt=zt.RIGHT,Lt=zt.UP,Zt=zt.DOWN,Ft=i,Rt=Ft.SELECT,Mt=Ft.START,Ut=o,Gt=Ut.Q,Ht=Ut.E;const Qt=(0,s.oM)({name:"hardware",initialState:It,reducers:{activateStatus:function(n){n.status=e.ACTIVATE},inactivateStatus:function(n){n.status=e.INACTIVATE},clickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.ACTIVATE},unclickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.INACTIVATE},clickDirectionalPad:function(n,t){var a=t.payload;a===Nt&&(n.keypad.directionalPad.left=Ct),a===Vt&&(n.keypad.directionalPad.right=Ct),a===Lt&&(n.keypad.directionalPad.up=Ct),a===Zt&&(n.keypad.directionalPad.down=Ct)},unclickDirectionalPad:function(n,t){var a=t.payload;a===Nt&&(n.keypad.directionalPad.left=Dt),a===Vt&&(n.keypad.directionalPad.right=Dt),a===Lt&&(n.keypad.directionalPad.up=Dt),a===Zt&&(n.keypad.directionalPad.down=Dt)},clickOperationalPad:function(n,t){var a=t.payload;a===Rt&&(n.keypad.operationalPad.select=Ct),a===Mt&&(n.keypad.operationalPad.start=Ct)},unclickOperationalPad:function(n,t){var a=t.payload;a===Rt&&(n.keypad.operationalPad.select=Dt),a===Mt&&(n.keypad.operationalPad.start=Dt)},clickActionPad:function(n,t){var a=t.payload;a===Gt&&(n.keypad.actionPad.q=Ct),a===Ht&&(n.keypad.actionPad.e=Ct)},unclickActionPad:function(n,t){var a=t.payload;a===Gt&&(n.keypad.actionPad.q=Dt),a===Ht&&(n.keypad.actionPad.e=Dt)}}});const Wt=function(){return(0,Cn.jsx)("div",{})};var _t=e.INACTIVATE;const Bt={status:_t,keypad:{startupSwitcher:_t,directionalPad:{left:_t,right:_t,up:_t,down:_t},operationalPad:{select:_t,start:_t},actionPad:{q:_t,e:_t}}};var Yt=e,Xt=Yt.ACTIVATE,Jt=Yt.INACTIVATE,Kt=r,$t=Kt.LEFT,na=Kt.RIGHT,ta=Kt.UP,aa=Kt.DOWN,ea=i,ra=ea.SELECT,ia=ea.START,oa=o,ca=oa.Q,pa=oa.E;const sa=(0,s.oM)({name:"system",initialState:Bt,reducers:{activateStatus:function(n){n.status=e.ACTIVATE},inactivateStatus:function(n){n.status=e.INACTIVATE},clickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.ACTIVATE},unclickStartupSwitcher:function(n){n.keypad.startupSwitcher=e.INACTIVATE},clickDirectionalPad:function(n,t){var a=t.payload;a===$t&&(n.keypad.directionalPad.left=Xt),a===na&&(n.keypad.directionalPad.right=Xt),a===ta&&(n.keypad.directionalPad.up=Xt),a===aa&&(n.keypad.directionalPad.down=Xt)},unclickDirectionalPad:function(n,t){var a=t.payload;a===$t&&(n.keypad.directionalPad.left=Jt),a===na&&(n.keypad.directionalPad.right=Jt),a===ta&&(n.keypad.directionalPad.up=Jt),a===aa&&(n.keypad.directionalPad.down=Jt)},clickOperationalPad:function(n,t){var a=t.payload;a===ra&&(n.keypad.operationalPad.select=Xt),a===ia&&(n.keypad.operationalPad.start=Xt)},unclickOperationalPad:function(n,t){var a=t.payload;a===ra&&(n.keypad.operationalPad.select=Jt),a===ia&&(n.keypad.operationalPad.start=Jt)},clickActionPad:function(n,t){var a=t.payload;a===ca&&(n.keypad.actionPad.q=Xt),a===pa&&(n.keypad.actionPad.e=Xt)},unclickActionPad:function(n,t){var a=t.payload;a===ca&&(n.keypad.actionPad.q=Jt),a===pa&&(n.keypad.actionPad.e=Jt)}}}),da=(0,I.UY)({mouse:N.reducer,keyboard:$.reducer,hardware:Qt.reducer,system:sa.reducer}),la=function(n){var t=n.children;return(0,Cn.jsx)(C.zt,{store:xa,children:t})},xa=(0,s.xC)({reducer:{gameboy:S.reducer,domains:da}});var ua;const ha=(0,mn.vJ)(ua||(ua=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  *,\n  *::before,\n  *::after {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  }\n\n  body,\n  #root {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n  }\n"])));var fa;const va=mn.ZP.main(fa||(fa=function(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}(["\n  ","\n  width: 100vw;\n  height: 100vh;\n  max-width: 100vw;\n  max-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--background);\n"])),(function(n){var t=n.theme;return"\n  // surface\n  --surface: ".concat(t.palette.surface.main,";\n  --on-surface: ").concat(t.palette.surface.on,";\n  // background\n  --background: ").concat(t.palette.background.main,";\n  --on-background: ").concat(t.palette.background.on,";\n  // error\n  --error: ").concat(t.palette.error.main,";\n  --on-error: ").concat(t.palette.error.on,";\n  // primary\n  --primary: ").concat(t.palette.primary.main,";\n  --primary-on-light: ").concat(t.palette.primary.light,";\n  --primary-on-dark: ").concat(t.palette.primary.dark,";\n  --on-primary: ").concat(t.palette.primary.on,";\n  // secondary\n  --secondary: ").concat(t.palette.secondary.main,";\n  --secondary-on-light: ").concat(t.palette.secondary.light,";\n  --secondary-on-dark: ").concat(t.palette.secondary.dark,";\n  --on-secondary: ").concat(t.palette.secondary.on,";\n  // terciary\n  --terciary: ").concat(t.palette.terciary.main,";\n  --terciary-on-light: ").concat(t.palette.terciary.light,";\n  --terciary-on-dark: ").concat(t.palette.terciary.dark,";\n  --on-terciary: ").concat(t.palette.terciary.on,";\n  // quaternary\n  --quaternary: ").concat(t.palette.quaternary.main,";\n  --quaternary-on-light: ").concat(t.palette.quaternary.light,";\n  --quaternary-on-dark: ").concat(t.palette.quaternary.dark,";\n  --on-quaternary: ").concat(t.palette.quaternary.on,";\n  // quinary\n  --quinary: ").concat(t.palette.quinary.main,";\n  --quinary-on-light: ").concat(t.palette.quinary.light,";\n  --quinary-on-dark: ").concat(t.palette.quinary.dark,";\n  --on-quinary: ").concat(t.palette.quinary.on,";\n")})),ya=function(n){var t=n.children;return(0,Cn.jsx)(va,{theme:d,children:t})};const ba=function(){var n,t,a;V(),hn(),n=(0,C.I0)(),t=S.actions,a=(0,C.v9)((function(n){return n.domains.mouse})),(0,q.useEffect)((function(){n(t.setMousePosition(a))}),[a]),function(){var n=(0,C.I0)(),t=(0,C.v9)(vn),a=(0,C.v9)(bn),r=(0,C.v9)(gn),i=(0,C.v9)(kn),o=Qt.actions,c=sa.actions,p=S.actions;(0,q.useEffect)((function(){t.startupSwitcher!==e.ACTIVATE&&a.startupSwitcher!==e.ACTIVATE&&r.startupSwitcher!==e.ACTIVATE||(i===e.ACTIVATE?(n(o.inactivateStatus()),n(c.inactivateStatus()),n(p.inactivateStatus())):(n(o.activateStatus()),n(c.activateStatus()),n(p.activateStatus())))}),[t.startupSwitcher,a.startupSwitcher,r.startupSwitcher])}(),(0,C.I0)(),$.actions,Qt.actions,sa.actions,S.actions;var r=(0,C.v9)((function(n){return n.gameboy.status}));return console.log(r,"status"),(0,Cn.jsxs)(ya,{children:[(0,Cn.jsx)(Et,{}),(0,Cn.jsx)(Wt,{})]})};(0,p.s)(document.querySelector("#root")).render((0,Cn.jsxs)(la,{children:[(0,Cn.jsx)(ha,{}),(0,Cn.jsx)(ba,{})]}))}},a={};function e(n){var r=a[n];if(void 0!==r)return r.exports;var i=a[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.m=t,n=[],e.O=(t,a,r,i)=>{if(!a){var o=1/0;for(d=0;d<n.length;d++){for(var[a,r,i]=n[d],c=!0,p=0;p<a.length;p++)(!1&i||o>=i)&&Object.keys(e.O).every((n=>e.O[n](a[p])))?a.splice(p--,1):(c=!1,i<o&&(o=i));if(c){n.splice(d--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[a,r,i]},e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n={179:0};e.O.j=t=>0===n[t];var t=(t,a)=>{var r,i,[o,c,p]=a,s=0;if(o.some((t=>0!==n[t]))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(p)var d=p(e)}for(t&&t(a);s<o.length;s++)i=o[s],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(d)},a=self.webpackChunk_guhcalm_cute_gameboy=self.webpackChunk_guhcalm_cute_gameboy||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=e.O(void 0,[977],(()=>e(840)));r=e.O(r)})();
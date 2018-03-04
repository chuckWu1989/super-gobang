webpackJsonp([2],{214:function(e,t,n){"use strict";var r=n(540),o=n(67),i=n(541),a=function(){return{setCoordinate:r.b,detectWidthChanged:r.a}};t.a=function(e){return Object(o.a)(a)(Object(i.a)(e))}},422:function(e,t,n){e.exports=n(423)},423:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n.n(r),i=n(187),a=n.n(i),c=n(514),u=(n.n(c),n(519)),s=function(e){a.a.render(o.a.createElement(c.AppContainer,{warnings:!1},o.a.createElement(e,null)),document.getElementById("app"))};s(u.a)},514:function(e,t,n){e.exports=n(515)},515:function(e,t,n){"use strict";e.exports=n(516)},516:function(e,t,n){"use strict";e.exports.AppContainer=n(517)},517:function(e,t,n){"use strict";e.exports=n(518)},518:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(9),u=c.Component,s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return this.props.component?c.createElement(this.props.component,this.props.props):c.Children.only(this.props.children)}}]),t}(u);e.exports=s},519:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),c=n.n(a),u=n(520),s=n(555),l=(n.n(s),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),f=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onFallBack=n.onFallBack.bind(n),n.onRestart=n.onRestart.bind(n),n.updated=n.updated.bind(n),n.state={fallback:void 0},n}return i(t,e),l(t,[{key:"onFallBack",value:function(){this.setState({fallback:!0})}},{key:"onRestart",value:function(){this.setState({restart:!0})}},{key:"updated",value:function(){this.setState({fallback:!1,restart:!1})}},{key:"render",value:function(){var e=this.state,t=e.fallback,n=e.restart;return c.a.createElement("div",{className:"gobang-style"},c.a.createElement("div",{className:"gobang-title"},"Gobang Game"),c.a.createElement("div",{className:"gobang-area"},c.a.createElement("div",{className:"inner-wrapper"},c.a.createElement(u.a,{fallback:t,restart:n,updated:this.updated,gameOver:function(e){alert(e+" Wins!")}}))),c.a.createElement("div",{className:"button-area"},c.a.createElement("button",{onClick:this.onFallBack},"Fallback"),c.a.createElement("button",{onClick:this.onRestart},"Restart")))}}]),t}(c.a.Component);t.a=f},520:function(e,t,n){"use strict";var r=n(521);t.a=r.a},521:function(e,t,n){"use strict";var r=n(522),o=n(524),i=n(67),a=function(){return{addClickEventListener:r.a,removeClickEventListener:r.d,receivePropsHandler:r.c,shouldUpdate:function(e,t){return Object(r.e)(e,t)},isCanvasSupported:r.b}};t.a=Object(i.a)(a)(o.a)},522:function(e,t,n){"use strict";function r(e,t,n,r,o){return!(o.length<9)&&b(e,t,r).some(function(e){return e.every(function(e){return v(e[0],e[1],o,function(e){return e.color===n})})})}function o(e,t,n,r){var o=r.grid;if(h(e,t,o)&&!v(e,t,n)){var i=p(n,e,t,r),a=i.nextChessMoves,c=i.player,u=i.color,s=y(a,e,t,u,c,r);this.setState({chessMoves:a,locked:s})}}function i(e){return function(t){var n=e.grid,r=t.target,i=t.offsetX,a=t.offsetY,c=r.getAttribute("target"),u=this.state,s=u.chessMoves,l=u.locked;if(c&&!l){var f=d(r,i,a,n),h=f.x,p=f.y;o.call(this,h,p,s,e)}}}function a(e){var t=e.singleRace,n=this.state,r=n.chessMoves,o=n.locked,i=r.length;if(!o){var a=r.slice();a=t?a.slice(0,i-2):a.slice(0,i-1),this.setState({chessMoves:a})}}function c(){this.setState({chessMoves:[],locked:!1})}function u(e){var t=i(e);t=t.bind(this),window.addEventListener("click",t),this.setState({listener:t})}function s(){window.removeEventListener("click",this.state.listener)}function l(e){var t=e.fallback,n=e.restart;!0===t&&a.call(this,e),!0===n&&c.call(this)}t.a=u,t.d=s,t.c=l,n.d(t,"e",function(){return m}),n.d(t,"b",function(){return g});var f=n(523),h=function(e,t,n){return e>0&&e<=n&&t>0&&t<=n},p=function(e,t,n,r){var o=r.wColor,i=r.bColor,a=e.slice(),c=(a.length+1)%2==0?o:i,u=c===i?f.a:f.d;return a.push({x:t,y:n,color:c}),{nextChessMoves:a,player:u,color:c}},d=function(e,t,n,r){var o=e.getAttribute("width"),i=e.getAttribute("height");return{x:Math.floor(Math.round(t/o*(r+1))),y:Math.floor(Math.round(n/i*(r+1)))}},v=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return!0};return void 0!==n.find(function(n){return n.x===e&&n.y===t&&r(n)})},b=function(e,t,n){var r=t-f.b+1,o=t+f.b-1,i=e-f.b+1,a=e+f.b-1,c=r>0?Array.from({length:f.b},function(n,r){return[e,t-r]}):void 0,u=a<=n&&r>0?Array.from({length:f.b},function(n,r){return[e+r,t-r]}):void 0,s=a<=n?Array.from({length:f.b},function(n,r){return[e+r,t]}):void 0,l=a<=n&&o<=n?Array.from({length:f.b},function(n,r){return[e+r,t+r]}):void 0,h=o<=n?Array.from({length:f.b},function(n,r){return[e,t+r]}):void 0,p=i>0&&o<=n?Array.from({length:f.b},function(n,r){return[e-r,t+r]}):void 0,d=i>0?Array.from({length:f.b},function(n,r){return[e-r,t]}):void 0,v=i>0&&r>0?Array.from({length:f.b},function(n,r){return[e-r,t-r]}):void 0,b=[c,u,s,l,h,p,d,v];return b=b.filter(function(e){return void 0!==e})},y=function(e,t,n,o,i,a){var c=a.gameOver,u=a.grid,s=r(t,n,o,u,e);return s?c(i):e.length===u*u&&c(f.c),s},m=function(e,t){return e.chessMoves!==t.chessMoves},g=function(){return void 0!==document.createElement("canvas").getContext}},523:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return a});var r=5,o="black",i="white",a="deadlock"},524:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),c=n.n(a),u=n(16),s=n.n(u),l=n(526),f=n(530),h=n(543),p=n(554),d=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),v=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={chessMoves:[],WrappedComponent:void 0},n}return i(t,e),d(t,[{key:"componentWillMount",value:function(){this.props.addClickEventListener.call(this,this.props);var e=this.props.isCanvasSupported(),t=e?h.a:f.a;this.setState({WrappedComponent:t})}},{key:"componentWillReceiveProps",value:function(e){this.props.receivePropsHandler.call(this,e)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.shouldUpdate(t,this.state)}},{key:"componentDidUpdate",value:function(){this.props.updated()}},{key:"componentWillUnmount",value:function(){this.props.removeClickEventListener.call(this)}},{key:"render",value:function(){var e=this.state,t=e.chessMoves,n=e.WrappedComponent,r=this.props.grid;return c.a.createElement("div",{className:"gobang-host-style"},c.a.createElement(l.a,null,c.a.createElement(n,{grid:r,chessMoves:t})))}}]),t}(a.Component);Object.defineProperty(v,"defaultProps",{enumerable:!0,writable:!0,value:{grid:15,bColor:"#000000",wColor:"#e7e7eb",singleRace:!1,fallback:!1,restart:!1,gameOver:function(){},updated:function(){},addClickEventListener:function(){},removeClickEventListener:function(){},receivePropsHandler:function(){},shouldUpdate:function(){},isCanvasSupported:function(){return!0}}}),Object.defineProperty(v,"propTypes",{enumerable:!0,writable:!0,value:{grid:s.a.number,bColor:s.a.string,wColor:s.a.string,gameOver:s.a.func,updated:s.a.func,addClickEventListener:s.a.func,removeClickEventListener:s.a.func,receivePropsHandler:s.a.func,shouldUpdate:s.a.func,isCanvasSupported:s.a.func,singleRace:s.a.bool,fallback:s.a.bool,restart:s.a.bool}}),t.a=v},526:function(e,t,n){"use strict";var r=n(527),o=n(528),i=n(67),a=function(){return{addScreenListener:r.a,removeScreenListener:function(e){return Object(r.b)(e)},updateChildren:r.c}};t.a=Object(i.a)(a)(o.a)},527:function(e,t,n){"use strict";function r(e){return function(){var t=this.props.children;if(t){var n=Array.isArray(t)?t:[t],r=e.offsetWidth,o=e.offsetHeight,i=n.map(function(e,t){var n=t;return c.a.cloneElement(e,{width:r,height:o,key:n})});this.setState({children:i})}}}function o(e){var t=this.state.children,n=e.children,r=Array.isArray(n)?n:[n],o=r.map(function(e,n){var r=t[n],o=r.props,i=r.key,a=o.width,u=o.height;return c.a.cloneElement(e,{width:a,height:u,key:i})});this.setState({children:o})}function i(e){var t=r(e);return t=t.bind(this),window.addEventListener("resize",t),t(),t}t.c=o,t.a=i,n.d(t,"b",function(){return u});var a=n(9),c=n.n(a),u=function(e){window.removeEventListener("resize",e)}},528:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),c=n.n(a),u=n(16),s=n.n(u),l=n(529),f=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),h=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hanlder:void 0,children:null},n}return i(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.props.addScreenListener.call(this,this.container);this.setState({hanlder:e})}},{key:"componentWillReceiveProps",value:function(e){this.props.updateChildren.call(this,e)}},{key:"componentWillUnmount",value:function(){this.props.removeScreenListener(this.state.hanlder)}},{key:"render",value:function(){var e=this,t=this.state.children;return c.a.createElement("div",{className:"responsive-container-style",ref:function(t){e.container=t}},t)}}]),t}(a.Component);Object.defineProperty(h,"defaultProps",{enumerable:!0,writable:!0,value:{updateChildren:function(){},addScreenListener:function(){},removeScreenListener:function(){}}}),Object.defineProperty(h,"propTypes",{enumerable:!0,writable:!0,value:{updateChildren:s.a.func,addScreenListener:s.a.func,removeScreenListener:s.a.func}}),t.a=h},529:function(e,t){},530:function(e,t,n){"use strict";var r=n(9),o=n.n(r),i=n(531),a=n(533),c=n(214),u=n(542),s=(n.n(u),function(e){return o.a.createElement("div",{className:"div-gobang-style"},o.a.createElement(i.a,e),o.a.createElement(a.a,e))});t.a=Object(c.a)(s)},531:function(e,t,n){"use strict";var r=n(9),o=n.n(r),i=n(16),a=n.n(i),c=n(532),u=(n.n(c),function(e){var t=e.width,n=e.height,r=e.grid,i=e.style,a=e.unitHeight;return o.a.createElement("div",{className:"div-chessboard-style",style:Object.assign({width:t,height:n},i)},Array.from({length:r+1},function(e,t){return o.a.createElement("div",{key:t+"-board",className:"chessboard-row",style:{height:a}},Array.from({length:r+1},function(e,n){return o.a.createElement("div",{key:t+"-"+n+"-board",className:"chessboard-col"})}))}))});u.defaultProps={grid:15,style:{}},u.propTypes={grid:a.a.number,width:a.a.number.isRequired,height:a.a.number.isRequired,unitHeight:a.a.number.isRequired,style:a.a.object},t.a=u},532:function(e,t){},533:function(e,t,n){"use strict";var r=n(534),o=n(538),i=n(67),a=function(){return{detectChessMovesChange:r.a,detectWidthChange:r.b}};t.a=Object(i.a)(a)(o.a)},534:function(e,t,n){"use strict";function r(e,t,n){return e.slice(t,n)}function o(e){var t=e.unitWidth,n=e.coord,r=e.chessMoves,o=[];r.forEach(function(e){var r=e.x,i=e.y,a=e.color,c=n[r][i];h(o,c,t,a)}),this.setState({children:o})}function i(e,t){var n=e.chessMoves,o=e.unitWidth,i=e.coord,a=t.chessMoves,c=this.state.children,u=void 0;if(a.length<n.length){var s=n[n.length-1],l=s.x,f=s.y,p=s.color,d=i[l][f];u=h(c,d,o,p)}else if(a.length>n.length){var v=n.length-a.length;u=r(c,0,v)}this.setState({children:u.slice()})}function a(e,t){var n=e.chessMoves,r=t.chessMoves;n.length!==r.length&&i.call(this,e,t)}function c(e,t){var n=t.width;e.width!==n&&o.call(this,t)}t.a=a,t.b=c;var u=n(9),s=n.n(u),l=n(535),f=n(537),h=function(e,t,n,r){var o=f.a*n,i=t[0]-o/2+1,a=t[1]-o/2+1,c=i+"-"+a+"-piece",u=s.a.createElement(l.a,{key:c,x:i,y:a,color:r,size:o});return e.push(u),e}},535:function(e,t,n){"use strict";var r=n(9),o=n.n(r),i=n(16),a=n.n(i),c=n(536),u=(n.n(c),function(e){return o.a.createElement("div",{className:"div-piece-style",style:{top:e.y,left:e.x,width:e.size,height:e.size,borderRadius:e.size/2,backgroundColor:e.color}})});u.defaultProps={size:10,color:"#000000"},u.propTypes={size:a.a.number,color:a.a.string,x:a.a.number.isRequired,y:a.a.number.isRequired},t.a=u},536:function(e,t){},537:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=.8},538:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),c=n.n(a),u=n(16),s=n.n(u),l=n(539),f=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),h=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={children:[]},n}return i(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){this.props.detectChessMovesChange.call(this,e,this.props)}},{key:"componentDidUpdate",value:function(e){this.props.detectWidthChange.call(this,e,this.props)}},{key:"render",value:function(){var e=this.state.children,t=this.props,n=t.width,r=t.height;return c.a.createElement("div",{className:"div-piece-style",style:{width:n,height:r}},c.a.createElement("div",{width:n,height:r,target:!0,className:"inner-wrapper"},e))}}]),t}(a.Component);Object.defineProperty(h,"defaultProps",{enumerable:!0,writable:!0,value:{chessMoves:[],detectChessMovesChange:function(){},detectWidthChange:function(){}}}),Object.defineProperty(h,"propTypes",{enumerable:!0,writable:!0,value:{width:s.a.number.isRequired,height:s.a.number.isRequired,unitWidth:s.a.number.isRequired,coord:s.a.array.isRequired,chessMoves:s.a.array,detectChessMovesChange:s.a.func,detectWidthChange:s.a.func}}),t.a=h},539:function(e,t){},540:function(e,t,n){"use strict";function r(e){var t=void 0!==e?e:this.props,n=t.width,r=t.ratio,o=t.grid;if("number"!=typeof n)return!1;for(var i=new Array(o+2),a=Math.round(n/(o+1)),c=Math.round(n*r/(o+1)),u=a*(o+1),s=c*(o+1),l=0;l<=o+1;l+=1){i[l]=new Array(o);for(var f=0;f<=o+1;f+=1)i[l][f]=[a*l,c*f]}return this.setState({coord:i,unitWidth:a,unitHeight:c,width:u,height:s})}function o(e,t){e.width!==t.width&&r.call(this,e)}t.b=r,t.a=o},541:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),c=n.n(a),u=n(16),s=n.n(u),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),h=function(e){var t,n;return n=t=function(t){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={coord:void 0,width:void 0,height:void 0,unitWidth:void 0,unitHeight:void 0},t}return i(n,t),f(n,[{key:"componentWillMount",value:function(){this.props.setCoordinate.call(this)}},{key:"componentWillReceiveProps",value:function(e){this.props.detectWidthChanged.call(this,e,this.props)}},{key:"render",value:function(){var t=this.state,n=t.coord,r=t.width,o=t.height,i=t.unitWidth,a=t.unitHeight;return n?c.a.createElement(e,l({},this.props,{coord:n,width:r,height:o,unitWidth:i,unitHeight:a})):null}}]),n}(a.Component),Object.defineProperty(t,"defaultProps",{enumerable:!0,writable:!0,value:{width:400,ratio:1,setCoordinate:function(){},detectWidthChanged:function(){}}}),Object.defineProperty(t,"propTypes",{enumerable:!0,writable:!0,value:{grid:s.a.number.isRequired,width:s.a.number,ratio:s.a.number,setCoordinate:s.a.func,detectWidthChanged:s.a.func}}),n};t.a=h},542:function(e,t){},543:function(e,t,n){"use strict";var r=n(9),o=n.n(r),i=n(544),a=n(548),c=n(214),u=n(553),s=(n.n(u),function(e){return o.a.createElement("div",{className:"canvas-gobang-style"},o.a.createElement(i.a,e),o.a.createElement(a.a,e))});t.a=Object(c.a)(s)},544:function(e,t,n){"use strict";var r=n(545),o=n(546),i=n(67),a=function(e){return{drawBoard:function(t){return Object(r.a)(t,e)}}};t.a=Object(i.a)(a)(o.a)},545:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=function(e,t,n){e.beginPath(),e.moveTo(t[0],t[1]),e.lineTo(n[0],n[1]),e.closePath(),e.stroke()},o=function(e,t){var n=t.grid,o=t.coord,i=t.width,a=t.height,c=e.getContext("2d");c.clearRect(0,0,i,a);for(var u=0;u<=n+1;u+=1)r(c,o[0][u],o[n+1][u]),r(c,o[u][0],o[u][n+1])}},546:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),c=n.n(a),u=n(16),s=n.n(u),l=n(547),f=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.drawBoard(this.chessboard)}},{key:"componentDidUpdate",value:function(){this.props.drawBoard(this.chessboard)}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,r=t.height;return c.a.createElement("canvas",{width:n,height:r,ref:function(t){e.chessboard=t},className:"canvas-chessboard-style"})}}]),t}(a.Component);Object.defineProperty(h,"defaultProps",{enumerable:!0,writable:!0,value:{grid:15,drawBoard:function(){}}}),Object.defineProperty(h,"propTypes",{enumerable:!0,writable:!0,value:{grid:s.a.number,coord:s.a.array.isRequired,width:s.a.number.isRequired,height:s.a.number.isRequired,drawBoard:s.a.func}}),t.a=h},547:function(e,t){},548:function(e,t,n){"use strict";var r=n(549),o=n(551),i=n(67),a=function(e){return{detectChessMovesChange:function(t,n){return Object(r.a)(t,n,e)},detectWidthChange:function(t,n){return Object(r.b)(t,e,n)}}};t.a=Object(i.a)(a)(o.a)},549:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l});var r=n(550),o=function(e,t,n){e.clearRect(0,0,t,n)},i=function(e,t,n){var r=t[0],o=t[1];e.clearRect(r-n/2,o-n/2,n,n)},a=function(e,t,n,o){var i=r.b*(n/2),a=t[0],c=t[1];e.beginPath(),e.fillStyle=o,e.arc(a,c,i,r.c,r.a),e.fill(),e.closePath()},c=function(e,t,n){var r=t.chessMoves,o=t.unitWidth,c=t.coord,u=n.chessMoves;if(u.length<r.length){var s=r[r.length-1],l=s.x,f=s.y,h=s.color,p=c[l][f];a(e,p,o,h)}else if(u.length>r.length){var d=u.slice(r.length,u.length);d.forEach(function(t){var n=t.x,r=t.y,a=c[n][r];i(e,a,o)})}},u=function(e,t){var n=t.width,r=t.height,i=t.unitWidth,c=t.coord,u=t.chessMoves;o(e,n,r),u.forEach(function(t){var n=t.x,r=t.y,o=t.color,u=c[n][r];a(e,u,i,o)})},s=function(e,t,n){var r=e.getContext("2d"),o=n.chessMoves,i=t.chessMoves;o.length!==i.length&&c(r,t,n)},l=function(e,t,n){var r=e.getContext("2d"),o=n.width;t.width!==o&&u(r,t)}},550:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i});var r=.8,o=0*Math.PI,i=2*Math.PI},551:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(9),c=n.n(a),u=n(16),s=n.n(u),l=n(552),f=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),f(t,[{key:"componentWillReceiveProps",value:function(e){this.props.detectChessMovesChange(this.canvas,e)}},{key:"componentDidUpdate",value:function(e){this.props.detectWidthChange(this.canvas,e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,r=t.height;return c.a.createElement("canvas",{target:!0,ref:function(t){e.canvas=t},width:n,height:r,className:"canvas-pieces-style"})}}]),t}(a.Component);Object.defineProperty(h,"defaultProps",{enumerable:!0,writable:!0,value:{detectChessMovesChange:function(){},detectWidthChange:function(){},chessMoves:[]}}),Object.defineProperty(h,"propTypes",{enumerable:!0,writable:!0,value:{width:s.a.number.isRequired,height:s.a.number.isRequired,unitWidth:s.a.number.isRequired,coord:s.a.array.isRequired,chessMoves:s.a.array,detectChessMovesChange:s.a.func,detectWidthChange:s.a.func}}),t.a=h},552:function(e,t){},553:function(e,t){},554:function(e,t){},555:function(e,t){},67:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(9),o=n.n(r),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e){return function(t){return function(n){var r="function"==typeof e?e(n):{};return o.a.createElement(t,i({},r,n))}}}}},[422]);
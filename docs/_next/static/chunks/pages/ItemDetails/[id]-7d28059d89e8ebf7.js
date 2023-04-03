(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{1838:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var r=n(2269),i=n(2784),o=n(5129),l=n(6296),a=n(6481),s=n(4641),c=n(1346),u=n.n(c),d=n(6626),f=["index","total","siblings","style"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var p=function(e){var t,n,o,l=e.index,a=e.total,c=e.siblings,u=e.style,d=(0,r.Z)(e,f),p="withTheme(CardCover)",g="withTheme(CardTitle)";return"number"===typeof l&&c&&(n=c[l-1],o=c[l+1]),n===p&&o===p||n===g&&o===g||1===a?t=y.only:0===l?t=o===p||o===g?y.only:y.first:"number"===typeof a&&l===a-1?t=n===p||n===g?y.only:y.last:n===p||n===g?t=y.first:o!==p&&o!==g||(t=y.last),i.createElement(s.Z,h({},d,{style:[y.container,t,u]}))};p.displayName="Card.Content";var y=o.Z.create({container:{paddingHorizontal:16},first:{paddingTop:16},last:{paddingBottom:16},only:{paddingVertical:16}}),g=p;function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var v=function(e){return i.createElement(s.Z,m({},e,{style:[Z.container,e.style]}),i.Children.map(e.children,(function(e){return i.isValidElement(e)?i.cloneElement(e,{compact:!1!==e.props.compact}):e})))};v.displayName="Card.Actions";var Z=o.Z.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",padding:8}}),b=v,x=n(5626),j=n(4360),C=["index","total","style","theme"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var E=function(e){var t,n=e.index,o=e.total,l=e.style,a=e.theme,c=(0,r.Z)(e,C),u=a.roundness;return 0===n?t=1===o?{borderRadius:u}:{borderTopLeftRadius:u,borderTopRightRadius:u}:"number"===typeof o&&n===o-1&&(t={borderBottomLeftRadius:u}),i.createElement(s.Z,{style:[O.container,t,l]},i.createElement(x.Z,w({},c,{style:[O.image,t]})))};E.displayName="Card.Cover";var O=o.Z.create({container:{height:195,backgroundColor:d.BVM,overflow:"hidden"},image:{flex:1,height:void 0,width:void 0,padding:16,justifyContent:"flex-end"}}),R=(0,j.Zz)(E),k=n(2224);function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}var T=function(e){return i.createElement(k.Z,P({},e,{alpha:.54,family:"regular",style:[_.text,e.style]}))},_=o.Z.create({text:{fontSize:12,lineHeight:20,marginVertical:2,letterSpacing:.4}}),N=n(8109),D=function(e){var t=e.title,n=e.titleStyle,r=e.titleNumberOfLines,o=void 0===r?1:r,l=e.subtitle,a=e.subtitleStyle,c=e.subtitleNumberOfLines,u=void 0===c?1:c,d=e.left,f=e.leftStyle,h=e.right,p=e.rightStyle,y=e.style;return i.createElement(s.Z,{style:[S.container,{minHeight:l||d||h?72:50},y]},d?i.createElement(s.Z,{style:[S.left,f]},d({size:40})):null,i.createElement(s.Z,{style:[S.titles]},t?i.createElement(N.Z,{style:[S.title,{marginBottom:l?0:2},n],numberOfLines:o},t):null,l?i.createElement(T,{style:[S.subtitle,a],numberOfLines:u},l):null),i.createElement(s.Z,{style:p},h?h({size:24}):null))};D.displayName="Card.Title";var S=o.Z.create({container:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:16},left:{justifyContent:"center",marginRight:16,height:40,width:40},titles:{flex:1,flexDirection:"column",justifyContent:"center"},title:{minHeight:30,paddingRight:16},subtitle:{minHeight:20,marginVertical:0,paddingRight:16}}),L=(0,j.Zz)(D),V=n(3595),B=["elevation","onLongPress","onPress","mode","children","style","theme","testID","accessible"];function z(){return z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}var H=function(e){var t=e.elevation,n=void 0===t?1:t,o=e.onLongPress,c=e.onPress,f=e.mode,h=void 0===f?"elevated":f,p=e.children,y=e.style,g=e.theme,m=e.testID,v=e.accessible,Z=(0,r.Z)(e,B),b=i.useRef(new l.Z.Value(n)).current,x=i.useRef(new l.Z.Value(n)).current,j=g.animation,C=g.dark,w=g.mode,E=g.roundness,O=i.useRef(C);i.useEffect((function(){O.current=C}));var R=O.current,k="adaptive"===w,P=150*j.scale;i.useEffect((function(){C&&k&&!R&&(b.setValue(n),x.setValue(n))}),[R,C,k,n,b,x]);var T=function(e){var t="in"===e;C&&k?l.Z.timing(x,{toValue:t?8:n,duration:P,useNativeDriver:!1}).start():l.Z.timing(b,{toValue:t?8:n,duration:P,useNativeDriver:!0}).start()},_=i.Children.count(p),N=i.Children.map(p,(function(e){return i.isValidElement(e)&&e.type?e.type.displayName:null})),D=u()(C?d.ixZ:d.Snx).alpha(.12).rgb().string(),S=C&&k?x:b;return i.createElement(V.Z,z({style:[{borderRadius:E,elevation:S,borderColor:D},"outlined"===h?I.outlined:{},y],theme:g},Z),i.createElement(a.Z,{delayPressIn:0,disabled:!(c||o),onLongPress:o,onPress:c,onPressIn:c||o?function(){T("in")}:void 0,onPressOut:c||o?function(){T("out")}:void 0,testID:m,accessible:v},i.createElement(s.Z,{style:I.innerContainer},i.Children.map(p,(function(e,t){return i.isValidElement(e)?i.cloneElement(e,{index:t,total:_,siblings:N}):e})))))};H.Content=g,H.Actions=b,H.Cover=R,H.Title=L;var I=o.Z.create({innerContainer:{flexGrow:1,flexShrink:1},outlined:{elevation:0,borderWidth:1}}),W=(0,j.Zz)(H)},2137:function(e,t,n){"use strict";var r=n(2269),i=n(2784),o=n(1346),l=n.n(o),a=n(5129),s=n(4641),c=n(4360),u=n(6626),d=["inset","style","theme"];function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}var h=a.Z.create({light:{backgroundColor:l()(u.Snx).alpha(.12).rgb().string(),height:a.Z.hairlineWidth},dark:{backgroundColor:l()(u.ixZ).alpha(.12).rgb().string(),height:a.Z.hairlineWidth},inset:{marginLeft:72}});t.Z=(0,c.Zz)((function(e){var t=e.inset,n=e.style,o=e.theme,l=(0,r.Z)(e,d),a=o.dark;return i.createElement(s.Z,f({},l,{style:[a?h.dark:h.light,t&&h.inset,n]}))}))},2250:function(e,t,n){"use strict";n.r(t),n.d(t,{ItemDetails:function(){return R},__N_SSG:function(){return O},default:function(){return k}});var r=n(6412),i=n(3089),o=n(304),l=n(9017),a=n(8200),s=n(9324),c=n(2784),u=n(1688),d=n(5181),f=n(4641),h=n(5626),p=n(3105),y=n(4724),g=n(1838),m=n(6626),v=n(3558),Z=n(4075),b=n(2137),x=n(6580),j=n(3332),C=n(2322);function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var i=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}var E=(0,x.$j)((function(e){var t,n;return{routerStates:null==(t=e.router)||null==(n=t.location)?void 0:n.state}}))(function(e){(0,o.Z)(n,e);var t=w(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).webview1Ref=void 0,e.state={},e}return(0,i.Z)(n,[{key:"render",value:function(){var e,t=this.props.item;if(null!=t&&t.title)return(0,C.jsx)(f.Z,{style:{},children:(0,C.jsxs)(p.Z,{style:{height:u.k7.contentManagerHeight},children:[(0,C.jsxs)(g.Z,{style:{backgroundColor:u.rH.transparent},children:[(0,C.jsx)(g.Z.Title,{title:(0,C.jsxs)(f.Z,{style:{flexDirection:"column",marginTop:10},children:[(0,C.jsx)(h.Z,{resizeMode:"contain",source:s.BC(t.icon),style:{width:80,height:40,borderWidth:1,borderRadius:50,borderColor:m.ouL,backgroundColor:m.mKE}}),(0,C.jsx)(v.Z,{children:t.title})]}),subtitle:"publishing date: "+t.publishDate}),(0,C.jsxs)(g.Z.Content,{children:[(0,C.jsx)(v.Z,{style:{fontWeight:"bold"},children:t.comment}),(0,C.jsx)(f.Z,{style:{flexDirection:"column",marginTop:10}}),(null==(e=t.web)?void 0:e.length)>0&&t.web.map((function(e,n){return(0,C.jsx)(v.Z,{style:{fontWeight:"bold"},children:(0,C.jsx)(Z.Z,{icon:"google-chrome",mode:"outlined",contentStyle:{backgroundColor:m.BVM},onPress:function(){t.title.includes("SmartTaxi")?d.XT({title:"Alert",content:"\n                           user: 123456\n                           pass: 123456\n                           open apps in different browser.\n                           Note: these webapps are just demo of actual versions in free hosts with potential bugs.\n                           ",callbackFn:function(){e.includes("driver")||e.includes("passenger")?window.open(e,"_blank","location=yes,height=640,width=360,scrollbars=yes,status=yes"):e.includes("manager")?window.open(e,"_blank","location=yes,height=360,width=640,scrollbars=yes,status=yes"):window.open(e,"_blank","location=yes,scrollbars=yes,status=yes")}}):y.Z.openURL(e)},children:e})},n)}))]})]}),(0,C.jsx)(b.Z,{}),(0,C.jsxs)(g.Z,{style:{backgroundColor:u.rH.transparent},children:[(0,C.jsx)(g.Z.Title,{title:"used technologies"}),(0,C.jsx)(g.Z.Content,{children:(0,C.jsx)(j.Z,{items:t.usedTechnologies})})]}),(0,C.jsx)(b.Z,{}),(0,C.jsxs)(g.Z,{style:{backgroundColor:u.rH.transparent},children:[(0,C.jsx)(g.Z.Title,{title:"app environment"}),(0,C.jsx)(g.Z.Content,{children:(0,C.jsx)(h.Z,{resizeMode:"contain",source:s.BC(t.img),style:{alignSelf:"center",width:"90%",height:400,borderWidth:1,borderRadius:10,borderColor:m.orG,backgroundColor:m.orG}})})]}),(0,C.jsx)(f.Z,{style:{height:100}})]})})}}]),n}(c.Component)),O=!0;function R(e){var t=e.item;return c.createElement(E,{item:t})}var k=R},3332:function(e,t,n){"use strict";var r=n(6412),i=n(3089),o=n(304),l=n(9017),a=n(8200),s=n(9324),c=n(2784),u=n(1688),d=n(4641),f=n(376),h=n(5626),p=n(6580),y=n(2322);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,a.Z)(e);if(t){var i=(0,a.Z)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return(0,l.Z)(this,n)}}t.Z=(0,p.$j)((function(e){return{}}))(function(e){(0,o.Z)(n,e);var t=g(n);function n(){var e;(0,r.Z)(this,n);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={},e}return(0,i.Z)(n,[{key:"render",value:function(){return(0,y.jsx)(d.Z,{children:(0,y.jsx)(d.Z,{style:{flexDirection:"row",justifyContent:"space-evenly"},children:this.props.items.map((function(e,t){var n=u.rH.technologies[e];return(0,y.jsxs)(d.Z,{style:{flexDirection:"column",paddingLeft:20},children:[(0,y.jsx)(h.Z,{resizeMode:"contain",source:s.BC("technologies/"+n.icon+".png"),style:{width:50,height:25}}),(0,y.jsx)(f.Z,{style:{fontWeight:"bold",textAlign:"center"},children:n.title})]},t)}))})})}}]),n}(c.Component))},7130:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ItemDetails/[id]",function(){return n(2250)}])}},function(e){e.O(0,[774,888,179],(function(){return t=7130,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
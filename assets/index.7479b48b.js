const Se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(l){if(l.ep)return;l.ep=!0;const n=r(l);fetch(l.href,n)}};Se();var D,_,ce,P,Y,se,E={},he=[],Ce=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function S(e,t){for(var r in t)e[r]=t[r];return e}function _e(e){var t=e.parentNode;t&&t.removeChild(e)}function ue(e,t,r){var i,l,n,c={};for(n in t)n=="key"?i=t[n]:n=="ref"?l=t[n]:c[n]=t[n];if(arguments.length>2&&(c.children=arguments.length>3?D.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)c[n]===void 0&&(c[n]=e.defaultProps[n]);return L(e,c,i,l,null)}function L(e,t,r,i,l){var n={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++ce:l};return l==null&&_.vnode!=null&&_.vnode(n),n}function N(e){return e.children}function C(e,t){this.props=e,this.context=t}function A(e,t){if(t==null)return e.__?A(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?A(e):null}function de(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return de(e)}}function B(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!T.__r++||Y!==_.debounceRendering)&&((Y=_.debounceRendering)||setTimeout)(T)}function T(){for(var e;T.__r=P.length;)e=P.sort(function(t,r){return t.__v.__b-r.__v.__b}),P=[],e.some(function(t){var r,i,l,n,c,h;t.__d&&(c=(n=(r=t).__v).__e,(h=r.__P)&&(i=[],(l=S({},n)).__v=n.__v+1,J(h,n,l,r.__n,h.ownerSVGElement!==void 0,n.__h!=null?[c]:null,i,c==null?A(n):c,n.__h),ve(i,n),n.__e!=c&&de(n)))})}function fe(e,t,r,i,l,n,c,h,f,m){var a,p,u,s,d,x,v,y=i&&i.__k||he,k=y.length;for(r.__k=[],a=0;a<t.length;a++)if((s=r.__k[a]=(s=t[a])==null||typeof s=="boolean"?null:typeof s=="string"||typeof s=="number"||typeof s=="bigint"?L(null,s,null,null,s):Array.isArray(s)?L(N,{children:s},null,null,null):s.__b>0?L(s.type,s.props,s.key,null,s.__v):s)!=null){if(s.__=r,s.__b=r.__b+1,(u=y[a])===null||u&&s.key==u.key&&s.type===u.type)y[a]=void 0;else for(p=0;p<k;p++){if((u=y[p])&&s.key==u.key&&s.type===u.type){y[p]=void 0;break}u=null}J(e,s,u=u||E,l,n,c,h,f,m),d=s.__e,(p=s.ref)&&u.ref!=p&&(v||(v=[]),u.ref&&v.push(u.ref,null,s),v.push(p,s.__c||d,s)),d!=null?(x==null&&(x=d),typeof s.type=="function"&&s.__k===u.__k?s.__d=f=pe(s,f,e):f=me(e,s,u,y,d,f),typeof r.type=="function"&&(r.__d=f)):f&&u.__e==f&&f.parentNode!=e&&(f=A(u))}for(r.__e=x,a=k;a--;)y[a]!=null&&(typeof r.type=="function"&&y[a].__e!=null&&y[a].__e==r.__d&&(r.__d=A(i,a+1)),ge(y[a],y[a]));if(v)for(a=0;a<v.length;a++)ye(v[a],v[++a],v[++a])}function pe(e,t,r){for(var i,l=e.__k,n=0;l&&n<l.length;n++)(i=l[n])&&(i.__=e,t=typeof i.type=="function"?pe(i,t,r):me(r,i,i,l,i.__e,t));return t}function R(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){R(r,t)}):t.push(e)),t}function me(e,t,r,i,l,n){var c,h,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(r==null||l!=n||l.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(l),c=null;else{for(h=n,f=0;(h=h.nextSibling)&&f<i.length;f+=2)if(h==l)break e;e.insertBefore(l,n),c=n}return c!==void 0?c:l.nextSibling}function $e(e,t,r,i,l){var n;for(n in r)n==="children"||n==="key"||n in t||F(e,n,null,r[n],i);for(n in t)l&&typeof t[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||r[n]===t[n]||F(e,n,t[n],r[n],i)}function z(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||Ce.test(t)?r:r+"px"}function F(e,t,r,i,l){var n;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||z(e.style,t,"");if(r)for(t in r)i&&r[t]===i[t]||z(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")n=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=r,r?i||e.addEventListener(t,n?X:Q,n):e.removeEventListener(t,n?X:Q,n);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r==null?"":r;break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Q(e){this.l[e.type+!1](_.event?_.event(e):e)}function X(e){this.l[e.type+!0](_.event?_.event(e):e)}function J(e,t,r,i,l,n,c,h,f){var m,a,p,u,s,d,x,v,y,k,M,K,H,b=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(f=r.__h,h=t.__e=r.__e,t.__h=null,n=[h]),(m=_.__b)&&m(t);try{e:if(typeof b=="function"){if(v=t.props,y=(m=b.contextType)&&i[m.__c],k=m?y?y.props.value:m.__:i,r.__c?x=(a=t.__c=r.__c).__=a.__E:("prototype"in b&&b.prototype.render?t.__c=a=new b(v,k):(t.__c=a=new C(v,k),a.constructor=b,a.render=Me),y&&y.sub(a),a.props=v,a.state||(a.state={}),a.context=k,a.__n=i,p=a.__d=!0,a.__h=[]),a.__s==null&&(a.__s=a.state),b.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=S({},a.__s)),S(a.__s,b.getDerivedStateFromProps(v,a.__s))),u=a.props,s=a.state,p)b.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==u&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(v,k),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(v,a.__s,k)===!1||t.__v===r.__v){a.props=v,a.state=a.__s,t.__v!==r.__v&&(a.__d=!1),a.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(j){j&&(j.__=t)}),a.__h.length&&c.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(v,a.__s,k),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(u,s,d)})}if(a.context=k,a.props=v,a.__v=t,a.__P=e,M=_.__r,K=0,"prototype"in b&&b.prototype.render)a.state=a.__s,a.__d=!1,M&&M(t),m=a.render(a.props,a.state,a.context);else do a.__d=!1,M&&M(t),m=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++K<25);a.state=a.__s,a.getChildContext!=null&&(i=S(S({},i),a.getChildContext())),p||a.getSnapshotBeforeUpdate==null||(d=a.getSnapshotBeforeUpdate(u,s)),H=m!=null&&m.type===N&&m.key==null?m.props.children:m,fe(e,Array.isArray(H)?H:[H],t,r,i,l,n,c,h,f),a.base=t.__e,t.__h=null,a.__h.length&&c.push(a),x&&(a.__E=a.__=null),a.__e=!1}else n==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Ae(r.__e,t,r,i,l,n,c,f);(m=_.diffed)&&m(t)}catch(j){t.__v=null,(f||n!=null)&&(t.__e=h,t.__h=!!f,n[n.indexOf(h)]=null),_.__e(j,t,r)}}function ve(e,t){_.__c&&_.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(i){i.call(r)})}catch(i){_.__e(i,r.__v)}})}function Ae(e,t,r,i,l,n,c,h){var f,m,a,p=r.props,u=t.props,s=t.type,d=0;if(s==="svg"&&(l=!0),n!=null){for(;d<n.length;d++)if((f=n[d])&&"setAttribute"in f==!!s&&(s?f.localName===s:f.nodeType===3)){e=f,n[d]=null;break}}if(e==null){if(s===null)return document.createTextNode(u);e=l?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s,u.is&&u),n=null,h=!1}if(s===null)p===u||h&&e.data===u||(e.data=u);else{if(n=n&&D.call(e.childNodes),m=(p=r.props||E).dangerouslySetInnerHTML,a=u.dangerouslySetInnerHTML,!h){if(n!=null)for(p={},d=0;d<e.attributes.length;d++)p[e.attributes[d].name]=e.attributes[d].value;(a||m)&&(a&&(m&&a.__html==m.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if($e(e,u,p,l,h),a)t.__k=[];else if(d=t.props.children,fe(e,Array.isArray(d)?d:[d],t,r,i,l&&s!=="foreignObject",n,c,n?n[0]:r.__k&&A(r,0),h),n!=null)for(d=n.length;d--;)n[d]!=null&&_e(n[d]);h||("value"in u&&(d=u.value)!==void 0&&(d!==e.value||s==="progress"&&!d||s==="option"&&d!==p.value)&&F(e,"value",d,p.value,!1),"checked"in u&&(d=u.checked)!==void 0&&d!==e.checked&&F(e,"checked",d,p.checked,!1))}return e}function ye(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(i){_.__e(i,r)}}function ge(e,t,r){var i,l;if(_.unmount&&_.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||ye(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){_.__e(n,t)}i.base=i.__P=null}if(i=e.__k)for(l=0;l<i.length;l++)i[l]&&ge(i[l],t,typeof e.type!="function");r||e.__e==null||_e(e.__e),e.__e=e.__d=void 0}function Me(e,t,r){return this.constructor(e,r)}function Pe(e,t,r){var i,l,n;_.__&&_.__(e,t),l=(i=typeof r=="function")?null:r&&r.__k||t.__k,n=[],J(t,e=(!i&&r||t).__k=ue(N,null,[e]),l||E,E,t.ownerSVGElement!==void 0,!i&&r?[r]:l?null:t.firstChild?D.call(t.childNodes):null,n,!i&&r?r:l?l.__e:t.firstChild,i),ve(n,e)}function Le(e,t,r){var i,l,n,c=S({},e.props);for(n in t)n=="key"?i=t[n]:n=="ref"?l=t[n]:c[n]=t[n];return arguments.length>2&&(c.children=arguments.length>3?D.call(arguments,2):r),L(e.type,c,i||e.key,l||e.ref,null)}function De(e,t){var r={__c:t="__cC"+se++,__:e,Consumer:function(i,l){return i.children(l)},Provider:function(i){var l,n;return this.getChildContext||(l=[],(n={})[t]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&l.some(B)},this.sub=function(c){l.push(c);var h=c.componentWillUnmount;c.componentWillUnmount=function(){l.splice(l.indexOf(c),1),h&&h.call(c)}}),i.children}};return r.Provider.__=r.Consumer.contextType=r}D=he.slice,_={__e:function(e,t,r,i){for(var l,n,c;t=t.__;)if((l=t.__c)&&!l.__)try{if((n=l.constructor)&&n.getDerivedStateFromError!=null&&(l.setState(n.getDerivedStateFromError(e)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,i||{}),c=l.__d),c)return l.__E=l}catch(h){e=h}throw e}},ce=0,C.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},r),this.props)),e&&S(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),B(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),B(this))},C.prototype.render=N,P=[],T.__r=0,se=0;var w,O,Z,be=[],W=[],ee=_.__b,te=_.__r,re=_.diffed,ne=_.__c,ie=_.unmount;function He(){for(var e;e=be.shift();)if(e.__P)try{e.__H.__h.forEach(U),e.__H.__h.forEach(G),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){w=null,ee&&ee(e)},_.__r=function(e){te&&te(e);var t=(w=e.__c).__H;t&&(O===w?(t.__h=[],w.__h=[],t.__.forEach(function(r){r.__V=W,r.u=void 0})):(t.__h.forEach(U),t.__h.forEach(G),t.__h=[])),O=w},_.diffed=function(e){re&&re(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(be.push(t)!==1&&Z===_.requestAnimationFrame||((Z=_.requestAnimationFrame)||function(r){var i,l=function(){clearTimeout(n),oe&&cancelAnimationFrame(i),setTimeout(r)},n=setTimeout(l,100);oe&&(i=requestAnimationFrame(l))})(He)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.__V!==W&&(r.__=r.__V),r.u=void 0,r.__V=W})),O=w=null},_.__c=function(e,t){t.some(function(r){try{r.__h.forEach(U),r.__h=r.__h.filter(function(i){return!i.__||G(i)})}catch(i){t.some(function(l){l.__h&&(l.__h=[])}),t=[],_.__e(i,r.__v)}}),ne&&ne(e,t)},_.unmount=function(e){ie&&ie(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{U(i)}catch(l){t=l}}),t&&_.__e(t,r.__v))};var oe=typeof requestAnimationFrame=="function";function U(e){var t=w,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),w=t}function G(e){var t=w;e.__c=e.__(),w=t}var je={};function I(e,t){for(var r in t)e[r]=t[r];return e}function Ie(e,t,r){var i,l=/(?:\?([^#]*))?(#.*)?$/,n=e.match(l),c={};if(n&&n[1])for(var h=n[1].split("&"),f=0;f<h.length;f++){var m=h[f].split("=");c[decodeURIComponent(m[0])]=decodeURIComponent(m.slice(1).join("="))}e=q(e.replace(l,"")),t=q(t||"");for(var a=Math.max(e.length,t.length),p=0;p<a;p++)if(t[p]&&t[p].charAt(0)===":"){var u=t[p].replace(/(^:|[+*?]+$)/g,""),s=(t[p].match(/[+*?]+$/)||je)[0]||"",d=~s.indexOf("+"),x=~s.indexOf("*"),v=e[p]||"";if(!v&&!x&&(s.indexOf("?")<0||d)){i=!1;break}if(c[u]=decodeURIComponent(v),d||x){c[u]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(t[p]!==e[p]){i=!1;break}return(r.default===!0||i!==!1)&&c}function Ue(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function Ee(e,t){return e.index=t,e.rank=function(r){return r.props.default?0:q(r.props.path).map(Te).join("")}(e),e.props}function q(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Te(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Fe={},$=[],ae=[],g=null,ke={url:V()},Ne=De(ke);function V(){var e;return""+((e=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():typeof location!="undefined"?location:Fe).pathname||"")+(e.search||"")}function Oe(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(r){for(var i=$.length;i--;)if($[i].canRoute(r))return!0;return!1}(e)&&function(r,i){i===void 0&&(i="push"),g&&g[i]?g[i](r):typeof history!="undefined"&&history[i+"State"]&&history[i+"State"](null,null,r)}(e,t?"replace":"push"),we(e)}function we(e){for(var t=!1,r=0;r<$.length;r++)$[r].routeTo(e)&&(t=!0);return t}function We(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),r=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!r||r.match(/^_?self$/i)))return Oe(t)}}function Be(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function Re(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(We(t))return Be(e)}while(t=t.parentNode)}}var le=!1;function xe(e){e.history&&(g=e.history),this.state={url:e.url||V()}}I(xe.prototype=new C,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=R(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;le||(le=!0,g||addEventListener("popstate",function(){we(V())}),addEventListener("click",Re)),$.push(this),g&&(this.u=g.listen(function(t){var r=t.location||t;e.routeTo(""+(r.pathname||"")+(r.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),$.splice($.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(Ee).sort(Ue);for(var r=0;r<e.length;r++){var i=e[r],l=Ie(t,i.props.path,i.props);if(l)return[i,l]}},render:function(e,t){var r,i,l=e.onChange,n=t.url,c=this.c,h=this.g(R(e.children),n);if(h&&(i=Le(h[0],I(I({url:n,matches:r=h[1]},r),{key:void 0,ref:void 0}))),n!==(c&&c.url)){I(ke,c=this.c={url:n,previous:c&&c.url,current:i,path:i?i.props.path:null,matches:r}),c.router=this,c.active=i?[i]:[];for(var f=ae.length;f--;)ae[f]({});typeof l=="function"&&l(c)}return ue(Ne.Provider,{value:c},i)}});var Ge=0;function o(e,t,r,i,l){var n,c,h={};for(c in t)c=="ref"?n=t[c]:h[c]=t[c];var f={type:e,props:h,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ge,__source:l,__self:i};if(typeof e=="function"&&(n=e.defaultProps))for(c in n)h[c]===void 0&&(h[c]=n[c]);return _.vnode&&_.vnode(f),f}class qe extends C{render(){return o("main",{class:"home",children:[o("div",{class:"intro",children:[o("h1",{children:"Paramjit Singh"}),o("p",{children:["I am a software engineer in Berlin, interested in creating intelligent software which delivers delightful experiences to users.  Read more about ",o("a",{href:"/about",children:"me"})," or my ",o("a",{href:"/dev",children:"dev services"}),"."]}),o("div",{class:"icons",children:[o("a",{href:"https://www.linkedin.com/in/paramjit-org/",children:o("img",{src:"/assets/linkedin.svg"})}),o("a",{href:"https://github.com/busywhistling",children:o("img",{src:"/assets/github.svg"})})]})]}),o("picture",{children:o("img",{src:"/assets/paramjit-portrait.webp",alt:"Paramjit's portrait"})})]})}}class Je extends C{render(){return o("main",{children:[o("header",{children:[o("h1",{children:"About"}),o("div",{children:o("a",{href:"/",children:o("h2",{children:"Home"})})})]}),o("article",{children:[o("p",{children:["I am a software engineer in Berlin, with expertise in full-stack development (here's a ",o("a",{href:"/dev",children:"portfolio"}),"). So far, I had been doing a math PhD at the Humboldt-Universit\xE4t in Berlin. You can get in touch via ",o("a",{href:"https://www.linkedin.com/in/paramjit-org/",children:"LinkedIn"}),"."]}),o("div",{class:"math",children:[o("div",{class:"col",children:[o("h2",{children:"Math research & teaching"}),o("p",{children:["I\u2019m currently finishing my math PhD under ",o("a",{href:"https://www.mathematik.hu-berlin.de/~wendl/",children:"Prof. Chris Wendl"})," at the ",o("a",{href:"https://www.mathematik.hu-berlin.de/en/front-page-en",children:"Humboldt-Universit\xE4t"})," in ",o("a",{href:"https://www.math-berlin.de/",children:"Berlin"}),". My research is focused on holomorphic curves in different contexts of symplectic/contact geometry."]}),o("p",{children:["My master\u2019s ",o("a",{href:"/docs/master-thesis-paramjit.pdf","data-native":!0,children:"thesis"})," back at the ",o("a",{href:"https://www.cmi.ac.in",children:"Chennai Mathematical Institute"})," focused on being a graduate introduction to J-holomorphic curves in symplectic topology."]}),o("p",{children:["Over 2015-19, I\u2019ve assisted in teaching various mathematics and programming courses at ",o("a",{href:"https://www.cmi.ac.in",children:"CMI"}),", aimed at bachelor\u2019s and master\u2019s students."]})]}),o("div",{class:"col",children:[o("h2",{children:"Math talks"}),o("ul",{style:"padding-left: 0",children:[o("li",{children:[o("i",{children:"A special case analogue of Gromov invariant for symplectic Calabi-Yau 3-folds"}),", following ",o("a",{href:"https://arxiv.org/abs/2106.01206",children:"[Bai-Swaminathan, \u201921]"}),", ",o("a",{href:"https://walpu.ski/Teaching/WS2122/SymplecticGeometry/",children:"Symplectic Geometry Research Seminar"}),", HU Berlin, ",o("b",{children:"Dec 06 2021"}),", ",o("a",{href:"/docs/2021-12-06-gromov-invariant-cy-3-folds-paramjit.pdf","data-native":!0,children:"slides"}),"."]}),o("li",{children:[o("i",{children:"What is Floer homology?"}),", ",o("a",{href:"https://whatisseminar.xyz/index.html",children:"BMS \u201CWhat is \u2026?\u201D Seminar"})," (online), ",o("b",{children:"Jul 16 2021"}),", ",o("a",{href:"/docs/2021-07-16-floer-homology-paramjit.pdf","data-native":!0,children:"notes"}),"."]}),o("li",{children:[o("i",{children:"Symplectic reduction"}),", ",o("a",{href:"https://amor.cms.hu-berlin.de/~faisalsh/Seminar.html",children:"BMS Symplectic Geometry Student Seminar"})," (online), ",o("b",{children:"Jun 25 2021"}),", ",o("a",{href:"/docs/2021-06-25-symplectic-reduction-paramjit.pdf","data-native":!0,children:"notes"}),"."]}),o("li",{children:[o("i",{children:"Symplectic cohomology of Liouville sectors"}),", ",o("a",{href:"https://www.uni-augsburg.de/en/fakultaet/mntf/math/prof/geom/talks-topics-symplectic-geometry/summersemester-2021/",children:"Augsburg-Berlin-Hamburg-Regensburg Seminar Symplektische Geometrie"})," (online), ",o("b",{children:"Jun 01 2021"}),", ",o("a",{href:"/docs/2021-06-01-symp-cohom-of-liouville-sectors-paramjit.pdf","data-native":!0,children:"notes"}),"."]}),o("li",{children:[o("i",{children:"Transversality and symmetry for pseudoholomorphic covers"}),", ",o("a",{href:"https://www.cmi.ac.in",children:"Chennai Mathematical Institute"})," (online), ",o("b",{children:"Aug 12 2020"}),", ",o("a",{href:"/docs/2020-08-12-transversality-and-symmetry-for-pseudoholomorphic-covers-paramjit.html","data-native":!0,children:"notes"}),"."]})]})]})]}),o("h2",{children:"Other stuff"}),o("ul",{style:"padding-left: 0",children:[o("li",{children:["My homework assignments for an introductory course on Floer homology (",o("a",{href:"/docs/hw-floer-paramjit-1.pdf","data-native":!0,children:"1"}),", ",o("a",{href:"/docs/hw-floer-paramjit-2.pdf","data-native":!0,children:"2"}),", ",o("a",{href:"/docs/hw-floer-paramjit-3.pdf","data-native":!0,children:"3"}),", ",o("a",{href:"/docs/hw-floer-paramjit-4.pdf","data-native":!0,children:"4"}),", ",o("a",{href:"/docs/hw-floer-paramjit-5.pdf","data-native":!0,children:"5"}),")."]}),o("li",{children:["My graduate ",o("a",{href:"/docs/gradsop-paramjit.pdf","data-native":!0,children:"statement of purpose"})," provided as a reference for grad school applicants from my alma mater interested in geometry."]}),o("li",{children:["My cousin\u2019s recordings (",o("a",{href:"https://www.youtube.com/watch?v=7DCAvcFTMnc",children:"1"}),", ",o("a",{href:"https://www.youtube.com/watch?v=23iBH41KB1A",children:"2"}),", ",o("a",{href:"https://www.youtube.com/watch?v=aYY8PI3p4sU",children:"3"}),") on YouTube."]}),o("li",{children:"My hobbies include sports (volleyball, weight training), reading (history & non-fiction) and playing the violin."})]})]})]})}}class Ve extends C{render(){return o("main",{children:[o("header",{children:[o("h1",{children:"Dev"}),o("div",{children:o("a",{href:"/",children:o("h2",{children:"Home"})})})]}),o("article",{children:[o("p",{children:"I'm familiar with the following technologies:"}),o("ul",{children:[o("li",{children:"Languages: Javascript/Typescript, Python, Go (basic), Java (basic), C++ (basic)"}),o("li",{children:"Markup: HTML/CSS, XML, JSON/CSV (+ their manipulation libraries)"}),o("li",{children:"Frameworks: React, Redux, Preact, Solid.js, Django/Flask "}),o("li",{children:"Libraries: Express.js, Socket.IO, three.js"}),o("li",{children:"Databases: MySQL/MariaDB/PostgreSQL, SQLite, MongoDB"}),o("li",{children:"DevOps: Docker, Heroku/Dokku "}),o("li",{children:"Tools: git, fish/zsh/bash, node, vite, nodemon, npm, bpython, pipenv, sway/i3"})]}),o("p",{children:"I've been a technology enthusiast for a long time, having used my custom Arch Linux distribution for over 10 years now. I value pragmatic system design choices and performant software."}),o("p",{children:"Portfolio (more in the works on the github page)"}),o("ul",{children:[o("li",{children:o("a",{href:"https://paramjit.org/chess_simulator/",children:"Chess simulator"})}),o("li",{children:o("a",{href:"https://github.com/busywhistling/live_chat",children:"Live web chat"})})]})]})]})}}class Ke extends C{render(t){return o("main",{children:[o("header",{children:[o("h1",{children:"404 Not Found"}),o("div",{children:o("a",{href:"/",children:o("h2",{children:"Home"})})})]}),o("article",{children:[o("pre",{children:t.url}),o("p",{children:"Your requested resource couldn't be found. Let me know if this should have worked."})]})]})}}const Ye=()=>o(xe,{children:[o(qe,{path:"/"}),o(Je,{path:"/about"}),o(Ve,{path:"/dev"}),o(Ke,{default:!0})]});Pe(o(Ye,{}),document.body);

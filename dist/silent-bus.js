function t(t,e,s,i){var r,n=arguments.length,o=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,s,o):r(e,s))||o);return n>3&&o&&Object.defineProperty(e,s,o),o}!function(){const t={DEBUG:!1};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${r}`);class o{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,p=0;const{strings:u,values:{length:m}}=t;for(;p<m;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)a(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=u[p],s=c.exec(e)[2],i=s.toLowerCase()+"$lit$",r=t.getAttribute(i);t.removeAttribute(i);const o=r.split(n);this.parts.push({type:"attribute",index:h,name:s,strings:o}),p+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(n),o=r.length-1;for(let e=0;e<o;e++){let s,n=r[e];if(""===n)s=d();else{const t=c.exec(n);null!==t&&a(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++h})}""===r[o]?(i.insertBefore(d(),t),s.push(t)):t.data=r[o],p+=o}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(d(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(s.push(t),h--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),p++}}else o.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const a=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},l=t=>-1!==t.index,d=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,133,null,!1);let n=u(i),o=i[n],a=-1,l=0;const d=[];let c=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,n=u(i,n),o=i[n]}d.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},u=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(l(e))return s}return-1};const m=new WeakMap,g=t=>"function"==typeof t&&m.has(t),f={},v={};class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,o=0,a=0,d=r.nextNode();for(;o<i.length;)if(n=i[o],l(n)){for(;a<n.index;)a++,"TEMPLATE"===d.nodeName&&(s.push(d),r.currentNode=d.content),null===(d=r.nextNode())&&(r.currentNode=s.pop(),d=r.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(d.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const _=` ${i} `;class S{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let n=0;n<t;n++){const t=this.strings[n],o=t.lastIndexOf("\x3c!--");s=(o>-1||s)&&-1===t.indexOf("--\x3e",o+1);const a=c.exec(t);e+=null===a?t+(s?_:r):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const w=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(w(t)||!b(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===f||w(t)&&t===this.value||(this.value=t,g(t)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const t=this.value;this.value=f,t(this)}this.value!==f&&this.committer.commit()}}class T{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(d()),this.endNode=t.appendChild(d())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=d()),t.__insert(this.endNode=d())}insertAfterPart(t){t.__insert(this.startNode=d()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}const t=this.__pendingValue;t!==f&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):b(t)?this.__commitIterable(t):t===v?(this.value=v,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)s=e[i],void 0===s&&(s=new T(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=f}}class P extends x{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends C{}let k=!1;(()=>{try{const t={get capture(){return k=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class L{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;g(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=f,t(this)}if(this.__pendingValue===f)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=$(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=f}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const $=t=>t&&(k?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function E(t){let e=M.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},M.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const r=t.strings.join(i);return s=e.keyString.get(r),void 0===s&&(s=new o(t,t.getTemplateElement()),e.keyString.set(r,s)),e.stringsArray.set(t.strings,s),s}const M=new Map,D=new WeakMap;const O=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];if("."===r){return new P(t,e.slice(1),s).parts}return"@"===r?[new L(t,e.slice(1),i.eventContext)]:"?"===r?[new N(t,e.slice(1),s)]:new x(t,e,s).parts}handleTextExpression(t){return new T(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const V=(t,...e)=>new S(t,e,"html",O),U=(t,e)=>`${t}--${e}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const z=t=>e=>{const s=U(e.type,t);let r=M.get(s);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},M.set(s,r));let n=r.stringsArray.get(e.strings);if(void 0!==n)return n;const a=e.strings.join(i);if(n=r.keyString.get(a),void 0===n){const s=e.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(s,t),n=new o(e,s),r.keyString.set(a,n)}return r.stringsArray.set(e.strings,n),n},j=["html","svg"],B=new Set,F=(t,e,s)=>{B.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{j.forEach(e=>{const s=M.get(U(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),h(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,133,null,!1);let o=u(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===s&&(a=p(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=u(r,o);return}o=u(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},I=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:I};class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=I){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||q,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||q.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=H){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;const Z=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function W(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):Z(t,e)}const K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol();class G{constructor(t,e){if(e!==Y)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Q={};class X extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Q&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Q}}X.finalized=!0,X.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=D.has(e),o=R&&11===e.nodeType&&!!e.host,a=o&&!B.has(r),l=a?document.createDocumentFragment():e;if(((t,e,i)=>{let r=D.get(e);void 0===r&&(s(e,e.firstChild),D.set(e,r=new T(Object.assign({templateFactory:E},i))),r.appendInto(e)),r.setValue(t),r.commit()})(t,l,Object.assign({templateFactory:z(r)},i)),a){const t=D.get(l);D.delete(l);const i=t.value instanceof y?t.value.template:void 0;F(r,l,i),s(e,e.firstChild),e.appendChild(l),D.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)};let tt=class extends X{constructor(){super(),this.busLines=[],this.businformation=[],this.isBus=!1,this.trains=[],this.trainStations={1220:"לב המפרץ",1240:"יקנעם - כפר יהושע",1250:"מגדל העמק - כפר ברוך",1260:"עפולה",1280:"בית שאן",1300:"חוצות המפרץ",1400:"קריית מוצקין",1500:"עכו",1600:"נהריה",1820:"אחיהוד",1840:"כרמיאל",2100:"חיפה- מרכז השמונה",2200:"חיפה - בת גלים",2300:"חיפה - חוף הכרמל (ש רזיאל)",2500:"עתלית",2800:"בנימינה",2820:"קיסריה - פרדס חנה",300:"פאתי מודיעין",3100:"חדרה - מערב",3300:"נתניה",3310:"נתניה - ספיר",3400:"בית יהושע",3500:"הרצליה",3600:"תל אביב - אוניברסיטה",3700:"תל אביב - סבידור מרכז",400:"מודיעין - מרכז",4100:"בני ברק",4170:"פתח תקווה  - קריית אריה",4250:"פתח תקווה - סגולה",4600:"תל אביב - השלום",4640:"צומת חולון",4660:"חולון - וולפסון",4680:"בת ים - יוספטל",4690:"בת ים - קוממיות",4800:'כפר חב"ד',4900:"תל אביב - ההגנה",5e3:"לוד",5010:"רמלה",5150:"לוד גני אביב",5200:"רחובות (א הדר)",5300:"באר יעקב",5410:"יבנה מזרח",5800:"אשדוד עד הלום (מ בר כוכבא)",5900:"אשקלון",6300:"בית שמש",6500:"ירושלים - גן החיות התנכי",6700:"ירושלים - מלחה",700:"קריית חיים",7e3:"קריית גת",7300:"באר שבע- צפון/אוניברסיטה",7320:"באר שבע - מרכז",7500:"דימונה",8550:"להבים - רהט",8600:"נמל תעופה בן גוריון",8700:"כפר סבא - נורדאו (א קוסטיוק)",8800:"ראש העין - צפון",9e3:"יבנה מערב",9100:"ראשון לציון - הראשונים",9200:"הוד השרון - סוקולוב",9600:"שדרות",9650:"נתיבות",9700:"אופקים",9800:"ראשון לציון-משה דיין",2960:"רעננה דרום",2940:"רעננה מערב",17118:"ירושלים יצחק נבון"};const t=this.getAttribute("station"),e=JSON.parse(this.getAttribute("busLines")),s=JSON.parse(this.getAttribute("fromStation")),i=JSON.parse(this.getAttribute("toStation"));t&&e&&(this.busLines=e,this.station=t,this.fetchData()),s&&i&&(this.fromStation=s,this.toStation=i,this.fetchData())}setConfig(t){this.validateConfig(t),this.busLines=t.busLines,this.station=t.station,this.isBus=!t.isTrain,this.fromStation=t.fromStation,this.toStation=t.toStation,this.fetchData()}validateConfig(t){if(!(t.isTrain||t.station&&t.busLines))throw new Error("You need to pass station & busLines");if(t.isTrain&&(!t.fromStation||!t.toStation))throw new Error("You need to pass from and to stations")}connectedCallback(){super.connectedCallback(),this.timer=setInterval(()=>{this.refresh()},3e4)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer)}async fetchDataTrains(){if(!this.fromStation||!this.toStation)return;console.log("train");const t=`http://localhost:3001/trains?fromStation=${this.fromStation}&toStation=${this.toStation}`,e=this.fetchTrainsFromCache();if(e)return this.trains=e,void console.log("using cache");this.cleanOldCache(),fetch(t).then(async t=>{var e;const s=await t.json();this.trains=null===(e=s.result)||void 0===e?void 0:e.travels,console.log("trains data",this.trains),localStorage.setItem(this.getStorageKey(),JSON.stringify(this.trains)),this.requestUpdate()})}cleanOldCache(){const t=Object.keys(localStorage).find(t=>t.includes(`${this.fromStation}-${this.toStation}`));t&&localStorage.removeItem(t)}getStorageKey(){if(!this.fromStation||!this.toStation)return"";const t=(new Date).toLocaleDateString(void 0,{day:"numeric",month:"numeric"});return`${this.fromStation}-${this.toStation}-${t}`}fetchTrainsFromCache(){return JSON.parse(localStorage.getItem(this.getStorageKey()))}fetchData(){if(!this.isBus)return void this.fetchDataTrains();this.businformation=[];const t=Math.floor((new Date).getTime()/1e3),e=`https://app.busnearby.co.il/stopSearch?query=${this.station}&locale=he`;fetch(e).then(t=>t.json()).then(e=>{const s=`https://api.busnearby.co.il/directions/index/stops/1:${e[0].stop_id}/stoptimes?numberOfDepartures=1&timeRange=86400&startTime=${t}&locale=he`;return this.stopName=e[0].stop_name,fetch(s)}).then(t=>t.json()).then(t=>{t.filter(t=>{var e,s;return!((null===(s=null===(e=t.pattern.destStop)||void 0===e?void 0:e.code)||void 0===s?void 0:s.toString())===this.station.toString())&&t.times.find(t=>this.busLines.map(t=>t.toString()).includes(t.routeShortName))}).forEach(t=>{const e=t.times[0],s=new Date(1e3*e.serviceDay),i=new Date,r=s.getDate()!==i.getDate();this.businformation.push({lineNumber:e.routeShortName,realTimeArrivalDate:this.secondsToDateOriginal(e.realtimeArrival,r),realTimeArrivalFromNow:this.getArrivalTimeDiff(e.realtimeArrival,r),realTimeArrivalDelay:e.arrivalDelay/60,isRealTime:e.realtime,destination:t.pattern.destStop.city,agency:t.pattern.route.agency})}),this.requestUpdate(),this.lastUpdated=new Date})}secondsToDateOriginal(t,e=!1){const s=new Date;return e&&s.setDate(s.getDate()+1),s.setHours(0,0,t),s}getArrivalTimeDiff(t,e=!1){const s=new Date;return(this.secondsToDateOriginal(t,e).getTime()-s.getTime())/1e3/60}getShortTime(t){if(!t)return"";const e=null==t?void 0:t.split("T")[1],[s,i]=null==e?void 0:e.split(":");return`${s}:${i}`}getRealTimeArrivalFromNowText(t){return t>=120?`${Math.round(t/60)} hours`:t>=1&&t<=120?`${Math.round(t)} min`:`${60*t} sec`}getDelayMessage(t){const e=t>=0?"delay":"earlier";return t>=60||0===t?"":t>=1?`${Math.round(t)} min ${e}`:`${Math.round(Math.abs(60*t))} sec ${e}`}refresh(){this.fetchData(),this.isBus&&this.handleRefreshClickForBus()}handleRefreshClickForBus(){const t=this.shadowRoot.querySelector(".refresh");t.classList.add("spin"),setTimeout(()=>{t.classList.remove("spin")},1e3)}getColorByAgency(t){switch(t){case"3":return"rgb(1, 131, 105)";case"15":return"rgb(247, 143, 30)";default:return"blue"}}getLastUpdated(){var t;return null===(t=this.lastUpdated)||void 0===t?void 0:t.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})}render(){return this.rednerBus()}rednerBus(){return V`
      <div class="station-name">
        <span class="refresh" @click="${()=>this.refresh()}"
          >${this.getRefreshSvg()}</span
        >
        <span>${this.stopName}</span>
      </div>
      <div class="updated">
        Last updated:
        ${this.getLastUpdated()}
      </div>

      <div>
        ${this.businformation.map(t=>V`
            <div class="item">
              <div class="main-row">
                <div
                  class="lineNumber"
                  style="background-color: ${this.getColorByAgency(t.agency.id)}"
                >
                  ${t.lineNumber}
                </div>
                <div class="destDest">${t.destination}</div>
                <div class="time">
                  <div class="signal">${this.getSignalSvg()}</div>
                  <div>
                    ${this.getRealTimeArrivalFromNowText(t.realTimeArrivalFromNow)}
                  </div>
                </div>
                <div
                  class="delay"
                  style="color: ${t.realTimeArrivalDelay>=0?"red":"green"}"
                >
                  ${this.getDelayMessage(t.realTimeArrivalDelay)}
                </div>
              </div>

              <!--              <div class="extra">-->
              <!--                <div>-->
              <!--                  Real time arrival date:-->
              <!--                  ${new Date(t.realTimeArrivalDate).toLocaleString()}-->
              <!--                </div>-->
              <!--                <div>-->
              <!--                  Real time arrival from now:-->
              <!--                  ${t.realTimeArrivalFromNow} minutes-->
              <!--                </div>-->
              <!--                <div>-->
              <!--                  Real time arrival delay: ${t.realTimeArrivalDelay}-->
              <!--                  minutes-->
              <!--                </div>-->
              <!--                <div>-->
              <!--                  Is real time: ${t.isRealTime?"Yes":"No"}-->
              <!--                </div>-->
              <!--              </div>-->

              <!--            </div>-->
              <!-- -->
            </div>
          `)}
      </div>
    `}getTrainDiffTime(t){if(!t)return"";const e=new Date(t)-new Date,s=Math.floor(e/6e4);return console.log(`The time difference is ${s} minutes.`),`${s}`}getFirstTrain(){var t,e;const s=null===(t=this.trains)||void 0===t?void 0:t.find(t=>{const e=t.departureTime,s=new Date;return new Date(e)>s});return null===(e=null==s?void 0:s.trains)||void 0===e?void 0:e[0]}getNextTrains(){var t;let e=null===(t=this.trains)||void 0===t?void 0:t.filter(t=>{const e=t.departureTime,s=new Date;return new Date(e)>s});return e=null==e?void 0:e.splice(1,2),null==e?void 0:e.map(t=>this.getShortTime(t.departureTime)).join(", ")}getSignalSvg(){return V`<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
      height="10px"
      width="10px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 455 455"
      xml:space="preserve"
    >
      <g>
        <path
          d="M67.5,320C30.28,320,0,350.28,0,387.5S30.28,455,67.5,455s67.5-30.28,67.5-67.5S104.72,320,67.5,320z M67.5,440   C38.552,440,15,416.449,15,387.5S38.552,335,67.5,335s52.5,23.551,52.5,52.5S96.448,440,67.5,440z"
        />
        <path
          d="M67.5,160C46.822,160,30,176.822,30,197.5S46.822,235,67.5,235c84.089,0,152.5,68.411,152.5,152.5   c0,20.678,16.822,37.5,37.5,37.5s37.5-16.822,37.5-37.5c0-60.768-23.664-117.898-66.633-160.867   C185.397,183.664,128.268,160,67.5,160z M257.5,410c-12.406,0-22.5-10.093-22.5-22.5C235,295.14,159.859,220,67.5,220   C55.094,220,45,209.907,45,197.5S55.094,175,67.5,175c56.761,0,110.124,22.104,150.26,62.24C257.896,277.375,280,330.739,280,387.5   C280,399.907,269.906,410,257.5,410z"
        />
        <path
          d="M424.532,236.656c-19.519-46.148-47.454-87.585-83.028-123.16c-35.576-35.576-77.013-63.511-123.16-83.029   C170.547,10.25,119.796,0,67.5,0C46.822,0,30,16.822,30,37.5S46.822,75,67.5,75C239.813,75,380,215.187,380,387.5   c0,20.678,16.822,37.5,37.5,37.5s37.5-16.822,37.5-37.5C455,335.205,444.749,284.454,424.532,236.656z M417.5,410   c-12.406,0-22.5-10.093-22.5-22.5C395,206.916,248.084,60,67.5,60C55.094,60,45,49.907,45,37.5S55.094,15,67.5,15   c50.277,0,99.063,9.852,145,29.282c44.359,18.762,84.194,45.618,118.396,79.82c34.203,34.202,61.059,74.037,79.821,118.397   c19.43,45.939,29.282,94.724,29.282,145C440,399.907,429.906,410,417.5,410z"
        />
      </g>
    </svg>`}getTrainSvg(){return V`
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 15 15" version="1.1">
              <g id="surface1">
                  <path style=" stroke:none;fill-rule:evenodd;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 13.675781 10.863281 L 2.242188 10.863281 C 1.695312 10.863281 1.054688 9.855469 1.054688 9.203125 C 1.054688 8.074219 1.101562 6.949219 1.101562 5.878906 C 1.25 4.636719 1.648438 3.507812 2.042969 2.382812 C 2.140625 2.144531 2.289062 1.90625 2.539062 1.90625 L 6.648438 1.90625 C 7.042969 2.085938 7.4375 2.261719 7.585938 2.796875 C 8.773438 6.296875 11.152344 7.957031 13.824219 8.550781 L 13.824219 10.683594 C 13.824219 10.742188 13.726562 10.863281 13.675781 10.863281 Z M 13.675781 10.863281 "/>
                  <path style=" stroke:none;fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 1.84375 4.929688 L 7.042969 4.929688 C 7.191406 4.929688 7.242188 4.574219 7.140625 4.398438 C 6.992188 3.804688 6.746094 2.617188 6.496094 2.617188 L 2.488281 2.617188 C 2.242188 2.617188 1.992188 3.804688 1.746094 4.398438 C 1.695312 4.636719 1.746094 4.929688 1.84375 4.929688 Z M 1.84375 4.929688 "/>
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 2.6875 7.898438 C 2.6875 8.253906 2.488281 8.488281 2.242188 8.488281 C 1.992188 8.488281 1.746094 8.253906 1.746094 7.898438 C 1.746094 7.601562 1.992188 7.363281 2.242188 7.363281 C 2.488281 7.363281 2.6875 7.601562 2.6875 7.898438 Z M 6.648438 7.898438 C 6.648438 8.253906 6.449219 8.488281 6.199219 8.488281 C 5.953125 8.488281 5.707031 8.253906 5.707031 7.898438 C 5.707031 7.601562 5.953125 7.363281 6.199219 7.363281 C 6.449219 7.363281 6.648438 7.601562 6.648438 7.898438 Z M 6.648438 7.898438 "/>
                  <path style=" stroke:none;fill-rule:evenodd;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 8.921875 6.234375 L 8.921875 8.3125 L 8.132812 7.835938 C 8.082031 7.007812 8.03125 6.117188 8.03125 5.226562 C 8.328125 5.523438 8.675781 6 8.921875 6.234375 Z M 10.113281 7.363281 L 10.160156 8.964844 L 9.367188 8.550781 L 9.367188 6.710938 C 9.714844 7.066406 9.863281 7.125 10.113281 7.363281 Z M 10.507812 7.660156 L 10.507812 9.082031 C 10.753906 9.203125 11.003906 9.261719 11.25 9.320312 L 11.25 8.015625 Z M 11.546875 8.195312 L 11.546875 9.4375 C 11.746094 9.5 11.941406 9.558594 12.140625 9.558594 L 12.140625 8.371094 Z M 12.4375 8.488281 L 12.4375 9.617188 C 12.585938 9.675781 12.785156 9.675781 12.933594 9.675781 L 12.933594 8.609375 Z M 13.179688 8.667969 L 13.179688 9.734375 L 13.578125 9.792969 L 13.578125 8.726562 Z M 13.179688 8.667969 "/>
                  <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 1.054688 11.753906 L 2.042969 11.753906 L 2.042969 11.160156 L 3.527344 11.160156 L 3.527344 11.753906 L 5.707031 11.753906 L 5.707031 11.160156 L 13.824219 11.160156 L 13.824219 11.753906 C 11.546875 11.8125 9.21875 11.929688 7.984375 12.582031 L 1.054688 12.582031 Z M 1.054688 11.753906 "/>
              </g>
          </svg>
      `}getRefreshSvg(){return V`<svg
      xmlns="http://www.w3.org/2000/svg"
      class="svg-icon"
      style="width: 15px; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden; margin-inline-end: 5px"
      viewBox="0 0 1302 1024"
      version="1.1"
    >
      <path
        d="M336.473043 508.638609c-13.423304-13.423304-34.949565-13.423304-48.083478 0l-74.050782 74.150956C191.710609 442.323478 237.534609 299.074783 338.142609 198.366609c83.556174-83.656348 194.782609-129.825391 312.987826-129.825392 118.205217 0 229.431652 46.169043 313.266087 129.825392 13.412174 13.423304 34.938435 13.423304 48.072348 0 13.133913-13.434435 13.412174-34.971826 0-48.128C916.057043 53.715478 787.500522 0.278261 651.130435 0.278261c-136.370087 0-264.926609 53.158957-361.338435 149.960348-116.535652 116.669217-169.349565 283.14713-142.514087 445.696l-87.195826-87.296c-13.412174-13.423304-34.927304-13.423304-48.061217 0-13.423304 13.434435-13.423304 34.971826 0 48.128l138.050782 138.206608c6.700522 6.722783 15.36 10.073043 24.030609 10.073044 8.659478 0 17.318957-3.350261 24.041739-10.073044l138.039652-138.206608c13.690435-13.156174 13.690435-34.693565 0.278261-48.128zM1290.24 508.638609l-138.050783-138.206609c-13.412174-13.434435-34.927304-13.434435-48.061217 0L966.077217 508.638609c-13.412174 13.434435-13.412174 34.971826 0 48.128 13.412174 13.423304 34.927304 13.423304 48.061218 0l77.968695-78.057739c9.794783 129.257739-35.205565 254.319304-127.710608 346.64626-83.556174 83.656348-194.782609 129.814261-313.266087 129.814261S421.698783 909.022609 337.864348 825.35513c-13.412174-13.434435-34.938435-13.434435-48.072348 0-13.412174 13.434435-13.412174 34.971826 0 48.128C386.203826 970.006261 514.760348 1023.443478 651.130435 1023.443478c136.370087 0 264.926609-53.158957 361.338435-149.960348 106.473739-106.607304 158.45287-250.412522 147.545043-398.970434l82.16487 82.253913c6.711652 6.711652 15.36 10.073043 24.041739 10.073043 8.648348 0 17.318957-3.361391 24.019478-10.073043 13.423304-13.156174 13.423304-34.693565 0-48.128z"
        fill="blue"
      />
    </svg>`}};var et;tt.styles=((t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof G)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new G(s,Y)})`
    :host {
      padding: 16px 10px;
      max-width: 800px;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: var(--ha-card-box-shadow, none);
      box-sizing: border-box;
      border-radius: var(--ha-card-border-radius, 12px);
      border-width: var(--ha-card-border-width, 1px);
      border-style: solid;
      border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
      color: var(--primary-text-color);
      display: block;
      transition: all 0.3s ease-out 0s;
      position: relative;
      font-size: 14px;
    }

    .item {
      border: 1px solid black;
      padding: 15px 10px;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .lineNumber {
      width: 25px;
      padding-left: 4px;
      padding-right: 4px;
      text-align: center;
      background-color: rgb(247, 143, 30);
      color: rgb(255, 255, 255);
      border-radius: 2px;
    }
    
    .isTomorrow {
      
    }

    .station-name {
      display: flex;
      justify-content: center;
      margin-bottom: 5px;
      font-size: 18px;
    }

    .time {
      display: flex;
      width: 100px;
    }

    .destDest {
      width: 200px;
      margin-inline-start: 30px;
    }

    .delay {
      margin-inline-start: 30px;
      font-size: 12px;
      color: red;
      display: flex;
      align-items: center;
      min-width: 78px;
    }

    .main-row {
      display: flex;
      align-items: center;
    }

    .signal {
      width: 20px;
      height: 20px;
      color: green;
    }

    .spin {
      animation-name: spin;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    .refresh {
    }

    .updated {
      text-align: center;
      font-size: 12px;
      margin-bottom: 5px;
    }
    
    .next-train {
      text-align: center;
      font-size: 16px;
      margin-top: 5px;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,t([W()],tt.prototype,"config",void 0),t([W()],tt.prototype,"hass",void 0),t([W()],tt.prototype,"station",void 0),tt=t([(et="silent-bus",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(et,t):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(et,t))],tt),customElements.define("silent-bus",tt),window.customCards=window.customCards||[],window.customCards.push({type:"silent-bus",name:"dfgdgft",preview:!1,description:"dfgdfgdfg"});

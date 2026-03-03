(()=>{var t,e,i,s;function r(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;let o=window,n=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),a=new WeakMap;class h{constructor(t,e,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(n&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}}let d=(t,...e)=>new h(1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]),t,l),c=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e,i="";for(let e of t.cssRules)i+=e.cssText;return new h("string"==typeof(e=i)?e:e+"",void 0,l)})(t):t,p=window,u=p.trustedTypes,_=u?u.emptyScript:"",v=p.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:$},y="finalized";class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!=(e=this.h)?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){let r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(y))return!1;this[y]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(c(i));else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null==(t=this.constructor.h)||t.forEach(t=>t(this))}addController(t){var e,i;(null!=(e=this._$ES)?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null==(i=t.hostConnected)||i.call(t))}removeController(t){var e;null==(e=this._$ES)||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t,e;let i=null!=(t=this.shadowRoot)?t:this.attachShadow(this.constructor.shadowRootOptions);return e=this.constructor.elementStyles,n?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let e=document.createElement("style"),s=o.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=t.cssText,i.appendChild(e)}),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(t=this._$ES)||t.forEach(t=>{var e;return null==(e=t.hostConnected)?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null==(t=this._$ES)||t.forEach(t=>{var e;return null==(e=t.hostDisconnected)?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var s;let r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){let o=(void 0!==(null==(s=i.converter)?void 0:s.toAttribute)?i.converter:f).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Ev.get(t);if(void 0!==r&&this._$El!==r){let t=s.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null==(i=t.converter)?void 0:i.fromAttribute)?t.converter:f;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null==(t=this._$ES)||t.forEach(t=>{var e;return null==(e=t.hostUpdate)?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null==(e=this._$ES)||e.forEach(t=>{var e;return null==(e=t.hostUpdated)?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}m[y]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:m}),(null!=(t=p.reactiveElementVersions)?t:p.reactiveElementVersions=[]).push("1.6.3");let A=window,b=A.trustedTypes,E=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,C=`<${w}>`,P=document,k=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,N="[ 	\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,T=/>/g,M=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,j=/"/g,L=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),D=B(1),I=(B(2),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),V=new WeakMap,W=P.createTreeWalker(P,129,null,!1);function q(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,l=this.parts,[a,h]=((t,e)=>{let i=t.length-1,s=[],r,o=2===e?"<svg>":"",n=O;for(let e=0;e<i;e++){let i=t[e],l,a,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,null!==(a=n.exec(i)));)d=n.lastIndex,n===O?"!--"===a[1]?n=R:void 0!==a[1]?n=T:void 0!==a[2]?(L.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=M):void 0!==a[3]&&(n=M):n===M?">"===a[0]?(n=null!=r?r:O,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?M:'"'===a[3]?j:z):n===j||n===z?n=M:n===R||n===T?n=O:(n=M,r=void 0);let c=n===M&&t[e+1].startsWith("/>")?" ":"";o+=n===O?i+C:h>=0?(s.push(l),i.slice(0,h)+S+i.slice(h)+x+c):i+x+(-2===h?(s.push(void 0),e):c)}return[q(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=K.createElement(a,i),W.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=W.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(S)||e.startsWith(x)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+S).split(x),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?tt:"@"===e[1]?te:Q})}else l.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split(x),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],k()),W.nextNode(),l.push({type:2,index:++r});s.append(t[e],k())}}}else if(8===s.nodeType)if(s.data===w)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(x,t+1));)l.push({type:7,index:r}),t+=x.length-1}r++}}static createElement(t,e){let i=P.createElement("template");return i.innerHTML=t,i}}function J(t,e,i=t,s){var r,o,n;if(e===I)return e;let l=void 0!==s?null==(r=i._$Co)?void 0:r[s]:i._$Cl,a=U(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==a&&(null==(o=null==l?void 0:l._$AO)||o.call(l,!1),void 0===a?l=void 0:(l=new a(t))._$AT(t,i,s),void 0!==s?(null!=(n=i._$Co)?n:i._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=J(t,l._$AS(t,e.values),l,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:s}=this._$AD,r=(null!=(e=null==t?void 0:t.creationScope)?e:P).importNode(i,!0);W.currentNode=r;let o=W.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new G(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ti(o,this,t)),this._$AV.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(o=W.nextNode(),n++)}return W.currentNode=P,r}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,s){var r;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null==(r=null==s?void 0:s.isConnected)||r}get _$AU(){var t,e;return null!=(e=null==(t=this._$AM)?void 0:t._$AU)?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){let i;U(t=J(this,t,e))?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):H(i=t)||"function"==typeof(null==i?void 0:i[Symbol.iterator])?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&U(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(q(s.h,s.h[0]),this.options)),s);if((null==(e=this._$AH)?void 0:e._$AD)===r)this._$AH.v(i);else{let t=new Z(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new K(t)),e}T(t){H(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new G(this.k(k()),this.k(k()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null==(e=this._$AP)||e.call(this,t))}}class Q{constructor(t,e,i,s,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){let r=this.strings,o=!1;if(void 0===r)(o=!U(t=J(this,t,e,0))||t!==this._$AH&&t!==I)&&(this._$AH=t);else{let s,n,l=t;for(t=r[0],s=0;s<r.length-1;s++)(n=J(this,l[i+s],e,s))===I&&(n=this._$AH[s]),o||(o=!U(n)||n!==this._$AH[s]),n===F?t=F:t!==F&&(t+=(null!=n?n:"")+r[s+1]),this._$AH[s]=n}o&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}let Y=b?b.emptyScript:"";class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==F?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class te extends Q{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!=(i=J(this,t,e,0))?i:F)===I)return;let s=this._$AH,r=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==F&&(s===F||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!=(i=null==(e=this.options)?void 0:e.host)?i:this.element,t):this._$AH.handleEvent(t)}}class ti{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}let ts=A.litHtmlPolyfillSupport;null==ts||ts(K,G),(null!=(e=A.litHtmlVersions)?e:A.litHtmlVersions=[]).push("2.8.0");class tr extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return null!=(t=this.renderOptions).renderBefore||(t.renderBefore=e.firstChild),e}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,r;let o=null!=(s=null==i?void 0:i.renderBefore)?s:e,n=o._$litPart$;if(void 0===n){let t=null!=(r=null==i?void 0:i.renderBefore)?r:null;o._$litPart$=n=new G(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null==(t=this._$Do)||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this._$Do)||t.setConnected(!1)}render(){return I}}tr.finalized=!0,tr._$litElement$=!0,null==(i=globalThis.litElementHydrateSupport)||i.call(globalThis,{LitElement:tr});let to=globalThis.litElementPolyfillSupport;function tn(t){var e;return e={...t,state:!0},(t,i)=>void 0!==i?void t.constructor.createProperty(i,e):"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}}:{...t,finisher(i){i.createProperty(t.key,e)}}}null==to||to({LitElement:tr}),(null!=(s=globalThis.litElementVersions)?s:globalThis.litElementVersions=[]).push("3.3.3");let tl=d`
  ha-card {
    padding: 12px 16px 16px;
  }

  .card-header {
    font-size: 16px;
    font-weight: 500;
    color: var(--ha-card-header-color, var(--primary-text-color));
    padding: 0 0 8px;
    margin: 0;
  }

  .card-content {
    padding: 0;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 8px;
    overflow-y: auto;
  }

  .fav-button {
    background-color: var(
      --ha-card-background,
      var(--card-background-color, #fff)
    );
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    padding: 10px 8px;
    text-align: center;
    font-size: 13px;
    color: var(--primary-text-color);
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .fav-button:hover {
    background-color: var(--secondary-background-color, #f5f5f5);
  }

  .fav-button:active {
    transform: scale(0.97);
  }

  .fav-button.active {
    background-color: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    border-color: var(--primary-color, #03a9f4);
  }

  .loading {
    color: var(--secondary-text-color, #727272);
    font-size: 14px;
    text-align: center;
    padding: 16px 0;
  }

  .error {
    color: var(--error-color, #db4437);
    font-size: 14px;
  }
`;class ta extends tr{static{this.styles=tl}setConfig(t){if(!t.entity)throw Error("entity is required");this._config=t,this._favorites=null,this._fetchedEntity="",this._error=""}set hass(t){this._hass=t,!this._fetching&&this._config.entity&&this._fetchedEntity!==this._config.entity&&this._fetchFavorites()}async _fetchFavorites(){this._fetching=!0,this._error="";try{let t=await this._hass.connection.sendMessagePromise({type:"media_player/browse_media",entity_id:this._config.entity,media_content_type:"favorites",media_content_id:""}),e=[];for(let i of t.children||[])if("favorites_folder"===i.media_content_type)for(let t of(await this._hass.connection.sendMessagePromise({type:"media_player/browse_media",entity_id:this._config.entity,media_content_type:i.media_content_type,media_content_id:i.media_content_id})).children||[])t.title&&t.media_content_id&&e.push({title:t.title,content_id:t.media_content_id,content_type:t.media_content_type,thumbnail:t.thumbnail});e.sort((t,e)=>t.title.localeCompare(e.title)),this._favorites=e,this._fetchedEntity=this._config.entity}catch(t){this._error=t.message||"Failed to load favorites",this._favorites=[]}finally{this._fetching=!1}}_playFavorite(t){this._hass.callService("media_player","play_media",{entity_id:this._config.entity,media_content_type:"favorite_item_id",media_content_id:t.content_id})}_getActiveTitle(){let t=this._hass?.states[this._config.entity];return t?.attributes?.media_title||""}render(){if(this._error)return D`
        <ha-card>
          <div class="card-header">
            ${this._config.name||"Sonos Favorites"}
          </div>
          <div class="card-content">
            <p class="error">${this._error}</p>
          </div>
        </ha-card>
      `;if(!this._favorites)return D`
        <ha-card>
          <div class="card-header">
            ${this._config.name||"Sonos Favorites"}
          </div>
          <div class="card-content">
            <p class="loading">Loading favorites...</p>
          </div>
        </ha-card>
      `;let t=this._getActiveTitle();return D`
      <ha-card>
        <div class="card-header">
          ${this._config.name||"Sonos Favorites"}
        </div>
        <div class="card-content">
          ${0===this._favorites.length?D`<p class="loading">No favorites found</p>`:D`
                <div
                  class="button-grid"
                  style="${this._config.rows?`max-height: ${46*this._config.rows}px`:""}"
                >
                  ${this._favorites.map(e=>D`
                      <button
                        class="fav-button ${t===e.title?"active":""}"
                        @click="${()=>this._playFavorite(e)}"
                      >
                        ${e.title}
                      </button>
                    `)}
                </div>
              `}
        </div>
      </ha-card>
    `}static getConfigElement(){return document.createElement("sonos-favorites-card-editor")}static getStubConfig(){return{name:"Sonos Favorites",entity:""}}getCardSize(){return 3}constructor(...t){super(...t),this._favorites=null,this._error="",this._fetching=!1,this._fetchedEntity=""}}r([tn()],ta.prototype,"_config",void 0),r([tn()],ta.prototype,"_favorites",void 0),r([tn()],ta.prototype,"_error",void 0);let th=d`
  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }

  .row {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  label {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input,
  select {
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 8px;
    background-color: var(
      --ha-card-background,
      var(--card-background-color, #fff)
    );
    color: var(--primary-text-color);
  }
`;class td extends tr{static{this.styles=th}setConfig(t){this._config=t}set hass(t){this._hass=t,this._discoverPlayers()}_discoverPlayers(){let t=this._hass.entities||{},e=[];for(let[i,s]of Object.entries(t))if(i.startsWith("media_player.")&&"sonos"===s.platform){let t=this._hass.states[i];e.push({id:i,name:t?.attributes?.friendly_name||i.replace("media_player.","")})}e.sort((t,e)=>t.name.localeCompare(e.name)),this._mediaPlayers=e}render(){return D`
      <div class="form">
        <div class="row">
          <label>Name</label>
          <input
            .value="${this._config.name||""}"
            @input="${t=>this._valueChanged("name",t.target.value)}"
            placeholder="Sonos Favorites"
          />
        </div>
        <div class="row">
          <label>Entity</label>
          <select
            @change="${t=>this._valueChanged("entity",t.target.value)}"
          >
            <option value="" ?selected="${!this._config.entity}">
              Select a media player...
            </option>
            ${this._mediaPlayers.map(t=>D`
                <option
                  value="${t.id}"
                  ?selected="${this._config.entity===t.id}"
                >
                  ${t.name}
                </option>
              `)}
          </select>
        </div>
        <div class="row">
          <label>Visible Rows</label>
          <input
            type="number"
            min="1"
            .value="${String(this._config.rows||"")}"
            @input="${t=>{let e=t.target.value;this._valueChanged("rows",e?Number(e):void 0)}}"
            placeholder="All (no limit)"
          />
        </div>
      </div>
    `}_valueChanged(t,e){let i={...this._config};void 0===e||""===e?delete i[t]:i[t]=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0}))}constructor(...t){super(...t),this._mediaPlayers=[]}}r([tn()],td.prototype,"_config",void 0),r([tn()],td.prototype,"_hass",void 0),r([tn()],td.prototype,"_mediaPlayers",void 0),customElements.define("sonos-favorites-card",ta),customElements.define("sonos-favorites-card-editor",td),window.customCards=window.customCards||[],window.customCards.push({type:"sonos-favorites-card",name:"Sonos Favorites",description:"Play Sonos favorites with one tap"})})();
//# sourceMappingURL=index.js.map

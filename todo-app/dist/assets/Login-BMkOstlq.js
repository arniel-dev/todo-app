import{g as zr,j as m,P as k,u as xt,y as ce,a as Nn,r as ct}from"./index-CvE530lD.js";import{g as bt,s as lt,a as Wr,u as qr,b as Ln,B as Fn}from"./Button-C2oaMnNF.js";const Jt=(n,e,t)=>{if(n&&"reportValidity"in n){const r=bt(t,e);n.setCustomValidity(r&&r.message||""),n.reportValidity()}},Mn=(n,e)=>{for(const t in e.fields){const r=e.fields[t];r&&r.ref&&"reportValidity"in r.ref?Jt(r.ref,t,n):r&&r.refs&&r.refs.forEach(i=>Jt(i,t,n))}},Gr=(n,e)=>{e.shouldUseNativeValidation&&Mn(n,e);const t={};for(const r in n){const i=bt(e.fields,r),s=Object.assign(n[r]||{},{ref:i&&i.ref});if(Kr(e.names||Object.keys(n),r)){const a=Object.assign({},bt(t,r));lt(a,"root",s),lt(t,r,a)}else lt(t,r,s)}return t},Kr=(n,e)=>n.some(t=>t.match(`^${e}\\.\\d+`));function Un(n,e,t){return e===void 0&&(e={}),t===void 0&&(t={}),function(r,i,s){try{return Promise.resolve(function(a,c){try{var o=(e.context,Promise.resolve(n[t.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:i}))).then(function(l){return s.shouldUseNativeValidation&&Mn({},s),{values:t.raw?Object.assign({},r):l,errors:{}}}))}catch(l){return c(l)}return o&&o.then?o.then(void 0,c):o}(0,function(a){if(!a.inner)throw a;return{values:{},errors:Gr((c=a,o=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(c.inner||[]).reduce(function(l,u){if(l[u.path]||(l[u.path]={message:u.message,type:u.type}),o){var d=l[u.path].types,f=d&&d[u.type];l[u.path]=Wr(u.path,o,l,u.type,f?[].concat(f,u.message):u.message)}return l},{})),s)};var c,o}))}catch(a){return Promise.reject(a)}}}var ut,Yt;function Jr(){if(Yt)return ut;Yt=1;function n(h){this._maxSize=h,this.clear()}n.prototype.clear=function(){this._size=0,this._values=Object.create(null)},n.prototype.get=function(h){return this._values[h]},n.prototype.set=function(h,_){return this._size>=this._maxSize&&this.clear(),h in this._values||this._size++,this._values[h]=_};var e=/[^.^\]^[]+|(?=\[\]|\.\.)/g,t=/^\d+$/,r=/^\d/,i=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,s=/^\s*(['"]?)(.*?)(\1)\s*$/,a=512,c=new n(a),o=new n(a),l=new n(a);ut={Cache:n,split:d,normalizePath:u,setter:function(h){var _=u(h);return o.get(h)||o.set(h,function(R,b){for(var E=0,P=_.length,L=R;E<P-1;){var x=_[E];if(x==="__proto__"||x==="constructor"||x==="prototype")return R;L=L[_[E++]]}L[_[E]]=b})},getter:function(h,_){var I=u(h);return l.get(h)||l.set(h,function(b){for(var E=0,P=I.length;E<P;)if(b!=null||!_)b=b[I[E++]];else return;return b})},join:function(h){return h.reduce(function(_,I){return _+(g(I)||t.test(I)?"["+I+"]":(_?".":"")+I)},"")},forEach:function(h,_,I){f(Array.isArray(h)?h:d(h),_,I)}};function u(h){return c.get(h)||c.set(h,d(h).map(function(_){return _.replace(s,"$2")}))}function d(h){return h.match(e)||[""]}function f(h,_,I){var R=h.length,b,E,P,L;for(E=0;E<R;E++)b=h[E],b&&(S(b)&&(b='"'+b+'"'),L=g(b),P=!L&&/^\d+$/.test(b),_.call(I,b,L,P,E,h))}function g(h){return typeof h=="string"&&h&&["'",'"'].indexOf(h.charAt(0))!==-1}function v(h){return h.match(r)&&!h.match(t)}function w(h){return i.test(h)}function S(h){return!g(h)&&(v(h)||w(h))}return ut}var he=Jr(),dt,Xt;function Yr(){if(Xt)return dt;Xt=1;const n=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,e=u=>u.match(n)||[],t=u=>u[0].toUpperCase()+u.slice(1),r=(u,d)=>e(u).join(d).toLowerCase(),i=u=>e(u).reduce((d,f)=>`${d}${d?f[0].toUpperCase()+f.slice(1).toLowerCase():f.toLowerCase()}`,"");return dt={words:e,upperFirst:t,camelCase:i,pascalCase:u=>t(i(u)),snakeCase:u=>r(u,"_"),kebabCase:u=>r(u,"-"),sentenceCase:u=>t(r(u," ")),titleCase:u=>e(u).map(t).join(" ")},dt}var ht=Yr(),Ve={exports:{}},Zt;function Xr(){if(Zt)return Ve.exports;Zt=1,Ve.exports=function(i){return n(e(i),i)},Ve.exports.array=n;function n(i,s){var a=i.length,c=new Array(a),o={},l=a,u=t(s),d=r(i);for(s.forEach(function(g){if(!d.has(g[0])||!d.has(g[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});l--;)o[l]||f(i[l],l,new Set);return c;function f(g,v,w){if(w.has(g)){var S;try{S=", node was:"+JSON.stringify(g)}catch{S=""}throw new Error("Cyclic dependency"+S)}if(!d.has(g))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(g));if(!o[v]){o[v]=!0;var h=u.get(g)||new Set;if(h=Array.from(h),v=h.length){w.add(g);do{var _=h[--v];f(_,d.get(_),w)}while(v);w.delete(g)}c[--a]=g}}}function e(i){for(var s=new Set,a=0,c=i.length;a<c;a++){var o=i[a];s.add(o[0]),s.add(o[1])}return Array.from(s)}function t(i){for(var s=new Map,a=0,c=i.length;a<c;a++){var o=i[a];s.has(o[0])||s.set(o[0],new Set),s.has(o[1])||s.set(o[1],new Set),s.get(o[0]).add(o[1])}return s}function r(i){for(var s=new Map,a=0,c=i.length;a<c;a++)s.set(i[a],a);return s}return Ve.exports}var Zr=Xr();const Qr=zr(Zr),ei=Object.prototype.toString,ti=Error.prototype.toString,ni=RegExp.prototype.toString,ri=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",ii=/^Symbol\((.*)\)(.*)$/;function si(n){return n!=+n?"NaN":n===0&&1/n<0?"-0":""+n}function Qt(n,e=!1){if(n==null||n===!0||n===!1)return""+n;const t=typeof n;if(t==="number")return si(n);if(t==="string")return e?`"${n}"`:n;if(t==="function")return"[Function "+(n.name||"anonymous")+"]";if(t==="symbol")return ri.call(n).replace(ii,"Symbol($1)");const r=ei.call(n).slice(8,-1);return r==="Date"?isNaN(n.getTime())?""+n:n.toISOString(n):r==="Error"||n instanceof Error?"["+ti.call(n)+"]":r==="RegExp"?ni.call(n):null}function ee(n,e){let t=Qt(n,e);return t!==null?t:JSON.stringify(n,function(r,i){let s=Qt(this[r],e);return s!==null?s:i},2)}function $n(n){return n==null?[]:[].concat(n)}let jn,Vn,Bn,ai=/\$\{\s*(\w+)\s*\}/g;jn=Symbol.toStringTag;class en{constructor(e,t,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[jn]="Error",this.name="ValidationError",this.value=t,this.path=r,this.type=i,this.errors=[],this.inner=[],$n(e).forEach(s=>{if(O.isError(s)){this.errors.push(...s.errors);const a=s.inner.length?s.inner:[s];this.inner.push(...a)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Vn=Symbol.hasInstance;Bn=Symbol.toStringTag;class O extends Error{static formatError(e,t){const r=t.label||t.path||"this";return t=Object.assign({},t,{path:r,originalPath:t.path}),typeof e=="string"?e.replace(ai,(i,s)=>ee(t[s])):typeof e=="function"?e(t):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,t,r,i,s){const a=new en(e,t,r,i);if(s)return a;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Bn]="Error",this.name=a.name,this.message=a.message,this.type=a.type,this.value=a.value,this.path=a.path,this.errors=a.errors,this.inner=a.inner,Error.captureStackTrace&&Error.captureStackTrace(this,O)}static[Vn](e){return en[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let F={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:n,type:e,value:t,originalValue:r})=>{const i=r!=null&&r!==t?` (cast from the value \`${ee(r,!0)}\`).`:".";return e!=="mixed"?`${n} must be a \`${e}\` type, but the final value was: \`${ee(t,!0)}\``+i:`${n} must match the configured type. The validated value was: \`${ee(t,!0)}\``+i}},C={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},oi={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},wt={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},ci={isValue:"${path} field must be ${value}"},ze={noUnknown:"${path} field has unspecified keys: ${unknown}",exact:"${path} object contains unknown properties: ${properties}"},li={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},ui={notType:n=>{const{path:e,value:t,spec:r}=n,i=r.types.length;if(Array.isArray(t)){if(t.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${t.length} for value: \`${ee(t,!0)}\``;if(t.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${t.length} for value: \`${ee(t,!0)}\``}return O.formatError(F.notType,n)}};Object.assign(Object.create(null),{mixed:F,string:C,number:oi,date:wt,object:ze,array:li,boolean:ci,tuple:ui});const Dt=n=>n&&n.__isYupSchema__;class Ye{static fromOptions(e,t){if(!t.then&&!t.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=t,a=typeof r=="function"?r:(...c)=>c.every(o=>o===r);return new Ye(e,(c,o)=>{var l;let u=a(...c)?i:s;return(l=u==null?void 0:u(o))!=null?l:o})}constructor(e,t){this.fn=void 0,this.refs=e,this.refs=e,this.fn=t}resolve(e,t){let r=this.refs.map(s=>s.getValue(t==null?void 0:t.value,t==null?void 0:t.parent,t==null?void 0:t.context)),i=this.fn(r,e,t);if(i===void 0||i===e)return e;if(!Dt(i))throw new TypeError("conditions must return a schema object");return i.resolve(t)}}const Be={context:"$",value:"."};function di(n,e){return new re(n,e)}class re{constructor(e,t={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Be.context,this.isValue=this.key[0]===Be.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Be.context:this.isValue?Be.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&he.getter(this.path,!0),this.map=t.map}getValue(e,t,r){let i=this.isContext?r:this.isValue?e:t;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,t){return this.getValue(e,t==null?void 0:t.parent,t==null?void 0:t.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}re.prototype.__isYupRef=!0;const le=n=>n==null;function ge(n){function e({value:t,path:r="",options:i,originalValue:s,schema:a},c,o){const{name:l,test:u,params:d,message:f,skipAbsent:g}=n;let{parent:v,context:w,abortEarly:S=a.spec.abortEarly,disableStackTrace:h=a.spec.disableStackTrace}=i;function _(T){return re.isRef(T)?T.getValue(t,v,w):T}function I(T={}){const ae=Object.assign({value:t,originalValue:s,label:a.spec.label,path:T.path||r,spec:a.spec,disableStackTrace:T.disableStackTrace||h},d,T.params);for(const Kt of Object.keys(ae))ae[Kt]=_(ae[Kt]);const Gt=new O(O.formatError(T.message||f,ae),t,ae.path,T.type||l,ae.disableStackTrace);return Gt.params=ae,Gt}const R=S?c:o;let b={path:r,parent:v,type:l,from:i.from,createError:I,resolve:_,options:i,originalValue:s,schema:a};const E=T=>{O.isError(T)?R(T):T?o(null):R(I())},P=T=>{O.isError(T)?R(T):c(T)};if(g&&le(t))return E(!0);let x;try{var je;if(x=u.call(b,t,b),typeof((je=x)==null?void 0:je.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${b.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(x).then(E,P)}}catch(T){P(T);return}E(x)}return e.OPTIONS=n,e}function hi(n,e,t,r=t){let i,s,a;return e?(he.forEach(e,(c,o,l)=>{let u=o?c.slice(1,c.length-1):c;n=n.resolve({context:r,parent:i,value:t});let d=n.type==="tuple",f=l?parseInt(u,10):0;if(n.innerType||d){if(d&&!l)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${a}" must contain an index to the tuple element, e.g. "${a}[0]"`);if(t&&f>=t.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${e}. because there is no value at that index. `);i=t,t=t&&t[f],n=d?n.spec.types[f]:n.innerType}if(!l){if(!n.fields||!n.fields[u])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${a} which is a type: "${n.type}")`);i=t,t=t&&t[u],n=n.fields[u]}s=u,a=o?"["+c+"]":"."+c}),{schema:n,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:n}}class Xe extends Set{describe(){const e=[];for(const t of this.values())e.push(re.isRef(t)?t.describe():t);return e}resolveAll(e){let t=[];for(const r of this.values())t.push(e(r));return t}clone(){return new Xe(this.values())}merge(e,t){const r=this.clone();return e.forEach(i=>r.add(i)),t.forEach(i=>r.delete(i)),r}}function _e(n,e=new Map){if(Dt(n)||!n||typeof n!="object")return n;if(e.has(n))return e.get(n);let t;if(n instanceof Date)t=new Date(n.getTime()),e.set(n,t);else if(n instanceof RegExp)t=new RegExp(n),e.set(n,t);else if(Array.isArray(n)){t=new Array(n.length),e.set(n,t);for(let r=0;r<n.length;r++)t[r]=_e(n[r],e)}else if(n instanceof Map){t=new Map,e.set(n,t);for(const[r,i]of n.entries())t.set(r,_e(i,e))}else if(n instanceof Set){t=new Set,e.set(n,t);for(const r of n)t.add(_e(r,e))}else if(n instanceof Object){t={},e.set(n,t);for(const[r,i]of Object.entries(n))t[r]=_e(i,e)}else throw Error(`Unable to clone ${n}`);return t}class ${constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Xe,this._blacklist=new Xe,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(F.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(t=>{t.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const t=Object.create(Object.getPrototypeOf(this));return t.type=this.type,t._typeCheck=this._typeCheck,t._whitelist=this._whitelist.clone(),t._blacklist=this._blacklist.clone(),t.internalTests=Object.assign({},this.internalTests),t.exclusiveTests=Object.assign({},this.exclusiveTests),t.deps=[...this.deps],t.conditions=[...this.conditions],t.tests=[...this.tests],t.transforms=[...this.transforms],t.spec=_e(Object.assign({},this.spec,e)),t}label(e){let t=this.clone();return t.spec.label=e,t}meta(...e){if(e.length===0)return this.spec.meta;let t=this.clone();return t.spec.meta=Object.assign(t.spec.meta||{},e[0]),t}withMutation(e){let t=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=t,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let t=this,r=e.clone();const i=Object.assign({},t.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},t.internalTests,r.internalTests),r._whitelist=t._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=t._blacklist.merge(e._blacklist,e._whitelist),r.tests=t.tests,r.exclusiveTests=t.exclusiveTests,r.withMutation(s=>{e.tests.forEach(a=>{s.test(a.OPTIONS)})}),r.transforms=[...t.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let t=this;if(t.conditions.length){let r=t.conditions;t=t.clone(),t.conditions=[],t=r.reduce((i,s)=>s.resolve(i,e),t),t=t.resolve(e)}return t}resolveOptions(e){var t,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(t=e.strict)!=null?t:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,t={}){let r=this.resolve(Object.assign({value:e},t)),i=t.assert==="ignore-optionality",s=r._cast(e,t);if(t.assert!==!1&&!r.isType(s)){if(i&&le(s))return s;let a=ee(e),c=ee(s);throw new TypeError(`The value of ${t.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${a} 
`+(c!==a?`result of cast: ${c}`:""))}return s}_cast(e,t){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(t)),r}_validate(e,t={},r,i){let{path:s,originalValue:a=e,strict:c=this.spec.strict}=t,o=e;c||(o=this._cast(o,Object.assign({assert:!1},t)));let l=[];for(let u of Object.values(this.internalTests))u&&l.push(u);this.runTests({path:s,value:o,originalValue:a,options:t,tests:l},r,u=>{if(u.length)return i(u,o);this.runTests({path:s,value:o,originalValue:a,options:t,tests:this.tests},r,i)})}runTests(e,t,r){let i=!1,{tests:s,value:a,originalValue:c,path:o,options:l}=e,u=w=>{i||(i=!0,t(w,a))},d=w=>{i||(i=!0,r(w,a))},f=s.length,g=[];if(!f)return d([]);let v={value:a,originalValue:c,path:o,options:l,schema:this};for(let w=0;w<s.length;w++){const S=s[w];S(v,u,function(_){_&&(Array.isArray(_)?g.push(..._):g.push(_)),--f<=0&&d(g)})}}asNestedTest({key:e,index:t,parent:r,parentPath:i,originalParent:s,options:a}){const c=e??t;if(c==null)throw TypeError("Must include `key` or `index` for nested validations");const o=typeof c=="number";let l=r[c];const u=Object.assign({},a,{strict:!0,parent:r,value:l,originalValue:s[c],key:void 0,[o?"index":"key"]:c,path:o||c.includes(".")?`${i||""}[${o?c:`"${c}"`}]`:(i?`${i}.`:"")+e});return(d,f,g)=>this.resolve(u)._validate(l,u,f,g)}validate(e,t){var r;let i=this.resolve(Object.assign({},t,{value:e})),s=(r=t==null?void 0:t.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((a,c)=>i._validate(e,t,(o,l)=>{O.isError(o)&&(o.value=l),c(o)},(o,l)=>{o.length?c(new O(o,l,void 0,void 0,s)):a(l)}))}validateSync(e,t){var r;let i=this.resolve(Object.assign({},t,{value:e})),s,a=(r=t==null?void 0:t.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},t,{sync:!0}),(c,o)=>{throw O.isError(c)&&(c.value=o),c},(c,o)=>{if(c.length)throw new O(c,e,void 0,void 0,a);s=o}),s}isValid(e,t){return this.validate(e,t).then(()=>!0,r=>{if(O.isError(r))return!1;throw r})}isValidSync(e,t){try{return this.validateSync(e,t),!0}catch(r){if(O.isError(r))return!1;throw r}}_getDefault(e){let t=this.spec.default;return t==null?t:typeof t=="function"?t.call(this,e):_e(t)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,t){const r=this.clone({nullable:e});return r.internalTests.nullable=ge({message:t,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,t){const r=this.clone({optional:e});return r.internalTests.optionality=ge({message:t,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=F.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=F.notNull){return this.nullability(!1,e)}required(e=F.required){return this.clone().withMutation(t=>t.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let t=this.clone();return t.transforms.push(e),t}test(...e){let t;if(e.length===1?typeof e[0]=="function"?t={test:e[0]}:t=e[0]:e.length===2?t={name:e[0],test:e[1]}:t={name:e[0],message:e[1],test:e[2]},t.message===void 0&&(t.message=F.default),typeof t.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=ge(t),s=t.exclusive||t.name&&r.exclusiveTests[t.name]===!0;if(t.exclusive&&!t.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return t.name&&(r.exclusiveTests[t.name]=!!t.exclusive),r.tests=r.tests.filter(a=>!(a.OPTIONS.name===t.name&&(s||a.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,t){!Array.isArray(e)&&typeof e!="string"&&(t=e,e=".");let r=this.clone(),i=$n(e).map(s=>new re(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof t=="function"?new Ye(i,t):Ye.fromOptions(i,t)),r}typeError(e){let t=this.clone();return t.internalTests.typeError=ge({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),t}oneOf(e,t=F.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=ge({message:t,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,a=s.resolveAll(this.resolve);return a.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:a}})}}),r}notOneOf(e,t=F.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=ge({message:t,name:"notOneOf",test(i){let s=this.schema._blacklist,a=s.resolveAll(this.resolve);return a.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:a}}):!0}}),r}strip(e=!0){let t=this.clone();return t.spec.strip=e,t}describe(e){const t=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:a}=t.spec;return{meta:i,label:r,optional:s,nullable:a,default:t.getDefault(e),type:t.type,oneOf:t._whitelist.describe(),notOneOf:t._blacklist.describe(),tests:t.tests.map(o=>({name:o.OPTIONS.name,params:o.OPTIONS.params})).filter((o,l,u)=>u.findIndex(d=>d.name===o.name)===l)}}}$.prototype.__isYupSchema__=!0;for(const n of["validate","validateSync"])$.prototype[`${n}At`]=function(e,t,r={}){const{parent:i,parentPath:s,schema:a}=hi(this,e,t,r.context);return a[n](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const n of["equals","is"])$.prototype[n]=$.prototype.oneOf;for(const n of["not","nope"])$.prototype[n]=$.prototype.notOneOf;const fi=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function pi(n){const e=Et(n);if(!e)return Date.parse?Date.parse(n):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let t=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(t=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(t=0-t)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+t,e.second,e.millisecond)}function Et(n){var e,t;const r=fi.exec(n);return r?{year:j(r[1]),month:j(r[2],1)-1,day:j(r[3],1),hour:j(r[4]),minute:j(r[5]),second:j(r[6]),millisecond:r[7]?j(r[7].substring(0,3)):0,precision:(e=(t=r[7])==null?void 0:t.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:j(r[10]),minuteOffset:j(r[11])}:null}function j(n,e=0){return Number(n)||e}let mi=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,gi=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,_i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,yi="^\\d{4}-\\d{2}-\\d{2}",vi="\\d{2}:\\d{2}:\\d{2}",bi="(([+-]\\d{2}(:?\\d{2})?)|Z)",wi=new RegExp(`${yi}T${vi}(\\.\\d+)?${bi}$`),Ei=n=>le(n)||n===n.trim(),Ii={}.toString();function ue(){return new Hn}class Hn extends ${constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,t,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===Ii?e:i})})}required(e){return super.required(e).withMutation(t=>t.test({message:e||F.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(t=>t.OPTIONS.name!=="required"),e))}length(e,t=C.length){return this.test({message:t,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,t=C.min){return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,t=C.max){return this.test({name:"max",exclusive:!0,message:t,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,t){let r=!1,i,s;return t&&(typeof t=="object"?{excludeEmptyString:r=!1,message:i,name:s}=t:i=t),this.test({name:s||"matches",message:i||C.matches,params:{regex:e},skipAbsent:!0,test:a=>a===""&&r||a.search(e)!==-1})}email(e=C.email){return this.matches(mi,{name:"email",message:e,excludeEmptyString:!0})}url(e=C.url){return this.matches(gi,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=C.uuid){return this.matches(_i,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let t="",r,i;return e&&(typeof e=="object"?{message:t="",allowOffset:r=!1,precision:i=void 0}=e:t=e),this.matches(wi,{name:"datetime",message:t||C.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:t||C.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const a=Et(s);return a?!!a.z:!1}}).test({name:"datetime_precision",message:t||C.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const a=Et(s);return a?a.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=C.trim){return this.transform(t=>t!=null?t.trim():t).test({message:e,name:"trim",test:Ei})}lowercase(e=C.lowercase){return this.transform(t=>le(t)?t:t.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>le(t)||t===t.toLowerCase()})}uppercase(e=C.uppercase){return this.transform(t=>le(t)?t:t.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:t=>le(t)||t===t.toUpperCase()})}}ue.prototype=Hn.prototype;let Ti=new Date(""),Si=n=>Object.prototype.toString.call(n)==="[object Date]";class Nt extends ${constructor(){super({type:"date",check(e){return Si(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,t,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=pi(e),isNaN(e)?Nt.INVALID_DATE:new Date(e)))})}prepareParam(e,t){let r;if(re.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${t}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,t=wt.min){let r=this.prepareParam(e,"min");return this.test({message:t,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,t=wt.max){let r=this.prepareParam(e,"max");return this.test({message:t,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Nt.INVALID_DATE=Ti;function ki(n,e=[]){let t=[],r=new Set,i=new Set(e.map(([a,c])=>`${a}-${c}`));function s(a,c){let o=he.split(a)[0];r.add(o),i.has(`${c}-${o}`)||t.push([c,o])}for(const a of Object.keys(n)){let c=n[a];r.add(a),re.isRef(c)&&c.isSibling?s(c.path,a):Dt(c)&&"deps"in c&&c.deps.forEach(o=>s(o,a))}return Qr.array(Array.from(r),t).reverse()}function tn(n,e){let t=1/0;return n.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return t=i,!0}),t}function zn(n){return(e,t)=>tn(n,e)-tn(n,t)}const Ai=(n,e,t)=>{if(typeof n!="string")return n;let r=n;try{r=JSON.parse(n)}catch{}return t.isType(r)?r:n};function We(n){if("fields"in n){const e={};for(const[t,r]of Object.entries(n.fields))e[t]=We(r);return n.setFields(e)}if(n.type==="array"){const e=n.optional();return e.innerType&&(e.innerType=We(e.innerType)),e}return n.type==="tuple"?n.optional().clone({types:n.spec.types.map(We)}):"optional"in n?n.optional():n}const Ci=(n,e)=>{const t=[...he.normalizePath(e)];if(t.length===1)return t[0]in n;let r=t.pop(),i=he.getter(he.join(t),!0)(n);return!!(i&&r in i)};let nn=n=>Object.prototype.toString.call(n)==="[object Object]";function rn(n,e){let t=Object.keys(n.fields);return Object.keys(e).filter(r=>t.indexOf(r)===-1)}const Oi=zn([]);function Lt(n){return new Wn(n)}class Wn extends ${constructor(e){super({type:"object",check(t){return nn(t)||typeof t=="function"}}),this.fields=Object.create(null),this._sortErrors=Oi,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,t={}){var r;let i=super._cast(e,t);if(i===void 0)return this.getDefault(t);if(!this._typeCheck(i))return i;let s=this.fields,a=(r=t.stripUnknown)!=null?r:this.spec.noUnknown,c=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),o={},l=Object.assign({},t,{parent:o,__validating:t.__validating||!1}),u=!1;for(const d of c){let f=s[d],g=d in i;if(f){let v,w=i[d];l.path=(t.path?`${t.path}.`:"")+d,f=f.resolve({value:w,context:t.context,parent:o});let S=f instanceof $?f.spec:void 0,h=S==null?void 0:S.strict;if(S!=null&&S.strip){u=u||d in i;continue}v=!t.__validating||!h?f.cast(i[d],l):i[d],v!==void 0&&(o[d]=v)}else g&&!a&&(o[d]=i[d]);(g!==d in o||o[d]!==i[d])&&(u=!0)}return u?o:i}_validate(e,t={},r,i){let{from:s=[],originalValue:a=e,recursive:c=this.spec.recursive}=t;t.from=[{schema:this,value:a},...s],t.__validating=!0,t.originalValue=a,super._validate(e,t,r,(o,l)=>{if(!c||!nn(l)){i(o,l);return}a=a||l;let u=[];for(let d of this._nodes){let f=this.fields[d];!f||re.isRef(f)||u.push(f.asNestedTest({options:t,key:d,parent:l,parentPath:t.path,originalParent:a}))}this.runTests({tests:u,value:l,originalValue:a,options:t},r,d=>{i(d.sort(this._sortErrors).concat(o),l)})})}clone(e){const t=super.clone(e);return t.fields=Object.assign({},this.fields),t._nodes=this._nodes,t._excludedEdges=this._excludedEdges,t._sortErrors=this._sortErrors,t}concat(e){let t=super.concat(e),r=t.fields;for(let[i,s]of Object.entries(this.fields)){const a=r[i];r[i]=a===void 0?s:a}return t.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let t={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[r]})),t[r]=s&&"getDefault"in s?s.getDefault(a):void 0}),t}setFields(e,t){let r=this.clone();return r.fields=e,r._nodes=ki(e,t),r._sortErrors=zn(Object.keys(e)),t&&(r._excludedEdges=t),r}shape(e,t=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return t.length&&(Array.isArray(t[0])||(t=[t]),i=[...r._excludedEdges,...t]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[t,r]of Object.entries(this.fields))e[t]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return We(this)}pick(e){const t={};for(const r of e)this.fields[r]&&(t[r]=this.fields[r]);return this.setFields(t,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const t=[];for(const r of Object.keys(this.fields))e.includes(r)||t.push(r);return this.pick(t)}from(e,t,r){let i=he.getter(e,!0);return this.transform(s=>{if(!s)return s;let a=s;return Ci(s,e)&&(a=Object.assign({},s),r||delete a[e],a[t]=i(s)),a})}json(){return this.transform(Ai)}exact(e){return this.test({name:"exact",exclusive:!0,message:e||ze.exact,test(t){if(t==null)return!0;const r=rn(this.schema,t);return r.length===0||this.createError({params:{properties:r.join(", ")}})}})}stripUnknown(){return this.clone({noUnknown:!0})}noUnknown(e=!0,t=ze.noUnknown){typeof e!="boolean"&&(t=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:t,test(i){if(i==null)return!0;const s=rn(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,t=ze.noUnknown){return this.noUnknown(!e,t)}transformKeys(e){return this.transform(t=>{if(!t)return t;const r={};for(const i of Object.keys(t))r[e(i)]=t[i];return r})}camelCase(){return this.transformKeys(ht.camelCase)}snakeCase(){return this.transformKeys(ht.snakeCase)}constantCase(){return this.transformKeys(e=>ht.snakeCase(e).toUpperCase())}describe(e){const t=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,a]of Object.entries(t.fields)){var i;let c=e;(i=c)!=null&&i.value&&(c=Object.assign({},c,{parent:c.value,value:c.value[s]})),r.fields[s]=a.describe(c)}return r}}Lt.prototype=Wn.prototype;var sn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ri=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],c=n[t++],o=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(o&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,c=a?n[i+1]:0,o=i+2<n.length,l=o?n[i+2]:0,u=s>>2,d=(s&3)<<4|c>>4;let f=(c&15)<<2|l>>6,g=l&63;o||(g=64,a||(f=64)),r.push(t[u],t[d],t[f],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qn(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ri(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||l==null||d==null)throw new Pi;const f=s<<2|c>>4;if(r.push(f),l!==64){const g=c<<4&240|l>>2;if(r.push(g),d!==64){const v=l<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xi=function(n){const e=qn(n);return Gn.encodeByteArray(e,!0)},Kn=function(n){return xi(n).replace(/\./g,"")},Jn=function(n){try{return Gn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=()=>Di().__FIREBASE_DEFAULTS__,Li=()=>{if(typeof process>"u"||typeof sn>"u")return;const n=sn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jn(n[1]);return e&&JSON.parse(e)},Ft=()=>{try{return Ni()||Li()||Fi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mi=n=>{var e,t;return(t=(e=Ft())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Yn=()=>{var n;return(n=Ft())===null||n===void 0?void 0:n.config},Xn=n=>{var e;return(e=Ft())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $i(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(A())}function ji(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vi(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hi(){const n=A();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function zi(){try{return typeof indexedDB=="object"}catch{return!1}}function Wi(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="FirebaseError";class ie extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qi,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,De.prototype.create)}}class De{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Gi(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new ie(i,c,r)}}function Gi(n,e){return n.replace(Ki,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ki=/\{\$([^}]+)}/g;function Ji(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ze(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(an(s)&&an(a)){if(!Ze(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function an(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ke(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ae(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Yi(n,e){const t=new Xi(n,e);return t.subscribe.bind(t)}class Xi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zi(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ft),i.error===void 0&&(i.error=ft),i.complete===void 0&&(i.complete=ft);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zi(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ft(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n){return n&&n._delegate?n._delegate:n}class Ie{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ui;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ts(e))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oe){return this.instances.has(e)}getOptions(e=oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:es(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oe){return this.component?this.component.multipleInstances?e:oe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function es(n){return n===oe?void 0:n}function ts(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(y||(y={}));const rs={debug:y.DEBUG,verbose:y.VERBOSE,info:y.INFO,warn:y.WARN,error:y.ERROR,silent:y.SILENT},is=y.INFO,ss={[y.DEBUG]:"log",[y.VERBOSE]:"log",[y.INFO]:"info",[y.WARN]:"warn",[y.ERROR]:"error"},as=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ss[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zn{constructor(e){this.name=e,this._logLevel=is,this._logHandler=as,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,y.DEBUG,...e),this._logHandler(this,y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,y.VERBOSE,...e),this._logHandler(this,y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,y.INFO,...e),this._logHandler(this,y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,y.WARN,...e),this._logHandler(this,y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,y.ERROR,...e),this._logHandler(this,y.ERROR,...e)}}const os=(n,e)=>e.some(t=>n instanceof t);let on,cn;function cs(){return on||(on=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ls(){return cn||(cn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qn=new WeakMap,It=new WeakMap,er=new WeakMap,pt=new WeakMap,Mt=new WeakMap;function us(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(te(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Qn.set(t,n)}).catch(()=>{}),Mt.set(e,n),e}function ds(n){if(It.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});It.set(n,e)}let Tt={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return It.get(n);if(e==="objectStoreNames")return n.objectStoreNames||er.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return te(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hs(n){Tt=n(Tt)}function fs(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(mt(this),e,...t);return er.set(r,e.sort?e.sort():[e]),te(r)}:ls().includes(n)?function(...e){return n.apply(mt(this),e),te(Qn.get(this))}:function(...e){return te(n.apply(mt(this),e))}}function ps(n){return typeof n=="function"?fs(n):(n instanceof IDBTransaction&&ds(n),os(n,cs())?new Proxy(n,Tt):n)}function te(n){if(n instanceof IDBRequest)return us(n);if(pt.has(n))return pt.get(n);const e=ps(n);return e!==n&&(pt.set(n,e),Mt.set(e,n)),e}const mt=n=>Mt.get(n);function ms(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),c=te(a);return r&&a.addEventListener("upgradeneeded",o=>{r(te(a.result),o.oldVersion,o.newVersion,te(a.transaction),o)}),t&&a.addEventListener("blocked",o=>t(o.oldVersion,o.newVersion,o)),c.then(o=>{s&&o.addEventListener("close",()=>s()),i&&o.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const gs=["get","getKey","getAll","getAllKeys","count"],_s=["put","add","delete","clear"],gt=new Map;function ln(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gt.get(e))return gt.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=_s.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gs.includes(t)))return;const s=async function(a,...c){const o=this.transaction(a,i?"readwrite":"readonly");let l=o.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[t](...c),i&&o.done]))[0]};return gt.set(e,s),s}hs(n=>({...n,get:(e,t,r)=>ln(e,t)||n.get(e,t,r),has:(e,t)=>!!ln(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vs(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vs(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const St="@firebase/app",un="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=new Zn("@firebase/app"),bs="@firebase/app-compat",ws="@firebase/analytics-compat",Es="@firebase/analytics",Is="@firebase/app-check-compat",Ts="@firebase/app-check",Ss="@firebase/auth",ks="@firebase/auth-compat",As="@firebase/database",Cs="@firebase/data-connect",Os="@firebase/database-compat",Rs="@firebase/functions",Ps="@firebase/functions-compat",xs="@firebase/installations",Ds="@firebase/installations-compat",Ns="@firebase/messaging",Ls="@firebase/messaging-compat",Fs="@firebase/performance",Ms="@firebase/performance-compat",Us="@firebase/remote-config",$s="@firebase/remote-config-compat",js="@firebase/storage",Vs="@firebase/storage-compat",Bs="@firebase/firestore",Hs="@firebase/vertexai",zs="@firebase/firestore-compat",Ws="firebase",qs="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="[DEFAULT]",Gs={[St]:"fire-core",[bs]:"fire-core-compat",[Es]:"fire-analytics",[ws]:"fire-analytics-compat",[Ts]:"fire-app-check",[Is]:"fire-app-check-compat",[Ss]:"fire-auth",[ks]:"fire-auth-compat",[As]:"fire-rtdb",[Cs]:"fire-data-connect",[Os]:"fire-rtdb-compat",[Rs]:"fire-fn",[Ps]:"fire-fn-compat",[xs]:"fire-iid",[Ds]:"fire-iid-compat",[Ns]:"fire-fcm",[Ls]:"fire-fcm-compat",[Fs]:"fire-perf",[Ms]:"fire-perf-compat",[Us]:"fire-rc",[$s]:"fire-rc-compat",[js]:"fire-gcs",[Vs]:"fire-gcs-compat",[Bs]:"fire-fst",[zs]:"fire-fst-compat",[Hs]:"fire-vertex","fire-js":"fire-js",[Ws]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new Map,Ks=new Map,At=new Map;function dn(n,e){try{n.container.addComponent(e)}catch(t){W.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Re(n){const e=n.name;if(At.has(e))return W.debug(`There were multiple attempts to register component ${e}.`),!1;At.set(e,n);for(const t of Qe.values())dn(t,n);for(const t of Ks.values())dn(t,n);return!0}function tr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function D(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new De("app","Firebase",Js);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=qs;function nr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ne.create("bad-app-name",{appName:String(i)});if(t||(t=Yn()),!t)throw ne.create("no-options");const s=Qe.get(i);if(s){if(Ze(t,s.options)&&Ze(r,s.config))return s;throw ne.create("duplicate-app",{appName:i})}const a=new ns(i);for(const o of At.values())a.addComponent(o);const c=new Ys(t,r,a);return Qe.set(i,c),c}function Xs(n=kt){const e=Qe.get(n);if(!e&&n===kt&&Yn())return nr();if(!e)throw ne.create("no-app",{appName:n});return e}function ve(n,e,t){var r;let i=(r=Gs[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),W.warn(c.join(" "));return}Re(new Ie(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="firebase-heartbeat-database",Qs=1,Pe="firebase-heartbeat-store";let _t=null;function rr(){return _t||(_t=ms(Zs,Qs,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pe)}catch(t){console.warn(t)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),_t}async function ea(n){try{const t=(await rr()).transaction(Pe),r=await t.objectStore(Pe).get(ir(n));return await t.done,r}catch(e){if(e instanceof ie)W.warn(e.message);else{const t=ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});W.warn(t.message)}}}async function hn(n,e){try{const r=(await rr()).transaction(Pe,"readwrite");await r.objectStore(Pe).put(e,ir(n)),await r.done}catch(t){if(t instanceof ie)W.warn(t.message);else{const r=ne.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});W.warn(r.message)}}}function ir(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=1024,na=30;class ra{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sa(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fn();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>na){const a=aa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){W.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=fn(),{heartbeatsToSend:r,unsentEntries:i}=ia(this._heartbeatsCache.heartbeats),s=Kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return W.warn(t),""}}}function fn(){return new Date().toISOString().substring(0,10)}function ia(n,e=ta){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),pn(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),pn(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zi()?Wi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ea(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return hn(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pn(n){return Kn(JSON.stringify({version:2,heartbeats:n})).length}function aa(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){Re(new Ie("platform-logger",e=>new ys(e),"PRIVATE")),Re(new Ie("heartbeat",e=>new ra(e),"PRIVATE")),ve(St,un,n),ve(St,un,"esm2017"),ve("fire-js","")}oa("");var ca="firebase",la="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(ca,la,"app");function Ut(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function sr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ua=sr,ar=new De("auth","Firebase",sr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new Zn("@firebase/auth");function da(n,...e){et.logLevel<=y.WARN&&et.warn(`Auth (${Le}): ${n}`,...e)}function qe(n,...e){et.logLevel<=y.ERROR&&et.error(`Auth (${Le}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(n,...e){throw $t(n,...e)}function M(n,...e){return $t(n,...e)}function or(n,e,t){const r=Object.assign(Object.assign({},ua()),{[e]:t});return new De("auth","Firebase",r).create(e,{appName:n.name})}function z(n){return or(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $t(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ar.create(n,...e)}function p(n,e,...t){if(!n)throw $t(e,...t)}function V(n){const e="INTERNAL ASSERTION FAILED: "+n;throw qe(e),new Error(e)}function q(n,e){n||V(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ha(){return mn()==="http:"||mn()==="https:"}function mn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ha()||Vi()||"connection"in navigator)?navigator.onLine:!0}function pa(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.shortDelay=e,this.longDelay=t,q(t>e,"Short delay should be less than long delay!"),this.isMobile=$i()||Bi()}get(){return fa()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n,e){q(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;V("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;V("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;V("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Fe(3e4,6e4);function se(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function K(n,e,t,r,i={}){return lr(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const c=Ne(Object.assign({key:n.config.apiKey},a)).slice(1),o=await n._getAdditionalHeaders();o["Content-Type"]="application/json",n.languageCode&&(o["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:o},s);return ji()||(l.referrerPolicy="no-referrer"),cr.fetch()(ur(n,n.config.apiHost,t,c),l)})}async function lr(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ma),e);try{const i=new ya(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw He(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[o,l]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw He(n,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw He(n,"email-already-in-use",a);if(o==="USER_DISABLED")throw He(n,"user-disabled",a);const u=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw or(n,u,l);N(n,u)}}catch(i){if(i instanceof ie)throw i;N(n,"network-request-failed",{message:String(i)})}}async function Me(n,e,t,r,i={}){const s=await K(n,e,t,r,i);return"mfaPendingCredential"in s&&N(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ur(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?jt(n.config,i):`${n.config.apiScheme}://${i}`}function _a(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ya{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(M(this.auth,"network-request-failed")),ga.get())})}}function He(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=M(n,e,r);return i.customData._tokenResponse=t,i}function gn(n){return n!==void 0&&n.enterprise!==void 0}class va{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _a(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ba(n,e){return K(n,"GET","/v2/recaptchaConfig",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(n,e){return K(n,"POST","/v1/accounts:delete",e)}async function dr(n,e){return K(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ea(n,e=!1){const t=G(n),r=await t.getIdToken(e),i=Vt(r);p(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ce(yt(i.auth_time)),issuedAtTime:Ce(yt(i.iat)),expirationTime:Ce(yt(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yt(n){return Number(n)*1e3}function Vt(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return qe("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jn(t);return i?JSON.parse(i):(qe("Failed to decode base64 JWT payload"),null)}catch(i){return qe("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _n(n){const e=Vt(n);return p(e,"internal-error"),p(typeof e.exp<"u","internal-error"),p(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ie&&Ia(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ia({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ce(this.lastLoginAt),this.creationTime=Ce(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Te(n,dr(t,{idToken:r}));p(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hr(s.providerUserInfo):[],c=ka(n.providerData,a),o=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),u=o?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Ot(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Sa(n){const e=G(n);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ka(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hr(n){return n.map(e=>{var{providerId:t}=e,r=Ut(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(n,e){const t=await lr(n,{},async()=>{const r=Ne({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=ur(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cr.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Ca(n,e){return K(n,"POST","/v2/accounts:revokeToken",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken<"u","internal-error"),p(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_n(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){p(e.length!==0,"internal-error");const t=_n(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(p(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Aa(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new be;return r&&(p(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(p(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(p(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new be,this.toJSON())}_performRefresh(){return V("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n,e){p(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class B{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Ut(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ta(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ot(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Te(this,this.stsTokenManager.getToken(this.auth,e));return p(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ea(this,e)}reload(){return Sa(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new B(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await tt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(D(this.auth.app))return Promise.reject(z(this.auth));const e=await this.getIdToken();return await Te(this,wa(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,c,o,l,u;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,g=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,v=(a=t.photoURL)!==null&&a!==void 0?a:void 0,w=(c=t.tenantId)!==null&&c!==void 0?c:void 0,S=(o=t._redirectEventId)!==null&&o!==void 0?o:void 0,h=(l=t.createdAt)!==null&&l!==void 0?l:void 0,_=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:R,isAnonymous:b,providerData:E,stsTokenManager:P}=t;p(I&&P,e,"internal-error");const L=be.fromJSON(this.name,P);p(typeof I=="string",e,"internal-error"),J(d,e.name),J(f,e.name),p(typeof R=="boolean",e,"internal-error"),p(typeof b=="boolean",e,"internal-error"),J(g,e.name),J(v,e.name),J(w,e.name),J(S,e.name),J(h,e.name),J(_,e.name);const x=new B({uid:I,auth:e,email:f,emailVerified:R,displayName:d,isAnonymous:b,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:L,createdAt:h,lastLoginAt:_});return E&&Array.isArray(E)&&(x.providerData=E.map(je=>Object.assign({},je))),S&&(x._redirectEventId=S),x}static async _fromIdTokenResponse(e,t,r=!1){const i=new be;i.updateFromServerResponse(t);const s=new B({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tt(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];p(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?hr(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new be;c.updateFromIdToken(r);const o=new B({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ot(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(o,l),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Map;function H(n){q(n instanceof Function,"Expected a class definition");let e=yn.get(n);return e?(q(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yn.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fr.type="NONE";const vn=fr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n,e,t){return`firebase:${n}:${e}:${t}`}class we{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ge(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ge("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?B._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new we(H(vn),e,r);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||H(vn);const a=Ge(r,e.config.apiKey,e.name);let c=null;for(const l of t)try{const u=await l._get(a);if(u){const d=B._fromJSON(e,u);l!==s&&(c=d),s=l;break}}catch{}const o=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!o.length?new we(s,e,r):(s=o[0],c&&await s._set(a,c.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new we(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_r(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vr(e))return"Blackberry";if(br(e))return"Webos";if(mr(e))return"Safari";if((e.includes("chrome/")||gr(e))&&!e.includes("edge/"))return"Chrome";if(yr(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function pr(n=A()){return/firefox\//i.test(n)}function mr(n=A()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gr(n=A()){return/crios\//i.test(n)}function _r(n=A()){return/iemobile/i.test(n)}function yr(n=A()){return/android/i.test(n)}function vr(n=A()){return/blackberry/i.test(n)}function br(n=A()){return/webos/i.test(n)}function Bt(n=A()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Oa(n=A()){var e;return Bt(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ra(){return Hi()&&document.documentMode===10}function wr(n=A()){return Bt(n)||yr(n)||br(n)||vr(n)||/windows phone/i.test(n)||_r(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n,e=[]){let t;switch(n){case"Browser":t=bn(A());break;case"Worker":t=`${bn(A())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Le}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,c)=>{try{const o=e(s);a(o)}catch(o){c(o)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(n,e={}){return K(n,"GET","/v2/passwordPolicy",se(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da=6;class Na{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Da,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,c;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(t=o.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(i=o.containsLowercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(s=o.containsUppercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(a=o.containsNumericCharacter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(c=o.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),o}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wn(this),this.idTokenSubscription=new wn(this),this.beforeStateQueue=new Pa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ar,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=H(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await we.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await dr(this,{idToken:e}),r=await B._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(D(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!a||a===c)&&(o!=null&&o.user)&&(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await tt(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pa()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(D(this.app))return Promise.reject(z(this));const t=e?G(e):null;return t&&p(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return D(this.app)?Promise.reject(z(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return D(this.app)?Promise.reject(z(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(H(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xa(this),t=new Na(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new De("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ca(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&H(e)||this._popupRedirectResolver;p(t,this,"argument-error"),this.redirectPersistenceManager=await we.create(this,[H(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(p(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const o=e.addObserver(t,r,i);return()=>{a=!0,o()}}else{const o=e.addObserver(t);return()=>{a=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Er(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(D(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&da(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function me(n){return G(n)}class wn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yi(t=>this.observer=t)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fa(n){st=n}function Ir(n){return st.loadJS(n)}function Ma(){return st.recaptchaEnterpriseScript}function Ua(){return st.gapiScript}function $a(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class ja{constructor(){this.enterprise=new Va}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Va{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ba="recaptcha-enterprise",Tr="NO_RECAPTCHA";class Ha{constructor(e){this.type=Ba,this.auth=me(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{ba(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new va(o);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(o=>{c(o)})})}function i(s,a,c){const o=window.grecaptcha;gn(o)?o.enterprise.ready(()=>{o.enterprise.execute(s,{action:e}).then(l=>{a(l)}).catch(()=>{a(Tr)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ja().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(c=>{if(!t&&gn(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let o=Ma();o.length!==0&&(o+=c),Ir(o).then(()=>{i(c,s,a)}).catch(l=>{a(l)})}}).catch(c=>{a(c)})})}}async function En(n,e,t,r=!1,i=!1){const s=new Ha(n);let a;if(i)a=Tr;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const o=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const o=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:o,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Rt(n,e,t,r,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await En(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await En(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(n,e){const t=tr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Ze(s,e??{}))return i;N(i,"already-initialized")}return t.initialize({options:e})}function Wa(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(H);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qa(n,e,t){const r=me(n);p(r._canInitEmulator,r,"emulator-config-failed"),p(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Sr(e),{host:a,port:c}=Ga(e),o=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ka()}function Sr(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ga(n){const e=Sr(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:In(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:In(a)}}}function In(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ka(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return V("not implemented")}_getIdTokenResponse(e){return V("not implemented")}_linkToIdToken(e,t){return V("not implemented")}_getReauthenticationResolver(e){return V("not implemented")}}async function Ja(n,e){return K(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(n,e){return Me(n,"POST","/v1/accounts:signInWithPassword",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(n,e){return Me(n,"POST","/v1/accounts:signInWithEmailLink",se(n,e))}async function Za(n,e){return Me(n,"POST","/v1/accounts:signInWithEmailLink",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Ht{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new xe(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xe(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rt(e,t,"signInWithPassword",Ya);case"emailLink":return Xa(e,{email:this._email,oobCode:this._password});default:N(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rt(e,r,"signUpPassword",Ja);case"emailLink":return Za(e,{idToken:t,email:this._email,oobCode:this._password});default:N(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(n,e){return Me(n,"POST","/v1/accounts:signInWithIdp",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="http://localhost";class fe extends Ht{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):N("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Ut(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new fe(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ee(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ee(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ee(e,t)}buildRequest(){const e={requestUri:Qa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ne(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function to(n){const e=ke(Ae(n)).link,t=e?ke(Ae(e)).deep_link_id:null,r=ke(Ae(n)).deep_link_id;return(r?ke(Ae(r)).link:null)||r||t||e||n}class zt{constructor(e){var t,r,i,s,a,c;const o=ke(Ae(e)),l=(t=o.apiKey)!==null&&t!==void 0?t:null,u=(r=o.oobCode)!==null&&r!==void 0?r:null,d=eo((i=o.mode)!==null&&i!==void 0?i:null);p(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=o.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=o.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=o.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=to(e);try{return new zt(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.providerId=Se.PROVIDER_ID}static credential(e,t){return xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=zt.parseLink(t);return p(r,"argument-error"),xe._fromEmailAndCode(e,r.code,r.tenantId)}}Se.PROVIDER_ID="password";Se.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Se.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends kr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends Ue{constructor(){super("facebook.com")}static credential(e){return fe._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Y.credential(e.oauthAccessToken)}catch{return null}}}Y.FACEBOOK_SIGN_IN_METHOD="facebook.com";Y.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X extends Ue{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fe._fromParams({providerId:X.PROVIDER_ID,signInMethod:X.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return X.credentialFromTaggedObject(e)}static credentialFromError(e){return X.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return X.credential(t,r)}catch{return null}}}X.GOOGLE_SIGN_IN_METHOD="google.com";X.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Ue{constructor(){super("github.com")}static credential(e){return fe._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Z.credential(e.oauthAccessToken)}catch{return null}}}Z.GITHUB_SIGN_IN_METHOD="github.com";Z.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends Ue{constructor(){super("twitter.com")}static credential(e,t){return fe._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Q.credential(t,r)}catch{return null}}}Q.TWITTER_SIGN_IN_METHOD="twitter.com";Q.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(n,e){return Me(n,"POST","/v1/accounts:signUp",se(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await B._fromIdTokenResponse(e,r,i),a=Tn(r);return new pe({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Tn(r);return new pe({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Tn(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends ie{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new nt(e,t,r,i)}}function Ar(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nt._fromErrorAndOperation(n,s,e,r):s})}async function ro(n,e,t=!1){const r=await Te(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return pe._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(n,e,t=!1){const{auth:r}=n;if(D(r.app))return Promise.reject(z(r));const i="reauthenticate";try{const s=await Te(n,Ar(r,i,e,n),t);p(s.idToken,r,"internal-error");const a=Vt(s.idToken);p(a,r,"internal-error");const{sub:c}=a;return p(n.uid===c,r,"user-mismatch"),pe._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&N(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n,e,t=!1){if(D(n.app))return Promise.reject(z(n));const r="signIn",i=await Ar(n,r,e),s=await pe._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function so(n,e){return Cr(me(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(n){const e=me(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ao(n,e,t){if(D(n.app))return Promise.reject(z(n));const r=me(n),a=await Rt(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",no).catch(o=>{throw o.code==="auth/password-does-not-meet-requirements"&&Or(n),o}),c=await pe._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function oo(n,e,t){return D(n.app)?Promise.reject(z(n)):so(G(n),Se.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Or(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(n,e){return K(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=G(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Te(r,co(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:o})=>o==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function uo(n,e,t,r){return G(n).onIdTokenChanged(e,t,r)}function ho(n,e,t){return G(n).beforeAuthStateChanged(e,t)}async function fo(n){return G(n).delete()}const rt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rt,"1"),this.storage.removeItem(rt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=1e3,mo=10;class Pr extends Rr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Ra()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mo):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},po)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pr.type="LOCAL";const go=Pr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends Rr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xr.type="SESSION";const Dr=xr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new at(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async l=>l(t.origin,s)),o=await _o(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:o})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}at.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,o)=>{const l=Wt("",20);i.port1.start();const u=setTimeout(()=>{o(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(f.data.response);break;default:clearTimeout(u),clearTimeout(s),o(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return window}function vo(n){U().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return typeof U().WorkerGlobalScope<"u"&&typeof U().importScripts=="function"}async function bo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wo(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Eo(){return Nr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="firebaseLocalStorageDb",Io=1,it="firebaseLocalStorage",Fr="fbase_key";class $e{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ot(n,e){return n.transaction([it],e?"readwrite":"readonly").objectStore(it)}function To(){const n=indexedDB.deleteDatabase(Lr);return new $e(n).toPromise()}function Pt(){const n=indexedDB.open(Lr,Io);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(it,{keyPath:Fr})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(it)?e(r):(r.close(),await To(),e(await Pt()))})})}async function Sn(n,e,t){const r=ot(n,!0).put({[Fr]:e,value:t});return new $e(r).toPromise()}async function So(n,e){const t=ot(n,!1).get(e),r=await new $e(t).toPromise();return r===void 0?null:r.value}function kn(n,e){const t=ot(n,!0).delete(e);return new $e(t).toPromise()}const ko=800,Ao=3;class Mr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pt(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ao)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=at._getInstance(Eo()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await bo(),!this.activeServiceWorker)return;this.sender=new yo(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pt();return await Sn(e,rt,"1"),await kn(e,rt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sn(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>So(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ot(i,!1).getAll();return new $e(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ko)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mr.type="LOCAL";const Co=Mr;new Fe(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n,e){return e?H(e):(p(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ht{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ee(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ee(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ee(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ro(n){return Cr(n.auth,new qt(n),n.bypassAuthState)}function Po(n){const{auth:e,user:t}=n;return p(t,e,"internal-error"),io(t,new qt(n),n.bypassAuthState)}async function xo(n){const{auth:e,user:t}=n;return p(t,e,"internal-error"),ro(t,new qt(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=e;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ro;case"linkViaPopup":case"linkViaRedirect":return xo;case"reauthViaPopup":case"reauthViaRedirect":return Po;default:N(this.auth,"internal-error")}}resolve(e){q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){q(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new Fe(2e3,1e4);class ye extends Ur{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ye.currentPopupAction&&ye.currentPopupAction.cancel(),ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){q(this.filter.length===1,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(M(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(M(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(M(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Do.get())};e()}}ye.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="pendingRedirect",Ke=new Map;class Lo extends Ur{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ke.get(this.auth._key());if(!e){try{const r=await Fo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ke.set(this.auth._key(),e)}return this.bypassAuthState||Ke.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fo(n,e){const t=$o(e),r=Uo(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Mo(n,e){Ke.set(n._key(),e)}function Uo(n){return H(n._redirectPersistence)}function $o(n){return Ge(No,n.config.apiKey,n.name)}async function jo(n,e,t=!1){if(D(n.app))return Promise.reject(z(n));const r=me(n),i=Oo(r,e),a=await new Lo(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=10*60*1e3;class Bo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ho(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$r(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(M(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vo&&this.cachedEventUids.clear(),this.cachedEventUids.has(An(e))}saveEventToCache(e){this.cachedEventUids.add(An(e)),this.lastProcessedEventTime=Date.now()}}function An(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $r({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ho(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $r(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n,e={}){return K(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qo=/^https?/;async function Go(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zo(n);for(const t of e)try{if(Ko(t))return}catch{}N(n,"unauthorized-domain")}function Ko(n){const e=Ct(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!qo.test(t))return!1;if(Wo.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Fe(3e4,6e4);function Cn(){const n=U().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Yo(n){return new Promise((e,t)=>{var r,i,s;function a(){Cn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cn(),t(M(n,"network-request-failed"))},timeout:Jo.get()})}if(!((i=(r=U().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=U().gapi)===null||s===void 0)&&s.load)a();else{const c=$a("iframefcb");return U()[c]=()=>{gapi.load?a():t(M(n,"network-request-failed"))},Ir(`${Ua()}?onload=${c}`).catch(o=>t(o))}}).catch(e=>{throw Je=null,e})}let Je=null;function Xo(n){return Je=Je||Yo(n),Je}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Fe(5e3,15e3),Qo="__/auth/iframe",ec="emulator/auth/iframe",tc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rc(n){const e=n.config;p(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?jt(e,ec):`https://${n.config.authDomain}/${Qo}`,r={apiKey:e.apiKey,appName:n.name,v:Le},i=nc.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ne(r).slice(1)}`}async function ic(n){const e=await Xo(n),t=U().gapi;return p(t,n,"internal-error"),e.open({where:document.body,url:rc(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tc,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=M(n,"network-request-failed"),c=U().setTimeout(()=>{s(a)},Zo.get());function o(){U().clearTimeout(c),i(r)}r.ping(o).then(o,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ac=500,oc=600,cc="_blank",lc="http://localhost";class On{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uc(n,e,t,r=ac,i=oc){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const o=Object.assign(Object.assign({},sc),{width:r.toString(),height:i.toString(),top:s,left:a}),l=A().toLowerCase();t&&(c=gr(l)?cc:t),pr(l)&&(e=e||lc,o.scrollbars="yes");const u=Object.entries(o).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(Oa(l)&&c!=="_self")return dc(e||"",c),new On(null);const d=window.open(e||"",c,u);p(d,n,"popup-blocked");try{d.focus()}catch{}return new On(d)}function dc(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="__/auth/handler",fc="emulator/auth/handler",pc=encodeURIComponent("fac");async function Rn(n,e,t,r,i,s){p(n.config.authDomain,n,"auth-domain-config-required"),p(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Le,eventId:i};if(e instanceof kr){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ji(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))a[u]=d}if(e instanceof Ue){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(a.scopes=u.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const o=await n._getAppCheckToken(),l=o?`#${pc}=${encodeURIComponent(o)}`:"";return`${mc(n)}?${Ne(c).slice(1)}${l}`}function mc({config:n}){return n.emulator?jt(n,fc):`https://${n.authDomain}/${hc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="webStorageSupport";class gc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dr,this._completeRedirectFn=jo,this._overrideRedirectResult=Mo}async _openPopup(e,t,r,i){var s;q((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Rn(e,t,r,Ct(),i);return uc(e,a,Wt())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Rn(e,t,r,Ct(),i);return vo(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(q(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ic(e),r=new Bo(e);return t.register("authEvent",i=>(p(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vt,{type:vt},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vt];a!==void 0&&t(!!a),N(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Go(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wr()||mr()||Bt()}}const _c=gc;var Pn="@firebase/auth",xn="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bc(n){Re(new Ie("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;p(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Er(n)},l=new La(r,i,s,o);return Wa(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Re(new Ie("auth-internal",e=>{const t=me(e.getProvider("auth").getImmediate());return(r=>new yc(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ve(Pn,xn,vc(n)),ve(Pn,xn,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=5*60,Ec=Xn("authIdTokenMaxAge")||wc;let Dn=null;const Ic=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ec)return;const i=t==null?void 0:t.token;Dn!==i&&(Dn=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tc(n=Xs()){const e=tr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=za(n,{popupRedirectResolver:_c,persistence:[Co,go,Dr]}),r=Xn("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Ic(s.toString());ho(t,a,()=>a(t.currentUser)),uo(t,c=>a(c))}}const i=Mi("auth");return i&&qa(t,`http://${i}`),t}function Sc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Fa({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=M("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Sc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bc("Browser");const kc="AIzaSyACDjkDOpVNyq0Afqh8ZHGUJSW99ylP7TE",Ac="todo-app-42707.firebaseapp.com",Cc="todo-app-42707",Oc="todo-app-42707.firebasestorage.app",Rc="959930981852",Pc="1:959930981852:web:2031a2d1bae21adf3fc319",xc="G-WJNX379J1R",Dc={apiKey:kc,authDomain:Ac,projectId:Cc,storageBucket:Oc,messagingSenderId:Rc,appId:Pc,measurementId:xc},Nc=nr(Dc),jr=Tc(Nc),Vr=qr(),Lc=async(n,e,t)=>{var i;let r;try{return r=await ao(jr,e,t),await Vr.post("/api/register",{firebase_uid:(i=r==null?void 0:r.user)==null?void 0:i.uid,email:e,name:n}),await lo(r.user,{displayName:n}),r.user}catch(s){throw r!=null&&r.user&&(await fo(r.user),console.log("User deleted from Firebase due to failed API registration.")),s}},Fc=async(n,e)=>{var i;const t=await oo(jr,n,e),r=await Vr.get(`api/user?firebase_uid=${t.user.uid}`);return{...t.user,user:(i=r==null?void 0:r.data)==null?void 0:i.user}};function de({label:n,type:e="text",placeholder:t,id:r,helperText:i,error:s,fullWidth:a=!0,margin:c="normal",disabled:o=!1,...l}){const u={formGroup:{position:"relative",padding:"20px 0 0",marginTop:c==="normal"?"10px":"5px",fontFamily:"Roboto, sans-serif",width:a?"100%":"auto"},formField:{fontFamily:"inherit",width:"100%",border:"0",borderBottom:`1px solid ${s?"#d32f2f":"#d2d2d2"}`,outline:"0",fontSize:"16px",color:"#212121",padding:"7px 0",background:"transparent",transition:"border-color 0.2s",cursor:o?"not-allowed":"text",opacity:o?.7:1},formLabel:{position:"absolute",top:"0",display:"block",transition:"0.2s",fontSize:"16px",color:s?"#d32f2f":"#9b9b9b",pointerEvents:"none"},errorMessage:{color:"#d32f2f",fontSize:"0.75rem",marginTop:"8px",textAlign:"left"}};return m.jsxs("div",{style:u.formGroup,children:[m.jsx("input",{type:e,id:r,style:u.formField,placeholder:t,disabled:o,...l}),n&&m.jsx("label",{htmlFor:r,style:u.formLabel,children:n}),s&&m.jsx("div",{style:u.errorMessage,children:i})]})}de.propTypes={label:k.string,type:k.oneOf(["text","email","password","number"]),placeholder:k.string,id:k.string.isRequired,helperText:k.string,error:k.bool,fullWidth:k.bool,margin:k.oneOf(["normal","dense"]),disabled:k.bool};function Oe({sx:n,href:e,target:t,rel:r,children:i,...s}){const a={link:{...n,margin:"0.25rem"}};return m.jsx("a",{href:e,target:t,rel:r,style:a.link,...s,children:m.jsx("span",{children:i})})}Oe.propTypes={href:k.string.isRequired,target:k.string,rel:k.string,children:k.node.isRequired,sx:k.object};const Mc=Lt().shape({fullname:ue().required("Full name is required"),email:ue().email("Invalid email format").required("Email is required"),password:ue().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:ue().oneOf([di("password"),null],"Passwords must match").required("Confirm password is required")}),Br=({toggle:n})=>{var a,c,o,l;const e=xt(),{register:t,handleSubmit:r,formState:{errors:i}}=Ln({resolver:Un(Mc)}),s=async u=>{const d=ce.loading("Registering...");try{await Lc(u.fullname,u.email,u.password),ce.update(d,{render:"Registration successful! Welcome!",type:"success",isLoading:!1,autoClose:2e3}),setTimeout(()=>{e(0)},[2e3])}catch(f){ce.update(d,{render:`${f}`,type:"error",isLoading:!1,autoClose:3e3})}};return m.jsx("div",{className:"col align-items-center flex-col sign-up",children:m.jsx("form",{className:"form sign-up",onSubmit:r(s),children:m.jsxs("div",{className:"form-wrapper align-items-center",spacing:2,direction:"column",children:[m.jsx(de,{label:"Full Name",...t("fullname"),variant:"outlined",error:!!i.fullname,helperText:(a=i==null?void 0:i.fullname)==null?void 0:a.message}),m.jsx(de,{label:"Email",...t("email"),variant:"outlined",error:!!i.email,helperText:(c=i==null?void 0:i.email)==null?void 0:c.message}),m.jsx(de,{label:"Password",type:"password",...t("password"),variant:"outlined",error:!!i.password,helperText:(o=i==null?void 0:i.password)==null?void 0:o.message}),m.jsx(de,{label:"Confirm Password",type:"password",...t("confirmPassword"),variant:"outlined",error:!!i.confirmPassword,helperText:(l=i==null?void 0:i.confirmPassword)==null?void 0:l.message}),m.jsx(Fn,{sx:{margin:"16px 0 16px"},type:"submit",children:"Sign up"}),m.jsx("div",{children:m.jsxs("div",{children:[m.jsx("span",{children:"Already have an account?"}),m.jsx(Oe,{component:"span",variant:"body2",onClick:n,underline:"hover","aria-label":"",sx:{cursor:"pointer",marginLeft:"4px"},children:"Sign in here"})]})})]})})})};Br.propTypes={toggle:k.func,isSignInForm:k.bool};const Uc=()=>m.jsx(m.Fragment,{children:m.jsxs("div",{className:"row content-row",children:[m.jsxs("div",{className:"col align-items-center flex-col",children:[m.jsx("div",{className:"text sign-in",children:m.jsx("h2",{children:"Welcome"})}),m.jsx("div",{className:"img sign-in"})]}),m.jsxs("div",{className:"col align-items-center flex-col",children:[m.jsx("div",{className:"img sign-up"}),m.jsx("div",{className:"text sign-up",children:m.jsx("h2",{children:"Join with us"})})]})]})}),$c=Lt().shape({email:ue().email("Invalid email format").required("Email is required"),password:ue().min(6,"Password must be at least 6 characters").required("Password is required")}),Hr=({toggle:n})=>{var c,o;const{login:e}=Nn(),t=xt(),{register:r,handleSubmit:i,formState:{errors:s}}=Ln({resolver:Un($c)}),a=async l=>{const u=ce.loading("Loading...");try{const d=await Fc(l.email,l.password);d.user?(e(d),ce.update(u,{render:"Welcome back! You've successfully logged in.",type:"success",isLoading:!1,autoClose:2e3}),t("/",{replace:!0})):ce.error("We are currently experiencing temporary issues with our login system, and you are unable to access your account at this time.")}catch(d){ce.update(u,{render:`${d}`,type:"error",isLoading:!1,autoClose:3e3})}};return m.jsx("div",{className:"col align-items-center flex-col sign-in",children:m.jsx("form",{className:"form sign-in",onSubmit:i(a),children:m.jsxs("div",{className:"form-wrapper align-items-center",children:[m.jsx(de,{id:"email",label:"Email",...r("email"),variant:"outlined",error:!!s.email,helperText:(c=s==null?void 0:s.email)==null?void 0:c.message}),m.jsx(de,{id:"password",label:"Password",type:"password",...r("password"),variant:"outlined",error:!!s.password,helperText:(o=s==null?void 0:s.password)==null?void 0:o.message}),m.jsx(Fn,{sx:{margin:"16px 0 16px"},type:"submit",children:"Sign in"}),m.jsxs("div",{style:{margin:8},children:[m.jsx("span",{children:"Don't have an account?"}),m.jsx(Oe,{onClick:n,"aria-label":"",children:"Sign up here"})]}),m.jsx("div",{className:"terms",children:m.jsxs("p",{children:["By signing in, you agree to our",m.jsx(Oe,{sx:{margin:2},children:"Terms"}),"and",m.jsx(Oe,{children:"Privacy Policy"})]})})]})})})};Hr.propTypes={toggle:k.func,isSignInForm:k.bool};const Bc=()=>{const{isAuthenticated:n}=Nn(),[e,t]=ct.useState(!0),r=xt(),i=()=>{t(s=>!s)};return ct.useEffect(()=>{n&&r("/",{replace:!0})},[n]),ct.useEffect(()=>{t(!0)},[]),m.jsxs("div",{className:`container ${e?"sign-in":"sign-up"}`,id:"container",children:[m.jsxs("div",{className:"row",children:[m.jsx(Br,{isSignInForm:e,toggle:i}),m.jsx(Hr,{isSignInForm:e,toggle:i})]}),m.jsx(Uc,{})]})};export{Bc as default};

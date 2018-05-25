!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mobx"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["exports","mobx","react","react-dom"],t):t(e.mobxReact={},e.mobx,e.React,e.ReactDOM)}(this,function(e,t,n,r){"use strict";function o(e){function n(n,r,o,i,a,s){for(var c=arguments.length,p=Array(c>6?c-6:0),u=6;u<c;u++)p[u-6]=arguments[u];return t.untracked(function(){if(i=i||"<<anonymous>>",s=s||o,null==r[o]){if(n){var t=null===r[o]?"null":"undefined";return new Error("The "+a+" `"+s+"` is marked as required in `"+i+"`, but its value is `"+t+"`.")}return null}return e.apply(void 0,[r,o,i,a,s].concat(p))})}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function i(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function a(e){var t=void 0===e?"undefined":U(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":i(t,e)?"symbol":t}function s(e){var t=a(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function c(e,n){return o(function(r,o,i,c,p){return t.untracked(function(){if(e&&a(r[o])===n.toLowerCase())return null;var c=void 0;switch(n){case"Array":c=t.isObservableArray;break;case"Object":c=t.isObservableObject;break;case"Map":c=t.isObservableMap;break;default:throw new Error("Unexpected mobxType: "+n)}var u=r[o];if(!c(u)){var l=s(u),f=e?" or javascript `"+n.toLowerCase()+"`":"";return new Error("Invalid prop `"+p+"` of type `"+l+"` supplied to `"+i+"`, expected `mobx.Observable"+n+"`"+f+".")}return null})})}function p(e,n){return o(function(r,o,i,a,s){for(var p=arguments.length,u=Array(p>5?p-5:0),l=5;l<p;l++)u[l-5]=arguments[l];return t.untracked(function(){if("function"!=typeof n)return new Error("Property `"+s+"` of component `"+i+"` has invalid PropType notation.");var t=c(e,"Array")(r,o,i);if(t instanceof Error)return t;for(var p=r[o],l=0;l<p.length;l++)if((t=n.apply(void 0,[p,l,i,a,s+"["+l+"]"].concat(u)))instanceof Error)return t;return null})})}function u(e){return!(e.prototype&&e.prototype.render)}function l(e,t,r){var o,i,a="inject-"+(t.displayName||t.name||t.constructor&&t.constructor.name||"Unknown");r&&(a+="-with-"+r);var s=(i=o=function(r){function o(){var e,t,n,r;k(this,o);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=n=M(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(a))),n.storeRef=function(e){n.wrappedInstance=e},r=t,M(n,r)}return R(o,r),E(o,[{key:"render",value:function(){var r={};for(var o in this.props)this.props.hasOwnProperty(o)&&(r[o]=this.props[o]);var i=e(this.context.mobxStores||{},r,this.context)||{};for(var a in i)r[a]=i[a];return u(t)||(r.ref=this.storeRef),n.createElement(t,r)}}]),o}(n.Component),o.displayName=a,i);return C(s,t),s.wrappedComponent=t,Object.defineProperties(s,q),s}function f(e){return function(t,n){return e.forEach(function(e){if(!(e in n)){if(!(e in t))throw new Error("MobX injector: Store '"+e+"' is not available! Make sure it is provided by some Provider");n[e]=t[e]}}),n}}function d(){var e=void 0;if("function"==typeof arguments[0])return e=arguments[0],function(t){var n=l(e,t);return n.isMobxInjector=!1,n=w(n),n.isMobxInjector=!0,n};for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e=f(t),function(n){return l(e,n,t.join("-"))}}function h(e){if(r.findDOMNode)try{return r.findDOMNode(e)}catch(e){return null}return null}function y(e){var t=h(e);t&&K&&K.set(t,e),V.emit({event:"render",renderTime:e.__$mobRenderEnd-e.__$mobRenderStart,totalTime:Date.now()-e.__$mobRenderStart,component:e,node:t})}function b(){if("undefined"==typeof WeakMap)throw new Error("[mobx-react] tracking components is not supported in this browser.");X||(X=!0)}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=e[t],o=z[t],i=r?!0===n?function(){o.apply(this,arguments),r.apply(this,arguments)}:function(){r.apply(this,arguments),o.apply(this,arguments)}:o;e[t]=i}function v(e,t){if(g(e,t))return!0;if("object"!==(void 0===e?"undefined":U(e))||null===e||"object"!==(void 0===t?"undefined":U(t))||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!hasOwnProperty.call(t,n[o])||!g(e[n[o]],t[n[o]]))return!1;return!0}function g(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function _(e){function r(e){var n=this[e],r=t.createAtom("reactive "+e);Object.defineProperty(this,e,{configurable:!0,enumerable:!0,get:function(){return r.reportObserved(),n},set:function(e){p||v(n,e)?n=e:(n=e,c=!0,r.reportChanged(),c=!1)}})}function o(){var e=this;l=!1;var n=void 0,r=void 0;if(f.track(function(){X&&(e.__$mobRenderStart=Date.now());try{r=t._allowStateChanges(!1,u)}catch(e){n=e}X&&(e.__$mobRenderEnd=Date.now())}),n)throw Y.emit(n),n;return r}var i=this;if(!0===H)return e.call(this);var a=this.displayName||this.name||this.constructor&&(this.constructor.displayName||this.constructor.name)||"<component>",s=this._reactInternalInstance&&this._reactInternalInstance._rootNodeID||this._reactInternalFiber&&this._reactInternalFiber._debugID,c=!1,p=!1;r.call(this,"props"),r.call(this,"state");var u=e.bind(this),l=!1,f=new t.Reaction(a+"#"+s+".render()",function(){if(!l&&(l=!0,"function"==typeof i.componentWillReact&&i.componentWillReact(),!0!==i.__$mobxIsUnmounted)){var e=!0;try{p=!0,c||n.Component.prototype.forceUpdate.call(i),e=!1}finally{p=!1,e&&f.dispose()}}});return f.reactComponent=this,o.$mobx=f,this.render=o,o.call(this)}function w(e,t){if("string"==typeof e)throw new Error("Store names should be provided as array");if(Array.isArray(e))return G||(G=!0,console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`')),t?d.apply(null,e)(w(t)):function(t){return w(e,t)};var r=e;if(!0===r.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),r.__proto__===n.PureComponent&&console.warn("Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together"),!("function"!=typeof r||r.prototype&&r.prototype.render||r.isReactClass||n.Component.isPrototypeOf(r))){var o,i,a=w((i=o=function(e){function t(){return k(this,t),M(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return R(t,e),E(t,[{key:"render",value:function(){return r.call(this,this.props,this.context)}}]),t}(n.Component),o.displayName=r.displayName||r.name,o.contextTypes=r.contextTypes,o.propTypes=r.propTypes,o.defaultProps=r.defaultProps,i));return C(a,r),a}if(!r)throw new Error("Please pass a valid component to 'observer'");var s=r.prototype||r;O(s),r.isMobXReactObserver=!0;var c=s.render;return s.render=function(){return _.call(this,c)},r}function O(e){["componentDidMount","componentWillUnmount","componentDidUpdate"].forEach(function(t){m(e,t)}),e.shouldComponentUpdate?console.warn("Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react."):e.shouldComponentUpdate=z.shouldComponentUpdate}function x(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function j(e){var t=this.constructor.getDerivedStateFromProps(e,this.state);null!==t&&void 0!==t&&this.setState(t)}function S(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}var P="default"in n?n.default:n,C=("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self,function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){!function(t,n){e.exports=n()}(0,function(){var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,a=Object.getPrototypeOf,s=a&&a(Object);return function c(p,u,l){if("string"!=typeof u){if(s){var f=a(u);f&&f!==s&&c(p,f,l)}var d=r(u);o&&(d=d.concat(o(u)));for(var h=0;h<d.length;++h){var y=d[h];if(!(e[y]||t[y]||l&&l[y])){var b=i(u,y);try{n(p,y,b)}catch(e){}}}return p}return p}})})),U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k=(function(){function e(e){this.value=e}function t(t){function n(o,i){try{var a=t[o](i),s=a.value;s instanceof e?Promise.resolve(s.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":o.resolve({value:t,done:!0});break;case"throw":o.reject(t);break;default:o.resolve({value:t,done:!1})}(o=o.next)?n(o.key,o.arg):i=null}var o,i;this._invoke=function(e,t){return new Promise(function(r,a){var s={key:e,arg:t,resolve:r,reject:a,next:null};i?i=i.next=s:(o=i=s,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),R=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},M=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},D=function(){function e(){k(this,e),this.listeners=[]}return E(e,[{key:"on",value:function(e){var t=this;return this.listeners.push(e),function(){var n=t.listeners.indexOf(e);-1!==n&&t.listeners.splice(n,1)}}},{key:"emit",value:function(e){this.listeners.forEach(function(t){return t(e)})}}]),e}(),T=c(!1,"Array"),I=p.bind(null,!1),A=c(!1,"Map"),W=c(!1,"Object"),N=c(!0,"Array"),F=p.bind(null,!0),B=c(!0,"Object"),L=Object.freeze({observableArray:T,observableArrayOf:I,observableMap:A,observableObject:W,arrayOrObservableArray:N,arrayOrObservableArrayOf:F,objectOrObservableObject:B}),$={mobxStores:B};Object.seal($);var q={contextTypes:{get:function(){return $},set:function(e){console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`")},configurable:!0,enumerable:!1},isMobxInjector:{value:!0,writable:!0,configurable:!0,enumerable:!0}},X=!1,H=!1,G=!1,K="undefined"!=typeof WeakMap?new WeakMap:void 0,V=new D,Y=new D,z={componentWillUnmount:function(){if(!0!==H&&(this.render.$mobx&&this.render.$mobx.dispose(),this.__$mobxIsUnmounted=!0,X)){var e=h(this);e&&K&&K.delete(e),V.emit({event:"destroy",component:this,node:e})}},componentDidMount:function(){X&&y(this)},componentDidUpdate:function(){X&&y(this)},shouldComponentUpdate:function(e,t){return H&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!v(this.props,e)}},J=w(function(e){var t=e.children,n=e.inject,r=e.render,o=t||r;if(void 0===o)return null;if(!n)return o();console.warn("<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead");var i=d(n)(o);return P.createElement(i,null)});J.displayName="Observer";var Q=function(e,t,n,r,o){var i="children"===t?"render":"children";if("function"==typeof e[t]&&"function"==typeof e[i])return new Error("Invalid prop,do not use children and render in the same time in`"+n);if("function"!=typeof e[t]&&"function"!=typeof e[i])return new Error("Invalid prop `"+o+"` of type `"+U(e[t])+"` supplied to `"+n+"`, expected `function`.")};J.propTypes={render:Q,children:Q},x.__suppressDeprecationWarning=!0,j.__suppressDeprecationWarning=!0,S.__suppressDeprecationWarning=!0;var Z,ee,te={children:!0,key:!0,ref:!0},ne=(ee=Z=function(e){function t(e,n){k(this,t);var r=M(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state=e||{},r}return R(t,e),E(t,[{key:"render",value:function(){return n.Children.only(this.props.children)}},{key:"getChildContext",value:function(){var e={},t=this.context.mobxStores;if(t)for(var n in t)e[n]=t[n];for(var r in this.state)te[r]||"suppressChangedStoreWarning"===r||(e[r]=this.props[r]);return{mobxStores:e}}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!e)return null;if(!t)return e;if(Object.keys(e).length!==Object.keys(t).length&&console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children"),!e.suppressChangedStoreWarning)for(var n in e)te[n]||t[n]===e[n]||console.warn("MobX Provider: Provided store '"+n+"' has changed. Please avoid replacing stores as the change might not propagate to all children");return e}}]),t}(n.Component),Z.contextTypes={mobxStores:B},Z.childContextTypes={mobxStores:B.isRequired},ee);if(function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,o=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?o="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==o){var i=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=x,t.componentWillReceiveProps=j),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=S;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,r)}}}(ne),!n.Component)throw new Error("mobx-react requires React to be available");if(!t.spy)throw new Error("mobx-react requires mobx to be available");"function"==typeof r.unstable_batchedUpdates&&t.configure({reactionScheduler:r.unstable_batchedUpdates});if("object"===("undefined"==typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__?"undefined":U(__MOBX_DEVTOOLS_GLOBAL_HOOK__))){var re={spy:t.spy,extras:{getDebugName:t.getDebugName}},oe={renderReporter:V,componentByNodeRegistry:K,componentByNodeRegistery:K,trackComponents:b};__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(oe,re)}e.propTypes=L,e.PropTypes=L,e.onError=function(e){return Y.on(e)},e.observer=w,e.Observer=J,e.renderReporter=V,e.componentByNodeRegistery=K,e.componentByNodeRegistry=K,e.trackComponents=b,e.useStaticRendering=function(e){H=e},e.Provider=ne,e.inject=d,Object.defineProperty(e,"__esModule",{value:!0})});
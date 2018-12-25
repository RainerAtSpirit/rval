(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs_source/0_introduction/10_getting-started.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u});var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function c(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=i(this,p(n).call(this,e))).layout=null,a}var a,t,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(n,o.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;s(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"getting-started-with-rval"}},"Getting started with RVal"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The core of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"RVal")," is four functions which have all a very simple contract: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sub")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"act"),".\nYes, they all have three-letter names. That's kind of cool I think. Not sure yet why."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"val-reactive-values"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"val"),": reactive values"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"\u201c","Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.","\u201d"," ","\u2014"," John Carmack")),o.a.createElement(r.MDXTag,{name:"p",components:n},"In RVal, the universe revolves around ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"reactive values"),".\nCreating your first reactive value is easy by leveraging ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val(initialValue)"),":"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},'import { val } from "rval";\n\nconst myLuckyNumber = val(13)\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val")," returns a function that returns any ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"value")," you've put into it.\nSo ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myLuckyNumber")," is now a function, returning the original number, and we can call it:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"console.log(myLuckyNumber())\n// prints: 13\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Fancy! But what use is it to create a function that just returns the original value?\nWe'll find out in a bit.\nFirst, there is another trick the function can do: We can call it with a new lucky number,\n(in case ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"13")," didn't work out after all):"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"myLuckyNumber(42)\n\nconsole.log(myLuckyNumber())\n// prints: 42\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"By passing an argument to the function, we can update it's internal state.\nWhen calling the reactive value function without argumens, it will always return the value we've passed into it the last time."),o.a.createElement(r.MDXTag,{name:"p",components:n},"You can put any value you like into a reactive value.\nBut, for all practical purposes, you've should consider this value to be immutable.\nThis will greatly benefit the understanding of the code base once it grows big enough.\nBut, more on that later."),o.a.createElement(r.MDXTag,{name:"p",components:n},"See the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"docs-philosophy"}},"Philosophy")," for some more background on this idea."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"drv-derived-values"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"drv"),": derived values"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"\u201c",'"No, officer \ud83d\udc6e\u200d\u2640\ufe0f, I don\'t drv(thunk)!" ',"\u201d"," ","\u2014"," Erik Rasmussen")),o.a.createElement(r.MDXTag,{name:"p",components:n},"In my humble opinion, good lucky numbers should at least be odd. So we can quickly run a check for that:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"const myLuckyNumber = val(13)\nconst isGoodLuckyNumber = myLuckyNumber() % 2 === 1\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"That works. But is a bit limited, if we update ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myLuckyNumber")," later on, this change won't be reflected\nin ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"isGoodLuckyNumber"),".\nBut, using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," we can repeat a similar trick as we did for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val"),":\nInstead of capturing some state, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," captures a computation.\nIt returns a function, that, when invoked, runs the computation once."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"const myLuckyNumber = val(13)\nconst isGoodLuckyNumber = drv(() => myLuckyNumber() % 2 === 1)\n\nconsole.log(isGoodLuckyNumber()) // true\nmyLuckyNumber(42)\nconsole.log(isGoodLuckyNumber()) // false\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," can be used to ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"derive")," arbitrarly simple or complex values based on other reactive values, created by either ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The critical reader might think at this point: ","\u201c","That's nice and dandy, but you couldn't we just have used ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"const isGoodLuckyNumber = () => myLuckyNumber() % 2 === 1"),"?","\u201d",".\nAnd that is true, glad you ask. That would indeed have yielded the same output.\nBut! Using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," brings in a few new possiblities:"),o.a.createElement(r.MDXTag,{name:"p",components:n},"First, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," will memoize",o.a.createElement(r.MDXTag,{name:"sup",components:n,parentName:"p",props:{id:"fnref-(usually)"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"sup",props:{href:"#fn-(usually)",className:"footnote-ref"}},"(usually)"))," it's results. That is: as long as ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myLuckyNumber")," doesn't change, invoking ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"isGoodLuckyNumber()")," multiple times won't actually re-evaluate the original expression, but just return a memoized result."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Secondly, and more importantly. So far we having been pulling values through our system by explicitly calling ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myLuckyNumber()")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"isGoodLuckyNumber()"),".\nBut in a reactive system, the control flow is inversed",o.a.createElement(r.MDXTag,{name:"sup",components:n,parentName:"p",props:{id:"fnref-1"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"sup",props:{href:"#fn-1",className:"footnote-ref"}},"1")),".\nTo build a reactive system, we have to push our values to consumers and actively ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"notify")," them."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"sub-listing-to-changes"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"sub"),": listing to changes"),o.a.createElement(r.MDXTag,{name:"p",components:n},"And that is where ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sub")," comes in!\nWith ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sub"),", one can create a consumer of a reactive value created using ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv"),".\nIn other words, it sets up a ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"subscription"),".\nThis creates a ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"we'll call you")," basis of operation:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"const myLuckyNumber = val(13)\nconst isGoodLuckyNumber = drv(() => myLuckyNumber() % 2 === 1)\n\nconst cancelPrint = sub(isGoodLuckyNumber, isGood => {\n    console.log(isGood)\n})\n\nmyLuckyNumber(42) // prints: 'false'\nmyLuckyNumber(33) // prints: 'true'\nmyLuckyNumber(55) // (doesn't print, isGoodLuckyNumber didn't produce a new value)\nmyLuckyNumber(2)  // prints: 'false'\n\ncancelPrint() // stop listening to future updates\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Finally, we did something that we couldn't have achieved by using just plain functions and omitting ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val"),".\nWhat ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val")," achieve is that they set up a dependency system, so that when we update state, this state is propagated through the derived values, to the subscriptions.\nTransparent reactive programming is used to determine the optimal program flow, and based on the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://mobx.js.org"}},"MobX")," package."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Note that we didn't pass ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"isGoodLuckyNumber()"),"! We want to subscribe to the function's future output, not to it's current value (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"13"),").\nAlso note that ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sub")," returns a function. This function has only one purpose: cancelling future executions of the subscription."),o.a.createElement(r.MDXTag,{name:"p",components:n},"A remarkable property about ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sub")," is that you don't need them as often as you would initially think.\nThey are not needed to propagate values through your system. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," can take care of that.\n",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sub")," is generally only need to achieve side effects; visible output from your system.\nSuch as updating the UI, logging, making network effects etc. "),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"act-batching-updates"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"act"),": batching updates"),o.a.createElement(r.MDXTag,{name:"p",components:n},"TODO: run or act?"),o.a.createElement(r.MDXTag,{name:"p",components:n},"You might have noticed that in the previous listening or side effects where immediately fired when emitting an update to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"myLuckyNumber"),".\nThis is just the default behavior and there are several ways to influence it.\nFirst of all, we can use techniques like debounce to roun our subscriptions less frequently.\nBut more importantly, we can hold of the reactive system to wait a bit until we've done all our updates,\nso that changes will be broadcased as one atomic update.\nTo express that, there is ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"act")," to group multiple changes into a single ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"activity"),": "),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-javascript"}},"const cancelPrint = sub(isGoodLuckyNumber, isGood => {\n    console.log(isGood)\n})\n\nact(() => {\n    myLuckyNumber(42) \n    myLuckyNumber(33)\n    myLuckyNumber(55)\n    myLuckyNumber(2) \n}) // prints only once, at the end of the activity: 'false'\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"That's all! Note that ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"act")," only batches ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"synchronosly")," run updates. Passing an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"async")," function to ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"act")," is in that regard mostly useless."),o.a.createElement(r.MDXTag,{name:"hr",components:n}),o.a.createElement(r.MDXTag,{name:"p",components:n},"Your system will most probably not be expressible in a single ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"val"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"drv")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sub"),'.\nBut, we\'ve now covered the entire basic mechanism of "rval"!\nIn the next sections we will focus on organizing many different values, objects etc.\nAnd see how we can hook up the UI.'),o.a.createElement(r.MDXTag,{name:"div",components:n,props:{className:"footnotes"}},o.a.createElement(r.MDXTag,{name:"hr",components:n,parentName:"div"}),o.a.createElement(r.MDXTag,{name:"ol",components:n,parentName:"div"},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol",props:{id:"fn-(usually)"}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"drv")," will by default memoize as long as there is at least one active subscription. Without subscriptions, memoization will be disabled to avoid accidentally leaking memory. The behavior can be overriden by using the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"keepAlive")," option. (TODO).",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#fnref-(usually)",className:"footnote-backref"}},"\u21a9")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol",props:{id:"fn-(a.k.a. inversion of control)"}},"Wiki: ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://en.wikipedia.org/wiki/Inversion_of_control"}},"Inversion of control"),o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#fnref-(a.k.a.%20inversion%20of%20control)",className:"footnote-backref"}},"\u21a9")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol",props:{id:"fn-1"}},"(a.k.a. inversion of control)",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"#fnref-1",className:"footnote-backref"}},"\u21a9")))))}}])&&c(a.prototype,t),m&&c(a,m),n}()}}]);
//# sourceMappingURL=docs-source-0-introduction-10-getting-started.e2ac49079e2d157a0b49.js.map
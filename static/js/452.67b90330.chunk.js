(self.webpackChunkmarket=self.webpackChunkmarket||[]).push([[452],{4452:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return O}});var n=a(3433),r=a(9439),i=a(2791),s={shop__container:"Shop_shop__container__5QMoD",select__container:"Shop_select__container__x+FRt",select__text:"Shop_select__text__9fJdG",select:"Shop_select__zWfn+",list__grid:"Shop_list__grid__hKCi4",nothing__container:"Shop_nothing__container__3dZbk"},o=a(9434),l=a(5071),c="ShopItem_container__GPxEL",p="ShopItem_image__mBR7M",u="ShopItem_detail__S0Iwz",d="ShopItem_title__L2kLP",g="ShopItem_detail__link__jM7Sn",f="ShopItem_media__1JWBM",h="ShopItem_price__ZhjIe",v="ShopItem_detal__button__PTR3P",m="ShopItem_add__button__w2G8Z",b=a(6157),y=a(538),C=a(1087),P=a(5264),x=a(184);P.Notify.init({position:"right-bottom",timeout:1500});var _=function(e){var t=e.id,a=e.image,n=e.title,r=e.description,i=e.price,s=(0,o.I0)(),l=(0,o.v9)((function(e){return e.user.user}));return(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)("img",{className:p,src:"".concat(a),alt:"".concat(t)}),(0,x.jsxs)("div",{className:u,children:[(0,x.jsx)("h3",{className:d,children:n}),(0,x.jsx)("p",{className:h,children:"Price: $ ".concat(i)}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)(b.Z,{type:"button",className:v,children:(0,x.jsx)(C.rU,{to:"/detail/".concat(t),className:g,children:"Detail"})}),(0,x.jsx)(b.Z,{variant:"success",className:m,type:"button",onClick:function(){l?(s(y.I.addProduct({id:t,image:a,title:n,description:r,price:i})),P.Notify.success("Product added successfully")):P.Notify.failure("You must be logged in to your profile to add a product to your shopping cart.")},children:"Add"})]})]})]})},k=a(2936),N=a(1527),L=a(6048),j=a.n(L),S="ShopPagination_pagination__CpWWQ",E=function(e){var t=e.handleFunc,a=e.pageCount;return(0,x.jsx)("div",{className:S,children:(0,x.jsx)(j(),{className:S,breakLabel:"...",nextLabel:">",onPageChange:t,pageRangeDisplayed:4,pageCount:a,previousLabel:"<"})})},O=function(){var e=(0,o.I0)(),t=(0,o.v9)((function(e){return e.data})),a=t.total,c=t.products,p=(0,i.useState)(c),u=(0,r.Z)(p,2),d=u[0],g=u[1],f=(0,i.useState)(0),h=(0,r.Z)(f,2),v=h[0],m=h[1],b=(0,i.useState)(0),y=(0,r.Z)(b,2),C=y[0],P=y[1];(0,i.useEffect)((function(){e((0,l.Y)(C)),m(Math.ceil(a/12)%a)}),[e,C,a]),(0,i.useEffect)((function(){g(c)}),[c]);return(0,x.jsxs)("div",{className:s.shop__container,children:[(0,x.jsxs)("div",{className:s.select__container,children:[(0,x.jsx)("p",{className:s.select__text,children:"Sorting products: "}),(0,x.jsxs)(k.Z.Select,{className:s.select,size:"lg",onChange:function(e){var t;t="large"===e.target.value?(0,n.Z)(c).sort((function(e,t){return t.price-e.price})):"smallest"===e.target.value?(0,n.Z)(c).sort((function(e,t){return e.price-t.price})):c,g(t)},children:[(0,x.jsx)("option",{children:" - "}),(0,x.jsx)("option",{value:"large",children:"Sort from large"}),(0,x.jsx)("option",{value:"smallest",children:"Sort from smallest"})]})]}),d?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("ul",{className:s.list__grid,children:d.map((function(e){var t=e.id,a=e.title,n=e.price,r=e.thumbnail,i=e.description;return(0,x.jsx)("li",{className:s.item,children:(0,x.jsx)(_,{id:t,image:r,title:a,description:i,price:n})},t)}))}),(0,x.jsx)(E,{handleFunc:function(e){var t=12*e.selected%a;P(t)},pageCount:v})]}):(0,x.jsx)("div",{className:s.nothing__container,children:(0,x.jsx)(N.Z,{})})]})}},6048:function(e,t,a){var n;e.exports=(n=a(2791),function(){var e={703:function(e,t,a){"use strict";var n=a(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},697:function(e,t,a){e.exports=a(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:function(e){"use strict";e.exports=n}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,a),i.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";a.r(r),a.d(r,{default:function(){return x}});var e=a(98),t=a.n(e),n=a(697),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}var o=function(e){var a=e.pageClassName,n=e.pageLinkClassName,r=e.page,i=e.selected,o=e.activeClassName,l=e.activeLinkClassName,c=e.getEventListener,p=e.pageSelectedHandler,u=e.href,d=e.extraAriaContext,g=e.pageLabelBuilder,f=e.rel,h=e.ariaLabel||"Page "+r+(d?" "+d:""),v=null;return i&&(v="page",h=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+o:o,void 0!==n?void 0!==l&&(n=n+" "+l):n=l),t().createElement("li",{className:a},t().createElement("a",s({rel:f,role:u?void 0:"button",className:n,href:u,tabIndex:i?"-1":"0","aria-label":h,"aria-current":v,onKeyPress:p},c(p)),g(r)))};o.propTypes={pageSelectedHandler:i().func.isRequired,selected:i().bool.isRequired,pageClassName:i().string,pageLinkClassName:i().string,activeClassName:i().string,activeLinkClassName:i().string,extraAriaContext:i().string,href:i().string,ariaLabel:i().string,page:i().number.isRequired,getEventListener:i().func.isRequired,pageLabelBuilder:i().func.isRequired,rel:i().string};var l=o;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}var p=function(e){var a=e.breakLabel,n=e.breakClassName,r=e.breakLinkClassName,i=e.breakHandler,s=e.getEventListener,o=n||"break";return t().createElement("li",{className:o},t().createElement("a",c({className:r,role:"button",tabIndex:"0",onKeyPress:i},s(i)),a))};p.propTypes={breakLabel:i().oneOfType([i().string,i().node]),breakClassName:i().string,breakLinkClassName:i().string,breakHandler:i().func.isRequired,getEventListener:i().func.isRequired};var u=p;function d(e){return null!=e?e:arguments.length>1&&void 0!==arguments[1]?arguments[1]:""}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(o,e);var a,n,r,i,s=(r=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(i){var a=y(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return m(this,e)});function o(e){var a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),C(b(a=s.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;a.handleClick(e,null,t>0?t-1:void 0,{isPrevious:!0})})),C(b(a),"handleNextPage",(function(e){var t=a.state.selected,n=a.props.pageCount;a.handleClick(e,null,t<n-1?t+1:void 0,{isNext:!0})})),C(b(a),"handlePageSelected",(function(e,t){if(a.state.selected===e)return a.callActiveCallback(e),void a.handleClick(t,null,void 0,{isActive:!0});a.handleClick(t,null,e)})),C(b(a),"handlePageChange",(function(e){a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),C(b(a),"getEventListener",(function(e){return C({},a.props.eventListener,e)})),C(b(a),"handleClick",(function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.isPrevious,s=void 0!==i&&i,o=r.isNext,l=void 0!==o&&o,c=r.isBreak,p=void 0!==c&&c,u=r.isActive,d=void 0!==u&&u;e.preventDefault?e.preventDefault():e.returnValue=!1;var g=a.state.selected,f=a.props.onClick,h=n;if(f){var v=f({index:t,selected:g,nextSelectedPage:n,event:e,isPrevious:s,isNext:l,isBreak:p,isActive:d});if(!1===v)return;Number.isInteger(v)&&(h=v)}void 0!==h&&a.handlePageChange(h)})),C(b(a),"handleBreakClick",(function(e,t){var n=a.state.selected;a.handleClick(t,e,n<e?a.getForwardJump():a.getBackwardJump(),{isBreak:!0})})),C(b(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),C(b(a),"callActiveCallback",(function(e){void 0!==a.props.onPageActive&&"function"==typeof a.props.onPageActive&&a.props.onPageActive({selected:e})})),C(b(a),"getElementPageRel",(function(e){var t=a.state.selected,n=a.props,r=n.nextPageRel,i=n.prevPageRel,s=n.selectedPageRel;return t-1===e?i:t===e?s:t+1===e?r:void 0})),C(b(a),"pagination",(function(){var e=[],n=a.props,r=n.pageRangeDisplayed,i=n.pageCount,s=n.marginPagesDisplayed,o=n.breakLabel,l=n.breakClassName,c=n.breakLinkClassName,p=a.state.selected;if(i<=r)for(var d=0;d<i;d++)e.push(a.getPageElement(d));else{var g=r/2,f=r-g;p>i-r/2?g=r-(f=i-p):p<r/2&&(f=r-(g=p));var h,v,m=function(e){return a.getPageElement(e)},b=[];for(h=0;h<i;h++){var y=h+1;y<=s||y>i-s||h>=p-g&&h<=p+(0===p&&r>1?f-1:f)?b.push({type:"page",index:h,display:m(h)}):o&&b.length>0&&b[b.length-1].display!==v&&(r>0||s>0)&&(v=t().createElement(u,{key:h,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,h),getEventListener:a.getEventListener}),b.push({type:"break",index:h,display:v}))}b.forEach((function(t,a){var n=t;"break"===t.type&&b[a-1]&&"page"===b[a-1].type&&b[a+1]&&"page"===b[a+1].type&&b[a+1].index-b[a-1].index<=2&&(n={type:"page",index:t.index,display:m(t.index)}),e.push(n.display)}))}return e})),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:n},a}return a=o,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,n=e.extraAriaContext,r=e.pageCount,i=e.forcePage;void 0===t||a||this.callCallback(t),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(r)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(r,"). Did you forget a Math.ceil()?")),void 0!==t&&t>r-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(t," > ").concat(r-1,").")),void 0!==i&&i>r-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(i," > ").concat(r-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,n=e+t.pageRangeDisplayed;return n>=a?a-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var t=this.props,a=t.hrefBuilder,n=t.pageCount,r=t.hrefAllControls;if(a)return r||e>=0&&e<n?a(e+1,n,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var a=this.state.selected,n=this.props,r=n.pageClassName,i=n.pageLinkClassName,s=n.activeClassName,o=n.activeLinkClassName,c=n.extraAriaContext,p=n.pageLabelBuilder;return t().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,rel:this.getElementPageRel(e),pageClassName:r,pageLinkClassName:i,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:p,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var a=this.props,n=a.disabledClassName,r=a.disabledLinkClassName,i=a.pageCount,s=a.className,o=a.containerClassName,l=a.previousLabel,c=a.previousClassName,p=a.previousLinkClassName,u=a.previousAriaLabel,g=a.prevRel,h=a.nextLabel,v=a.nextClassName,m=a.nextLinkClassName,b=a.nextAriaLabel,y=a.nextRel,C=this.state.selected,P=0===C,x=C===i-1,_="".concat(d(c)).concat(P?" ".concat(d(n)):""),k="".concat(d(v)).concat(x?" ".concat(d(n)):""),N="".concat(d(p)).concat(P?" ".concat(d(r)):""),L="".concat(d(m)).concat(x?" ".concat(d(r)):""),j=P?"true":"false",S=x?"true":"false";return t().createElement("ul",{className:s||o,role:"navigation","aria-label":"Pagination"},t().createElement("li",{className:_},t().createElement("a",f({className:N,href:this.getElementHref(C-1),tabIndex:P?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":j,"aria-label":u,rel:g},this.getEventListener(this.handlePreviousPage)),l)),this.pagination(),t().createElement("li",{className:k},t().createElement("a",f({className:L,href:this.getElementHref(C+1),tabIndex:x?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":S,"aria-label":b,rel:y},this.getEventListener(this.handleNextPage)),h)))}}])&&h(a.prototype,n),Object.defineProperty(a,"prototype",{writable:!1}),o}(e.Component);C(P,"propTypes",{pageCount:i().number.isRequired,pageRangeDisplayed:i().number,marginPagesDisplayed:i().number,previousLabel:i().node,previousAriaLabel:i().string,prevPageRel:i().string,prevRel:i().string,nextLabel:i().node,nextAriaLabel:i().string,nextPageRel:i().string,nextRel:i().string,breakLabel:i().oneOfType([i().string,i().node]),hrefBuilder:i().func,hrefAllControls:i().bool,onPageChange:i().func,onPageActive:i().func,onClick:i().func,initialPage:i().number,forcePage:i().number,disableInitialCallback:i().bool,containerClassName:i().string,className:i().string,pageClassName:i().string,pageLinkClassName:i().string,pageLabelBuilder:i().func,activeClassName:i().string,activeLinkClassName:i().string,previousClassName:i().string,nextClassName:i().string,previousLinkClassName:i().string,nextLinkClassName:i().string,disabledClassName:i().string,disabledLinkClassName:i().string,breakClassName:i().string,breakLinkClassName:i().string,extraAriaContext:i().string,ariaLabelBuilder:i().func,eventListener:i().string,renderOnZeroPageCount:i().func,selectedPageRel:i().string}),C(P,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});var x=P}(),r}())}}]);
//# sourceMappingURL=452.67b90330.chunk.js.map
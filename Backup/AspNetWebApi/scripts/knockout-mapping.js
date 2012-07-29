// Knockout Mapping plugin v2.1.0
// (c) 2011 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(d){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?d(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],d):d(ko,ko.mapping={})})(function(d,f){function C(a,c){for(var b in c)c.hasOwnProperty(b)&&c[b]&&(b&&a[b]&&!(a[b]instanceof Array)?C(a[b],c[b]):a[b]=c[b])}function D(a,c){var b={};C(b,a);C(b,c);return b}function E(a,c){a=a||{};if(a.create instanceof Function||a.update instanceof Function||a.key instanceof Function||
a.arrayChanged instanceof Function)a={"":a};c&&(a.ignore=i(c.ignore,a.ignore),a.include=i(c.include,a.include),a.copy=i(c.copy,a.copy));a.ignore=i(a.ignore,g.ignore);a.include=i(a.include,g.include);a.copy=i(a.copy,g.copy);a.mappedProperties=a.mappedProperties||{};return a}function i(a,c){a instanceof Array||(a="undefined"===f.getType(a)?[]:[a]);c instanceof Array||(c="undefined"===f.getType(c)?[]:[c]);return a.concat(c)}function M(a,c){var b=d.dependentObservable;d.dependentObservable=function(b,
c,e){var e=e||{},f=e.deferEvaluation;b&&"object"==typeof b&&(e=b);var l=!1,k=function(b){var c=o({read:function(){l||(d.utils.arrayRemoveItem(a,b),l=!0);return b.apply(b,arguments)},write:function(a){return b(a)},deferEvaluation:!0});c.__ko_proto__=o;return c};e.deferEvaluation=!0;b=new o(b,c,e);b.__ko_proto__=o;f||(a.push(b),b=k(b));return b};d.computed=d.dependentObservable;var e=c();d.dependentObservable=b;d.computed=d.dependentObservable;return e}function z(a,c,b,e,v,g){var y=d.utils.unwrapObservable(c)instanceof
Array,g=g||"";if(f.isMapped(a))var j=d.utils.unwrapObservable(a)[n],b=D(j,b);var l=function(){return b[e]&&b[e].create instanceof Function},k=function(a){return M(F,function(){return b[e].create({data:a||c,parent:v})})},s=function(){return b[e]&&b[e].update instanceof Function},q=function(a,f){var h={data:f||c,parent:v,target:d.utils.unwrapObservable(a)};d.isWriteableObservable(a)&&(h.observable=a);return b[e].update(h)};if(j=A.get(c))return j;e=e||"";if(y){var y=[],m=!1,h=function(a){return a};b[e]&&
b[e].key&&(h=b[e].key,m=!0);d.isObservable(a)||(a=d.observableArray([]),a.mappedRemove=function(b){var c="function"==typeof b?b:function(a){return a===h(b)};return a.remove(function(a){return c(h(a))})},a.mappedRemoveAll=function(b){var c=w(b,h);return a.remove(function(a){return-1!=d.utils.arrayIndexOf(c,h(a))})},a.mappedDestroy=function(b){var c="function"==typeof b?b:function(a){return a===h(b)};return a.destroy(function(a){return c(h(a))})},a.mappedDestroyAll=function(b){var c=w(b,h);return a.destroy(function(a){return-1!=
d.utils.arrayIndexOf(c,h(a))})},a.mappedIndexOf=function(b){var c=w(a(),h),b=h(b);return d.utils.arrayIndexOf(c,b)},a.mappedCreate=function(b){if(-1!==a.mappedIndexOf(b))throw Error("There already is an object with the key that you specified.");var c=l()?k(b):b;s()&&(b=q(c,b),d.isWriteableObservable(c)?c(b):c=b);a.push(c);return c});var j=w(d.utils.unwrapObservable(a),h).sort(),i=w(c,h);m&&i.sort();for(var m=d.utils.compareArrays(j,i),j={},i=[],o=0,u=m.length;o<u;o++){var t=m[o],p,r=g+"["+o+"]";switch(t.status){case "added":var x=
B(d.utils.unwrapObservable(c),t.value,h);p=z(void 0,x,b,e,a,r);l()||(p=d.utils.unwrapObservable(p));r=I(d.utils.unwrapObservable(c),x,j);i[r]=p;j[r]=!0;break;case "retained":x=B(d.utils.unwrapObservable(c),t.value,h);p=B(a,t.value,h);z(p,x,b,e,a,r);r=I(d.utils.unwrapObservable(c),x,j);i[r]=p;j[r]=!0;break;case "deleted":p=B(a,t.value,h)}y.push({event:t.status,item:p})}a(i);b[e]&&b[e].arrayChanged&&d.utils.arrayForEach(y,function(a){b[e].arrayChanged(a.event,a.item)})}else if(G(c)){a=d.utils.unwrapObservable(a);
if(!a){if(l())return m=k(),s()&&(m=q(m)),m;if(s())return q(m);a={}}s()&&(a=q(a));A.save(c,a);J(c,function(e){var f=g.length?g+"."+e:e;if(-1==d.utils.arrayIndexOf(b.ignore,f))if(-1!=d.utils.arrayIndexOf(b.copy,f))a[e]=c[e];else{var v=A.get(c[e])||z(a[e],c[e],b,e,a,f);if(d.isWriteableObservable(a[e]))a[e](d.utils.unwrapObservable(v));else a[e]=v;b.mappedProperties[f]=!0}})}else switch(f.getType(c)){case "function":s()?d.isWriteableObservable(c)?(c(q(c)),a=c):a=q(c):a=c;break;default:d.isWriteableObservable(a)?
s()?a(q(a)):a(d.utils.unwrapObservable(c)):(a=l()?k():d.observable(d.utils.unwrapObservable(c)),s()&&a(q(a)))}return a}function I(a,c,b){for(var e=0,d=a.length;e<d;e++)if(!0!==b[e]&&a[e]===c)return e;return null}function K(a,c){var b;c&&(b=c(a));"undefined"===f.getType(b)&&(b=a);return d.utils.unwrapObservable(b)}function B(a,c,b){a=d.utils.arrayFilter(d.utils.unwrapObservable(a),function(a){return K(a,b)===c});if(0==a.length)throw Error("When calling ko.update*, the key '"+c+"' was not found!");
if(1<a.length&&G(a[0]))throw Error("When calling ko.update*, the key '"+c+"' was not unique!");return a[0]}function w(a,c){return d.utils.arrayMap(d.utils.unwrapObservable(a),function(a){return c?K(a,c):a})}function J(a,c){if(a instanceof Array)for(var b=0;b<a.length;b++)c(b);else for(b in a)c(b)}function G(a){var c=f.getType(a);return"object"===c&&null!==a&&"undefined"!==c}function L(){var a=[],c=[];this.save=function(b,e){var f=d.utils.arrayIndexOf(a,b);0<=f?c[f]=e:(a.push(b),c.push(e))};this.get=
function(b){b=d.utils.arrayIndexOf(a,b);return 0<=b?c[b]:void 0}}var n="__ko_mapping__",o=d.dependentObservable,H=0,F,A,u={include:["_destroy"],ignore:[],copy:[]},g=u;f.isMapped=function(a){return(a=d.utils.unwrapObservable(a))&&a[n]};f.fromJS=function(a){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");window.setTimeout(function(){H=0},0);H++||(F=[],A=new L);var c,b;2==arguments.length&&(arguments[1][n]?b=arguments[1]:c=arguments[1]);3==arguments.length&&
(c=arguments[1],b=arguments[2]);b&&(c=D(c,b[n]));c=E(c);var e=z(b,a,c);b&&(e=b);--H||window.setTimeout(function(){d.utils.arrayForEach(F,function(a){a&&a()})},0);e[n]=D(e[n],c);return e};f.fromJSON=function(a){var c=d.utils.parseJson(a);arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};f.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
};f.toJS=function(a,c){g||f.resetDefaultOptions();if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");if(!(g.ignore instanceof Array))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if(!(g.include instanceof Array))throw Error("ko.mapping.defaultOptions().include should be an array.");if(!(g.copy instanceof Array))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=E(c,a[n]);return f.visitModel(a,function(a){return d.utils.unwrapObservable(a)},
c)};f.toJSON=function(a,c){var b=f.toJS(a,c);return d.utils.stringifyJson(b)};f.defaultOptions=function(){if(0<arguments.length)g=arguments[0];else return g};f.resetDefaultOptions=function(){g={include:u.include.slice(0),ignore:u.ignore.slice(0),copy:u.copy.slice(0)}};f.getType=function(a){return a&&"object"===typeof a&&a.constructor==(new Date).constructor?"date":typeof a};f.visitModel=function(a,c,b){b=b||{};b.visitedObjects=b.visitedObjects||new L;b.parentName||(b=E(b));var e,g=d.utils.unwrapObservable(a);
if(G(g))c(a,b.parentName),e=g instanceof Array?[]:{};else return c(a,b.parentName);b.visitedObjects.save(a,e);var i=b.parentName;J(g,function(a){if(!(b.ignore&&-1!=d.utils.arrayIndexOf(b.ignore,a))){var j=g[a],l=b,k=i||"";g instanceof Array?i&&(k+="["+a+"]"):(i&&(k+="."),k+=a);l.parentName=k;if(!(-1===d.utils.arrayIndexOf(b.copy,a)&&-1===d.utils.arrayIndexOf(b.include,a)&&g[n]&&g[n].mappedProperties&&!g[n].mappedProperties[a]&&!(g instanceof Array)))switch(f.getType(d.utils.unwrapObservable(j))){case "object":case "undefined":l=
b.visitedObjects.get(j);e[a]="undefined"!==f.getType(l)?l:f.visitModel(j,c,b);break;default:e[a]=c(j,b.parentName)}}});return e}});// Knockout Mapping plugin v2.1.0
// (c) 2011 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function(d){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?d(require("knockout"),exports):"function"===typeof define&&define.amd?define(["knockout","exports"],d):d(ko,ko.mapping={})})(function(d,f){function C(a,c){for(var b in c)c.hasOwnProperty(b)&&c[b]&&(b&&a[b]&&!(a[b]instanceof Array)?C(a[b],c[b]):a[b]=c[b])}function D(a,c){var b={};C(b,a);C(b,c);return b}function E(a,c){a=a||{};if(a.create instanceof Function||a.update instanceof Function||a.key instanceof Function||
a.arrayChanged instanceof Function)a={"":a};c&&(a.ignore=i(c.ignore,a.ignore),a.include=i(c.include,a.include),a.copy=i(c.copy,a.copy));a.ignore=i(a.ignore,g.ignore);a.include=i(a.include,g.include);a.copy=i(a.copy,g.copy);a.mappedProperties=a.mappedProperties||{};return a}function i(a,c){a instanceof Array||(a="undefined"===f.getType(a)?[]:[a]);c instanceof Array||(c="undefined"===f.getType(c)?[]:[c]);return a.concat(c)}function M(a,c){var b=d.dependentObservable;d.dependentObservable=function(b,
c,e){var e=e||{},f=e.deferEvaluation;b&&"object"==typeof b&&(e=b);var l=!1,k=function(b){var c=o({read:function(){l||(d.utils.arrayRemoveItem(a,b),l=!0);return b.apply(b,arguments)},write:function(a){return b(a)},deferEvaluation:!0});c.__ko_proto__=o;return c};e.deferEvaluation=!0;b=new o(b,c,e);b.__ko_proto__=o;f||(a.push(b),b=k(b));return b};d.computed=d.dependentObservable;var e=c();d.dependentObservable=b;d.computed=d.dependentObservable;return e}function z(a,c,b,e,v,g){var y=d.utils.unwrapObservable(c)instanceof
Array,g=g||"";if(f.isMapped(a))var j=d.utils.unwrapObservable(a)[n],b=D(j,b);var l=function(){return b[e]&&b[e].create instanceof Function},k=function(a){return M(F,function(){return b[e].create({data:a||c,parent:v})})},s=function(){return b[e]&&b[e].update instanceof Function},q=function(a,f){var h={data:f||c,parent:v,target:d.utils.unwrapObservable(a)};d.isWriteableObservable(a)&&(h.observable=a);return b[e].update(h)};if(j=A.get(c))return j;e=e||"";if(y){var y=[],m=!1,h=function(a){return a};b[e]&&
b[e].key&&(h=b[e].key,m=!0);d.isObservable(a)||(a=d.observableArray([]),a.mappedRemove=function(b){var c="function"==typeof b?b:function(a){return a===h(b)};return a.remove(function(a){return c(h(a))})},a.mappedRemoveAll=function(b){var c=w(b,h);return a.remove(function(a){return-1!=d.utils.arrayIndexOf(c,h(a))})},a.mappedDestroy=function(b){var c="function"==typeof b?b:function(a){return a===h(b)};return a.destroy(function(a){return c(h(a))})},a.mappedDestroyAll=function(b){var c=w(b,h);return a.destroy(function(a){return-1!=
d.utils.arrayIndexOf(c,h(a))})},a.mappedIndexOf=function(b){var c=w(a(),h),b=h(b);return d.utils.arrayIndexOf(c,b)},a.mappedCreate=function(b){if(-1!==a.mappedIndexOf(b))throw Error("There already is an object with the key that you specified.");var c=l()?k(b):b;s()&&(b=q(c,b),d.isWriteableObservable(c)?c(b):c=b);a.push(c);return c});var j=w(d.utils.unwrapObservable(a),h).sort(),i=w(c,h);m&&i.sort();for(var m=d.utils.compareArrays(j,i),j={},i=[],o=0,u=m.length;o<u;o++){var t=m[o],p,r=g+"["+o+"]";switch(t.status){case "added":var x=
B(d.utils.unwrapObservable(c),t.value,h);p=z(void 0,x,b,e,a,r);l()||(p=d.utils.unwrapObservable(p));r=I(d.utils.unwrapObservable(c),x,j);i[r]=p;j[r]=!0;break;case "retained":x=B(d.utils.unwrapObservable(c),t.value,h);p=B(a,t.value,h);z(p,x,b,e,a,r);r=I(d.utils.unwrapObservable(c),x,j);i[r]=p;j[r]=!0;break;case "deleted":p=B(a,t.value,h)}y.push({event:t.status,item:p})}a(i);b[e]&&b[e].arrayChanged&&d.utils.arrayForEach(y,function(a){b[e].arrayChanged(a.event,a.item)})}else if(G(c)){a=d.utils.unwrapObservable(a);
if(!a){if(l())return m=k(),s()&&(m=q(m)),m;if(s())return q(m);a={}}s()&&(a=q(a));A.save(c,a);J(c,function(e){var f=g.length?g+"."+e:e;if(-1==d.utils.arrayIndexOf(b.ignore,f))if(-1!=d.utils.arrayIndexOf(b.copy,f))a[e]=c[e];else{var v=A.get(c[e])||z(a[e],c[e],b,e,a,f);if(d.isWriteableObservable(a[e]))a[e](d.utils.unwrapObservable(v));else a[e]=v;b.mappedProperties[f]=!0}})}else switch(f.getType(c)){case "function":s()?d.isWriteableObservable(c)?(c(q(c)),a=c):a=q(c):a=c;break;default:d.isWriteableObservable(a)?
s()?a(q(a)):a(d.utils.unwrapObservable(c)):(a=l()?k():d.observable(d.utils.unwrapObservable(c)),s()&&a(q(a)))}return a}function I(a,c,b){for(var e=0,d=a.length;e<d;e++)if(!0!==b[e]&&a[e]===c)return e;return null}function K(a,c){var b;c&&(b=c(a));"undefined"===f.getType(b)&&(b=a);return d.utils.unwrapObservable(b)}function B(a,c,b){a=d.utils.arrayFilter(d.utils.unwrapObservable(a),function(a){return K(a,b)===c});if(0==a.length)throw Error("When calling ko.update*, the key '"+c+"' was not found!");
if(1<a.length&&G(a[0]))throw Error("When calling ko.update*, the key '"+c+"' was not unique!");return a[0]}function w(a,c){return d.utils.arrayMap(d.utils.unwrapObservable(a),function(a){return c?K(a,c):a})}function J(a,c){if(a instanceof Array)for(var b=0;b<a.length;b++)c(b);else for(b in a)c(b)}function G(a){var c=f.getType(a);return"object"===c&&null!==a&&"undefined"!==c}function L(){var a=[],c=[];this.save=function(b,e){var f=d.utils.arrayIndexOf(a,b);0<=f?c[f]=e:(a.push(b),c.push(e))};this.get=
function(b){b=d.utils.arrayIndexOf(a,b);return 0<=b?c[b]:void 0}}var n="__ko_mapping__",o=d.dependentObservable,H=0,F,A,u={include:["_destroy"],ignore:[],copy:[]},g=u;f.isMapped=function(a){return(a=d.utils.unwrapObservable(a))&&a[n]};f.fromJS=function(a){if(0==arguments.length)throw Error("When calling ko.fromJS, pass the object you want to convert.");window.setTimeout(function(){H=0},0);H++||(F=[],A=new L);var c,b;2==arguments.length&&(arguments[1][n]?b=arguments[1]:c=arguments[1]);3==arguments.length&&
(c=arguments[1],b=arguments[2]);b&&(c=D(c,b[n]));c=E(c);var e=z(b,a,c);b&&(e=b);--H||window.setTimeout(function(){d.utils.arrayForEach(F,function(a){a&&a()})},0);e[n]=D(e[n],c);return e};f.fromJSON=function(a){var c=d.utils.parseJson(a);arguments[0]=c;return f.fromJS.apply(this,arguments)};f.updateFromJS=function(){throw Error("ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!");};f.updateFromJSON=function(){throw Error("ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!");
};f.toJS=function(a,c){g||f.resetDefaultOptions();if(0==arguments.length)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");if(!(g.ignore instanceof Array))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if(!(g.include instanceof Array))throw Error("ko.mapping.defaultOptions().include should be an array.");if(!(g.copy instanceof Array))throw Error("ko.mapping.defaultOptions().copy should be an array.");c=E(c,a[n]);return f.visitModel(a,function(a){return d.utils.unwrapObservable(a)},
c)};f.toJSON=function(a,c){var b=f.toJS(a,c);return d.utils.stringifyJson(b)};f.defaultOptions=function(){if(0<arguments.length)g=arguments[0];else return g};f.resetDefaultOptions=function(){g={include:u.include.slice(0),ignore:u.ignore.slice(0),copy:u.copy.slice(0)}};f.getType=function(a){return a&&"object"===typeof a&&a.constructor==(new Date).constructor?"date":typeof a};f.visitModel=function(a,c,b){b=b||{};b.visitedObjects=b.visitedObjects||new L;b.parentName||(b=E(b));var e,g=d.utils.unwrapObservable(a);
if(G(g))c(a,b.parentName),e=g instanceof Array?[]:{};else return c(a,b.parentName);b.visitedObjects.save(a,e);var i=b.parentName;J(g,function(a){if(!(b.ignore&&-1!=d.utils.arrayIndexOf(b.ignore,a))){var j=g[a],l=b,k=i||"";g instanceof Array?i&&(k+="["+a+"]"):(i&&(k+="."),k+=a);l.parentName=k;if(!(-1===d.utils.arrayIndexOf(b.copy,a)&&-1===d.utils.arrayIndexOf(b.include,a)&&g[n]&&g[n].mappedProperties&&!g[n].mappedProperties[a]&&!(g instanceof Array)))switch(f.getType(d.utils.unwrapObservable(j))){case "object":case "undefined":l=
b.visitedObjects.get(j);e[a]="undefined"!==f.getType(l)?l:f.visitModel(j,c,b);break;default:e[a]=c(j,b.parentName)}}});return e}});
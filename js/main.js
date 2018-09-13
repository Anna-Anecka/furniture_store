!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
    }
    var n = {};
    t.m = e,
        t.c = n,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
            ;
            return t.d(n, "a", n),
                n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 495)
}({
    181: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.parseFunction = function(e) {
            var t = "" + e
                , n = t.match(/function/);
            if (null == n)
                return "fn()";
            var r = n[0] ? t.indexOf(n[0]) + n[0].length + 1 : null;
            if (null == r)
                return "fn()";
            var o = t.indexOf("(")
                , i = t.slice(r, o);
            return i.length ? i + " ()" : "fn()"
        }
    },
    495: function(e, t, n) {
        "use strict";
        var r, o = n(496), i = n(497);
        if (!r) {
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__ || console.warn("[React-Sight]: React Sight requires React Dev Tools to be installed.");
            var u = window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers || null
                , l = u[Object.keys(u)[0]]
                , a = window.__REACT_DEVTOOLS_GLOBAL_HOOK__
                , c = !1
                , s = void 0
                , p = void 0;
            !function() {
                if (!window.__REACT_DEVTOOLS_GLOBAL_HOOK__)
                    return void console.log("Error: React DevTools not present. React Sight uses React DevTools to patch React's reconciler");
                l && l.version ? (p = l.version,
                    a.onCommitFiberRoot = function(e) {
                        return function() {
                            return s = arguments.length <= 1 ? void 0 : arguments[1],
                                (0,
                                    o.traverse16)(s),
                                e.apply(void 0, arguments)
                        }
                    }(a.onCommitFiberRoot)) : l && l.Reconciler ? l.Reconciler.receiveComponent = function(e) {
                    return function() {
                        return c || (c = !0,
                            setTimeout(function() {
                                (0,
                                    i.getData)(l),
                                    c = !1
                            }, 10)),
                            e.apply(void 0, arguments)
                    }
                }(l.Reconciler.receiveComponent) : console.log("[React Sight] React not found")
            }(),
            l && window.addEventListener("reactsight", function() {
                parseInt(p, 10) >= 16 ? (0,
                    o.traverse16)(s) : (0,
                    i.getData)(l)
            }),
                r = !0
        }
    },
    496: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.traverse16 = t.recur16 = t.props16 = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = n(181)
            , i = void 0
            , u = t.props16 = function(e) {
                var t = {};
                return Object.keys(e.memoizedProps).forEach(function(n) {
                    var i = e.memoizedProps[n];
                    "function" == typeof i ? t[n] = (0,
                        o.parseFunction)(i) : "object" === r(e.memoizedProps[n]) ? t[n] = "object*" : t[n] = e.memoizedProps[n]
                }),
                    t
            }
            , l = t.recur16 = function e(t, n) {
                var r = {
                    name: "",
                    children: [],
                    state: null,
                    props: null,
                    id: null,
                    isDOM: null
                };
                t._debugID && (r.id = t._debugID),
                t.type && (t.type.name ? (r.name = t.type.name,
                    r.isDOM = !1) : (r.name = t.type,
                    r.isDOM = !0)),
                t.memoizedState && (r.state = t.memoizedState),
                t.memoizedProps && (r.props = u(t)),
                t.type && t.type.propTypes && t.type.propTypes.hasOwnProperty("store") && (i = t.stateNode.store.getState()),
                    r.children = [],
                    n.push(r),
                null != t.child && e(t.child, r.children),
                null != t.sibling && e(t.sibling, n)
            }
        ;
        t.traverse16 = function(e) {
            if (void 0 !== e) {
                var t = [];
                l(e.current.stateNode.current, t);
                var n = {
                    data: t,
                    store: i
                };
                n.data = n.data[0].children[0].children;
                var r = {
                    data: t,
                    store: i
                }
                    , o = JSON.parse(JSON.stringify(r));
                window.postMessage(o, "*")
            }
        }
    },
    497: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getId = t.getName = t.getRef = t.getKey = t.getStore = t.getState = t.getData = t.traverseAllChildren = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = n(181)
            , i = void 0
            , u = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (!t)
                return null;
            if (t.hasOwnProperty(window) || t.hasOwnProperty("prevObject") || t.hasOwnProperty(Window))
                return null;
            if ("object" !== (void 0 === t ? "undefined" : r(t)))
                return t;
            if (!Object.prototype.hasOwnProperty.call(t, "props")) {
                var i = {};
                for (var u in t)
                    if (t[u]) {
                        if ("routes" === u)
                            return;
                        if ("function" == typeof t[u])
                            i[u] = (0,
                                o.parseFunction)(t[u]);
                        else if (Array.isArray(t[u]) && "children" === u)
                            i[u] = a(t[u]);
                        else if ("object" === r(t[u])) {
                            if (t[u] && Object.keys(t[u]).length)
                                if (n < 3) {
                                    var l = n + 1;
                                    i[u] = e(t[u], l)
                                } else
                                    i[u] = "obj*"
                        } else
                            i[u] = t[u]
                    } else
                        i[u] = null;
                return i
            }
            if (t.hasOwnProperty("type"))
                return t.type.hasOwnProperty("name") && t.type.name.length ? t.type.name : t.type.hasOwnProperty("displayName") && t.type.displayName.length ? t.type.displayName : t.hasOwnProperty("type") ? "" + t.type : void 0
        }
            , l = t.traverseAllChildren = function e(t, n) {
            if (t._currentElement) {
                var r = {
                    children: [],
                    id: null,
                    idDOM: !1,
                    name: "default",
                    state: null,
                    props: null,
                    ref: null,
                    key: null
                };
                i = p(t),
                    r.state = s(t),
                    r.key = f(t),
                    r.ref = d(t),
                    r.name = y(t),
                    r.props = c(t);
                var o = m(t);
                r.id = o.id,
                    r.isDOM = o.isDOM,
                    n.push(r);
                var u = t._renderedChildren
                    , l = t._renderedComponent;
                if (l)
                    e(l, r.children);
                else if (u) {
                    var a = Object.keys(u);
                    a.forEach(function(t) {
                        return e(u[t], r.children)
                    })
                }
            }
        }
            , a = (t.getData = function(e) {
                var t = []
                    , n = e.Mount._instancesByReactRootID[1]._renderedComponent;
                l(n, t);
                var r = {
                    data: t,
                    store: i
                }
                    , o = JSON.parse(JSON.stringify(r));
                window.postMessage(JSON.parse(JSON.stringify(o)), "*")
            }
                ,
                function(e) {
                    return e.map(function(e) {
                        return u(e)
                    })
                }
        )
            , c = function(e) {
            return e._currentElement && e._currentElement.props ? u(e._currentElement.props) : null
        }
            , s = t.getState = function(e) {
            return e._instance && e._instance.state ? e._instance.state : null
        }
            , p = t.getStore = function(e) {
            return e._currentElement.type && e._currentElement.type.propTypes && e._currentElement.type.propTypes.hasOwnProperty("store") ? e._instance.store.getState() : null
        }
            , f = t.getKey = function(e) {
            return e._currentElement && e._currentElement.key ? e._currentElement.key : null
        }
            , d = t.getRef = function(e) {
            return e._currentElement && e._currentElement.ref ? e._currentElement.ref : null
        }
            , y = t.getName = function(e) {
            return e && e._currentElement && e._currentElement.type ? e._currentElement.type.displayName ? e._currentElement.type.displayName : e._currentElement.type.name ? e._currentElement.type.name : e._currentElement.type : "default"
        }
            , m = t.getId = function(e) {
            return e._debugID ? {
                id: e._debugID,
                isDOM: !0
            } : e._domID ? {
                id: e._domID,
                isDOM: !0
            } : {
                id: 100 * e._mountOrder,
                isDOM: !1
            }
        }
    }
});
//# sourceMappingURL=installHook.js.map



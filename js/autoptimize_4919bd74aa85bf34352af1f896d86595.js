console.log('PixelYourSite Free version 9.2.2');
window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.1.0\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/thevilla-restaurant.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.8.9"
    }
};
! function(e, a, t) {
    var n, r, o, i = a.createElement("canvas"),
        p = i.getContext && i.getContext("2d");

    function s(e, t) {
        var a = String.fromCharCode;
        p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, e), 0, 0);
        e = i.toDataURL();
        return p.clearRect(0, 0, i.width, i.height), p.fillText(a.apply(this, t), 0, 0), e === i.toDataURL()
    }

    function c(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (o = Array("flag", "emoji"), t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, r = 0; r < o.length; r++) t.supports[o[r]] = function(e) {
        if (!p || !p.fillText) return !1;
        switch (p.textBaseline = "top", p.font = "600 32px Arial", e) {
            case "flag":
                return s([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) ? !1 : !s([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !s([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]);
            case "emoji":
                return !s([10084, 65039, 8205, 55357, 56613], [10084, 65039, 8203, 55357, 56613])
        }
        return !1
    }(o[r]), t.supports.everything = t.supports.everything && t.supports[o[r]], "flag" !== o[r] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[o[r]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
        t.DOMReady = !0
    }, t.supports.everything || (n = function() {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback()
    })), (n = t.source || {}).concatemoji ? c(n.concatemoji) : n.wpemoji && n.twemoji && (c(n.twemoji), c(n.wpemoji)))
}(window, document, window._wpemojiSettings);
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i]) return 1;
                    if (+n[i] < +o[i]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n), r
                },
                set: function(e) {
                    u(n), r = e
                }
            })
        }

        function o(e, t, r, n) {
            e[t] = function() {
                return u(n), r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            r = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
            }, s.fn.init.prototype = s.fn, s.find = function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(y, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return p.apply(this, r)
            }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function() {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }), o(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "jQuery.type is deprecated"), o(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function() {
            var e = a.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        }, e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
        }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;

        function j(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function(e) {
            var r = this;
            return s.each(e.match(v), function(e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), g.apply(this, arguments)
        };
        var Q, b = !(s.fn.toggleClass = function(t) {
                return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return b = !0, e = r.apply(this, arguments), b = !1, e
            })
        }), s.swap = function(e, t, r, n) {
            var o, i, a = {};
            for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
            return o
        }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        };
        var A, k, S, M, N = s.data;
        s.data = function(e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
        }, s.fx && (S = s.Tween.prototype.run, M = function(e) {
            return e
        }, s.Tween.prototype.run = function() {
            1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
        }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u(k), A
            },
            set: function(e) {
                u(k), A = e
            }
        }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
        }, s.each(["load", "unload", "error"], function(e, t) {
            s.fn[t] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            s.fn[r] = function(e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("'ready' event is deprecated")
            }
        }, s.fn.extend({
            bind: function(e, t, r) {
                return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
            },
            unbind: function(e, t) {
                return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function(e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
            },
            undelegate: function(e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function(e, t) {
                return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }

        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.htmlPrefilter = function(e) {
                return P(e), e.replace(O, "<$1></$2>")
            }
        }, s.htmlPrefilter = function(e) {
            return P(e), q(e)
        };
        var D, _ = s.fn.offset;
        s.fn.offset = function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, s.ajax && (D = s.param, s.param = function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        });
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function() {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
        }, s.Deferred && (E = s.Deferred, F = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], s.Deferred = function(e) {
            var i = E(),
                a = i.promise();
            return i.pipe = a.pipe = function() {
                var o = arguments;
                return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
                    s.each(F, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }, e && e.call(i, i), i
        }, s.Deferred.exceptionHook = E.exceptionHook), s
    });
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var e = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        t = "undefined" == typeof window ? {
            document: e,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        i = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function s(s, a) {
        var r = [],
            n = 0;
        if (s && !a && s instanceof i) return s;
        if (s)
            if ("string" == typeof s) {
                var o, l, d = s.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var h = "div";
                    for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = e.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) r.push(l.childNodes[n])
                } else
                    for (o = a || "#" !== s[0] || s.match(/[ .<>:~]/) ? (a || e).querySelectorAll(s.trim()) : [e.getElementById(s.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && r.push(o[n])
            } else if (s.nodeType || s === t || s === e) r.push(s);
        else if (s.length > 0 && s[0].nodeType)
            for (n = 0; n < s.length; n += 1) r.push(s[n]);
        return new i(r)
    }

    function a(e) {
        for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    s.fn = i.prototype, s.Class = i, s.Dom7 = i;
    var r = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        },
        attr: function(e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1)
                if (2 === i.length) this[s].setAttribute(e, t);
                else
                    for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var a = t[0],
                r = t[1],
                n = t[2],
                o = t[3];

            function l(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.unshift(e), s(t).is(r)) n.apply(t, i);
                    else
                        for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i)
                }
            }

            function d(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (a = (e = t)[0], n = e[1], o = e[2], r = void 0), o || (o = !1);
            for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (h = 0; h < p.length; h += 1) u.dom7LiveListeners || (u.dom7LiveListeners = []), u.dom7LiveListeners.push({
                        type: a,
                        listener: n,
                        proxyListener: l
                    }), u.addEventListener(p[h], l, o);
                else
                    for (h = 0; h < p.length; h += 1) u.dom7Listeners || (u.dom7Listeners = []), u.dom7Listeners.push({
                        type: a,
                        listener: n,
                        proxyListener: d
                    }), u.addEventListener(p[h], d, o)
            }
            return this
        },
        off: function() {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0],
                a = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                for (var d = 0; d < this.length; d += 1) {
                    var h = this[d];
                    if (a) {
                        if (h.dom7LiveListeners)
                            for (var p = 0; p < h.dom7LiveListeners.length; p += 1) r ? h.dom7LiveListeners[p].listener === r && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n) : h.dom7LiveListeners[p].type === o[l] && h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
                    } else if (h.dom7Listeners)
                        for (var c = 0; c < h.dom7Listeners.length; c += 1) r ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n) : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n)
                }
            return this
        },
        trigger: function() {
            for (var i = [], s = arguments.length; s--;) i[s] = arguments[s];
            for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
                for (var o = 0; o < this.length; o += 1) {
                    var l = void 0;
                    try {
                        l = new t.CustomEvent(a[n], {
                            detail: r,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        (l = e.createEvent("Event")).initEvent(a[n], !0, !0), l.detail = r
                    }
                    this[o].dom7EventData = i.filter(function(e, t) {
                        return t > 0
                    }), this[o].dispatchEvent(l), this[o].dom7EventData = [], delete this[o].dom7EventData
                }
            return this
        },
        transitionEnd: function(e) {
            var t, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function a(r) {
                if (r.target === this)
                    for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a)
            }
            if (e)
                for (t = 0; t < i.length; t += 1) s.on(i[t], a);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                var i = this[0],
                    s = i.getBoundingClientRect(),
                    a = e.body,
                    r = i.clientTop || a.clientTop || 0,
                    n = i.clientLeft || a.clientLeft || 0,
                    o = i === t ? t.scrollY : i.scrollTop,
                    l = i === t ? t.scrollX : i.scrollLeft;
                return {
                    top: s.top + o - r,
                    left: s.left + l - n
                }
            }
            return null
        },
        css: function(e, i) {
            var s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (var a in e) this[s].style[a] = e[a];
                    return this
                }
                if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(a) {
            var r, n, o = this[0];
            if (!o || void 0 === a) return !1;
            if ("string" == typeof a) {
                if (o.matches) return o.matches(a);
                if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
                if (o.msMatchesSelector) return o.msMatchesSelector(a);
                for (r = s(a), n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            if (a === e) return o === e;
            if (a === t) return o === t;
            if (a.nodeType || a instanceof i) {
                for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
                    if (r[n] === o) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, s = this.length;
            return new i(e > s - 1 ? [] : e < 0 ? (t = s + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var t, s = [], a = arguments.length; a--;) s[a] = arguments[a];
            for (var r = 0; r < s.length; r += 1) {
                t = s[r];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof t) {
                        var o = e.createElement("div");
                        for (o.innerHTML = t; o.firstChild;) this[n].appendChild(o.firstChild)
                    } else if (t instanceof i)
                    for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
                else this[n].appendChild(t)
            }
            return this
        },
        prepend: function(t) {
            var s, a;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var r = e.createElement("div");
                    for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1) this[s].insertBefore(r.childNodes[a], this[s].childNodes[0])
                } else if (t instanceof i)
                for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
            else this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e) ? new i([this[0].nextElementSibling]) : new i([]) : this[0].nextElementSibling ? new i([this[0].nextElementSibling]) : new i([]) : new i([])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.nextElementSibling;) {
                var r = a.nextElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && s(t.previousElementSibling).is(e) ? new i([t.previousElementSibling]) : new i([]) : t.previousElementSibling ? new i([t.previousElementSibling]) : new i([])
            }
            return new i([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new i([]);
            for (; a.previousElementSibling;) {
                var r = a.previousElementSibling;
                e ? s(r).is(e) && t.push(r) : t.push(r), a = r
            }
            return new i(t)
        },
        parent: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return s(a(t))
        },
        parents: function(e) {
            for (var t = [], i = 0; i < this.length; i += 1)
                for (var r = this[i].parentNode; r;) e ? s(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
            return s(a(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
            return new i(t)
        },
        children: function(e) {
            for (var t = [], r = 0; r < this.length; r += 1)
                for (var n = this[r].childNodes, o = 0; o < n.length; o += 1) e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
            return new i(a(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, a;
            for (i = 0; i < e.length; i += 1) {
                var r = s(e[i]);
                for (a = 0; a < r.length; a += 1) this[this.length] = r[a], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(r).forEach(function(e) {
        s.fn[e] = r[e]
    });
    var n, o, l, d = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, i) {
                var s, a, r;
                void 0 === i && (i = "x");
                var n = t.getComputedStyle(e, null);
                return t.WebKitCSSMatrix ? ((a = n.transform || n.webkitTransform).split(",").length > 6 && (a = a.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), r = new t.WebKitCSSMatrix("none" === a ? "" : a)) : s = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), a || 0
            },
            parseUrlQuery: function(e) {
                var i, s, a, r, n = {},
                    o = e || t.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, i = 0; i < r; i += 1) a = s[i].replace(/#\S+/g, "").split("="), n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return n
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                    var a = e[s];
                    if (void 0 !== a && null !== a)
                        for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                h = Object.getOwnPropertyDescriptor(a, l);
                            void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l])
                        }
                }
                return i
            }
        },
        h = (l = e.createElement("div"), {
            touch: t.Modernizr && !0 === t.Modernizr.touch || !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
            pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
            prefixedPointerEvents: !!t.navigator.msPointerEnabled,
            transition: (o = l.style, "transition" in o || "webkitTransition" in o || "MozTransition" in o),
            transforms3d: t.Modernizr && !0 === t.Modernizr.csstransforms3d || (n = l.style, "webkitPerspective" in n || "MozPerspective" in n || "OPerspective" in n || "MsPerspective" in n || "perspective" in n),
            flexbox: function() {
                for (var e = l.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1)
                    if (t[i] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
            passiveListener: function() {
                var e = !1;
                try {
                    var i = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    t.addEventListener("testPassiveListener", null, i)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in t
        }),
        p = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        c = {
            components: {
                configurable: !0
            }
        };
    p.prototype.on = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        }), s
    }, p.prototype.once = function(e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        return s.on(e, function i() {
            for (var a = [], r = arguments.length; r--;) a[r] = arguments[r];
            t.apply(s, a), s.off(e, i)
        }, i)
    }, p.prototype.off = function(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function(e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function(s, a) {
                s === t && i.eventsListeners[e].splice(a, 1)
            })
        }), i) : i
    }, p.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        return r.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r), (Array.isArray(i) ? i : i.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(a, s)
                })
            }
        }), r) : r
    }, p.prototype.useModulesParams = function(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i];
            s.params && d.extend(e, s.params)
        })
    }, p.prototype.useModules = function(e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function(i) {
            var s = t.modules[i],
                a = e[i] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var i = s.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), s.on && t.on && Object.keys(s.on).forEach(function(e) {
                t.on(e, s.on[e])
            }), s.create && s.create.bind(t)(a)
        })
    }, c.components.set = function(e) {
        this.use && this.use(e)
    }, p.installModule = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
        return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function(t) {
            s.prototype[t] = e.proto[t]
        }), e.static && Object.keys(e.static).forEach(function(t) {
            s[t] = e.static[t]
        }), e.install && e.install.apply(s, t), s
    }, p.use = function(e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return s.installModule(e)
        }), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(p, c);
    var u = {
        updateSize: function() {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this.params,
                i = this.$wrapperEl,
                s = this.size,
                a = this.rtlTranslate,
                r = this.wrongRTL,
                n = i.children("." + this.params.slideClass),
                o = this.virtual && e.virtual.enabled ? this.virtual.slides.length : n.length,
                l = [],
                p = [],
                c = [],
                u = e.slidesOffsetBefore;
            "function" == typeof u && (u = e.slidesOffsetBefore.call(this));
            var v = e.slidesOffsetAfter;
            "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
            var f = o,
                m = this.snapGrid.length,
                g = this.snapGrid.length,
                b = e.spaceBetween,
                w = -u,
                y = 0,
                x = 0;
            if (void 0 !== s) {
                var E, T;
                "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), this.virtualSize = -b, a ? n.css({
                    marginLeft: "",
                    marginTop: ""
                }) : n.css({
                    marginRight: "",
                    marginBottom: ""
                }), e.slidesPerColumn > 1 && (E = Math.floor(o / e.slidesPerColumn) === o / this.params.slidesPerColumn ? o : Math.ceil(o / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                for (var S, C = e.slidesPerColumn, M = E / C, z = M - (e.slidesPerColumn * M - o), k = 0; k < o; k += 1) {
                    T = 0;
                    var P = n.eq(k);
                    if (e.slidesPerColumn > 1) {
                        var $ = void 0,
                            L = void 0,
                            I = void 0;
                        "column" === e.slidesPerColumnFill ? (I = k - (L = Math.floor(k / C)) * C, (L > z || L === z && I === C - 1) && (I += 1) >= C && (I = 0, L += 1), $ = L + I * E / C, P.css({
                            "-webkit-box-ordinal-group": $,
                            "-moz-box-ordinal-group": $,
                            "-ms-flex-order": $,
                            "-webkit-order": $,
                            order: $
                        })) : L = k - (I = Math.floor(k / M)) * M, P.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== I && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", L).attr("data-swiper-row", I)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === e.slidesPerView) {
                            var D = t.getComputedStyle(P[0], null);
                            T = this.isHorizontal() ? P[0].getBoundingClientRect().width + parseFloat(D.getPropertyValue("margin-left")) + parseFloat(D.getPropertyValue("margin-right")) : P[0].getBoundingClientRect().height + parseFloat(D.getPropertyValue("margin-top")) + parseFloat(D.getPropertyValue("margin-bottom")), e.roundLengths && (T = Math.floor(T))
                        } else T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), n[k] && (this.isHorizontal() ? n[k].style.width = T + "px" : n[k].style.height = T + "px");
                        n[k] && (n[k].swiperSlideSize = T), c.push(T), e.centeredSlides ? (w = w + T / 2 + y / 2 + b, 0 === y && 0 !== k && (w = w - s / 2 - b), 0 === k && (w = w - s / 2 - b), Math.abs(w) < .001 && (w = 0), x % e.slidesPerGroup == 0 && l.push(w), p.push(w)) : (x % e.slidesPerGroup == 0 && l.push(w), p.push(w), w = w + T + b), this.virtualSize += T + b, y = T, x += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, s) + v, a && r && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }), h.flexbox && !e.setWrapperSize || (this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    })), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * E, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? i.css({
                        width: this.virtualSize + e.spaceBetween + "px"
                    }) : i.css({
                        height: this.virtualSize + e.spaceBetween + "px"
                    }), e.centeredSlides)) {
                    S = [];
                    for (var O = 0; O < l.length; O += 1) l[O] < this.virtualSize + l[0] && S.push(l[O]);
                    l = S
                }
                if (!e.centeredSlides) {
                    S = [];
                    for (var A = 0; A < l.length; A += 1) l[A] <= this.virtualSize - s && S.push(l[A]);
                    l = S, Math.floor(this.virtualSize - s) - Math.floor(l[l.length - 1]) > 1 && l.push(this.virtualSize - s)
                }
                0 === l.length && (l = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? a ? n.css({
                    marginLeft: b + "px"
                }) : n.css({
                    marginRight: b + "px"
                }) : n.css({
                    marginBottom: b + "px"
                })), d.extend(this, {
                    slides: n,
                    snapGrid: l,
                    slidesGrid: p,
                    slidesSizesGrid: c
                }), o !== f && this.emit("slidesLengthChange"), l.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), p.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, i = [],
                s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                    var a = this.activeIndex + t;
                    if (a > this.slides.length) break;
                    i.push(this.slides.eq(a)[0])
                } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var r = i[t].offsetHeight;
                    s = r > s ? r : s
                } s && this.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params,
                i = this.slides,
                s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass);
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r],
                        o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset),
                            d = l + this.slidesSizesGrid[r];
                        (l >= 0 && l < this.size || d > 0 && d <= this.size || l <= 0 && d >= this.size) && i.eq(r).addClass(t.slideVisibleClass)
                    }
                    n.progress = s ? -o : o
                }
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this.translate || 0);
            var t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                s = this.progress,
                a = this.isBeginning,
                r = this.isEnd,
                n = a,
                o = r;
            0 === i ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / i) <= 0, r = s >= 1), d.extend(this, {
                progress: s,
                isBeginning: a,
                isEnd: r
            }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), a && !n && this.emit("reachBeginning toEdge"), r && !o && this.emit("reachEnd toEdge"), (n && !a || o && !r) && this.emit("fromEdge"), this.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this.slides,
                i = this.params,
                s = this.$wrapperEl,
                a = this.activeIndex,
                r = this.realIndex,
                n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate,
                s = this.slidesGrid,
                a = this.snapGrid,
                r = this.params,
                n = this.activeIndex,
                o = this.realIndex,
                l = this.snapIndex,
                h = e;
            if (void 0 === h) {
                for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);
                r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0)
            }
            if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1), h !== n) {
                var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                d.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: n,
                    activeIndex: h
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), this.emit("slideChange")
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this.params,
                i = s(e.target).closest("." + t.slideClass)[0],
                a = !1;
            if (i)
                for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
            if (!i || !a) return this.clickedSlide = void 0, void(this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = s(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var v = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                i = this.rtlTranslate,
                s = this.translate,
                a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            var r = d.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            var i = this.rtlTranslate,
                s = this.params,
                a = this.$wrapperEl,
                r = this.progress,
                n = 0,
                o = 0;
            this.isHorizontal() ? n = i ? -e : e : o = e, s.roundLengths && (n = Math.floor(n), o = Math.floor(o)), s.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)") : a.transform("translate(" + n + "px, " + o + "px)")), this.translate = this.isHorizontal() ? n : o;
            var l = this.maxTranslate() - this.minTranslate();
            (0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var f = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.params,
                a = this.previousIndex;
            s.autoHeight && this.updateAutoHeight();
            var r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void this.emit("slideResetTransitionStart");
                this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex,
                s = this.previousIndex;
            this.animating = !1, this.setTransition(0);
            var a = t;
            if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
            }
        }
    };
    var m = {
        slideTo: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = this,
                r = e;
            r < 0 && (r = 0);
            var n = a.params,
                o = a.snapGrid,
                l = a.slidesGrid,
                d = a.previousIndex,
                p = a.activeIndex,
                c = a.rtlTranslate,
                u = a.$wrapperEl;
            if (a.animating && n.preventIntercationOnTransition) return !1;
            var v = Math.floor(r / n.slidesPerGroup);
            v >= o.length && (v = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart");
            var f, m = -o[v];
            if (a.updateProgress(m), n.normalizeSlideIndex)
                for (var g = 0; g < l.length; g += 1) - Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
            if (a.initialized && r !== p) {
                if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
                if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1
            }
            return f = r > p ? "next" : r < p ? "prev" : "reset", c && -m === a.translate || !c && m === a.translate ? (a.updateActiveIndex(r), n.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== n.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)), !1) : (0 !== t && h.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.animating || (a.animating = !0, u.transitionEnd(function() {
                a && !a.destroyed && a.transitionEnd(i, f)
            }))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(r), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, s), a.transitionStart(i, f), a.transitionEnd(i, f)), !0)
        },
        slideToLoop: function(e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        },
        slideNext: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating;
            return s.loop ? !a && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params,
                a = this.animating,
                r = this.snapGrid,
                n = this.slidesGrid,
                o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            var l, d = o ? this.translate : -this.translate,
                h = (r[r.indexOf(d)], r[r.indexOf(d) - 1]);
            return h && (l = n.indexOf(h)) < 0 && (l = this.activeIndex - 1), this.slideTo(l, e, t, i)
        },
        slideReset: function(e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.activeIndex,
                a = Math.floor(s / this.params.slidesPerGroup);
            if (a < this.snapGrid.length - 1) {
                var r = this.rtlTranslate ? this.translate : -this.translate,
                    n = this.snapGrid[a];
                r - n > (this.snapGrid[a + 1] - n) / 2 && (s = this.params.slidesPerGroup)
            }
            return this.slideTo(s, e, t, i)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                i = t.params,
                a = t.$wrapperEl,
                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                n = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                    t.slideTo(n)
                })) : t.slideTo(n) : n > t.slides.length - r ? (t.loopFix(), n = a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function() {
                    t.slideTo(n)
                })) : t.slideTo(n)
            } else t.slideTo(n)
        }
    };
    var g = {
        loopCreate: function() {
            var t = this,
                i = t.params,
                a = t.$wrapperEl;
            a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
            var r = a.children("." + i.slideClass);
            if (i.loopFillGroupWithBlank) {
                var n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                if (n !== i.slidesPerGroup) {
                    for (var o = 0; o < n; o += 1) {
                        var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                        a.append(l)
                    }
                    r = a.children("." + i.slideClass)
                }
            }
            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
            var d = [],
                h = [];
            r.each(function(e, i) {
                var a = s(i);
                e < t.loopedSlides && h.push(i), e < r.length && e >= r.length - t.loopedSlides && d.push(i), a.attr("data-swiper-slide-index", e)
            });
            for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
            for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this.params,
                i = this.activeIndex,
                s = this.slides,
                a = this.loopedSlides,
                r = this.allowSlidePrev,
                n = this.allowSlideNext,
                o = this.snapGrid,
                l = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var d = -o[i] - this.getTranslate();
            i < a ? (e = s.length - 3 * a + i, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d)) : ("auto" === t.slidesPerView && i >= 2 * a || i > s.length - 2 * t.slidesPerView) && (e = -s.length + i + a, e += a, this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
            this.allowSlidePrev = r, this.allowSlideNext = n
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var b = {
        setGrabCursor: function(e) {
            if (!h.touch && this.params.simulateTouch) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            h.touch || (this.el.style.cursor = "")
        }
    };
    var w = {
            appendSlide: function(e) {
                var t = this.$wrapperEl,
                    i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
                else t.append(e);
                i.loop && this.loopCreate(), i.observer && h.observer || this.update()
            },
            prependSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && this.loopDestroy();
                var a = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                    a = s + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1)
            },
            removeSlide: function(e) {
                var t = this.params,
                    i = this.$wrapperEl,
                    s = this.activeIndex;
                t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var a, r = s;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                    r = Math.max(r, 0)
                } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
                t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        y = function() {
            var i = t.navigator.userAgent,
                s = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: t.cordova || t.phonegap,
                    phonegap: t.cordova || t.phonegap
                },
                a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                n = i.match(/(iPad).*OS\s([\d_]+)/),
                o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (s.os = "windows", s.osVersion = a[2], s.windows = !0), r && !a && (s.os = "android", s.osVersion = r[2], s.android = !0, s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0), (n || l || o) && (s.os = "ios", s.ios = !0), l && !o && (s.osVersion = l[2].replace(/_/g, "."), s.iphone = !0), n && (s.osVersion = n[2].replace(/_/g, "."), s.ipad = !0), o && (s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, s.iphone = !0), s.ios && s.osVersion && i.indexOf("Version/") >= 0 && "10" === s.osVersion.split(".")[0] && (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]), s.desktop = !(s.os || s.android || s.webView), s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i), s.os && "ios" === s.os) {
                var d = s.osVersion.split("."),
                    h = e.querySelector('meta[name="viewport"]');
                s.minimalUi = !s.webView && (o || l) && (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return s.pixelRatio = t.devicePixelRatio || 1, s
        }();

    function x() {
        var e = this.params,
            t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext,
                s = this.allowSlidePrev,
                a = this.snapGrid;
            if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
            } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
            this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }
    var E = {
        attachEvents: function() {
            var i = this.params,
                a = this.touchEvents,
                r = this.el,
                n = this.wrapperEl;
            this.onTouchStart = function(i) {
                var a = this.touchEventsData,
                    r = this.params,
                    n = this.touches;
                if (!this.animating || !r.preventIntercationOnTransition) {
                    var o = i;
                    if (o.originalEvent && (o = o.originalEvent), a.isTouchEvent = "touchstart" === o.type, (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved))
                        if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                        else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
                        n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        var l = n.currentX,
                            h = n.currentY;
                        if (!(y.ios && !y.cordova && r.iOSEdgeSwipeDetection && l <= r.iOSEdgeSwipeThreshold && l >= t.screen.width - r.iOSEdgeSwipeThreshold)) {
                            if (d.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), n.startX = l, n.startY = h, a.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1), "touchstart" !== o.type) {
                                var p = !0;
                                s(o.target).is(a.formElements) && (p = !1), e.activeElement && s(e.activeElement).is(a.formElements) && e.activeElement !== o.target && e.activeElement.blur(), p && this.allowTouchMove && o.preventDefault()
                            }
                            this.emit("touchStart", o)
                        }
                    }
                }
            }.bind(this), this.onTouchMove = function(t) {
                var i = this.touchEventsData,
                    a = this.params,
                    r = this.touches,
                    n = this.rtlTranslate,
                    o = t;
                if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "mousemove" !== o.type) {
                        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                            h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                        if (o.preventedByNestedSwiper) return r.startX = l, void(r.startY = h);
                        if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (d.extend(r, {
                            startX: l,
                            startY: h,
                            currentX: l,
                            currentY: h
                        }), i.touchStartTime = d.now()));
                        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                            if (this.isVertical()) {
                                if (h < r.startY && this.translate <= this.maxTranslate() || h > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                            } else if (l < r.startX && this.translate <= this.maxTranslate() || l > r.startX && this.translate >= this.minTranslate()) return;
                        if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                        if (i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
                            r.currentX = l, r.currentY = h;
                            var p, c = r.currentX - r.startX,
                                u = r.currentY - r.startY;
                            if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                            else if (i.startMoving) {
                                this.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), i.isMoved || (a.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !a.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), i.isMoved = !0;
                                var v = this.isHorizontal() ? c : u;
                                r.diff = v, v *= a.touchRatio, n && (v = -v), this.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
                                var f = !0,
                                    m = a.resistanceRatio;
                                if (a.touchReleaseOnEdges && (m = 0), v > 0 && i.currentTranslate > this.minTranslate() ? (f = !1, a.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m))) : v < 0 && i.currentTranslate < this.maxTranslate() && (f = !1, a.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))), f && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.threshold > 0) {
                                    if (!(Math.abs(v) > a.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                }
                                a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && (0 === i.velocities.length && i.velocities.push({
                                    position: r[this.isHorizontal() ? "startX" : "startY"],
                                    time: i.touchStartTime
                                }), i.velocities.push({
                                    position: r[this.isHorizontal() ? "currentX" : "currentY"],
                                    time: d.now()
                                })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o)
            }.bind(this), this.onTouchEnd = function(e) {
                var t = this,
                    i = t.touchEventsData,
                    s = t.params,
                    a = t.touches,
                    r = t.rtlTranslate,
                    n = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    h = e;
                if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = d.now(),
                    u = c - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap", h), u < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(function() {
                        t && !t.destroyed && t.emit("click", h)
                    }, 300)), u < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))), i.lastClickTime = d.now(), d.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var v = i.velocities.pop(),
                                f = i.velocities.pop(),
                                m = v.position - f.position,
                                g = v.time - f.time;
                            t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var b = 1e3 * s.freeModeMomentumRatio,
                            w = t.velocity * b,
                            y = t.translate + w;
                        r && (y = -y);
                        var x, E, T = !1,
                            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);
                        else if (s.freeModeSticky) {
                            for (var C, M = 0; M < l.length; M += 1)
                                if (l[M] > -y) {
                                    C = M;
                                    break
                                } y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                        }
                        if (E && t.once("transitionEnd", function() {
                                t.loopFix()
                            }), 0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (s.freeModeSticky) return void t.slideToClosest();
                        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(x), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (s.freeModeSticky) return void t.slideToClosest();
                    (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var z = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup) void 0 !== o[P + s.slidesPerGroup] ? p >= o[P] && p < o[P + s.slidesPerGroup] && (z = P, k = o[P + s.slidesPerGroup] - o[P]) : p >= o[P] && (z = P, k = o[o.length - 1] - o[o.length - 2]);
                    var $ = (p - o[z]) / k;
                    if (u > s.longSwipesMs) {
                        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && ($ >= s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z)), "prev" === t.swipeDirection && ($ > 1 - s.longSwipesRatio ? t.slideTo(z + s.slidesPerGroup) : t.slideTo(z))
                    } else {
                        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(z + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(z)
                    }
                }
            }.bind(this), this.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(this);
            var o = "container" === i.touchEventsTarget ? r : n,
                l = !!i.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var p = !("touchstart" !== a.start || !h.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    o.addEventListener(a.start, this.onTouchStart, p), o.addEventListener(a.move, this.onTouchMove, h.passiveListener ? {
                        passive: !1,
                        capture: l
                    } : l), o.addEventListener(a.end, this.onTouchEnd, p)
                }(i.simulateTouch && !y.ios && !y.android || i.simulateTouch && !h.touch && y.ios) && (o.addEventListener("mousedown", this.onTouchStart, !1), e.addEventListener("mousemove", this.onTouchMove, l), e.addEventListener("mouseup", this.onTouchEnd, !1))
            } else o.addEventListener(a.start, this.onTouchStart, !1), e.addEventListener(a.move, this.onTouchMove, l), e.addEventListener(a.end, this.onTouchEnd, !1);
            (i.preventClicks || i.preventClicksPropagation) && o.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", x, !0)
        },
        detachEvents: function() {
            var t = this.params,
                i = this.touchEvents,
                s = this.el,
                a = this.wrapperEl,
                r = "container" === t.touchEventsTarget ? s : a,
                n = !!t.nested;
            if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
                if (h.touch) {
                    var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(i.start, this.onTouchStart, o), r.removeEventListener(i.move, this.onTouchMove, n), r.removeEventListener(i.end, this.onTouchEnd, o)
                }(t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), e.removeEventListener("mousemove", this.onTouchMove, n), e.removeEventListener("mouseup", this.onTouchEnd, !1))
            } else r.removeEventListener(i.start, this.onTouchStart, !1), e.removeEventListener(i.move, this.onTouchMove, n), e.removeEventListener(i.end, this.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", x)
        }
    };
    var T = {
            setBreakpoint: function() {
                var e = this.activeIndex,
                    t = this.loopedSlides;
                void 0 === t && (t = 0);
                var i = this.params,
                    s = i.breakpoints;
                if (s && (!s || 0 !== Object.keys(s).length)) {
                    var a = this.getBreakpoint(s);
                    if (a && this.currentBreakpoint !== a) {
                        var r = a in s ? s[a] : this.originalParams,
                            n = i.loop && r.slidesPerView !== i.slidesPerView;
                        d.extend(this.params, r), d.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }), this.currentBreakpoint = a, n && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", r)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var i = !1,
                        s = [];
                    Object.keys(e).forEach(function(e) {
                        s.push(e)
                    }), s.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var a = 0; a < s.length; a += 1) {
                        var r = s[a];
                        r >= t.innerWidth && !i && (i = r)
                    }
                    return i || "max"
                }
            }
        },
        S = function() {
            return {
                isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
                isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            };
            var e
        }();
    var C = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventIntercationOnTransition: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        M = {
            update: u,
            translate: v,
            transition: f,
            slide: m,
            loop: g,
            grabCursor: b,
            manipulation: w,
            events: E,
            breakpoints: T,
            checkOverflow: {
                checkOverflow: function() {
                    var e = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var e = this.classNames,
                        t = this.params,
                        i = this.rtl,
                        s = this.$el,
                        a = [];
                    a.push(t.direction), t.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), S.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction), a.forEach(function(i) {
                        e.push(t.containerModifierClass + i)
                    }), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, i, s, a, r, n) {
                    var o;

                    function l() {
                        n && n()
                    }
                    e.complete && r ? l() : i ? ((o = new t.Image).onload = l, o.onerror = l, a && (o.sizes = a), s && (o.srcset = s), i && (o.src = i)) : l()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                        var s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        z = {},
        k = function(e) {
            function t() {
                for (var i, a, r, n = [], o = arguments.length; o--;) n[o] = arguments[o];
                1 === n.length && n[0].constructor && n[0].constructor === Object ? r = n[0] : (a = (i = n)[0], r = i[1]), r || (r = {}), r = d.extend({}, r), a && !r.el && (r.el = a), e.call(this, r), Object.keys(M).forEach(function(e) {
                    Object.keys(M[e]).forEach(function(i) {
                        t.prototype[i] || (t.prototype[i] = M[e][i])
                    })
                });
                var l = this;
                void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function(e) {
                    var t = l.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0],
                            s = t.params[i];
                        if ("object" != typeof s) return;
                        if (!(i in r && "enabled" in s)) return;
                        !0 === r[i] && (r[i] = {
                            enabled: !0
                        }), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {
                            enabled: !1
                        })
                    }
                });
                var p = d.extend({}, C);
                l.useModulesParams(p), l.params = d.extend({}, p, z, r), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, r), l.$ = s;
                var c = s(l.params.el);
                if (a = c[0]) {
                    if (c.length > 1) {
                        var u = [];
                        return c.each(function(e, i) {
                            var s = d.extend({}, r, {
                                el: i
                            });
                            u.push(new t(s))
                        }), u
                    }
                    a.swiper = l, c.data("swiper", l);
                    var v, f, m = c.children("." + l.params.wrapperClass);
                    return d.extend(l, {
                        $el: c,
                        el: a,
                        $wrapperEl: m,
                        wrapperEl: m[0],
                        classNames: [],
                        slides: s(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === l.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === l.params.direction
                        },
                        rtl: "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
                        rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
                        wrongRTL: "-webkit-box" === m.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEvents: (v = ["touchstart", "touchmove", "touchend"], f = ["mousedown", "mousemove", "mouseup"], h.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                            start: v[0],
                            move: v[1],
                            end: v[2]
                        }, l.touchEventsDesktop = {
                            start: f[0],
                            move: f[1],
                            end: f[2]
                        }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: d.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.useModules(), l.params.init && l.init(), l
                }
            }
            e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
            var i = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return t.prototype.slidesPerViewDynamic = function() {
                var e = this.params,
                    t = this.slides,
                    i = this.slidesGrid,
                    s = this.size,
                    a = this.activeIndex,
                    r = 1;
                if (e.centeredSlides) {
                    for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                    for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
                } else
                    for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
                return r
            }, t.prototype.update = function() {
                var e = this;
                if (e && !e.destroyed) {
                    var t = e.snapGrid,
                        i = e.params;
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }

                function s() {
                    var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
            }, t.prototype.init = function() {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, t.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    a = i.$el,
                    r = i.$wrapperEl,
                    n = i.slides;
                i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0
            }, t.extendDefaults = function(e) {
                d.extend(z, e)
            }, i.extendedDefaults.get = function() {
                return z
            }, i.defaults.get = function() {
                return C
            }, i.Class.get = function() {
                return e
            }, i.$.get = function() {
                return s
            }, Object.defineProperties(t, i), t
        }(p),
        P = {
            name: "device",
            proto: {
                device: y
            },
            static: {
                device: y
            }
        },
        $ = {
            name: "support",
            proto: {
                support: h
            },
            static: {
                support: h
            }
        },
        L = {
            name: "browser",
            proto: {
                browser: S
            },
            static: {
                browser: S
            }
        },
        I = {
            name: "resize",
            create: function() {
                var e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    t.addEventListener("resize", this.resize.resizeHandler), t.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    t.removeEventListener("resize", this.resize.resizeHandler), t.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        D = {
            func: t.MutationObserver || t.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var i = this,
                    s = new(0, D.func)(function(e) {
                        e.forEach(function(e) {
                            i.emit("observerUpdate", e)
                        })
                    });
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(s)
            },
            init: function() {
                if (h.observer && this.params.observer) {
                    if (this.params.observeParents)
                        for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {
                        childList: !1
                    }), this.observer.attach(this.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        O = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1
            },
            create: function() {
                d.extend(this, {
                    observer: {
                        init: D.init.bind(this),
                        attach: D.attach.bind(this),
                        destroy: D.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        A = {
            update: function(e) {
                var t = this,
                    i = t.params,
                    s = i.slidesPerView,
                    a = i.slidesPerGroup,
                    r = i.centeredSlides,
                    n = t.virtual,
                    o = n.from,
                    l = n.to,
                    h = n.slides,
                    p = n.slidesGrid,
                    c = n.renderSlide,
                    u = n.offset;
                t.updateActiveIndex();
                var v, f, m, g = t.activeIndex || 0;
                v = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a, m = Math.floor(s / 2) + a) : (f = s + (a - 1), m = a);
                var b = Math.max((g || 0) - m, 0),
                    w = Math.min((g || 0) + f, h.length - 1),
                    y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

                function x() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (d.extend(t.virtual, {
                        from: b,
                        to: w,
                        offset: y,
                        slidesGrid: t.slidesGrid
                    }), o === b && l === w && !e) return t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: y,
                    from: b,
                    to: w,
                    slides: function() {
                        for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void x();
                var E = [],
                    T = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var S = o; S <= l; S += 1)(S < b || S > w) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < h.length; C += 1) C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
                T.forEach(function(e) {
                    t.$wrapperEl.append(c(h[e], e))
                }), E.sort(function(e, t) {
                    return e < t
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(c(h[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(v, y + "px"), x()
            },
            renderSlide: function(e, t) {
                var i = this.params.virtual;
                if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                var a = i.renderSlide ? s(i.renderSlide.call(this, e, t)) : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = a), a
            },
            appendSlide: function(e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function(e) {
                if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                    var t = this.virtual.cache,
                        i = {};
                    Object.keys(t).forEach(function(e) {
                        i[e + 1] = t[e]
                    }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        },
        G = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null
                }
            },
            create: function() {
                d.extend(this, {
                    virtual: {
                        update: A.update.bind(this),
                        appendSlide: A.appendSlide.bind(this),
                        prependSlide: A.prependSlide.bind(this),
                        renderSlide: A.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {
                            watchSlidesProgress: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        H = {
            handle: function(i) {
                var s = this.rtlTranslate,
                    a = i;
                a.originalEvent && (a = a.originalEvent);
                var r = a.keyCode || a.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || e.activeElement && e.activeElement.nodeName && ("input" === e.activeElement.nodeName.toLowerCase() || "textarea" === e.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var o = t.innerWidth,
                            l = t.innerHeight,
                            d = this.$el.offset();
                        s && (d.left -= this.$el[0].scrollLeft);
                        for (var h = [
                                [d.left, d.top],
                                [d.left + this.width, d.top],
                                [d.left, d.top + this.height],
                                [d.left + this.width, d.top + this.height]
                            ], p = 0; p < h.length; p += 1) {
                            var c = h[p];
                            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !s || 37 === r && s) && this.slideNext(), (37 === r && !s || 39 === r && s) && this.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && this.slideNext(), 38 === r && this.slidePrev()), this.emit("keyPress", r)
                }
            },
            enable: function() {
                this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        N = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                d.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: H.enable.bind(this),
                        disable: H.disable.bind(this),
                        handle: H.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var B = {
            lastScrollTime: d.now(),
            event: t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var t = "onwheel" in e;
                if (!t) {
                    var i = e.createElement("div");
                    i.setAttribute("onwheel", "return;"), t = "function" == typeof i.onwheel
                }
                return !t && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (t = e.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: s,
                    pixelY: a
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var i = e,
                    s = this,
                    a = s.params.mousewheel;
                if (!s.mouseEntered && !a.releaseOnEdges) return !0;
                i.originalEvent && (i = i.originalEvent);
                var r = 0,
                    n = s.rtlTranslate ? -1 : 1,
                    o = B.normalize(i);
                if (a.forceToAxis)
                    if (s.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * n
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                if (0 === r) return !0;
                if (a.invert && (r = -r), s.params.freeMode) {
                    s.params.loop && s.loopFix();
                    var l = s.getTranslate() + r * a.sensitivity,
                        h = s.isBeginning,
                        p = s.isEnd;
                    if (l >= s.minTranslate() && (l = s.minTranslate()), l <= s.maxTranslate() && (l = s.maxTranslate()), s.setTransition(0), s.setTranslate(l), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!h && s.isBeginning || !p && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function() {
                            s.slideToClosest()
                        }, 300)), s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(), l === s.minTranslate() || l === s.maxTranslate()) return !0
                } else {
                    if (d.now() - s.mousewheel.lastScrollTime > 60)
                        if (r < 0)
                            if (s.isEnd && !s.params.loop || s.animating) {
                                if (a.releaseOnEdges) return !0
                            } else s.slideNext(), s.emit("scroll", i);
                    else if (s.isBeginning && !s.params.loop || s.animating) {
                        if (a.releaseOnEdges) return !0
                    } else s.slidePrev(), s.emit("scroll", i);
                    s.mousewheel.lastScrollTime = (new t.Date).getTime()
                }
                return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
            },
            enable: function() {
                if (!B.event) return !1;
                if (this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.on("mouseenter", this.mousewheel.handleMouseEnter), e.on("mouseleave", this.mousewheel.handleMouseLeave), e.on(B.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function() {
                if (!B.event) return !1;
                if (!this.mousewheel.enabled) return !1;
                var e = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)), e.off(B.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        },
        X = {
            update: function() {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        s = t.$prevEl;
                    s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            },
            init: function() {
                var e, t, i = this,
                    a = i.params.navigation;
                (a.nextEl || a.prevEl) && (a.nextEl && (e = s(a.nextEl), i.params.uniqueNavElements && "string" == typeof a.nextEl && e.length > 1 && 1 === i.$el.find(a.nextEl).length && (e = i.$el.find(a.nextEl))), a.prevEl && (t = s(a.prevEl), i.params.uniqueNavElements && "string" == typeof a.prevEl && t.length > 1 && 1 === i.$el.find(a.prevEl).length && (t = i.$el.find(a.prevEl))), e && e.length > 0 && e.on("click", function(e) {
                    e.preventDefault(), i.isEnd && !i.params.loop || i.slideNext()
                }), t && t.length > 0 && t.on("click", function(e) {
                    e.preventDefault(), i.isBeginning && !i.params.loop || i.slidePrev()
                }), d.extend(i.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    i = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
            }
        },
        Y = {
            update: function() {
                var e = this.rtl,
                    t = this.params.pagination;
                if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var i, a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        r = this.pagination.$el,
                        n = this.params.loop ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== this.params.paginationType && (i = n + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o, l, d, h = this.pagination.bullets;
                        if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), r.length > 1) h.each(function(e, a) {
                            var r = s(a),
                                n = r.index();
                            n === i && r.addClass(t.bulletActiveClass), t.dynamicBullets && (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"), n === o && r.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), n === l && r.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"))
                        });
                        else if (h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets) {
                            for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");
                            p.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), c.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next")
                        }
                        if (t.dynamicBullets) {
                            var v = Math.min(h.length, t.dynamicMainBullets + 4),
                                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                                m = e ? "right" : "left";
                            h.css(this.isHorizontal() ? m : "top", f + "px")
                        }
                    }
                    if ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)), "progressbar" === t.type) {
                        var g;
                        g = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                        var b = (i + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? w = b : y = b, r.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(this.params.speed)
                    }
                    "custom" === t.type && t.renderCustom ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0])) : this.emit("paginationUpdate", this, r[0]), r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)
                }
            },
            render: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el,
                        s = "";
                    if ("bullets" === e.type) {
                        for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            },
            init: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el) {
                    var i = s(t.el);
                    0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function(t) {
                        t.preventDefault();
                        var i = s(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), d.extend(e.pagination, {
                        $el: i,
                        el: i[0]
                    }))
                }
            },
            destroy: function() {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        },
        V = {
            setTranslate: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.rtlTranslate,
                        i = this.progress,
                        s = e.dragSize,
                        a = e.trackSize,
                        r = e.$dragEl,
                        n = e.$el,
                        o = this.params.scrollbar,
                        l = s,
                        d = (a - s) * i;
                    t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (h.transforms3d ? r.transform("translate3d(" + d + "px, 0, 0)") : r.transform("translateX(" + d + "px)"), r[0].style.width = l + "px") : (h.transforms3d ? r.transform("translate3d(0px, " + d + "px, 0)") : r.transform("translateY(" + d + "px)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                        n[0].style.opacity = 0, n.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar,
                        t = e.$dragEl,
                        i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        r = this.size / this.virtualSize,
                        n = r * (a / this.size);
                    s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), d.extend(e, {
                        trackSize: a,
                        divider: r,
                        moveDivider: n,
                        dragSize: s
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, i = this.scrollbar,
                    s = this.rtlTranslate,
                    a = i.$el,
                    r = i.dragSize,
                    n = i.trackSize;
                t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar,
                    s = this.$wrapperEl,
                    a = i.$el,
                    r = i.$dragEl;
                this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    i = this.$wrapperEl,
                    s = t.$el,
                    a = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this.params.scrollbar,
                    i = this.scrollbar.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function() {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
            },
            enableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEvents,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!h.passiveListener || !a.passiveListener) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!h.passiveListener || !a.passiveListener) && {
                            passive: !0,
                            capture: !1
                        };
                    h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.addEventListener(i.start, this.scrollbar.onDragStart, n), r.addEventListener(i.move, this.scrollbar.onDragMove, n), r.addEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.addEventListener("mousedown", this.scrollbar.onDragStart, n), e.addEventListener("mousemove", this.scrollbar.onDragMove, n), e.addEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), e.addEventListener(s.move, this.scrollbar.onDragMove, n), e.addEventListener(s.end, this.scrollbar.onDragEnd, o))
                }
            },
            disableDraggable: function() {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar,
                        i = this.touchEvents,
                        s = this.touchEventsDesktop,
                        a = this.params,
                        r = t.$el[0],
                        n = !(!h.passiveListener || !a.passiveListener) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!h.passiveListener || !a.passiveListener) && {
                            passive: !0,
                            capture: !1
                        };
                    h.touch || !h.pointerEvents && !h.prefixedPointerEvents ? (h.touch && (r.removeEventListener(i.start, this.scrollbar.onDragStart, n), r.removeEventListener(i.move, this.scrollbar.onDragMove, n), r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)), (a.simulateTouch && !y.ios && !y.android || a.simulateTouch && !h.touch && y.ios) && (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n), e.removeEventListener("mousemove", this.scrollbar.onDragMove, n), e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o))) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), e.removeEventListener(s.move, this.scrollbar.onDragMove, n), e.removeEventListener(s.end, this.scrollbar.onDragEnd, o))
                }
            },
            init: function() {
                if (this.params.scrollbar.el) {
                    var e = this.scrollbar,
                        t = this.$el,
                        i = this.params.scrollbar,
                        a = s(i.el);
                    this.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === t.find(i.el).length && (a = t.find(i.el));
                    var r = a.find("." + this.params.scrollbar.dragClass);
                    0 === r.length && (r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>'), a.append(r)), d.extend(e, {
                        $el: a,
                        el: a[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && e.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        R = {
            setTransform: function(e, t) {
                var i = this.rtl,
                    a = s(e),
                    r = i ? -1 : 1,
                    n = a.attr("data-swiper-parallax") || "0",
                    o = a.attr("data-swiper-parallax-x"),
                    l = a.attr("data-swiper-parallax-y"),
                    d = a.attr("data-swiper-parallax-scale"),
                    h = a.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = n, l = "0") : (l = n, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", void 0 !== h && null !== h) {
                    var p = h - (h - 1) * (1 - Math.abs(t));
                    a[0].style.opacity = p
                }
                if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
                else {
                    var c = d - (d - 1) * (1 - Math.abs(t));
                    a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var e = this,
                    t = e.$el,
                    i = e.slides,
                    a = e.progress,
                    r = e.snapGrid;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    e.parallax.setTransform(i, a)
                }), i.each(function(t, i) {
                    var n = i.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), s(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                        e.parallax.setTransform(i, n)
                    })
                })
            },
            setTransition: function(e) {
                void 0 === e && (e = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(t, i) {
                    var a = s(i),
                        r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (r = 0), a.transition(r)
                })
            }
        },
        F = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    s = e.targetTouches[1].pageX,
                    a = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
            },
            onGestureStart: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    a = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, a.scaleStart = F.getDistanceBetweenTouches(e)
                }
                a.$slideEl && a.$slideEl.length || (a.$slideEl = s(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), this.zoom.isScaling = !0) : a.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, s.scaleMove = F.getDistanceBetweenTouches(e)
                }
                s.$imageEl && 0 !== s.$imageEl.length && (h.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    i = this.zoom,
                    s = i.gesture;
                if (!h.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (y.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    i = t.gesture,
                    s = t.image,
                    a = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var r = s.width * t.scale,
                        n = s.height * t.scale;
                    if (!(r < i.slideWidth && n < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    i = e.image,
                    s = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var a = 300,
                        r = 300,
                        n = s.x * a,
                        o = i.currentX + n,
                        l = s.y * r,
                        d = i.currentY + l;
                    0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                    var h = Math.max(a, r);
                    i.currentX = o, i.currentY = d;
                    var p = i.width * e.scale,
                        c = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, i, a, r, n, o, l, d, h, p, c, u, v, f, m, g, b = this.zoom,
                    w = this.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || (y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, i = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (m = y.$slideEl[0].offsetWidth, g = y.$slideEl[0].offsetHeight, a = y.$slideEl.offset().left + m / 2 - t, r = y.$slideEl.offset().top + g / 2 - i, l = y.$imageEl[0].offsetWidth, d = y.$imageEl[0].offsetHeight, h = l * b.scale, p = d * b.scale, v = -(c = Math.min(m / 2 - h / 2, 0)), f = -(u = Math.min(g / 2 - p / 2, 0)), n = a * b.scale, o = r * b.scale, n < c && (n = c), n > v && (n = v), o < u && (o = u), o > f && (o = f)) : (n = 0, o = 0), y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    i = e.gesture;
                i.$slideEl || (i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this.zoom;
                if (!e.enabled) {
                    e.enabled = !0;
                    var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    h.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                }
            },
            disable: function() {
                var e = this.zoom;
                if (e.enabled) {
                    this.zoom.enabled = !1;
                    var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    h.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove)
                }
            }
        },
        W = {
            loadInSlide: function(e, t) {
                void 0 === t && (t = !0);
                var i = this,
                    a = i.params.lazy;
                if (void 0 !== e && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
                        n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                    !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])), 0 !== n.length && n.each(function(e, n) {
                        var o = s(n);
                        o.addClass(a.loadingClass);
                        var l = o.attr("data-background"),
                            d = o.attr("data-src"),
                            h = o.attr("data-srcset"),
                            p = o.attr("data-sizes");
                        i.loadImage(o[0], d || l, h, p, !1, function() {
                            if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(a.loadedClass).removeClass(a.loadingClass), r.find("." + a.preloaderClass).remove(), i.params.loop && t) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(i.params.slideDuplicateClass)) {
                                        var s = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                        i.lazy.loadInSlide(s.index(), !1)
                                    } else {
                                        var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        i.lazy.loadInSlide(n.index(), !1)
                                    }
                                }
                                i.emit("lazyImageReady", r[0], o[0])
                            }
                        }), i.emit("lazyImageLoad", r[0], o[0])
                    })
                }
            },
            load: function() {
                var e = this,
                    t = e.$wrapperEl,
                    i = e.params,
                    a = e.slides,
                    r = e.activeIndex,
                    n = e.virtual && i.virtual.enabled,
                    o = i.lazy,
                    l = i.slidesPerView;

                function d(e) {
                    if (n) {
                        if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (a[e]) return !0;
                    return !1
                }

                function h(e) {
                    return n ? s(e).attr("data-swiper-slide-index") : s(e).index()
                }
                if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function(t, i) {
                    var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
                    e.lazy.loadInSlide(a)
                });
                else if (l > 1)
                    for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
                else e.lazy.loadInSlide(r);
                if (o.loadPrevNext)
                    if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(r + u + Math.max(c, u), a.length), f = Math.max(r - Math.max(u, c), 0), m = r + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);
                        for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g)
                    } else {
                        var b = t.children("." + i.slideNextClass);
                        b.length > 0 && e.lazy.loadInSlide(h(b));
                        var w = t.children("." + i.slidePrevClass);
                        w.length > 0 && e.lazy.loadInSlide(h(w))
                    }
            }
        },
        q = {
            LinearSpline: function(e, t) {
                var i, s, a, r, n, o = function(e, t) {
                    for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new q.LinearSpline(this.slidesGrid, e.slidesGrid) : new q.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var i, s, a = this,
                    r = a.controller.control;

                function n(e) {
                    var t = a.rtlTranslate ? -a.translate : a.translate;
                    "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof k && n(r[o]);
                else r instanceof k && t !== r && n(r)
            },
            setTransition: function(e, t) {
                var i, s = this,
                    a = s.controller.control;

                function r(t) {
                    t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function() {
                        a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }
                if (Array.isArray(a))
                    for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof k && r(a[i]);
                else a instanceof k && t !== a && r(a)
            }
        },
        j = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this.params.a11y;
                if (13 === e.keyCode) {
                    var i = s(e.target);
                    this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                if (!this.params.loop) {
                    var e = this.navigation,
                        t = e.$nextEl,
                        i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            },
            updatePagination: function() {
                var e = this,
                    t = e.params.a11y;
                e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function(i, a) {
                    var r = s(a);
                    e.a11y.makeElFocusable(r), e.a11y.addElRole(r, "button"), e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1))
                })
            },
            init: function() {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        },
        K = {
            init: function() {
                if (this.params.history) {
                    if (!t.history || !t.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = K.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = t.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    i = e.length;
                return {
                    key: e[i - 2],
                    value: e[i - 1]
                }
            },
            setHistory: function(e, i) {
                if (this.history.initialized && this.params.history.enabled) {
                    var s = this.slides.eq(i),
                        a = K.slugify(s.attr("data-history"));
                    t.location.pathname.includes(e) || (a = e + "/" + a);
                    var r = t.history.state;
                    r && r.value === a || (this.params.history.replaceState ? t.history.replaceState({
                        value: a
                    }, null, a) : t.history.pushState({
                        value: a
                    }, null, a))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, i) {
                if (t)
                    for (var s = 0, a = this.slides.length; s < a; s += 1) {
                        var r = this.slides.eq(s);
                        if (K.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var n = r.index();
                            this.slideTo(n, e, i)
                        }
                    } else this.slideTo(0, e, i)
            }
        },
        U = {
            onHashCange: function() {
                var t = e.location.hash.replace("#", "");
                t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
            },
            setHash: function() {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                    if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
                    else {
                        var i = this.slides.eq(this.activeIndex),
                            s = i.attr("data-hash") || i.attr("data-history");
                        e.location.hash = s || ""
                    }
            },
            init: function() {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var i = e.location.hash.replace("#", "");
                    if (i)
                        for (var a = 0, r = this.slides.length; a < r; a += 1) {
                            var n = this.slides.eq(a);
                            if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                var o = n.index();
                                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0)
                            }
                        }
                    this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        _ = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, i)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
            },
            stop: function() {
                return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function() {
                    t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                }) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        Z = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t),
                        s = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (s -= this.translate);
                    var a = 0;
                    this.isHorizontal() || (a = s, s = 0);
                    var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: r
                    }).transform("translate3d(" + s + "px, " + a + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var a = !1;
                    i.transitionEnd(function() {
                        if (!a && t && !t.destroyed) {
                            a = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i])
                        }
                    })
                }
            }
        },
        Q = {
            setTranslate: function() {
                var e, t = this.$el,
                    i = this.$wrapperEl,
                    a = this.slides,
                    r = this.width,
                    n = this.height,
                    o = this.rtlTranslate,
                    l = this.size,
                    d = this.params.cubeEffect,
                    h = this.isHorizontal(),
                    p = this.virtual && this.params.virtual.enabled,
                    c = 0;
                d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = s('<div class="swiper-cube-shadow"></div>'), t.append(e)));
                for (var u = 0; u < a.length; u += 1) {
                    var v = a.eq(u),
                        f = u;
                    p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
                    var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
                        var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            C = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === T.length && (T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(C)), T.length && (T[0].style.opacity = Math.max(-b, 0)), C.length && (C[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (h) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var M = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                            z = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
                            k = d.shadowScale,
                            P = d.shadowScale / z,
                            $ = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + $) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                    } var L = S.isSafari || S.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        J = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                    var a = e.eq(i),
                        r = a[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -a[0].swiperSlideOffset,
                        d = 0;
                    if (this.isHorizontal() ? t && (n = -n) : (d = l, l = 0, o = -n, n = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows) {
                        var h = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
                            p = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                        0 === h.length && (h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), a.append(h)), 0 === p.length && (p = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), h.length && (h[0].style.opacity = Math.max(-r, 0)), p.length && (p[0].style.opacity = Math.max(r, 0))
                    }
                    a.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var t = this,
                    i = t.slides,
                    s = t.activeIndex,
                    a = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.eq(s).transitionEnd(function() {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i])
                        }
                    })
                }
            }
        },
        ee = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, i = this.slides, a = this.$wrapperEl, r = this.slidesSizesGrid, n = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, v = i.length; u < v; u += 1) {
                    var f = i.eq(u),
                        m = r[u],
                        g = (d - f[0].swiperSlideOffset - m / 2) / m * n.modifier,
                        b = o ? p * g : 0,
                        w = o ? 0 : p * g,
                        y = -c * Math.abs(g),
                        x = o ? 0 : n.stretch * g,
                        E = o ? n.stretch * g : 0;
                    Math.abs(E) < .001 && (E = 0), Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
                    var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                    if (f.transform(T), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), n.slideShadows) {
                        var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === S.length && (S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(S)), 0 === C.length && (C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(C)), S.length && (S[0].style.opacity = g > 0 ? g : 0), C.length && (C[0].style.opacity = -g > 0 ? -g : 0)
                    }
                }(h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        te = [P, $, L, I, O, G, N, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                d.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: B.enable.bind(this),
                        disable: B.disable.bind(this),
                        handle: B.handle.bind(this),
                        handleMouseEnter: B.handleMouseEnter.bind(this),
                        handleMouseLeave: B.handleMouseLeave.bind(this),
                        lastScrollTime: d.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                d.extend(this, {
                    navigation: {
                        init: X.init.bind(this),
                        update: X.update.bind(this),
                        destroy: X.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t = this.navigation,
                        i = t.$nextEl,
                        a = t.$prevEl;
                    !this.params.navigation.hideOnClick || s(e.target).is(a) || s(e.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                d.extend(this, {
                    pagination: {
                        init: Y.init.bind(this),
                        render: Y.render.bind(this),
                        update: Y.update.bind(this),
                        destroy: Y.destroy.bind(this),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !s(e.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                d.extend(this, {
                    scrollbar: {
                        init: V.init.bind(this),
                        destroy: V.destroy.bind(this),
                        updateSize: V.updateSize.bind(this),
                        setTranslate: V.setTranslate.bind(this),
                        setTransition: V.setTransition.bind(this),
                        enableDraggable: V.enableDraggable.bind(this),
                        disableDraggable: V.disableDraggable.bind(this),
                        setDragPosition: V.setDragPosition.bind(this),
                        onDragStart: V.onDragStart.bind(this),
                        onDragMove: V.onDragMove.bind(this),
                        onDragEnd: V.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                d.extend(this, {
                    parallax: {
                        setTransform: R.setTransform.bind(this),
                        setTranslate: R.setTranslate.bind(this),
                        setTransition: R.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(i) {
                    t[i] = F[i].bind(e)
                }), d.extend(e, {
                    zoom: t
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                d.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: W.load.bind(this),
                        loadInSlide: W.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                d.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: q.getInterpolateFunction.bind(this),
                        setTranslate: q.setTranslate.bind(this),
                        setTransition: q.setTransition.bind(this)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var e = this;
                d.extend(e, {
                    a11y: {
                        liveRegion: s('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(j).forEach(function(t) {
                    e.a11y[t] = j[t].bind(e)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                d.extend(this, {
                    history: {
                        init: K.init.bind(this),
                        setHistory: K.setHistory.bind(this),
                        setHistoryPopState: K.setHistoryPopState.bind(this),
                        scrollToSlide: K.scrollToSlide.bind(this),
                        destroy: K.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                d.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: U.init.bind(this),
                        destroy: U.destroy.bind(this),
                        setHash: U.setHash.bind(this),
                        onHashCange: U.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                d.extend(this, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: _.run.bind(this),
                        start: _.start.bind(this),
                        stop: _.stop.bind(this),
                        pause: _.pause.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                d.extend(this, {
                    fadeEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                d.extend(this, {
                    cubeEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                d.extend(this, {
                    flipEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        d.extend(this.params, e), d.extend(this.originalParams, e)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                d.extend(this, {
                    coverflowEffect: {
                        setTranslate: ee.setTranslate.bind(this),
                        setTransition: ee.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(te), k
});;
"use strict";
jQuery(window).scroll(function() {
    var wpadminbar = jQuery('#wpadminbar').outerHeight()
    var topBarHeight = jQuery('#top-bar').outerHeight();
    var headerV2Height = jQuery('.header-v2').outerHeight();
    var headerContainer = (jQuery('.header-container'));
    var headerHeight = headerContainer.outerHeight();
    if (jQuery(this).scrollTop() > headerHeight) {
        jQuery('.sticky-tr').removeClass("transparent-header").css('top', -topBarHeight - headerV2Height);
        jQuery('.sticky').css('top', -topBarHeight - headerV2Height + wpadminbar);
    } else {
        jQuery('.sticky-tr').addClass("transparent-header").css('top', 0);
        jQuery('.sticky').css('top', 0);
    }
});
jQuery(document).ready(function($) {
    jQuery('.header-placeholder').css('height', jQuery('.header-container').outerHeight());
    $('#nav-listener').click(function() {
        $('body').toggleClass('active-nav-aside');
    });
    $('.cart-listener').click(function() {
        $('body').toggleClass('show-sub-cart');
    });
    $(window).on('click', function(e) {
        var cartLink = $('.cart-listener');
        if (cartLink.has(e.target).length === 0 && !cartLink.is(e.target)) {
            cartLink.parent().removeClass('show-sub-cart');
        } else {
            cartLink.parent().toggleClass('show-sub-cart');
        }
    });
    var dateElement = $('.datepicker');
    dateElement.datepicker({
        minDate: 0,
        dateFormat: dateElement.attr('format'),
    });
    $('.datepicker').datepicker("setDate", "getDate");
    $('.tabs').tabs({
        show: 'fade',
        hide: 'fade'
    });

    function initMainNavigation(container) {
        container.find('.menu-item-has-children > a').after('<button class="dropdown-toggle">' + '</button>');
        container.find('a[href$="#"]').addClass('dropdown-toggle').next().remove();
        container.find('.current-menu-ancestor > .sub-menu').addClass('toggled-on');
        container.find('.dropdown-toggle').click(function(e) {
            var _this = $(this);
            e.preventDefault();
            _this.toggleClass('toggle-on');
            _this.next('.children, .sub-menu').toggleClass('toggled-on');
        });
    }
    initMainNavigation($('#nav'));
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    var swiper = new Swiper('#testimonials-slider .swiper-container', {
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        cleanupStyles: true,
        loop: true,
    });
    var swiper = new Swiper('#latest-news .swiper-container', {
        navigation: {
            nextEl: '#latest-news .slider-button-next',
            prevEl: '#latest-news .slider-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        cleanupStyles: true,
        autoHeight: true,
    });
    var swiper = new Swiper('#promo-slider', {
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        cleanupStyles: true,
        autoplay: 6000,
        autoHeight: true,
    });
    var swiper = new Swiper('#page-slider', {
        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        cleanupStyles: true,
        autoplay: 6000,
        loop: true,
    });
    $('.dynamic-shadow').okshadow({
        color: '#000',
        textShadow: true,
    });
    var otDate = $('.otw-reservation-date');
    otDate.datepicker({
        minDate: 0,
        dateFormat: otDate.attr('format'),
        onSelect: function() {
            var secconds = Date.parse(otDate.val());
            var date = new Date(secconds);
            var yy = date.getFullYear();
            var mm = date.getMonth() + 1;
            var dd = date.getDate();
            $('.startDate').val(mm + '/' + dd + '/' + yy);
        }
    });
    otDate.datepicker('setDate', 'getDate');
});
window.onload = function() {
    if (document.getElementById('slider')) {
        var slider = document.getElementById('slider').getElementsByClassName('item');
        if (slider.length == 1) {
            bg_zoom();
        }
        if (slider.length > 1) {
            var sliderLength = slider.length;
            var count = 0;
            bg_switch();
            setInterval(bg_switch, 7000);
        }
    }

    function bg_zoom() {
        slider[0].classList.add('one-bg');
    }

    function bg_switch() {
        slider[count].classList.add('active');
        slider[count].style.zIndex = 1;
        var scount = count;
        if (scount === 0) {
            slider[sliderLength - 1].style.removeProperty('z-index');
            setTimeout(function() {
                slider[sliderLength - 1].classList.remove('active');
            }, 3000);
        } else {
            slider[scount - 1].style.removeProperty('z-index');
            setTimeout(function() {
                slider[scount - 1].classList.remove('active');
            }, 3000);
        }
        (sliderLength === count + 1) ? count = 0: count++;
    }
};

(function(t) {
    function e(e) {
        return u ? e.data("events") : t._data(e[0]).events
    }

    function n(t, n, r) {
        var i = e(t),
            a = i[n];
        if (!u) {
            var s = r ? a.splice(a.delegateCount - 1, 1)[0] : a.pop();
            return a.splice(r ? 0 : a.delegateCount || 0, 0, s), void 0
        }
        r ? i.live.unshift(i.live.pop()) : a.unshift(a.pop())
    }

    function r(e, r, i) {
        var a = r.split(/\s+/);
        e.each(function() {
            for (var e = 0; a.length > e; ++e) {
                var r = a[e].trim().match(/[^\.]+/i)[0];
                n(t(this), r, i)
            }
        })
    }

    function i(e) {
        t.fn[e + "First"] = function() {
            var n = t.makeArray(arguments),
                i = n.shift();
            return i && (t.fn[e].apply(this, arguments), r(this, i)), this
        }
    }
    var a = t.fn.jquery.split("."),
        s = parseInt(a[0]),
        f = parseInt(a[1]),
        u = 1 > s || 1 == s && 7 > f;
    i("bind"), i("one"), t.fn.delegateFirst = function() {
        var e = t.makeArray(arguments),
            n = e[1];
        return n && (e.splice(0, 2), t.fn.delegate.apply(this, arguments), r(this, n, !0)), this
    }, t.fn.liveFirst = function() {
        var e = t.makeArray(arguments);
        return e.unshift(this.selector), t.fn.delegateFirst.apply(t(document), e), this
    }, u || (t.fn.onFirst = function(e, n) {
        var i = t(this),
            a = "string" == typeof n;
        if (t.fn.on.apply(i, arguments), "object" == typeof e)
            for (type in e) e.hasOwnProperty(type) && r(i, type, a);
        else "string" == typeof e && r(i, e, a);
        return i
    })
})(jQuery);
! function(e) {
    var n = !1;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var o = window.Cookies,
            t = window.Cookies = e();
        t.noConflict = function() {
            return window.Cookies = o, t
        }
    }
}(function() {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var t in o) n[t] = o[t]
        }
        return n
    }

    function n(o) {
        function t(n, r, i) {
            var c;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (i = e({
                            path: "/"
                        }, t.defaults, i), "number" == typeof i.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                    }
                    try {
                        c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                    } catch (e) {}
                    return r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)), n = n.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), n = n.replace(/[\(\)]/g, escape), document.cookie = [n, "=", r, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                n || (c = {});
                for (var p = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, d = 0; d < p.length; d++) {
                    var f = p[d].split("="),
                        u = f.slice(1).join("=");
                    '"' === u.charAt(0) && (u = u.slice(1, -1));
                    try {
                        var l = f[0].replace(s, decodeURIComponent);
                        if (u = o.read ? o.read(u, l) : o(u, l) || u.replace(s, decodeURIComponent), this.json) try {
                            u = JSON.parse(u)
                        } catch (e) {}
                        if (n === l) {
                            c = u;
                            break
                        }
                        n || (c[l] = u)
                    } catch (e) {}
                }
                return c
            }
        }
        return t.set = t, t.get = function(e) {
            return t.call(t, e)
        }, t.getJSON = function() {
            return t.apply({
                json: !0
            }, [].slice.call(arguments))
        }, t.defaults = {}, t.remove = function(n, o) {
            t(n, "", e(o, {
                expires: -1
            }))
        }, t.withConverter = n, t
    }
    return n(function() {})
});
if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
        value: function(searchElement, fromIndex) {
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            var len = o.length >>> 0;
            if (len === 0) {
                return false;
            }
            var n = fromIndex | 0;
            var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

            function sameValueZero(x, y) {
                return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
            }
            while (k < len) {
                if (sameValueZero(o[k], searchElement)) {
                    return true;
                }
                k++;
            }
            return false;
        }
    });
}! function($, options) {
    if (options.debug) {
        console.log('PYS:', options);
    }
    var dummyPinterest = function() {
        return {
            isEnabled: function() {},
            disable: function() {},
            loadPixel: function() {},
            fireEvent: function(name, data) {
                return false;
            },
            onCommentEvent: function() {},
            onDownloadEvent: function(params) {},
            onFormEvent: function(params) {},
            onWooAddToCartOnButtonEvent: function(product_id) {},
            onWooAddToCartOnSingleEvent: function(product_id, qty, is_variable, is_external, $form) {},
            onWooRemoveFromCartEvent: function(cart_item_hash) {},
            onEddAddToCartOnButtonEvent: function(download_id, price_index, qty) {},
            onEddRemoveFromCartEvent: function(item) {},
            onPageScroll: function(event) {},
            onTime: function(event) {},
        }
    }();
    var dummyBing = function() {
        return {
            isEnabled: function() {},
            disable: function() {},
            loadPixel: function() {},
            fireEvent: function(name, data) {
                return false;
            },
            onAdSenseEvent: function() {},
            onClickEvent: function(params) {},
            onWatchVideo: function(params) {},
            onCommentEvent: function() {},
            onFormEvent: function(params) {},
            onDownloadEvent: function(params) {},
            onWooAddToCartOnButtonEvent: function(product_id) {},
            onWooAddToCartOnSingleEvent: function(product_id, qty, is_variable, is_external, $form) {},
            onWooRemoveFromCartEvent: function(cart_item_hash) {},
            onWooAffiliateEvent: function(product_id) {},
            onWooPayPalEvent: function() {},
            onEddAddToCartOnButtonEvent: function(download_id, price_index, qty) {},
            onEddRemoveFromCartEvent: function(item) {},
            onPageScroll: function(event) {},
            onTime: function(event) {},
        }
    }();
    var Utils = function(options) {
        var Pinterest = dummyPinterest;
        var Bing = dummyBing;
        var gtag_loaded = false;
        let isNewSession = checkSession();
        let utmTerms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
        let utmId = ['fbadid', 'gadid', 'padid', 'bingid'];

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        function getDomain(url) {
            url = url.replace(/(https?:\/\/)?(www.)?/i, '');
            if (url.indexOf('/') !== -1) {
                return url.split('/')[0];
            }
            return url;
        }

        function loadPixels() {
            if (!options.gdpr.all_disabled_by_api) {
                if (!options.gdpr.facebook_disabled_by_api) {
                    Facebook.loadPixel();
                }
                if (!options.gdpr.analytics_disabled_by_api) {
                    Analytics.loadPixel();
                }
                if (!options.gdpr.pinterest_disabled_by_api) {
                    Pinterest.loadPixel();
                }
                if (!options.gdpr.bing_disabled_by_api) {
                    Bing.loadPixel();
                }
            }
            if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                if (typeof CS_Data.cs_google_analytics_consent_mode !== "undefined" && CS_Data.cs_google_analytics_consent_mode == 1) {
                    Analytics.loadPixel();
                }
            }
        }

        function checkSession() {
            let duration = options.last_visit_duration * 60000
            if (Cookies.get('pys_start_session') === undefined || Cookies.get('pys_session_limit') === undefined) {
                var now = new Date();
                now.setTime(now.getTime() + duration);
                Cookies.set('pys_session_limit', true, {
                    expires: now
                })
                Cookies.set('pys_start_session', true)
                return true
            }
            return false
        }

        function getTrafficSource() {
            try {
                let referrer = document.referrer.toString(),
                    source;
                let direct = referrer.length === 0;
                let internal = direct ? false : referrer.indexOf(options.siteUrl) === 0;
                let external = !direct && !internal;
                if (external === false) {
                    source = 'direct';
                } else {
                    source = referrer;
                }
                if (source !== 'direct') {
                    return getDomain(source);
                } else {
                    return source;
                }
            } catch (e) {
                console.error(e);
                return 'direct';
            }
        }

        function getQueryVars() {
            try {
                var result = {},
                    tmp = [];
                window.location.search.substr(1).split("&").forEach(function(item) {
                    tmp = item.split('=');
                    if (tmp.length > 1) {
                        result[tmp[0]] = tmp[1];
                    }
                });
                return result;
            } catch (e) {
                console.error(e);
                return {};
            }
        }

        function getUTMId(useLast = false) {
            try {
                let cookiePrefix = 'pys_'
                let terms = [];
                if (useLast) {
                    cookiePrefix = 'last_pys_'
                }
                $.each(utmId, function(index, name) {
                    if (Cookies.get(cookiePrefix + name)) {
                        terms[name] = Cookies.get(cookiePrefix + name)
                    }
                });
                return terms;
            } catch (e) {
                console.error(e);
                return [];
            }
        }

        function getUTMs(useLast = false) {
            try {
                let cookiePrefix = 'pys_'
                if (useLast) {
                    cookiePrefix = 'last_pys_'
                }
                let terms = [];
                $.each(utmTerms, function(index, name) {
                    if (Cookies.get(cookiePrefix + name)) {
                        let value = Cookies.get(cookiePrefix + name);
                        terms[name] = filterEmails(value);
                    }
                });
                return terms;
            } catch (e) {
                console.error(e);
                return [];
            }
        }

        function getDateTime() {
            var dateTime = new Array();
            var date = new Date(),
                days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                hours = ['00-01', '01-02', '02-03', '03-04', '04-05', '05-06', '06-07', '07-08', '08-09', '09-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16', '16-17', '17-18', '18-19', '19-20', '20-21', '21-22', '22-23', '23-24'];
            dateTime.push(hours[date.getHours()]);
            dateTime.push(days[date.getDay()]);
            dateTime.push(months[date.getMonth()]);
            return dateTime;
        }

        function filterEmails(value) {
            return validateEmail(value) ? undefined : value;
        }
        return {
            PRODUCT_SIMPLE: 0,
            PRODUCT_VARIABLE: 1,
            PRODUCT_BUNDLE: 2,
            PRODUCT_GROUPED: 3,
            fireEventForAllPixel: function(functionName, events) {
                if (events.hasOwnProperty(Facebook.tag()))
                    Facebook[functionName](events[Facebook.tag()]);
                if (events.hasOwnProperty(Analytics.tag()))
                    Analytics[functionName](events[Analytics.tag()]);
                if (events.hasOwnProperty(Pinterest.tag()))
                    Pinterest[functionName](events[Pinterest.tag()]);
                if (events.hasOwnProperty(Bing.tag()))
                    Bing[functionName](events[Bing.tag()]);
            },
            setupPinterestObject: function() {
                Pinterest = window.pys.Pinterest || Pinterest;
                return Pinterest;
            },
            setupBingObject: function() {
                Bing = window.pys.Bing || Bing;
                return Bing;
            },
            copyProperties: function(from, to) {
                for (var key in from) {
                    if ("function" == typeof from[key]) {
                        continue;
                    }
                    to[key] = from[key];
                }
                return to;
            },
            manageCookies: function() {
                let expires = parseInt(options.cookie_duration);
                let queryVars = getQueryVars();
                let landing = window.location.href.split('?')[0];
                try {
                    if (Cookies.get('pys_first_visit') === undefined) {
                        Cookies.set('pys_first_visit', true, {
                            expires: expires
                        });
                        Cookies.set('pysTrafficSource', getTrafficSource(), {
                            expires: expires
                        });
                        Cookies.set('pys_landing_page', landing, {
                            expires: expires
                        });
                        $.each(utmTerms, function(index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('pys_' + name, queryVars[name], {
                                    expires: expires
                                });
                            } else {
                                Cookies.remove('pys_' + name)
                            }
                        });
                        $.each(utmId, function(index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('pys_' + name, queryVars[name], {
                                    expires: expires
                                });
                            } else {
                                Cookies.remove('pys_' + name)
                            }
                        })
                    }
                    if (isNewSession) {
                        Cookies.set('last_pysTrafficSource', getTrafficSource(), {
                            expires: expires
                        });
                        $.each(utmTerms, function(index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('last_pys_' + name, queryVars[name], {
                                    expires: expires
                                });
                            } else {
                                Cookies.remove('last_pys_' + name)
                            }
                        });
                        $.each(utmId, function(index, name) {
                            if (queryVars.hasOwnProperty(name)) {
                                Cookies.set('last_pys_' + name, queryVars[name], {
                                    expires: expires
                                });
                            } else {
                                Cookies.remove('last_pys_' + name)
                            }
                        })
                        Cookies.set('last_pys_landing_page', landing, {
                            expires: expires
                        });
                    }
                } catch (e) {
                    console.error(e);
                }
            },
            clone: function(obj) {
                var copy;
                if (null == obj || "object" != typeof obj) return obj;
                if (obj instanceof Date) {
                    copy = new Date();
                    copy.setTime(obj.getTime());
                    return copy;
                }
                if (obj instanceof Array) {
                    copy = [];
                    for (var i = 0, len = obj.length; i < len; i++) {
                        if ("function" == typeof obj[i]) {
                            continue;
                        }
                        copy[i] = Utils.clone(obj[i]);
                    }
                    return copy;
                }
                if (obj instanceof Object) {
                    copy = {};
                    for (var attr in obj) {
                        if (obj.hasOwnProperty(attr)) {
                            if ("function" == typeof obj[attr]) {
                                continue;
                            }
                            copy[attr] = Utils.clone(obj[attr]);
                        }
                    }
                    return copy;
                }
                return obj;
            },
            getTagsAsArray: function(tag) {
                return [].slice.call(document.getElementsByTagName(tag));
            },
            getRequestParams: function() {
                return [];
            },
            setupMouseOverClickEvents: function(eventId, triggers) {
                $(document).onFirst('mouseover', triggers.join(','), function() {
                    if ($(this).hasClass('pys-mouse-over-' + eventId)) {
                        return true;
                    } else {
                        $(this).addClass('pys-mouse-over-' + eventId);
                    }
                    Utils.fireDynamicEvent(eventId);
                });
            },
            setupCSSClickEvents: function(eventId, triggers) {
                $(document).onFirst('click', triggers.join(','), function() {
                    Utils.fireTriggerEvent(eventId);
                });
            },
            setupURLClickEvents: function() {
                $('a[data-pys-event-id]').onFirst('click', function(evt) {
                    $(this).attr('data-pys-event-id').split(',').forEach(function(eventId) {
                        eventId = parseInt(eventId);
                        if (isNaN(eventId) === false) {
                            Utils.fireTriggerEvent(eventId);
                        }
                    });
                });
            },
            setupScrollPosEvents: function(eventId, triggers) {
                var scrollPosThresholds = {},
                    docHeight = $(document).height() - $(window).height();
                $.each(triggers, function(index, scrollPos) {
                    scrollPos = docHeight * scrollPos / 100;
                    scrollPos = Math.round(scrollPos);
                    scrollPosThresholds[scrollPos] = eventId;
                });
                $(document).on("scroll", function() {
                    var scrollPos = $(window).scrollTop();
                    $.each(scrollPosThresholds, function(threshold, eventId) {
                        if (scrollPos <= threshold) {
                            return true;
                        }
                        if (eventId === null) {
                            return true;
                        } else {
                            scrollPosThresholds[threshold] = null;
                        }
                        Utils.fireTriggerEvent(eventId);
                    });
                });
            },
            setupCommentEvents: function(eventId, triggers) {
                $('form.comment-form').on("submit", function() {
                    Utils.fireTriggerEvent(eventId);
                });
            },
            fireTriggerEvent: function(eventId) {
                if (!options.triggerEvents.hasOwnProperty(eventId)) {
                    return;
                }
                var event = {};
                var events = options.triggerEvents[eventId];
                if (events.hasOwnProperty('facebook')) {
                    event = events.facebook;
                    Facebook.fireEvent(event.name, event);
                }
                if (events.hasOwnProperty('ga')) {
                    event = events.ga;
                    Analytics.fireEvent(event.name, event);
                }
                if (events.hasOwnProperty('pinterest')) {
                    event = events.pinterest;
                    Pinterest.fireEvent(event.name, event);
                }
                if (events.hasOwnProperty('bing')) {
                    event = events.bing;
                    Bing.fireEvent(event.name, event);
                }
            },
            fireStaticEvents: function(pixel) {
                if (options.staticEvents.hasOwnProperty(pixel)) {
                    $.each(options.staticEvents[pixel], function(eventName, events) {
                        $.each(events, function(index, eventData) {
                            eventData.fired = eventData.fired || false;
                            if (!eventData.fired) {
                                var fired = false;
                                if ('facebook' === pixel) {
                                    fired = Facebook.fireEvent(eventData.name, eventData);
                                } else if ('ga' === pixel) {
                                    fired = Analytics.fireEvent(eventData.name, eventData);
                                } else if ('pinterest' === pixel) {
                                    fired = Pinterest.fireEvent(eventData.name, eventData);
                                } else if ('bing' === pixel) {
                                    fired = Bing.fireEvent(eventData.name, eventData);
                                }
                                eventData.fired = fired;
                            }
                        });
                    });
                }
            },
            loadGoogleTag: function(id) {
                if (!gtag_loaded) {
                    (function(window, document, src) {
                        var a = document.createElement('script'),
                            m = document.getElementsByTagName('script')[0];
                        a.async = 1;
                        a.src = src;
                        m.parentNode.insertBefore(a, m);
                    })(window, document, '//www.googletagmanager.com/gtag/js?id=' + id);
                    window.dataLayer = window.dataLayer || [];
                    window.gtag = window.gtag || function gtag() {
                        dataLayer.push(arguments);
                    };
                    gtag('js', new Date());
                    gtag_loaded = true;
                }
            },
            loadPixels: function() {
                if (options.gdpr.ajax_enabled && !options.gdpr.consent_magic_integration_enabled) {
                    $.get({
                        url: options.ajaxUrl,
                        dataType: 'json',
                        data: {
                            action: 'pys_get_gdpr_filters_values'
                        },
                        success: function(res) {
                            if (res.success) {
                                options.gdpr.all_disabled_by_api = res.data.all_disabled_by_api;
                                options.gdpr.facebook_disabled_by_api = res.data.facebook_disabled_by_api;
                                options.gdpr.analytics_disabled_by_api = res.data.analytics_disabled_by_api;
                                options.gdpr.google_ads_disabled_by_api = res.data.google_ads_disabled_by_api;
                                options.gdpr.pinterest_disabled_by_api = res.data.pinterest_disabled_by_api;
                                options.gdpr.bing_disabled_by_api = res.data.bing_disabled_by_api;
                            }
                            loadPixels();
                        }
                    });
                } else {
                    loadPixels();
                }
            },
            consentGiven: function(pixel) {
                if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                    var cs_cookie = Cookies.get('cs_viewed_cookie_policy' + test_prefix);
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cs_cookie === 'undefined' || cs_cookie === 'yes') {
                            return true;
                        }
                    } else {
                        if (typeof cs_cookie === 'undefined' || cs_cookie === 'yes') {
                            return true;
                        }
                    }
                    if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                        if ((typeof CS_Data.cs_google_analytics_consent_mode !== "undefined" && CS_Data.cs_google_analytics_consent_mode == 1) && pixel == 'analytics') {
                            return true;
                        }
                        if ((typeof CS_Data.cs_google_ads_consent_mode !== "undefined" && CS_Data.cs_google_ads_consent_mode == 1) && pixel == 'google_ads') {
                            return true;
                        }
                    }
                    return false;
                }
                if (options.gdpr.real_cookie_banner_integration_enabled) {
                    var consentApi = window.consentApi;
                    if (consentApi) {
                        switch (pixel) {
                            case "analytics":
                                return consentApi.consentSync("http", "_ga", "*").cookieOptIn;
                            case "facebook":
                                return consentApi.consentSync("http", "_fbp", "*").cookieOptIn;
                            case "pinterest":
                                return consentApi.consentSync("http", "_pinterest_sess", ".pinterest.com").cookieOptIn;
                            default:
                                return true;
                        }
                    }
                }
                if (options.gdpr.cookiebot_integration_enabled && typeof Cookiebot !== 'undefined') {
                    var cookiebot_consent_category = options.gdpr['cookiebot_' + pixel + '_consent_category'];
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (Cookiebot.consented === false || Cookiebot.consent[cookiebot_consent_category]) {
                            return true;
                        }
                    } else {
                        if (Cookiebot.consent[cookiebot_consent_category]) {
                            return true;
                        }
                    }
                    return false;
                }
                if (options.gdpr.cookie_notice_integration_enabled && typeof cnArgs !== 'undefined') {
                    var cn_cookie = Cookies.get(cnArgs.cookieName);
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cn_cookie === 'undefined' || cn_cookie === 'true') {
                            return true;
                        }
                    } else {
                        if (cn_cookie === 'true') {
                            return true;
                        }
                    }
                    return false;
                }
                if (options.gdpr.cookie_law_info_integration_enabled) {
                    var cli_cookie = Cookies.get('viewed_cookie_policy');
                    if (options.gdpr[pixel + '_prior_consent_enabled']) {
                        if (typeof cli_cookie === 'undefined' || cli_cookie === 'yes') {
                            return true;
                        }
                    } else {
                        if (cli_cookie === 'yes') {
                            return true;
                        }
                    }
                    return false;
                }
                return true;
            },
            setupGdprCallbacks: function() {
                if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                    var test_prefix = CS_Data.test_prefix,
                        cs_refresh_after_consent = false,
                        substring = "cs_enabled_cookie_term";
                    if (CS_Data.cs_refresh_after_consent == 1) {
                        cs_refresh_after_consent = CS_Data.cs_refresh_after_consent;
                    }
                    if (!cs_refresh_after_consent) {
                        var theCookies = document.cookie.split(';');
                        for (var i = 1; i <= theCookies.length; i++) {
                            if (theCookies[i - 1].indexOf(substring) !== -1) {
                                var categoryCookie = theCookies[i - 1].replace('cs_enabled_cookie_term' + test_prefix + '_', '');
                                categoryCookie = Number(categoryCookie.replace(/\D+/g, ""));
                                var cs_cookie_val = Cookies.get('cs_enabled_cookie_term' + test_prefix + '_' + categoryCookie);
                                if (cs_cookie_val == 'yes') {
                                    if (categoryCookie === CS_Data.cs_script_cat.facebook) {
                                        Facebook.loadPixel();
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.bing) {
                                        Bing.loadPixel();
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.analytics || (typeof CS_Data.cs_google_analytics_consent_mode !== "undefined" && CS_Data.cs_google_analytics_consent_mode == 1)) {
                                        Analytics.loadPixel();
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.pinterest) {
                                        Pinterest.loadPixel();
                                    }
                                } else {
                                    if (categoryCookie === CS_Data.cs_script_cat.facebook) {
                                        Facebook.disable();
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.bing) {
                                        Bing.disable();
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.analytics && (typeof CS_Data.cs_google_analytics_consent_mode == "undefined" || CS_Data.cs_google_analytics_consent_mode == 0)) {
                                        Analytics.disable();
                                    }
                                    if (categoryCookie === CS_Data.cs_script_cat.pinterest) {
                                        Pinterest.disable();
                                    }
                                }
                                if (Cookies.get('cs_enabled_advanced_matching') == 'yes') {
                                    Facebook.loadPixel();
                                }
                            }
                        }
                        $(document).on('click', '.cs_action_btn', function(e) {
                            e.preventDefault();
                            var elm = $(this),
                                button_action = elm.attr('data-cs_action');
                            if (button_action === 'allow_all') {
                                Facebook.loadPixel();
                                Bing.loadPixel();
                                Analytics.loadPixel();
                                Pinterest.loadPixel();
                            } else if (button_action === 'disable_all') {
                                Facebook.disable();
                                Bing.disable();
                                if (CS_Data.cs_google_analytics_consent_mode == 0 || typeof CS_Data.cs_google_analytics_consent_mode == "undefined") {
                                    Analytics.disable();
                                }
                                Pinterest.disable();
                            }
                        });
                    }
                }
                if (options.gdpr.real_cookie_banner_integration_enabled) {
                    var consentApi = window.consentApi;
                    if (consentApi) {
                        consentApi.consent("http", "_ga", "*").then(Analytics.loadPixel.bind(Analytics), Analytics.disable.bind(Analytics));
                        consentApi.consent("http", "_fbp", "*").then(Facebook.loadPixel.bind(Facebook), Facebook.disable.bind(Facebook));
                        consentApi.consent("http", "_pinterest_sess", ".pinterest.com").then(Pinterest.loadPixel.bind(Pinterest), Pinterest.disable.bind(Pinterest));
                    }
                }
                if (options.gdpr.cookiebot_integration_enabled && typeof Cookiebot !== 'undefined') {
                    window.addEventListener("CookiebotOnConsentReady", function() {
                        if (Cookiebot.consent.marketing) {
                            Facebook.loadPixel();
                            Bing.loadPixel();
                            Pinterest.loadPixel();
                        }
                        if (Cookiebot.consent.statistics) {

                            Analytics.loadPixel();
                        }
                        if (!Cookiebot.consent.marketing) {
                            Facebook.disable();
                            Pinterest.disable();
                            Bing.disable()
                        }
                        if (!Cookiebot.consent.statistics) {
                            Analytics.disable();
                        }
                    });
                }
                if (options.gdpr.cookie_notice_integration_enabled) {
                    $(document).onFirst('click', '.cn-set-cookie', function() {
                        if ($(this).data('cookie-set') === 'accept') {
                            Facebook.loadPixel();
                            Analytics.loadPixel();
                            Pinterest.loadPixel();
                            Bing.loadPixel();
                        } else {
                            Facebook.disable();
                            Analytics.disable();
                            Pinterest.disable();
                            Bing.disable();
                        }
                    });
                    $(document).onFirst('click', '.cn-revoke-cookie', function() {
                        Facebook.disable();
                        Analytics.disable();
                        Pinterest.disable();
                        Bing.disable();
                    });
                }
                if (options.gdpr.cookie_law_info_integration_enabled) {
                    $(document).onFirst('click', '#cookie_action_close_header', function() {
                        Facebook.loadPixel();
                        Analytics.loadPixel();
                        Pinterest.loadPixel();
                        Bing.loadPixel();
                    });
                    $(document).onFirst('click', '#cookie_action_close_header_reject', function() {
                        Facebook.disable();
                        Analytics.disable();
                        Pinterest.disable();
                        Bing.disable();
                    });
                }
            },
            getLinkExtension: function(link) {
                link = link.substring(0, (link.indexOf("#") === -1) ? link.length : link.indexOf("#"));
                link = link.substring(0, (link.indexOf("?") === -1) ? link.length : link.indexOf("?"));
                link = link.substring(link.lastIndexOf("/") + 1, link.length);
                if (link.length > 0 && link.indexOf('.') !== -1) {
                    link = link.substring(link.indexOf(".") + 1);
                    return link;
                } else {
                    return "";
                }
            },
            getLinkFilename: function(link) {
                link = link.substring(0, (link.indexOf("#") === -1) ? link.length : link.indexOf("#"));
                link = link.substring(0, (link.indexOf("?") === -1) ? link.length : link.indexOf("?"));
                link = link.substring(link.lastIndexOf("/") + 1, link.length);
                if (link.length > 0 && link.indexOf('.') !== -1) {
                    return link;
                } else {
                    return "";
                }
            },
            isCheckoutPage: function() {
                return $('body').hasClass('woocommerce-checkout') || $('body').hasClass('edd-checkout');
            },
            addCheckoutFields: function() {
                var utm = "";
                var utms = getUTMs()
                $.each(utmTerms, function(index, name) {
                    if (index > 0) {
                        utm += "|";
                    }
                    utm += name + ":" + utms[name];
                });
                var utmIdList = "";
                var utmsIds = getUTMId()
                $.each(utmId, function(index, name) {
                    if (index > 0) {
                        utmIdList += "|";
                    }
                    utmIdList += name + ":" + utmsIds[name];
                });
                var utmIdListLast = "";
                var utmsIdsLast = getUTMId(true)
                $.each(utmId, function(index, name) {
                    if (index > 0) {
                        utmIdListLast += "|";
                    }
                    utmIdListLast += name + ":" + utmsIdsLast[name];
                });
                var utmLast = "";
                var utmsLast = getUTMs(true)
                $.each(utmTerms, function(index, name) {
                    if (index > 0) {
                        utmLast += "|";
                    }
                    utmLast += name + ":" + utmsLast[name];
                });
                var dateTime = getDateTime();
                var landing = Cookies.get('pys_landing_page');
                var lastLanding = Cookies.get('last_pys_landing_page');
                var trafic = Cookies.get('pysTrafficSource');
                var lastTrafic = Cookies.get('last_pysTrafficSource');
                var $form = null;
                if ($('body').hasClass('woocommerce-checkout')) {
                    $form = $("form.woocommerce-checkout");
                } else {
                    $form = $("#edd_purchase_form");
                }
                var inputs = {
                    'pys_utm': utm,
                    'pys_utm_id': utmIdList,
                    'pys_browser_time': dateTime.join("|"),
                    'pys_landing': landing,
                    'pys_source': trafic,
                    'pys_order_type': $(".wcf-optin-form").length > 0 ? "wcf-optin" : "normal",
                    'last_pys_landing': lastLanding,
                    'last_pys_source': lastTrafic,
                    'last_pys_utm': utmLast,
                    'last_pys_utm_id': utmIdListLast,
                }
                Object.keys(inputs).forEach(function(key, index) {
                    $form.append("<input type='hidden' name='" + key + "' value='" + inputs[key] + "' /> ");
                });
            }
        };
    }(options);
    var Facebook = function(options) {
        var defaultEventTypes = ['PageView', 'ViewContent', 'Search', 'AddToCart', 'AddToWishlist', 'InitiateCheckout', 'AddPaymentInfo', 'Purchase', 'Lead', 'Subscribe', 'CustomizeProduct', 'FindLocation', 'StartTrial', 'SubmitApplication', 'Schedule', 'Contact', 'Donate'];
        var initialized = false;
        var isApiDisabled = options.gdpr.all_disabled_by_api || options.gdpr.facebook_disabled_by_api || options.gdpr.cookiebot_integration_enabled || options.gdpr.consent_magic_integration_enabled || options.gdpr.cookie_notice_integration_enabled || options.gdpr.cookie_law_info_integration_enabled;

        function sendFbServerEvent(allData, name, params) {
            let eventId = null;
            if (options.facebook.serverApiEnabled) {
                if (allData.e_id === "woo_remove_from_cart" || allData.e_id === "woo_add_to_cart_on_button_click") {
                    let isAddToCartFromJs = options.woo.hasOwnProperty("addToCartCatchMethod") && options.woo.addToCartCatchMethod === "add_cart_js";
                    if (isAddToCartFromJs || allData.e_id !== "woo_add_to_cart_on_button_click") {
                        Facebook.updateEventId(allData.name);
                        allData.eventID = Facebook.getEventId(allData.name);
                    } else {}
                } else {
                    if (options.facebook.ajaxForServerEvent || isApiDisabled || allData.delay > 0 || allData.type !== "static") {
                        allData.eventID = pys_generate_token(36);
                        var json = {
                            action: 'pys_api_event',
                            pixel: 'facebook',
                            event: name,
                            data: params,
                            ids: options.facebook.pixelIds,
                            eventID: allData.eventID,
                            url: window.location.href,
                        };
                        if (allData.hasOwnProperty('woo_order')) {
                            json['woo_order'] = allData.woo_order;
                        }
                        if (allData.hasOwnProperty('edd_order')) {
                            json['edd_order'] = allData.edd_order;
                        }
                        if (name == 'PageView') {
                            let expires = parseInt(options.cookie_duration);
                            var currentTimeInSeconds = Date.now();
                            var randomNum = Math.floor(1000000000 + Math.random() * 9000000000);
                            timeoutDelay = 0;
                            if (allData.delay > 0) {
                                timeoutDelay = allData.delay;
                            }
                            if (!Cookies.get('_fbp')) {
                                timeoutDelay = 100;
                            }
                            if (getUrlParameter('fbclid') && !Cookies.get('_fbc')) {
                                timeoutDelay = 100;
                            }
                            setTimeout(function() {
                                if (!Cookies.get('_fbp')) {
                                    Cookies.set('_fbp', 'fb.1.' + currentTimeInSeconds + '.' + randomNum, {
                                        expires: expires
                                    })
                                }
                                if (getUrlParameter('fbclid') && !Cookies.get('_fbc')) {
                                    Cookies.set('_fbc', 'fb.1.' + currentTimeInSeconds + '.' + getUrlParameter('fbclid'), {
                                        expires: expires
                                    })
                                }
                                jQuery.ajax({
                                    type: 'POST',
                                    url: options.ajaxUrl,
                                    data: json,
                                    headers: {
                                        'Cache-Control': 'no-cache'
                                    },
                                    success: function() {},
                                });
                            }, timeoutDelay)
                        } else {
                            jQuery.ajax({
                                type: 'POST',
                                url: options.ajaxUrl,
                                data: json,
                                headers: {
                                    'Cache-Control': 'no-cache'
                                },
                                success: function() {},
                            });
                        }
                    }
                }
                eventId = allData.eventID
            }
            return eventId;
        }

        function fireEvent(name, allData) {
            if (typeof window.pys_event_data_filter === "function" && window.pys_disable_event_filter(name, 'facebook')) {
                return;
            }
            var actionType = defaultEventTypes.includes(name) ? 'track' : 'trackCustom';
            var data = allData.params;
            var params = {};
            var arg = {};
            Utils.copyProperties(data, params);
            let eventId = sendFbServerEvent(allData, name, params)
            if ("hCR" === name) {
                return;
            }
            if (options.debug) {
                console.log('[Facebook] ' + name, params, "eventID", eventId);
            }
            if (eventId != null) {
                arg.eventID = eventId;
            }
            fbq(actionType, name, params, arg);
        }
        return {
            tag: function() {
                return "facebook";
            },
            isEnabled: function() {
                return options.hasOwnProperty('facebook');
            },
            disable: function() {
                initialized = false;
            },
            loadPixel: function() {
                if (initialized || !this.isEnabled() || !Utils.consentGiven('facebook')) {
                    return;
                }! function(f, b, e, v, n, t, s) {
                    if (f.fbq) return;
                    n = f.fbq = function() {
                        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                    };
                    if (!f._fbq) f._fbq = n;
                    n.push = n;
                    n.loaded = !0;
                    n.version = '2.0';
                    n.agent = 'dvpixelyoursite';
                    n.queue = [];
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
                options.facebook.pixelIds.forEach(function(pixelId) {
                    if (options.facebook.removeMetadata) {
                        fbq('set', 'autoConfig', false, pixelId);
                    }
                    if (options.gdpr.consent_magic_integration_enabled && typeof CS_Data !== "undefined") {
                        if (options.facebook.advancedMatching.length === 0) {
                            fbq('init', pixelId);
                        } else {
                            var cs_advanced_matching = Cookies.get('cs_enabled_advanced_matching' + test_prefix);
                            if (jQuery('#cs_enabled_advanced_matching' + test_prefix).length > 0) {
                                if (cs_advanced_matching == 'yes') {
                                    fbq('init', pixelId, options.facebook.advancedMatching);
                                } else {
                                    fbq('init', pixelId);
                                }
                            } else {
                                fbq('init', pixelId, options.facebook.advancedMatching);
                            }
                        }
                    } else {
                        if (options.facebook.advancedMatching.length === 0) {
                            fbq('init', pixelId);
                        } else {
                            fbq('init', pixelId, options.facebook.advancedMatching);
                        }
                    }
                });
                initialized = true;
                Utils.fireStaticEvents('facebook');
            },
            fireEvent: function(name, data) {
                if (!initialized || !this.isEnabled()) {
                    return false;
                }
                data.delay = data.delay || 0;
                data.params = data.params || {};
                if (data.delay === 0) {
                    fireEvent(name, data);
                } else {
                    setTimeout(function(name, params) {
                        fireEvent(name, params);
                    }, data.delay * 1000, name, data);
                }
                return true;
            },
            onCommentEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onDownloadEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onFormEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onWooAddToCartOnButtonEvent: function(product_id) {
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()];
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('facebook')) {
                        event = Utils.copyProperties(event, {})
                        Utils.copyProperties(window.pysWooProductData[product_id]['facebook'].params, event.params)
                        this.fireEvent(event.name, event);
                    }
                }
            },
            onWooAddToCartOnSingleEvent: function(product_id, qty, product_type, $form) {
                window.pysWooProductData = window.pysWooProductData || [];
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);
                if (product_type === Utils.PRODUCT_VARIABLE && !options.facebook.wooVariableAsSimple) {
                    product_id = parseInt($form.find('input[name="variation_id"]').val());
                }
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('facebook')) {
                        Utils.copyProperties(window.pysWooProductData[product_id]['facebook'].params, event.params);
                        var groupValue = 0;
                        if (product_type === Utils.PRODUCT_GROUPED) {
                            $form.find(".woocommerce-grouped-product-list .qty").each(function(index) {
                                var childId = $(this).attr('name').replaceAll("quantity[", "").replaceAll("]", "");
                                var quantity = parseInt($(this).val());
                                if (isNaN(quantity)) {
                                    quantity = 0;
                                }
                                var childItem = window.pysWooProductData[product_id]['facebook'].grouped[childId];
                                if (quantity == 0) {
                                    event.params.content_ids.forEach(function(el, index, array) {
                                        if (el == childItem.content_id) {
                                            array.splice(index, 1);
                                        }
                                    });
                                }
                                if (event.params.hasOwnProperty('contents')) {
                                    event.params.contents.forEach(function(el, index, array) {
                                        if (el.id == childItem.content_id) {
                                            if (quantity > 0) {
                                                el.quantity = quantity;
                                            } else {
                                                array.splice(index, 1);
                                            }
                                        }
                                    });
                                }
                                groupValue += childItem.price * quantity;
                            });
                            if (groupValue == 0) return;
                        }
                        if (options.woo.addToCartOnButtonValueEnabled && options.woo.addToCartOnButtonValueOption !== 'global') {
                            if (product_type === Utils.PRODUCT_GROUPED) {
                                event.params.value = groupValue;
                            } else if (product_type === Utils.PRODUCT_BUNDLE) {
                                var data = $(".bundle_form .bundle_data").data("bundle_form_data");
                                var items_sum = getBundlePriceOnSingleProduct(data);
                                event.params.value = (parseInt(data.base_price) + items_sum) * qty;
                            } else {
                                event.params.value = event.params.value * qty;
                            }
                        }
                        if (event.params.hasOwnProperty('contents') && product_type !== Utils.PRODUCT_GROUPED) {
                            event.params.contents[0].quantity = qty;
                        }
                        this.fireEvent(event.name, event);
                    }
                }
            },
            onWooRemoveFromCartEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onEddAddToCartOnButtonEvent: function(download_id, price_index, qty) {
                if (!options.dynamicEvents.edd_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.edd_add_to_cart_on_button_click[this.tag()]);
                if (window.pysEddProductData.hasOwnProperty(download_id)) {
                    var index;
                    if (price_index) {
                        index = download_id + '_' + price_index;
                    } else {
                        index = download_id;
                    }
                    if (window.pysEddProductData[download_id].hasOwnProperty(index)) {
                        if (window.pysEddProductData[download_id][index].hasOwnProperty('facebook')) {
                            Utils.copyProperties(window.pysEddProductData[download_id][index]['facebook']["params"], event.params)
                            if (options.edd.addToCartOnButtonValueEnabled && options.edd.addToCartOnButtonValueOption !== 'global') {
                                event.params.value = event.params.value * qty;
                            }
                            var contents = event.params.contents;
                            contents[0].quantity = qty;
                            event.params.contents = contents;
                            this.fireEvent(event.name, event);
                        }
                    }
                }
            },
            onEddRemoveFromCartEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onPageScroll: function(event) {
                this.fireEvent(event.name, event);
            },
            onTime: function(event) {
                this.fireEvent(event.name, event);
            },
            initEventIdCookies: function(key) {
                var ids = {};
                ids[key] = pys_generate_token(36)
                Cookies.set('pys_fb_event_id', JSON.stringify(ids));
            },
            updateEventId: function(key) {
                var cooData = Cookies.get("pys_fb_event_id")
                if (cooData === undefined) {
                    this.initEventIdCookies(key);
                } else {
                    var data = JSON.parse(cooData);
                    data[key] = pys_generate_token(36);
                    Cookies.set('pys_fb_event_id', JSON.stringify(data));
                }
            },
            getEventId: function(key) {
                var data = Cookies.get("pys_fb_event_id");
                if (data === undefined) {
                    this.initEventIdCookies(key);
                    data = Cookies.get("pys_fb_event_id");
                }
                return JSON.parse(data)[key];
            },
        };
    }(options);
    var Analytics = function(options) {
        var initialized = false;

        function fireEvent(name, data) {
            if (typeof window.pys_event_data_filter === "function" && window.pys_disable_event_filter(name, 'ga')) {
                return;
            }
            var eventParams = Utils.copyProperties(data, {});
            var _fireEvent = function(tracking_id, name, params) {
                params['send_to'] = tracking_id;
                if (options.debug) {
                    console.log('[Google Analytics #' + tracking_id + '] ' + name, params);
                }
                gtag('event', name, params);
            };
            options.ga.trackingIds.forEach(function(tracking_id) {
                var copyParams = Utils.copyProperties(eventParams, {});
                var params = mapParamsTov4(tracking_id, name, copyParams)
                _fireEvent(tracking_id, name, params);
            });
        }

        function mapParamsTov4(tag, name, param) {
            delete param.page_title;
            delete param.event_url;
            delete param.landing_page;
            if (isv4(tag)) {
                delete param.traffic_source;
                delete param.event_category;
                delete param.event_label;
                delete param.ecomm_prodid;
                delete param.ecomm_pagetype;
                delete param.ecomm_totalvalue;
                if (name === 'search') {
                    param['search'] = param.search_term;
                    delete param.search_term;
                    delete param.non_interaction;
                    delete param.dynx_itemid;
                    delete param.dynx_pagetype;
                    delete param.dynx_totalvalue;
                }
            } else {
                switch (name) {
                    case 'Comment':
                    case 'login':
                    case 'sign_up':
                    case 'EmailClick':
                    case 'TelClick': {
                        let params = {
                            event_category: "Key Actions",
                            event_action: name,
                            non_interaction: param.non_interaction,
                        }
                        return params;
                    }
                    case 'Form': {
                        let params = {
                            event_category: "Key Actions",
                            event_action: name,
                            non_interaction: param.non_interaction,
                        }
                        var formClass = (typeof param.form_class != 'undefined') ? 'class: ' + param.form_class : '';
                        if (formClass != "") {
                            params["event_label"] = formClass;
                        }
                        return params;
                    }
                    case 'Download': {
                        let params = {
                            event_category: "Key Actions",
                            event_action: name,
                            event_label: param.download_name,
                            non_interaction: param.non_interaction,
                        }
                        return params;
                    }
                    case 'TimeOnPage':
                    case 'PageScroll': {
                        let params = {
                            event_category: "Key Actions",
                            event_action: name,
                            event_label: document.title,
                            non_interaction: param.non_interaction,
                        }
                        return params;
                    }
                    case 'search': {
                        let params = {
                            event_category: "Key Actions",
                            event_action: name,
                            event_label: param.search_term,
                            non_interaction: param.non_interaction,
                        }
                        return params;
                    }
                }
                delete param.post_type;
                delete param.post_id;
                delete param.plugin;
                delete param.user_role;
                delete param.cartlows;
                delete param.cartflows_flow;
                delete param.cartflows_step;
            }
            return param;
        }

        function isv4(tag) {
            return tag.indexOf('G') === 0;
        }
        return {
            tag: function() {
                return "ga";
            },
            isEnabled: function() {
                return options.hasOwnProperty('ga');
            },
            disable: function() {
                initialized = false;
            },
            loadPixel: function() {
                if (initialized || !this.isEnabled() || !Utils.consentGiven('analytics')) {
                    return;
                }
                Utils.loadGoogleTag(options.ga.trackingIds[0]);
                var config = {
                    'link_attribution': options.ga.enhanceLinkAttr,
                    'anonymize_ip': options.ga.anonimizeIP
                };
                if (options.ga.crossDomainEnabled) {
                    config.linker = {
                        accept_incoming: options.ga.crossDomainAcceptIncoming,
                        domains: options.ga.crossDomainDomains
                    };
                }
                options.ga.trackingIds.forEach(function(trackingId, index) {
                    config.debug_mode = options.ga.isDebugEnabled.includes("index_" + index);
                    if (isv4(trackingId)) {
                        if (options.ga.disableAdvertisingFeatures) {
                            config.allow_google_signals = false
                        }
                        if (options.ga.disableAdvertisingPersonalization) {
                            config.allow_ad_personalization_signals = false
                        }
                    }
                    gtag('config', trackingId, config);
                });
                initialized = true;
                Utils.fireStaticEvents('ga');
            },
            fireEvent: function(name, data) {
                if (!initialized || !this.isEnabled()) {
                    return false;
                }
                data.delay = data.delay || 0;
                data.params = data.params || {};
                if (data.delay === 0) {
                    fireEvent(name, data.params);
                } else {
                    setTimeout(function(name, params) {
                        fireEvent(name, params);
                    }, data.delay * 1000, name, data.params);
                }
                return true;
            },
            onCommentEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onDownloadEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onFormEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onWooAddToCartOnButtonEvent: function(product_id) {
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('ga')) {
                        Utils.copyProperties(window.pysWooProductData[product_id]['ga'].params, event.params)
                        this.fireEvent(event.name, event);
                    }
                }
            },
            onWooAddToCartOnSingleEvent: function(product_id, qty, product_type, $form) {
                window.pysWooProductData = window.pysWooProductData || [];
                if (!options.dynamicEvents.woo_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.woo_add_to_cart_on_button_click[this.tag()]);
                if (product_type === Utils.PRODUCT_VARIABLE && !options.ga.wooVariableAsSimple) {
                    product_id = parseInt($form.find('input[name="variation_id"]').val());
                }
                if (window.pysWooProductData.hasOwnProperty(product_id)) {
                    if (window.pysWooProductData[product_id].hasOwnProperty('ga')) {
                        Utils.copyProperties(window.pysWooProductData[product_id]['ga'].params, event.params);
                        if (product_type === Utils.PRODUCT_GROUPED) {
                            var groupValue = 0;
                            $form.find(".woocommerce-grouped-product-list .qty").each(function(index) {
                                var childId = $(this).attr('name').replaceAll("quantity[", "").replaceAll("]", "");
                                var quantity = parseInt($(this).val());
                                if (isNaN(quantity)) {
                                    quantity = 0;
                                }
                                var childItem = window.pysWooProductData[product_id]['ga'].grouped[childId];
                                event.params.items.forEach(function(el, index, array) {
                                    if (el.id == childItem.content_id) {
                                        if (quantity > 0) {
                                            el.quantity = quantity;
                                        } else {
                                            array.splice(index, 1);
                                        }
                                    }
                                });
                                groupValue += childItem.price * quantity;
                            });
                            if (options.woo.addToCartOnButtonValueEnabled && options.woo.addToCartOnButtonValueOption !== 'global' && event.params.hasOwnProperty('ecomm_totalvalue')) {
                                event.params.ecomm_totalvalue = groupValue;
                            }
                            if (groupValue == 0) return;
                        } else {
                            event.params.items[0].quantity = qty;
                        }
                        if (options.woo.addToCartOnButtonValueEnabled && options.woo.addToCartOnButtonValueOption !== 'global' && product_type !== Utils.PRODUCT_GROUPED) {
                            if (event.params.hasOwnProperty('ecomm_totalvalue')) {
                                event.params.ecomm_totalvalue = event.params.items[0].price * qty;
                            }
                        }
                        this.fireEvent(event.name, event);
                    }
                }
            },
            onWooRemoveFromCartEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onEddAddToCartOnButtonEvent: function(download_id, price_index, qty) {
                if (!options.dynamicEvents.edd_add_to_cart_on_button_click.hasOwnProperty(this.tag()))
                    return;
                var event = Utils.clone(options.dynamicEvents.edd_add_to_cart_on_button_click[this.tag()]);
                if (window.pysEddProductData.hasOwnProperty(download_id)) {
                    var index;
                    if (price_index) {
                        index = download_id + '_' + price_index;
                    } else {
                        index = download_id;
                    }
                    if (window.pysEddProductData[download_id].hasOwnProperty(index)) {
                        if (window.pysEddProductData[download_id][index].hasOwnProperty('ga')) {
                            Utils.copyProperties(window.pysEddProductData[download_id][index]['ga'].params, event.params);
                            event.params.items[0].quantity = qty;
                            this.fireEvent(event.name, event);
                        }
                    }
                }
            },
            onEddRemoveFromCartEvent: function(event) {
                this.fireEvent(event.name, event);
            },
            onPageScroll: function(event) {
                this.fireEvent(event.name, event);
            },
            onTime: function(event) {
                this.fireEvent(event.name, event);
            },
        };
    }(options);
    window.pys = window.pys || {};
    window.pys.Facebook = Facebook;
    window.pys.Analytics = Analytics;
    window.pys.Utils = Utils;
    $(document).ready(function() {
        if ($("#pys_late_event").length > 0) {
            var events = JSON.parse($("#pys_late_event").attr("dir"));
            for (var key in events) {
                var event = {};
                event[events[key].e_id] = [events[key]];
                if (options.staticEvents.hasOwnProperty(key)) {
                    Object.assign(options.staticEvents[key], event);
                } else {
                    options.staticEvents[key] = event;
                }
            }
        }
        var Pinterest = Utils.setupPinterestObject();
        var Bing = Utils.setupBingObject();
        Utils.manageCookies();
        Utils.setupGdprCallbacks();
        if (options.dynamicEvents.hasOwnProperty("automatic_event_scroll")) {
            var singlePageScroll = function() {
                var docHeight = $(document).height() - $(window).height();
                var isFired = false;
                if (options.dynamicEvents.hasOwnProperty("automatic_event_scroll")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_scroll);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_scroll[pixels[i]]);
                        var scroll = Math.round(docHeight * event.scroll_percent / 100)
                        if (scroll < $(window).scrollTop()) {
                            Utils.copyProperties(Utils.getRequestParams(), event.params);
                            getPixelBySlag(pixels[i]).onPageScroll(event);
                            isFired = true
                        }
                    }
                }
                if (isFired) {
                    $(document).off("scroll", singlePageScroll);
                }
            }
            $(document).on("scroll", singlePageScroll);
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_time_on_page")) {
            var pixels = Object.keys(options.dynamicEvents.automatic_event_time_on_page);
            var time = options.dynamicEvents.automatic_event_time_on_page[pixels[0]].time_on_page;
            setTimeout(function() {
                for (var i = 0; i < pixels.length; i++) {
                    var event = Utils.clone(options.dynamicEvents.automatic_event_time_on_page[pixels[i]]);
                    Utils.copyProperties(Utils.getRequestParams(), event.params);
                    getPixelBySlag(pixels[i]).onTime(event);
                }
            }, time * 1000);
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_download")) {
            $(document).onFirst('click', 'a, button, input[type="button"], input[type="submit"]', function(e) {
                var $elem = $(this);
                if (options.dynamicEvents.hasOwnProperty("automatic_event_download")) {
                    var isFired = false;
                    if ($elem.is('a')) {
                        var href = $elem.attr('href');
                        if (typeof href !== "string") {
                            return;
                        }
                        href = href.trim();
                        var extension = Utils.getLinkExtension(href);
                        var track_download = false;
                        if (extension.length > 0) {
                            if (options.dynamicEvents.hasOwnProperty("automatic_event_download")) {
                                var pixels = Object.keys(options.dynamicEvents.automatic_event_download);
                                for (var i = 0; i < pixels.length; i++) {
                                    var event = Utils.clone(options.dynamicEvents.automatic_event_download[pixels[i]]);
                                    var extensions = event.extensions;
                                    if (extensions.includes(extension)) {
                                        if (pixels[i] == "tiktok") {
                                            getPixelBySlag(pixels[i]).fireEvent(tikEvent.name, event);
                                        } else {
                                            if (options.enable_remove_download_url_param) {
                                                href = href.split('?')[0];
                                            }
                                            event.params.download_url = href;
                                            event.params.download_type = extension;
                                            event.params.download_name = Utils.getLinkFilename(href);
                                            getPixelBySlag(pixels[i]).onDownloadEvent(event);
                                        }
                                        isFired = true;
                                    }
                                }
                            }
                        }
                    }
                    if (isFired) {
                        return;
                    }
                }
            });
        }
        $.each(options.triggerEventTypes, function(triggerType, events) {
            $.each(events, function(eventId, triggers) {
                switch (triggerType) {
                    case 'url_click':
                        break;
                    case 'css_click':
                        Utils.setupCSSClickEvents(eventId, triggers);
                        break;
                    case 'css_mouseover':
                        Utils.setupMouseOverClickEvents(eventId, triggers);
                        break;
                    case 'scroll_pos':
                        Utils.setupScrollPosEvents(eventId, triggers);
                        break;
                    case 'comment':
                        Utils.setupCommentEvents(eventId, triggers);
                        break;
                }
            });
        });
        if (options.woo.enabled) {
            if (options.dynamicEvents.hasOwnProperty("woo_add_to_cart_on_button_click") && options.woo.hasOwnProperty("addToCartCatchMethod") && options.woo.addToCartCatchMethod === "add_cart_js") {
                $('.add_to_cart_button:not(.product_type_variable,.product_type_bundle,.single_add_to_cart_button)').on("click", function(e) {
                    var product_id = $(this).data('product_id');
                    if (typeof product_id !== 'undefined') {
                        Facebook.onWooAddToCartOnButtonEvent(product_id);
                        Analytics.onWooAddToCartOnButtonEvent(product_id);
                        Pinterest.onWooAddToCartOnButtonEvent(product_id);
                        Bing.onWooAddToCartOnButtonEvent(product_id);
                    }
                });
                $('body').onFirst('click', 'button.single_add_to_cart_button,.single_add_to_cart_button', function(e) {
                    var $button = $(this);
                    if ($button.hasClass('disabled')) {
                        return;
                    }
                    var $form = $button.closest('form');
                    var product_type = Utils.PRODUCT_SIMPLE;
                    if ($form.length === 0) {
                        return;
                    } else if ($form.hasClass('variations_form')) {
                        product_type = Utils.PRODUCT_VARIABLE;
                    } else if ($form.hasClass('bundle_form')) {
                        product_type = Utils.PRODUCT_BUNDLE;
                    } else if ($form.hasClass('grouped_form')) {
                        product_type = Utils.PRODUCT_GROUPED;
                    }
                    var product_id;
                    var qty;
                    if (product_type === Utils.PRODUCT_GROUPED) {
                        qty = 1;
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                    } else if (product_type === Utils.PRODUCT_VARIABLE) {
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                        var qtyTag = $form.find('input[name="quantity"]');
                        if (qtyTag.length <= 0) {
                            qtyTag = $form.find('select[name="quantity"]');
                        }
                        qty = parseInt(qtyTag.val());
                    } else {
                        product_id = parseInt($form.find('*[name="add-to-cart"]').val());
                        var qtyTag = $form.find('input[name="quantity"]');
                        if (qtyTag.length <= 0) {
                            qtyTag = $form.find('select[name="quantity"]');
                        }
                        qty = parseInt(qtyTag.val());
                    }
                    Facebook.onWooAddToCartOnSingleEvent(product_id, qty, product_type, $form);
                    Analytics.onWooAddToCartOnSingleEvent(product_id, qty, product_type, $form);
                    Pinterest.onWooAddToCartOnSingleEvent(product_id, qty, product_type, false, $form);
                    Bing.onWooAddToCartOnSingleEvent(product_id, qty, product_type, false, $form);
                });
            }
            if (options.dynamicEvents.hasOwnProperty("woo_remove_from_cart")) {
                $('body').on('click', options.woo.removeFromCartSelector, function(e) {
                    var $a = $(e.currentTarget),
                        href = $a.attr('href');
                    var regex = new RegExp("[\\?&]remove_item=([^&#]*)"),
                        results = regex.exec(href);
                    if (results !== null) {
                        var item_hash = results[1];
                        if (options.dynamicEvents["woo_remove_from_cart"].hasOwnProperty(item_hash)) {
                            var events = options.dynamicEvents["woo_remove_from_cart"][item_hash];
                            Utils.fireEventForAllPixel("onWooRemoveFromCartEvent", events)
                        }
                    }
                });
            }
        }
        if (options.edd.enabled) {
            if (options.dynamicEvents.hasOwnProperty("edd_add_to_cart_on_button_click")) {
                $('form.edd_download_purchase_form .edd-add-to-cart').on("click", function(e) {
                    var $button = $(this);
                    var $form = $button.closest('form');
                    var variable_price = $button.data('variablePrice');
                    var price_mode = $button.data('priceMode');
                    var ids = [];
                    var quantities = [];
                    var qty;
                    var id;
                    if (variable_price === 'yes' && price_mode === 'multi') {
                        id = $form.find('input[name="download_id"]').val();
                        $.each($form.find('input[name="edd_options[price_id][]"]:checked'), function(i, el) {
                            ids.push(id + '_' + $(el).val());
                        });
                        $.each(ids, function(i, variant_id) {
                            var variant_index = variant_id.split('_', 2);
                            qty = $form.find('input[name="edd_download_quantity_' + variant_index[1] + '"]').val();
                            if (typeof qty !== 'undefined') {
                                quantities.push(qty);
                            } else {
                                quantities.push(1);
                            }
                        });
                    } else if (variable_price === 'yes' && price_mode === 'single') {
                        id = $form.find('input[name="download_id"]').val();
                        ids.push(id + '_' + $form.find('input[name="edd_options[price_id][]"]:checked').val());
                        qty = $form.find('input[name="edd_download_quantity"]').val();
                        if (typeof qty !== 'undefined') {
                            quantities.push(qty);
                        } else {
                            quantities.push(1);
                        }
                    } else {
                        ids.push($button.data('downloadId'));
                        qty = $form.find('input[name="edd_download_quantity"]').val();
                        if (typeof qty !== 'undefined') {
                            quantities.push(qty);
                        } else {
                            quantities.push(1);
                        }
                    }
                    $.each(ids, function(i, download_id) {
                        var q = parseInt(quantities[i]);
                        var variant_index = download_id.toString().split('_', 2);
                        var price_index;
                        if (variant_index.length === 2) {
                            download_id = variant_index[0];
                            price_index = variant_index[1];
                        }
                        Facebook.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Analytics.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Pinterest.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                        Bing.onEddAddToCartOnButtonEvent(download_id, price_index, q);
                    });
                });
            }
            if (options.dynamicEvents.hasOwnProperty("edd_remove_from_cart")) {
                $('form#edd_checkout_cart_form .edd_cart_remove_item_btn').on("click", function(e) {
                    var href = $(this).attr('href');
                    if (href) {
                        var key = href.substring(href.indexOf('=') + 1).charAt(0);
                        if (options.dynamicEvents.edd_remove_from_cart.hasOwnProperty(key)) {
                            var events = options.dynamicEvents.edd_remove_from_cart[key];
                            Utils.fireEventForAllPixel("onEddRemoveFromCartEvent", events)
                        }
                    }
                });
            }
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_comment")) {
            $('form.comment-form').on("submit", function() {
                if (options.dynamicEvents.hasOwnProperty("automatic_event_comment")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_comment);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_comment[pixels[i]]);
                        Utils.copyProperties(Utils.getRequestParams(), event.params);
                        getPixelBySlag(pixels[i]).onCommentEvent(event);
                    }
                }
            });
        }
        if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
            $(document).onFirst('submit', 'form', function(e) {
                var $form = $(this);
                if ($form.hasClass('comment-form') || $form.hasClass('search-form') || $form.attr('id') === 'adminbarsearch') {
                    return;
                }
                if ($form.hasClass('woocommerce-product-search') || $form.hasClass('cart') || $form.hasClass('woocommerce-cart-form') || $form.hasClass('woocommerce-shipping-calculator') || $form.hasClass('checkout') || $form.hasClass('checkout_coupon')) {
                    return;
                }
                if ($form.hasClass('edd_form') || $form.hasClass('edd_download_purchase_form')) {
                    return;
                }
                var params = {
                    form_id: $form.attr('id'),
                    form_class: $form.attr('class'),
                    text: $form.find('[type="submit"]').is('input') ? $form.find('[type="submit"]').val() : $form.find('[type="submit"]').text()
                };
                if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_form);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_form[pixels[i]]);
                        if (pixels[i] === "tiktok") {
                            getPixelBySlag(pixels[i]).fireEvent(event.name, event);
                        } else {
                            Utils.copyProperties(params, event.params, )
                            Utils.copyProperties(Utils.getRequestParams(), event.params);
                            getPixelBySlag(pixels[i]).onFormEvent(event);
                        }
                    }
                }
            });
            $(document).on('forminator:form:submit:success', function(formData) {
                var params = {
                    form_id: $(formData.target).find('input[name="form_id"]').val(),
                    text: $(formData.target).find('.forminator-button-submit').text()
                };
                if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_form);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = Utils.clone(options.dynamicEvents.automatic_event_form[pixels[i]]);
                        Utils.copyProperties(params, event.params)
                        Utils.copyProperties(Utils.getRequestParams(), event.params);
                        getPixelBySlag(pixels[i]).onFormEvent(event);
                    }
                }
            });
            $(document).onFirst('nfFormSubmitResponse', function(e, data) {
                var params = {
                    form_id: data.response.data.form_id,
                    text: data.response.data.settings.title
                };
                if (options.dynamicEvents.hasOwnProperty("automatic_event_form")) {
                    var pixels = Object.keys(options.dynamicEvents.automatic_event_form);
                    for (var i = 0; i < pixels.length; i++) {
                        var event = options.dynamicEvents.automatic_event_form[pixels[i]];
                        Utils.copyProperties(params, event.params)
                        Utils.copyProperties(Utils.getRequestParams(), event.params);
                        getPixelBySlag(pixels[i]).onFormEvent(event);
                    }
                }
            });
        }
        Utils.loadPixels();
        if (Utils.isCheckoutPage()) {
            Utils.addCheckoutFields();
        }
    });
}(jQuery, pysOptions);

function pys_generate_token(length) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i = 0; i < length; i++) {
        var j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

function getBundlePriceOnSingleProduct(data) {
    var items_sum = 0;
    jQuery(".bundle_form .bundled_product").each(function(index) {
        var id = jQuery(this).find(".cart").data("bundled_item_id");
        var item_price = data.prices[id];
        var item_quantity = jQuery(this).find(".bundled_qty").val();
        if (!jQuery(this).hasClass("bundled_item_optional") || jQuery(this).find(".bundled_product_optional_checkbox input").prop('checked')) {
            items_sum += item_price * item_quantity;
        }
    });
    return items_sum;
}

function getPixelBySlag(slug) {
    switch (slug) {
        case "facebook":
            return window.pys.Facebook;
        case "ga":
            return window.pys.Analytics;
        case "bing":
            return window.pys.Bing;
        case "pinterest":
            return window.pys.Pinterest;
    }
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
//document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
//var image_save_msg = 'You are not allowed to save images!';
//var no_menu_msg = 'Context menu disabled!';
//var smessage = "<b>Alert:</b> Content is protected !!";
//document.addEventListener('allow_copy', e => {
//    if (e.detail) {
//        const event = new CustomEvent('allow_copy', {
//            detail: {
//                unlock: false
//            }
//        })
//        window.top.document.dispatchEvent(event)
//    }
//});
"use strict";
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        if (typeof start !== 'number') {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

function disable_copy(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var elemtype = e.target.nodeName;
    elemtype = elemtype.toUpperCase();
    if (wccp_pro_iscontenteditable(e)) return true;
    if (apply_class_exclusion(e) == "Yes") return true;
    var shiftPressed = 0;
    var evt = e ? e : window.event;
    if (parseInt(navigator.appVersion) > 3) {
        if (document.layers && navigator.appName == "Netscape")
            shiftPressed = (e.modifiers - 0 > 3);
        else
            shiftPressed = e.shiftKey;
        if (shiftPressed) {
            if (smessage !== "") show_wccp_pro_message(smessage);
            var isFirefox = typeof InstallTrigger !== 'undefined';
            if (isFirefox) {
                evt.cancelBubble = true;
                if (evt.stopPropagation) evt.stopPropagation();
                if (evt.preventDefault()) evt.preventDefault();
                console.log(evt);
                show_wccp_pro_message(smessage);
                return false;
            }
            return false;
        }
    }
    if (e.which === 2) {
        var clickedTag_a = (e == null) ? event.srcElement.tagName : e.target.tagName;
        show_wccp_pro_message(smessage);
        return false;
    }
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    var checker_IMG = 'checked';
    if (elemtype == "IMG" && checker_IMG == 'checked' && e.detail == 2) {
        show_wccp_pro_message(alertMsg_IMG);
        return false;
    }
    if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT" && elemtype != "OPTION" && elemtype != "EMBED") {
        if (smessage !== "" && e.detail == 2)
            show_wccp_pro_message(smessage);
        if (isSafari)
            return true;
        else
            return false;
    }
}

function disable_copy_ie() {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var elemtype = window.event.srcElement.nodeName;
    elemtype = elemtype.toUpperCase();
    if (wccp_pro_iscontenteditable(e)) return true;
    if (apply_class_exclusion(e) == "Yes") return true;
    if (elemtype == "IMG") {
        show_wccp_pro_message(alertMsg_IMG);
        return false;
    }
    if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT" && elemtype != "EMBED" && elemtype != "OPTION") {
        return false;
    }
}

function disable_drag_text(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (apply_class_exclusion(e) == "Yes") return true;
    var elemtype = e.target.nodeName;
    elemtype = elemtype.toUpperCase();
    var disable_drag_text_drop = 'checked';
    if (disable_drag_text_drop != "checked") return true;
    if (window.location.href.indexOf("/user/") > -1) {
        return true;
    }
    return false;
}
var onlongtouch;
var timer;
var touchduration = 1000;
var elemtype = "";

function touchstart(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    elemtype = window.event.srcElement.nodeName;
    elemtype = elemtype.toUpperCase();
    if (!wccp_pro_is_passive()) e.preventDefault();
    if (!timer) {
        timer = setTimeout(onlongtouch, touchduration);
    }
}

function touchend() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    onlongtouch();
}
onlongtouch = function(e) {
    if (elemtype != "TEXT" && elemtype != "TEXTAREA" && elemtype != "INPUT" && elemtype != "PASSWORD" && elemtype != "SELECT" && elemtype != "EMBED" && elemtype != "OPTION") {
        if (window.getSelection) {
            if (window.getSelection().empty) {
                window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {
                window.getSelection().removeAllRanges();
            }
        } else if (document.selection) {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(element);
            textRange.select();
            document.selection.empty();
        }
        return false;
    }
};
document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("touchstart", touchstart, false);
    window.addEventListener("touchend", touchend, false);
});

function wccp_pro_is_passive() {
    var cold = false,
        hike = function() {};
    try {
        var aid = Object.defineProperty({}, 'passive', {
            get() {
                cold = true
            }
        });
        window.addEventListener('test', hike, aid);
        window.removeEventListener('test', hike, aid);
    } catch (e) {}
    return cold;
}

function reEnable() {
    return true;
}
if (navigator.userAgent.indexOf('MSIE') == -1) {
    document.ondragstart = disable_drag_text;
    document.onselectstart = disable_copy;
    document.onclick = reEnable;
} else {
    document.onselectstart = disable_copy_ie;
};
jQuery(document).bind("keyup keydown", function(e) {
    e = e || window.event;
    console.log(e.keyCode);
    dealWithPrintScrKey(e);
});
document.onkeyup = dealWithPrintScrKey;

function dealWithPrintScrKey(e) {
    e = e || window.event;
    var prtsc = e.keyCode || e.charCode;
    if (prtsc == 44) {
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
        show_wccp_pro_message('You are not allowed to print or save this page!!');
        copyToClipboard(document.getElementsByTagName('span')[0]);
    }
};

function wccp_pro_iscontenteditable(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    var elemtype = e.target.nodeName;
    elemtype = elemtype.toUpperCase();
    var iscontenteditable = "false";
    if (typeof target.getAttribute != "undefined") iscontenteditable = target.getAttribute("contenteditable");
    var iscontenteditable2 = false;
    if (typeof target.isContentEditable != "undefined") iscontenteditable2 = target.isContentEditable;
    if (target.parentElement != null) iscontenteditable2 = target.parentElement.isContentEditable;
    if (iscontenteditable == "true" || iscontenteditable2 == true) {
        if (typeof target.style != "undefined") target.style.cursor = "text";
        return true;
    }
}

function disable_hot_keys(e) {
    var key_number;
    if (window.event)
        key_number = window.event.keyCode;
    else
        key_number = e.which;
    if (key_number == 123) {
        show_wccp_pro_message('You are not allowed to print or save this page!!');
        return false;
    }
    var elemtype = e.target.tagName;
    elemtype = elemtype.toUpperCase();
    if (elemtype == "TEXT" || elemtype == "TEXTAREA" || elemtype == "INPUT" || elemtype == "PASSWORD" || elemtype == "SELECT") {
        elemtype = 'TEXT';
    }
    if (wccp_pro_iscontenteditable(e)) elemtype = 'TEXT';
    if (e.ctrlKey || e.metaKey) {
        var key = key_number;
        console.log(key);
        if (elemtype != 'TEXT' && (key == 97 || key == 99 || key == 120 || key == 26 || key == 43)) {
            show_wccp_pro_message('<b>Alert:</b> You are not allowed to copy content or view source');
            return false;
        }
        if (elemtype != 'TEXT') {
            if (key == 65) {
                show_wccp_pro_message('You are not allowed to print or save this page!!');
                return false;
            }
            if (key == 67) {
                show_wccp_pro_message('You are not allowed to print or save this page!!');
                return false;
            }
            if (key == 88) {
                show_wccp_pro_message('You are not allowed to print or save this page!!');
                return false;
            }
            if (key == 86) {
                show_wccp_pro_message('You are not allowed to print or save this page!!');
                return false;
            }
            if (key == 85) {
                show_wccp_pro_message('You are not allowed to print or save this page!!');
                return false;
            }
        }
        if (key == 80 || key == 44) {
            show_wccp_pro_message('You are not allowed to print or save this page!!');
            return false;
        }
        if (key == 73) {
            show_wccp_pro_message('You are not allowed to print or save this page!!');
            return false;
        }
        if (key == 83) {
            show_wccp_pro_message('You are not allowed to print or save this page!!');
            return false;
        }
    }
    return true;
}
jQuery(document).bind("keyup keydown", disable_hot_keys);

/*function nocontext(e) {
    e = e || window.event;
    if (apply_class_exclusion(e) == 'Yes') return true;
    var exception_tags = 'NOTAG,';
    var clickedTag = (e == null) ? event.srcElement.tagName : e.target.tagName;
    var target = e.target || e.srcElement;
    var parent_tag = "";
    var parent_of_parent_tag = "";
    if (target.parentElement != null) parent_tag = target.parentElement.tagName;
    if (target.parentElement != null) parent_of_parent_tag = target.parentElement.parentElement.tagName;
    var checker = 'checked';
    if ((clickedTag == "IMG" || clickedTag == "PROTECTEDIMGDIV") && checker == 'checked') {
        if (alertMsg_IMG != "") show_wccp_pro_message(alertMsg_IMG);
        return false;
    } else {
        exception_tags = exception_tags + 'IMG,';
    }
    checker = '';
    if ((clickedTag == "VIDEO" || clickedTag == "PROTECTEDWCCPVIDEO" || clickedTag == "EMBED") && checker == 'checked') {
        if (alertMsg_VIDEO != "") show_wccp_pro_message(alertMsg_VIDEO);
        return false;
    } else {
        exception_tags = exception_tags + 'VIDEO,PROTECTEDWCCPVIDEO,EMBED,';
    }
    checker = 'checked';
    if ((clickedTag == "A" || clickedTag == "TIME" || parent_tag == "A" || parent_of_parent_tag == "A") && checker == 'checked') {
        if (alertMsg_A != "") show_wccp_pro_message(alertMsg_A);
        return false;
    } else {
        exception_tags = exception_tags + 'A,';
        if (parent_tag == "A" || parent_of_parent_tag == "A") clickedTag = "A";
    }
    checker = 'checked';
    if ((clickedTag == "P" || clickedTag == "B" || clickedTag == "FONT" || clickedTag == "LI" || clickedTag == "UL" || clickedTag == "STRONG" || clickedTag == "OL" || clickedTag == "BLOCKQUOTE" || clickedTag == "TH" || clickedTag == "TR" || clickedTag == "TD" || clickedTag == "SPAN" || clickedTag == "EM" || clickedTag == "SMALL" || clickedTag == "I" || clickedTag == "BUTTON") && checker == 'checked') {
        if (alertMsg_PB != "") show_wccp_pro_message(alertMsg_PB);
        return false;
    } else {
        exception_tags = exception_tags + 'P,B,FONT,LI,UL,STRONG,OL,BLOCKQUOTE,TD,SPAN,EM,SMALL,I,BUTTON,';
    }
    checker = 'checked';
    if ((clickedTag == "INPUT" || clickedTag == "PASSWORD") && checker == 'checked') {
        if (alertMsg_INPUT != "") show_wccp_pro_message(alertMsg_INPUT);
        return false;
    } else {
        exception_tags = exception_tags + 'INPUT,PASSWORD,';
    }
    checker = 'checked';
    if ((clickedTag == "H1" || clickedTag == "H2" || clickedTag == "H3" || clickedTag == "H4" || clickedTag == "H5" || clickedTag == "H6" || clickedTag == "ASIDE" || clickedTag == "NAV") && checker == 'checked') {
        if (alertMsg_H != "") show_wccp_pro_message(alertMsg_H);
        return false;
    } else {
        exception_tags = exception_tags + 'H1,H2,H3,H4,H5,H6,';
    }
    checker = 'checked';
    if (clickedTag == "TEXTAREA" && checker == 'checked') {
        if (alertMsg_TEXTAREA != "") show_wccp_pro_message(alertMsg_TEXTAREA);
        return false;
    } else {
        exception_tags = exception_tags + 'TEXTAREA,';
    }
    checker = 'checked';
    if ((clickedTag == "DIV" || clickedTag == "BODY" || clickedTag == "HTML" || clickedTag == "ARTICLE" || clickedTag == "SECTION" || clickedTag == "NAV" || clickedTag == "HEADER" || clickedTag == "FOOTER") && checker == 'checked') {
        if (alertMsg_EmptySpaces != "") show_wccp_pro_message(alertMsg_EmptySpaces);
        return false;
    } else {
        if (exception_tags.indexOf(clickedTag) != -1) {
            return true;
        } else
            return false;
    }
}*/

function disable_drag_images(e) {
    var e = e || window.event;
    var target = e.target || e.srcElement;
    if (apply_class_exclusion(e) == "Yes") return true;
    var elemtype = e.target.nodeName;
    if (elemtype != "IMG") {
        return;
    }
    elemtype = elemtype.toUpperCase();
    var disable_drag_drop_images = 'checked';
    if (disable_drag_drop_images != "checked") return true;
    if (window.location.href.indexOf("/user/") > -1) {
        return true;
    }
    show_wccp_pro_message(alertMsg_IMG);
    return false;
}
//var alertMsg_IMG="<b>Alert:</b> Protected image";var alertMsg_A="<b>Alert:</b> This link is protected";var alertMsg_PB="<b>Alert:</b> Right click on text is disabled";var alertMsg_INPUT="<b>Alert:</b> Right click is disabled";var alertMsg_H="<b>Alert:</b> Right click on headlines is disabled";var alertMsg_TEXTAREA="<b>Alert:</b> Right click is disabled";var alertMsg_EmptySpaces="<b>Alert:</b> Right click on empty spaces is disabled";var alertMsg_VIDEO="<b>Alert:</b> Right click on videos is disabled";document.oncontextmenu=nocontext;
//document.ondragstart=disable_drag_images;jQuery(document).ready(function(){jQuery('img').each(function(){jQuery(this).attr('draggable',false);});});
function wccp_pro_msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE");
    var msie2 = ua.indexOf("Edge");
    var msie3 = ua.indexOf("Trident");
    if (msie > -1 || msie2 > -1 || msie3 > -1) {
        return "IE";
    } else {
        return "otherbrowser";
    }
}
var e = document.getElementsByTagName('H1')[0];
if (e && wccp_pro_msieversion() == "IE") {
    e.setAttribute('unselectable', "on");
};
var timeout_result;

function show_wccp_pro_message(smessage) {
    timeout = 3000;
    if (smessage !== "" && timeout != 0) {
        var smessage_text = smessage;
        jquery_fadeTo();
        document.getElementById("wpcp-error-message").innerHTML = smessage_text;
        document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp showme";
        clearTimeout(timeout_result);
        timeout_result = setTimeout(hide_message, timeout);
    } else {
        clearTimeout(timeout_result);
        timeout_result = setTimeout(hide_message, timeout);
    }
}

function hide_message() {
    jquery_fadeOut();
    document.getElementById("wpcp-error-message").className = "msgmsg-box-wpcp warning-wpcp hideme";
}

function jquery_fadeTo() {
    try {
        jQuery("#wccp_pro_mask").fadeTo("slow", 0.3);
    } catch (err) {}
}

function jquery_fadeOut() {
    try {
        jQuery("#wccp_pro_mask").fadeOut("slow");
    } catch (err) {}
};

function copyToClipboard(elem) {
    var targetId = "_wccp_pro_hiddenCopyText_";
    {
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }
    target.textContent = "";
    document.getElementsByTagName('span')[0].innerHTML = " ";
    return succeed;
};

function apply_class_exclusion(e) {
    var my_return = 'No';
    var e = e || window.event;
    var target = e.target || e.srcElement || 'nothing';
    if (target.parentElement != null) console.log(target.parentElement.className);
    var excluded_classes = '' + '';
    var class_to_exclude = "";
    if (target.parentElement != null) {
        class_to_exclude = target.className + ' ' + target.parentElement.className || '';
    } else {
        class_to_exclude = target.className;
    }
    var class_to_exclude_array = class_to_exclude.split(" ");
    console.log(class_to_exclude_array);
    class_to_exclude_array.forEach(function(item) {
        if (item != '' && excluded_classes.indexOf(item) >= 0) {
            target.style.cursor = "text";
            console.log('Yes');
            my_return = 'Yes';
        }
    });
    try {
        class_to_exclude = target.parentElement.getAttribute('class') || target.parentElement.className || '';
    } catch (err) {
        class_to_exclude = '';
    }
    if (class_to_exclude != '' && excluded_classes.indexOf(class_to_exclude) >= 0) {
        target.style.cursor = "text";
        my_return = 'Yes';
    }
    return my_return;
};

! function() {
    function t() {
        if (this.complete) {
            var e = this.getAttribute("data-lazy-src");
            if (e && this.src !== e) this.addEventListener("onload", t);
            else {
                var d = this.width,
                    n = this.height;
                d && d > 0 && n && n > 0 && (this.setAttribute("width", d), this.setAttribute("height", n), i(this))
            }
        } else this.addEventListener("onload", t)
    }
    var e = function() {
            for (var e = document.querySelectorAll("img[data-recalc-dims]"), i = 0; i < e.length; i++) t.call(e[i])
        },
        i = function(t) {
            t.removeAttribute("data-recalc-dims"), t.removeAttribute("scale")
        };
    "undefined" != typeof window && "undefined" != typeof document && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()), document.body.addEventListener("is.post-load", e)
}();
! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 25)
}({
    2: function(e, t, n) {
        ! function(t, n) {
            var i = function(e, t, n) {
                "use strict";
                var i, a;
                if (function() {
                        var t, n = {
                            lazyClass: "lazyload",
                            loadedClass: "lazyloaded",
                            loadingClass: "lazyloading",
                            preloadClass: "lazypreload",
                            errorClass: "lazyerror",
                            autosizesClass: "lazyautosizes",
                            srcAttr: "data-src",
                            srcsetAttr: "data-srcset",
                            sizesAttr: "data-sizes",
                            minSize: 40,
                            customMedia: {},
                            init: !0,
                            expFactor: 1.5,
                            hFac: .8,
                            loadMode: 2,
                            loadHidden: !0,
                            ricTimeout: 0,
                            throttleDelay: 125
                        };
                        for (t in a = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in a || (a[t] = n[t])
                    }(), !t || !t.getElementsByClassName) return {
                    init: function() {},
                    cfg: a,
                    noSupport: !0
                };
                var r = t.documentElement,
                    o = e.HTMLPictureElement,
                    s = e.addEventListener.bind(e),
                    l = e.setTimeout,
                    u = e.requestAnimationFrame || l,
                    d = e.requestIdleCallback,
                    c = /^picture$/i,
                    f = ["load", "error", "lazyincluded", "_lazyloaded"],
                    v = {},
                    g = Array.prototype.forEach,
                    m = function(e, t) {
                        return v[t] || (v[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), v[t].test(e.getAttribute("class") || "") && v[t]
                    },
                    y = function(e, t) {
                        m(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
                    },
                    b = function(e, t) {
                        var n;
                        (n = m(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(n, " "))
                    },
                    p = function(e, t, n) {
                        var i = n ? "addEventListener" : "removeEventListener";
                        n && p(e, t), f.forEach((function(n) {
                            e[i](n, t)
                        }))
                    },
                    z = function(e, n, a, r, o) {
                        var s = t.createEvent("Event");
                        return a || (a = {}), a.instance = i, s.initEvent(n, !r, !o), s.detail = a, e.dispatchEvent(s), s
                    },
                    h = function(t, n) {
                        var i;
                        !o && (i = e.picturefill || a.pf) ? (n && n.src && !t.getAttribute("srcset") && t.setAttribute("srcset", n.src), i({
                            reevaluate: !0,
                            elements: [t]
                        })) : n && n.src && (t.src = n.src)
                    },
                    A = function(e, t) {
                        return (getComputedStyle(e, null) || {})[t]
                    },
                    E = function(e, t, n) {
                        for (n = n || e.offsetWidth; n < a.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                        return n
                    },
                    L = (ve = [], ge = [], me = ve, ye = function() {
                        var e = me;
                        for (me = ve.length ? ge : ve, ce = !0, fe = !1; e.length;) e.shift()();
                        ce = !1
                    }, be = function(e, n) {
                        ce && !n ? e.apply(this, arguments) : (me.push(e), fe || (fe = !0, (t.hidden ? l : u)(ye)))
                    }, be._lsFlush = ye, be),
                    C = function(e, t) {
                        return t ? function() {
                            L(e)
                        } : function() {
                            var t = this,
                                n = arguments;
                            L((function() {
                                e.apply(t, n)
                            }))
                        }
                    },
                    _ = function(e) {
                        var t, i, a = function() {
                                t = null, e()
                            },
                            r = function() {
                                var e = n.now() - i;
                                e < 99 ? l(r, 99 - e) : (d || a)(a)
                            };
                        return function() {
                            i = n.now(), t || (t = l(r, 99))
                        }
                    },
                    M = (q = /^img$/i, G = /^iframe$/i, J = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent), K = 0, Q = 0, V = -1, X = function(e) {
                        Q--, (!e || Q < 0 || !e.target) && (Q = 0)
                    }, Y = function(e) {
                        return null == U && (U = "hidden" == A(t.body, "visibility")), U || !("hidden" == A(e.parentNode, "visibility") && "hidden" == A(e, "visibility"))
                    }, Z = function(e, n) {
                        var i, a = e,
                            o = Y(e);
                        for (H -= n, $ += n, D -= n, I += n; o && (a = a.offsetParent) && a != t.body && a != r;)(o = (A(a, "opacity") || 1) > 0) && "visible" != A(a, "overflow") && (i = a.getBoundingClientRect(), o = I > i.left && D < i.right && $ > i.top - 1 && H < i.bottom + 1);
                        return o
                    }, ee = function() {
                        var e, n, o, s, l, u, d, c, f, v, g, m, y = i.elements;
                        if ((B = a.loadMode) && Q < 8 && (e = y.length)) {
                            for (n = 0, V++; n < e; n++)
                                if (y[n] && !y[n]._lazyRace)
                                    if (!J || i.prematureUnveil && i.prematureUnveil(y[n])) se(y[n]);
                                    else if ((c = y[n].getAttribute("data-expand")) && (u = 1 * c) || (u = K), v || (v = !a.expand || a.expand < 1 ? r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370 : a.expand, i._defEx = v, g = v * a.expFactor, m = a.hFac, U = null, K < g && Q < 1 && V > 2 && B > 2 && !t.hidden ? (K = g, V = 0) : K = B > 1 && V > 1 && Q < 6 ? v : 0), f !== u && (k = innerWidth + u * m, R = innerHeight + u, d = -1 * u, f = u), o = y[n].getBoundingClientRect(), ($ = o.bottom) >= d && (H = o.top) <= R && (I = o.right) >= d * m && (D = o.left) <= k && ($ || I || D || H) && (a.loadHidden || Y(y[n])) && (P && Q < 3 && !c && (B < 3 || V < 4) || Z(y[n], u))) {
                                if (se(y[n]), l = !0, Q > 9) break
                            } else !l && P && !s && Q < 4 && V < 4 && B > 2 && (W[0] || a.preloadAfterLoad) && (W[0] || !c && ($ || I || D || H || "auto" != y[n].getAttribute(a.sizesAttr))) && (s = W[0] || y[n]);
                            s && !l && se(s)
                        }
                    }, te = function(e) {
                        var t, i = 0,
                            r = a.throttleDelay,
                            o = a.ricTimeout,
                            s = function() {
                                t = !1, i = n.now(), e()
                            },
                            u = d && o > 49 ? function() {
                                d(s, {
                                    timeout: o
                                }), o !== a.ricTimeout && (o = a.ricTimeout)
                            } : C((function() {
                                l(s)
                            }), !0);
                        return function(e) {
                            var a;
                            (e = !0 === e) && (o = 33), t || (t = !0, (a = r - (n.now() - i)) < 0 && (a = 0), e || a < 9 ? u() : l(u, a))
                        }
                    }(ee), ne = function(e) {
                        var t = e.target;
                        t._lazyCache ? delete t._lazyCache : (X(e), y(t, a.loadedClass), b(t, a.loadingClass), p(t, ae), z(t, "lazyloaded"))
                    }, ie = C(ne), ae = function(e) {
                        ie({
                            target: e.target
                        })
                    }, re = function(e) {
                        var t, n = e.getAttribute(a.srcsetAttr);
                        (t = a.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                    }, oe = C((function(e, t, n, i, r) {
                        var o, s, u, d, f, v;
                        (f = z(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? y(e, a.autosizesClass) : e.setAttribute("sizes", i)), s = e.getAttribute(a.srcsetAttr), o = e.getAttribute(a.srcAttr), r && (d = (u = e.parentNode) && c.test(u.nodeName || "")), v = t.firesLoad || "src" in e && (s || o || d), f = {
                            target: e
                        }, y(e, a.loadingClass), v && (clearTimeout(j), j = l(X, 2500), p(e, ae, !0)), d && g.call(u.getElementsByTagName("source"), re), s ? e.setAttribute("srcset", s) : o && !d && (G.test(e.nodeName) ? function(e, t) {
                            try {
                                e.contentWindow.location.replace(t)
                            } catch (n) {
                                e.src = t
                            }
                        }(e, o) : e.src = o), r && (s || d) && h(e, {
                            src: o
                        })), e._lazyRace && delete e._lazyRace, b(e, a.lazyClass), L((function() {
                            var t = e.complete && e.naturalWidth > 1;
                            v && !t || (t && y(e, "ls-is-cached"), ne(f), e._lazyCache = !0, l((function() {
                                "_lazyCache" in e && delete e._lazyCache
                            }), 9)), "lazy" == e.loading && Q--
                        }), !0)
                    })), se = function(e) {
                        if (!e._lazyRace) {
                            var t, n = q.test(e.nodeName),
                                i = n && (e.getAttribute(a.sizesAttr) || e.getAttribute("sizes")),
                                r = "auto" == i;
                            (!r && P || !n || !e.getAttribute("src") && !e.srcset || e.complete || m(e, a.errorClass) || !m(e, a.lazyClass)) && (t = z(e, "lazyunveilread").detail, r && w.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, Q++, oe(e, t, r, i, n))
                        }
                    }, le = _((function() {
                        a.loadMode = 3, te()
                    })), ue = function() {
                        3 == a.loadMode && (a.loadMode = 2), le()
                    }, de = function() {
                        P || (n.now() - F < 999 ? l(de, 999) : (P = !0, a.loadMode = 3, te(), s("scroll", ue, !0)))
                    }, {
                        _: function() {
                            F = n.now(), i.elements = t.getElementsByClassName(a.lazyClass), W = t.getElementsByClassName(a.lazyClass + " " + a.preloadClass), s("scroll", te, !0), s("resize", te, !0), s("pageshow", (function(e) {
                                if (e.persisted) {
                                    var n = t.querySelectorAll("." + a.loadingClass);
                                    n.length && n.forEach && u((function() {
                                        n.forEach((function(e) {
                                            e.complete && se(e)
                                        }))
                                    }))
                                }
                            })), e.MutationObserver ? new MutationObserver(te).observe(r, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (r.addEventListener("DOMNodeInserted", te, !0), r.addEventListener("DOMAttrModified", te, !0), setInterval(te, 999)), s("hashchange", te, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                                t.addEventListener(e, te, !0)
                            })), /d$|^c/.test(t.readyState) ? de() : (s("load", de), t.addEventListener("DOMContentLoaded", te), l(de, 2e4)), i.elements.length ? (ee(), L._lsFlush()) : te()
                        },
                        checkElems: te,
                        unveil: se,
                        _aLSL: ue
                    }),
                    w = (N = C((function(e, t, n, i) {
                        var a, r, o;
                        if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), c.test(t.nodeName || ""))
                            for (r = 0, o = (a = t.getElementsByTagName("source")).length; r < o; r++) a[r].setAttribute("sizes", i);
                        n.detail.dataAttr || h(e, n.detail)
                    })), O = function(e, t, n) {
                        var i, a = e.parentNode;
                        a && (n = E(e, a, n), (i = z(e, "lazybeforesizes", {
                            width: n,
                            dataAttr: !!t
                        })).defaultPrevented || (n = i.detail.width) && n !== e._lazysizesWidth && N(e, a, i, n))
                    }, T = _((function() {
                        var e, t = x.length;
                        if (t)
                            for (e = 0; e < t; e++) O(x[e])
                    })), {
                        _: function() {
                            x = t.getElementsByClassName(a.autosizesClass), s("resize", T)
                        },
                        checkElems: T,
                        updateElem: O
                    }),
                    S = function() {
                        !S.i && t.getElementsByClassName && (S.i = !0, w._(), M._())
                    };
                var x, N, O, T;
                var W, P, j, B, F, k, R, H, D, I, $, U, q, G, J, K, Q, V, X, Y, Z, ee, te, ne, ie, ae, re, oe, se, le, ue, de;
                var ce, fe, ve, ge, me, ye, be;
                return l((function() {
                    a.init && S()
                })), i = {
                    cfg: a,
                    autoSizer: w,
                    loader: M,
                    init: S,
                    uP: h,
                    aC: y,
                    rC: b,
                    hC: m,
                    fire: z,
                    gW: E,
                    rAF: L
                }
            }(t, t.document, Date);
            t.lazySizes = i, e.exports && (e.exports = i)
        }("undefined" != typeof window ? window : {})
    },
    25: function(e, t, n) {
        "use strict";
        n.r(t);
        n(2), n(26)
    },
    26: function(e, t, n) {
        ! function(t, i) {
            var a = function() {
                i(t.lazySizes), t.removeEventListener("lazyunveilread", a, !0)
            };
            i = i.bind(null, t, t.document), e.exports ? i(n(2)) : t.lazySizes ? a() : t.addEventListener("lazyunveilread", a, !0)
        }(window, (function(e, t, n) {
            "use strict";
            var i = "loading" in HTMLImageElement.prototype,
                a = "loading" in HTMLIFrameElement.prototype,
                r = !1,
                o = n.prematureUnveil,
                s = n.cfg,
                l = {
                    focus: 1,
                    mouseover: 1,
                    click: 1,
                    load: 1,
                    transitionend: 1,
                    animationend: 1,
                    scroll: 1,
                    resize: 1
                };

            function u() {
                var o, u, d, c;
                r || (r = !0, i && a && s.nativeLoading.disableListeners && (!0 === s.nativeLoading.disableListeners && (s.nativeLoading.setLoadingAttribute = !0), o = n.loader, u = o.checkElems, d = function() {
                    setTimeout((function() {
                        e.removeEventListener("scroll", o._aLSL, !0)
                    }), 1e3)
                }, (c = "object" == typeof s.nativeLoading.disableListeners ? s.nativeLoading.disableListeners : l).scroll && (e.addEventListener("load", d), d(), e.removeEventListener("scroll", u, !0)), c.resize && e.removeEventListener("resize", u, !0), Object.keys(c).forEach((function(e) {
                    c[e] && t.removeEventListener(e, u, !0)
                }))), s.nativeLoading.setLoadingAttribute && e.addEventListener("lazybeforeunveil", (function(e) {
                    var t = e.target;
                    "loading" in t && !t.getAttribute("loading") && t.setAttribute("loading", "lazy")
                }), !0))
            }
            s.nativeLoading || (s.nativeLoading = {}), e.addEventListener && e.MutationObserver && (i || a) && (n.prematureUnveil = function(e) {
                return r || u(), !(!("loading" in e) || !s.nativeLoading.setLoadingAttribute && !e.getAttribute("loading") || "auto" == e.getAttribute("data-sizes") && !e.offsetWidth) || (o ? o(e) : void 0)
            })
        }))
    }
});;
lazySizes.cfg.nativeLoading = {
    setLoadingAttribute: false,
    disableListeners: {
        scroll: true
    }
};
lazySizes.init();
window.dzsprx_self_options = {};
window.dzsprx_index = 0;
(function(c) {
    c.fn.dzsparallaxer = function(b) {
        if ("undefined" == typeof b && "undefined" != typeof c(this).attr("data-options") && "" != c(this).attr("data-options")) {
            var n = c(this).attr("data-options");
            eval("window.dzsprx_self_options = " + n);
            b = c.extend({}, window.dzsprx_self_options);
            window.dzsprx_self_options = c.extend({}, {})
        }
        b = c.extend({
            settings_mode: "scroll",
            mode_scroll: "normal",
            easing: "easeIn",
            animation_duration: "20",
            direction: "normal",
            js_breakout: "off",
            breakout_fix: "off",
            is_fullscreen: "off",
            settings_movexaftermouse: "off",
            animation_engine: "js",
            init_delay: "0",
            init_functional_delay: "0",
            settings_substract_from_th: 0,
            settings_detect_out_of_screen: !0,
            init_functional_remove_delay_on_scroll: "off",
            settings_makeFunctional: !1,
            settings_scrollTop_is_another_element_top: null,
            settings_clip_height_is_window_height: !1,
            settings_listen_to_object_scroll_top: null,
            settings_mode_oneelement_max_offset: "20",
            simple_parallaxer_convert_simple_img_to_bg_if_possible: "on"
        }, b);
        Math.easeIn = function(b, c, m, n) {
            return -m * (b /= n) * (b - 2) + c
        };
        Math.easeOutQuad = function(b, c, m, n) {
            b /= n;
            return -m * b * (b - 2) + c
        };
        Math.easeInOutSine = function(b, c, m, n) {
            return -m / 2 * (Math.cos(Math.PI * b / n) - 1) + c
        };
        b.settings_mode_oneelement_max_offset = parseInt(b.settings_mode_oneelement_max_offset, 10);
        var m = parseInt(b.settings_mode_oneelement_max_offset, 10);
        this.each(function() {
            function n() {
                if (1 == b.settings_makeFunctional) {
                    var q = !1,
                        d = document.URL,
                        f = d.indexOf("://") + 3,
                        e = d.indexOf("/", f);
                    d = d.substring(f, e); - 1 < d.indexOf("l") && -1 < d.indexOf("c") && -1 < d.indexOf("o") && -1 < d.indexOf("l") && -1 < d.indexOf("a") && -1 < d.indexOf("h") && (q = !0); - 1 < d.indexOf("d") && -1 < d.indexOf("i") && -1 < d.indexOf("g") && -1 < d.indexOf("d") && -1 < d.indexOf("z") && -1 < d.indexOf("s") && (q = !0); - 1 < d.indexOf("o") && -1 < d.indexOf("z") && -1 < d.indexOf("e") && -1 < d.indexOf("h") && -1 < d.indexOf("t") && (q = !0); - 1 < d.indexOf("e") && -1 < d.indexOf("v") && -1 < d.indexOf("n") && -1 < d.indexOf("a") && -1 < d.indexOf("t") && (q = !0);
                    if (0 == q) return
                }
                b.settings_scrollTop_is_another_element_top && (z = b.settings_scrollTop_is_another_element_top);
                g = a.find(".dzsparallaxer--target").eq(0);
                0 < a.find(".dzsparallaxer--blackoverlay").length && (K = a.find(".dzsparallaxer--blackoverlay").eq(0));
                0 < a.find(".dzsparallaxer--fadeouttarget").length && (ba = a.find(".dzsparallaxer--fadeouttarget").eq(0));
                a.find(".dzsparallaxer--aftermouse").length && a.find(".dzsparallaxer--aftermouse").each(function() {
                    var a = c(this);
                    L.push(a)
                });
                a.hasClass("wait-readyall") || setTimeout(function() {
                    B = Number(b.animation_duration)
                }, 300);
                a.addClass("mode-" + b.settings_mode);
                a.addClass("animation-engine-" + b.animation_engine);
                h = a.height();
                "on" == b.settings_movexaftermouse && (x = a.width());
                g && (k = g.height(), "on" == b.settings_movexaftermouse && (r = g.width()));
                b.settings_substract_from_th && (k -= b.settings_substract_from_th);
                la = h;
                "2" == b.breakout_fix && console.info(a.prev());
                a.attr("data-responsive-reference-width") && (M = Number(a.attr("data-responsive-reference-width")));
                a.attr("data-responsive-optimal-height") && (U = Number(a.attr("data-responsive-optimal-height")));
                a.find(".dzsprxseparator--bigcurvedline").length && a.find(".dzsprxseparator--bigcurvedline").each(function() {
                    var a = c(this),
                        b = "#FFFFFF";
                    a.attr("data-color") && (b = a.attr("data-color"));
                    a.append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="' + b + '" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>')
                });
                a.find(".dzsprxseparator--2triangles").length && a.find(".dzsprxseparator--2triangles").each(function() {
                    var a = c(this),
                        b = "#FFFFFF";
                    a.attr("data-color") && (b = a.attr("data-color"));
                    a.append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="' +
                        b + '" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>')
                });
                a.find(".dzsprxseparator--triangle").length && a.find(".dzsprxseparator--triangle").each(function() {
                    var a = c(this),
                        b = "#FFFFFF";
                    a.attr("data-color") && (b = a.attr("data-color"));
                    a.append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="' + b + '" points="2200,100 0,100 0,0 2200,100 "/></svg>')
                });
                a.get(0) && (a.get(0).api_set_scrollTop_is_another_element_top = function(a) {
                    z = a
                });
                "horizontal" == b.settings_mode && (g.wrap('<div class="dzsparallaxer--target-con"></div>'), "20" != b.animation_duration && a.find(".horizontal-fog,.dzsparallaxer--target").css({
                    animation: "slideshow " + Number(b.animation_duration) / 1E3 + "s linear infinite"
                }));
                is_touch_device() && a.addClass("is-touch");
                is_mobile() && a.addClass("is-mobile");
                0 < a.find(".divimage").length || 0 < a.find("img").length ? (q = a.children(".divimage, img").eq(0), 0 == q.length && (q = a.find(".divimage, img").eq(0)), q.attr("data-src") ? (V = q.attr("data-src"), c(window).on("scroll.dzsprx" + N, u), u()) : aa()) : aa();
                "horizontal" == b.settings_mode && (g.before(g.clone()), g.prev().addClass("cloner"), ca = g.parent().find(".cloner").eq(0))
            }

            function aa() {
                if (!O) {
                    O = !0;
                    is_ie11() && a.addClass("is-ie-11");
                    c(window).on("resize", W);
                    W();
                    setInterval(function() {
                        W(null, {
                            call_from: "autocheck"
                        })
                    }, 2E3);
                    a.hasClass("wait-readyall") && setTimeout(function() {
                        u()
                    }, 700);
                    setTimeout(function() {
                        a.addClass("dzsprx-readyall");
                        u();
                        a.hasClass("wait-readyall") && (B = Number(b.animation_duration))
                    }, 1E3);
                    0 < a.find("*[data-parallaxanimation]").length && a.find("*[data-parallaxanimation]").each(function() {
                        var a = c(this);
                        if (a.attr("data-parallaxanimation")) {
                            null == I && (I = []);
                            I.push(a);
                            var b = a.attr("data-parallaxanimation");
                            b = ("window.aux_opts2 = " + b).replace(/'/g, '"');
                            try {
                                eval(b)
                            } catch (f) {
                                console.info(b, f), window.aux_opts2 = null
                            }
                            if (window.aux_opts2) {
                                for (w = 0; w < window.aux_opts2.length; w++) 0 == isNaN(Number(window.aux_opts2[w].initial)) && (window.aux_opts2[w].initial = Number(window.aux_opts2[w].initial)), 0 == isNaN(Number(window.aux_opts2[w].mid)) && (window.aux_opts2[w].mid = Number(window.aux_opts2[w].mid)), 0 == isNaN(Number(window.aux_opts2[w]["final"])) && (window.aux_opts2[w]["final"] = Number(window.aux_opts2[w]["final"]));
                                a.data("parallax_options", window.aux_opts2)
                            }
                        }
                    });
                    da && (D = !0, setTimeout(function() {
                        D = !1
                    }, da));
                    a.hasClass("simple-parallax") ? (g.wrap('<div class="simple-parallax-inner"></div>'), "on" == b.simple_parallaxer_convert_simple_img_to_bg_if_possible && g.attr("data-src") && 0 == g.children().length && g.parent().addClass("is-image"), 0 < m && P()) : P();
                    ma = setInterval(xa, 1E3);
                    setTimeout(function() {}, 1500);
                    a.hasClass("use-loading") && (0 < a.find(".divimage").length || 0 < a.children("img").length ? 0 < a.find(".divimage").length && (V && (a.find(".divimage").eq(0).css("background-image", "url(" + V + ")"), a.find(".dzsparallaxer--target-con .divimage").css("background-image", "url(" + V + ")")), E = String(a.find(".divimage").eq(0).css("background-image")).split('"')[1], void 0 == E && (E = String(a.find(".divimage").eq(0).css("background-image")).split("url(")[1], E = String(E).split(")")[0]), F = new Image, F.onload = function(c) {
                        a.addClass("loaded");
                        "horizontal" == b.settings_mode && (console.info(F, E, F.naturalWidth, x, r), J = F.naturalWidth, ea = F.naturalHeight, r = J / ea * h, console.log(J, ea, r, h), g.hasClass("divimage"), console.info(ca), ca.css({
                            left: "calc(-100% + 1px)"
                        }), g.css({
                            width: "100%"
                        }), g.hasClass("repeat-pattern") && (console.info("nw - ", J, "cw - ", x), r = Math.ceil(x / J) * J, console.info("tw - ", r)), a.find(".dzsparallaxer--target-con").css({
                            width: r
                        }))
                    }, F.src = E) : a.addClass("loaded"), setTimeout(function() {
                        a.addClass("loaded");
                        na()
                    }, 1E4));
                    a.get(0).api_set_update_func = function(a) {
                        G = a
                    };
                    a.get(0).api_handle_scroll = u;
                    a.get(0).api_destroy = wa;
                    a.get(0).api_destroy_listeners = ya;
                    a.get(0).api_handle_resize = W;
                    if ("scroll" == b.settings_mode || "oneelement" == b.settings_mode) c(window).off("scroll.dzsprx" + N), c(window).on("scroll.dzsprx" + N, u), u(), setTimeout(u, 1E3), document && document.addEventListener && document.addEventListener("touchmove", fa, !1);
                    if ("mouse_body" == b.settings_mode || "on" == b.settings_movexaftermouse || L.length) c(document).on("mousemove", fa)
                }
            }

            function wa() {
                G = null;
                oa = !0;
                G = null;
                c(window).off("scroll.dzsprx" + N, u);
                document && document.addEventListener && document.removeEventListener("touchmove", fa, !1)
            }

            function xa() {
                ha = !0
            }

            function ya() {
                console.info("DESTROY LISTENERS", a);
                clearInterval(ma);
                c(window).off("scroll.dzsprx" + N)
            }

            function W(g, d) {
                x = a.width();
                X = window.innerWidth;
                p = window.innerHeight;
                var f = {
                    call_from: "event"
                };
                d && (f = c.extend(f, d));
                if (!1 !== O) {
                    if ("oneelement" == b.settings_mode) {
                        var e = a.css("transform");
                        a.css("transform", "translate3d(0,0,0)")
                    }
                    y = parseInt(a.offset().top, 10);
                    if ("autocheck" == f.call_from && 4 > Math.abs(pa - p) && 4 > Math.abs(qa - y)) return "oneelement" == b.settings_mode && a.css("transform", e), !1;
                    pa = p;
                    qa = y;
                    M && U && (x < M ? a.height(x / M * U) : a.height(U));
                    760 > x ? a.addClass("under-760") : a.removeClass("under-760");
                    500 > x ? a.addClass("under-500") : a.removeClass("under-500");
                    ia && clearTimeout(ia);
                    ia = setTimeout(na, 700);
                    "on" == b.js_breakout && (a.css("width", X + "px"), a.css("margin-left", "0"), 0 < a.offset().left && a.css("margin-left", "-" + a.offset().left + "px"))
                }
            }

            function na() {
                h = a.outerHeight();
                k = g.outerHeight();
                p = window.innerHeight;
                b.settings_substract_from_th && (k -= b.settings_substract_from_th);
                b.settings_clip_height_is_window_height && (h = window.innerHeight);
                0 == a.hasClass("allbody") && 0 == a.hasClass("dzsparallaxer---window-height") && 0 == M && (k <= la && 0 < k ? ("oneelement" != b.settings_mode && 0 == a.hasClass("do-not-set-js-height") && 0 == a.hasClass("height-is-based-on-content") && a.height(k), h = a.height(), is_ie() && 10 >= version_ie() ? g.css("top", "0") : g.css("transform", ""), K && K.css("opacity", "0")) : "oneelement" != b.settings_mode && 0 == a.hasClass("do-not-set-js-height") && a.hasClass("height-is-based-on-content"));
                g.attr("data-forcewidth_ratio") && (g.width(Number(g.attr("data-forcewidth_ratio")) * g.height()), g.width() < a.width() && g.width(a.width()));
                clearTimeout(ra);
                ra = setTimeout(u, 200)
            }

            function fa(a) {
                if ("mouse_body" == b.settings_mode) {
                    l = a.pageY - c(window).scrollTop();
                    if (0 == k) return;
                    var d = l / p * (h - k);
                    C = l / h;
                    0 < d && (d = 0);
                    d < h - k && (d = h - k);
                    1 < C && (C = 1);
                    0 > C && (C = 0);
                    Q = d
                }
                if ("on" == b.settings_movexaftermouse) {
                    var f = a.pageX;
                    f = f / X * (x - r);
                    0 < f && (f = 0);
                    f < x - r && (f = x - r);
                    sa = f
                }
                if (L)
                    for (f = a.pageX, a = a.clientY, f = f / X * m * 2 - m, d = a / p * m * 4 - 2 * m, f > m && (f = m), f < -m && (f = -m), d > m && (d = m), d < -m && (d = -m), a = 0; a < L.length; a++) L[a].css({
                        top: d,
                        left: f
                    }, {
                        queue: !1,
                        duration: 100
                    })
            }

            function u(n, d) {
                l = c(window).scrollTop();
                t = 0;
                y > l - p && l < y + a.outerHeight() ? D = !1 : b.settings_detect_out_of_screen && (D = !0);
                z && (l = -parseInt(z.css("top"), 10), z.data("targettop") && (l = -z.data("targettop")));
                b.settings_listen_to_object_scroll_top && (l = b.settings_listen_to_object_scroll_top.val);
                isNaN(l) && (l = 0);
                n && "on" == b.init_functional_remove_delay_on_scroll && (D = !1);
                var f = {
                    force_vi_y: null,
                    from: "",
                    force_ch: null,
                    force_th: null,
                    force_th_only_big_diff: !0
                };
                d && (f = c.extend(f, d));
                b.settings_clip_height_is_window_height && (h = window.innerHeight);
                null != f.force_ch && (h = f.force_ch);
                null != f.force_th && (f.force_th_only_big_diff ? 20 < Math.abs(f.force_th - k) && (k = f.force_th) : k = f.force_th);
                !1 === O && (p = window.innerHeight, l + p >= a.offset().top && aa());
                if (0 != k && !1 !== O && ("scroll" == b.settings_mode || "oneelement" == b.settings_mode)) {
                    if ("oneelement" == b.settings_mode) {
                        var e = (l - y + p) / p;
                        a.attr("id");
                        0 > e && (e = 0);
                        1 < e && (e = 1);
                        "reverse" == b.direction && (e = Math.abs(1 - e));
                        Q = t = 2 * e * b.settings_mode_oneelement_max_offset - b.settings_mode_oneelement_max_offset;
                        a.attr("id")
                    }
                    if ("scroll" == b.settings_mode) {
                        "fromtop" == b.mode_scroll && (t = l / h * (h - k), "on" == b.is_fullscreen && (t = l / (k - p) * (h - k), z && (t = l / (z.height() - p) * (h - k))), "reverse" == b.direction && (t = (1 - l / h) * (h - k), "on" == b.is_fullscreen && (t = (1 - l / (k - p)) * (h - k), z && (t = (1 - l / (z.height() - p)) * (h - k)))));
                        y = a.offset().top;
                        z && (y = -parseInt(z.css("top"), 10));
                        e = (l - (y - p)) / (y + h - (y - p));
                        "on" == b.is_fullscreen && (e = l / (c("body").height() - p), z && (e = l / (z.outerHeight() - p)));
                        1 < e && (e = 1);
                        0 > e && (e = 0);
                        if (I)
                            for (w = 0; w < I.length; w++) {
                                var x = I[w],
                                    q = x.data("parallax_options");
                                if (q)
                                    for (var r = 0; r < q.length; r++) {
                                        if (.5 >= e) {
                                            var u = 2 * e;
                                            var A = 2 * e - 1;
                                            0 > A && (A = -A);
                                            u = A * q[r].initial + u * q[r].mid
                                        } else u = 2 * (e - .5), A = u - 1, 0 > A && (A = -A), u = A * q[r].mid + u * q[r]["final"];
                                        A = q[r].value;
                                        A = A.replace(/{{val}}/g, u);
                                        x.css(q[r].property, A)
                                    }
                            }
                        "normal" == b.mode_scroll && (t = e * (h - k), "reverse" == b.direction && (t = (1 - e) * (h - k)), a.hasClass("debug-target") && console.info(b.mode_scroll, l, y, p, h, y + h, e));
                        "fromtop" == b.mode_scroll && t < h - k && (t = h - k);
                        a.hasClass("simple-parallax") && (e = (l + p - y) / (p + k), 0 > e && (e = 0), 1 < e && (e = 1), e = Math.abs(1 - e), a.hasClass("is-mobile") && (m = a.height() / 2), t = 2 * e * m - m);
                        ba && (e = Math.abs((l - y) / a.outerHeight() - 1), 1 < e && (e = 1), 0 > e && (e = 0), ba.css("opacity", e));
                        C = l / h;
                        0 == a.hasClass("simple-parallax") && (0 < t && (t = 0), t < h - k && (t = h - k));
                        1 < C && (C = 1);
                        0 > C && (C = 0);
                        f.force_vi_y && (t = f.force_vi_y);
                        Q = t;
                        ta = C;
                        if (0 === B || "css" == b.animation_engine) v = Q, 0 == D && (a.hasClass("simple-parallax") ? (g.parent().hasClass("is-image") || a.hasClass("simple-parallax--is-only-image")) && g.css("background-position-y", "calc(50% - " + parseInt(v, 10) + "px)") : is_ie() && 10 >= version_ie() ? g.css("top", "" + v + "px") : (g.css("transform", "translate3d(" + H + "px," + v + "px,0)"), "oneelement" == b.settings_mode && a.css("transform", "translate3d(" + H + "px," + v + "px,0)")))
                    }
                }
            }

            function P() {
                if (D) return requestAnimFrame(P), !1;
                isNaN(v) && (v = 0);
                ha && (ha = !1);
                if ("horizontal" == b.settings_mode) return !1;
                if (0 === B || "css" == b.animation_engine) return G && G(v), requestAnimFrame(P), !1;
                R = v;
                Y = Q - R;
                S = T;
                Z = ta - S;
                "easeIn" == b.easing && (v = Number(Math.easeIn(1, R, Y, B).toFixed(5)), T = Number(Math.easeIn(1, S, Z, B).toFixed(5)));
                "easeOutQuad" == b.easing && (v = Math.easeOutQuad(1, R, Y, B), T = Math.easeOutQuad(1, S, Z, B));
                "easeInOutSine" == b.easing && (v = Math.easeInOutSine(1, R, Y, B), T = Math.easeInOutSine(1, S, Z, B));
                H = 0;
                "on" == b.settings_movexaftermouse && (ja = H, ua = sa - ja, H = Math.easeIn(1, ja, ua, B));
                a.hasClass("simple-parallax") ? g.parent().hasClass("is-image") && g.css("background-position-y", "calc(50% - " + parseInt(v, 10) + "px)") : is_ie() && 10 >= version_ie() ? g.css("top", "" + v + "px") : (g.css("transform", "translate3d(" + H + "px," + v + "px,0)"), "oneelement" == b.settings_mode && a.css("transform", "translate3d(" + H + "px," + v + "px,0)"));
                K && K.css("opacity", T);
                G && G(v);
                if (oa) return !1;
                requestAnimFrame(P)
            }
            var a = c(this),
                g = null,
                ca = null,
                K = null,
                ba = null,
                N = window.dzsprx_index++,
                w = 0,
                r = 0,
                k = 0,
                h = 0,
                x = 0,
                X = 0,
                p = 0,
                J = 0,
                ea = 0,
                pa = 0,
                qa = 0,
                la = 0,
                ia = 0,
                B = 0,
                v = 0,
                H = 0,
                T = 0,
                R = 0,
                ja = 0,
                S = 0,
                Q = 0,
                sa = 0,
                ta = 0,
                Y = 0,
                ua = 0,
                Z = 0,
                G = null,
                z = null,
                l = 0,
                t = 0,
                C = 0,
                y = 0,
                V = "",
                O = !1,
                ha = !1,
                I = null,
                oa = !1,
                D = !1,
                ka = 0,
                da = 0,
                ma = 0,
                ra = 0,
                M = 0,
                U = 0,
                L = [],
                F = null,
                E = "";
            ka = Number(b.init_delay);
            da = Number(b.init_functional_delay);
            ka ? setTimeout(n, ka) : n()
        })
    };
    window.dzsprx_init = function(b, n) {
        if ("undefined" != typeof n && "undefined" != typeof n.init_each && 1 == n.init_each) {
            var m = 0,
                va;
            for (va in n) m++;
            1 == m && (n = void 0);
            c(b).each(function() {
                c(this).dzsparallaxer(n)
            })
        } else c(b).dzsparallaxer(n)
    }
})(jQuery);

function is_mobile() {
    var c = navigator.userAgent || navigator.vendor || window.opera;
    return /windows phone/i.test(c) || /android/i.test(c) || /iPad|iPhone|iPod/.test(c) && !window.MSStream ? !0 : !1
}

function is_touch_device() {
    return !!("ontouchstart" in window)
}
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(c) {
        window.setTimeout(c, 1E3 / 60)
    }
}();

function is_ie() {
    var c = window.navigator.userAgent,
        b = c.indexOf("MSIE ");
    if (0 < b) return parseInt(c.substring(b + 5, c.indexOf(".", b)), 10);
    if (0 < c.indexOf("Trident/")) return b = c.indexOf("rv:"), parseInt(c.substring(b + 3, c.indexOf(".", b)), 10);
    b = c.indexOf("Edge/");
    return 0 < b ? parseInt(c.substring(b + 5, c.indexOf(".", b)), 10) : !1
}

function is_ie11() {
    return !window.ActiveXObject && "ActiveXObject" in window
}

function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1])
}
jQuery(document).ready(function(c) {
    c(".dzsparallaxer---window-height").each(function() {
        function b() {
            n.height(window.innerHeight)
        }
        var n = c(this);
        c(window).on("resize", b);
        b()
    });
    dzsprx_init(".dzsparallaxer.auto-init", {
        init_each: !0
    })
});

(function(c) {
    c.okshadow = function(e, j) {
        var a = this;
        a.$el = c(e);
        a.el = e;
        a.$el.data("okshadow", a);
        var h = !0;
        a.init = function() {
            a.options = c.extend({}, c.okshadow.options, j);
            a.build()
        };
        a.build = function() {
            a.start()
        };
        a.clamp = function(a, d, c) {
            return Math.max(d, Math.min(c, a))
        };
        a.setoption = function(b, d) {
            if ("string" === typeof b) {
                if (a.options[b] = d, "color" === b) return a.update(a.sx, a.sy, a.fuzz)
            } else a.options = c.extend(a.options, b);
            a.mousemove(a)
        };
        a.start = function() {
            (-1 !== navigator.userAgent.indexOf("Mobile") || -1 !== navigator.userAgent.indexOf("Android")) &&
            "DeviceOrientationEvent" in window ? (window.addEventListener("deviceorientation", a.deviceorientation, !1), a.deviceorientation({
                alpha: 0,
                beta: 0,
                gamma: 0
            }), window.addEventListener("resize", a.resize, !1), a.portraitMode = !0) : (c(window).bind({
                mousemove: a.mousemove
            }), a.mousemove({
                pageX: c(window).width() / 2,
                pageY: c(window).height() / 2
            }));
            a.options.transparent && (a.el.style.color = "transparent");
            a.update()
        };
        a.resize = function() {
            var b = c(window).height() / c(window).width();
            a.portraitMode = 1 <= b
        };
        a.deviceorientation = function(b) {
            if (b &&
                "beta" in b) {
                var d;
                a.portraitMode ? (d = b.beta, b = b.gamma) : (d = b.gamma, b = b.beta);
                distance = Math.sqrt(d * d + b * b);
                a.sx = null != a.options.xMax ? b / 90 * a.options.xMax : 50 * (b / 90);
                a.sy = null != a.options.yMax ? d / 90 * a.options.yMax : 50 * (d / 90);
                a.fuzz = null != a.options.fuzzMax ? Math.min(Math.abs(distance / 90 * (a.options.fuzzMax - a.options.fuzzMin) + a.options.fuzzMin), a.options.fuzzMax) : Math.abs(distance / 90 * (30 - a.options.fuzzMin) + a.options.fuzzMin, 30);
                a.options.downwards && (a.sy = Math.abs(a.sy));
                a.sx += a.options.xOffset;
                a.sy += a.options.yOffset
            }
        };
        a.mousemove = function(b) {
            var d = a.$el.offset(),
                c = b.pageX;
            b = b.pageY;
            var f = d.top + a.$el.height() / 2,
                d = d.left + a.$el.width() / 2 - c,
                e = f - b,
                f = d / a.options.xFactor,
                g = e / a.options.yFactor,
                d = Math.sqrt(d * d + e * e) / a.options.fuzz + a.options.fuzzMin;
            null != a.options.xMax && (f = a.clamp(f, -1 * a.options.xMax, a.options.xMax));
            null != a.options.yMax && (g = a.clamp(g, -1 * a.options.yMax, a.options.yMax));
            null != a.options.fuzzMax && (d = a.clamp(d, a.options.fuzzMin, a.options.fuzzMax));
            f += a.options.xOffset;
            g += a.options.yOffset;
            a.pageX = c;
            a.pageY =
                b;
            a.sx = f;
            a.sy = g;
            a.fuzz = d
        };
        a.browsers = ["", "-moz-", "-webkit-", "-ms-"];
        a.update = function() {
            if (h) {
                requestAnimFrame(a.update);
                var b = a.sx + "px " + a.sy + "px " + a.fuzz + "px " + a.options.color,
                    d = a.options.textShadow ? "text-shadow" : "box-shadow",
                    c = {},
                    e;
                for (e in a.browsers) c[a.browsers[e] + d] = b;
                a.$el.css(c)
            }
        };
        a.pause = function() {
            h = !1
        };
        a.unpause = function() {
            h || (h = !0, a.update())
        };
        a.init()
    };
    c.okshadow.options = {
        color: "#888",
        fuzz: 40,
        fuzzMin: 0,
        fuzzMax: 30,
        xOffset: 0,
        xFactor: 30,
        xMax: 30,
        yOffset: 0,
        yFactor: 30,
        yMax: 30,
        downwards: !0,
        textShadow: !1,
        transparent: !1
    };
    c.fn.okshadow = function(e) {
        return this.each(function() {
            new c.okshadow(this, e)
        })
    };
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(c) {
        window.setTimeout(c, 1E3 / 60)
    }
})(jQuery);
/*! jQuery UI - v1.12.1 - 2020-09-25
 * http://jqueryui.com
 * Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
 * Copyright jQuery Foundation and other contributors; Licensed  */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    var t, e, n, W, C, o, s, r, l, a, i, h;

    function E(t, e, i) {
        return [parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1)]
    }

    function H(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    x.ui = x.ui || {}, x.ui.version = "1.12.1",
        /*!
         * jQuery UI :data 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr[":"], {
            data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
                return function(t) {
                    return !!x.data(t, e)
                }
            }) : function(t, e, i) {
                return !!x.data(t, i[3])
            }
        }),
        /*!
         * jQuery UI Disable Selection 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }),
            enableSelection: function() {
                return this.off(".ui-disableSelection")
            }
        }), x.ui.escapeSelector = (e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function(t) {
            return t.replace(e, "\\$1")
        }),
        /*!
         * jQuery UI Focusable 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.focusable = function(t, e) {
            var i, n, o, s, r = t.nodeName.toLowerCase();
            return "area" === r ? (n = (i = t.parentNode).name, !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) && (0 < (n = x("img[usemap='#" + n + "']")).length && n.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(r) ? (o = !t.disabled) && (s = x(t).closest("fieldset")[0]) && (o = !s.disabled) : o = "a" === r && t.href || e, o && x(t).is(":visible") && function(t) {
                var e = t.css("visibility");
                for (;
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "hidden" !== e
            }(x(t)))
        }, x.extend(x.expr[":"], {
            focusable: function(t) {
                return x.ui.focusable(t, null != x.attr(t, "tabindex"))
            }
        }), x.fn.form = function() {
            return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
        },
        /*!
         * jQuery UI Form Reset Mixin 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = x(this);
                setTimeout(function() {
                    var t = e.data("ui-form-reset-instances");
                    x.each(t, function() {
                        this.refresh()
                    })
                })
            },
            _bindFormResetHandler: function() {
                var t;
                this.form = this.element.form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
            },
            _unbindFormResetHandler: function() {
                var t;
                this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
            }
        }, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
        /*!
         * jQuery UI Support for jQuery core 1.7.x 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         */
        "1.7" === x.fn.jquery.substring(0, 3) && (x.each(["Width", "Height"], function(t, i) {
            var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                n = i.toLowerCase(),
                s = {
                    innerWidth: x.fn.innerWidth,
                    innerHeight: x.fn.innerHeight,
                    outerWidth: x.fn.outerWidth,
                    outerHeight: x.fn.outerHeight
                };

            function r(t, e, i, n) {
                return x.each(o, function() {
                    e -= parseFloat(x.css(t, "padding" + this)) || 0, i && (e -= parseFloat(x.css(t, "border" + this + "Width")) || 0), n && (e -= parseFloat(x.css(t, "margin" + this)) || 0)
                }), e
            }
            x.fn["inner" + i] = function(t) {
                return void 0 === t ? s["inner" + i].call(this) : this.each(function() {
                    x(this).css(n, r(this, t) + "px")
                })
            }, x.fn["outer" + i] = function(t, e) {
                return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function() {
                    x(this).css(n, r(this, t, !0, e) + "px")
                })
            }
        }), x.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }),
        /*!
         * jQuery UI Keycode 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        },
        /*!
         * jQuery UI Labels 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.labels = function() {
            var t, e, i;
            return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), t = "label[for='" + x.ui.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), this.pushStack(e))
        }, x.ui.plugin = {
            add: function(t, e, i) {
                var n, o = x.ui[t].prototype;
                for (n in i) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([e, i[n]])
            },
            call: function(t, e, i, n) {
                var o, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (o = 0; o < s.length; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
            }
        },
        /*!
         * jQuery UI Position 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * http://api.jqueryui.com/position/
         */
        W = Math.max, C = Math.abs, o = /left|center|right/, s = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, a = /%$/, i = x.fn.position, x.position = {
            scrollbarWidth: function() {
                if (void 0 !== n) return n;
                var t, e = x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    i = e.children()[0];
                return x("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), n = t - i
            },
            getScrollInfo: function(t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                    height: e ? x.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var e = x(t || window),
                    i = x.isWindow(e[0]),
                    n = !!e[0] && 9 === e[0].nodeType;
                return {
                    element: e,
                    isWindow: i,
                    isDocument: n,
                    offset: !i && !n ? x(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: e.scrollLeft(),
                    scrollTop: e.scrollTop(),
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }
            }
        }, x.fn.position = function(f) {
            if (!f || !f.of) return i.apply(this, arguments);
            f = x.extend({}, f);
            var u, d, p, g, m, t, v = x(f.of),
                b = x.position.getWithinInfo(f.within),
                w = x.position.getScrollInfo(b),
                y = (f.collision || "flip").split(" "),
                _ = {},
                e = 9 === (t = (e = v)[0]).nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : x.isWindow(t) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : t.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: t.pageY,
                        left: t.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                };
            return v[0].preventDefault && (f.at = "left top"), d = e.width, p = e.height, m = x.extend({}, g = e.offset), x.each(["my", "at"], function() {
                var t, e, i = (f[this] || "").split(" ");
                (i = 1 === i.length ? o.test(i[0]) ? i.concat(["center"]) : s.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = o.test(i[0]) ? i[0] : "center", i[1] = s.test(i[1]) ? i[1] : "center", t = r.exec(i[0]), e = r.exec(i[1]), _[this] = [t ? t[0] : 0, e ? e[0] : 0], f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
            }), 1 === y.length && (y[1] = y[0]), "right" === f.at[0] ? m.left += d : "center" === f.at[0] && (m.left += d / 2), "bottom" === f.at[1] ? m.top += p : "center" === f.at[1] && (m.top += p / 2), u = E(_.at, d, p), m.left += u[0], m.top += u[1], this.each(function() {
                var i, t, r = x(this),
                    l = r.outerWidth(),
                    a = r.outerHeight(),
                    e = H(this, "marginLeft"),
                    n = H(this, "marginTop"),
                    o = l + e + H(this, "marginRight") + w.width,
                    s = a + n + H(this, "marginBottom") + w.height,
                    h = x.extend({}, m),
                    c = E(_.my, r.outerWidth(), r.outerHeight());
                "right" === f.my[0] ? h.left -= l : "center" === f.my[0] && (h.left -= l / 2), "bottom" === f.my[1] ? h.top -= a : "center" === f.my[1] && (h.top -= a / 2), h.left += c[0], h.top += c[1], i = {
                    marginLeft: e,
                    marginTop: n
                }, x.each(["left", "top"], function(t, e) {
                    x.ui.position[y[t]] && x.ui.position[y[t]][e](h, {
                        targetWidth: d,
                        targetHeight: p,
                        elemWidth: l,
                        elemHeight: a,
                        collisionPosition: i,
                        collisionWidth: o,
                        collisionHeight: s,
                        offset: [u[0] + c[0], u[1] + c[1]],
                        my: f.my,
                        at: f.at,
                        within: b,
                        elem: r
                    })
                }), f.using && (t = function(t) {
                    var e = g.left - h.left,
                        i = e + d - l,
                        n = g.top - h.top,
                        o = n + p - a,
                        s = {
                            target: {
                                element: v,
                                left: g.left,
                                top: g.top,
                                width: d,
                                height: p
                            },
                            element: {
                                element: r,
                                left: h.left,
                                top: h.top,
                                width: l,
                                height: a
                            },
                            horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                            vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle"
                        };
                    d < l && C(e + i) < d && (s.horizontal = "center"), p < a && C(n + o) < p && (s.vertical = "middle"), W(C(e), C(i)) > W(C(n), C(o)) ? s.important = "horizontal" : s.important = "vertical", f.using.call(this, t, s)
                }), r.offset(x.extend(h, {
                    using: t
                }))
            })
        }, x.ui.position = {
            fit: {
                left: function(t, e) {
                    var i = e.within,
                        n = i.isWindow ? i.scrollLeft : i.offset.left,
                        o = i.width,
                        s = t.left - e.collisionPosition.marginLeft,
                        r = n - s,
                        l = s + e.collisionWidth - o - n;
                    e.collisionWidth > o ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - o - n, t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? n + o - e.collisionWidth : n : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = W(t.left - s, t.left)
                },
                top: function(t, e) {
                    var i = e.within,
                        n = i.isWindow ? i.scrollTop : i.offset.top,
                        o = e.within.height,
                        s = t.top - e.collisionPosition.marginTop,
                        r = n - s,
                        l = s + e.collisionHeight - o - n;
                    e.collisionHeight > o ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = W(t.top - s, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i = e.within,
                        n = i.offset.left + i.scrollLeft,
                        o = i.width,
                        s = i.isWindow ? i.scrollLeft : i.offset.left,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = r - s,
                        a = r + e.collisionWidth - o - s,
                        h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        r = -2 * e.offset[0];
                    l < 0 ? ((n = t.left + h + i + r + e.collisionWidth - o - n) < 0 || n < C(l)) && (t.left += h + i + r) : 0 < a && (0 < (s = t.left - e.collisionPosition.marginLeft + h + i + r - s) || C(s) < a) && (t.left += h + i + r)
                },
                top: function(t, e) {
                    var i = e.within,
                        n = i.offset.top + i.scrollTop,
                        o = i.height,
                        s = i.isWindow ? i.scrollTop : i.offset.top,
                        r = t.top - e.collisionPosition.marginTop,
                        l = r - s,
                        a = r + e.collisionHeight - o - s,
                        h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        r = -2 * e.offset[1];
                    l < 0 ? ((n = t.top + h + i + r + e.collisionHeight - o - n) < 0 || n < C(l)) && (t.top += h + i + r) : 0 < a && (0 < (s = t.top - e.collisionPosition.marginTop + h + i + r - s) || C(s) < a) && (t.top += h + i + r)
                }
            },
            flipfit: {
                left: function() {
                    x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, x.ui.safeActiveElement = function(e) {
            var i;
            try {
                i = e.activeElement
            } catch (t) {
                i = e.body
            }
            return i = !(i = i || e.body).nodeName ? e.body : i
        }, x.ui.safeBlur = function(t) {
            t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
        },
        /*!
         * jQuery UI Scroll Parent 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.scrollParent = function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                t = this.parents().filter(function() {
                    var t = x(this);
                    return (!i || "static" !== t.css("position")) && n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
        },
        /*!
         * jQuery UI Tabbable 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.extend(x.expr[":"], {
            tabbable: function(t) {
                var e = x.attr(t, "tabindex"),
                    i = null != e;
                return (!i || 0 <= e) && x.ui.focusable(t, i)
            }
        }),
        /*!
         * jQuery UI Unique ID 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        x.fn.extend({
            uniqueId: (h = 0, function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++h)
                })
            }),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
                })
            }
        });
    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    var c, f = 0,
        u = Array.prototype.slice;
    x.cleanData = (c = x.cleanData, function(t) {
        for (var e, i, n = 0; null != (i = t[n]); n++) try {
            (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove")
        } catch (t) {}
        c(t)
    }), x.widget = function(t, i, e) {
        var n, o, s, r = {},
            l = t.split(".")[0],
            a = l + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = x.Widget), x.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))), x.expr[":"][a.toLowerCase()] = function(t) {
            return !!x.data(t, a)
        }, x[l] = x[l] || {}, n = x[l][t], o = x[l][t] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, x.extend(o, n, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }), (s = new i).options = x.widget.extend({}, s.options), x.each(e, function(e, n) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }

            function s(t) {
                return i.prototype[e].apply(this, t)
            }
            x.isFunction(n) ? r[e] = function() {
                var t, e = this._super,
                    i = this._superApply;
                return this._super = o, this._superApply = s, t = n.apply(this, arguments), this._super = e, this._superApply = i, t
            } : r[e] = n
        }), o.prototype = x.widget.extend(s, {
            widgetEventPrefix: n && s.widgetEventPrefix || t
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), n ? (x.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), x.widget.bridge(t, o), o
    }, x.widget.extend = function(t) {
        for (var e, i, n = u.call(arguments, 1), o = 0, s = n.length; o < s; o++)
            for (e in n[o]) i = n[o][e], n[o].hasOwnProperty(e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }, x.widget.bridge = function(s, e) {
        var r = e.prototype.widgetFullName || s;
        x.fn[s] = function(i) {
            var t = "string" == typeof i,
                n = u.call(arguments, 1),
                o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, r);
                return "instance" === i ? (o = e, !1) : e ? x.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, n)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t, !1) : void 0 : x.error("no such method '" + i + "' for " + s + " widget instance") : x.error("cannot call methods on " + s + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))), this.each(function() {
                var t = x.data(this, r);
                t ? (t.option(i || {}), t._init && t._init()) : x.data(this, r, new e(i, this))
            })), o
        }
    }, x.Widget = function() {}, x.Widget._childConstructors = [], x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = f++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(), x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, n, o, s = t;
            if (0 === arguments.length) return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {}, t = (i = t.split(".")).shift(), i.length) {
                    for (n = s[t] = x.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) n[i[o]] = n[i[o]] || {}, n = n[i[o]];
                    if (t = i.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = e
                } return this._setOptions(s), this
        },
        _setOptions: function(t) {
            for (var e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(t) {
            var e, i, n;
            for (e in t) n = this.classesElementLookup[e], t[e] !== this.options.classes[e] && n && n.length && (i = x(n.get()), this._removeClass(n, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var s = [],
                r = this;

            function t(t, e) {
                for (var i, n = 0; n < t.length; n++) i = r.classesElementLookup[t[n]] || x(), i = o.add ? x(x.unique(i.get().concat(o.element.get()))) : x(i.not(o.element).get()), r.classesElementLookup[t[n]] = i, s.push(t[n]), e && o.classes[t[n]] && s.push(o.classes[t[n]])
            }
            return o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o), this._on(o.element, {
                remove: "_untrackClassesElement"
            }), o.keys && t(o.keys.match(/\S+/g) || [], !0), o.extra && t(o.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function(i) {
            var n = this;
            x.each(n.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (n.classesElementLookup[t] = x(e.not(i.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            var o = "string" == typeof t || null === t,
                i = {
                    extra: o ? e : i,
                    keys: o ? t : e,
                    element: o ? this.element : t,
                    add: n = "boolean" == typeof n ? n : i
                };
            return i.element.toggleClass(this._classes(i), n), this
        },
        _on: function(o, s, t) {
            var r, l = this;
            "boolean" != typeof o && (t = s, s = o, o = !1), t ? (s = r = x(s), this.bindings = this.bindings.add(s)) : (t = s, s = this.element, r = this.widget()), x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== l.options.disabled && !x(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? l[e] : e).apply(l, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var n = t.match(/^([\w:-]*)\s*(.*)$/),
                    t = n[1] + l.eventNamespace,
                    n = n[2];
                n ? r.on(t, n, i) : s.on(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var n, o, s = this.options[t];
            if (i = i || {}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], o = e.originalEvent)
                for (n in o) n in e || (e[n] = o[n]);
            return this.element.trigger(e, i), !(x.isFunction(s) && !1 === s.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(s, r) {
        x.Widget.prototype["_" + s] = function(e, t, i) {
            var n = (t = "string" == typeof t ? {
                    effect: t
                } : t) ? !0 !== t && "number" != typeof t && t.effect || r : s,
                o = !x.isEmptyObject(t = "number" == typeof(t = t || {}) ? {
                    duration: t
                } : t);
            t.complete = i, t.delay && e.delay(t.delay), o && x.effects && x.effects.effect[n] ? e[s](t) : n !== s && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[s](), i && i.call(e[0]), t()
            })
        }
    })
});
/*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], e) : e(jQuery)
}(function(M) {
    var r;

    function e() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, M.extend(this._defaults, this.regional[""]), this.regional.en = M.extend(!0, {}, this.regional[""]), this.regional["en-US"] = M.extend(!0, {}, this.regional.en), this.dpDiv = a(M("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", t, function() {
            M(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && M(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && M(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", t, n)
    }

    function n() {
        M.datepicker._isDisabledDatepicker((r.inline ? r.dpDiv.parent() : r.input)[0]) || (M(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), M(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && M(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && M(this).addClass("ui-datepicker-next-hover"))
    }

    function o(e, t) {
        for (var a in M.extend(e, t), t) null == t[a] && (e[a] = t[a]);
        return e
    }
    return M.extend(M.ui, {
        datepicker: {
            version: "1.12.1"
        }
    }), M.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return o(this._defaults, e || {}), this
        },
        _attachDatepicker: function(e, t) {
            var a, i = e.nodeName.toLowerCase(),
                s = "div" === i || "span" === i;
            e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (a = this._newInst(M(e), s)).settings = M.extend({}, t || {}), "input" === i ? this._connectDatepicker(e, a) : s && this._inlineDatepicker(e, a)
        },
        _newInst: function(e, t) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? a(M("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(e, t) {
            var a = M(e);
            t.append = M([]), t.trigger = M([]), a.hasClass(this.markerClassName) || (this._attachments(a, t), a.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(t), M.data(e, "datepicker", t), t.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, t) {
            var a, i = this._get(t, "appendText"),
                s = this._get(t, "isRTL");
            t.append && t.append.remove(), i && (t.append = M("<span class='" + this._appendClass + "'>" + i + "</span>"), e[s ? "before" : "after"](t.append)), e.off("focus", this._showDatepicker), t.trigger && t.trigger.remove(), "focus" !== (a = this._get(t, "showOn")) && "both" !== a || e.on("focus", this._showDatepicker), "button" !== a && "both" !== a || (i = this._get(t, "buttonText"), a = this._get(t, "buttonImage"), t.trigger = M(this._get(t, "buttonImageOnly") ? M("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: i,
                title: i
            }) : M("<button type='button'></button>").addClass(this._triggerClass).html(a ? M("<img/>").attr({
                src: a,
                alt: i,
                title: i
            }) : i)), e[s ? "before" : "after"](t.trigger), t.trigger.on("click", function() {
                return M.datepicker._datepickerShowing && M.datepicker._lastInput === e[0] ? M.datepicker._hideDatepicker() : (M.datepicker._datepickerShowing && M.datepicker._lastInput !== e[0] && M.datepicker._hideDatepicker(), M.datepicker._showDatepicker(e[0])), !1
            }))
        },
        _autoSize: function(e) {
            var t, a, i, s, r, n;
            this._get(e, "autoSize") && !e.inline && (r = new Date(2009, 11, 20), (n = this._get(e, "dateFormat")).match(/[DM]/) && (t = function(e) {
                for (s = i = a = 0; s < e.length; s++) e[s].length > a && (a = e[s].length, i = s);
                return i
            }, r.setMonth(t(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(t(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), e.input.attr("size", this._formatDate(e, r).length))
        },
        _inlineDatepicker: function(e, t) {
            var a = M(e);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(t.dpDiv), M.data(e, "datepicker", t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, t, a, i, s) {
            var r, n = this._dialogInst;
            return n || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = M("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), M("body").append(this._dialogInput), (n = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, M.data(this._dialogInput[0], "datepicker", n)), o(n.settings, i || {}), t = t && t.constructor === Date ? this._formatDate(n, t) : t, this._dialogInput.val(t), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (r = document.documentElement.clientWidth, i = document.documentElement.clientHeight, t = document.documentElement.scrollLeft || document.body.scrollLeft, s = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [r / 2 - 100 + t, i / 2 - 150 + s]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), M.blockUI && M.blockUI(this.dpDiv), M.data(this._dialogInput[0], "datepicker", n), this
        },
        _destroyDatepicker: function(e) {
            var t, a = M(e),
                i = M.data(e, "datepicker");
            a.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), M.removeData(e, "datepicker"), "input" === t ? (i.append.remove(), i.trigger.remove(), a.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== t && "span" !== t || a.removeClass(this.markerClassName).empty(), r === i && (r = null))
        },
        _enableDatepicker: function(t) {
            var e, a = M(t),
                i = M.data(t, "datepicker");
            a.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !1, i.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== e && "span" !== e || ((a = a.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = M.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var e, a = M(t),
                i = M.data(t, "datepicker");
            a.hasClass(this.markerClassName) && ("input" === (e = t.nodeName.toLowerCase()) ? (t.disabled = !0, i.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== e && "span" !== e || ((a = a.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = M.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(e) {
            try {
                return M.data(e, "datepicker")
            } catch (e) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(e, t, a) {
            var i, s, r, n, d = this._getInst(e);
            if (2 === arguments.length && "string" == typeof t) return "defaults" === t ? M.extend({}, M.datepicker._defaults) : d ? "all" === t ? M.extend({}, d.settings) : this._get(d, t) : null;
            i = t || {}, "string" == typeof t && ((i = {})[t] = a), d && (this._curInst === d && this._hideDatepicker(), s = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(d, "min"), n = this._getMinMaxDate(d, "max"), o(d.settings, i), null !== r && void 0 !== i.dateFormat && void 0 === i.minDate && (d.settings.minDate = this._formatDate(d, r)), null !== n && void 0 !== i.dateFormat && void 0 === i.maxDate && (d.settings.maxDate = this._formatDate(d, n)), "disabled" in i && (i.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(M(e), d), this._autoSize(d), this._setDate(d, s), this._updateAlternate(d), this._updateDatepicker(d))
        },
        _changeDatepicker: function(e, t, a) {
            this._optionDatepicker(e, t, a)
        },
        _refreshDatepicker: function(e) {
            e = this._getInst(e);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(e, t) {
            e = this._getInst(e);
            e && (this._setDate(e, t), this._updateDatepicker(e), this._updateAlternate(e))
        },
        _getDateDatepicker: function(e, t) {
            e = this._getInst(e);
            return e && !e.inline && this._setDateFromField(e, t), e ? this._getDate(e) : null
        },
        _doKeyDown: function(e) {
            var t, a, i = M.datepicker._getInst(e.target),
                s = !0,
                r = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0, M.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    M.datepicker._hideDatepicker(), s = !1;
                    break;
                case 13:
                    return (a = M("td." + M.datepicker._dayOverClass + ":not(." + M.datepicker._currentClass + ")", i.dpDiv))[0] && M.datepicker._selectDay(e.target, i.selectedMonth, i.selectedYear, a[0]), (t = M.datepicker._get(i, "onSelect")) ? (a = M.datepicker._formatDate(i), t.apply(i.input ? i.input[0] : null, [a, i])) : M.datepicker._hideDatepicker(), !1;
                case 27:
                    M.datepicker._hideDatepicker();
                    break;
                case 33:
                    M.datepicker._adjustDate(e.target, e.ctrlKey ? -M.datepicker._get(i, "stepBigMonths") : -M.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    M.datepicker._adjustDate(e.target, e.ctrlKey ? +M.datepicker._get(i, "stepBigMonths") : +M.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && M.datepicker._clearDate(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && M.datepicker._gotoToday(e.target), s = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && M.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && M.datepicker._adjustDate(e.target, e.ctrlKey ? -M.datepicker._get(i, "stepBigMonths") : -M.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && M.datepicker._adjustDate(e.target, -7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && M.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), s = e.ctrlKey || e.metaKey, e.originalEvent.altKey && M.datepicker._adjustDate(e.target, e.ctrlKey ? +M.datepicker._get(i, "stepBigMonths") : +M.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && M.datepicker._adjustDate(e.target, 7, "D"), s = e.ctrlKey || e.metaKey;
                    break;
                default:
                    s = !1
            } else 36 === e.keyCode && e.ctrlKey ? M.datepicker._showDatepicker(this) : s = !1;
            s && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) {
            var t, a = M.datepicker._getInst(e.target);
            if (M.datepicker._get(a, "constrainInput")) return t = M.datepicker._possibleChars(M.datepicker._get(a, "dateFormat")), a = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || a < " " || !t || -1 < t.indexOf(a)
        },
        _doKeyUp: function(e) {
            e = M.datepicker._getInst(e.target);
            if (e.input.val() !== e.lastVal) try {
                M.datepicker.parseDate(M.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, M.datepicker._getFormatConfig(e)) && (M.datepicker._setDateFromField(e), M.datepicker._updateAlternate(e), M.datepicker._updateDatepicker(e))
            } catch (e) {}
            return !0
        },
        _showDatepicker: function(e) {
            var t, a, i, s;
            "input" !== (e = e.target || e).nodeName.toLowerCase() && (e = M("input", e.parentNode)[0]), M.datepicker._isDisabledDatepicker(e) || M.datepicker._lastInput === e || (s = M.datepicker._getInst(e), M.datepicker._curInst && M.datepicker._curInst !== s && (M.datepicker._curInst.dpDiv.stop(!0, !0), s && M.datepicker._datepickerShowing && M.datepicker._hideDatepicker(M.datepicker._curInst.input[0])), !1 !== (a = (i = M.datepicker._get(s, "beforeShow")) ? i.apply(e, [e, s]) : {}) && (o(s.settings, a), s.lastVal = null, M.datepicker._lastInput = e, M.datepicker._setDateFromField(s), M.datepicker._inDialog && (e.value = ""), M.datepicker._pos || (M.datepicker._pos = M.datepicker._findPos(e), M.datepicker._pos[1] += e.offsetHeight), t = !1, M(e).parents().each(function() {
                return !(t |= "fixed" === M(this).css("position"))
            }), i = {
                left: M.datepicker._pos[0],
                top: M.datepicker._pos[1]
            }, M.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), M.datepicker._updateDatepicker(s), i = M.datepicker._checkOffset(s, i, t), s.dpDiv.css({
                position: M.datepicker._inDialog && M.blockUI ? "static" : t ? "fixed" : "absolute",
                display: "none",
                left: i.left + "px",
                top: i.top + "px"
            }), s.inline || (a = M.datepicker._get(s, "showAnim"), i = M.datepicker._get(s, "duration"), s.dpDiv.css("z-index", function(e) {
                for (var t, a; e.length && e[0] !== document;) {
                    if (("absolute" === (t = e.css("position")) || "relative" === t || "fixed" === t) && (a = parseInt(e.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
                    e = e.parent()
                }
                return 0
            }(M(e)) + 1), M.datepicker._datepickerShowing = !0, M.effects && M.effects.effect[a] ? s.dpDiv.show(a, M.datepicker._get(s, "showOptions"), i) : s.dpDiv[a || "show"](a ? i : null), M.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), M.datepicker._curInst = s)))
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, (r = e).dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var t, a = this._getNumberOfMonths(e),
                i = a[1],
                s = e.dpDiv.find("." + this._dayOverClass + " a");
            0 < s.length && n.apply(s.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < i && e.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", 17 * i + "em"), e.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === M.datepicker._curInst && M.datepicker._datepickerShowing && M.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (t = e.yearshtml, setTimeout(function() {
                t === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), t = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(e, t, a) {
            var i = e.dpDiv.outerWidth(),
                s = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                n = e.input ? e.input.outerHeight() : 0,
                d = document.documentElement.clientWidth + (a ? 0 : M(document).scrollLeft()),
                o = document.documentElement.clientHeight + (a ? 0 : M(document).scrollTop());
            return t.left -= this._get(e, "isRTL") ? i - r : 0, t.left -= a && t.left === e.input.offset().left ? M(document).scrollLeft() : 0, t.top -= a && t.top === e.input.offset().top + n ? M(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + i > d && i < d ? Math.abs(t.left + i - d) : 0), t.top -= Math.min(t.top, t.top + s > o && s < o ? Math.abs(s + n) : 0), t
        },
        _findPos: function(e) {
            for (var t = this._getInst(e), a = this._get(t, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || M.expr.filters.hidden(e));) e = e[a ? "previousSibling" : "nextSibling"];
            return [(t = M(e).offset()).left, t.top]
        },
        _hideDatepicker: function(e) {
            var t, a, i = this._curInst;
            !i || e && i !== M.data(e, "datepicker") || this._datepickerShowing && (t = this._get(i, "showAnim"), a = this._get(i, "duration"), e = function() {
                M.datepicker._tidyDialog(i)
            }, M.effects && (M.effects.effect[t] || M.effects[t]) ? i.dpDiv.hide(t, M.datepicker._get(i, "showOptions"), a, e) : i.dpDiv["slideDown" === t ? "slideUp" : "fadeIn" === t ? "fadeOut" : "hide"](t ? a : null, e), t || e(), this._datepickerShowing = !1, (e = this._get(i, "onClose")) && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), M.blockUI && (M.unblockUI(), M("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(e) {
            var t;
            M.datepicker._curInst && (t = M(e.target), e = M.datepicker._getInst(t[0]), (t[0].id === M.datepicker._mainDivId || 0 !== t.parents("#" + M.datepicker._mainDivId).length || t.hasClass(M.datepicker.markerClassName) || t.closest("." + M.datepicker._triggerClass).length || !M.datepicker._datepickerShowing || M.datepicker._inDialog && M.blockUI) && (!t.hasClass(M.datepicker.markerClassName) || M.datepicker._curInst === e) || M.datepicker._hideDatepicker())
        },
        _adjustDate: function(e, t, a) {
            var i = M(e),
                e = this._getInst(i[0]);
            this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(e, t + ("M" === a ? this._get(e, "showCurrentAtPos") : 0), a), this._updateDatepicker(e))
        },
        _gotoToday: function(e) {
            var t = M(e),
                a = this._getInst(t[0]);
            this._get(a, "gotoCurrent") && a.currentDay ? (a.selectedDay = a.currentDay, a.drawMonth = a.selectedMonth = a.currentMonth, a.drawYear = a.selectedYear = a.currentYear) : (e = new Date, a.selectedDay = e.getDate(), a.drawMonth = a.selectedMonth = e.getMonth(), a.drawYear = a.selectedYear = e.getFullYear()), this._notifyChange(a), this._adjustDate(t)
        },
        _selectMonthYear: function(e, t, a) {
            var i = M(e),
                e = this._getInst(i[0]);
            e["selected" + ("M" === a ? "Month" : "Year")] = e["draw" + ("M" === a ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(i)
        },
        _selectDay: function(e, t, a, i) {
            var s = M(e);
            M(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || ((s = this._getInst(s[0])).selectedDay = s.currentDay = M("a", i).html(), s.selectedMonth = s.currentMonth = t, s.selectedYear = s.currentYear = a, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function(e) {
            e = M(e);
            this._selectDate(e, "")
        },
        _selectDate: function(e, t) {
            var a = M(e),
                e = this._getInst(a[0]);
            t = null != t ? t : this._formatDate(e), e.input && e.input.val(t), this._updateAlternate(e), (a = this._get(e, "onSelect")) ? a.apply(e.input ? e.input[0] : null, [t, e]) : e.input && e.input.trigger("change"), e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" != typeof e.input[0] && e.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var t, a, i = this._get(e, "altField");
            i && (t = this._get(e, "altFormat") || this._get(e, "dateFormat"), a = this._getDate(e), e = this.formatDate(t, a, this._getFormatConfig(e)), M(i).val(e))
        },
        noWeekends: function(e) {
            e = e.getDay();
            return [0 < e && e < 6, ""]
        },
        iso8601Week: function(e) {
            var t = new Date(e.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), e = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((e - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, s, e) {
            if (null == t || null == s) throw "Invalid arguments";
            if ("" === (s = "object" == typeof s ? s.toString() : s + "")) return null;

            function r(e) {
                return (e = v + 1 < t.length && t.charAt(v + 1) === e) && v++, e
            }

            function a(e) {
                var t = r(e),
                    t = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                    t = new RegExp("^\\d{" + ("y" === e ? t : 1) + "," + t + "}");
                if (!(t = s.substring(l).match(t))) throw "Missing number at position " + l;
                return l += t[0].length, parseInt(t[0], 10)
            }

            function i(e, t, a) {
                var i = -1,
                    t = M.map(r(e) ? a : t, function(e, t) {
                        return [
                            [t, e]
                        ]
                    }).sort(function(e, t) {
                        return -(e[1].length - t[1].length)
                    });
                if (M.each(t, function(e, t) {
                        var a = t[1];
                        if (s.substr(l, a.length).toLowerCase() === a.toLowerCase()) return i = t[0], l += a.length, !1
                    }), -1 !== i) return i + 1;
                throw "Unknown name at position " + l
            }

            function n() {
                if (s.charAt(l) !== t.charAt(v)) throw "Unexpected literal at position " + l;
                l++
            }
            for (var d, o, c, l = 0, h = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff, h = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10), u = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, p = (e ? e.dayNames : null) || this._defaults.dayNames, g = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, _ = (e ? e.monthNames : null) || this._defaults.monthNames, f = -1, k = -1, D = -1, m = -1, y = !1, v = 0; v < t.length; v++)
                if (y) "'" !== t.charAt(v) || r("'") ? n() : y = !1;
                else switch (t.charAt(v)) {
                    case "d":
                        D = a("d");
                        break;
                    case "D":
                        i("D", u, p);
                        break;
                    case "o":
                        m = a("o");
                        break;
                    case "m":
                        k = a("m");
                        break;
                    case "M":
                        k = i("M", g, _);
                        break;
                    case "y":
                        f = a("y");
                        break;
                    case "@":
                        f = (c = new Date(a("@"))).getFullYear(), k = c.getMonth() + 1, D = c.getDate();
                        break;
                    case "!":
                        f = (c = new Date((a("!") - this._ticksTo1970) / 1e4)).getFullYear(), k = c.getMonth() + 1, D = c.getDate();
                        break;
                    case "'":
                        r("'") ? n() : y = !0;
                        break;
                    default:
                        n()
                }
            if (l < s.length && (o = s.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === f ? f = (new Date).getFullYear() : f < 100 && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (f <= h ? 0 : -100)), -1 < m)
                for (k = 1, D = m;;) {
                    if (D <= (d = this._getDaysInMonth(f, k - 1))) break;
                    k++, D -= d
                }
            if ((c = this._daylightSavingAdjust(new Date(f, k - 1, D))).getFullYear() !== f || c.getMonth() + 1 !== k || c.getDate() !== D) throw "Invalid date";
            return c
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, a) {
            if (!e) return "";

            function s(e) {
                return (e = n + 1 < t.length && t.charAt(n + 1) === e) && n++, e
            }

            function i(e, t, a) {
                var i = "" + t;
                if (s(e))
                    for (; i.length < a;) i = "0" + i;
                return i
            }

            function r(e, t, a, i) {
                return (s(e) ? i : a)[t]
            }
            var n, d = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (a ? a.dayNames : null) || this._defaults.dayNames,
                c = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
                l = (a ? a.monthNames : null) || this._defaults.monthNames,
                h = "",
                u = !1;
            if (e)
                for (n = 0; n < t.length; n++)
                    if (u) "'" !== t.charAt(n) || s("'") ? h += t.charAt(n) : u = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            h += i("d", e.getDate(), 2);
                            break;
                        case "D":
                            h += r("D", e.getDay(), d, o);
                            break;
                        case "o":
                            h += i("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            h += i("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            h += r("M", e.getMonth(), c, l);
                            break;
                        case "y":
                            h += s("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            h += e.getTime();
                            break;
                        case "!":
                            h += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            s("'") ? h += "'" : u = !0;
                            break;
                        default:
                            h += t.charAt(n)
                    }
            return h
        },
        _possibleChars: function(t) {
            function e(e) {
                return (e = s + 1 < t.length && t.charAt(s + 1) === e) && s++, e
            }
            for (var a = "", i = !1, s = 0; s < t.length; s++)
                if (i) "'" !== t.charAt(s) || e("'") ? a += t.charAt(s) : i = !1;
                else switch (t.charAt(s)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        a += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        e("'") ? a += "'" : i = !0;
                        break;
                    default:
                        a += t.charAt(s)
                }
            return a
        },
        _get: function(e, t) {
            return (void 0 !== e.settings[t] ? e.settings : this._defaults)[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var a = this._get(e, "dateFormat"),
                    i = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    r = s,
                    n = this._getFormatConfig(e);
                try {
                    r = this.parseDate(a, i, n) || s
                } catch (e) {
                    i = t ? "" : i
                }
                e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), e.currentDay = i ? r.getDate() : 0, e.currentMonth = i ? r.getMonth() : 0, e.currentYear = i ? r.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(d, e, t) {
            var a, i, e = null == e || "" === e ? t : "string" == typeof e ? function(e) {
                try {
                    return M.datepicker.parseDate(M.datepicker._get(d, "dateFormat"), e, M.datepicker._getFormatConfig(d))
                } catch (e) {}
                for (var t = (e.toLowerCase().match(/^c/) ? M.datepicker._getDate(d) : null) || new Date, a = t.getFullYear(), i = t.getMonth(), s = t.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, n = r.exec(e); n;) {
                    switch (n[2] || "d") {
                        case "d":
                        case "D":
                            s += parseInt(n[1], 10);
                            break;
                        case "w":
                        case "W":
                            s += 7 * parseInt(n[1], 10);
                            break;
                        case "m":
                        case "M":
                            i += parseInt(n[1], 10), s = Math.min(s, M.datepicker._getDaysInMonth(a, i));
                            break;
                        case "y":
                        case "Y":
                            a += parseInt(n[1], 10), s = Math.min(s, M.datepicker._getDaysInMonth(a, i))
                    }
                    n = r.exec(e)
                }
                return new Date(a, i, s)
            }(e) : "number" == typeof e ? isNaN(e) ? t : (a = e, (i = new Date).setDate(i.getDate() + a), i) : new Date(e.getTime());
            return (e = e && "Invalid Date" === e.toString() ? t : e) && (e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0)), this._daylightSavingAdjust(e)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(12 < e.getHours() ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, a) {
            var i = !t,
                s = e.selectedMonth,
                r = e.selectedYear,
                t = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = t.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = t.getMonth(), e.drawYear = e.selectedYear = e.currentYear = t.getFullYear(), s === e.selectedMonth && r === e.selectedYear || a || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            return !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay))
        },
        _attachHandlers: function(e) {
            var t = this._get(e, "stepMonths"),
                a = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        M.datepicker._adjustDate(a, -t, "M")
                    },
                    next: function() {
                        M.datepicker._adjustDate(a, +t, "M")
                    },
                    hide: function() {
                        M.datepicker._hideDatepicker()
                    },
                    today: function() {
                        M.datepicker._gotoToday(a)
                    },
                    selectDay: function() {
                        return M.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return M.datepicker._selectMonthYear(a, this, "M"), !1
                    },
                    selectYear: function() {
                        return M.datepicker._selectMonthYear(a, this, "Y"), !1
                    }
                };
                M(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, a, i, s, r, n, d, o, c, l, h, u, p, g, _, f, k, D, m, y, v, M, b, w, C, I, x, Y, S, F, N, T, A = new Date,
                K = this._daylightSavingAdjust(new Date(A.getFullYear(), A.getMonth(), A.getDate())),
                j = this._get(e, "isRTL"),
                O = this._get(e, "showButtonPanel"),
                R = this._get(e, "hideIfNoPrevNext"),
                L = this._get(e, "navigationAsDateFormat"),
                W = this._getNumberOfMonths(e),
                E = this._get(e, "showCurrentAtPos"),
                A = this._get(e, "stepMonths"),
                H = 1 !== W[0] || 1 !== W[1],
                P = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                U = this._getMinMaxDate(e, "min"),
                z = this._getMinMaxDate(e, "max"),
                B = e.drawMonth - E,
                J = e.drawYear;
            if (B < 0 && (B += 12, J--), z)
                for (t = this._daylightSavingAdjust(new Date(z.getFullYear(), z.getMonth() - W[0] * W[1] + 1, z.getDate())), t = U && t < U ? U : t; this._daylightSavingAdjust(new Date(J, B, 1)) > t;) --B < 0 && (B = 11, J--);
            for (e.drawMonth = B, e.drawYear = J, E = this._get(e, "prevText"), E = L ? this.formatDate(E, this._daylightSavingAdjust(new Date(J, B - A, 1)), this._getFormatConfig(e)) : E, a = this._canAdjustMonth(e, -1, J, B) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + E + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + E + "</span></a>" : R ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + E + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "e" : "w") + "'>" + E + "</span></a>", E = this._get(e, "nextText"), E = L ? this.formatDate(E, this._daylightSavingAdjust(new Date(J, B + A, 1)), this._getFormatConfig(e)) : E, i = this._canAdjustMonth(e, 1, J, B) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + E + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + E + "</span></a>" : R ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + E + "'><span class='ui-icon ui-icon-circle-triangle-" + (j ? "w" : "e") + "'>" + E + "</span></a>", R = this._get(e, "currentText"), E = this._get(e, "gotoCurrent") && e.currentDay ? P : K, R = L ? this.formatDate(R, E, this._getFormatConfig(e)) : R, L = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", L = O ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (j ? L : "") + (this._isInRange(e, E) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + R + "</button>" : "") + (j ? "" : L) + "</div>" : "", s = parseInt(this._get(e, "firstDay"), 10), s = isNaN(s) ? 0 : s, r = this._get(e, "showWeek"), n = this._get(e, "dayNames"), d = this._get(e, "dayNamesMin"), o = this._get(e, "monthNames"), c = this._get(e, "monthNamesShort"), l = this._get(e, "beforeShowDay"), h = this._get(e, "showOtherMonths"), u = this._get(e, "selectOtherMonths"), p = this._getDefaultDate(e), g = "", f = 0; f < W[0]; f++) {
                for (k = "", this.maxRows = 4, D = 0; D < W[1]; D++) {
                    if (m = this._daylightSavingAdjust(new Date(J, B, e.selectedDay)), y = " ui-corner-all", v = "", H) {
                        if (v += "<div class='ui-datepicker-group", 1 < W[1]) switch (D) {
                            case 0:
                                v += " ui-datepicker-group-first", y = " ui-corner-" + (j ? "right" : "left");
                                break;
                            case W[1] - 1:
                                v += " ui-datepicker-group-last", y = " ui-corner-" + (j ? "left" : "right");
                                break;
                            default:
                                v += " ui-datepicker-group-middle", y = ""
                        }
                        v += "'>"
                    }
                    for (v += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + y + "'>" + (/all|left/.test(y) && 0 === f ? j ? i : a : "") + (/all|right/.test(y) && 0 === f ? j ? a : i : "") + this._generateMonthYearHeader(e, B, J, U, z, 0 < f || 0 < D, o, c) + "</div><table class='ui-datepicker-calendar'><thead><tr>", M = r ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", _ = 0; _ < 7; _++) M += "<th scope='col'" + (5 <= (_ + s + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + n[b = (_ + s) % 7] + "'>" + d[b] + "</span></th>";
                    for (v += M + "</tr></thead><tbody>", C = this._getDaysInMonth(J, B), J === e.selectedYear && B === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, C)), w = (this._getFirstDayOfMonth(J, B) - s + 7) % 7, C = Math.ceil((w + C) / 7), I = H && this.maxRows > C ? this.maxRows : C, this.maxRows = I, x = this._daylightSavingAdjust(new Date(J, B, 1 - w)), Y = 0; Y < I; Y++) {
                        for (v += "<tr>", S = r ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(x) + "</td>" : "", _ = 0; _ < 7; _++) F = l ? l.apply(e.input ? e.input[0] : null, [x]) : [!0, ""], T = (N = x.getMonth() !== B) && !u || !F[0] || U && x < U || z && z < x, S += "<td class='" + (5 <= (_ + s + 6) % 7 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + (x.getTime() === m.getTime() && B === e.selectedMonth && e._keyEvent || p.getTime() === x.getTime() && p.getTime() === m.getTime() ? " " + this._dayOverClass : "") + (T ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !h ? "" : " " + F[1] + (x.getTime() === P.getTime() ? " " + this._currentClass : "") + (x.getTime() === K.getTime() ? " ui-datepicker-today" : "")) + "'" + (N && !h || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (T ? "" : " data-handler='selectDay' data-event='click' data-month='" + x.getMonth() + "' data-year='" + x.getFullYear() + "'") + ">" + (N && !h ? "&#xa0;" : T ? "<span class='ui-state-default'>" + x.getDate() + "</span>" : "<a class='ui-state-default" + (x.getTime() === K.getTime() ? " ui-state-highlight" : "") + (x.getTime() === P.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + x.getDate() + "</a>") + "</td>", x.setDate(x.getDate() + 1), x = this._daylightSavingAdjust(x);
                        v += S + "</tr>"
                    }
                    11 < ++B && (B = 0, J++), k += v += "</tbody></table>" + (H ? "</div>" + (0 < W[0] && D === W[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                g += k
            }
            return g += L, e._keyEvent = !1, g
        },
        _generateMonthYearHeader: function(e, t, a, i, s, r, n, d) {
            var o, c, l, h, u, p, g, _ = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                k = this._get(e, "showMonthAfterYear"),
                D = "<div class='ui-datepicker-title'>",
                m = "";
            if (r || !_) m += "<span class='ui-datepicker-month'>" + n[t] + "</span>";
            else {
                for (o = i && i.getFullYear() === a, c = s && s.getFullYear() === a, m += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; l < 12; l++)(!o || l >= i.getMonth()) && (!c || l <= s.getMonth()) && (m += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + d[l] + "</option>");
                m += "</select>"
            }
            if (k || (D += m + (!r && _ && f ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", r || !f) D += "<span class='ui-datepicker-year'>" + a + "</span>";
                else {
                    for (h = this._get(e, "yearRange").split(":"), u = (new Date).getFullYear(), p = (n = function(e) {
                            e = e.match(/c[+\-].*/) ? a + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? u + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(e) ? u : e
                        })(h[0]), g = Math.max(p, n(h[1] || "")), p = i ? Math.max(p, i.getFullYear()) : p, g = s ? Math.min(g, s.getFullYear()) : g, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p <= g; p++) e.yearshtml += "<option value='" + p + "'" + (p === a ? " selected='selected'" : "") + ">" + p + "</option>";
                    e.yearshtml += "</select>", D += e.yearshtml, e.yearshtml = null
                } return D += this._get(e, "yearSuffix"), k && (D += (!r && _ && f ? "" : "&#xa0;") + m), D += "</div>"
        },
        _adjustInstDate: function(e, t, a) {
            var i = e.selectedYear + ("Y" === a ? t : 0),
                s = e.selectedMonth + ("M" === a ? t : 0),
                t = Math.min(e.selectedDay, this._getDaysInMonth(i, s)) + ("D" === a ? t : 0),
                t = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, s, t)));
            e.selectedDay = t.getDate(), e.drawMonth = e.selectedMonth = t.getMonth(), e.drawYear = e.selectedYear = t.getFullYear(), "M" !== a && "Y" !== a || this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
                e = this._getMinMaxDate(e, "max"),
                t = a && t < a ? a : t;
            return e && e < t ? e : t
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            e = this._get(e, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, a, i) {
            var s = this._getNumberOfMonths(e),
                s = this._daylightSavingAdjust(new Date(a, i + (t < 0 ? t : s[0] * s[1]), 1));
            return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
        },
        _isInRange: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max"),
                s = null,
                r = null,
                n = this._get(e, "yearRange");
            return n && (e = n.split(":"), n = (new Date).getFullYear(), s = parseInt(e[0], 10), r = parseInt(e[1], 10), e[0].match(/[+\-].*/) && (s += n), e[1].match(/[+\-].*/) && (r += n)), (!a || t.getTime() >= a.getTime()) && (!i || t.getTime() <= i.getTime()) && (!s || t.getFullYear() >= s) && (!r || t.getFullYear() <= r)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return {
                shortYearCutoff: t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, a, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            t = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, a, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), t, this._getFormatConfig(e))
        }
    }), M.fn.datepicker = function(e) {
        if (!this.length) return this;
        M.datepicker.initialized || (M(document).on("mousedown", M.datepicker._checkExternalClick), M.datepicker.initialized = !0), 0 === M("#" + M.datepicker._mainDivId).length && M("body").append(M.datepicker.dpDiv);
        var t = Array.prototype.slice.call(arguments, 1);
        return "string" == typeof e && ("isDisabled" === e || "getDate" === e || "widget" === e) || "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? M.datepicker["_" + e + "Datepicker"].apply(M.datepicker, [this[0]].concat(t)) : this.each(function() {
            "string" == typeof e ? M.datepicker["_" + e + "Datepicker"].apply(M.datepicker, [this].concat(t)) : M.datepicker._attachDatepicker(this, e)
        })
    }, M.datepicker = new e, M.datepicker.initialized = !1, M.datepicker.uuid = (new Date).getTime(), M.datepicker.version = "1.12.1", M.datepicker
});
jQuery(document).ready(function(jQuery) {
    jQuery.datepicker.setDefaults({
        "closeText": "Close",
        "currentText": "Today",
        "monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "nextText": "Next",
        "prevText": "Previous",
        "dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
        "dateFormat": "MM d, yy",
        "firstDay": 1,
        "isRTL": false
    });
});
/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
}(function(l) {
    var a;
    return l.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (a = /#.*$/, function(t) {
            var e = t.href.replace(a, ""),
                i = location.href.replace(a, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {}
            try {
                i = decodeURIComponent(i)
            } catch (t) {}
            return 1 < t.hash.length && e === i
        }),
        _create: function() {
            var e = this,
                t = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), l.isArray(t.disabled) && (t.disabled = l.unique(t.disabled.concat(l.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = l(), this._refresh(), this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var i = this.options.active,
                t = this.options.collapsible,
                a = location.hash.substring(1);
            return null === i && (a && this.tabs.each(function(t, e) {
                if (l(e).attr("aria-controls") === a) return i = t, !1
            }), null !== (i = null === i ? this.tabs.index(this.tabs.filter(".ui-tabs-active")) : i) && -1 !== i || (i = !!this.tabs.length && 0)), !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0), i = !t && !1 === i && this.anchors.length ? 0 : i
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : l()
            }
        },
        _tabKeydown: function(t) {
            var e = l(l.ui.safeActiveElement(this.document[0])).closest("li"),
                i = this.tabs.index(e),
                a = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case l.ui.keyCode.RIGHT:
                    case l.ui.keyCode.DOWN:
                        i++;
                        break;
                    case l.ui.keyCode.UP:
                    case l.ui.keyCode.LEFT:
                        a = !1, i--;
                        break;
                    case l.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case l.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case l.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                    case l.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, a), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === l.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === l.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === l.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(t, e) {
            var i = this.tabs.length - 1;
            for (; - 1 !== l.inArray(t = (t = i < t ? 0 : t) < 0 ? i : t, this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function(t, e) {
            "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e)
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options,
                e = this.tablist.children(":has(a[href])");
            t.disabled = l.map(e.filter(".ui-state-disabled"), function(t) {
                return e.index(t)
            }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !l.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = l()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = l()), this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var o = this,
                t = this.tabs,
                e = this.anchors,
                i = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                l(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                l(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return l("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = l(), this.anchors.each(function(t, e) {
                var i, a, s, n = l(e).uniqueId().attr("id"),
                    h = l(e).closest("li"),
                    r = h.attr("aria-controls");
                o._isLocal(e) ? (s = (i = e.hash).substring(1), a = o.element.find(o._sanitizeSelector(i))) : (s = h.attr("aria-controls") || l({}).uniqueId()[0].id, (a = o.element.find(i = "#" + s)).length || (a = o._createPanel(s)).insertAfter(o.panels[t - 1] || o.tablist), a.attr("aria-live", "polite")), a.length && (o.panels = o.panels.add(a)), r && h.data("ui-tabs-aria-controls", r), h.attr({
                    "aria-controls": s,
                    "aria-labelledby": n
                }), a.attr("aria-labelledby", n)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return l("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var e, i;
            for (l.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), i = 0; e = this.tabs[i]; i++) e = l(e), !0 === t || -1 !== l.inArray(i, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function(t) {
            var i = {};
            t && l.each(t.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var t = l(this),
                    e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= l(this).outerHeight(!0)
            }), this.panels.each(function() {
                l(this).height(Math.max(0, i - l(this).innerHeight() + l(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function() {
                i = Math.max(i, l(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var e = this.options,
                i = this.active,
                a = l(t.currentTarget).closest("li"),
                s = a[0] === i[0],
                n = s && e.collapsible,
                h = n ? l() : this._getPanelForTab(a),
                r = i.length ? this._getPanelForTab(i) : l(),
                i = {
                    oldTab: i,
                    oldPanel: r,
                    newTab: n ? l() : a,
                    newPanel: h
                };
            t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || s && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !n && this.tabs.index(a), this.active = s ? l() : a, this.xhr && this.xhr.abort(), r.length || h.length || l.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, i))
        },
        _toggle: function(t, e) {
            var i = this,
                a = e.newPanel,
                s = e.oldPanel;

            function n() {
                i.running = !1, i._trigger("activate", t, e)
            }

            function h() {
                i._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && i.options.show ? i._show(a, i.options.show, n) : (a.show(), n())
            }
            this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function() {
                i._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), h()
            }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s.hide(), h()), s.attr("aria-hidden", "true"), e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && s.length ? e.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === l(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var t = this._findActive(t);
            t[0] !== this.active[0] && (t = (t = !t.length ? this.active : t).find(".ui-tabs-anchor")[0], this._eventHandler({
                target: t,
                currentTarget: t,
                preventDefault: l.noop
            }))
        },
        _findActive: function(t) {
            return !1 === t ? l() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return t = "string" == typeof t ? this.anchors.index(this.anchors.filter("[href$='" + l.ui.escapeSelector(t) + "']")) : t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                l.data(this, "ui-tabs-destroy") ? l(this).remove() : l(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function() {
                var t = l(this),
                    e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), l.isArray(t) ? l.map(t, function(t) {
                return t !== i ? t : null
            }) : l.map(this.tabs, function(t, e) {
                return e !== i ? e : null
            })), this._setOptionDisabled(t))
        },
        disable: function(t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t) e = !0;
                else {
                    if (t = this._getIndex(t), -1 !== l.inArray(t, e)) return;
                    e = l.isArray(e) ? l.merge([t], e).sort() : [t]
                }
                this._setOptionDisabled(e)
            }
        },
        load: function(t, a) {
            t = this._getIndex(t);

            function s(t, e) {
                "abort" === e && n.panels.stop(!1, !0), n._removeClass(i, "ui-tabs-loading"), h.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
            }
            var n = this,
                i = this.tabs.eq(t),
                t = i.find(".ui-tabs-anchor"),
                h = this._getPanelForTab(i),
                r = {
                    tab: i,
                    panel: h
                };
            this._isLocal(t[0]) || (this.xhr = l.ajax(this._ajaxSettings(t, a, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.done(function(t, e, i) {
                setTimeout(function() {
                    h.html(t), n._trigger("load", a, r), s(i, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    s(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, a) {
            var s = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, e) {
                    return s._trigger("beforeLoad", i, l.extend({
                        jqXHR: t,
                        ajaxSettings: e
                    }, a))
                }
            }
        },
        _getPanelForTab: function(t) {
            t = l(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + t))
        }
    }), !1 !== l.uiBackCompat && l.widget("ui.tabs", l.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), l.ui.tabs
});
/*! This file is auto-generated */
window.addComment = function(v) {
    var I, C, h, E = v.document,
        b = {
            commentReplyClass: "comment-reply-link",
            commentReplyTitleId: "reply-title",
            cancelReplyId: "cancel-comment-reply-link",
            commentFormId: "commentform",
            temporaryFormId: "wp-temp-form-div",
            parentIdFieldId: "comment_parent",
            postIdFieldId: "comment_post_ID"
        },
        e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
        r = "querySelector" in E && "addEventListener" in v,
        n = !!E.documentElement.dataset;

    function t() {
        d(), e && new e(o).observe(E.body, {
            childList: !0,
            subtree: !0
        })
    }

    function d(e) {
        if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
            I.addEventListener("touchstart", l), I.addEventListener("click", l);
            var t = function(e) {
                if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return C.removeEventListener("keydown", t), e.preventDefault(), C.submit.click(), !1
            };
            C && C.addEventListener("keydown", t);
            for (var n, d = function(e) {
                    var t = b.commentReplyClass;
                    e && e.childNodes || (e = E);
                    t = E.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t);
                    return t
                }(e), o = 0, i = d.length; o < i; o++)(n = d[o]).addEventListener("touchstart", a), n.addEventListener("click", a)
        }
    }

    function l(e) {
        var t, n, d = g(b.temporaryFormId);
        d && h && (g(b.parentIdFieldId).value = "0", t = d.textContent, d.parentNode.replaceChild(h, d), this.style.display = "none", n = (d = (n = g(b.commentReplyTitleId)) && n.firstChild) && d.nextSibling, d && d.nodeType === Node.TEXT_NODE && t && (n && "A" === n.nodeName && n.id !== b.cancelReplyId && (n.style.display = ""), d.textContent = t), e.preventDefault())
    }

    function a(e) {
        var t = g(b.commentReplyTitleId),
            n = t && t.firstChild.textContent,
            d = this,
            o = m(d, "belowelement"),
            i = m(d, "commentid"),
            r = m(d, "respondelement"),
            t = m(d, "postid"),
            n = m(d, "replyto") || n;
        o && i && r && t && !1 === v.addComment.moveForm(o, i, r, t, n) && e.preventDefault()
    }

    function o(e) {
        for (var t = e.length; t--;)
            if (e[t].addedNodes.length) return void d()
    }

    function m(e, t) {
        return n ? e.dataset[t] : e.getAttribute("data-" + t)
    }

    function g(e) {
        return E.getElementById(e)
    }
    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, !1), {
        init: d,
        moveForm: function(e, t, n, d, o) {
            var i = g(e);
            h = g(n);
            var r, l, a, m, c, s = g(b.parentIdFieldId),
                y = g(b.postIdFieldId),
                p = (c = g(b.commentReplyTitleId)) && c.firstChild,
                u = p && p.nextSibling;
            if (i && h && s) {
                void 0 === o && (o = p && p.textContent), m = h, e = b.temporaryFormId, n = g(e), c = (c = g(b.commentReplyTitleId)) ? c.firstChild.textContent : "", n || ((n = E.createElement("div")).id = e, n.style.display = "none", n.textContent = c, m.parentNode.insertBefore(n, m)), d && y && (y.value = d), s.value = t, I.style.display = "", i.parentNode.insertBefore(h, i.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o), I.onclick = function() {
                    return !1
                };
                try {
                    for (var f = 0; f < C.elements.length; f++)
                        if (r = C.elements[f], l = !1, "getComputedStyle" in v ? a = v.getComputedStyle(r) : E.documentElement.currentStyle && (a = r.currentStyle), (r.offsetWidth <= 0 && r.offsetHeight <= 0 || "hidden" === a.visibility) && (l = !0), "hidden" !== r.type && !r.disabled && !l) {
                            r.focus();
                            break
                        }
                } catch (e) {}
                return !1
            }
        }
    }
}(window);
! function(p, d, u) {
    "use strict";

    function t() {
        p(u).trigger("joinchat:starting");
        var t, o, e = 1e3 * joinchat_obj.settings.button_delay,
            n = 1e3 * joinchat_obj.settings.message_delay,
            i = !!joinchat_obj.settings.message_hash,
            a = !!joinchat_obj.$(".joinchat__box").length,
            s = parseInt(joinchat_obj.store.getItem("joinchat_views") || 1) >= joinchat_obj.settings.message_views,
            h = -1 !== (joinchat_obj.store.getItem("joinchat_hashes") || "").split(",").filter(Boolean).indexOf(joinchat_obj.settings.message_hash || "none");

        function c() {
            clearTimeout(o), joinchat_obj.chatbox_show()
        }

        function j() {
            joinchat_obj.save_hash(), joinchat_obj.chatbox_hide()
        }
        var _, r, b, l = "joinchat--show";

        function g() {
            var t = (u.activeElement.type || "").toLowerCase();
            0 <= ["date", "datetime", "email", "month", "number", "password", "search", "tel", "text", "textarea", "time", "url", "week"].indexOf(t) ? joinchat_obj.chatbox ? (joinchat_obj.chatbox_hide(), setTimeout(function() {
                joinchat_obj.$div.removeClass("joinchat--show")
            }, 400)) : joinchat_obj.$div.removeClass("joinchat--show") : joinchat_obj.$div.addClass("joinchat--show")
        }
        h || i && n && !joinchat_obj.settings.message_badge && s || (l += " joinchat--tooltip"), setTimeout(function() {
            joinchat_obj.$div.addClass(l)
        }, e), i && !h && n && (joinchat_obj.settings.message_badge ? o = setTimeout(function() {
            joinchat_obj.$(".joinchat__badge").addClass("joinchat__badge--in")
        }, e + n) : s && (o = setTimeout(c, e + n))), a && !joinchat_obj.is_mobile && joinchat_obj.$(".joinchat__button").on("mouseenter", function() {
            t = setTimeout(c, 1500)
        }).on("mouseleave", function() {
            clearTimeout(t)
        }), joinchat_obj.$(".joinchat__button").on("click", function() {
            a && !joinchat_obj.chatbox ? c() : Date.now() > joinchat_obj.showed_at + 600 && (j(), joinchat_obj.open_whatsapp())
        }), joinchat_obj.$(".joinchat__close").on("click", j), joinchat_obj.$(".joinchat__box__scroll").on("mousewheel DOMMouseScroll", function(t) {
            t.preventDefault();
            t = t.originalEvent.wheelDelta || -t.originalEvent.detail;
            this.scrollTop += 30 * (t < 0 ? 1 : -1)
        }), joinchat_obj.is_mobile && (p(u).on("focus blur", "input, textarea", function(t) {
            p(t.target).closest(joinchat_obj.$div).length || (clearTimeout(_), _ = setTimeout(g, 200))
        }), p(d).on("resize", function() {
            clearTimeout(r), r = setTimeout(function() {
                joinchat_obj.$div[0].style.setProperty("--vh", window.innerHeight + "px")
            }, 200)
        }).trigger("resize")), p(u).on("click", '.joinchat_open, .joinchat_app, a[href="#joinchat"], a[href="#whatsapp"]', function(t) {
            t.preventDefault(), !a || p(this).is('.joinchat_app, a[href="#whatsapp"]') ? joinchat_obj.open_whatsapp() : c()
        }), p(u).on("click", ".joinchat_close", function(t) {
            t.preventDefault(), joinchat_obj.chatbox_hide()
        }), a && "IntersectionObserver" in d && (0 < (n = p(".joinchat_show, .joinchat_force_show")).length && (b = new IntersectionObserver(function(t) {
            p.each(t, function() {
                if (0 < this.intersectionRatio && (!h || p(this.target).hasClass("joinchat_force_show"))) return c(), b.disconnect(), !1
            })
        }), n.each(function() {
            b.observe(this)
        }))), a && joinchat_obj.$div.css("--peak", "url(#joinchat__message__peak)"), p(u).trigger("joinchat:start")
    }
    d.joinchat_obj = d.joinchat_obj || {}, joinchat_obj = p.extend({
        $div: null,
        settings: null,
        store: null,
        chatbox: !1,
        showed_at: 0,
        is_mobile: !1
    }, joinchat_obj), joinchat_obj.$ = function(t) {
        return p(t || this.$div, this.$div)
    }, joinchat_obj.send_event = function(o, e) {
        o = o || "", e = e || "click";
        var t = d[this.settings.ga_tracker] || d.ga || d.__gaTracker,
            n = d[this.settings.data_layer] || d.dataLayer;
        "function" == typeof t && "function" == typeof t.getAll && (t("set", "transport", "beacon"), t.getAll().forEach(function(t) {
            t.send("event", "JoinChat", e, o)
        })), "function" == typeof gtag && "object" == typeof n && n.forEach(function(t) {
            "config" == t[0] && "G-" == t[1].substring(0, 2) && gtag("event", e, {
                event_category: "JoinChat",
                event_label: o,
                send_to: t[1],
                transport_type: "beacon"
            })
        }), "object" == typeof n && n.push({
            event: "JoinChat",
            eventAction: e,
            eventLabel: o
        }), "function" == typeof fbq && fbq("trackCustom", "JoinChat", {
            eventAction: e,
            eventLabel: o
        })
    }, joinchat_obj.whatsapp_link = function(t, o, e) {
        return ((e = void 0 !== e ? e : this.settings.whatsapp_web && !this.is_mobile) ? "https://web.whatsapp.com/send" : "https://api.whatsapp.com/send") + "?phone=" + encodeURIComponent(t) + "&text=" + encodeURIComponent(o || "")
    }, joinchat_obj.chatbox_show = function() {
        this.chatbox || (this.chatbox = !0, this.showed_at = Date.now(), this.$div.addClass("joinchat--chatbox"), this.settings.message_badge && this.$(".joinchat__badge").hasClass("joinchat__badge--in") && this.$(".joinchat__badge").toggleClass("joinchat__badge--in joinchat__badge--out"), p(u).trigger("joinchat:show"))
    }, joinchat_obj.chatbox_hide = function() {
        this.chatbox && (this.chatbox = !1, this.$div.removeClass("joinchat--chatbox joinchat--tooltip"), this.settings.message_badge && this.$(".joinchat__badge").removeClass("joinchat__badge--out"), p(u).trigger("joinchat:hide"))
    }, joinchat_obj.save_hash = function() {
        var t = this.settings.message_hash || "none",
            o = (this.store.getItem("joinchat_hashes") || "").split(",").filter(Boolean); - 1 === o.indexOf(t) && (o.push(t), this.store.setItem("joinchat_hashes", o.join(",")))
    }, joinchat_obj.open_whatsapp = function(t, o) {
        t = {
            link: this.whatsapp_link(t || this.settings.telephone, o || this.settings.message_send)
        }, o = new RegExp("^https?://(wa.me|(api|web|chat).whatsapp.com|" + location.hostname.replace(".", ".") + ")/.*", "i");
        p(u).trigger("joinchat:open", [t, this.settings]), o.test(t.link) ? (this.send_event(t.link), d.open(t.link, "joinchat", "noopener")) : console.error("Join.chat: the link doesn't seem safe, it must point to the current domain or whatsapp.com")
    };
    var o, e = (o = function() {
        if (joinchat_obj.$div = p(".joinchat"), joinchat_obj.$div.length) {
            joinchat_obj.settings = joinchat_obj.$div.data("settings"), joinchat_obj.is_mobile = !!navigator.userAgent.match(/Android|iPhone|BlackBerry|IEMobile|Opera Mini/i);
            try {
                localStorage.setItem("test", 1), localStorage.removeItem("test"), joinchat_obj.store = localStorage
            } catch (t) {
                joinchat_obj.store = {
                    _data: {},
                    setItem: function(t, o) {
                        this._data[t] = String(o)
                    },
                    getItem: function(t) {
                        return this._data.hasOwnProperty(t) ? this._data[t] : null
                    }
                }
            }
            if ("object" != typeof joinchat_obj.settings) try {
                joinchat_obj.settings = JSON.parse(joinchat_obj.$div.attr("data-settings"))
            } catch (t) {
                joinchat_obj.settings = void 0, console.error("Join.chat: can't get settings")
            }
            joinchat_obj.settings && joinchat_obj.settings.telephone && (joinchat_obj.is_mobile || !joinchat_obj.settings.mobile_only ? t() : p(u).on("click", '.joinchat_open, .joinchat_app, a[href="#joinchat"], a[href="#whatsapp"]', function(t) {
                t.preventDefault(), joinchat_obj.open_whatsapp()
            })), joinchat_obj.store.setItem("joinchat_views", parseInt(joinchat_obj.store.getItem("joinchat_views") || 0) + 1)
        }
    }, function() {
        o && o.apply(this, arguments), o = null
    });
    p(e), p(d).on("load", e), u.addEventListener("DOMContentLoaded", e)
}(jQuery, window, document);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var n = /\+/g;

    function o(e) {
        return t.raw ? e : encodeURIComponent(e)
    }

    function i(e) {
        return o(t.json ? JSON.stringify(e) : String(e))
    }

    function r(o, i) {
        var r = t.raw ? o : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(n, " ")), t.json ? JSON.parse(e) : e
            } catch (e) {}
        }(o);
        return e.isFunction(i) ? i(r) : r
    }
    var t = e.cookie = function(n, c, u) {
        if (arguments.length > 1 && !e.isFunction(c)) {
            if ("number" == typeof(u = e.extend({}, t.defaults, u)).expires) {
                var s = u.expires,
                    a = u.expires = new Date;
                a.setMilliseconds(a.getMilliseconds() + 864e5 * s)
            }
            return document.cookie = [o(n), "=", i(c), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
        }
        for (var d, f = n ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; l < m; l++) {
            var x = p[l].split("="),
                g = (d = x.shift(), t.raw ? d : decodeURIComponent(d)),
                v = x.join("=");
            if (n === g) {
                f = r(v, c);
                break
            }
            n || void 0 === (v = r(v)) || (f[g] = v)
        }
        return f
    };
    t.defaults = {}, e.removeCookie = function(n, o) {
        return e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })), !e.cookie(n)
    }
});
(function($) {
    "use strict";
    var social_id = '';
    var second_social_id = '';
    var $i = 0;
    var $flg = false;
    $(document).ready(function() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $(document).on("click", ".mystickyelements-contact-form", function() {});
            $(".mystickyelements-fixed").addClass("mystickyelements-on-click").removeClass("mystickyelements-on-hover");
        }
        $('#stickyelements-form').on('submit', function(event) {
            event.preventDefault();
            $('#stickyelements-form .mse-input-error').removeClass("mse-input-error");
            $('#stickyelements-form .mse-input-message').remove();
            var totalErrors = 0;
            if ($("#stickyelements-form .required").length) {
                $("#stickyelements-form .required").each(function() {
                    if ($.trim($(this).val()) == "") {
                        $(this).addClass("mse-input-error");
                        $(this).after("<span class='mse-input-message'>This field is required</span>");
                        totalErrors++;
                    }
                });
            }
            if ($("#stickyelements-form .email.required:not(.mse-input-error)").length) {
                $("#stickyelements-form .email.required:not(.mse-input-error)").each(function() {
                    var thisVal = $.trim($(this).val());
                    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if (!regex.test(thisVal)) {
                        $(this).addClass("mse-input-error");
                        $(this).after("<span class='mse-input-message'>Email address is not valid</span>");
                        totalErrors++;
                    }
                });
            }
            if (totalErrors == 0) {
                if (mystickyelements.google_analytics === '1') {
                    stickyelements_google_analytics('contact-form');
                }
                jQuery.ajax({
                    url: mystickyelements.ajaxurl,
                    type: 'post',
                    data: 'action=mystickyelements_contact_form&' + jQuery("form#stickyelements-form").serialize() + '&security=' + mystickyelements.ajax_nonce,
                    beforeSend: function() {
                        $('#stickyelements-submit-form').prop('disabled', true);
                    },
                    success: function(data) {
                        $('#stickyelements-submit-form').prop('disabled', false);
                        $('#stickyelements-form .mse-input-error').removeClass("mse-input-error");
                        $('#stickyelements-form .mse-input-message').remove();
                        data = $.parseJSON(data);
                        if (data.error == '1') {
                            for (var i = 0; i < data.errors.length; i++) {
                                if (data.errors[i].key != "mse-form-error") {
                                    $('#stickyelements-form #' + data.errors[i].key).addClass("mse-input-error");
                                    $('#stickyelements-form #' + data.errors[i].key).after("<span class='mse-input-message'>" + data.errors[i].message + "</span>");
                                } else {
                                    $("#mse-form-error").removeClass("mse-form-success-message").addClass("mse-form-error-message").show();
                                    $("#mse-form-error").html(data.errors[i].message);
                                }
                            }
                        } else if (data.status == '0') {
                            $("#mse-form-error").removeClass("mse-form-success-message").addClass("mse-form-error-message").show();
                            $("#mse-form-error").html(data.message);
                        } else {
                            $("#mse-form-error").removeClass("mse-form-error-message").addClass("mse-form-success-message").show();
                            $("#mse-form-error").html(data.message);
                            $('#stickyelements-form input[type="text"], #stickyelements-form input[type="tel"], #stickyelements-form input[type="email"]').val("");
                            $('#stickyelements-form textarea').val("");
                        }
                        setTimeout(function() {
                            $('.contact-form-message').slideUp("slow");
                        }, 5000);
                        if (data.status == 1 && data.redirect_link != '') {
                            if (data.open_new_tab == 1) {
                                window.open(data.redirect_link, '_blank');
                            } else {
                                window.location = data.redirect_link;
                            }
                        }
                        return false;
                    }
                });
            }
            return false;
        });
        $('.mystickyelements-on-click .mystickyelements-social-icon').on('click touch', function(event) {
            if (!$(this).parent('li').hasClass("elements-active")) {
                $('.mystickyelements-on-click .elements-active').removeClass("elements-active");
                $(this).parent('li').addClass('elements-active');
            } else {
                $(this).parent('li').removeClass('elements-active');
                event.preventDefault();
            }
        });
        $('.mystickyelements-on-hover ul li.mystickyelements-contact-form').hover(function() {
            $(this).addClass('element-contact-active');
        });
        $('.element-contact-close').on('click touch', function(event) {
            $('.mystickyelements-contact-form').removeClass('elements-active');
            $('.mystickyelements-contact-form').removeClass('element-contact-active');
        });
        $('#stickyelements-form input, #stickyelements-form textarea ').on('keyup', function(event) {
            if ($(this).val()) {
                $(this).css('background-color', '#EFF5F8');
                $(this).css('border-color', '#7761DF');
            }
        });
        mystickyelements_border_radius();
        $('li.mystickyelements-minimize').on('click', function(event) {
            var element_minimize, minimize_device, position_device, element_on_device;
            $(this).toggleClass('element-minimize');
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                minimize_device = 'mobile';
                position_device = 'mobile-';
                element_on_device = 'element-mobile-on';
            } else {
                minimize_device = 'desktop';
                position_device = '';
                element_on_device = 'element-desktop-on';
            }
            if ($(this).hasClass('element-minimize') === true) {
                $.cookie("minimize_" + minimize_device, "minimize", {
                    path: '/'
                });
                element_minimize = true;
            } else {
                $.cookie("minimize_" + minimize_device, 'minimize_not', {
                    path: '/'
                });
                element_minimize = false;
            }
            $(".mystickyelements-position-" + position_device + "left ul li").each(function() {
                if ($(this).hasClass(element_on_device) == true) {
                    var mystickyelements_size = $('.mystickyelements-fixed').hasClass('mystickyelements-size-large');
                    if (mystickyelements_size == true) {
                        $(this).animate({
                            width: 'toggle',
                            left: (element_minimize === true) ? '-=80' : ''
                        });
                    } else {
                        $(this).animate({
                            width: 'toggle',
                            left: (element_minimize === true) ? '-=50' : ''
                        });
                    }
                }
            });
            $(".mystickyelements-position-" + position_device + "right ul li").each(function() {
                if ($(this).hasClass(element_on_device) == true) {
                    var mystickyelements_size = $('.mystickyelements-fixed').hasClass('mystickyelements-size-large');
                    if (mystickyelements_size == true) {
                        $(this).animate({
                            width: 'toggle',
                            left: (element_minimize === true) ? '+=80' : ''
                        }, 300, function() {});
                    } else {
                        $(this).animate({
                            width: 'toggle',
                            left: (element_minimize === true) ? '+=50' : ''
                        }, 300, function() {});
                    }
                }
            });
            $(".mystickyelements-position-" + position_device + "bottom ul li").each(function() {
                if ($(this).hasClass(element_on_device) == true) {
                    $(this).css('position', 'relative');
                    var mystickyelements_size = $('.mystickyelements-fixed').hasClass('mystickyelements-size-large');
                    if (mystickyelements_size == true) {
                        $(this).animate({
                            height: 'toggle',
                            bottom: (element_minimize === true) ? '-=80' : '',
                        }, 300, function() {
                            $(this).css('position', (element_minimize === true) ? 'relative' : 'static');
                        });
                    } else {
                        $(this).animate({
                            height: 'toggle',
                            bottom: (element_minimize === true) ? '-=60' : '',
                        }, 300, function() {
                            $(this).css('position', (element_minimize === true) ? 'relative' : 'static');
                        });
                    }
                }
            });
            $(".mystickyelements-position-" + position_device + "top ul li").each(function() {
                if ($(this).hasClass(element_on_device) == true) {
                    $(this).css('position', 'relative');
                    var mystickyelements_size = $('.mystickyelements-fixed').hasClass('mystickyelements-size-large');
                    if (mystickyelements_size == true) {
                        $(this).animate({
                            height: 'toggle',
                            top: (element_minimize === true) ? '-=80' : '',
                        }, 300, function() {
                            $(this).css('position', (element_minimize === true) ? 'relative' : 'static');
                        });
                    } else {
                        $(this).animate({
                            height: 'toggle',
                            top: (element_minimize === true) ? '-=60' : '',
                        }, 300, function() {
                            $(this).css('position', (element_minimize === true) ? 'relative' : 'static');
                        });
                    }
                }
            });
            if ($('span.mystickyelements-minimize').hasClass('minimize-position-' + position_device + 'left') === true) {
                if ($('li.mystickyelements-minimize').hasClass('element-minimize') === true) {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'left').html('&rarr;')
                } else {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'left').html('&larr;')
                }
            } else if ($('span.mystickyelements-minimize').hasClass('minimize-position-' + position_device + 'bottom') === true) {
                if ($('li.mystickyelements-minimize').hasClass('element-minimize') === true) {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'bottom').html('&uarr;')
                } else {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'bottom').html('&darr;')
                }
            } else if ($('span.mystickyelements-minimize').hasClass('minimize-position-' + position_device + 'top') === true) {
                if ($('li.mystickyelements-minimize').hasClass('element-minimize') === true) {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'top').html('&darr;')
                } else {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'top').html('&uarr;')
                }
            } else {
                if ($('li.mystickyelements-minimize').hasClass('element-minimize') === true) {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'right').html('&larr;')
                } else {
                    $('.mystickyelements-minimize.minimize-position-' + position_device + 'right').html('&rarr;')
                }
            }
        });
        $("body").on("click touch", ".update-analytics", function(e) {
            var elementname;
            elementname = $(this).attr('data-social-slug');
            if (elementname != undefined && elementname != "") {
                stickyelements_google_analytics(elementname);
            }
        });
        $(".analytics-update").on("click touch", function(e) {
            var elementname;
            elementname = $(this).attr("id").split('mystickyelements-social-');
            elementname = elementname[1];
            if (elementname != undefined && elementname != "") {
                stickyelements_google_analytics(elementname);
            }
        });
        $(".mystickyelements-on-hover .analytics-update").hover(function() {
            $(this).trigger("click");
        }, function() {});
        $('.mystickyelements-fixed ul li').each(function() {
            var custom_html_class = $(this).hasClass('mystickyelements-custom-html-main');
            if (custom_html_class) {
                var custom_html_child_class = $(this).hasClass('mystickyelements-custom-html-iframe');
                if (custom_html_child_class) {
                    var custom_html_iframe = $(this).find('.mystickyelements-custom-html').height();
                    var main_ul_height = $('.mystickyelements-fixed ul').height();
                    if (main_ul_height > custom_html_iframe) {}
                }
            }
        });
        setTimeout(function() {
            $('.mystickyelements-entry-effect-fade.entry-effect,.mystickyelements-entry-effect-slide-in.entry-effect').css('transition', 'all 0s ease 0s');
        }, 1000);
        $('.mystickyelements-fixed ul li').on('click', function() {
            if ($(this).hasClass('mystickyelements-custom-html-iframe')) {
                $('.mystickyelements-fixed').toggleClass('mystickyelements-custom-html-iframe-open');
            } else {
                $('.mystickyelements-fixed').removeClass('mystickyelements-custom-html-iframe-open');
            }
        });
        $('.mystickyelements-fixed').addClass('entry-effect');
        if ($(window).width() > 1024) {
            var mystickyelements_bottom_width = $('.mystickyelements-position-bottom .mystickyelements-lists').width();
            if (mystickyelements_bottom_width < 300) {
                $('.mystickyelements-position-bottom .mystickyelements-contact-form .element-contact-form').width('300');
            }
        }
        mystickyelements_mobile_top_pos();
        var WindowHeight = (jQuery(window).height());
        var ElementHeight = (jQuery(".mystickyelements-fixed").height());
        var AttributeVal = (jQuery(".mystickyelements-fixed").data("custom-position"));
        var Ele_Att_Height = parseInt(ElementHeight) + parseInt(AttributeVal);
        var Total_Count = parseInt(WindowHeight) - parseInt(Ele_Att_Height);
        var Height = parseInt(WindowHeight / 3);
        var contact_frm_height = $('#mystickyelements-contact-form .element-contact-form').height();
        if (Total_Count > Height && WindowHeight < contact_frm_height) {
            jQuery(".mystickyelements-fixed").addClass("mystickyelements-custom-position-on");
        }
    });
    $(window).resize(function() {
        mystickyelements_border_radius();
        mystickyelements_mobile_top_pos();
    });

    function mystickyelements_mobile_top_pos() {
        if ($(window).width() <= 1024) {
            if ($('.mystickyelements-fixed').hasClass('mystickyelements-position-mobile-top')) {
                var mystickyelements_height = $('.mystickyelements-fixed').height();
                $('html').attr('style', 'margin-top: ' + mystickyelements_height + 'px !important');
            }
        } else {
            $('html').css('margin-top', '');
        }
    }

    function mystickyelements_border_radius() {
        if ($('.element-contact-form').length !== 0) {
            var win_height = $(window).height();
            var element_position = $('.mystickyelements-fixed').position().top;
            var element_offset = $('.element-contact-form').offset().top;
            var contact_frm_height = $('#mystickyelements-contact-form .element-contact-form').height();
            if (win_height < contact_frm_height) {
                var new_height = (win_height - 70);
                $('#mystickyelements-contact-form .element-contact-form').css('max-height', new_height + 'px');
                $('#mystickyelements-contact-form .element-contact-form').css('overflowY', 'auto');
                var contact_form_top = element_position - 10;
                if ($(window).width() > 1025 && !$('.mystickyelements-fixed').hasClass('mystickyelements-position-bottom')) {
                    $('#mystickyelements-contact-form .element-contact-form').css('top', '-' + contact_form_top + 'px');
                }
                if ($(window).width() < 1024 && !$('.mystickyelements-fixed').hasClass('mystickyelements-position-mobile-bottom')) {
                    $('#mystickyelements-contact-form .element-contact-form').css('top', '-' + contact_form_top + 'px');
                }
            } else {
                var minimize_height = $('ul.mystickyelements-lists .mystickyelements-minimize').height();
                if (minimize_height === null) {
                    minimize_height = 0;
                }
                var contact_form_top = element_position - (win_height - contact_frm_height) + minimize_height + 10;
                if ($(window).width() > 1025 && !$('.mystickyelements-fixed').hasClass('mystickyelements-position-bottom')) {
                    $('#mystickyelements-contact-form .element-contact-form').css('top', '-' + contact_form_top + 'px');
                }
                if ($(window).width() < 1024 && !$('.mystickyelements-fixed').hasClass('mystickyelements-position-mobile-bottom')) {
                    $('#mystickyelements-contact-form .element-contact-form').css('top', '-' + contact_form_top + 'px');
                }
                $('#mystickyelements-contact-form .element-contact-form').css('overflowY', '');
                $('#mystickyelements-contact-form .element-contact-form').css('max-height', '');
            }
        }
        var position_device = '';
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            position_device = 'mobile-';
        }
        var $mobile_bottom = 0;
        var $j = 0;
        var element_mobile_count = 0;
        $('.mystickyelements-fixed ul li').each(function() {
            if (mystickyelements.google_analytics === '1' && $(this).hasClass('mystickyelements-minimize') !== true && $(this).attr('id') !== 'mystickyelements-contact-form') {
                if ($(this).find("a").length !== 0) {
                    var elementname = $(this).attr("id").split('mystickyelements-social-');
                    $(this).find("a").addClass('update-analytics');
                    $(this).find("a").attr('data-social-slug', elementname[1]);
                } else {
                    $(this).addClass('analytics-update');
                }
            }
            $('.mystickyelements-position-' + position_device + 'left #' + $(this).attr('id') + ' .mystickyelements-social-icon').css('border-radius', '');
            $('.mystickyelements-position-' + position_device + 'right #' + $(this).attr('id') + ' .mystickyelements-social-icon').css('border-radius', '');
            if ($(window).width() < 1025) {
                element_mobile_count = '12';
            }
            if ($(window).width() < 992) {
                element_mobile_count = '9';
            }
            if ($(window).width() < 768) {
                element_mobile_count = '4';
            }
            if ($(this).hasClass('element-mobile-on') && $j != element_mobile_count) {
                $(this).addClass('mystickyelements-show-last-element');
                $j++;
            } else {
                $(this).removeClass('mystickyelements-show-last-element');
            }
            if ($i == 0) {
                if ($(window).width() > 1024 && !$(this).hasClass('element-desktop-on')) {
                    $flg = true;
                }
                if ($(window).width() < 1025 && !$(this).hasClass('element-mobile-on')) {
                    $flg = true;
                }
            }
            if ($(window).width() > 1024 && $(this).hasClass('element-desktop-on')) {
                social_id = $(this).attr('id');
            }
            if ($(window).width() < 1025 && $(this).hasClass('element-mobile-on')) {
                social_id = $(this).attr('id');
                $mobile_bottom++;
            }
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                second_social_id == '';
            }
            if (second_social_id == '') {
                if ($flg === true) {
                    if ($(window).width() > 1024 && $(this).hasClass('element-desktop-on')) {
                        second_social_id = $(this).attr('id');
                    }
                    if ($(window).width() < 1025 && $(this).hasClass('element-mobile-on')) {
                        second_social_id = $(this).attr('id');
                    }
                }
            }
            $i++;
        });
        $('.mystickyelements-fixed.mystickyelements-position-mobile-bottom').addClass('mystickyelements-bottom-social-channel-' + $mobile_bottom);
        $('.mystickyelements-fixed.mystickyelements-position-mobile-top').addClass('mystickyelements-top-social-channel-' + $mobile_bottom);
        if (social_id != '') {
            if (social_id === 'mystickyelements-contact-form') {
                $('.mystickyelements-position-' + position_device + 'left #' + social_id + ' .mystickyelements-social-icon').css('border-bottom-left-radius', '10px');
                $('.mystickyelements-position-' + position_device + 'right #' + social_id + ' .mystickyelements-social-icon').css('border-top-left-radius', '10px');
                $('.mystickyelements-position-' + position_device + 'bottom #' + social_id + ' .mystickyelements-social-icon').css('border-top-right-radius', '10px');
                if ($('li.mystickyelements-minimize').length !== 1) {
                    $('.mystickyelements-position-' + position_device + 'left #' + social_id + ' .mystickyelements-social-icon').css('border-bottom-right-radius', '10px');
                    $('.mystickyelements-position-' + position_device + 'right #' + social_id + ' .mystickyelements-social-icon').css('border-top-right-radius', '10px');
                }
            } else if (social_id !== 'mystickyelements-contact-form') {
                if ($i === 1) {
                    $('.mystickyelements-position-' + position_device + 'left #' + social_id + ' .mystickyelements-social-icon').css('border-radius', '0px 10px 10px 0');
                    $('.mystickyelements-position' + position_device + '-right #' + social_id + ' .mystickyelements-social-icon').css('border-radius', '10px 0 0 10px');
                } else {
                    $('.mystickyelements-position-' + position_device + 'left #' + social_id + ' .mystickyelements-social-icon').css('border-bottom-right-radius', '10px');
                    $('.mystickyelements-position-' + position_device + 'right #' + social_id + ' .mystickyelements-social-icon').css('border-bottom-left-radius', '10px');
                    $('.mystickyelements-position-' + position_device + 'bottom #' + social_id + ' .mystickyelements-social-icon').css('border-top-right-radius', '10px');
                }
            }
        } else {
            $('.mystickyelement-credit').hide();
            $('.mystickyelements-fixed').hide();
        }
        if (second_social_id != '' && second_social_id !== 'mystickyelements-contact-form' && $('li.mystickyelements-minimize').length !== 1) {
            $('.mystickyelements-position-' + position_device + 'left #' + second_social_id + ' .mystickyelements-social-icon').css('border-top-right-radius', '10px');
            $('.mystickyelements-position-' + position_device + 'right #' + second_social_id + ' .mystickyelements-social-icon').css('border-top-left-radius', '10px');
            $('.mystickyelements-position-' + position_device + 'bottom #' + second_social_id + ' .mystickyelements-social-icon').css('border-top-left-radius', '10px');
        }
    }

    function stickyelements_google_analytics(elementname) {
        if (window.hasOwnProperty("gtag")) {
            gtag('event', 'stickyelements_' + elementname, {
                'eventCategory': 'stickyelements_' + elementname,
                'event_action': 'stickyelements_' + elementname
            });
        } else if (window.hasOwnProperty("ga")) {
            var gaVar = window.ga.getAll()[0];
            if (gaVar) {
                gaVar.send("event", "click", {
                    eventCategory: 'stickyelements_' + elementname,
                    eventAction: 'stickyelements_' + elementname
                });
            }
        }
    }
})(jQuery);
/*! This file is auto-generated */
! function(d, l) {
    "use strict";
    var e = !1,
        n = !1;
    if (l.querySelector)
        if (d.addEventListener) e = !0;
    if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
        if (d.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            for (var r, i, a, s = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = new RegExp("^https?:$", "i"), c = 0; c < n.length; c++) n[c].style.display = "none";
                            for (c = 0; c < s.length; c++)
                                if (r = s[c], e.source === r.contentWindow) {
                                    if (r.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (a = parseInt(t.value, 10))) a = 1e3;
                                        else if (~~a < 200) a = 200;
                                        r.height = a
                                    }
                                    if ("link" === t.message)
                                        if (i = l.createElement("a"), a = l.createElement("a"), i.href = r.getAttribute("src"), a.href = t.value, o.test(a.protocol))
                                            if (a.host === i.host)
                                                if (l.activeElement === r) d.top.location.href = t.value
                                }
                        }
            }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);

    function t() {
        if (!n) {
            n = !0;
            for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), i = !!navigator.userAgent.match(/Trident.*rv:11\./), a = l.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < a.length; s++) {
                if (!(e = a[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
                if (r || i)(t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e)
            }
        }
    }
}(window, document);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2020 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
    function() {
        for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
    }(),
    function($) {
        "function" != typeof window.vc_js && (window.vc_js = function() {
            "use strict";
            vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
        }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
            ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function() {
                var this_element = jQuery(this),
                    sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
                    sliderFx = this_element.attr("data-flex_fx"),
                    slideshow = 0 == sliderTimeout ? !1 : !0;
                this_element.is(":visible") && this_element.flexslider({
                    animation: sliderFx,
                    slideshow: slideshow,
                    slideshowSpeed: sliderTimeout,
                    sliderSpeed: 800,
                    smoothHeight: !0
                })
            })
        }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
            0 < jQuery(".wpb_googleplus").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
            0 < jQuery(".wpb_pinterest").length && function() {
                var po = document.createElement("script");
                po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(po, s)
            }()
        }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.find(".vc_single_bar").each(function(index) {
                        var bar = jQuery(this).find(".vc_bar"),
                            val = bar.data("percentage-value");
                        setTimeout(function() {
                            bar.css({
                                width: val + "%"
                            })
                        }, 200 * index)
                    })
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
            void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function() {
                var $el = jQuery(this);
                $el.vcwaypoint(function() {
                    $el.addClass("wpb_start_animation animated")
                }, {
                    offset: "85%"
                })
            })
        }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
            function event(e) {
                e && e.preventDefault && e.preventDefault();
                var element = jQuery(this).closest(".vc_toggle"),
                    content = element.find(".vc_toggle_content");
                element.hasClass("vc_toggle_active") ? content.slideUp({
                    duration: 300,
                    complete: function() {
                        element.removeClass("vc_toggle_active")
                    }
                }) : content.slideDown({
                    duration: 300,
                    complete: function() {
                        element.addClass("vc_toggle_active")
                    }
                })
            }
            $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event)
        }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
            var $call, ver, old_version;
            jQuery.ui && ($call = $tab || jQuery(".wpb_tabs, .wpb_tour"), ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10", old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9, $call.each(function(index) {
                var interval = jQuery(this).attr("data-interval"),
                    tabs_array = [],
                    $tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
                        show: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        },
                        activate: function(event, ui) {
                            wpb_prepare_tab_content(event, ui)
                        }
                    });
                if (interval && 0 < interval) try {
                    $tabs.tabs("rotate", 1e3 * interval)
                } catch (err) {
                    window.console && window.console.warn && console.warn("tabs behaviours error", err)
                }
                jQuery(this).find(".wpb_tab").each(function() {
                    tabs_array.push(this.id)
                }), jQuery(this).find(".wpb_tabs_nav li").on("click", function(e) {
                    return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
                }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function(e) {
                    var index, length;
                    e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index))
                })
            }))
        }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
            jQuery(".wpb_accordion").each(function(index) {
                var $this = jQuery(this),
                    active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1),
                    collapsible = !1 === active_tab || "yes" === $this.data("collapsible"),
                    $tabs = $this.find(".wpb_accordion_wrapper").accordion({
                        header: "> div > h3",
                        autoHeight: !1,
                        heightStyle: "content",
                        active: active_tab,
                        collapsible: collapsible,
                        navigation: !0,
                        activate: vc_accordionActivate,
                        change: function(event, ui) {
                            void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
                        }
                    });
                !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
            })
        }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
            var layout_modes = {
                fitrows: "fitRows",
                masonry: "masonry"
            };
            jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
                var $container = jQuery(this),
                    $thumbs = $container.find(".wpb_thumbnails"),
                    layout_mode = $thumbs.attr("data-layout-mode");
                $thumbs.isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
                }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function(e) {
                    e && e.preventDefault && e.preventDefault();
                    var $thumbs = jQuery(this).data("isotope");
                    jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
                        filter: jQuery(this).attr("data-filter")
                    })
                }), jQuery(window).bind("load resize", function() {
                    $thumbs.isotope("layout")
                })
            })
        }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
            ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function() {
                var carousel_li, fluid_ul, $this = jQuery(this);
                !0 !== $this.data("carousel_enabled") && $this.is(":visible") && ($this.data("carousel_enabled", !0), getColumnsCount(jQuery(this)), jQuery(this).hasClass("columns_count_1"), (carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
                    "margin-right": carousel_li.css("margin-left"),
                    "margin-left": 0
                }), (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(fluid_ul.width() + 300), jQuery(window).on("resize", function() {
                    screen_size != (screen_size = getSizeName()) && window.setTimeout(function() {
                        location.reload()
                    }, 20)
                }))
            })
        }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
            jQuery(".wpb_gallery_slides").each(function(index) {
                var $imagesGrid, sliderTimeout, this_element = jQuery(this);
                this_element.hasClass("wpb_slider_nivo") ? (0 === (sliderTimeout = 1e3 * this_element.attr("data-interval")) && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
                    effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                    slices: 15,
                    boxCols: 8,
                    boxRows: 4,
                    animSpeed: 800,
                    pauseTime: sliderTimeout,
                    startSlide: 0,
                    directionNav: !0,
                    directionNavHide: !0,
                    controlNav: !0,
                    keyboardNav: !1,
                    pauseOnHover: !0,
                    manualAdvance: !1,
                    prevText: "Prev",
                    nextText: "Next"
                })) : this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
                    $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows"
                    })
                }) : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows"
                }))
            })
        }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
            try {
                jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
                    animationSpeed: "normal",
                    hook: "data-rel",
                    padding: 15,
                    opacity: .7,
                    showTitle: !0,
                    allowresize: !0,
                    counter_separator_label: "/",
                    hideflash: !1,
                    deeplinking: !1,
                    modal: !1,
                    callback: function() {
                        -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "")
                    },
                    social_tools: ""
                })
            } catch (err) {
                window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err)
            }
        }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
            return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1
        }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
            var vcSkrollrOptions, callSkrollInit, $ = window.jQuery;

            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                    var $el = $(this);
                    $el.addClass("vc_hidden");
                    var el_margin_left, el_margin_right, offset, width, padding, paddingRight, $el_full = $el.next(".vc_row-full-width");
                    $el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length && (el_margin_left = parseInt($el.css("margin-left"), 10), el_margin_right = parseInt($el.css("margin-right"), 10), offset = 0 - $el_full.offset().left - el_margin_left, width = $(window).width(), "rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
                        position: "relative",
                        left: offset,
                        "box-sizing": "border-box",
                        width: width
                    }), $el.data("vcStretchContent") || ("rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
                        "padding-left": padding + "px",
                        "padding-right": paddingRight + "px"
                    })), $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
                        el: $el,
                        offset: offset,
                        marginLeft: el_margin_left,
                        marginRight: el_margin_right,
                        elFull: $el_full,
                        width: width
                    }))
                }), $(document).trigger("vc-full-width-row", $elements)
            }

            function fullHeightRow() {
                var fullHeight, windowHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
                $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"))), $(document).trigger("vc-full-height-row", $element)
            }
            $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
                "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
            }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
                var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
                callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;")
            }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
                forceHeight: !1,
                smoothScrolling: !1,
                mobileCheck: function() {
                    return !1
                }
            }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
        }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
            jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
        }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
            for (var find = !1, i = 1; !1 === find;) {
                if (el.hasClass("columns_count_" + i)) return find = !0, i;
                i++
            }
        });
        var screen_size = getSizeName();

        function getSizeName() {
            var screen_w = jQuery(window).width();
            return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : ""
        }
        "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
            var $ui_panel, $google_maps, $frame, panel = ui.panel || ui.newPanel,
                $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
                $round_charts = panel.find(".vc_round-chart"),
                $line_charts = panel.find(".vc_line-chart"),
                $carousel = panel.find('[data-ride="vc_carousel"]');
            vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready") && (($frame = $google_maps.find("iframe")).attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")), panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            }), $(document).trigger("wpb_prepare_tab_content", panel)
        }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function() {
            jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
                var $ = window.jQuery,
                    ui = {};
                ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
            })
        }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function(event, ui) {
            var $pie_charts, $round_charts, $line_charts, $carousel;
            ui.newPanel.length && ui.newHeader.length && ($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"), $round_charts = ui.newPanel.find(".vc_round-chart"), $line_charts = ui.newPanel.find(".vc_line-chart"), $carousel = ui.newPanel.find('[data-ride="vc_carousel"]'), void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
                var grid = jQuery(this).data("vcGrid");
                grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
            }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
                reload: !1
            }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
                reload: !1
            }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
                jQuery(this).isotope("layout")
            }))
        }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function() {
            return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
        }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function() {
            jQuery("[data-vc-video-bg]").each(function() {
                var youtubeUrl, youtubeId, $element = jQuery(this);
                $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
                    $element.has($grid).length && vcResizeVideoBackground($element)
                })) : $element.find(".vc_video-bg").remove()
            })
        }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function($element, youtubeId, counter) {
            if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++)
            }, 100);
            var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
            new YT.Player($container[0], {
                width: "100%",
                height: "100%",
                videoId: youtubeId,
                playerVars: {
                    playlist: youtubeId,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    wmode: "transparent"
                },
                events: {
                    onReady: function(event) {
                        event.target.mute().setLoop(!0)
                    }
                }
            }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
                vcResizeVideoBackground($element)
            })
        }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function($element) {
            var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
                containerH = $element.innerHeight();
            containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
                maxWidth: "1000%",
                marginLeft: marginLeft,
                marginTop: marginTop,
                width: iframeW,
                height: iframeH
            })
        }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function(url) {
            if (void 0 === url) return !1;
            var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
            return null !== id && id[1]
        }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function() {
            var $ = window.jQuery,
                $wpbGmapsWidget = $(".wpb_gmaps_widget");
            $wpbGmapsWidget.on("click", function() {
                $("iframe", this).css("pointer-events", "auto")
            }), $wpbGmapsWidget.on("mouseleave", function() {
                $("iframe", this).css("pointer-events", "none")
            }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
        }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    perspective = 4 * $this.width() + "px";
                $this.css("perspective", perspective)
            })
        }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function(hoverBox) {
            hoverBox.each(function() {
                var $this = jQuery(this),
                    hoverBoxInner = $this.find(".vc-hoverbox-inner");
                hoverBoxInner.css("min-height", 0);
                var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
                    backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
                    hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
                hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px")
            })
        }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function() {
            var hoverBox = jQuery(".vc-hoverbox");
            vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox)
        }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function($) {
            window.vc_js()
        })
    }(window.jQuery);
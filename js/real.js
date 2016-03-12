var REAL = function() {
    function e() {
        $(window).resize(function() {
            var e = c;
            n(), c !== e && o()
        }), $("body").on("click", ".segment-closed", function() {
            r($(this))
        })
    }

    function t() {
        function e() {
            function e(i) {
                var n = i,
                    o = n.next(".page-segment"),
                    s = n.find(".intro-anim-title").filter(function() {
                        return $(this).offset().top < $(window).height() ? this : void 0
                    }),
                    a = s.length;
                s.css("opacity", 0), n.find(".segment-wrap").css("opacity", 1), s.each(function(e) {
                    var i = $(this);
                    setTimeout(function() {
                        TweenLite.to(i, .25, {
                            opacity: 1,
                            ease: Power2.easeOut
                        })
                    }, t * e)
                }), o.length ? setTimeout(function() {
                    e(o)
                }, t * a) : setTimeout(function() {
                    r($(".page-segment").eq(1), !0), $(".segment--mobile").css("opacity", 1)
                }, t * a + 500)
            }
            var t = 40,
                i = $(".segment-wrap:first"),
                n = i.find("p");
            TweenLite.to(i, .25, {
                opacity: 1,
                ease: Power2.easeOut
            }), setTimeout(function() {
                e($(".page-segment").eq(1)), $(n.get().reverse()).not(":last").each(function(e) {
                    var i = $(this);
                    setTimeout(function() {
                        function e() {
                            i.remove()
                        }
                        TweenLite.to(i, .25, {
                            opacity: 0,
                            ease: Power2.easeOut,
                            onComplete: e
                        })
                    }, t * e)
                })
            }, 400)
        }

        function t() {
            var e = 50;
            $(".segment-wrap").each(function(e) {
                var t = $(this);
                setTimeout(function() {
                    TweenLite.to(t, .25, {
                        opacity: 1,
                        ease: Power2.easeOut
                    })
                }, 100 * e)
            }), setTimeout(function() {
                r($(".page-segment").eq(1), !0)
            }, e * $(".segment-wrap").length + 500)
        }
        if ("desktop" == c) {
            var n = $(".segment--one .segment-wrap"),
                o = n.height(),
                s = $(".segment--one p:first").height(),
                a = o / s,
                f = Math.floor(a),
                l = '<p class="hide-on-close">Real Estate Architecture Laboratory</p>';
            for (i = 0; i < f - 1; i++) n.find(".segment--inner").append(l);
            setTimeout(e, 300)
        } else "mobile" == c && setTimeout(t, 300)
    }

    function n() {
        c = $(window).width() >= 1024 ? "desktop" : "mobile"
    }

    function o() {
        var e = 3.23;
        if ("desktop" == c) var e = 3.21;
        else if ("mobile" == c) var e = 1.53;
        $("body").fitText(e)
    }

    function s() {
        var e = $(".intro-title").text().split(" ");
        for (w in e) {
            var t = e[w].split("");
            for (i = 0; i in t; i++) 0 == i ? t[i] = '<i class="first-letter">' + t[i] + "</i>" : t[i] = "<i>" + t[i] + "</i>";
            e[w] = t.join(""), e[w] = '<span class="single-word">' + e[w] + "</span>"
        }
        var n = e.join('<i class="letter-space">&nbsp;</i>');
        $(".intro-title").html(n)
    }

    function a() {
        function e() {
            TweenLite.to($(".segment--one-bg"), .5, {
                opacity: 1,
                ease: Power2.easeOut
            })
        }!Modernizr.touch && $(window).width() >= 1024 && $(".segment--one-bg").YTPlayer({
            fitToBackground: !0,
            width: $(".segment-wrap").width(),
            videoId: "TUm_xYZIBPY",
            callback: function() {
                var t = $(".segment--one-bg").data("ytPlayer").player;
                t.addEventListener("onStateChange", function(t) {
                    "1" == t.data && e()
                })
            }
        })
    }

    function r(e, t) {
        function i() {
            TweenLite.to(o, .25, {
                opacity: 1,
                ease: Power2.easeOut
            }), l = !1, t && (a(), $("body").addClass("intro-complete"))
        }
        if (l !== !0 && $(".intro-complete").length || l !== !0 && t) {
            var n = e,
                o = n.find(".hide-on-close"),
                s = n.find(".intro-title"),
                r = n.siblings(".page-segment").not(".segment-closed"),
                c = $(".segment-wrap").filter(function() {
                    return 0 != $(this).scrollTop() ? this : void 0
                }),
                f = r.find(".hide-on-close"),
                d = r.find(".intro-title");
            if (n.find(".segment-wrap").css("padding-bottom", ""), l = !0, d.length) var u = .375;
            else var u = 0;
            TweenLite.to(n, .375, {
                css: {
                    className: "-=segment-closed"
                },
                force3D: !0,
                delay: u,
                onComplete: i
            }), TweenLite.to(r, .375, {
                css: {
                    className: "+=segment-closed"
                },
                force3D: !0,
                delay: u
            }), TweenLite.to(c, .25, {
                scrollTo: {
                    y: 0
                },
                ease: Power2.easeOut,
                delay: u
            }), TweenLite.to(f, .25, {
                opacity: 0,
                ease: Power2.easeOut,
                delay: u
            }), d.length && (d.find("i").each(function() {
                $(this).data("width", $(this).width())
            }), TweenLite.to(d.find("i:not(.first-letter)"), .375, {
                opacity: 0
            }), TweenLite.to(d.find("i:not(.first-letter)"), .375, {
                width: 0,
                delay: .375,
                ease: Power2.easeOut
            })), s.length && s.find("i").each(function() {
                function e() {
                    t.removeAttr("style")
                }
                var t = $(this),
                    i = t.data("width");
                TweenLite.to(t, .375, {
                    width: i,
                    ease: Power2.easeOut
                }), TweenLite.to(t, .375, {
                    opacity: 1,
                    ease: Power2.easeOut,
                    delay: .375,
                    onComplete: e
                })
            })
        }
    }
    var c, f = {},
        l = !1;
    return f.init = function() {
        n(), e(), s(), o(), t()
    }, f
}();
$(document).ready(function() {
    REAL.init()
});
(this.webpackJsonpbackground = this.webpackJsonpbackground || []).push([
  [0],
  {
    100: function (e, t, a) {
      e.exports = a(184);
    },
    105: function (e, t, a) {},
    115: function (e, t, a) {},
    116: function (e, t, a) {},
    117: function (e, t, a) {},
    118: function (e, t, a) {},
    133: function (e, t, a) {},
    134: function (e, t, a) {},
    182: function (e, t, a) {},
    184: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        s = a.n(n),
        i = a(16),
        l = a.n(i),
        r = (a(105), a(20)),
        o = a(6),
        c = a(7),
        m = a(10),
        d = a(9),
        u = a(30),
        h = a.n(u),
        p = a(29),
        v = a(190),
        E = a(191),
        f =
          (a(115),
          (function (e) {
            Object(m.a)(a, e);
            var t = Object(d.a)(a);
            function a() {
              return Object(o.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    window.scrollTo(0, 0);
                  },
                },
                {
                  key: "noUrlHandler",
                  value: function (e, t) {
                    return "" === e
                      ? s.a.createElement(
                          "h4",
                          null,
                          s.a.createElement("b", null, t)
                        )
                      : s.a.createElement(
                          "h4",
                          null,
                          s.a.createElement(
                            "a",
                            {
                              href: e,
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                            t
                          )
                        );
                  },
                },
                {
                  key: "noImgHandler",
                  value: function (e, t) {
                    return "" === t
                      ? s.a.createElement("img", {
                          src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
                          alt: e,
                          className: "teamImg",
                        })
                      : s.a.createElement("img", {
                          src: t,
                          alt: e,
                          className: "teamImg",
                        });
                  },
                },
                {
                  key: "rowBuilder",
                  value: function (e) {
                    for (
                      var t = e.length, a = Math.ceil(t / 3), n = [], i = 0;
                      i < a;
                      i++
                    ) {
                      for (var l = [], r = 0; r < 3; r++) {
                        var o = 3 * i + r;
                        o < t &&
                          l.push(
                            s.a.createElement(
                              "div",
                              {
                                className:
                                  "col-lg-4 col-md-4 col-sm-4 col-xs-12",
                              },
                              s.a.createElement(
                                "div",
                                { key: o },
                                this.noImgHandler(e[o].name, e[o].dp),
                                this.noUrlHandler(e[o].web, e[o].name),
                                s.a.createElement(
                                  "h5",
                                  { style: { marginTop: "-5px" } },
                                  e[o].role
                                )
                              )
                            )
                          );
                      }
                      n.push(
                        s.a.createElement(
                          "div",
                          { className: "row", style: { paddingTop: "20px" } },
                          l
                        )
                      );
                    }
                    return s.a.createElement(
                      "div",
                      { className: "container" },
                      n
                    );
                  },
                },
                {
                  key: "renderTeam",
                  value: function () {
                    return 0 === this.props.teamData.length
                      ? s.a.createElement(
                          "div",
                          { align: "center", style: { paddingBottom: "15px" } },
                          s.a.createElement(
                            "h4",
                            null,
                            "Fetching team information"
                          ),
                          s.a.createElement("div", { className: "loader" })
                        )
                      : s.a.createElement(
                          "div",
                          null,
                          this.rowBuilder(this.props.teamData)
                        );
                  },
                },
                {
                  key: "renderAlumni",
                  value: function () {
                    return 0 === this.props.alumniData.length
                      ? s.a.createElement(
                          "div",
                          { align: "center", style: { paddingBottom: "15px" } },
                          s.a.createElement(
                            "h4",
                            null,
                            "Fetching alumni information"
                          ),
                          s.a.createElement("div", { className: "loader" })
                        )
                      : s.a.createElement(
                          "div",
                          null,
                          this.rowBuilder(this.props.alumniData)
                        );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return s.a.createElement(
                      "div",
                      { className: "teamStyle" },
                      s.a.createElement(
                        "h1",
                        { style: { fontFamily: "Cabin" } },
                        "Meet the Team"
                      ),
                      this.renderTeam(),
                      s.a.createElement(
                        "h1",
                        { style: { fontFamily: "Cabin" } },
                        "Alumni"
                      ),
                      this.renderAlumni()
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        y =
          (a(116),
          (function (e) {
            Object(m.a)(a, e);
            var t = Object(d.a)(a);
            function a() {
              return Object(o.a)(this, a), t.apply(this, arguments);
            }
            return (
              Object(c.a)(a, [
                {
                  key: "componentDidMount",
                  value: function () {
                    window.scrollTo(0, 0);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return s.a.createElement(
                      "div",
                      { className: "aboutUsStyle" },
                      s.a.createElement(
                        "div",
                        { className: "aboutContainer" },
                        s.a.createElement("img", {
                          className: "aboutImg",
                          src: this.props.largeScreen
                            ? "/imgs/cover_large.jpg"
                            : "/imgs/cover_small.jpg",
                          alt: "Hackathon",
                        }),
                        s.a.createElement(
                          "div",
                          { className: "aboutHeading" },
                          s.a.createElement("h1", null, "A B O U T")
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { className: "aboutContent" },
                        s.a.createElement(
                          "h4",
                          null,
                          "Tech Club SSN is a student run organization of the department of ECE in SSN College of Engineering."
                        ),
                        s.a.createElement("hr", null),
                        s.a.createElement("h1", null, "Our Mission"),
                        s.a.createElement(
                          "p",
                          null,
                          "Since its inception in 2014, Tech Club SSN serves to enhance student involvement in fields revolving around Electronics and Computer Science. We do this by conducting tutorials, classes and events on practical concepts in fields such as Computer Vision, IoT, Robotics and Machine Learning. We organize technical events around the year where students can apply their newly acquired skills. Moreover, we guide students to pursue their aspirations in the fields of their interest by preparing them for internships, independant research work, significant technical events and hackathons."
                        ),
                        s.a.createElement("hr", null),
                        s.a.createElement("h1", null, "Join Us"),
                        s.a.createElement(
                          "p",
                          null,
                          "Let's build something great together. We conduct weekly sessions and lots of events throughout the year. Sessions are mostly conducted during TechClub hours, which are usually kept at the last few periods of Thursday or Tuesday. Details of upcoming sessions will be updated on the website. Stay tuned to the news section of the website for information on exciting events!"
                        ),
                        s.a.createElement(
                          "p",
                          null,
                          "Tech Club SSN is a welcoming community that is open for all. No pre-requisite knowledge is required! A desire to learn and build something is more than enough. Even though Tech Club is an organization based in the department of ECE, students of all departments are welcome to join our activities! However, since most sessions are conducted on Tech Club hours which are only available on ECE timetables (from 3rd semester and above), we cannot guarantee OD for regular sessions for students belonging to other departments (and first years students). OD will be provided for almost every other acitivity for everyone!"
                        ),
                        s.a.createElement("hr", null),
                        s.a.createElement("h1", null, "Study Guides"),
                        s.a.createElement(
                          "p",
                          null,
                          "We document the materials used in our sessions so that students can refer to it even if they miss out on the sessions. Also, we document information regarding internships, technical opportunities, MS application process and much more. Checkout our GitHub page for all such materials."
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        b = (a(117), a(24)),
        g = (a(118), a(40)),
        N = (function (e) {
          Object(m.a)(a, e);
          var t = Object(d.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "customMarkdownParse",
                value: function (e) {
                  for (
                    var t = 0,
                      a = 0,
                      n = 0,
                      i = 0,
                      l = !1,
                      r = -1,
                      o = { type: [], content: { data: [], link: [] } },
                      c = 0;
                    c < e.length;
                    c++
                  )
                    "[" !== e[c] || l || ((i = c), (a = c + 1)),
                      "]" !== e[c] ||
                        "(" !== e[c + 1] ||
                        l ||
                        (o.type.push("p"),
                        o.content.data.push(e.substr(t, i - t)),
                        o.content.link.push(""),
                        (n = c),
                        (r = c + 1),
                        (l = !0)),
                      ")" === e[c] &&
                        l &&
                        (o.type.push("a"),
                        o.content.data.push(e.substr(a, n - a)),
                        o.content.link.push(e.substr(r + 1, c - r - 1)),
                        (l = !1),
                        (t = c + 1));
                  return (
                    o.type.push("p"),
                    o.content.data.push(e.substr(t, e.length)),
                    o.content.link.push(""),
                    s.a.createElement(
                      "span",
                      null,
                      o.type.map(function (e, t) {
                        return s.a.createElement(
                          "span",
                          { key: t },
                          "p" === e
                            ? s.a.createElement("span", null, o.content.data[t])
                            : s.a.createElement(
                                "a",
                                {
                                  className: "footer-link",
                                  href: o.content.link[t],
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                s.a.createElement("b", null, o.content.data[t])
                              )
                        );
                      })
                    )
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "span",
                    null,
                    this.customMarkdownParse(this.props.data)
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        k = a(22),
        w = a(23),
        S = (function (e) {
          Object(m.a)(a, e);
          var t = Object(d.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).state = { displayPara: n.props.sticky }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "paraContent",
                value: function () {
                  return s.a.createElement(
                    "div",
                    { style: { paddingBottom: "5px" } },
                    s.a.createElement(
                      "p",
                      null,
                      "Information on the latest news regarding TechClub, Events and Hackathons."
                    )
                  );
                },
              },
              {
                key: "toggleDisplayPara",
                value: function () {
                  var e = this.props.sticky,
                    t = this.state.displayPara;
                  !1 === e && !0 === t
                    ? this.setState({ displayPara: !1 })
                    : !1 === e &&
                      !1 === t &&
                      this.setState({ displayPara: !0 });
                },
              },
              {
                key: "newsHeaderSticky",
                value: function () {
                  var e = this,
                    t = this.state.displayPara;
                  return s.a.createElement(
                    "div",
                    null,
                    !0 === this.props.sticky
                      ? s.a.createElement(k.Sticky, null, function (t) {
                          var a = t.style;
                          return s.a.createElement(
                            "div",
                            {
                              style: Object(b.a)(
                                Object(b.a)({}, a),
                                {},
                                { paddingTop: "30px", paddingBottom: "30px" }
                              ),
                            },
                            s.a.createElement("h1", null, "Anouncements"),
                            e.paraContent()
                          );
                        })
                      : s.a.createElement(
                          "div",
                          null,
                          s.a.createElement("h1", null, "Anouncements"),
                          s.a.createElement(
                            g.Collapse,
                            { isOpened: t },
                            this.paraContent()
                          ),
                          s.a.createElement(
                            "button",
                            {
                              onClick: function () {
                                return e.toggleDisplayPara();
                              },
                              className: "btn btn-warning",
                            },
                            !0 === t ? "Less" : "More"
                          )
                        )
                  );
                },
              },
              {
                key: "renderTimeLine",
                value: function () {
                  var e = this.props.sticky ? "37px" : "0px";
                  return 0 === this.props.data.length
                    ? s.a.createElement(
                        "div",
                        { align: "center", style: { paddingTop: e } },
                        s.a.createElement(
                          "h4",
                          null,
                          "Fetching latest information"
                        ),
                        s.a.createElement("div", { className: "loader" })
                      )
                    : s.a.createElement(
                        w.Timeline,
                        {
                          orientation: "left",
                          lineColor: "#333",
                          lineStyle: { width: "4px" },
                        },
                        this.props.data
                          .slice(0)
                          .reverse()
                          .map(function (e, t) {
                            return s.a.createElement(
                              w.TimelineEvent,
                              {
                                title: e.headline,
                                subtitle: "Date: " + e.date,
                                container: "card",
                                cardHeaderStyle: { background: "orange" },
                                bubbleStyle: {
                                  background: "orange",
                                  borderColor: "#333",
                                  borderWidth: "4px",
                                },
                                titleStyle: {
                                  fontSize: "18px",
                                  color: "#333",
                                  fontFamily: "Cabin",
                                },
                                subtitleStyle: {
                                  fontSize: "11px",
                                  color: "white",
                                },
                                contentStyle: {
                                  fontFamily: "Cabin",
                                  fontSize: "14px",
                                },
                              },
                              s.a.createElement(N, { data: e.news })
                            );
                          })
                      );
                },
              },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    { className: "container-fluid" },
                    s.a.createElement(
                      k.StickyContainer,
                      null,
                      s.a.createElement(
                        "div",
                        { className: "row" },
                        s.a.createElement(
                          "div",
                          {
                            className:
                              "col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsHeader",
                          },
                          this.newsHeaderSticky()
                        ),
                        s.a.createElement(
                          "div",
                          {
                            className:
                              "col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsStyle",
                          },
                          this.renderTimeLine()
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        C =
          (a(133),
          (function (e) {
            Object(m.a)(a, e);
            var t = Object(d.a)(a);
            function a(e) {
              var n;
              return (
                Object(o.a)(this, a),
                ((n = t.call(this, e)).state = { displayPara: n.props.sticky }),
                n
              );
            }
            return (
              Object(c.a)(a, [
                {
                  key: "paraContent",
                  value: function () {
                    return s.a.createElement(
                      "div",
                      { style: { paddingBottom: "5px" } },
                      s.a.createElement(
                        "p",
                        null,
                        "Sessions are weekly activities organized by the TechClub members. They are usually comprised of tutorials and classes on a particular area of concentration. We also organize talks and provide guidance on technical events, projects and opportunities."
                      ),
                      s.a.createElement(
                        "p",
                        null,
                        "Sessions are mostly conducted during TechClub hours, which are usually kept at the last few periods of Thursday or Tuesday. All sessions are open to everyone, however they might happen during class hours of other departments. This section lists out the date and venue of upcoming and past sessions."
                      )
                    );
                  },
                },
                {
                  key: "toggleDisplayPara",
                  value: function () {
                    var e = this.props.sticky,
                      t = this.state.displayPara;
                    !1 === e && !0 === t
                      ? this.setState({ displayPara: !1 })
                      : !1 === e &&
                        !1 === t &&
                        this.setState({ displayPara: !0 });
                  },
                },
                {
                  key: "sessionHeaderSticky",
                  value: function () {
                    var e = this,
                      t = this.state.displayPara;
                    return s.a.createElement(
                      "div",
                      null,
                      !0 === this.props.sticky
                        ? s.a.createElement(k.Sticky, null, function (t) {
                            var a = t.style;
                            return s.a.createElement(
                              "div",
                              {
                                style: Object(b.a)(
                                  Object(b.a)({}, a),
                                  {},
                                  { paddingTop: "30px", paddingBottom: "47px" }
                                ),
                              },
                              s.a.createElement("h1", null, "Sessions"),
                              e.paraContent()
                            );
                          })
                        : s.a.createElement(
                            "div",
                            null,
                            s.a.createElement("h1", null, "Sessions"),
                            s.a.createElement(
                              g.Collapse,
                              { isOpened: t },
                              this.paraContent()
                            ),
                            s.a.createElement(
                              "button",
                              {
                                onClick: function () {
                                  return e.toggleDisplayPara();
                                },
                                className: "btn btn-warning",
                              },
                              !0 === t ? "Less" : "More"
                            )
                          )
                    );
                  },
                },
                {
                  key: "renderTimeLine",
                  value: function () {
                    var e = this.props.sticky ? "87px" : "0px";
                    return 0 === this.props.data.length
                      ? s.a.createElement(
                          "div",
                          { align: "center", style: { paddingTop: e } },
                          s.a.createElement(
                            "h4",
                            null,
                            "Fetching latest information"
                          ),
                          s.a.createElement("div", { className: "loader" })
                        )
                      : s.a.createElement(
                          w.Timeline,
                          {
                            orientation: "right",
                            lineColor: "#333",
                            lineStyle: { width: "4px" },
                          },
                          this.props.data
                            .slice(0)
                            .reverse()
                            .map(function (e, t) {
                              return s.a.createElement(
                                w.TimelineEvent,
                                {
                                  title: e.sessionName,
                                  container: "card",
                                  subtitle: s.a.createElement(
                                    "div",
                                    null,
                                    s.a.createElement(
                                      "p",
                                      { style: { margin: "0" } },
                                      " ",
                                      "Date: " + e.date,
                                      " "
                                    ),
                                    s.a.createElement(
                                      "p",
                                      { style: { margin: "0" } },
                                      "" === e.venue
                                        ? "Venue: TBD"
                                        : "Venue: " + e.venue
                                    )
                                  ),
                                  cardHeaderStyle: { background: "orange" },
                                  bubbleStyle: {
                                    background: "orange",
                                    borderColor: "#333",
                                    borderWidth: "4px",
                                  },
                                  titleStyle: {
                                    fontSize: "18px",
                                    color: "#333",
                                    fontFamily: "Cabin",
                                  },
                                  subtitleStyle: {
                                    fontSize: "11px",
                                    color: "white",
                                  },
                                  contentStyle: {
                                    fontFamily: "Cabin",
                                    fontSize: "14px",
                                  },
                                },
                                s.a.createElement(N, { data: e.details })
                              );
                            })
                        );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return s.a.createElement(
                      "div",
                      { className: "container-fluid" },
                      s.a.createElement(
                        k.StickyContainer,
                        null,
                        s.a.createElement(
                          "div",
                          { className: "row" },
                          s.a.createElement(
                            "div",
                            {
                              className:
                                "col-sm-6 col-sm-push-6 sessionsHeader",
                            },
                            this.sessionHeaderSticky()
                          ),
                          s.a.createElement(
                            "div",
                            {
                              className: "col-sm-6 col-sm-pull-6 sessionsStyle",
                            },
                            this.renderTimeLine()
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        x = a(187),
        T = a(81),
        O = a.n(T),
        j = 0,
        D = p.Element,
        A = p.scroller,
        I = {
          height: "90vh",
          border: "3px",
          boxSizing: "border-box",
          overflowX: "hidden",
          overflowY: "hidden",
          margin: "0px",
        },
        H = { position: "absolute", bottom: "10vh" },
        P = (function (e) {
          Object(m.a)(a, e);
          var t = Object(d.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).state = { enableHomeScroll: !1 }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "scrollToElement",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    a = {};
                  t || (a = { smooth: !0, offset: -50 }), A.scrollTo(e, a);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  "sessions" === this.props.dest &&
                    this.scrollToElement("sess"),
                    "news" === this.props.dest && this.scrollToElement("news"),
                    "home" === this.props.dest &&
                      this.scrollToElement("home", !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  "sessions" === this.props.dest &&
                    this.scrollToElement("sess"),
                    "news" === this.props.dest && this.scrollToElement("news"),
                    "home" === this.props.dest &&
                      (j < 1 ? (j += 1) : this.scrollToElement("home"));
                },
              },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(
                      "div",
                      { style: I },
                      s.a.createElement(D, { name: "home" }),
                      s.a.createElement(
                        "div",
                        { className: "logoMobile" },
                        s.a.createElement("img", {
                          src: "/imgs/logo.png",
                          alt: "logo",
                          className: "logoSize",
                        })
                      ),
                      s.a.createElement(O.a, {
                        style: H,
                        params: {
                          particles: {
                            number: { value: 60 },
                            size: { value: 3 },
                          },
                          interactivity: {
                            events: {
                              onhover: { enable: !0, mode: "repulse" },
                            },
                          },
                        },
                      })
                    ),
                    s.a.createElement(
                      x.a,
                      { to: "/hackinfinity" },
                      s.a.createElement(
                        "div",
                        { className: "hi-link-div" },
                        s.a.createElement(
                          "h1",
                          { className: "hi-link-text" },
                          "UPCOMING EVENTS : "
                        ),
                        s.a.createElement(
                          "div",
                          null,
                          s.a.createElement(
                            "h1",
                            { className: "hi-link-title" },
                            "HACKINFINITY"
                          ),
                          s.a.createElement(
                            "h1",
                            { className: "hi-link-subtitle" },
                            "To Hackinfinity and Beyond"
                          )
                        )
                      )
                    ),
                    s.a.createElement(
                      D,
                      { name: "news" },
                      s.a.createElement(S, {
                        data: this.props.newsData,
                        sticky: this.props.sticky,
                      })
                    ),
                    s.a.createElement(
                      D,
                      { name: "sess" },
                      s.a.createElement(C, {
                        data: this.props.sessionData,
                        sticky: this.props.sticky,
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        M = (a(134), a(188)),
        W = a(192),
        R = a(193),
        z = (function (e) {
          Object(m.a)(a, e);
          var t = Object(d.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).state = { navExpanded: !1 }),
              (n.setNavExpanded = n.setNavExpanded.bind(Object(r.a)(n))),
              (n.closeNav = n.closeNav.bind(Object(r.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "setNavExpanded",
                value: function (e) {
                  this.setState({ navExpanded: e });
                },
              },
              {
                key: "closeNav",
                value: function () {
                  this.setState({ navExpanded: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    M.a,
                    {
                      inverse: !0,
                      fixedTop: !0,
                      onToggle: this.setNavExpanded,
                      expanded: this.state.navExpanded,
                    },
                    s.a.createElement(
                      M.a.Header,
                      null,
                      s.a.createElement(
                        M.a.Brand,
                        null,
                        s.a.createElement(
                          x.a,
                          { to: "/", onClick: this.closeNav },
                          s.a.createElement(
                            "button",
                            {
                              style: {
                                background: "transparent",
                                borderColor: "transparent",
                              },
                            },
                            "TechClubSSN"
                          )
                        )
                      ),
                      s.a.createElement(M.a.Toggle, {
                        style: { marginRight: "27px" },
                      })
                    ),
                    s.a.createElement(
                      M.a.Collapse,
                      null,
                      s.a.createElement(
                        W.a,
                        { pullRight: !0 },
                        s.a.createElement(
                          R.a,
                          { eventKey: 1, href: "#" },
                          s.a.createElement(
                            x.a,
                            {
                              to: "/news",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "News"
                          )
                        ),
                        s.a.createElement(
                          R.a,
                          { eventKey: 2, href: "#" },
                          s.a.createElement(
                            x.a,
                            {
                              to: "/sessions",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "Sessions"
                          )
                        ),
                        s.a.createElement(
                          R.a,
                          { eventKey: 3, href: "#" },
                          s.a.createElement(
                            x.a,
                            {
                              to: "/about",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "About Us"
                          )
                        ),
                        s.a.createElement(
                          R.a,
                          { eventKey: 4, href: "#" },
                          s.a.createElement(
                            x.a,
                            {
                              to: "/team",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "Team"
                          )
                        ),
                        s.a.createElement(
                          R.a,
                          { eventKey: 6, href: "#" },
                          s.a.createElement(
                            x.a,
                            {
                              to: "/hackinfinity",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "HackInfinity"
                          )
                        ),
                        s.a.createElement(
                          R.a,
                          {
                            style: { paddingRight: "10px" },
                            className: "navbar-link-style",
                            eventKey: 5,
                            href: "https://github.com/techclubssn",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "GitHub"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        F = (a(182), a(88)),
        B = a.n(F),
        U = a(89),
        L = a.n(U),
        q = a(90),
        _ = a.n(q),
        V = a(91),
        X = a.n(V),
        G = a(92),
        K = a.n(G),
        Y = a(93),
        J = a.n(Y),
        Q = a(94),
        Z = a.n(Q),
        $ = a(95),
        ee = a.n($),
        te = a(96),
        ae = a.n(te),
        ne = a(97),
        se = a.n(ne),
        ie = [
          {
            name: "FinTech",
            icon: X.a,
            text: "Solving critical problems in finance services and processes.",
          },
          {
            name: "AgriTech",
            icon: B.a,
            text: "Providing realistic and feasible solutions to enhance agricultural productivity using technological advancements.",
          },
          {
            name: "Cyber Security",
            icon: _.a,
            text: "Apply technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks.",
          },
          {
            name: "Medical and Healthcare",
            icon: J.a,
            text: "Enhancing medical facilities and healthcare solutions using intelligent technological innovation.",
          },
          {
            name: "Women's Safety",
            icon: Z.a,
            text: "Harnessing the power of technology to develop solutions that provide women a sense of security, ranging from applications to wearables.",
          },
          {
            name: "Climate Change and Sustainability",
            icon: L.a,
            text: "Innovative solutions to combat climate change and improve sustainability.",
          },
          {
            name: "Student Innovation!   ( open idea ) ",
            icon: K.a,
            text: "Don\u2019t want to be confined to the above domains? Feel free to choose your own topic and problem statement. Impress us!",
          },
        ],
        le = function () {
          return (
            Object(n.useEffect)(function () {
              window.scrollTo(0, 0);
            }, []),
            s.a.createElement(
              "div",
              null,
              s.a.createElement(
                "div",
                { className: "hi-header" },
                s.a.createElement("div", { className: "hi-title-line" }),
                s.a.createElement(
                  "h1",
                  { className: "hi-title" },
                  "HACKINFINITY"
                ),
                s.a.createElement("div", { className: "hi-title-line" })
              ),
              s.a.createElement(
                "div",
                { className: "hi-about" },
                s.a.createElement(
                  "p",
                  { className: "hi-about-para" },
                  "A 24-hour hackathon where you can prototype a groundbreaking solution to real-life problems. Brave against the time crunch and grab this opportunity to win exciting cash prizes upto ",
                  s.a.createElement(
                    "span",
                    { style: { color: "orange" } },
                    "\u20b925,000"
                  ),
                  "!!!"
                ),
                s.a.createElement("br", null),
                s.a.createElement(
                  "p",
                  { className: "hi-about-para" },
                  "Participants are encouraged to use technologies such as AI, IoT, AR/VR and Blockchain to build products that can solve problems in the domains given below!"
                ),
                s.a.createElement(
                  "a",
                  {
                    className: "hi-link",
                    href: "https://ssninvente.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  s.a.createElement(
                    "button",
                    { className: "hi-button" },
                    "REGISTER NOW!"
                  )
                )
              ),
              s.a.createElement("h1", { className: "hi-sub-title" }, "DOMAINS"),
              s.a.createElement(
                "div",
                { className: "hi-domains-section" },
                ie.map(function (e) {
                  return s.a.createElement(
                    "div",
                    { className: "hi-domain-preview" },
                    s.a.createElement("img", {
                      className: "hi-domain-icon",
                      src: e.icon,
                      alt: e.name,
                    }),
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h1",
                        { className: "hi-domain-title" },
                        e.name
                      ),
                      s.a.createElement(
                        "p",
                        { className: "hi-domain-para" },
                        e.text
                      )
                    )
                  );
                })
              ),
              s.a.createElement(
                "h1",
                { className: "hi-sub-title" },
                "DETAILS AND SCHEDULE"
              ),
              s.a.createElement(
                "div",
                { className: "hi-details-section" },
                s.a.createElement(
                  "div",
                  { className: "hi-details-left" },
                  s.a.createElement(
                    "h1",
                    { className: "hi-date-title" },
                    "DAY 1"
                  ),
                  s.a.createElement(
                    "div",
                    { className: "hi-details-container" },
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "10.00 AM"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "11.00 AM"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "03.00 PM"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "10.00 PM"
                      )
                    ),
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        " Introduction"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        " Hackathon Starts"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        " First Review"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        "Second Review"
                      )
                    )
                  ),
                  s.a.createElement(
                    "h1",
                    { className: "hi-date-title" },
                    "DAY 2"
                  ),
                  s.a.createElement(
                    "div",
                    { className: "hi-details-container" },
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "08.00 AM"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "11.00 AM"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "12.00 PM"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-time" },
                        "03.00 PM"
                      )
                    ),
                    s.a.createElement(
                      "div",
                      null,
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        "Third Review"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        "Hackathon ends"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        "Final Presentation"
                      ),
                      s.a.createElement(
                        "h1",
                        { className: "hi-details-event" },
                        "Valedictory"
                      )
                    )
                  )
                ),
                s.a.createElement("div", { className: "hi-white-line" }),
                s.a.createElement(
                  "div",
                  { className: "hi-details-right" },
                  s.a.createElement(
                    "div",
                    { className: "hi-align-center" },
                    s.a.createElement("img", {
                      className: "hi-details-icon",
                      src: ae.a,
                      alt: "person",
                    }),
                    s.a.createElement(
                      "h1",
                      { className: "hi-details" },
                      "1-6 per team"
                    )
                  ),
                  s.a.createElement(
                    "div",
                    { className: "hi-align-center" },
                    s.a.createElement("img", {
                      className: "hi-details-icon",
                      src: se.a,
                      alt: "date",
                    }),
                    s.a.createElement(
                      "h1",
                      { className: "hi-details" },
                      "8-9th Oct 2021"
                    )
                  ),
                  s.a.createElement(
                    "div",
                    { className: "hi-align-center" },
                    s.a.createElement("img", {
                      className: "hi-details-icon",
                      src: ee.a,
                      alt: "contact",
                    }),
                    s.a.createElement(
                      "h1",
                      { className: "hi-details" },
                      "Nimisha : 9840780834"
                    ),
                    s.a.createElement(
                      "h1",
                      { className: "hi-details" },
                      "Aishwarya : 7338935634"
                    )
                  )
                )
              ),
              s.a.createElement(
                "h1",
                { className: "hi-sub-title" },
                "CASH PRIZES"
              ),
              s.a.createElement(
                "div",
                { className: "hi-prize-section" },
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement(
                    "h1",
                    { className: "hi-date-title" },
                    "Rs. 12,000"
                  ),
                  s.a.createElement("h1", { className: "hi-details" }, "Winner")
                ),
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement(
                    "h1",
                    { className: "hi-date-title" },
                    "Rs. 8,000"
                  ),
                  s.a.createElement(
                    "h1",
                    { className: "hi-details" },
                    "Runner Up"
                  )
                ),
                s.a.createElement(
                  "div",
                  null,
                  s.a.createElement(
                    "h1",
                    { className: "hi-date-title" },
                    "Rs. 5,000"
                  ),
                  s.a.createElement(
                    "h1",
                    { className: "hi-details" },
                    "2nd runner Up"
                  )
                )
              ),
              s.a.createElement(
                "h1",
                { className: "hi-sub-title" },
                "GENERAL INSTRUCTIONS"
              ),
              s.a.createElement(
                "div",
                { className: "hi-instructions-section" },
                s.a.createElement(
                  "ol",
                  null,
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "It is not necessary that all participants must be from same institute."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "All the team members should have proper internet connection."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Date and time: ",
                    s.a.createElement(
                      "span",
                      { style: { color: "orange" } },
                      "8th Oct 2021"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Teams of a minimum of 1 and a maximum of 6 people are allowed."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Participants are required to have their own components and software."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Mentorship for technical skills will be given."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Participants are supposed to build their product during the Hackathon."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Product will be judged based on Innovation, Impact, Feasibility and Marketability."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Product can be a mix of hardware and software technologies, but can be purely software or hardware based as well."
                  ),
                  s.a.createElement(
                    "li",
                    { className: "hi-details-event" },
                    "Participants are allowed to use existing libraries or components, however only the work done during the 24hrs will be considered for evaluation."
                  )
                )
              ),
              s.a.createElement("h1", { className: "hi-sub-title" }, "CONTACT"),
              s.a.createElement(
                "div",
                { className: "hi-prize-section" },
                s.a.createElement(
                  "h1",
                  { className: "hi-details" },
                  "Aishwarya : 7338935634"
                ),
                s.a.createElement(
                  "h1",
                  { className: "hi-details" },
                  "Nimisha : 9840780834"
                )
              )
            )
          );
        },
        re = p.animateScroll,
        oe = (function (e) {
          Object(m.a)(a, e);
          var t = Object(d.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "scrollToTop",
                value: function () {
                  re.scrollToTop();
                },
              },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    { className: "footer" },
                    s.a.createElement(
                      "button",
                      {
                        onClick: this.scrollToTop,
                        className: "footer-chevron",
                      },
                      s.a.createElement("i", { className: "fas fa-chevron-up" })
                    ),
                    s.a.createElement("hr", {
                      width: "80%",
                      style: { marginTop: "7px" },
                    }),
                    s.a.createElement("h3", null, "TechClubSSN"),
                    s.a.createElement(
                      "p",
                      null,
                      "Built using React. Fork the website",
                      s.a.createElement(
                        "a",
                        {
                          href: "https://github.com/techclubssn/techclubssn.github.io",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "footer-link",
                        },
                        " here"
                      ),
                      "."
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        ce = (function (e) {
          Object(m.a)(a, e);
          var t = Object(d.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return s.a.createElement(
                    v.a,
                    null,
                    s.a.createElement(E.a, {
                      exact: !0,
                      path: "/",
                      render: function (t) {
                        return s.a.createElement(P, {
                          newsData: e.props.data.newsData,
                          sessionData: e.props.data.sessionData,
                          sticky: e.props.data.sticky,
                          dest: "home",
                        });
                      },
                    }),
                    s.a.createElement(E.a, {
                      path: "/news",
                      render: function (t) {
                        return s.a.createElement(P, {
                          newsData: e.props.data.newsData,
                          sessionData: e.props.data.sessionData,
                          sticky: e.props.data.sticky,
                          dest: "news",
                        });
                      },
                    }),
                    s.a.createElement(E.a, {
                      path: "/sessions",
                      render: function (t) {
                        return s.a.createElement(P, {
                          newsData: e.props.data.newsData,
                          sessionData: e.props.data.sessionData,
                          sticky: e.props.data.sticky,
                          dest: "sessions",
                        });
                      },
                    }),
                    s.a.createElement(E.a, {
                      path: "/about",
                      render: function (t) {
                        return s.a.createElement(y, {
                          largeScreen: e.props.data.sticky,
                        });
                      },
                    }),
                    s.a.createElement(E.a, {
                      path: "/team",
                      render: function (t) {
                        return s.a.createElement(f, {
                          teamData: e.props.data.teamData,
                          alumniData: e.props.data.alumniData,
                          dest: "team",
                        });
                      },
                    }),
                    s.a.createElement(E.a, {
                      exact: !0,
                      path: "/hackinfinity",
                      component: le,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        me = (function (e) {
          Object(m.a)(a, e);
          var t = Object(d.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).state = {
                sessionData: [],
                newsData: [],
                teamData: [],
                alumniData: [],
                sticky: window.innerWidth > 768,
              }),
              (n.updateWidth = n.updateWidth.bind(Object(r.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "updateWidth",
                value: function () {
                  !1 === this.state.sticky && window.innerWidth > 768
                    ? this.setState({ sticky: !0 })
                    : !0 === this.state.sticky &&
                      window.innerWidth <= 768 &&
                      this.setState({ sticky: !1 });
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  window.addEventListener("resize", this.updateWidth);
                  h.a.parse(
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSO8UIseC06UASzyokx8WyWULhGbQRWmvQTrVvndqfqroIX5MdibaTk5qdfamzREqHU2mQW9PHEkLma/pub?output=csv",
                    {
                      download: !0,
                      header: !0,
                      complete: function (t) {
                        e.setState({ newsData: t.data });
                      },
                    }
                  ),
                    h.a.parse(
                      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQv2tIv-50mvVbCfrlYvjWCXOIVa1GCeBARemqYIii44x_eWfy5hkad_r_K5FRuYhH2IeyWP9vJHZg5/pub?output=csv",
                      {
                        download: !0,
                        header: !0,
                        complete: function (t) {
                          e.setState({ sessionData: t.data });
                        },
                      }
                    ),
                    h.a.parse(
                      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsMV16aEyjCVC3O2qo5-oGg0t-nbQq-OrM5vtlMn3HcQfxJGJthBaGFVMy7esMg7thnY69xKjPW57B/pub?gid=0&single=true&output=csv",
                      {
                        download: !0,
                        header: !0,
                        complete: function (t) {
                          e.setState({ teamData: t.data });
                        },
                      }
                    ),
                    h.a.parse(
                      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_pjXGCVgHyEOCBtapFt_sE7XMk6Rj-8qqW91zmdoifdBx8nGARMHgXsgUJqOMNFRUAaXVbzFeq5JJ/pub?output=csv",
                      {
                        download: !0,
                        header: !0,
                        complete: function (t) {
                          e.setState({ alumniData: t.data });
                        },
                      }
                    );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("resize", this.updateWidth);
                },
              },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement("div", null, s.a.createElement(z, null)),
                    s.a.createElement(ce, { data: this.state }),
                    s.a.createElement(oe, null)
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        de = a(189);
      l.a.render(
        s.a.createElement(de.a, null, s.a.createElement(me, null)),
        document.getElementById("root")
      );
    },
    88: function (e, t, a) {
      e.exports = a.p + "static/media/agritech.77e4f8fc.svg";
    },
    89: function (e, t, a) {
      e.exports = a.p + "static/media/climate.cf28908a.svg";
    },
    90: function (e, t, a) {
      e.exports = a.p + "static/media/cyber.6df5f52d.svg";
    },
    91: function (e, t, a) {
      e.exports = a.p + "static/media/fintech.09ca94f3.svg";
    },
    92: function (e, t, a) {
      e.exports = a.p + "static/media/innovation.97749b0f.svg";
    },
    93: function (e, t, a) {
      e.exports = a.p + "static/media/HealthcareIcon.cdaf4eb6.svg";
    },
    94: function (e, t, a) {
      e.exports = a.p + "static/media/women.48dc51bf.svg";
    },
    95: function (e, t, a) {
      e.exports = a.p + "static/media/phone.740cafdf.svg";
    },
    96: function (e, t, a) {
      e.exports = a.p + "static/media/person.ce8e4dd1.svg";
    },
    97: function (e, t, a) {
      e.exports = a.p + "static/media/calendar.d72db218.svg";
    },
  },
  [[100, 1, 2]],
]);
//# sourceMappingURL=main.af9bf6d7.chunk.js.map

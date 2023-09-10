(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    100: function (e, t, a) {
      e.exports = a(192);
    },
    105: function (e, t, a) {},
    116: function (e, t, a) {},
    118: function (e, t, a) {},
    120: function (e, t, a) {},
    122: function (e, t, a) {},
    138: function (e, t, a) {},
    140: function (e, t, a) {},
    189: function (e, t, a) {},
    192: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        s = a.n(n),
        i = a(18),
        l = a.n(i),
        r = (a(105), a(16)),
        c = a(6),
        o = a(7),
        m = a(10),
        d = a(8),
        u = a(11),
        h = a(30),
        p = a.n(h),
        E = a(29),
        v = a(198),
        b = a(199),
        f =
          (a(116),
          (function (e) {
            function t() {
              return (
                Object(c.a)(this, t),
                Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(u.a)(t, e),
              Object(o.a)(t, [
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
                        var c = 3 * i + r;
                        c < t &&
                          l.push(
                            s.a.createElement(
                              "div",
                              {
                                className:
                                  "col-lg-4 col-md-4 col-sm-4 col-xs-12",
                              },
                              s.a.createElement(
                                "div",
                                { key: c },
                                this.noImgHandler(e[c].name, e[c].dp),
                                this.noUrlHandler(e[c].web, e[c].name),
                                s.a.createElement(
                                  "h5",
                                  { style: { marginTop: "-5px" } },
                                  e[c].role
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
              t
            );
          })(n.Component)),
        y =
          (a(118),
          (function (e) {
            function t() {
              return (
                Object(c.a)(this, t),
                Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
              );
            }
            return (
              Object(u.a)(t, e),
              Object(o.a)(t, [
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
              t
            );
          })(n.Component)),
        g = (a(120), a(43)),
        N = (a(122), a(40)),
        k = (function (e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
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
                      c = { type: [], content: { data: [], link: [] } },
                      o = 0;
                    o < e.length;
                    o++
                  )
                    "[" !== e[o] || l || ((i = o), (a = o + 1)),
                      "]" !== e[o] ||
                        "(" !== e[o + 1] ||
                        l ||
                        (c.type.push("p"),
                        c.content.data.push(e.substr(t, i - t)),
                        c.content.link.push(""),
                        (n = o),
                        (r = o + 1),
                        (l = !0)),
                      ")" === e[o] &&
                        l &&
                        (c.type.push("a"),
                        c.content.data.push(e.substr(a, n - a)),
                        c.content.link.push(e.substr(r + 1, o - r - 1)),
                        (l = !1),
                        (t = o + 1));
                  return (
                    c.type.push("p"),
                    c.content.data.push(e.substr(t, e.length)),
                    c.content.link.push(""),
                    s.a.createElement(
                      "span",
                      null,
                      c.type.map(function (e, t) {
                        return s.a.createElement(
                          "span",
                          { key: t },
                          "p" === e
                            ? s.a.createElement("span", null, c.content.data[t])
                            : s.a.createElement(
                                "a",
                                {
                                  className: "footer-link",
                                  href: c.content.link[t],
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                },
                                s.a.createElement("b", null, c.content.data[t])
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
            t
          );
        })(n.Component),
        w = a(23),
        S = a(24),
        C = (function (e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = {
                displayPara: a.props.sticky,
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
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
                      ? s.a.createElement(w.Sticky, null, function (t) {
                          var a = t.style;
                          return s.a.createElement(
                            "div",
                            {
                              style: Object(g.a)({}, a, {
                                paddingTop: "30px",
                                paddingBottom: "30px",
                              }),
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
                            N.Collapse,
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
                        S.Timeline,
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
                              S.TimelineEvent,
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
                              s.a.createElement(k, { data: e.news })
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
                      w.StickyContainer,
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
            t
          );
        })(n.Component),
        x =
          (a(138),
          (function (e) {
            function t(e) {
              var a;
              return (
                Object(c.a)(this, t),
                ((a = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = {
                  displayPara: a.props.sticky,
                }),
                a
              );
            }
            return (
              Object(u.a)(t, e),
              Object(o.a)(t, [
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
                        ? s.a.createElement(w.Sticky, null, function (t) {
                            var a = t.style;
                            return s.a.createElement(
                              "div",
                              {
                                style: Object(g.a)({}, a, {
                                  paddingTop: "30px",
                                  paddingBottom: "47px",
                                }),
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
                              N.Collapse,
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
                          S.Timeline,
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
                                S.TimelineEvent,
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
                                s.a.createElement(k, { data: e.details })
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
                        w.StickyContainer,
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
              t
            );
          })(n.Component)),
        O = 0,
        T = E.Element,
        j = E.scroller,
        D = {
          height: "100vh",
          border: "3px",
          boxSizing: "border-box",
          overflowX: "hidden",
          overflowY: "hidden",
          margin: "0px",
        },
        A = (function (e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = {
                enableHomeScroll: !1,
              }),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "scrollToElement",
                value: function (e) {
                  var t = {};
                  (arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1]) ||
                    (t = { smooth: !0, offset: -50 }),
                    j.scrollTo(e, t);
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
                      (O < 1 ? (O += 1) : this.scrollToElement("home"));
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
                      { style: D },
                      s.a.createElement(T, { name: "home" }),
                      s.a.createElement(
                        "div",
                        { className: "logoMobile" },
                        s.a.createElement("img", {
                          src: "/imgs/logo.png",
                          alt: "logo",
                          className: "logoSize",
                        })
                      )
                    ),
                    s.a.createElement(
                      T,
                      { name: "news" },
                      s.a.createElement(C, {
                        data: this.props.newsData,
                        sticky: this.props.sticky,
                      })
                    ),
                    s.a.createElement(
                      T,
                      { name: "sess" },
                      s.a.createElement(x, {
                        data: this.props.sessionData,
                        sticky: this.props.sticky,
                      })
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        P = (a(140), a(195)),
        H = a(196),
        I = a(200),
        M = a(201),
        W = (function (e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = {
                navExpanded: !1,
              }),
              (a.setNavExpanded = a.setNavExpanded.bind(
                Object(r.a)(Object(r.a)(a))
              )),
              (a.closeNav = a.closeNav.bind(Object(r.a)(Object(r.a)(a)))),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
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
                    H.a,
                    {
                      inverse: !0,
                      fixedTop: !0,
                      onToggle: this.setNavExpanded,
                      expanded: this.state.navExpanded,
                    },
                    s.a.createElement(
                      H.a.Header,
                      null,
                      s.a.createElement(
                        H.a.Brand,
                        null,
                        s.a.createElement(
                          P.a,
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
                      s.a.createElement(H.a.Toggle, {
                        style: { marginRight: "27px" },
                      })
                    ),
                    s.a.createElement(
                      H.a.Collapse,
                      null,
                      s.a.createElement(
                        I.a,
                        { pullRight: !0 },
                        s.a.createElement(
                          M.a,
                          { eventKey: 1, href: "#" },
                          s.a.createElement(
                            P.a,
                            {
                              to: "/news",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "News"
                          )
                        ),
                        s.a.createElement(
                          M.a,
                          { eventKey: 2, href: "#" },
                          s.a.createElement(
                            P.a,
                            {
                              to: "/sessions",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "Sessions"
                          )
                        ),
                        s.a.createElement(
                          M.a,
                          { eventKey: 3, href: "#" },
                          s.a.createElement(
                            P.a,
                            {
                              to: "/about",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "About Us"
                          )
                        ),
                        s.a.createElement(
                          M.a,
                          { eventKey: 4, href: "#" },
                          s.a.createElement(
                            P.a,
                            {
                              to: "/team",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "Team"
                          )
                        ),
                        s.a.createElement(
                          M.a,
                          { eventKey: 6, href: "#" },
                          s.a.createElement(
                            P.a,
                            {
                              to: "/hackinfinity",
                              onClick: this.closeNav,
                              className: "navbar-link-style",
                            },
                            "HackInfinity"
                          )
                        ),
                        s.a.createElement(
                          M.a,
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
            t
          );
        })(n.Component),
        R = (a(189), a(88)),
        z = a.n(R),
        B = a(89),
        F = a.n(B),
        U = a(90),
        q = a.n(U),
        L = a(91),
        _ = a.n(L),
        X = a(92),
        V = a.n(X),
        G = a(93),
        K = a.n(G),
        J = a(94),
        Y = a.n(J),
        Q = a(95),
        Z = a.n(Q),
        $ = a(96),
        ee = a.n($),
        te = a(97),
        ae = a.n(te),
        ne = [
          {
            name: "FinTech",
            icon: _.a,
            text: "Solving critical problems in finance services and processes.",
          },
          {
            name: "AgriTech",
            icon: z.a,
            text: "Providing realistic and feasible solutions to enhance agricultural productivity using technological advancements.",
          },
          {
            name: "Cyber Security",
            icon: q.a,
            text: "Apply technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks.",
          },
          {
            name: "Medical and Healthcare",
            icon: K.a,
            text: "Enhancing medical facilities and healthcare solutions using intelligent technological innovation.",
          },
          {
            name: "Women's Safety",
            icon: Y.a,
            text: "Technological solutions that improve women's security.",
          },
          {
            name: "Climate Change and Sustainability",
            icon: F.a,
            text: "Innovative solutions to combat climate change and come up with sustainable ideas.",
          },
          {
            name: "Student Innovation!   ( open idea ) ",
            icon: V.a,
            text: "Creative ideas that solve real world problems.",
          },
        ],
        se = function () {
          return s.a.createElement(
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
              ne.map(function (e) {
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
                      "10.00 PM"
                    ),
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
                      "Second Review"
                    ),
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
                    src: ee.a,
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
                    src: ae.a,
                    alt: "date",
                  }),
                  s.a.createElement(
                    "h1",
                    { className: "hi-details" },
                    "8th Oct 2021"
                  )
                ),
                s.a.createElement(
                  "div",
                  { className: "hi-align-center" },
                  s.a.createElement("img", {
                    className: "hi-details-icon",
                    src: Z.a,
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
                  "Participants are requested to register their team and send in their abstract before the deadline using the form (will be provided soon)."
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
          );
        },
        ie = E.animateScroll,
        le = (function (e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "scrollToTop",
                value: function () {
                  ie.scrollToTop();
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
            t
          );
        })(n.Component),
        re = (function (e) {
          function t() {
            return (
              Object(c.a)(this, t),
              Object(m.a)(this, Object(d.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return s.a.createElement(
                    v.a,
                    null,
                    s.a.createElement(b.a, {
                      exact: !0,
                      path: "/",
                      render: function (t) {
                        return s.a.createElement(A, {
                          newsData: e.props.data.newsData,
                          sessionData: e.props.data.sessionData,
                          sticky: e.props.data.sticky,
                          dest: "home",
                        });
                      },
                    }),
                    s.a.createElement(b.a, {
                      path: "/news",
                      render: function (t) {
                        return s.a.createElement(A, {
                          newsData: e.props.data.newsData,
                          sessionData: e.props.data.sessionData,
                          sticky: e.props.data.sticky,
                          dest: "news",
                        });
                      },
                    }),
                    s.a.createElement(b.a, {
                      path: "/sessions",
                      render: function (t) {
                        return s.a.createElement(A, {
                          newsData: e.props.data.newsData,
                          sessionData: e.props.data.sessionData,
                          sticky: e.props.data.sticky,
                          dest: "sessions",
                        });
                      },
                    }),
                    s.a.createElement(b.a, {
                      path: "/about",
                      render: function (t) {
                        return s.a.createElement(y, {
                          largeScreen: e.props.data.sticky,
                        });
                      },
                    }),
                    s.a.createElement(b.a, {
                      path: "/team",
                      render: function (t) {
                        return s.a.createElement(f, {
                          teamData: e.props.data.teamData,
                          alumniData: e.props.data.alumniData,
                          dest: "team",
                        });
                      },
                    }),
                    s.a.createElement(b.a, {
                      exact: !0,
                      path: "/hackinfinity",
                      component: se,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        ce = (function (e) {
          function t(e) {
            var a;
            return (
              Object(c.a)(this, t),
              ((a = Object(m.a)(this, Object(d.a)(t).call(this, e))).state = {
                sessionData: [],
                newsData: [],
                teamData: [],
                alumniData: [],
                sticky: window.innerWidth > 768,
              }),
              (a.updateWidth = a.updateWidth.bind(Object(r.a)(Object(r.a)(a)))),
              a
            );
          }
          return (
            Object(u.a)(t, e),
            Object(o.a)(t, [
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
                  p.a.parse(
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSO8UIseC06UASzyokx8WyWULhGbQRWmvQTrVvndqfqroIX5MdibaTk5qdfamzREqHU2mQW9PHEkLma/pub?output=csv",
                    {
                      download: !0,
                      header: !0,
                      complete: function (t) {
                        e.setState({ newsData: t.data });
                      },
                    }
                  ),
                    p.a.parse(
                      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQv2tIv-50mvVbCfrlYvjWCXOIVa1GCeBARemqYIii44x_eWfy5hkad_r_K5FRuYhH2IeyWP9vJHZg5/pub?output=csv",
                      {
                        download: !0,
                        header: !0,
                        complete: function (t) {
                          e.setState({ sessionData: t.data });
                        },
                      }
                    ),
                    p.a.parse(
                      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2jW1W81BhQ8cVkQPgllfGN1_XiHagkHnuLALeuZQyR_tHHv2PbeuCXIWivuitOn89nuzJ0YLz2hzv/pub?gid=0&single=true&output=csv",
                      {
                        download: !0,
                        header: !0,
                        complete: function (t) {
                          e.setState({ teamData: t.data });
                        },
                      }
                    ),
                    p.a.parse(
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
                    s.a.createElement("div", null, s.a.createElement(W, null)),
                    s.a.createElement(re, { data: this.state }),
                    s.a.createElement(le, null)
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        oe = a(197);
      l.a.render(
        s.a.createElement(oe.a, null, s.a.createElement(ce, null)),
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
  [[100, 2, 1]],
]);
//# sourceMappingURL=main.f2a0ca17.chunk.js.map

// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.bs.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as RimbleUi from "rimble-ui";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";

var cardStyle = Curry._1(Css.style, {
      hd: Css.height({
            NAME: "percent",
            VAL: 100
          }),
      tl: {
        hd: Css.backgroundColor({
              NAME: "hex",
              VAL: "73C8D7"
            }),
        tl: /* [] */0
      }
    });

var titleStyle = Curry._1(Css.style, {
      hd: Css.color({
            NAME: "hex",
            VAL: "cccccc"
          }),
      tl: /* [] */0
    });

var profileImageStyle = Curry._1(Css.style, {
      hd: Css.borderWidth(Css.px(6)),
      tl: {
        hd: Css.borderStyle("solid"),
        tl: {
          hd: Css.borderColor({
                NAME: "hex",
                VAL: "73C8D7"
              }),
          tl: {
            hd: Css.width({
                  NAME: "percent",
                  VAL: 100
                }),
            tl: /* [] */0
          }
        }
      }
    });

var plantStyle = Curry._1(Css.style, {
      hd: Css.width({
            NAME: "percent",
            VAL: 100
          }),
      tl: {
        hd: Css.transform(Css.translateY(Css.px(30))),
        tl: /* [] */0
      }
    });

var iconStyle = Curry._1(Css.style, {
      hd: Css.height(Css.px(20)),
      tl: {
        hd: Css.paddingRight(Css.px(3)),
        tl: {
          hd: Css.margin("auto"),
          tl: /* [] */0
        }
      }
    });

function Team(Props) {
  var teamMembers = [
    {
      name: "JonJon Clark",
      img: "https://dd2wadt5nc0o7.cloudfront.net/team/jonjon.jpg",
      title: "Co-founder",
      linkedIn: "https://www.linkedin.com/in/jonathan-clark-637344143/",
      twitterHandle: "jonjonclark",
      githubHandle: "moose-code",
      instagramHandle: undefined
    },
    {
      name: "Jason Smythe",
      img: "https://dd2wadt5nc0o7.cloudfront.net/team/jason.jpg",
      title: "Co-founder",
      linkedIn: "https://www.linkedin.com/in/jason-smythe-0501ab88/",
      twitterHandle: "jasoonsmythe",
      githubHandle: "jasoons",
      instagramHandle: undefined
    },
    {
      name: "Denham Preen",
      img: "https://dd2wadt5nc0o7.cloudfront.net/team/denham.jpg",
      title: "Co-founder",
      linkedIn: "https://www.linkedin.com/in/denhampreen/",
      twitterHandle: "denhampreen",
      githubHandle: "DenhamPreen",
      instagramHandle: undefined
    },
    {
      name: "Rio Button",
      img: "https://dd2wadt5nc0o7.cloudfront.net/team/rio.jpg",
      title: "Lead conservationist",
      linkedIn: "https://www.linkedin.com/in/riob/",
      twitterHandle: "biologistbutton",
      githubHandle: undefined,
      instagramHandle: "biologistbutton"
    },
    {
      name: "Luke Gillott",
      img: "https://dd2wadt5nc0o7.cloudfront.net/team/luke.jpg",
      title: "Executive board",
      linkedIn: "https://www.linkedin.com/in/luke-gillott/",
      twitterHandle: undefined,
      githubHandle: undefined,
      instagramHandle: undefined
    }
  ];
  return React.createElement("div", undefined, React.createElement(RimbleUi.Flex, {
                  children: React.createElement("h1", undefined, "Wildcards Team"),
                  flexWrap: "wrap",
                  alignItems: "stretch",
                  justifyContent: "space-around",
                  px: 50,
                  pb: 20,
                  pt: 20
                }), React.createElement(RimbleUi.Flex, {
                  children: Belt_Array.mapWithIndex(teamMembers, (function (i, member) {
                          var handle = member.instagramHandle;
                          var link = member.linkedIn;
                          var handle$1 = member.twitterHandle;
                          var handle$2 = member.githubHandle;
                          return React.createElement(RimbleUi.Box, {
                                      mb: 20,
                                      mt: 20,
                                      children: React.createElement(RimbleUi.Card, {
                                            className: cardStyle,
                                            children: null
                                          }, React.createElement("img", {
                                                className: profileImageStyle,
                                                alt: member.name,
                                                src: member.img
                                              }), React.createElement("p", undefined, member.name, React.createElement("br", undefined), React.createElement("span", {
                                                    className: titleStyle
                                                  }, React.createElement("small", undefined, member.title))), handle !== undefined ? React.createElement("a", {
                                                  href: "https://www.instagram.com/" + handle,
                                                  rel: "noopener noreferrer",
                                                  target: "_blank"
                                                }, React.createElement("img", {
                                                      className: iconStyle,
                                                      alt: handle,
                                                      src: "/img/socials/instagram.svg"
                                                    })) : null, link !== undefined ? React.createElement("a", {
                                                  href: link,
                                                  rel: "noopener noreferrer",
                                                  target: "_blank"
                                                }, React.createElement("img", {
                                                      className: iconStyle,
                                                      alt: member.name,
                                                      src: "/img/socials/linkedin.svg"
                                                    })) : null, handle$1 !== undefined ? React.createElement("a", {
                                                  href: "https://twitter.com/" + handle$1,
                                                  rel: "noopener noreferrer",
                                                  target: "_blank"
                                                }, React.createElement("img", {
                                                      className: iconStyle,
                                                      alt: handle$1,
                                                      src: "/img/socials/twitter.svg"
                                                    })) : null, handle$2 !== undefined ? React.createElement("a", {
                                                  href: "https://github.com/" + handle$2,
                                                  rel: "noopener noreferrer",
                                                  target: "_blank"
                                                }, React.createElement("img", {
                                                      className: iconStyle,
                                                      alt: handle$2,
                                                      src: "/img/socials/github.svg"
                                                    })) : null),
                                      width: [
                                        0.45,
                                        0.45,
                                        0.18
                                      ],
                                      key: String(i)
                                    });
                        })),
                  flexWrap: "wrap",
                  alignItems: "stretch",
                  justifyContent: "space-around",
                  px: 50,
                  pb: 50
                }), React.createElement(RimbleUi.Flex, {
                  children: React.createElement("img", {
                        className: plantStyle,
                        alt: "wildcards plants",
                        src: "/img/wildcardsimages/plants.png"
                      }),
                  flexWrap: "wrap",
                  alignItems: "stretch",
                  justifyContent: "space-around",
                  px: 50,
                  pb: 2,
                  pt: 2
                }));
}

var make = Team;

export {
  cardStyle ,
  titleStyle ,
  profileImageStyle ,
  plantStyle ,
  iconStyle ,
  make ,
  
}
/* cardStyle Not a pure module */

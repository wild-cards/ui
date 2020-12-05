// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.bs.js";
import * as Layout$WildCards from "./components/Layout.bs.js";
import * as Globals$WildCards from "./harberger-lib/Globals.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.bs.js";
import * as DiscordChat$WildCards from "./components/DiscordChat.bs.js";
import * as ReactTranslate$WildCards from "./helpers/providers/ReactTranslate.bs.js";
import * as UsdPriceProvider$WildCards from "./harberger-lib/components/UsdPriceProvider.bs.js";
import * as WildcardsProvider$WildCards from "./harberger-lib/components/WildcardsProvider.bs.js";

((require("react-tabs/style/react-tabs.css")));

function Index$Router(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  if (match && !match.tl) {
    return React.createElement("p", undefined, "Unknown page");
  }
  return React.createElement(ReactTranslate$WildCards.make, {
              children: React.createElement(Layout$WildCards.make, {})
            });
}

var Router = {
  make: Index$Router
};

ReactDOMRe.renderToElementWithId(React.createElement(WildcardsProvider$WildCards.make, {
          getGraphEndpoints: (function (networkId, param) {
              if (networkId !== 4) {
                if (networkId !== 5) {
                  return {
                          mainnet: Globals$WildCards.$pipe$pipe$pipe$pipe(process.env.REACT_APP_MAINNET_BE, "https://api.wildcards.world/v1/graphq"),
                          matic: Globals$WildCards.$pipe$pipe$pipe$pipe(process.env.REACT_APP_MATIC_BE, "https://matic.graph.wildcards.world/subgraphs/name/wildcards-world/wildcards-matic"),
                          ws: "wss://api.thegraph.com/subgraphs/name/wildcards-world/wildcards"
                        };
                } else {
                  return {
                          mainnet: Globals$WildCards.$pipe$pipe$pipe$pipe(process.env.REACT_APP_GOERLI_BE, "https://goerli.api.wildcards.world/v1/graphq"),
                          matic: Globals$WildCards.$pipe$pipe$pipe$pipe(process.env.REACT_APP_MATIC_TESTNET, "https://mumbai.graph.wildcards.world/subgraphs/name/wildcards-world/wildcards-matic"),
                          ws: "wss://api.thegraph.com/subgraphs/name/wildcards-world/wildcards-goerli"
                        };
                }
              } else {
                return {
                        mainnet: Globals$WildCards.$pipe$pipe$pipe$pipe(process.env.REACT_APP_RINKEBY_BE, "https://rinkeby.api.wildcards.world/v1/graphq"),
                        matic: Globals$WildCards.$pipe$pipe$pipe$pipe(process.env.REACT_APP_MATIC_TESTNET_ALT, "https://api.thegraph.com/subgraphs/name/wildcards-world/wildcards-testnet"),
                        ws: "wss://api.thegraph.com/subgraphs/name/wildcards-world/wildcards-goerli"
                      };
              }
            }),
          children: null
        }, React.createElement(UsdPriceProvider$WildCards.make, {
              children: React.createElement(Index$Router, {})
            }), React.createElement(DiscordChat$WildCards.make, {})), "root");

export {
  Router ,
  
}
/*  Not a pure module */
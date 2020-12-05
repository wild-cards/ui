// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as RimbleUi from "rimble-ui";
import * as Web3Utils from "web3-utils";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as InputHelp$WildCards from "../InputHelp.bs.js";
import * as TxTemplate$WildCards from "../../components/components/TxTemplate.bs.js";
import * as ContractActions$WildCards from "../eth/ContractActions.bs.js";

function getToDisplay(label, value) {
  return label + (": " + Belt_Option.mapWithDefault(value, "loading", (function (a) {
                  return a;
                })));
}

function UpdatePrice(Props) {
  var tokenId = Props.tokenId;
  var chain = Props.chain;
  var match = React.useState(function () {
        return "";
      });
  var setNewBuyPrice = match[1];
  var newBuyPrice = match[0];
  var match$1 = ContractActions$WildCards.useChangePrice(tokenId);
  var updatePriceFunc = match$1[0];
  var onSubmitBuy = function ($$event) {
    $$event.preventDefault();
    return Curry._1(updatePriceFunc, Web3Utils.toWei(newBuyPrice, "ether"));
  };
  return React.createElement(TxTemplate$WildCards.make, {
              children: React.createElement(RimbleUi.Box, {
                    p: 4,
                    mb: 3,
                    children: null
                  }, React.createElement(RimbleUi.Heading, {
                        children: "Update Price"
                      }), React.createElement(RimbleUi.Input, {
                        type: "number",
                        placeholder: "New Sale Price",
                        onChange: (function ($$event) {
                            var value = Belt_Option.getWithDefault($$event.target.value, "");
                            InputHelp$WildCards.onlyUpdateValueIfPositiveFloat(newBuyPrice, setNewBuyPrice, value);
                            
                          }),
                        value: newBuyPrice
                      }), React.createElement("br", undefined), React.createElement(RimbleUi.Button, {
                        children: "Update",
                        onClick: onSubmitBuy
                      })),
              txState: match$1[1],
              closeButtonText: "Back to animal view",
              chain: chain
            });
}

var make = UpdatePrice;

export {
  getToDisplay ,
  make ,
  
}
/* react Not a pure module */
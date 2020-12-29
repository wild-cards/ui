// Generated by ReScript, PLEASE EDIT WITH CARE

import Web3 from "web3";
import * as Curry from "bs-platform/lib/es6/curry.js";
import BnJs from "bn.js";
import * as React from "react";
import * as Ethers from "ethers";
import * as $$Promise from "reason-promise/src/js/promise.bs.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Web3$WildCards from "../Web3.bs.js";
import * as Async$WildCards from "../Async.bs.js";
import * as Core from "@web3-react/core";
import * as Globals$WildCards from "../Globals.bs.js";
import * as QlHooks$WildCards from "../QlHooks.bs.js";
import * as TokenId$WildCards from "../TokenId.bs.js";
import * as CONSTANTS$WildCards from "../../CONSTANTS.bs.js";
import * as DaiPermit$WildCards from "./DaiPermit.bs.js";
import * as Web3Utils$WildCards from "../Web3Utils.bs.js";
import * as ContractUtil$WildCards from "./ContractUtil.bs.js";
import * as RootProvider$WildCards from "../RootProvider.bs.js";
import * as LoyaltyTokenJson from "./abi/loyaltyToken.json";

var loyaltyTokenAbi = LoyaltyTokenJson.loyaltyToken;

function getExchangeContract(stewardAddress, stewardAbi, library, account) {
  return new Ethers.Contract(stewardAddress, stewardAbi, ContractUtil$WildCards.getProviderOrSigner(library, account));
}

function getLoyaltyTokenContract(stewardAddress, library, account) {
  return new Ethers.Contract(stewardAddress, loyaltyTokenAbi, ContractUtil$WildCards.getProviderOrSigner(library, account));
}

var stewardAddressMainnet = "0x6D47CF86F6A490c6410fC082Fd1Ad29CF61492d0";

var stewardAddressGoerli = "0x0C00CFE8EbB34fE7C31d4915a43Cde211e9F0F3B";

var stewardAddressRinkeby = "0x229Cb219F056A9097b2744594Bc37597380854E8";

var loyaltyTokenAddressMainnet = "0x773c75c2277eD3e402BDEfd28Ec3b51A3AfbD8a4";

var loyaltyTokenAddressGoerli = "0xd7d8c42ab5b83aa3d4114e5297989dc27bdfb715";

function getDaiContractAddress(chain, chainId) {
  if (chain >= 2) {
    return "NEVER";
  } else if (chainId !== 5) {
    if (chainId !== 137) {
      if (chainId !== 80001) {
        return "0xba97BeC8d359D73c81D094421803D968A9FBf676";
      } else {
        return "0xeb37A6dF956F1997085498aDd98b25a2f633d83F";
      }
    } else {
      return "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
    }
  } else {
    return "0xba97BeC8d359D73c81D094421803D968A9FBf676";
  }
}

function getStewardAddress(chain, chainId) {
  if (chain >= 2) {
    return "TODO";
  } else if (chainId !== 5) {
    if (chainId !== 137) {
      if (chainId !== 80001) {
        return "0xF26F8B2c178a0DeBB176c6b18e3F6d243fEEf828";
      } else {
        return "0xE44056eff470b1e505c3776601685c97A6966887";
      }
    } else {
      return "0x69895ba53B4CB7afaea2Ab519409F3d3C613a562";
    }
  } else {
    return "0xF26F8B2c178a0DeBB176c6b18e3F6d243fEEf828";
  }
}

function getMaticNetworkName(chainId) {
  if (chainId !== 5) {
    if (chainId !== 137) {
      if (chainId !== 80001) {
        return "goerli";
      } else {
        return "mumbai";
      }
    } else {
      return "matic";
    }
  } else {
    return "goerli";
  }
}

function getChildChainId(parentChainId) {
  switch (parentChainId) {
    case 1 :
        return 137;
    case 2 :
    case 3 :
    case 4 :
        return 5;
    case 5 :
        return 80001;
    default:
      return 5;
  }
}

function useStewardAbi(param) {
  var abi = RootProvider$WildCards.useStewardAbi(undefined);
  if (abi !== undefined) {
    return Caml_option.valFromOption(abi);
  } else {
    return (require("./abi/steward.json").stewardAbi);
  }
}

function defaultStewardAddressFromChainId(param) {
  switch (param) {
    case 1 :
        return stewardAddressMainnet;
    case 2 :
    case 3 :
        return ;
    case 4 :
        return stewardAddressRinkeby;
    case 5 :
        return stewardAddressGoerli;
    default:
      return ;
  }
}

function useStewardAddress(param) {
  var externallySetAddress = RootProvider$WildCards.useStewardContractAddress(undefined);
  return function (chainId) {
    return Belt_Option.mapWithDefault(externallySetAddress, defaultStewardAddressFromChainId(chainId), (function (a) {
                  return a;
                }));
  };
}

function loyaltyTokenAddressFromChainId(param) {
  if (param !== 1) {
    if (param !== 5) {
      return ;
    } else {
      return loyaltyTokenAddressGoerli;
    }
  } else {
    return loyaltyTokenAddressMainnet;
  }
}

function useStewardContract(param) {
  var context = Core.useWeb3React();
  var stewardContractAddress = useStewardAddress(undefined);
  var stewardAbi = useStewardAbi(undefined);
  return React.useMemo((function () {
                var match = context.library;
                var match$1 = context.chainId;
                if (match !== undefined && match$1 !== undefined) {
                  return Globals$WildCards.oMap(Curry._1(stewardContractAddress, match$1), (function (__x) {
                                return getExchangeContract(__x, stewardAbi, match, context.account);
                              }));
                }
                
              }), [
              context.library,
              context.account,
              context.chainId
            ]);
}

function useLoyaltyTokenContract(param) {
  var context = Core.useWeb3React();
  return React.useMemo((function () {
                var match = context.library;
                var match$1 = context.chainId;
                if (match !== undefined && match$1 !== undefined) {
                  return Globals$WildCards.oMap(loyaltyTokenAddressFromChainId(match$1), (function (__x) {
                                return getLoyaltyTokenContract(__x, match, context.account);
                              }));
                }
                
              }), [
              context.library,
              context.account,
              context.chainId
            ]);
}

function execDaiPermitMetaTx(daiNonce, networkName, stewardNonce, setTxState, sendMetaTx, userAddress, spender, lib, generateFunctionSignature, chainId, verifyingContract) {
  var __x = DaiPermit$WildCards.createPermitSig(lib.provider, verifyingContract, daiNonce, chainId, userAddress, spender);
  var __x$1 = __x.then(function (rsvSig) {
        Curry._1(setTxState, (function (param) {
                return /* SignMetaTx */1;
              }));
        var web3 = new Web3(lib.provider);
        var steward = Curry._2(Web3$WildCards.Contract.MaticSteward.getStewardContract, web3, spender);
        var functionSignature = Curry._4(generateFunctionSignature, steward, rsvSig.v, rsvSig.r, rsvSig.s);
        var messageToSign = ContractUtil$WildCards.constructMetaTransactionMessage(stewardNonce, chainId.toString(), functionSignature, spender);
        var __x = web3.eth.personal.sign(messageToSign, userAddress);
        return __x.then(function (signature) {
                    return Promise.resolve([
                                functionSignature,
                                signature
                              ]);
                  });
      });
  var __x$2 = __x$1.then(function (param) {
        var match = ContractUtil$WildCards.getEthSig(param[1]);
        return Curry._6(sendMetaTx, networkName, match.r, match.s, match.v, param[0], userAddress);
      });
  var __x$3 = __x$2.then(function (result) {
        console.log(result);
        return Promise.resolve(undefined);
      });
  __x$3.catch(function (err) {
        console.log("this error was caught", err);
        return Promise.resolve("");
      });
  
}

function useBuy(chain, animal, library, account, parentChainId) {
  var animalId = TokenId$WildCards.toString(animal);
  var optSteward = useStewardContract(undefined);
  var match = React.useState(function () {
        return /* UnInitialised */0;
      });
  var setTxState = match[1];
  var txState = match[0];
  var sendMetaTx = QlHooks$WildCards.useMetaTx(undefined);
  var chainIdInt = getChildChainId(parentChainId);
  var chainId = new BnJs(chainIdInt);
  var verifyingContract = getDaiContractAddress(chain, chainIdInt);
  var spender = getStewardAddress(chain, chainIdInt);
  var networkName = getMaticNetworkName(chainIdInt);
  var arg = Belt_Option.getWithDefault(account, CONSTANTS$WildCards.nullEthAddress);
  var maticState = Curry._1((function (param) {
            return function (param$1) {
              return QlHooks$WildCards.useMaticState(param, arg, param$1);
            };
          })(false), networkName);
  if (chain >= 2) {
    return [
            (function (newPrice, oldPrice, wildcardsPercentage, value) {
                var newPriceEncoded = Ethers.utils.parseUnits(newPrice, 18);
                var value$1 = Ethers.utils.parseUnits(value, 0);
                var oldPriceParsed = Ethers.utils.parseUnits(oldPrice, 0);
                Curry._1(setTxState, (function (param) {
                        return /* Created */2;
                      }));
                if (optSteward === undefined) {
                  return ;
                }
                var buyPromise = $$Promise.Js.toResult(optSteward.buy(animalId, newPriceEncoded, oldPriceParsed, wildcardsPercentage, {
                          gasLimit: "500302",
                          value: value$1
                        }));
                $$Promise.getOk(buyPromise, (function (tx) {
                        Curry._1(setTxState, (function (param) {
                                return {
                                        TAG: /* SignedAndSubmitted */1,
                                        _0: tx.hash
                                      };
                              }));
                        var txMinedPromise = $$Promise.Js.toResult(tx.wait());
                        $$Promise.getOk(txMinedPromise, (function (txOutcome) {
                                console.log(txOutcome);
                                return Curry._1(setTxState, (function (param) {
                                              return {
                                                      TAG: /* Complete */4,
                                                      _0: txOutcome
                                                    };
                                            }));
                              }));
                        $$Promise.getError(txMinedPromise, (function (error) {
                                Curry._1(setTxState, (function (param) {
                                        return /* Failed */4;
                                      }));
                                console.log(error);
                                
                              }));
                        
                      }));
                $$Promise.getError(buyPromise, (function (error) {
                        return Curry._1(setTxState, (function (param) {
                                      return {
                                              TAG: /* Declined */2,
                                              _0: error.message
                                            };
                                    }));
                      }));
                
              }),
            txState
          ];
  } else {
    return [
            (function (newPrice, oldPrice, wildcardsPercentage, value) {
                if (library === undefined) {
                  return ;
                }
                if (account === undefined) {
                  return ;
                }
                if (maticState === undefined) {
                  return ;
                }
                var maticState$1 = Caml_option.valFromOption(maticState);
                var daiNonce = maticState$1.daiNonce;
                var stewardNonce = maticState$1.stewardNonce;
                Curry._1(setTxState, (function (param) {
                        return {
                                TAG: /* DaiPermit */0,
                                _0: new BnJs(value)
                              };
                      }));
                return execDaiPermitMetaTx(daiNonce, networkName, stewardNonce, setTxState, sendMetaTx, account, spender, library, (function (steward, v, r, s) {
                              return Curry._1(steward.methods.buyWithPermit(new BnJs(daiNonce), new BnJs("0"), true, v, r, s, animalId, Web3Utils$WildCards.toWeiFromEth(newPrice), oldPrice, wildcardsPercentage, value).encodeABI, undefined);
                            }), chainId, verifyingContract);
              }),
            txState
          ];
  }
}

function useBuyAuction(chain, animal, library, account, parentChainId) {
  var match = React.useState(function () {
        return /* UnInitialised */0;
      });
  var setTxState = match[1];
  var txState = match[0];
  var animalId = TokenId$WildCards.toString(animal);
  var optSteward = useStewardContract(undefined);
  var sendMetaTx = QlHooks$WildCards.useMetaTx(undefined);
  var chainIdInt = getChildChainId(parentChainId);
  var chainId = new BnJs(chainIdInt);
  var verifyingContract = getDaiContractAddress(chain, chainIdInt);
  var spender = getStewardAddress(chain, chainIdInt);
  var networkName = getMaticNetworkName(chainIdInt);
  var arg = Belt_Option.getWithDefault(account, CONSTANTS$WildCards.nullEthAddress);
  var maticState = Curry._1((function (param) {
            return function (param$1) {
              return QlHooks$WildCards.useMaticState(param, arg, param$1);
            };
          })(false), networkName);
  if (chain >= 2) {
    return [
            (function (newPrice, wildcardsPercentage, value) {
                var newPriceEncoded = Ethers.utils.parseUnits(newPrice, 18);
                var value$1 = Ethers.utils.parseUnits(value, 0);
                Curry._1(setTxState, (function (param) {
                        return /* Created */2;
                      }));
                if (optSteward === undefined) {
                  return ;
                }
                var buyPromise = $$Promise.Js.toResult(optSteward.buyAuction(animalId, newPriceEncoded, wildcardsPercentage, {
                          gasLimit: "500302",
                          value: value$1
                        }));
                $$Promise.getOk(buyPromise, (function (tx) {
                        Curry._1(setTxState, (function (param) {
                                return {
                                        TAG: /* SignedAndSubmitted */1,
                                        _0: tx.hash
                                      };
                              }));
                        var txMinedPromise = $$Promise.Js.toResult(tx.wait());
                        $$Promise.getOk(txMinedPromise, (function (txOutcome) {
                                console.log(txOutcome);
                                return Curry._1(setTxState, (function (param) {
                                              return {
                                                      TAG: /* Complete */4,
                                                      _0: txOutcome
                                                    };
                                            }));
                              }));
                        $$Promise.getError(txMinedPromise, (function (error) {
                                Curry._1(setTxState, (function (param) {
                                        return /* Failed */4;
                                      }));
                                console.log(error);
                                
                              }));
                        
                      }));
                $$Promise.getError(buyPromise, (function (error) {
                        return Curry._1(setTxState, (function (param) {
                                      return {
                                              TAG: /* Declined */2,
                                              _0: error.message
                                            };
                                    }));
                      }));
                
              }),
            txState
          ];
  } else {
    return [
            (function (newPrice, wildcardsPercentage, value) {
                if (library !== undefined && account !== undefined && maticState !== undefined) {
                  var maticState$1 = Caml_option.valFromOption(maticState);
                  var daiNonce = maticState$1.daiNonce;
                  var stewardNonce = maticState$1.stewardNonce;
                  Curry._1(setTxState, (function (param) {
                          return {
                                  TAG: /* DaiPermit */0,
                                  _0: new BnJs(value)
                                };
                        }));
                  return execDaiPermitMetaTx(daiNonce, networkName, stewardNonce, setTxState, sendMetaTx, account, spender, library, (function (steward, v, r, s) {
                                return Curry._1(steward.methods.buyAuctionWithPermit(new BnJs(daiNonce), new BnJs("0"), true, v, r, s, animalId, Web3Utils$WildCards.toWeiFromEth(newPrice), wildcardsPercentage, value).encodeABI, undefined);
                              }), chainId, verifyingContract);
                }
                console.log("something important is null");
                console.log(library, account, maticState);
                
              }),
            txState
          ];
  }
}

function useRedeemLoyaltyTokens(patron) {
  var match = React.useState(function () {
        return /* UnInitialised */0;
      });
  var setTxState = match[1];
  var optSteward = useStewardContract(undefined);
  var buyFunction = function (param) {
    var value = Ethers.utils.parseUnits("0", 0);
    Curry._1(setTxState, (function (param) {
            return /* Created */2;
          }));
    if (optSteward === undefined) {
      return ;
    }
    var claimLoyaltyTokenPromise = $$Promise.Js.toResult(optSteward._collectPatronagePatron(patron, {
              gasLimit: "500302",
              value: value
            }));
    $$Promise.getOk(claimLoyaltyTokenPromise, (function (tx) {
            Curry._1(setTxState, (function (param) {
                    return {
                            TAG: /* SignedAndSubmitted */1,
                            _0: tx.hash
                          };
                  }));
            var txMinedPromise = $$Promise.Js.toResult(tx.wait());
            $$Promise.getOk(txMinedPromise, (function (txOutcome) {
                    console.log(txOutcome);
                    return Curry._1(setTxState, (function (param) {
                                  return {
                                          TAG: /* Complete */4,
                                          _0: txOutcome
                                        };
                                }));
                  }));
            $$Promise.getError(txMinedPromise, (function (error) {
                    Curry._1(setTxState, (function (param) {
                            return /* Failed */4;
                          }));
                    console.log(error);
                    
                  }));
            
          }));
    $$Promise.getError(claimLoyaltyTokenPromise, (function (error) {
            return Curry._1(setTxState, (function (param) {
                          return {
                                  TAG: /* Declined */2,
                                  _0: error.message
                                };
                        }));
          }));
    
  };
  return [
          buyFunction,
          match[0]
        ];
}

function useUpdateDeposit(chain, library, account, parentChainId) {
  var match = React.useState(function () {
        return /* UnInitialised */0;
      });
  var setTxState = match[1];
  var txState = match[0];
  var optSteward = useStewardContract(undefined);
  var sendMetaTx = QlHooks$WildCards.useMetaTx(undefined);
  var chainIdInt = getChildChainId(parentChainId);
  var chainId = new BnJs(chainIdInt);
  var verifyingContract = getDaiContractAddress(chain, chainIdInt);
  var spender = getStewardAddress(chain, chainIdInt);
  var networkName = getMaticNetworkName(chainIdInt);
  var arg = Belt_Option.getWithDefault(account, CONSTANTS$WildCards.nullEthAddress);
  var maticState = Curry._1((function (param) {
            return function (param$1) {
              return QlHooks$WildCards.useMaticState(param, arg, param$1);
            };
          })(false), networkName);
  if (chain >= 2) {
    return [
            (function (value) {
                var value$1 = Ethers.utils.parseUnits(value, 0);
                Curry._1(setTxState, (function (param) {
                        return /* Created */2;
                      }));
                if (optSteward === undefined) {
                  return ;
                }
                var updateDepositPromise = $$Promise.Js.toResult(optSteward.depositWei({
                          gasLimit: "500302",
                          value: value$1
                        }));
                $$Promise.getOk(updateDepositPromise, (function (tx) {
                        Curry._1(setTxState, (function (param) {
                                return {
                                        TAG: /* SignedAndSubmitted */1,
                                        _0: tx.hash
                                      };
                              }));
                        var txMinedPromise = $$Promise.Js.toResult(tx.wait());
                        $$Promise.getOk(txMinedPromise, (function (txOutcome) {
                                return Curry._1(setTxState, (function (param) {
                                              return {
                                                      TAG: /* Complete */4,
                                                      _0: txOutcome
                                                    };
                                            }));
                              }));
                        $$Promise.getError(txMinedPromise, (function (_error) {
                                return Curry._1(setTxState, (function (param) {
                                              return /* Failed */4;
                                            }));
                              }));
                        
                      }));
                $$Promise.getError(updateDepositPromise, (function (error) {
                        console.log("error processing transaction: " + error.message);
                        
                      }));
                
              }),
            txState
          ];
  } else {
    return [
            (function (amountToAdd) {
                if (library !== undefined && account !== undefined && maticState !== undefined) {
                  var maticState$1 = Caml_option.valFromOption(maticState);
                  var daiNonce = maticState$1.daiNonce;
                  var stewardNonce = maticState$1.stewardNonce;
                  Curry._1(setTxState, (function (param) {
                          return {
                                  TAG: /* DaiPermit */0,
                                  _0: new BnJs(amountToAdd)
                                };
                        }));
                  return execDaiPermitMetaTx(daiNonce, networkName, stewardNonce, setTxState, sendMetaTx, account, spender, library, (function (steward, v, r, s) {
                                return Curry._1(steward.methods.depositWithPermit(new BnJs(daiNonce), new BnJs("0"), true, v, r, s, account, new BnJs(amountToAdd)).encodeABI, undefined);
                              }), chainId, verifyingContract);
                }
                console.log("something important is null");
                console.log(library, account, maticState);
                
              }),
            txState
          ];
  }
}

function useWithdrawDeposit(chain, library, account, parentChainId) {
  var match = React.useState(function () {
        return /* UnInitialised */0;
      });
  var setTxState = match[1];
  var txState = match[0];
  var optSteward = useStewardContract(undefined);
  var chainIdInt = getChildChainId(parentChainId);
  var spender = getStewardAddress(chain, chainIdInt);
  if (chain >= 2) {
    return [
            (function (amountToWithdraw) {
                var value = Ethers.utils.parseUnits("0", 0);
                var amountToWithdrawEncoded = Ethers.utils.parseUnits(amountToWithdraw, 0);
                Curry._1(setTxState, (function (param) {
                        return /* Created */2;
                      }));
                if (optSteward === undefined) {
                  return ;
                }
                var updateDepositPromise = $$Promise.Js.toResult(optSteward.withdrawDeposit(amountToWithdrawEncoded, {
                          gasLimit: "500302",
                          value: value
                        }));
                $$Promise.getOk(updateDepositPromise, (function (tx) {
                        Curry._1(setTxState, (function (param) {
                                return {
                                        TAG: /* SignedAndSubmitted */1,
                                        _0: tx.hash
                                      };
                              }));
                        var txMinedPromise = $$Promise.Js.toResult(tx.wait());
                        $$Promise.getOk(txMinedPromise, (function (txOutcome) {
                                console.log(txOutcome);
                                return Curry._1(setTxState, (function (param) {
                                              return {
                                                      TAG: /* Complete */4,
                                                      _0: txOutcome
                                                    };
                                            }));
                              }));
                        $$Promise.getError(txMinedPromise, (function (error) {
                                Curry._1(setTxState, (function (param) {
                                        return /* Failed */4;
                                      }));
                                console.log(error);
                                
                              }));
                        
                      }));
                $$Promise.getError(updateDepositPromise, (function (error) {
                        return Curry._1(setTxState, (function (param) {
                                      return {
                                              TAG: /* Declined */2,
                                              _0: error.message
                                            };
                                    }));
                      }));
                
              }),
            txState
          ];
  } else {
    return [
            (function (amountToWithdraw) {
                if (library === undefined) {
                  return ;
                }
                if (account === undefined) {
                  return ;
                }
                var web3 = new Web3(library.provider);
                var steward = Curry._2(Web3$WildCards.Contract.MaticSteward.getStewardContract, web3, spender);
                var __x = Curry._1(steward.methods.withdrawDeposit(amountToWithdraw).send, {
                      from: account
                    });
                __x.catch(function (err) {
                      console.log("this error was caught", err);
                      return Promise.resolve("");
                    });
                
              }),
            txState
          ];
  }
}

function useUserLoyaltyTokenBalance(address) {
  var match = React.useState(function () {
        
      });
  var setResult = match[1];
  var match$1 = React.useState(function () {
        return 0;
      });
  var setCounter = match$1[1];
  var counter = match$1[0];
  var optSteward = useLoyaltyTokenContract(undefined);
  React.useEffect((function () {
          if (optSteward !== undefined) {
            Async$WildCards.let_(optSteward.balanceOf(address), (function (balance) {
                    var balanceString = balance.toString();
                    Curry._1(setResult, (function (param) {
                            return Caml_option.some(new BnJs(balanceString));
                          }));
                    return Globals$WildCards.async(undefined);
                  }));
          }
          
        }), [
        counter,
        setResult,
        optSteward,
        address
      ]);
  return [
          match[0],
          (function (param) {
              return Curry._1(setCounter, (function (param) {
                            return counter + 1 | 0;
                          }));
            })
        ];
}

function useChangePrice(animal) {
  var animalId = TokenId$WildCards.toString(animal);
  var match = React.useState(function () {
        return /* UnInitialised */0;
      });
  var setTxState = match[1];
  var optSteward = useStewardContract(undefined);
  return [
          (function (newPrice) {
              var value = Ethers.utils.parseUnits("0", 0);
              var newPriceEncoded = Ethers.utils.parseUnits(newPrice, 0);
              Curry._1(setTxState, (function (param) {
                      return /* Created */2;
                    }));
              if (optSteward === undefined) {
                return ;
              }
              var updatePricePromise = $$Promise.Js.toResult(optSteward.changePrice(animalId, newPriceEncoded, {
                        gasLimit: "500302",
                        value: value
                      }));
              $$Promise.getOk(updatePricePromise, (function (tx) {
                      Curry._1(setTxState, (function (param) {
                              return {
                                      TAG: /* SignedAndSubmitted */1,
                                      _0: tx.hash
                                    };
                            }));
                      var txMinedPromise = $$Promise.Js.toResult(tx.wait());
                      $$Promise.getOk(txMinedPromise, (function (txOutcome) {
                              console.log(txOutcome);
                              return Curry._1(setTxState, (function (param) {
                                            return {
                                                    TAG: /* Complete */4,
                                                    _0: txOutcome
                                                  };
                                          }));
                            }));
                      $$Promise.getError(txMinedPromise, (function (error) {
                              Curry._1(setTxState, (function (param) {
                                      return /* Failed */4;
                                    }));
                              console.log(error);
                              
                            }));
                      
                    }));
              $$Promise.getError(updatePricePromise, (function (error) {
                      return Curry._1(setTxState, (function (param) {
                                    return {
                                            TAG: /* Declined */2,
                                            _0: error.message
                                          };
                                  }));
                    }));
              
            }),
          match[0]
        ];
}

var stewardAddressMaticMain = "0x6D47CF86F6A490c6410fC082Fd1Ad29CF61492d0";

var stewardAddressMumbai = "0x0C00CFE8EbB34fE7C31d4915a43Cde211e9F0F3B";

var loyaltyTokenAddressMaticMain = "0x773c75c2277eD3e402BDEfd28Ec3b51A3AfbD8a4";

var loyaltyTokenAddressMumbai = "0xd7d8c42ab5b83aa3d4114e5297989dc27bdfb715";

export {
  loyaltyTokenAbi ,
  getExchangeContract ,
  getLoyaltyTokenContract ,
  stewardAddressMainnet ,
  stewardAddressGoerli ,
  stewardAddressRinkeby ,
  loyaltyTokenAddressMainnet ,
  loyaltyTokenAddressGoerli ,
  stewardAddressMaticMain ,
  stewardAddressMumbai ,
  loyaltyTokenAddressMaticMain ,
  loyaltyTokenAddressMumbai ,
  getDaiContractAddress ,
  getStewardAddress ,
  getMaticNetworkName ,
  getChildChainId ,
  useStewardAbi ,
  defaultStewardAddressFromChainId ,
  useStewardAddress ,
  loyaltyTokenAddressFromChainId ,
  useStewardContract ,
  useLoyaltyTokenContract ,
  execDaiPermitMetaTx ,
  useBuy ,
  useBuyAuction ,
  useRedeemLoyaltyTokens ,
  useUpdateDeposit ,
  useWithdrawDeposit ,
  useUserLoyaltyTokenBalance ,
  useChangePrice ,
  
}
/* loyaltyTokenAbi Not a pure module */

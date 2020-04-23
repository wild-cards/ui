[@bs.module "web3-utils"]
external fromWei: (string, string) => string = "fromWei";

[@bs.module "web3-utils"]
external fromWeiBN: (BN.bn, string) => string = "fromWei";

[@bs.module "web3-utils"] external isBN: string => bool = "isBN";

[@bs.module "web3-utils"] external toWei: (string, string) => string = "toWei";

let fromWeiToEth = value => fromWei(value, "ether");
let fromWeiBNToEth = value => fromWeiBN(value, "ether");
let fromWeiBNToEthPrecision = (value, ~digits) =>
  value
  ->fromWeiBNToEth
  ->Belt.Float.fromString
  ->Belt.Option.mapWithDefault(0., a => a)
  ->Js.Float.toFixedWithPrecision(~digits);

let toWeiFromEth = value => toWei(value, "ether");

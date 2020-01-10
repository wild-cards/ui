open Components;

// TODO: there must be a better way of importing images in reason react...
let smallIcon = [%bs.raw {|require('../img/logos/wild-cards-small.png')|}];
let betaBanner = [%bs.raw {|require('../img/beta-banner.png')|}];

// type DetailView = | Details(contentWidth, nextAnimal, previousAnimal)
// | NoDetails(contentWidth)

module BuyGrid = {
  [@bs.module "./BuyGrid.js"] [@react.component]
  external make: (~animalArray: array(unit => React.element)) => React.element =
    "default";
};

module AnimalFocusDetails = {
  [@react.component]
  let make = (~animalCarousel, ~isExplorer) => {
    let clearAndPush = RootProvider.useClearNonUrlStateAndPushRoute();

    <Rimble.Flex flexWrap="wrap" alignItems="center" className=Styles.topBody>
      {switch (animalCarousel) {
       | None => React.null
       | Some((_, previousAnimal)) =>
         <Rimble.Box p=1 width=[|0.05, 0.05, 0.05|]>
           //  <Rimble.Button
           //    className=Styles.forwardBackButton
           //    onClick={InputHelp.handleEvent(() =>
           //      clearAndPush(
           //        "#"
           //        ++ InputHelp.getPagePrefix(isExplorer)
           //        ++ "details/"
           //        ++ previousAnimal->Animal.getName->Js.Global.encodeURI,
           //      )
           //    )}>
           //    <S> {js|◄|js} </S>
           //  </Rimble.Button>

             <span
               className={Styles.carouselArrow(true, ~absolutePosition=false)}
               onClick={InputHelp.handleMouseEvent(() =>
                 clearAndPush(
                   "#"
                   ++ InputHelp.getPagePrefix(isExplorer)
                   ++ "details/"
                   ++ previousAnimal->Animal.getName->Js.Global.encodeURI,
                 )
               )}>
               {js|◄|js}->React.string
             </span>
           </Rimble.Box>
       }}
      <Rimble.Box
        width={
          animalCarousel->Belt.Option.mapWithDefault([|1.|], _ => [|0.9|])
        }>
        <Dapp />
      </Rimble.Box>
      {switch (animalCarousel) {
       | None => React.null
       | Some((nextAnimal, _)) =>
         <Rimble.Box p=1 width=[|0.05, 0.05, 0.05|]>
           <span
             className={Styles.carouselArrow(false, ~absolutePosition=false)}
             onClick={InputHelp.handleMouseEvent(() =>
               clearAndPush(
                 "#"
                 ++ InputHelp.getPagePrefix(isExplorer)
                 ++ "details/"
                 ++ nextAnimal->Animal.getName->Js.Global.encodeURI,
               )
             )}>
             {js|►|js}->React.string
           </span>
         </Rimble.Box>
       }}
    </Rimble.Flex>;
  };
};

module Header = {
  [@react.component]
  let make = (~animalCarousel, ~isExplorer, ~isDetails) => {
    let clearAndPush = RootProvider.useClearNonUrlStateAndPushRoute();
    open ReactTranslate;
    let usedtranslationModeContext = useTranslationModeContext();
    <header className=Styles.header>
      <nav className=Styles.nav>
        <div className=Styles.navBox>
          <a
            className=Styles.clickableLink
            onClick={event => {
              ReactEvent.Mouse.preventDefault(event);
              clearAndPush("#");
            }}>
            <div className=Styles.headerLogo> <img src=smallIcon /> </div>
          </a>
          <ul className=Styles.navList>
            <li className=Styles.navListItem>
              {isExplorer || isDetails
                 ? React.null
                 : <div className=Styles.navListItemToggle>
                     <span className=Styles.someMarginRight>
                       <S>
                         {usedtranslationModeContext->translationModeCrypto
                            ? "EXPERT MODE" : "SIMPLE MODE"}
                       </S>
                     </span>
                     <ReactTranslate.Switch
                       onChange={
                         usedtranslationModeContext->settranslationModeCrypto
                       }
                       checked={
                         usedtranslationModeContext->translationModeCrypto
                       }
                       onColor="#6BAD3D"
                       onHandleColor="#346D4C"
                       uncheckedIcon=false
                       checkedIcon=false
                       className=Styles.translationSwitch
                     />
                   </div>}
            </li>
            <li className=Styles.navListItem>
              {switch (animalCarousel) {
               | None => React.null
               | Some(_) =>
                 <a
                   className=Styles.navListText
                   onClick={event => {
                     ReactEvent.Mouse.preventDefault(event);
                     clearAndPush("#");
                   }}>
                   <S> "HOME" </S>
                 </a>
               }}
              <a
                className=Styles.navListText
                target="_blank"
                href="https://blog.wildcards.world/">
                <S> "BLOG" </S>
              </a>
              {isExplorer && !isDetails
                 ? <a
                     className=Styles.navListText
                     target="_blank"
                     href=""
                     onClick={event => {
                       ReactEvent.Mouse.preventDefault(event);
                       clearAndPush("#");
                     }}>
                     <S> "HOME" </S>
                   </a>
                 : <Rimble.Button
                     onClick={event => {
                       ReactEvent.Form.preventDefault(event);
                       clearAndPush("#explorer");
                     }}
                     className=Styles.whiteText>
                     <S> "ANIMAL KINGDOM" </S>
                   </Rimble.Button>}
            </li>
          </ul>
        </div>
      </nav>
    </header>;
  };
};

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();

  let (animalCarousel, isExplorer, isDetails) =
    switch (Js.String.split("/", url.hash)) {
    | [|"explorer", "details", animalStr|]
    | [|"explorer", "details", animalStr, ""|] =>
      let optionAnimal = Animal.getAnimal(animalStr);
      (
        optionAnimal->Belt.Option.map(animal => Animal.getNextPrev(animal)),
        true,
        true,
      );
    | [|"details", animalStr|] =>
      let optionAnimal = Animal.getAnimal(animalStr);
      (
        optionAnimal->Belt.Option.map(animal => Animal.getNextPrev(animal)),
        false,
        true,
      );
    | urlArray
        when
          Belt.Array.get(urlArray, 0)
          ->Belt.Option.mapWithDefault(false, a => a == "explorer") => (
        None,
        true,
        false,
      )
    | _ => (None, false, false)
    };

  let ref = React.useRef(Js.Nullable.null);
  // ref.current.scrollHeight;
  ReactDOMRe.Ref.domRef(ref);

  <div ref={ReactDOMRe.Ref.domRef(ref)} className=Styles.app>
    <img src=betaBanner className=Styles.betaBanner />
    <Header animalCarousel isExplorer isDetails />
    <Providers.UsdPriceProvider>
      {isDetails
         ? <AnimalFocusDetails animalCarousel isExplorer />
         : isExplorer
             ? <BuyGrid
                 animalArray={
                   Animal.orderedArray->Belt.Array.map((animal, ()) =>
                     <Dapp.CarouselAnimal
                       animal
                       isGqlLoaded=true
                       isExplorer
                       scalar=1.
                     />
                   )
                 }
               />
             : <React.Fragment>
                 <AnimalFocusDetails animalCarousel isExplorer />
                 //  <CarouselTestApp />
                 <StaticContent.CustomerBenefit />
                 <StaticContent.HowItWorks />
                 <StaticContent.About />
                 <StaticContent.CoreConcepts />
                 <StaticContent.EmailSignup />
                 <StaticContent.Partners />
               </React.Fragment>}
    </Providers.UsdPriceProvider>
    <StaticContent.Footer />
  </div>;
};

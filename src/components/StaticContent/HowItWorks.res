let gorillaOnVine = "/img/wildcardsimages/hanging-gorilla-from-vine.png"

open Rimble

module YoutubeVid = {
  @module("./YoutubeVideo.js") @react.component
  external make: (~videoCode: string) => React.element = "default"
}

let infoModalStyle = {
  open Css
  style(list{padding(rem(3.)), borderRadius(px(5)), width(px(640)), maxWidth(#vw(100.))})
}

@react.component
let make = () => {
  let (isModalOpen, setModalOpen) = React.useState(() => false)

  <Rimble.Box className=Styles.infoBackground>
    <Rimble.Flex flexWrap="wrap">
      <Rimble.Box width=[1., 1., 0.59] className=Styles.infoCardContainer>
        <Rimble.Card className=Styles.infoCardStyles>
          <YoutubeVid videoCode="n7GBm6ruVaQ" />
          <br />
          <Rimble.Flex
            flexWrap="wrap" justifyContent="space-around" alignItems="stretch" pt=50 px=50>
            <Rimble.Button
              className=Styles.centerItemsMargin onClick={_ => setModalOpen(_ => true)}>
              {"Read More"->React.string}
            </Rimble.Button>
          </Rimble.Flex>
          <Rimble.Modal isOpen=isModalOpen>
            <Rimble.Card className=infoModalStyle>
              <Rimble.Button.Text
                icononly=true
                icon="Close"
                color="moon-gray"
                position="absolute"
                top=0
                right=0
                m=3
                onClick={_ => setModalOpen(_ => false)}
              />
              <Heading className=Styles.centerText> {"How it works"->React.string} </Heading>
              <br />
              <hr />
              <Text>
                {"You can become the guardian of a wildcard by simply clicking buy on any of the listed wildcards. Wildcards are "->React.string}
                <strong> {"always for sale"->React.string} </strong>
                {" since anyone can purchase them at anytime for their current sale price. When someone purchases a wildcard, they are required to immediately set a sale price for that wildcard. This ensures wildcards are "->React.string}
                <strong> {"always for sale"->React.string} </strong>
              </Text>
              <br />
              <Text>
                {"As the gaurdian of a wildcard, you pay a "->React.string}
                <strong> {"Harberger tax"->React.string} </strong>
                {" (percentage based fee) on your newly set sale price. This fee goes towards supporting wildlife conservation. "->React.string}
              </Text>
              <br />
              <Text>
                <strong> {"Here's where it gets interesting."->React.string} </strong>
                {" When someone purchases your wildcard from you, you will receive the sale price you set for that wildcard. Depending on what sale price you set and the harberger tax you have already paid, you may make a profit. The only constant is that the conservation organisation will continually receive funding based on the current selling price of each wildcard."->React.string}
              </Text>
              <br />
              <Text>
                <span className=Styles.redDisclaimer>
                  {"The first wildcard we released, Vitalik, has a 2.5% Harberger tax rate per month. Other wildcards have different harberger tax rates ranging from 2.5% to 100% per month."->React.string}
                </span>
              </Text>
            </Rimble.Card>
          </Rimble.Modal>
        </Rimble.Card>
      </Rimble.Box>
      <Rimble.Box width=[0.41] className=Styles.animalImage>
        <img src=gorillaOnVine width="100%" />
      </Rimble.Box>
    </Rimble.Flex>
  </Rimble.Box>
}

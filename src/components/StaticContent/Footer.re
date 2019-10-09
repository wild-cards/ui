let privacy_policy_link = "https://wild-cards.github.io/legal/privacy_policy.html";
let terms_and_conditions_link = "https://wild-cards.github.io/legal/terms_and_conditions.html";

module Footer = {
  open Components;
  open Rimble;

  [@react.component]
  let make = () =>
    <Box className=Styles.footer>
      <div className=Styles.footerContainer>
        <div className=Styles.footerWrapper>
          <div className=Styles.footerText>
            <div>
              <S> {js|©|js} </S>
              <a className=Styles.footerLink href="https://wildcards.world">
                <S> "Wild Cards" </S>
              </a>
              <S> ". All rights reserved." </S>
            </div>
          </div>
          <div className=Styles.footerText>
            <a
              className=Styles.footerLink
              target="_blank"
              href=privacy_policy_link>
              <S> "Privacy Policy" </S>
            </a>
          </div>
          <div className=Styles.footerText>
            <a
              className=Styles.footerLink
              target="_blank"
              href=terms_and_conditions_link>
              <S> "Terms and Conditions" </S>
            </a>
          </div>
          <ul className=Styles.footerSocialButtons>
            <li className=Styles.footerSocialButton>
              <SocialButtons
                url="https://twitter.com/wildcards_world"
                bgColor="transparent"
                fgColor="#aaa"
                target="_blank"
                className=Styles.footerSocailButtonLink
              />
            </li>
            <li className=Styles.footerSocialButton>
              <SocialButtons
                className=Styles.footerSocailButtonLink
                url="https://www.facebook.com/wildcardscrypto"
                bgColor="transparent"
                target="_blank"
                fgColor="#aaa"
              />
            </li>
          </ul>
        </div>
      </div>
    </Box>;
};
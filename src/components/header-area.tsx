import React from "react";

interface Props extends React.ComponentProps<"header"> {}

export const HeaderArea = ({ ...props }: Props) => {
  return (
    <header className="header" {...props}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header__flex">
              <div className="site__logo" id="logo-wrapper">
                <a href="https://twitter.com/home">
                  X{/* <img src={"/assets/img/site-logo.png"} alt="" /> */}
                </a>

                <a href="https://web.telegram.org/">
                  TG{/* <img src={"/assets/img/site-logo.png"} alt="" /> */}
                </a>
              </div>
              <div className="header__btn">
                <a href="#">CONNECT WALLET</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

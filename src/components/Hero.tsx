import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="hero__top--text"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <span>
                  <img src={"/assets/img/base-img.png"} alt="" />
                </span>
                <h1>The Based Cartel</h1>
                <p>
                  The Based Cartel is a consortium of independent organizations
                  formed to control the production and distribution of the best
                  projects and the dankest memes on <a href="#">BASE</a>.
                </p>
              </div>
              <div
                className="hero__mid--text"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-delay={100}
              >
                <h2>Official NFT Mint</h2>
                <p>
                  The Based Cartel's Official NFT mint will start on October 10,
                  2024 and will be minted as an open-edition token opportunity
                  for a total of 7 days.
                </p>
                <p>
                  We set out with ONE goal for the Based Cartel, and that was to
                  ensure that the participants in the Base ecosystem are
                  represented and rewarded for playing their part in the growth
                  and success of Base projects.
                </p>
                <p>
                  By minting the Based Cartel NFT you will be eligible for
                  immediate staking rewards from participating projects, access
                  to IRL events, discounts giveaways, exclusive access, and much
                  more!
                </p>
              </div>
              <div className="hero__card--flex">
                <div
                  className="single__hero--card"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={100}
                >
                  <div className="hero__card-top">
                    <h3>KingPin</h3>
                    <p>
                      If you submitted your BASE ETH address to our open
                      allowlist you will be allowed to mint at this level.
                      (LIMIT 5)
                    </p>
                  </div>
                  <a href="#">MINT NOT AVAILABLE</a>
                </div>
                <div
                  className="single__hero--card"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={200}
                >
                  <div className="hero__card-top">
                    <h3>Captain</h3>
                    <p>
                      If you hold tokens / nfts in your mint wallet from ANY of
                      our Cartel Families you will be allowed to mint at this
                      level. (LIMIT 10)
                    </p>
                  </div>
                  <a href="#">MINT NOT AVAILABLE</a>
                </div>
                <div
                  className="single__hero--card"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <div className="hero__card-top">
                    <h3>Sicario</h3>
                    <p>
                      Anyone with a BASE ETH wallet is allowed to mint at this
                      level. (UNLIMITED)
                    </p>
                  </div>
                  <a href="#">MINT NOT AVAILABLE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

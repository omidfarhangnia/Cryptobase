import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub, BsMeta, BsTwitter } from "react-icons/bs";


const CryptoPage = () => {
  const [crypto, setCrypto] = useState({});
  const cryptoIDUrl = process.env.REACT_APP_CRYPTO_ID_URL;

  useEffect(() => {
    axios.get(cryptoIDUrl).then((response) => {
      setCrypto(response.data);
    });
  }, [cryptoIDUrl]);

  console.log(crypto);
  return (
    <>
      <div>
        <div>
          <img src={crypto.image?.large} alt="this is the symbol of crypto" />
          <div>
            <h1>{crypto?.name} price</h1>
            <div className="uppercase">({crypto?.symbol} / USD)</div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <p>{crypto.market_data}</p>
              <p>7 day</p>
            </div>
            <div>spirkline</div>
            <div>
              <div>
                <span>market cap</span>
                <span>$44444444444</span>
              </div>
              <div>
                <span>volume 24h</span>
                <span>$2002020202020200</span>
              </div>
            </div>
            <div>
              <div>
                <span>24h high</span>
                <span>$30792</span>
              </div>
              <div>
                <span>24h low</span>
                <span>29900</span>
              </div>
            </div>
          </div>
          <div>
            <h2>market stats</h2>
            <div>
              <div>
                <span>market rank</span>
                <span>heee</span>
              </div>
              <div>
                <span>hashing algorithn</span>
                <span>heee</span>
              </div>
              <div>
                <span>trust score</span>
                <span>heee</span>
              </div>
              <div>
                <span>price change 24h</span>
                <span>heee</span>
              </div>
              <div>
                <span>price change (7d)</span>
                <span>heee</span>
              </div>
              <div>
                <span>price change (14d)</span>
                <span>heee</span>
              </div>
              <div>
                <span>price change (30d)</span>
                <span>heee</span>
              </div>
              <div>
                <span>price change (60d)</span>
                <span>heee</span>
              </div>
              <div>
                <span>price change (1y)</span>
                <span>heee</span>
              </div>
            </div>
            <div>
              <nav>
                <ul>
                  <li>
                    <AiFillInstagram size={22} />
                  </li>
                  <li>
                    <BsTwitter size={22} />
                  </li>
                  <li>
                    <BsMeta size={22} />
                  </li>
                  <li>
                    <BsGithub size={22} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div>
          <h2>about this</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit ducimus ullam, ipsa quisquam suscipit odit temporibus numquam aut debitis sequi libero repudiandae in iusto nam tempora exercitationem delectus omnis aperiam veniam voluptatem iure voluptatibus. Voluptate impedit deleniti iure recusandae quisquam asperiores eligendi dolorum laudantium totam cumque. Cupiditate ut necessitatibus earum sapiente. Consectetur porro alias rem, inventore qui at quo nostrum quidem accusantium explicabo nihil atque fuga, enim asperiores nisi. Natus, vero impedit error numquam quibusdam recusandae labore, quia rerum aliquid facere, similique magnam illum delectus aliquam repellendus eos molestiae est. Qui facilis omnis nam hic nemo? Accusantium ullam illum rerum vero dolore delectus vel eaque, et voluptates labore quo excepturi culpa, similique eius accusamus ea doloremque, autem magni repudiandae. Modi, inventore autem tempore exercitationem eum maxime officia omnis aperiam veritatis. Inventore maxime, minima minus rerum vel laudantium maiores temporibus? Sequi aspernatur assumenda natus esse, fuga ea id corrupti unde dolores quod minus sit magni cum quasi blanditiis, beatae iure. Consequuntur perspiciatis accusantium maiores at fugiat sint similique eius mollitia, dolorem dicta adipisci nisi minus provident accusamus veritatis, voluptas reiciendis, ducimus nam. Labore ratione laboriosam voluptates fuga sequi iste rem vel ex mollitia, accusantium sint doloribus. Culpa saepe vero, molestiae soluta voluptate error reprehenderit, est modi nesciunt inventore rem id voluptatum numquam dolore velit alias illo ipsum repudiandae omnis odio harum. Sint hic doloremque nobis ipsum excepturi maiores blanditiis, odit eligendi accusamus, quam doloribus, aperiam natus! Repellat assumenda numquam voluptatum suscipit provident sequi nesciunt deserunt illo ex adipisci voluptatibus temporibus corrupti officiis quo saepe a, ullam accusamus maxime magni dolores enim rerum eligendi. Aut enim excepturi officiis magnam corrupti aperiam voluptate voluptatibus commodi animi ab rem repellendus at voluptatum expedita quia corporis est architecto similique nam asperiores, quo quis sint? Veniam mollitia alias asperiores! Sit cumque tenetur fuga labore et.</p>
        </div>
      </div>
    </>
  );
};

export default CryptoPage;

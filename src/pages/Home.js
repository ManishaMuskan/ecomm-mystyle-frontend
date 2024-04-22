import { NavLink } from 'react-router-dom';
import kidsWearBanner from '../assets/imgs/banners/Kids-Wear_Desk_Banner.webp';
import maxTShirtBanner from '../assets/imgs/banners/MA_2x._CB560453769_.jpg';
import superBottomsBanner from '../assets/imgs/banners/Super-Bottoms_Desk_Banner.webp';
import topBrandsBanner from '../assets/imgs/banners/Top-Brands-2_Desk_Banner.webp';
import kurtasUnder299Banner from '../assets/imgs/banners/WA_ETH_2x._CB560453769_.jpg';
import Card from '../components/UI/Card/Card';
import Carousel from '../components/UI/Carousel/Carousel';
import classes from './Home.module.css';

import womenClothing from '../assets/imgs/sales-ads/women_clothing.jpeg';
import womenFootwear from '../assets/imgs/sales-ads/women_footwear.jpg';
import womenWatches from '../assets/imgs/sales-ads/women_watches.jpeg';
import womenBags from '../assets/imgs/sales-ads/women_bags.jpeg';

import menClothing from '../assets/imgs/sales-ads/men_clothing.jpeg';
import menFootwear from '../assets/imgs/sales-ads/men_footwear.jpeg';
import menWatches from '../assets/imgs/sales-ads/men_watches.jpeg';
import menWallets from '../assets/imgs/sales-ads/men_wallets.jpeg';

// import homeDecorItem from '../assets/imgs/sales-ads/home_decor_item.jpeg';
// import homeDecorHandiCrafts from '../assets/imgs/sales-ads/home_decor_ganeshji.jpeg';
// import homeDecorCandles from '../assets/imgs/sales-ads/home_decor_candles.jpeg';
// import homeDecorSofaCovers from '../assets/imgs/sales-ads/home_decor_sofa_covers.jpeg';

const bannerImgs = [
  {
    imageSrc: topBrandsBanner,
  },
  {
    imageSrc: kurtasUnder299Banner,
  },
  {
    imageSrc: superBottomsBanner,
  },
  {
    imageSrc: maxTShirtBanner,
  },
  {
    imageSrc: kidsWearBanner,
  },
];

const HomePage = () => {
  return (
    <div className={classes.home}>
      <section className={classes['home-special-offers']}>
        <Carousel items={bannerImgs} />
      </section>

      <section className={classes['sales-ads']}>
        <div className={classes['sales-ads-container']}>
          <Card className={classes['br-4px']}>
            <h4>Upto 60% off | Styles for men</h4>
            <div className={classes['sales-ads-category-container']}>
              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menClothing} alt="Men's Clothing" />
                </div>
                <p>Clothing</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menFootwear} alt="Men's footwear" />
                </div>
                <p>Footwear</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menWallets} alt="Men's Bags & Wallets" />
                </div>
                <p>Bags & Wallets</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menWatches} alt="Men's Watches" />
                </div>
                <p>Watches</p>
              </div>
            </div>
            <NavLink to="/products" className={classes['see-more']}>
              See more
            </NavLink>
          </Card>

          <Card className={classes['br-4px']}>
            <h4>Upto 40% off | Styles for women</h4>
            <div className={classes['sales-ads-category-container']}>
              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={womenClothing} alt="Women's Clothing" />
                </div>
                <p>Clothing</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={womenFootwear} alt="Women's footwear" />
                </div>
                <p>Footwear</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={womenBags} alt="Women's Bags" />
                </div>
                <p>Bags</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={womenWatches} alt="women's Watches" />
                </div>
                <p>Watches</p>
              </div>
            </div>
            <NavLink to="/products" className={classes['see-more']}>
              See more
            </NavLink>
          </Card>

          <Card className={classes['br-4px']}>
            <h3>Upto 60% off | Styles for men</h3>
            <div className={classes['sales-ads-category-container']}>
              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menClothing} alt="Men's Clothing" />
                </div>
                <p>Clothing</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menFootwear} alt="Men's footwear" />
                </div>
                <p>Footwear</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menWallets} alt="Men's Bags & Wallets" />
                </div>
                <p>Bags & Wallets</p>
              </div>

              <div className={classes['sales-category']}>
                <div className={classes['sales-category-img']}>
                  <img src={menWatches} alt="Men's Watches" />
                </div>
                <p>Watches</p>
              </div>
            </div>
            <NavLink to="/products" className={classes['see-more']}>
              See more
            </NavLink>
          </Card>

          <Card>
            <div className={classes.coupons}>
              <h4>Coupons corner and hot deals</h4>
              <div>
                Coupons offers small window{' '}
                <span>valid for 1st time users</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* if logged in */}
      <section>Recently visited items</section>

      <section>Products in trend / popular items</section>
      <section>hot deals</section>

      <div>
        <section>Shop by brands</section>
        <section>Shop by categories banners</section>
      </div>
    </div>
  );
};

export default HomePage;

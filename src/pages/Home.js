import { NavLink } from 'react-router-dom';
import Card from '../components/UI/Card/Card';
import Carousel from '../components/UI/Carousel/Carousel';
import classes from './Home.module.css';

import kidsWearBanner from '../assets/imgs/banners/Kids-Wear_Desk_Banner.webp';
import maxTShirtBanner from '../assets/imgs/banners/MA_2x._CB560453769_.jpg';
import superBottomsBanner from '../assets/imgs/banners/Super-Bottoms_Desk_Banner.webp';
import topBrandsBanner from '../assets/imgs/banners/Top-Brands-2_Desk_Banner.webp';
import kurtasUnder299Banner from '../assets/imgs/banners/WA_ETH_2x._CB560453769_.jpg';

import womenBags from '../assets/imgs/sales-ads/women_bags.jpeg';
import womenClothing from '../assets/imgs/sales-ads/women_clothing.jpeg';
import womenFootwear from '../assets/imgs/sales-ads/women_footwear.jpg';
import womenWatches from '../assets/imgs/sales-ads/women_watches.jpeg';

import menClothing from '../assets/imgs/sales-ads/men_clothing.jpeg';
import menFootwear from '../assets/imgs/sales-ads/men_footwear.jpeg';
import menWallets from '../assets/imgs/sales-ads/men_wallets.jpeg';
import menWatches from '../assets/imgs/sales-ads/men_watches.jpeg';

import homeDecorCandles from '../assets/imgs/sales-ads/home_decor_candles.jpeg';
import homeDecorHandiCrafts from '../assets/imgs/sales-ads/home_decor_ganeshji.jpeg';
import homeDecorItem from '../assets/imgs/sales-ads/home_decor_item.jpeg';
import homeDecorSofaCovers from '../assets/imgs/sales-ads/home_decor_sofa_covers.jpeg';

// import couponsCorner from '../assets/imgs/coupon-offers/COUPONS-CORNER.webp';
import flat400 from '../assets/imgs/coupon-offers/FLAT-400-Off-on-1st-Purchase-Strip.webp';
import flat200 from '../assets/imgs/coupon-offers/MYNTRA200.webp';
import MultiItemCarousel from '../components/UI/MultiItemCarousel/MultiItemCarousel';

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

      <section className={classes['sales-ads-container']}>
        <Card className={classes['br-4px']}>
          <h3>Upto 60% off | Styles for men</h3>
          <div className={classes['sales-ads-category-container']}>
            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={menClothing} alt="Men's Clothing" />
              </div>
              <small>Clothing</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={menFootwear} alt="Men's footwear" />
              </div>
              <small>Footwear</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={menWallets} alt="Men's Bags & Wallets" />
              </div>
              <small>Bags & Wallets</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={menWatches} alt="Men's Watches" />
              </div>
              <small>Watches</small>
            </div>
          </div>
          <NavLink to="/products" className={classes['see-more']}>
            See more
          </NavLink>
        </Card>

        <Card className={classes['br-4px']}>
          <h3>Upto 40% off | Styles for women</h3>
          <div className={classes['sales-ads-category-container']}>
            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={womenClothing} alt="Women's Clothing" />
              </div>
              <small>Clothing</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={womenFootwear} alt="Women's footwear" />
              </div>
              <small>Footwear</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={womenBags} alt="Women's Bags" />
              </div>
              <small>Bags</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={womenWatches} alt="women's Watches" />
              </div>
              <small>Watches</small>
            </div>
          </div>
          <NavLink to="/products" className={classes['see-more']}>
            See more
          </NavLink>
        </Card>

        <Card className={classes['br-4px']}>
          <h3>Revamp your home | discounted price</h3>
          <div className={classes['sales-ads-category-container']}>
            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={homeDecorItem} alt="Home Decors" />
              </div>
              <small>Decorative items</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={homeDecorHandiCrafts} alt="Handicrafts" />
              </div>
              <small>Handicrafts</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={homeDecorCandles} alt="Candles" />
              </div>
              <small>Scented candles</small>
            </div>

            <div className={classes['sales-category']}>
              <div className={classes['sales-category-img']}>
                <img src={homeDecorSofaCovers} alt="Covers & Bedsheets" />
              </div>
              <small>Covers & Bedsheets</small>
            </div>
          </div>
          <NavLink to="/products" className={classes['see-more']}>
            See more
          </NavLink>
        </Card>

        <div className={classes['coupons-and-sign-in']}>
          <Card className={classes['br-4px']}>
            <h3>Sign in for your best experience</h3>
            <button type="button">Sign in</button>
          </Card>

          <Card className={`${classes['br-4px']} ${classes.coupons}`}>
            <h3>Coupons Corner</h3>
            <div className={classes['coupons-corner-img']}>
              <img src={flat400} alt="Flat 400" />
            </div>
            <div className={classes['coupons-corner-img']}>
              <img src={flat200} alt="Flat 200" />
            </div>
            <p>valid for 1st time users</p>
          </Card>
        </div>
      </section>

      {/* if logged in */}
      <section>
        <h2>Recently visited items</h2>
        <MultiItemCarousel />
      </section>

      <section>
        <h2>Product in trends</h2>
        <MultiItemCarousel />
      </section>

      <section>
        <h2>Today&apos;s hot deals</h2>
        <MultiItemCarousel />
      </section>

      <section>
        <h2>Shop by top brands</h2>
        <MultiItemCarousel />
      </section>
    </div>
  );
};

export default HomePage;

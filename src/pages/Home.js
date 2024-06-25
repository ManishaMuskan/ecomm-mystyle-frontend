import { Link, NavLink } from 'react-router-dom';
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
import ImageBox from '../components/UI/ImageBox/ImageBox';

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

const shopByCategoriesImages = [
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_02.webp',
    alt: 'Shop by category 1',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_03.webp',
    alt: 'Shop by category 2',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_04.webp',
    alt: 'Shop by category 3',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_05.jpg',
    alt: 'Shop by category 4',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_06.webp',
    alt: 'Shop by category 5',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_07.webp',
    alt: 'Shop by category 6',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_14.webp',
    alt: 'Shop by category 7',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_15.jpg',
    alt: 'Shop by category 8',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_16.webp',
    alt: 'Shop by category 9',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_17.jpg',
    alt: 'Shop by category 10',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_18.webp',
    alt: 'Shop by category 11',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_19.webp',
    alt: 'Shop by category 12',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_20.webp',
    alt: 'Shop by category 13',
  },
  {
    imageSrc: 'images/shop-by-categories-offers/Shop-By-Category_HP_21.webp',
    alt: 'Shop by category 14',
  },
];

const salesAds = [
  {
    heading: 'Upto 60% off | Styles for men',
    ads: [
      {
        title: 'Clothing',
        imageSrc: menClothing,
        alt: "Men's Clothing",
        path: '/#',
      },
      {
        title: 'Footwear',
        imageSrc: menFootwear,
        alt: "Men's Footwear",
        path: '/#',
      },
      {
        title: 'Bags & Wallets',
        imageSrc: menWallets,
        alt: "Men's Bags & Wallets",
        path: '/#',
      },
      {
        title: 'Watches',
        imageSrc: menWatches,
        alt: "Men's Watches",
        path: '/#',
      },
    ],
  },
  {
    heading: 'Upto 40% off | Styles for women',
    ads: [
      {
        title: 'Clothing',
        imageSrc: womenClothing,
        alt: "Women's Clothing",
        path: '/#',
      },
      {
        title: 'Footwear',
        imageSrc: womenFootwear,
        alt: "Women's Footwear",
        path: '/#',
      },
      {
        title: 'Bags',
        imageSrc: womenBags,
        alt: "Women's Bags",
        path: '/#',
      },
      {
        title: 'Watches',
        imageSrc: womenWatches,
        alt: "Women's Watches",
        path: '/#',
      },
    ],
  },
  {
    heading: 'Revamp your home | discounted price',
    ads: [
      {
        title: 'Decorative items',
        imageSrc: homeDecorItem,
        alt: 'Home Decors',
        path: '/#',
      },
      {
        title: 'Handicrafts',
        imageSrc: homeDecorHandiCrafts,
        alt: 'Handicrafts',
        path: '/#',
      },
      {
        title: 'Scented candles',
        imageSrc: homeDecorCandles,
        alt: 'Candles',
        path: '/#',
      },
      {
        title: 'Covers & Bedsheets',
        imageSrc: homeDecorSofaCovers,
        alt: 'Covers & Bedsheets',
        path: '/#',
      },
    ],
  },
];

// TODO: Provide relevant links to all Link Tags, also style :focus and :active state of <a></a>
const HomePage = () => {
  return (
    <div className={classes.home}>
      <section className={classes['home-special-offers']}>
        <Carousel
          items={bannerImgs}
          aspectRatioBoxClassName={
            classes['home-special-offers-aspect-ratio-box']
          }
        />
      </section>

      <section className={classes['sales-ads-container']}>
        {salesAds.map((salesAd) => (
          <Card key={salesAd.heading} className={classes['card-br-small']}>
            <h3>{salesAd.heading}</h3>
            <div className={classes['sales-ads-category-box']}>
              {salesAd.ads.map((ad) => (
                <Link to="/#" key={ad.title}>
                  <div className={classes['sales-category']}>
                    <div
                      className={`base-img-box ${classes['sales-category-img-box']}`}>
                      <img src={ad.imageSrc} alt={ad.alt} />
                    </div>
                    <small>{ad.title}</small>
                  </div>
                </Link>
              ))}
            </div>
            <NavLink to="/products" className={classes['see-more']}>
              See more
            </NavLink>
          </Card>
        ))}

        <div className={classes['coupons-and-sign-in']}>
          <Card className={classes['card-br-small']}>
            <h3>Sign in for your best experience</h3>
            <button type="button">Sign in</button>
          </Card>

          <Card className={`${classes['card-br-small']} ${classes.coupons}`}>
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

      <section>
        <h2>Shop by category</h2>
        <div className={classes['shop-by-category-container']}>
          {shopByCategoriesImages.map(({ imageSrc, alt }) => (
            <div key={alt} className={classes['shop-by-category-box']}>
              <Link to="/#">
                <ImageBox imageSrc={imageSrc} imageAltTitle={alt} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

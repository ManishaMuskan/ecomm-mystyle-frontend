import banner1 from '../assets/imgs/banners/Super-Bottoms_Desk_Banner.webp';
import classes from './Home.module.css';

const HomePage = () => {
  return (
    <div className={classes.home}>
      <section className={classes['home-special-offers']}>
        <div className={classes['banner-container']}>
          {/* Images or banners sliders about festive or special offers */}
          <img src={banner1} alt="banner1" />
        </div>
      </section>
      <section className={classes.coupons}>
        <h4>Coupons corner</h4>
        <div>
          Coupons offers small window <span>valid for 1st time users</span>
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

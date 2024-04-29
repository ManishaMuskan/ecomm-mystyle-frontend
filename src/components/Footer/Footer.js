import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    // TODO: Create relevant pages
    <footer className={classes.footer}>
      <div
        className={`${classes['footer-section']} ${classes['footer-section-links']}`}>
        <div className={classes['footer-column']}>
          <h5>Online shopping</h5>
          <div className={classes['footer-column-links']}>
            <Link to="/shop/men">Men</Link>
            <Link to="/shop/women">Women</Link>
            <Link to="/shop/kids">Kids</Link>
            <Link to="/home-decor">Home & Living</Link>
            <Link to="/beauty-and-personal-care">Beauty</Link>
          </div>

          <h5>Useful Links</h5>
          <div className={classes['footer-column-links']}>
            <Link to="/blog">Blog</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/sitemap">Site Map</Link>
            <Link to="/corp-info">Corporate Information</Link>
          </div>
        </div>
        <div className={classes['footer-column']}>
          <h5>Customer Policies</h5>
          <div className={classes['footer-column-links']}>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/faqs">FAQ</Link>
            <Link to="/terms-and-conditions">T&C</Link>
            <Link to="/terms-of-use">Terms of use</Link>
            <Link to="/orders">Track orders</Link>
            <Link to="/faqs#shipping">Shipping</Link>
            <Link to="/faqs#cancel">Cancellation</Link>
            <Link to="/faqs#returns">Returns</Link>
            <Link to="/privacy-policy">Privacy-policy</Link>
          </div>
        </div>
        <div className={classes['footer-column']}>
          <h5>Keep in touch</h5>
          <div className={classes['footer-column-social-links']}>
            {/* TODO: Provide relevant Links */}
            <Link to="/#">
              <FontAwesomeIcon icon={faSquareFacebook} />
            </Link>
            <Link to="/#">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="/#">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link to="/#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
        <div className={classes['footer-column']}>
          <div className={classes.assurance}>
            <img src="images/original-guarantee.png" alt="100% Original" />
            <p>
              <strong>100% ORIGINAL</strong> guarantee for all products at
              mystyle.co.in
            </p>
          </div>
          <div className={classes.assurance}>
            <img
              src="/images/Return-Window-image.png"
              alt="Return within 14 days"
            />
            <p>
              <strong>Return within 14 days</strong> of receiving your order
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${classes['footer-section']} ${classes['footer-section-popular-searches']}`}>
        <h5>Popular Searches</h5>
        <div className={classes['searches-links']}>
          <Link to="/#">Dresses For Girls</Link>
          <Link to="/#">T-Shirts</Link>
          <Link to="/#">Sandals</Link>
          <Link to="/#">Blazers For Men</Link>
          <Link to="/#">Handbags</Link>
          <Link to="/#">Ladies Watches</Link>
          <Link to="/#">Bags</Link>
          <Link to="/#">Sport Shoes</Link>
          <Link to="/#">Reebok Shoes</Link>
          <Link to="/#">Boxers</Link>
          <Link to="/#">Tops</Link>
          <Link to="/#">Fastrack Watches</Link>
          <Link to="/#">Kurtis</Link>
          <Link to="/#">Smart Watches</Link>
          <Link to="/#">Titan Watches</Link>
          <Link to="/#">Designer Blouse</Link>
          <Link to="/#">Gowns</Link>
          <Link to="/#">Cricket Shoes</Link>
          <Link to="/#">Punjabi Suits</Link>
          <Link to="/#">Saree</Link>
          <Link to="/#">Dresses</Link>
          <Link to="/#">Lehenga</Link>
          <Link to="/#">Suit</Link>
          <Link to="/#">Goggles</Link>
          <Link to="/#">Chinos</Link>
        </div>
        <div
          className={`${classes['company-info']} ${classes['footer-section']}`}>
          <p>
            In case of any concern, <Link to="/#">Contact us</Link>
          </p>
          <p>
            © {new Date().getFullYear()} www.mystyle.co.in. All rights
            reserved.
          </p>
        </div>
      </div>
      <hr />
      <div
        className={`${classes['footer-section']} ${classes['company-address']}`}>
        <h5>Registered Office Address</h5>
        <p>
          #345, Lorem ipsum dolor <br /> Biudling amet consectetur adipisicing
          elit corporis
          <br />
          Accusantium sed dolorem <br />
          Optio molestias <br />
          Tempora volutum
          <br /> Bengaluru - 560102, India
          <br />
          <Link to="tel:+91896757899">
            Phone: <strong>+91-896757899</strong>
          </Link>
        </p>
      </div>
      <hr />
      <div className={`${classes['footer-section']} ${classes['more-info']}`}>
        <h5> ONLINE SHOPPING MADE EASY AT MYSTYLE</h5>
        <p>
          If you would like to experience the best of online shopping for men,
          women and kids in India, you are at the right place. Mystyle is the
          ultimate destination for fashion and lifestyle, being host to a wide
          array of merchandise including clothing, footwear, accessories,
          jewelry, personal care products and more. It is time to redefine style
          statement with our treasure-trove of trendy items. Our online online
          store brings you the latest in designer products straight out of
          fashion houses. You can shop online at Mystyle from the comfort of
          your home and get your favorites delivered right to your doorstep.
        </p>
      </div>
      <div className={`${classes['footer-section']} ${classes['more-info']}`}>
        <h5> BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h5>
        <p>
          Be it clothing, footwear or accessories, Mystyle offers you the ideal
          combination of fashion and functionality for men, women and kids. You
          will realize that the sky is the limit when it comes to the types of
          outfits that you can purchase for different occasions.
        </p>
        <ol>
          <li>
            <p>
              <strong>Smart men’s clothing -</strong> At Mystyle you will find
              myriad options in smart formal shirts and trousers, cool T-shirts
              and jeans, or kurta and pyjama combinations for men. Wear your
              attitude with printed T-shirts. Create the back-to-campus vibe
              with varsity T-shirts and distressed jeans. Be it gingham,
              buffalo, or window-pane style, checked shirts are undebatably
              smart. Team them up with chinos, cuffed jeans or cropped trousers
              for a smart casual look. Opt for a stylish layered look with biker
              jackets. Head out in cloudy weather with courage in
              water-resistant jackets. Browse through our inner wear section to
              find supportive garments which would keep you confident in any
              outfit.
            </p>
          </li>
          <li>
            <p>
              <strong>Trendy women’s clothing -</strong> Online shopping for
              women at Mystyle is a mood-elevating experience. Look hip and stay
              comfortable with chinos and printed shorts this summer. Look hot
              on your date dressed in a little black dress, or opt for red
              dresses for a sassy vibe. Striped dresses and T-shirts represent
              the classic spirit of nautical fashion. Choose your favorites from
              among Bardot, off-shoulder, shirt-style, blouson, embroidered and
              peplum tops, to name a few. Team them up with skinny-fit jeans,
              skirts or palazzos. Kurtis and jeans make the perfect fusion-wear
              combination for the cool urbanite. Our grand sarees and
              lehenga-choli selections are perfect to make an impression at big
              social events such as weddings. Our salwar-kameez sets, kurtas and
              Patiala suits make comfortable options for regular wear.
            </p>
          </li>
          <li>
            <p>
              <strong>Fashionable footwear - </strong> While clothes makes the
              man, the type of footwear you wear reflects your personality. We
              bring you an exhaustive lineup of options in casual shoes for men,
              such as sneakers and loafers. Make a power statement at work
              dressed in brogues and oxfords. Practice for your marathon with
              running shoes for men and women. Choose shoes for individual games
              such as tennis, football, basketball, and the like. Or step into
              the casual style and comfort offered by sandals, sliders, and
              flip-flops. Explore our lineup of fashionable footwear for ladies,
              including pumps, heeled boots, wedge-heels, and pencil-heels. Or
              enjoy the best of comfort and style with embellished and metallic
              flats.
            </p>
          </li>
          <li>
            <p>
              <strong>Beauty begins here -</strong> You can also refresh,
              rejuvenate and reveal beautiful skin with personal care, beauty
              and grooming products from Mystyle. Our soaps, shower gels, skin
              care creams, lotions and other ayurvedic products are specially
              formulated to reduce the effect of aging and offer the ideal
              cleansing experience. Keep your scalp clean and your hair
              uber-stylish with shampoos and hair care products. Choose makeup
              to enhance your natural beauty.
            </p>
          </li>
        </ol>
        <p>
          Mystyle is one of the best online shopping sites in India which could
          help transform your living spaces completely. Add colour and
          personality to your bedrooms with bed linen and curtains. Use smart
          tableware to impress your guest. Wall decor, clocks, photo frames and
          artificial plants are sure to breathe life into any corner of your
          home.
        </p>
      </div>
      <div className={`${classes['footer-section']} ${classes['more-info']}`}>
        <h5>AFFORDABLE FASHION AT YOUR FINGERTIPS</h5>
        <p>
          Mystyle is one of the unique online shopping sites in India where
          fashion is accessible to all. Check out our new arrivals to view the
          latest designer clothing, footwear and accessories in the market. You
          can get your hands on the trendiest style every season in western
          wear. You can also avail the best of ethnic fashion during all Indian
          festive occasions. You are sure to be impressed with our seasonal
          discounts on footwear, trousers, shirts, backpacks and more. The
          end-of-season sale is the ultimate experience when fashion gets
          unbelievably affordable.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

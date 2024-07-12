import styles from './SpriteIcon.module.css';

const SpriteIcon = ({ className }) => {
  return <span className={`${styles['style-icons-sprite']} ${className}`} />;
};

export default SpriteIcon;

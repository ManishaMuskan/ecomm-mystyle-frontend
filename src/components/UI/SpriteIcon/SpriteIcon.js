import styles from './SpriteIcon.module.css';

const SpriteIcon = ({ iconClassName }) => {
  return (
    <span className={`${styles['style-icons-sprite']} ${iconClassName}`} />
  );
};

export default SpriteIcon;

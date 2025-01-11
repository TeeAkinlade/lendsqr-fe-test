import styles from './Card.module.scss';

type CardProps = {
  photo: string;
  title: string;
  amount: string | number;
};

const Card = ({ photo, title, amount }: CardProps) => {
  return (
    <div className={styles.card}>
      <img src={photo} alt="photo" className={styles.photo} />
      <p className={styles.title}>{title}</p>
      <h2 className={styles.amount}>{amount}</h2>
    </div>
  );
};

export default Card;

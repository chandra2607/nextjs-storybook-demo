import React from 'react';
import styles from './Card.module.scss'
import Button from '../Button';
interface CardProps {
  type:'primary'|'secondary';
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ type,image, title, description, buttonText }) => {
  return (
    <div className={`${styles.card} ${type==='primary'?styles.primary:styles.secondary}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Button padding='buttonPaddingMedium' backgroundColor='buttonSuccessBg' size='buttonFit' type='button'>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Card;

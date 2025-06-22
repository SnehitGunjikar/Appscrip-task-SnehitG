import styles from "./ItemCard.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ItemCard({ image, title, price }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        {!imageError ? (
          <img 
            src={image} 
            alt={title} 
            className={styles.itemImage} 
            onError={handleImageError}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <p>Image not available</p>
          </div>
        )}
      </div>

      <div className={styles.itemDetails}>
        <div className="detailsText">
          <p className={styles.title}>{title}</p>
          <p className={styles.price}>${price}</p>
        </div>
        <div className="favoriteIcon">
          <Image
            src="/icons/heart.svg"
            alt="Add to Favorites"
            width={23}
            height={24}
            className={styles.icon}
          />
        </div>
      </div>
    </article>
  );
}
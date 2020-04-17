import React, { useRef, useEffect } from "react";
import styles from "./coming-soon.module.sass";
import { IFilm } from "interfaces/IFilm";
import { Typography, Chip, Fab } from "@material-ui/core/";
import { FormattedMessage, FormattedDate, useIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faShoppingCart,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const descriptionSizeWhileIsNotOpen: number = 50;

export interface IFilmBlock {
  film: IFilm;
  isDescriptionOpen: boolean;
  buyTicket: (filmId: string) => void;
  toggleDescription: () => void;
}

export const FilmBlock = (props: IFilmBlock) => {
  const { film, buyTicket, isDescriptionOpen, toggleDescription } = props;
  const intl = useIntl();
  const descTextContainerRef = useRef(null);
  const descTextRef = useRef(null);
  useEffect(() => {
    if (isDescriptionOpen) {
      const descTextContainer = descTextContainerRef.current as any;
      const descText = descTextRef.current as any;
      descTextContainer.style.height = `${descText.offsetHeight +
        descText.scrollHeight}px`;
    }
  }, [film]);
  const handleDescSizeChange = () => {
    const descTextContainer = descTextContainerRef.current as any;
    const descText = descTextRef.current as any;
    if (isDescriptionOpen) {
      descTextContainer.style.height = `${
        descText.offsetHeight > 50 ? 50 : 50
      }px`;
    } else {
      descTextContainer.style.height = `${descText.offsetHeight +
        descText.scrollHeight}px`;
    }
  };
  return (
    <div className={styles.filmBlock}>
      <div className={styles.filmInfo}>
        {film.trailerLink && (
          <div className={styles.trailerContainer}>
            <iframe
              className={styles.filmTrailer}
              title="Trailer"
              src={film.trailerLink}
            ></iframe>
          </div>
        )}

        <div className={styles.basicInfoBlock}>
          {film.genres && (
            <ul className={styles.genres}>
              {film.genres.map((genre) => (
                <li className={styles.genre} key={genre.id}>
                  <Typography variant="overline">
                    <FormattedMessage id={genre.name} />
                  </Typography>
                </li>
              ))}
            </ul>
          )}

          <Typography variant="h3" className={styles.filmName}>
            <FormattedMessage id={film.name} />
          </Typography>
          <div>
            {film.releaseDate && (
              <Chip
                icon={
                  <FontAwesomeIcon icon={faClock} className={styles.icon} />
                }
                label={
                  <FormattedDate
                    value={
                      film.releaseDate
                        ? new Date(film.releaseDate)
                        : new Date(Date.now())
                    }
                    year="numeric"
                    month="long"
                    day="2-digit"
                    hour12={true}
                  />
                }
                color="secondary"
              />
            )}
          </div>
        </div>
        <div className={styles.descriptionAndRatingsBlock}>
          {film.filmImage && (
            <div
              className={styles.filmPhotoBlock}
              style={{ backgroundImage: `url(${film.filmImage})` }}
            ></div>
          )}

          <div className={styles.descriptionBlock}>
            <div
              className={`${styles.descriptionTextContainer}`}
              ref={descTextContainerRef}
            >
              <div
                className={`${styles.textOverlay} ${
                  isDescriptionOpen
                    ? styles.descriptionOpen
                    : styles.descriptionClose
                }`}
              ></div>
              <Typography
                variant="body1"
                className={`${styles.descriptionText}`}
              >
                {film.description ? (
                  <span ref={descTextRef}>
                    {intl.formatMessage({ id: film.description })}
                  </span>
                ) : (
                  <FormattedMessage
                    id="homepage.comingSoon.filmDescription"
                    defaultMessage="Description isn't provided."
                  />
                )}
              </Typography>
            </div>
            <div className={styles.descriptionButtons}>
              <Fab
                className={`${styles.filmButton} ${styles.preOrderBtn}`}
                variant="extended"
                color="primary"
                size="large"
                onClick={() => buyTicket(props.film.id)}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className={styles.buttonIcon}
                />
                <FormattedMessage
                  id="homepage.button.preOrder"
                  defaultMessage="Pre order"
                />
              </Fab>
              {film.description &&
                intl.formatMessage({ id: film.description }).length >
                  descriptionSizeWhileIsNotOpen && (
                  <Fab
                    className={`${styles.filmButton} ${styles.toggleDescriptionBtn}`}
                    variant="extended"
                    color="secondary"
                    size="large"
                    onClick={() => {
                      toggleDescription();
                      handleDescSizeChange();
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEllipsisH}
                      className={styles.buttonIcon}
                    />
                    {isDescriptionOpen ? (
                      <FormattedMessage
                        id="homepage.button.hide"
                        defaultMessage="Hide"
                      />
                    ) : (
                      <FormattedMessage
                        id="homepage.button.showMore"
                        defaultMessage="Show more"
                      />
                    )}
                  </Fab>
                )}
            </div>
          </div>

          <div className={styles.ratingsBlock}>
            {film.ratings &&
              film.ratings.map((rating) => (
                <div className={styles.ratingElement} key={rating._id}>
                  <Typography variant="overline" className={styles.ratingText}>
                    {rating.ratingValue} - {rating.raterName}
                  </Typography>
                  <div className={styles.ratingValueContainer}>
                    <div
                      className={styles.ratingValue}
                      style={{ width: `${rating.ratingValue * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

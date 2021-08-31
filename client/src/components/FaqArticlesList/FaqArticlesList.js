import React from 'react';
import CONSTANTS from '../../constants';
import styles from './FaqArticlesList.module.sass';
import faqs from './faqs.json';

function FaqArticlesList () {
  const mapArticles = ({ header, body }) => (
    <>
      <div className={styles.headerArticle}>{header}</div>
      <div className={styles.article}>{body}</div>
    </>
  );

  return (
    <div className={styles.articlesMainContainer}>
      <div className={styles.ColumnContainer}>{faqs[0].map(mapArticles)}</div>
      <div className={styles.ColumnContainer}>
        {faqs[1].map(mapArticles)}
        <div className={styles.headerArticle}>
          I have other questions! How can I get in touch with Squadhelp?
        </div>
        <div className={styles.article}>
          Check out our <span className={styles.orangeSpan}>FAQs</span> or send
          us a <span className={styles.orangeSpan}>message</span>. For
          assistance with launching a contest, you can also call us at{' '}
          <a
            style={{ textDecoration: 'none' }}
            href={`tel:${CONSTANTS.CONTACTS.TEL}`}
          >
            <span>{CONSTANTS.CONTACTS.TEL}</span>
          </a>{' '}
          or schedule a{' '}
          <span className={styles.orangeSpan}>Branding Consultation</span>
        </div>
      </div>
    </div>
  );
}

export default FaqArticlesList;

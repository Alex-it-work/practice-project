import React from 'react';
import styles from './FaqArticlesList.module.sass';
import faqs from './faqs.json';

function FaqArticlesList () {
  const mapColumns = column => (
    <div className={styles.ColumnContainer}> {column.map(mapArticles)} </div>
  );

  const mapArticles = ({ header, body }) => (
    <>
      <div className={styles.headerArticle}>{header}</div>
      <div className={styles.article}>{body}</div>
    </>
  );

  return (
    <div className={styles.articlesMainContainer}>
      {faqs.map(mapColumns)}
      <div className={styles.headerArticle}>
        I have other questions! How can I get in touch with Squadhelp?
      </div>
      <div className={styles.article}>
        Check out our <span className={styles.orangeSpan}>FAQs</span> or send us
        a<span className={styles.orangeSpan}>message</span>. For assistance with
        launching a contest, you can also call us at (877) 355-3585 or schedule
        a<span className={styles.orangeSpan}>Branding Consultation</span>
      </div>
    </div>
  );
}

export default FaqArticlesList;

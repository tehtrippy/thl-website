import React from 'react';
import Labs from '../Labs';
import { BlockCard } from '../../cards';
import { translate } from '@docusaurus/Translate';
import { HeaderDescription } from '../../typography';
import styles from './styles.module.css';
import clsx from 'clsx';

const LargeScreenLabs = ({ labs }) => {
  return (
    <Labs
      labs={labs}
      content={
        <React.Fragment>
          <BlockCard
            className={styles.blockCard}
            content={
              <div>
                <HeaderDescription
                  text={translate({ message: 'lab.word' })}
                  className={styles.labWord}
                />
                <HeaderDescription
                  text={translate({ message: 'lab.noun' })}
                  className={styles.labNoun}
                />
                <HeaderDescription
                  text={translate({ message: 'lab.word.meaning' })}
                />
              </div>
            }
          />
          <HeaderDescription
            text={translate({ message: 'our.labs.description' })}
            className={clsx('container', styles.description)}
          />
        </React.Fragment>
      }
    />
  );
};

export default LargeScreenLabs;

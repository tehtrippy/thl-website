import React from 'react';
import Labs from '../Labs';
import { BlockCard } from '../../cards';
import { translate } from '@docusaurus/Translate';
import { Description, SubDescription } from '../../typography';
import styles from './styles.module.css';
import clsx from 'clsx';

const SmallScreenLabs = ({ labs }) => {
  return (
    <Labs
      labs={labs}
      content={
        <React.Fragment>
          <BlockCard
            className={styles.blockCard}
            content={
              <div>
                <SubDescription
                  text={translate({ message: 'lab.word' })}
                  className={styles.labWord}
                />
                <SubDescription
                  text={translate({ message: 'lab.noun' })}
                  className={styles.labNoun}
                />
                <SubDescription
                  text={translate({ message: 'lab.word.meaning' })}
                />
              </div>
            }
          />
          <Description
            text={translate({ message: 'our.labs.description' })}
            className={clsx('container', styles.description)}
          />
        </React.Fragment>
      }
    />
  );
};

export default SmallScreenLabs;

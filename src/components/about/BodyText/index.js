import React from 'react';
import { translate } from '@docusaurus/Translate';
import {
  HighlightHeader,
  Header,
  SubHeader,
  HeaderDescription,
  Description,
} from '../../typography';
import { useIsLargeScreen } from '../../../hooks/media-query';
import styles from './styles.module.css';

const BodyText = ({ style, className }) => {
  const isLargeScreen = useIsLargeScreen();
  return (
    <div style={style} className={className}>
      <div>
        <HighlightHeader text={translate({ message: 'about.title' })} />
      </div>
      <div
        className={
          isLargeScreen ? styles.largeSeparator : styles.defaultSeparator
        }
      >
        <HeaderDescription
          text={translate({ message: 'about.tonghualabs.title' })}
          className={styles.tonghualabs}
        />
        <Description
          text={translate({ message: 'about.tonghualabs.description' })}
          className={styles.tonghualabsDescription}
        />
      </div>
      <div
        className={
          isLargeScreen ? styles.largeSeparator : styles.defaultSeparator
        }
      >
        <SubHeader
          text={translate({ message: 'about.our.mission.title' })}
          className={styles.ourMission}
        />
        <HeaderDescription
          text={translate({ message: 'about.our.mission.description' })}
          className={styles.ourMissionDescription}
        />
        <Description
          text={translate({ message: 'about.our.mission.sub.description' })}
        />
      </div>
    </div>
  );
};

export default BodyText;

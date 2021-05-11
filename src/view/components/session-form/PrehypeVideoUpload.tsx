import * as React from 'react';

import { Icon } from '~/view/components/ui-kit/icon';
import styles from '~/view/pages/streaming-page/styles.pcss';

export const PrehypeVideoUpload: React.FC = () => {
  return (
    <div>
      <h3>pre-hype video</h3>
      <div>
        <p>
          <Icon name="upload" className={styles['big-icon']} />
          <p>Upload video</p>
          <p>MP4, duration limit - 16 min</p>
        </p>
      </div>
    </div>
  );
};

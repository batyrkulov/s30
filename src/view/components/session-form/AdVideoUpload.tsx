import * as React from 'react';

import { Icon } from '~/view/components/ui-kit/icon';
import styles from '~/view/pages/streaming-page/styles.pcss';

export const AdVideoUpload: React.FC = () => {
  return (
    <div>
      <h3>advertisement videos</h3>
      <div>
        <p>
          <Icon name="upload" className={styles['big-icon']} />
          <p>Upload videos</p>
          <p>MP4, duration limit - 1 min</p>
        </p>
      </div>
    </div>
  );
};

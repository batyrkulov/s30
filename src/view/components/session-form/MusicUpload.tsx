import * as React from 'react';

import { Icon } from '~/view/components/ui-kit/icon';
import styles from '~/view/pages/streaming-page/styles.pcss';

export const MusicUpload: React.FC = () => {
  return (
    <div>
      <h3>music playlist</h3>
      <div>
        <p>
          <Icon name="upload" className={styles['big-icon']} />
          <p>Upload mediafile</p>
          <p>MP3, duration limit - 52 min</p>
        </p>
      </div>
    </div>
  );
};

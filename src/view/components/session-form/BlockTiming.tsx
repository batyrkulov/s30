import * as React from 'react';

import styles from '~/view/pages/streaming-page/styles.pcss';

export const BlockTiming: React.FC = () => {
  return (
    <div className={styles['selects-grid']}>
      <div>
        <div>Exercise time</div>
        <select>
          <option>45 sec</option>
          <option>60 sec</option>
          <option>12 sec</option>
        </select>
      </div>
      <div>
        <div>Break</div>
        <select>
          <option>15 sec</option>
          <option>60 sec</option>
          <option>No</option>
        </select>
      </div>
      <div />
    </div>
  );
};

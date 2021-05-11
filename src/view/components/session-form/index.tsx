import * as React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '~/types';
import { BlockType } from '~/types/models/block';
import { AdVideoUpload } from '~/view/components/session-form/AdVideoUpload';
import { BlockItem } from '~/view/components/session-form/BlockItem';
import { MusicUpload } from '~/view/components/session-form/MusicUpload';
import { PrehypeVideoUpload } from '~/view/components/session-form/PrehypeVideoUpload';

import styles from './styles.pcss';

export const SessionForm: React.FC = () => {
  const blocks = useSelector((state: RootState) => state.form.blocksValues);

  const handleSubmit = React.useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles['block-wrapper']}>
        <BlockItem block={blocks.A} type={BlockType.A} />
      </div>
      <div className={styles['block-wrapper']}>
        <BlockItem block={blocks.B} type={BlockType.B} />
      </div>
      <div className={styles['block-wrapper']}>
        <BlockItem block={blocks.C} type={BlockType.C} />
      </div>
      <div className={styles['upload']}>
        <div className={styles['upload__session-media']}>
          <PrehypeVideoUpload />
          <MusicUpload />
        </div>
        <div className={styles['upload__blocks-media']}>
          <AdVideoUpload />
        </div>
      </div>
    </form>
  );
};

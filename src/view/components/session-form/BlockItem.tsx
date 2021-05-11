import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as FormActions from '~/modules/form/actions';
import { BlockItemValues } from '~/modules/form/types';
import { BlockType } from '~/types/models/block';
import { BlockTiming } from '~/view/components/session-form/BlockTiming';
import { ExerciseItem } from '~/view/components/session-form/ExerciseItem';
import { TextInput } from '~/view/components/ui-kit/input/text';
import styles from '~/view/pages/streaming-page/styles.pcss';

interface Props {
  block: BlockItemValues;
  type: BlockType;
}

export const BlockItem: React.FC<Props> = ({ block, type }) => {
  const dispatch = useDispatch();

  const handleBlokInputChange = React.useCallback(
    e => {
      dispatch(
        FormActions.changeBlockValues({
          blockCode: type,
          values: { [e.target.name]: e.target.value },
        }),
      );
    },
    [type],
  );

  const addExercise = React.useCallback(() => {
    dispatch(FormActions.addExercise({ blockType: type }));
  }, [type]);

  /*  const resetExercises = React.useCallback(() => {
    dispatch(FormActions.resetExercises({ blockType: type }));
  }, [type]); */

  return (
    <>
      <div className={styles['block-grid']}>
        <div>
          <div className={styles['with-border']}>
            <div className={styles['block-row']}>
              <div>
                <div className={styles['white-title']}>
                  {type}
                  Block
                </div>
                <TextInput
                  placeholder="ENTER NAME..."
                  value={block.name}
                  name="name"
                  onChange={handleBlokInputChange}
                />
              </div>
              <div>
                <div className={styles['white-title']}>sets</div>
                <div className={styles['white-title']}>reps</div>
                <div className={styles['white-title']}>tempo</div>
              </div>
            </div>
            {block.exercises.map((exercise, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ExerciseItem key={index} exercise={exercise} blockType={type} index={index} />
            ))}
            <div className={styles['buttons-grid']}>
              <button onClick={addExercise}>Add exercise line</button>
            </div>
          </div>
        </div>
        <div>
          <button className={styles['share-button']}>streaming link</button>
        </div>
        <BlockTiming />
      </div>
    </>
  );
};

import * as React from 'react';
import { useDispatch } from 'react-redux';

import * as FormActions from '~/modules/form/actions';
import { ExerciseItemValues } from '~/modules/form/types';
import { BlockType } from '~/types/models/block';
import { TextInput } from '~/view/components/ui-kit/input/text';
import styles from '~/view/pages/streaming-page/styles.pcss';

interface Props {
  exercise: ExerciseItemValues;
  blockType: BlockType;
  index: number;
}

export const ExerciseItem: React.FC<Props> = ({ exercise, blockType, index }) => {
  const dispatch = useDispatch();

  /* const removeExercise = React.useCallback(() => {
    dispatch(FormActions.removeExercise({ blockType, index }));
  }, [blockType, index]); */

  const handleExerciseInputChange = React.useCallback(
    e => {
      dispatch(
        FormActions.changeExerciseValues({
          blockCode: blockType,
          index,
          values: { [e.target.name]: e.target.value },
        }),
      );
    },
    [blockType, index],
  );

  const handleTempoChange = React.useCallback(
    (target: { index: number; value: string }) => {
      dispatch(
        FormActions.changeTempoValue({
          blockType,
          exerciseIndex: index,
          tempoIndex: target.index,
          value: target.value,
        }),
      );
    },
    [blockType, index],
  );

  return (
    <>
      <div className={styles['block-item-grid']}>
        <div>
          <div className={styles['white-title-secondary']}>{`${blockType}${index + 1}`}</div>
          <TextInput
            variant="first"
            placeholder="Enter the name of exercise..."
            name="name"
            value={exercise.name}
            onChange={handleExerciseInputChange}
          />
        </div>
        <div>
          <div>
            <TextInput
              variant="first"
              name="sets"
              value={`${exercise.sets}`}
              onChange={handleExerciseInputChange}
            />
          </div>
          <div>
            <TextInput
              variant="first"
              name="reps"
              value={`${exercise.reps}`}
              onChange={handleExerciseInputChange}
            />
          </div>
          <div>
            {exercise.tempo.map((value, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TempoInput key={index} index={index} value={value} onChange={handleTempoChange} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface TempoInputProps {
  index: number;
  value: string;
  onChange: (target: { index: number; value: string }) => void;
}

const TempoInput: React.FC<TempoInputProps> = ({ index, value, onChange }) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ index, value: e.target.value });
    },
    [index, onChange],
  );

  return <TextInput variant="first" name="tempo" value={value} onChange={handleChange} />;
};

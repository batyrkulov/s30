/*
import classNames from 'classnames';
import * as React from 'react';

import { Icon } from '~/view/components/ui-kit/icon';
import { TextInput } from '~/view/components/ui-kit/input/text';

import styles from './styles.pcss';

export const StreamingPage: React.FC = React.memo(() => {
  return (
    <>
      <div className={styles['with-margin']}>
        <div className={styles['local-head']}>
          <div>
            <h1>drip drip</h1>
            <div>
              <Icon name="arrow-down" className={styles['big-icon']} />
            </div>
          </div>
          <div>
            <button>start</button>
          </div>
        </div>
      </div>
      <div className={classNames(styles['with-margin'], styles['fill-bg'])}>
        {blocks.map(b => (
          <div className={styles['block-grid']}>
            <div>
              <div className={styles['with-border']}>
                <div className={styles['block-row']}>
                  <div>
                    <div className={styles['white-title']}>
                      {b.label}
                      Block
                    </div>
                    <TextInput placeholder="ENTER NAME..." value={b.name} />
                  </div>
                  <div>
                    <div className={styles['white-title']}>sets</div>
                    <div className={styles['white-title']}>reps</div>
                    <div className={styles['white-title']}>tempo</div>
                  </div>
                </div>
                {b.exs.map((e: any) => (
                  <div className={styles['block-item-grid']}>
                    <div>
                      <div className={styles['white-title-secondary']}>
                        {b.label}
                        {e.number}
                      </div>
                      <TextInput
                        variant="first"
                        placeholder="Enter the name of exercise..."
                        value={e.title}
                        onChange={() => console.log()}
                      />
                    </div>
                    <div>
                      <div>
                        <TextInput variant="first" value={e.set} onChange={() => console.log()} />
                      </div>
                      <div>
                        <TextInput variant="first" value={e.rep} onChange={() => console.log()} />
                      </div>
                      <div>
                        <TextInput
                          variant="first"
                          value={e.tempo[0]}
                          onChange={() => console.log()}
                        />
                        <TextInput
                          variant="first"
                          value={e.tempo[1]}
                          onChange={() => console.log()}
                        />
                        <TextInput
                          variant="first"
                          value={e.tempo[2]}
                          onChange={() => console.log()}
                        />
                        <TextInput
                          variant="first"
                          value={e.tempo[3]}
                          onChange={() => console.log()}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <div className={styles['buttons-grid']}>
                  <button onClick={() => console.log()}>Add exercise line</button>
                  <button onClick={() => console.log()}>delete lines</button>
                  <div />
                </div>
              </div>
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
            </div>
            <div>
              <button className={styles['share-button']}>streaming link</button>
            </div>
          </div>
        ))}
        <div className={styles['upload-box']}>
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
          <div />
        </div>
        <div className={styles['upload-box-second']}>
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
        </div>
      </div>
    </>
  );
});
*/

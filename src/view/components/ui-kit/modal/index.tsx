import classNames from 'classnames';
import * as React from 'react';
import { createPortal } from 'react-dom';

import { Icon } from '~/view/components/ui-kit/icon';

import styles from './styles.pcss';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  hideCloseIcon?: boolean;
  withoutPadding?: boolean;
}

const modalRoot = document.getElementById('modal-root');

const DEFAULT_ZINDEX = 100;
let lastZIndex = DEFAULT_ZINDEX;

export const Modal: React.FC<ModalProps> = React.memo(
  ({ isOpen, onClose = () => false, children, hideCloseIcon = false, withoutPadding = false }) => {
    const [element] = React.useState(() => document.createElement('div'));
    const container = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (isOpen && container.current) {
        // eslint-disable-next-line no-plusplus
        container.current.style.zIndex = `${++lastZIndex}`;
      }
    }, [isOpen]);

    React.useEffect(() => {
      modalRoot?.appendChild(element);

      return () => {
        modalRoot?.removeChild(element);
      };
    }, [element]);

    return createPortal(
      <>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          ref={container}
          onClick={onClose}
          className={classNames(styles['container'], { [styles['container--open']]: isOpen })}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            className={classNames(styles['content-wrapper'], {
              [styles['content-wrapper--no-padding']]: withoutPadding,
            })}
            onClick={e => e.stopPropagation()}
          >
            {!hideCloseIcon && (
              <button type="button" onClick={onClose} className={styles['close-button']}>
                <Icon name="close" />
              </button>
            )}
            {children}
          </div>
        </div>
      </>,
      element,
    );
  },
);

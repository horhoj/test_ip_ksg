import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import * as iconList from '../../../assets/iconList';
import styles from './LeftMenuItem.module.scss';

interface LeftMenuItemProps {
  text: string;
  icon: JSX.Element;
  link?: string | null;
  onClick?: (() => void) | null;
  isParentOpen?: boolean | null;
}

export const LeftMenuItem: FC<LeftMenuItemProps> = ({
  icon,
  text,
  onClick = null,
  link = null,
  children,
  isParentOpen = null,
}) => {
  const core = (
    <>
      <span className={styles.svgWrap}>{icon}</span>
      <span className={styles.text}>{text}</span>
      {isParentOpen !== null && (
        <span
          className={classNames(
            styles.childrenIndicator,
            isParentOpen && styles.childrenIndicatorOpen,
          )}
        >
          {iconList.leftMenuItemOpenChildrenIndicator}
        </span>
      )}
    </>
  );

  return (
    <>
      {link ? (
        <NavLink
          to={link}
          className={(state) =>
            classNames(
              styles.wrapNavLink,
              state.isActive && styles.wrapNavLinkActive,
            )
          }
          end
          onClick={() => onClick && onClick()}
        >
          {core}
        </NavLink>
      ) : (
        <button
          className={styles.wrapButton}
          onClick={() => onClick && onClick()}
        >
          {core}
        </button>
      )}
      {isParentOpen && children && (
        <div className={styles.childrenWrap}>{children}</div>
      )}
    </>
  );
};

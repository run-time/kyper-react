import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { useTokens } from '@kyper/tokenprovider'

const PLACEMENT = {
  LEFT: 'left',
  RIGHT: 'right',
}

const POSITION = {
  ABSOLUTE: 'absolute',
  RELATIVE: 'relative',
}

const propTypes = {
  className: PropTypes.string,
  getItemProps: PropTypes.func.isRequired,
  getMenuProps: PropTypes.func.isRequired,
  highlightedIndex: PropTypes.number,
  isOpen: PropTypes.bool,
  isScrollable: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placement: PropTypes.oneOf([PLACEMENT.LEFT, PLACEMENT.RIGHT]),
  position: PropTypes.oneOf([POSITION.ABSOLUTE, POSITION.RELATIVE]),
  width: PropTypes.number,
}

const defaultProps = {
  isScrollable: true,
  placement: PLACEMENT.LEFT,
  position: POSITION.ABSOLUTE,
}

export const SelectDropDown = ({
  className,
  getItemProps,
  getMenuProps,
  highlightedIndex,
  isOpen,
  isScrollable,
  placement,
  position,
  items,
  width,
}) => {
  const tokens = useTokens()
  const styles = getDropdownStyle(tokens)
  const menuProps = getMenuProps()
  // TODO: portal when scrollable?

  return (
    <ul
      className={`${styles.container} ${className} ${
        isScrollable ? 'scrollable' : ''
      } ${position} ${placement}`}
      style={{
        ...(width ? { width } : {}),
        ...(items.length && isOpen ? { padding: tokens.Spacing.Tiny } : { padding: 0 }),
      }}
      {...menuProps}
    >
      {isOpen &&
        items.map((item, index) => (
          <li
            className={styles.item}
            key={`${item.label}${index}`}
            style={{
              ...(highlightedIndex === index ? styles.itemHighlighted : {}),
            }}
            {...getItemProps({ item: item.label, index })}
          >
            {item.label}
          </li>
        ))}
    </ul>
  )
}

const getDropdownStyle = tokens => ({
  container: css({
    zIndex: 100,
    width: '100%',
    position: 'relative',
    color: tokens.TextColor.Default,
    boxSizing: 'border-box',
    boxShadow: tokens.BoxShadow.DropdownMenu,
    borderRadius: tokens.BorderRadius.DropdownMenu,
    fontSize: tokens.FontSize.DropdownMenu,
    backgroundColor: tokens.BackgroundColor.DropdownMenu,
    marginTop: tokens.Spacing.Tiny,
    ':focus': {
      outline: 'none',
    },
    '&.scrollable': {
      maxHeight: 300,
      overflow: 'auto',
    },
    '&.absolute': {
      position: 'absolute',
    },
    '&.left': {
      left: 0,
    },
    '&.right': {
      right: 0,
    },
  }),
  item: css({
    listStyle: 'none',
    cursor: 'pointer',
    padding: tokens.Spacing.XSmall,
    paddingTop: tokens.Spacing.Small,
    borderRadius: tokens.BorderRadius.DropdownMenu,
    fontSize: tokens.FontSize.DropdownItem,
    backgroundColor: tokens.BackgroundColor.DropdownMenu,
    marginBottom: tokens.Spacing.Tiny,
    ':last-child': {
      marginBottom: 0,
    },
  }),
  itemHighlighted: {
    backgroundColor: tokens.BackgroundColor.DropdownMenuItemActive,
    color: tokens.TextColor.DropdownMenuItemActive,
  },
})

SelectDropDown.defaultProps = defaultProps
SelectDropDown.propTypes = propTypes

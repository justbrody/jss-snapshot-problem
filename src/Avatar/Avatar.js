import React from 'react'
import injectSheet from 'react-jss'
import clsx from 'clsx'

export const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(20),
    borderRadius: '50%',
    overflow: 'hidden',
    userSelect: 'none'
  },
  colorDefault: {
    color: theme.palette.background.default,
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[600]
  },
  img: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover'
  }
})

const Avatar = React.forwardRef(function Avatar (props, ref) {
  const {
    alt,
    children: childrenProp,
    childrenClassName: childrenClassNameProp,
    classes,
    className: classNameProp,
    component: Component = 'div',
    imgProps,
    sizes,
    src,
    srcSet,
    ...other
  } = props

  let children = null
  const img = src || srcSet

  if (img) {
    children = (
      <img
        alt={alt}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        className={classes.img}
        {...imgProps}
      />
    )
  } else if (childrenClassNameProp && React.isValidElement(childrenProp)) {
    children = React.cloneElement(childrenProp, {
      className: clsx(childrenClassNameProp, childrenProp.props.className)
    })
  } else {
    children = childrenProp
  }

  return (
    <Component
      className={clsx(
        classes.root,
        classes.system,
        {
          [classes.colorDefault]: !img
        },
        classNameProp
      )}
      ref={ref}
      {...other}
    >
      {children}
    </Component>
  )
})

export default injectSheet(styles)(Avatar)

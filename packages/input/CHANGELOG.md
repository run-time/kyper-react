## [1.1.6] - 09-21-2020

- **ADDED** - New ariaHideLabel prop for PasswordInput translated aria-label hide button 
- **ADDED** - New ariaShowLabel prop for PasswordInput translated aria-label show button 

## [1.1.5] - 09-04-2020

- **FIXED** - fix undefined arguments in TextInput styles function

## [1.1.4] - 08-27-2020

- **FIXED** - Fix bad publish

## [1.1.3] - 08-27-2020

- **ADDED** - Aria label for accurate allowToggle hide/show button state

## [1.1.2] - 08-17-2020

- **ADDED** - search input storybook example
- **FIXED** - padding on left icon aligns with text

## [1.1.1] - 07-15-2020

- **FIXED** - removed flexbox alignment for checkbox and radio components so that it works in all browsers

## [1.1.0] - 07-13-2020

- **FIXED** - htmlFor now defaults to the element id instead of name fixing [Issue 25](https://gitlab.mx.com/mx/kyper-react/-/issues/25)
- **FIXED** - add box sizing to checkbox to fix position
- **FIXED** - add cursor:pointer to radio and checkbox labels
- **FIXED** - add flexbox to ToggleBase layout to fix label and checkbox/radio button alignment
- **ADDED** - Support for aria-invalid and aria-describedby to the error message and input description.
- **CHANGED** - updated mx-design-tokens to fix the checkbox label margin

## [1.0.0] - 06-23-2020

- **FIXED** - Icon position is not affected by error messages
- **FIXED** - Password Input icon alignment in button fixed

## [1.0.0-beta.5] - 05-26-2020

- **CHANGED** - Moved devDependency for Icon to the parent package.

## [1.0.0-beta.4] - 05-21-2020

- **ADDED** - `label` now supports passing in an element
- **CHANGED** - Component now takes up 100% of the container

## [1.0.0-beta.3] - 05-06-2020

- **CHANGED** - TextInput now supports no label.
- **CHANGED** - Refactor TextInput CSS to use boxshadow instead of border for sizing purposes.

## [1.0.0-beta.2] - 04-23-2020

- **ADDED** - New `Radio` component
- **ADDED** - New `CheckBox` component
- **CHANGED** - `@kyper/icon` updated to 1.0.0
- **CHANGED** - `@kyper/tokenprovider` updated to 1.0.0

## [1.0.0-beta.1] - 04-17-2020

- **ADDED** - New `PasswordInput` component
- **ADDED** - `iconLeft` and `iconRight`
- **REMOVED** - `iconPosition` prop in favor of `iconLeft` and `iconRight`
- **REMOVED** - `icon` element prop in favor of `iconLeft` and `iconRight`

## [1.0.0-beta.0] - 03-24-2020

- **ADDED** - Initial implementation

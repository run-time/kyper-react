### [1.2.0](https://gitlab.mx.com/mx/kyper-react/-/commits/@kyper/button@1.2.0) - 08-31-2020

- **ADDED** - `link-destructive` button variant
- **CHANGED** - `mx-design-tokens` package to v8.3.0 which included the necessary color tokens
for the `link-destructive` button variant

### [1.1.1](https://gitlab.mx.com/mx/kyper-react/-/commits/@kyper/button@1.1.1) - 05-20-2020

- **FIXED** - Removed px from lineHeight since it already has px in the token value
- **FIXED** - Set button to default to `type="button"` so that non submit buttons won't try to submit forms by default.
- **CHANGED** - Use `aria-disabled` instead of regular disabled prop and prevent default button click so that disabled buttons can still receive focus and screen readers will read that the button is disabled

### [1.1.0](https://gitlab.mx.com/mx/kyper-react/-/commits/@kyper/button@1.1.0) - 05-07-2020

- **ADDED** - ButtonGroup component for proper spacing of inline buttons.

### [1.0.1](https://gitlab.mx.com/mx/kyper-react/-/commits/@kyper/button@1.0.1) - 04-21-2020

- **FIXED** - Uses ButtonPadding from mx-design-tokens correctly.
- **FIXED** - Uses Time.Short from mx-design-tokens correctly.

### [1.0.0](https://gitlab.mx.com/mx/kyper-react/-/commits/@kyper/button@1.0.0) - 04-17-2020

- **ADDED** - Initial Release

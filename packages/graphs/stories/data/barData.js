export const dataBasic = [
  {
    value: 300,
    label: 'Jan',
    ariaLabel: 'You spent 300 dollars in January',
    disableBarLabel: true,
  },
  { value: 245, label: 'Feb', disableBarLabel: true },
  { value: 50, label: 'Mar' },
  { value: 300, label: 'Apr' },
  { value: 500, label: 'May', disableBarLabel: true, enableEmphasis: true },
  { value: 200, label: 'Jun', disableBarLabel: true },
]

export const dataGrouped = [
  { value: 0, label: 'Jan', subLabel: 'income' },
  { value: 0, label: 'Jan', subLabel: 'spending' },
  // { value: 100, label: 'Jan', subLabel: 'foo' },
  { value: 4250, label: 'Feb', subLabel: 'income' },
  { value: 2900, label: 'Feb', subLabel: 'spending', enableEmphasis: true },
  // { value: 100, label: 'Feb', subLabel: 'foo' },
  { value: 4250, label: 'Mar', subLabel: 'income' },
  { value: 5164, label: 'Mar', subLabel: 'spending' },
  // { value: 100, label: 'Mar', subLabel: 'foo' },
  { value: 4250, label: 'Apr', subLabel: 'income' },
  { value: 6892, label: 'Apr', subLabel: 'spending', enableEmphasis: true },
  // { value: 100, label: 'Apr', subLabel: 'foo' },
]

export const dataMixedValues = [
  { value: -300, label: 'Jan' },
  { value: 245, label: 'Feb' },
  { value: -50, label: 'Mar' },
  { value: 300, label: 'Apr' },
  { value: -270, label: 'May' },
  { value: 130, label: 'Jun' },
]

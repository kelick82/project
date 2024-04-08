export default {
  root: {
    class: [
      // Sizing and Shape
      'min-w-60',
      // Spacing
      //'p-1.5',
      // Colors
      'bg-LogiNavy',
    ],
  },
  menu: {
    class: [
      // Spacings and Shape
      'list-none',
      'm-0',
      'p-0',
      'outline-none',
    ],
  },
  menuitem: {
    class: [
      // Space
      'first:mt-0 mt-1',
    ],
  },
  content: ({ context }) => ({
    class: [
      //Shape
      'rounded-md',

      // Colors
      {
        'text-LogyWhite dark:text-surface-0': !context.focused,
        'bg-surface-100 text-LogyWhite dark:bg-surface-300/10 dark:text-primary-400':
          context.focused,
      },

      // Transitions
      'transition-shadow',
      'duration-200',

      // States
      //'hover:text-primary-600 dark:hover:text-primary-400',
      //'hover:bg-surface-100 dark:hover:bg-surface-400/10',
    ],
  }),
  action: {
    class: [
      'relative',

      // Font
      'font-semibold',

      // Flexbox
      'flex',
      'items-center',

      // Spacing
      'py-2',
      'px-3',

      // Misc
      'no-underline',
      'overflow-hidden',
      'cursor-pointer',
      'select-none',
    ],
  },
  icon: {
    class: [
      // Spacing
      'mr-2',
      'leading-6',
      'text-sm',
    ],
  },
  label: {
    class: ['leading-6', 'text-sm'],
  },
  submenuheader: {
    class: [
      // Font
      'font-semibold',
      'text-xs leading-6',

      // Spacing
      'm-0 ',
      'py-1',
      'px-3',

      // Shape
      'rounded-tl-none',
      'rounded-tr-none',

      // Colors
      'bg-LogiNavy dark:bg-surface-700',
      'text-LogiWhite dark:text-surface-0/60',
    ],
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0',
  },
  end: {
    class: ['fixed bottom-0 left-0 m-5'],
  },
};

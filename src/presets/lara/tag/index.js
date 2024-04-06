export default {
    root: ({ props }) => ({
        class: [
            //Font
            'text-xs font-bold',

            //Alignments
            'inline-flex items-center justify-center',

            //Spacing
            'px-2 py-1',

            //Shape
            {
                'rounded-md': !props.rounded,
                'rounded-full': props.rounded
            },

            //Colors
            // 'text-white dark:text-surface-900',
            {
                'bg-primary-200 text-primary-900 dark:bg-primary-400': props.severity == null || props.severity == 'primary',
                'bg-green-200 text-green-800 dark:bg-green-400': props.severity == 'success',
                'bg-blue-200 text-blue-900 dark:bg-blue-400': props.severity == 'info',
                'bg-orange-200 text-orange-900 dark:bg-orange-400': props.severity == 'warning',
                'bg-red-200 text-red-900 dark:bg-red-400': props.severity == 'danger'
            }
        ]
    }),
    value: {
        class: 'leading-normal'
    },
    icon: {
        class: 'mr-1 text-sm'
    }
};

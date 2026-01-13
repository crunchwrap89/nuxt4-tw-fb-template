// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        '@stylistic/semi': ['error', 'always'],
        '@stylistic/indent': 2,
        '@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
        '@stylistic/no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
        '@typescript-eslint/no-explicit-any': 'off',
    },
}).prepend({
    ignores: [
        'functions/**',
        'dist/**',
        'node_modules/**',
    ],
});

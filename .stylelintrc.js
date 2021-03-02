module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard', 'stylelint-config-sass-guidelines'],
  rules: {
    // Overrides for stylelint-config-recommended
    'no-descending-specificity': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ["after-same-name"],
        ignore: ["after-comment", "blockless-after-blockless", "first-nested"]
      }
    ],
    'color-hex-length': ['long'],
    'declaration-block-single-line-max-declarations': [0],
    // Overrides for stylelint-config-sass-guidelines
    'scss/dollar-variable-colon-space-after': ["always-single-line"],
    'max-nesting-depth': null,
    'scss/dollar-variable-pattern': null,
    'selector-no-qualifying-type': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-max-compound-selectors': null,

    // Custom
    indentation: [2, { baseIndentLevel: 1 }],
    'scss/at-mixin-argumentless-call-parentheses': 'never',
  }
};

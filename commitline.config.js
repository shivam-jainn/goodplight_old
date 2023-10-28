module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'chore', 'docs', 'style', 'refactor', 'test']],
      'scope-enum': [2, 'always', ['frontend', 'backend', 'other']],
      'scope-empty': [2, 'never'],
    },
  };
  
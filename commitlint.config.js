module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'subject-case': [2, 'always', 'sentence-case'],
    "type-enum": [2, "always", ["ci", "docs", "feat", "fix", "perf", "refactor", "test"]]
  }
}
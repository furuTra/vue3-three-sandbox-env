/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    './vue-story-three',
    {
      root: './vue-story-three',
      package: './package.json',
      tsconfig: './tsconfig.json',
      snippetFolder: './.vscode/vetur/snippets',
      globalComponents: [
        './src/components/**/*.vue'
      ]
    }
  ]
}
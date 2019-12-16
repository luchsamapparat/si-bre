module.exports = {
  name: 'overview',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/overview',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

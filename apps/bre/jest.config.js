module.exports = {
  name: 'bre',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bre',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

export const COMMIT_TYPES = {
  feat: {
    emoji: '๐',
    description: 'Add new feature',
    release: true // que si haces un commit de este tipo, luego deberรญas hacer un release
  },
  fix: {
    emoji: '๐',
    description: 'Submit a fix to a bug',
    release: true
  },
  perf: {
    emoji: 'โก๏ธ',
    description: 'Improve performance',
    release: true
  },
  refactor: {
    emoji: '๐  ',
    description: 'Refactor code',
    release: true
  },
  docs: {
    emoji: '๐',
    description: 'Add or update documentation',
    release: false
  },
  test: {
    emoji: '๐งช',
    description: 'Add or update tests',
    release: false
  },
  build: {
    emoji: '๐๏ธ ',
    description: 'Add or update build scripts',
    release: false
  }
}

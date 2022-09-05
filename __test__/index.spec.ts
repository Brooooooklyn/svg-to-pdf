import { promises as fs, readFileSync } from 'fs'
import { join } from 'path'

import test from 'ava'

import { convert } from '../index'

const EXAMPLE = readFileSync(join(__dirname, 'fixture.svg'))

test('should be able to convert example', async (t) => {
  await t.notThrowsAsync(async () => {
    const buffer = convert(EXAMPLE)
    await fs.writeFile(join(__dirname, 'fixture.pdf'), buffer)
  })
})

import { promises as fs, readFileSync } from 'fs'
import { join } from 'path'

import test from 'ava'

import { convert } from '../index'

const EXAMPLE = readFileSync(join(__dirname, 'fixture.svg'))
const SATORI_ADVANCE_EXAMPLE = readFileSync(join(__dirname, 'satori-advance.svg'))

test('should be able to convert example', async (t) => {
  await t.notThrowsAsync(async () => {
    const buffer = convert(EXAMPLE)
    await fs.writeFile(join(__dirname, 'fixture.pdf'), buffer)
  })
})

test('should be able to convert satori-advance example', async (t) => {
  await t.notThrowsAsync(async () => {
    const buffer = convert(SATORI_ADVANCE_EXAMPLE)
    await fs.writeFile(join(__dirname, 'satori-advance.pdf'), buffer)
  })
})

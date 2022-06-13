import { omitUndefined } from './common'

describe('utils', () => {
  describe('common', () => {
    it('omitUndefined', () => {
      const result = omitUndefined({ a: 1, b: undefined })
      expect(result).toEqual({ a: 1 })
    })
  })
})

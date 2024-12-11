import interpolateModel from './interpolate-model'

describe('interpolateModel', () => {
  it('interpolates model properties into a string', () => {
    const model = {
      key: 'abc',
      email: 'test@example.com',
      updatedAt: new Date().toISOString(),
    }

    expect(interpolateModel('key: :key, email: :email', model)).toBe(
      'key: abc, email: test@example.com'
    )
  })
})

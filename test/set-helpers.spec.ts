import { delay, filename, googleChromeRpccBufferSize, range, scale, timeout, webhook } from '../src'

test('Test `filename` function', () => {
  const object = {}
  filename('index.html')(object)
  expect(object).toEqual({ resultFilename: 'index.html' })
})

test('Test `timeout` function', () => {
  const object = {}
  timeout(99)(object)
  expect(object).toEqual({ waitTimeout: 99 })
})

test('Test `delay` function', () => {
  const object = {}
  delay(99)(object)
  expect(object).toEqual({ waitDelay: 99 })
})

test('Test `webhook` function', () => {
  const object = {}
  webhook('http://1')(object)
  expect(object).toEqual({ webhookURL: 'http://1' })
  webhook('http://2', 99)(object)
  expect(object).toEqual({ webhookURL: 'http://2', webhookURLTimeout: 99 })
})

test('Test `googleChromeRpccBufferSize` function', () => {
  const object = {}
  googleChromeRpccBufferSize(9999)(object)
  expect(object).toEqual({ googleChromeRpccBufferSize: 9999 })
})

test('Test `range` function', () => {
  const object = {}
  range('1-1')(object)
  expect(object).toEqual({ pageRanges: '1-1' })
})

test('Test `scale` function', () => {
  const object = {}
  scale(0.75)(object)
  expect(object).toEqual({ scale: 0.75 })
})

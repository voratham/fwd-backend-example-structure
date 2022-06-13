import _ from 'lodash'

export const omitUndefined = (val: any) => _.pickBy(val, _.identity)

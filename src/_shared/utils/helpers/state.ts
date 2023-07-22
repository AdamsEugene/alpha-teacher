import localForage from 'localforage'
import { ThemeInterface } from '../../theme/@types'
import K from '../../constants'
import { ColorPayload } from '../../@types'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function mergeState<T extends object, U extends T>(
  state: T,
  storedState: U | null,
): T {
  const keys = Object.keys(state) as Array<keyof T>
  return keys.reduce((acc, key) => {
    const value = ((storedState ?? {}) as any)[key as keyof U]
    const data =
      key === 'version' ? state[key] : Object.assign({}, state[key], value)
    return Object.assign({}, acc, { [key]: data })
  }, {} as T)
}

export function saveThemeLocally(data: ThemeInterface, payload: ColorPayload) {
  const state = data.colors
  const key = payload.main
  let newState
  if (payload.sub2) {
    newState = {
      ...state,
      [key]: {
        ...state[key],
        [payload.sub1]: {
          ...(state[key] as any)[payload.sub1],
          [payload.sub2]: payload.color,
        },
      },
    }
  } else {
    newState = {
      ...state,
      [key]: { ...state[key], [payload.sub1]: payload.color },
    }
  }
  localForage.setItem(K.STORAGE_KEYS.REDUX_STATE, { colors: newState })
}

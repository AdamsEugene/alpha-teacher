import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'

export default function useRedux() {
  const _useDispatch = useDispatch<AppDispatch>()
  const _useSelector: TypedUseSelectorHook<RootState> = useSelector
  const state = _useSelector((state) => state)
  return { dispatch: _useDispatch, state }
}

import {thunk,create} from '../__mocks__/middlewareMock'

describe('Middleware (dispatch, thunk and state)',()=>{
    
    test('passes through non-function action', () => {
        const { next, invoke } = create()
        const action = { type: 'TEST' }
        invoke(action)
        expect(next).toHaveBeenCalledWith(action)
      })
      
      test('calls the function', () => {
        const { invoke } = create()
        const fn = jest.fn()
        invoke(fn)
        expect(fn).toHaveBeenCalled()
      })
      
      test('passes dispatch and getState', () => {
        const { store, invoke } = create()
        invoke((dispatch, getState) => {
          dispatch('TEST DISPATCH')
          getState()
        })
        expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
        expect(store.getState).toHaveBeenCalled()
      })
})
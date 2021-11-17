
import React from 'react'
import { render, screen,cleanup } from '@testing-library/react'
import {reportsReducer} from '../redux/reducers/reports'
import {getReports} from '../redux/actions/'
import * as types from '../redux/constants/reports'
import {Mockdata} from '../__mocks__/reportMock'


afterEach(cleanup);


describe("reducers",()=>{
    it("should return the initial state",()=>{
        expect(reportsReducer(undefined, {})).toEqual(
            { 
                reports:[],
                isLoading:true,
                errMess:null,
            }
          )
    })

    test('should handle a report being added to an empty list', () => {
        const previousState = []
        
        expect(reportsReducer(previousState,getReports(Mockdata.reports[0]) )).toEqual(
          {
            reports: Mockdata.reports[0],
            isLoading: false,
            errMess: null
          }
        )
      })
})
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen,fireEvent } from '../test-utils'
import Dashboard from '../pages/dashboard/index'
import {server} from '../__mocks__/server'
import { Mockdata } from '../__mocks__/reportMock';
import * as redux from 'react-redux'
import renderer from 'react-test-renderer'


// Enable API mocking before tests.
beforeAll(()=>server.listen());
// Reset any runtime request handlers we may add during the tests.
afterEach(()=>server.resetHandlers());
// Disable API mocking after the tests are done.
afterAll(()=>server.close());


  
describe("Dashboard",()=>{
  
   
    it("it renders the dashboard correctly",()=>{
        render(<Dashboard />);
        expect(screen.getByText('Report Dashboard')).toBeInTheDocument();
    })

    test('receives report on mount', async()=>{
        
       render(<Dashboard/>);
      
       expect(screen.getByText('fetching reports . . .')).toBeInTheDocument();
       await expect(screen.queryByText('temperature changes in tema')).not.toBeInTheDocument();
    })

    
})
/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen,fireEvent } from '../test-utils'
import Dashboard from '../pages/dashboard/index'
import {server} from '../__mocks__/server'
import { Mockdata } from '../__mocks__/reportMock';
import * as reactRedux  from 'react-redux'
import renderer from 'react-test-renderer'
import { tasksHandlerException } from '../__mocks__/handlers';
import { cleanup } from '@testing-library/react';


// Enable API mocking before tests.
beforeAll(()=>server.listen());
// Reset any runtime request handlers we may add during the tests.
afterEach(()=>
server.resetHandlers()
);
// Disable API mocking after the tests are done.
afterAll(()=>server.close());



const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    
  })
describe("Dashboard",()=>{
     
   
    it("it renders the dashboard correctly",()=>{
        render(<Dashboard />);
        expect(screen.getByText('Report Dashboard')).toBeInTheDocument();
    })

    test('display loading icon before report is received', async()=>{
       
       render(<Dashboard/>);
      
       expect(screen.getByText('fetching reports . . .')).toBeInTheDocument();
       await expect(screen.queryByText('temperature changes in tema')).not.toBeInTheDocument();
    })

    test('displays reports when report is received', async()=>{
        useSelectorMock.mockReturnValue({reports:[Mockdata.reports],socials:[Mockdata.social]})
       render(<Dashboard/>);
      
       expect(screen.queryByText('fetching reports . . .')).not.toBeInTheDocument();
       await expect(screen.getByText('acme')).toBeInTheDocument();
    })

    it('contains a filter textBox',()=>{
        render(<Dashboard/>)
        expect(screen.getByTitle('searchInput')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('filter by title or description')).toBeInTheDocument();
    })

   

    it('matches snapshot',()=>{
        useSelectorMock.mockReturnValue({reports:[Mockdata.reports],socials:[Mockdata.social]})
        const dashboard = renderer.create(<Dashboard/>).toJSON();
        expect(dashboard).toMatchSnapshot();
    })
})
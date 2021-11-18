/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen,fireEvent } from '../test-utils'
import Report from '../pages/dashboard/[id]'
import renderer from 'react-test-renderer';
import { async } from 'rxjs';
import {Mockdata} from '../__mocks__/reportMock';
import { ToastProvider } from "react-toast-notifications";
import * as reactRedux  from 'react-redux'


jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn()
  }))
  
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

jest.mock('next/router', () => require('next-router-mock'));

afterEach(() => {
    jest.restoreAllMocks();
  });
 const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })

describe("edit page",()=>{
   
    it("it renders page  correctly",async ()=>{
        render(<Report report={[Mockdata.reports]} social={[Mockdata.social]}/>);
        useRouter.mockImplementationOnce(() => ({
          query:'bjdtphxCMw',
          }))
        
        await expect(useRouter.query);
        const editButton = screen.getByText('Edit')
        expect(editButton).toBeInTheDocument();

       await expect(screen.getByText('temperature changes in tema')).toBeInTheDocument();

        await expect(screen.getByTitle('editBtn')).toHaveTextContent('Edit');
       
    })

   
})
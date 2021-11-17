/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen,fireEvent } from '../test-utils'
import Report from '../pages/dashboard/[id]'
import renderer from 'react-test-renderer';
import { async } from 'rxjs';
import {Mockdata} from '../__mocks__/reportMock';


jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn()
  }))
  
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

jest.mock('next/router', () => require('next-router-mock'));

describe("edit page",()=>{
    it("it renders page with data correctly",async ()=>{
        const wrapper = render(<Report report={[Mockdata.reports]} social={[Mockdata.social]}/>);
        useRouter.mockImplementationOnce(() => ({
          query:'bjdtphxCMw',
          }))
      
       
        await expect(useRouter.query);
        const editButton = screen.getByText('Edit')
        expect(editButton).toBeInTheDocument();
        fireEvent.click(editButton);

        await expect(screen.getByText('Edit Report')).toBeInTheDocument();
        await expect(screen.getByTitle('button')).toHaveTextContent('Save changes');
    })


})
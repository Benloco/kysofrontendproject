/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen,cleanup,fireEvent } from '@testing-library/react'
import Home from '../pages/index'
import renderer from 'react-test-renderer';

afterEach(cleanup);

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn()
  }))
  
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

jest.mock('next/router', () => require('next-router-mock'));

describe('Home page',()=>{
  it("renders Home component without crashing",()=>{
    render(<Home/>)
  })

  it("should find welcome message",()=>{
    const {container}= render(<Home/>)
      const h2Tag = container.querySelector('h2');
      expect(h2Tag).toHaveTextContent('Kyso Frontend Interview Project');
  })

  it("should display my name",()=>{
      const {getByRole} = render(<Home/>);
      expect(getByRole("heading",{level:6})).toHaveTextContent('Ben Quarshie');
  })

  it("renders button correctly",()=>{
     const {getByRole}= render(<Home/>);
     const element =getByRole("button");
     expect(element).toBeInTheDocument();
     expect(element).toHaveTextContent('View Reports');
    //fireEvent.click(element);
  })

  it("should navigate accordingly",async () => {
    const { getByTestId,getByRole }=  render(<Home />);
    
    const button = getByRole("button");
    fireEvent.click(button)
    useRouter.mockImplementationOnce(() => ({
        push:"/dashboard",
      }))
   

      await expect(useRouter.push);
    
  })


  it("matches snapshot",()=>{
     const homeTree= renderer.create(<Home/>).toJSON();
     expect(homeTree).toMatchSnapshot();
  })
})
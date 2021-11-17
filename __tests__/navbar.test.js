/**
 * @jest-environment jsdom
 */

import React, { Component } from 'react'
import { render, screen,cleanup,fireEvent } from '@testing-library/react'
import Navbar from '../pages/navbar/navbar'
import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('Navbar',()=>{
    it("renders navbar without crashing",()=>{
        render(<Navbar/>)
    })

    it("renders the project title",()=>{
        render(<Navbar/>);
        const value=   screen.getByText("Kyso Frontend Project");
        expect(value).toBeInTheDocument();
    })

    it("has the project title text as is",()=>{
        render(<Navbar/>);
        const value=   screen.getByText("Kyso Frontend Project");
        expect(value).toHaveTextContent("Kyso Frontend Project");
        fireEvent.click(value);
    })
    
    it("renders navbar element (Dashboard)",()=>{
        render(<Navbar/>);
        const value=   screen.getByText("Dashboard");
        expect(value).toHaveTextContent("Dashboard");
        fireEvent.click(value);
    })

    it("matches snapshot",()=>{
       const navtree= renderer.create(<Navbar/>).toJSON();
       expect(navtree).toMatchSnapshot();
    })


})
import * as React from 'react';
import * as ReactDom from "react-dom";
import Homepage from '../pages/Homepage/Homepage';

describe("Testing input fields", ()=>{
    let container : HTMLDivElement

    beforeEach(()=>{
        container = document.createElement("div");
        document.body.appendChild(container);
        ReactDom.render(<Homepage />, container);
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    it("Render correctly homepage document", ()=>{
        expect(container.querySelector("[data-test='info-form']")).toBeInTheDocument;
        expect(container.querySelector("[data-test='name']")).toBeInTheDocument;
        expect(container.querySelector("[data-test='email']")).toBeInTheDocument;
        expect(container.querySelector("[data-test='male-gender']")?.getAttribute("value")).toBe("male");;
        expect(container.querySelector("[data-test='female-gender']")?.getAttribute("value")).toBe("female");;
        expect(container.querySelector("[data-test='submit']")?.getAttribute("value")).toBe("Submit");
    })
})
function createElement(reactElement, container) {
    /*const element = document.createElement(reactElement.type)
    element.innerHTML =reactElement.children
    element.setAttribute('href',reactElement.props.href)
    element.setAttribute('target', reactElement.props.target)

    container.appendChild(element)
    */
   const element = document.createElement(reactElement.type)
   element.innerHTML = reactElement.children

   for (const prop in reactElement.props){
        if (prop === 'children') continue;
        element.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(element)
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root');


createElement(reactElement, mainContainer)
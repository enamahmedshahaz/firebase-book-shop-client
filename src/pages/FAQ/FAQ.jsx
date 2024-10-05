

const FAQ = () => {
    return (
        <div>
            <h3 className="text-center text-2xl text-rose-400 font-bold">
                :: Welcome to FAQ Page ::
            </h3>

            <div className="join join-vertical w-full mt-6">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is React.js and Explain the concept of "components" in React.</div>
                    <div className="collapse-content">
                        <p>ReactJS is an open-source JavaScript library that is used for building user interfaces in a declarative and efficient way. It is a component-based front-end library responsible only for the view layer of an MVC (Model View Controller) architecture. React is used to create modular user interfaces and it promotes the development of reusable UI components that display dynamic data.</p>

                        <p>Components in React serve as independent and reusable code blocks for UI elements. They represent different parts of a web page and contain both structure and behavior. They are similar to JavaScript functions and make creating and managing complex user interfaces easier by breaking them down into smaller, reusable pieces.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is JSX in React, and how does it work?</div>
                    <div className="collapse-content">
                        <p>JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React. JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods. JSX converts HTML tags into react elements. With JSX you can write expressions inside curly braces { }. The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Explain the concept of "props" in React and how they are used</div>
                    <div className="collapse-content">
                        <p>Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation similar to HTML-tag attributes. Here, the data is passed down from a parent component to a child component.
                            The primary purpose of props in React is to Pass custom data to your component, Trigger state changes.
                        </p>
                    </div>
                </div>


                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is "state" in React, and how does it differ from props?</div>
                    <div className="collapse-content">
                        <p>state is managed by the component itself and can be updated using the setState() function. Unlike props, state can be modified by the component and is used to manage the internal state of the component. Changes in the state trigger a re-render of the component and its children.
                            props (short for "properties") are passed to a component by its parent component and are read-only, meaning that they cannot be modified by the component itself. props can be used to configure the behavior of a component and to pass data between components.
                        </p>
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is the purpose of the useEffect hook in React, and when would you use it?</div>
                    <div className="collapse-content">
                        <p>The useEffect hook in React is used to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering. useEffect accepts two arguments. The second argument is optional.

                        </p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default FAQ;



const HowItWorks = () => {
    return (
        <div>
            <h3 className="text-center text-2xl text-rose-400 font-bold mb-6">
                :: How It Works ::
            </h3>

            <section className="py-12 bg-rose-100 rounded-lg">
                <div className="container mx-auto px-4">
                   
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center max-w-xs">
                            <div className="bg-rose-400 rounded-full p-6 mb-4">
                                {/* Icon placeholder */}
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-rose-400 mb-2 ">Step 1: Browse</h3>
                            <p className="text-gray-600">Explore our vast collection of books and select the ones that match your interests.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center max-w-xs">
                            <div className="bg-yellow-400 rounded-full p-6 mb-4">
                                {/* Icon placeholder */}
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H3m0 0l3.5 3.5M3 12l3.5-3.5M21 12H9m0 0l3.5 3.5M9 12l3.5-3.5" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-rose-400 mb-2">Step 2: Order</h3>
                            <p className="text-gray-600">Add your favorite books to the cart and proceed to secure checkout with ease.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center max-w-xs">
                            <div className="bg-blue-400 rounded-full p-6 mb-4">
                                {/* Icon placeholder */}
                                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4H7v-1h5v-1.5a1.5 1.5 0 113 0V11h4v1h-4v4h-1v-1" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-rose-400 mb-2">Step 3: Enjoy</h3>
                            <p className="text-gray-600">Receive your books at your doorstep and dive into the stories you've always wanted to read.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HowItWorks;
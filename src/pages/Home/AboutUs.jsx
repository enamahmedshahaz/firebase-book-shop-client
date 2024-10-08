

const AboutUs = () => {
    return (
        <div>
            <h3 className="text-center text-2xl text-rose-400 font-bold mb-6">
                :: About Us ::
            </h3>

            <section className="bg-rose-100 py-12 rounded-lg">
                <div className="container mx-auto px-4">

                    <p className="text-lg text-gray-500 text-center mb-8">
                        Welcome to our bookshop, your number one source for all books. We are dedicated to providing you the best
                        selection of books, with a focus on dependability, customer service, and uniqueness. Our passion for books
                        drives us to offer readers the best curated collection in a friendly and relaxed atmosphere.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="md:w-1/2 p-4">
                            <h3 className="text-2xl font-semibold text-rose-400 mb-4">Our Mission</h3>
                            <p className="text-gray-500">
                                Our mission is to inspire a love for reading by providing a wide range of books from different genres.
                                Whether you're into fiction, non-fiction, or textbooks, we've got something for everyone. We believe in
                                the power of reading to transform lives.
                            </p>
                        </div>
                        <div className="md:w-1/2 p-4">
                            <h3 className="text-2xl font-semibold text-rose-400 mb-4">Why Choose Us?</h3>
                            <p className="text-gray-500">
                                At our bookshop, we aim to create a welcoming space where readers of all ages can find the perfect book.
                                We offer personalized recommendations and host community events, from book signings to reading groups, so
                                everyone can engage with literature in their own way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
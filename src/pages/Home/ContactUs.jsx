


import envImage from '../../assets/images/envelope.jpg'


const ContactUs = () => {
    return (
        <div>

            <h3 className="text-center text-2xl text-rose-400 font-bold mb-6">
                :: Contact Us ::
            </h3>

            <div className="flex flex-col lg:flex-row  items-center gap-8 bg-rose-100 rounded-xl">

                <div className="image-section mt-4 w-full lg:w-1/2  flex justify-center items-center">
                    <img className="w-64 rounded-xl" src={envImage}></img>
                </div>

                <div className="form-section w-full lg:w-1/2 flex flex-col gap-4 px-12 py-8">

                    <div className="name-section">
                        <div className="form-control">
                            <input type="text" placeholder="Your Full name " className="input input-bordered border-rose-400" required />
                        </div>
                    </div>
                    <div className="email-section">
                        <div className="form-control">
                            <input type="email" placeholder="Your Email" className="input input-bordered border-rose-400" required />
                        </div>
                    </div>
                    <div className="message-section">
                        <textarea className="textarea textarea-primary hover:border-rose-400 w-full border-rose-400" placeholder="Your Message"></textarea>
                    </div>

                    <div className="submit">
                        <button className="btn w-full text-white bg-rose-300">Submit </button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ContactUs;
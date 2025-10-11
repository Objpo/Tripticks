import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        console.log("Contact form:", data);
        // TODO: gửi request tới API nếu có. Hiện tại giả lập thành công:
        setStatus("success");
        setTimeout(() => setStatus(null), 4000);
    };

    return (
        <section className="ftco-section contact-section" id="contact">
            <div className="container">
                <div className="row justify-content-center pb-4">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <h2 className="mb-4">Contact Us</h2>
                    </div>
                </div>

                <div className="row d-flex contact-info mb-5">
                    <div className="col-md-4 d-flex">
                        <div className="info bg-light p-4">
                            <p><span className="fa fa-map-marker"></span> 203 Fake St. Mountain View, San Francisco, CA</p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="info bg-light p-4">
                            <p><a href="tel:+12323929210"><span className="fa fa-phone"></span> +2 392 3929 210</a></p>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="info bg-light p-4">
                            <p><a href="mailto:info@yourdomain.com"><span className="fa fa-paper-plane"></span> info@yourdomain.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-7">
                        <form className="bg-light p-4" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" type="text" className="form-control" placeholder="Your name" required />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" type="email" className="form-control" placeholder="Your email" required />
                            </div>

                            <div className="form-group">
                                <label>Subject</label>
                                <input name="subject" type="text" className="form-control" placeholder="Subject" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" cols="30" rows="7" className="form-control" placeholder="Message" required></textarea>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                            </div>

                            {status === "success" && (
                                <div className="alert alert-success">Message sent (simulated)</div>
                            )}
                        </form>
                    </div>

                    <div className="col-md-5 d-flex">
                        <div id="map" className="bg-light" style={{ width: "100%", minHeight: 350 }}>
                            {/* Nếu cần bản đồ: bạn đã load Google Maps API trong index.html, có thể render bản đồ ở đây */}
                            <p className="p-4">Map placeholder (put your map or iframe here)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

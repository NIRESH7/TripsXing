function Terms() {
    return (
        <div className="terms-page" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="content-box" style={{
                    background: '#fff',
                    padding: '60px',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <div className="text-center mb-5">
                        <h2 style={{ fontWeight: '700', color: '#333' }}>Terms & Conditions</h2>
                        <p style={{ color: '#777' }}>Last updated on Aug 8th 2024</p>
                    </div>

                    <div style={{ textAlign: 'justify', color: '#555', lineHeight: '1.8' }}>
                        <p className="mb-4">
                            For the purpose of these Terms and Conditions, The term "we", "us", "our" used anywhere on this page shall mean TRIPSXING PRIVATE LIMITED, whose registered/operational office is Tripsxing - Covai Tech Park, 4th South Cross St, Kalapatti. Coimbatore TAMIL NADU 641014. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
                        </p>

                        <h4 className="mb-3" style={{ color: '#333', marginTop: '30px' }}>Terms of Use</h4>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
                            <li className="mb-2">The content of the pages of this website is subject to change without notice.</li>
                            <li className="mb-2">Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
                            <li className="mb-2">Your use of any information or materials on our website and/or product pages is entirely at your own risk.</li>
                            <li className="mb-2">Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics.</li>
                            <li className="mb-2">All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
                        </ul>

                        <h4 className="mb-3" style={{ color: '#333', marginTop: '30px' }}>Legal Jurisdiction</h4>
                        <p className="mb-4">
                            Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India.
                        </p>

                        <h4 className="mb-3" style={{ color: '#333', marginTop: '30px' }}>Liability</h4>
                        <p className="mb-4">
                            We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
                        </p>

                        <div className="disclaimer p-4 mt-5 rounded" style={{ backgroundColor: '#f0f2f5', borderLeft: '4px solid #e10036' }}>
                            <h5 className="mb-2" style={{ color: '#333', fontWeight: 'bold' }}>Disclaimer</h5>
                            <p className="mb-0">
                                The above content is created at TRIPSXING PRIVATE LIMITED's sole discretion. Razorpay shall not be liable for any content provided here and shall not be responsible for any claims and liability that may arise due to merchant's non-adherence to it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terms;

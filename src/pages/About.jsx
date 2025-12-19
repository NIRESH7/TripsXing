function About() {
    const users = [
        {
            id: 1,
            name: "User One",
            role: "Lead Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "User Two",
            role: "Product Manager",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div className="about-page" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2>About Us</h2>
                    <p>Meet our dedicated team.</p>
                </div>

                <div className="row justify-content-center">
                    {users.map((user) => (
                        <div key={user.id} className="col-md-6 col-lg-4 mb-4">
                            <div className="content" style={{
                                border: '1px solid #ddd',
                                borderRadius: '10px',
                                padding: '30px',
                                textAlign: 'center',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                background: '#fff'
                            }}>
                                <div className="image-box mb-3">
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            margin: '0 auto',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                                <h5 style={{ color: '#e10036', marginBottom: '10px' }}>{user.name}</h5>
                                <p style={{ fontWeight: '500', color: '#666' }}>{user.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;

import '../../styles/Contact.css'
import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // You can add API call or email service here
    }

    return (
        <div className="contact-container">
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-title">Let's Capture Your Story</h1>
                    <p className="contact-subtitle">
                        Every moment deserves to be beautifully preserved. Let's discuss your vision and create something extraordinary together.
                    </p>
                </div>
            </div>

            {/* Main Contact Section */}
            <div className="contact-main">
                <div className="contact-content">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-description">
                            I'm dedicated to capturing life's most precious moments with artistry and passion. 
                            Whether it's your wedding day, a family portrait, or a special celebration, 
                            let's work together to create timeless memories.
                        </p>
                        
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div className="contact-text">
                                    <h3>Email</h3>
                                    <p>hello@fotokaran.com</p>
                                    <span className="contact-note">Response within 24 hours</span>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div className="contact-text">
                                    <h3>Phone</h3>
                                    <p>+91 98765 43210</p>
                                    <span className="contact-note">Available Mon-Sat, 9 AM-7 PM</span>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div className="contact-text">
                                    <h3>Studio Location</h3>
                                    <p>Bandra West, Mumbai</p>
                                    <span className="contact-note">Available for on-location shoots</span>
                                </div>
                            </div>
                            
                            <div className="contact-item">
                                <div className="contact-icon">⏰</div>
                                <div className="contact-text">
                                    <h3>Response Time</h3>
                                    <p>Within 2-4 hours</p>
                                    <span className="contact-note">During business hours</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-cta">
                            <h3>Ready to Start?</h3>
                            <p>Book a free consultation call to discuss your project details and requirements.</p>
                            <button className="cta-btn">Schedule Consultation</button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <h2 className="section-title">Send Me a Message</h2>
                        <p className="form-description">
                            Fill out the form below and I'll get back to you with a personalized quote and availability.
                        </p>
                        
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="eventType">Event Type</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select event type</option>
                                        <option value="wedding">Wedding Photography</option>
                                        <option value="engagement">Engagement Session</option>
                                        <option value="portrait">Portrait Photography</option>
                                        <option value="family">Family Session</option>
                                        <option value="event">Special Event</option>
                                        <option value="commercial">Commercial/Product</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="eventDate">Preferred Date</label>
                                <input
                                    type="date"
                                    id="eventDate"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="message">Project Details *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your vision, location preferences, number of people, special requirements, and any questions you have..."
                                ></textarea>
                            </div>
                            
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
                <div className="faq-content">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="faq-subtitle">Everything you need to know about working with me</p>
                    
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>How far in advance should I book?</h3>
                            <p>For weddings, I recommend booking 6-12 months in advance to secure your date. For other sessions, 2-4 weeks notice is usually sufficient.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>What areas do you cover?</h3>
                            <p>I primarily work in Mumbai and surrounding areas including Thane, Navi Mumbai, and Pune. I'm also available for destination photography throughout India.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Do you provide edited photos?</h3>
                            <p>Absolutely! All photos are professionally edited and retouched to ensure the highest quality. I provide both color-corrected and artistic edits based on your preferences.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>What's included in your packages?</h3>
                            <p>Packages include photography coverage, professional editing, high-resolution digital files, online gallery for sharing, and print release. Wedding packages also include engagement sessions.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How long does editing take?</h3>
                            <p>Portrait sessions are typically delivered within 1-2 weeks. Wedding galleries are delivered within 4-6 weeks. Rush delivery is available for an additional fee.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you offer video services?</h3>
                            <p>I specialize in photography, but I have trusted videographer partners I can recommend for couples who want both photo and video coverage.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Section */}
            <div className="trust-section">
                <div className="trust-content">
                    <h2 className="section-title">Why Choose Me?</h2>
                    <div className="trust-grid">
                        <div className="trust-item">
                            <div className="trust-icon">🎯</div>
                            <h3>Personalized Approach</h3>
                            <p>Every client and project is unique. I take time to understand your vision and create a custom photography experience.</p>
                        </div>
                        
                        <div className="trust-item">
                            <div className="trust-icon">✨</div>
                            <h3>Artistic Excellence</h3>
                            <p>With years of experience and a passion for creativity, I deliver images that are both technically perfect and artistically stunning.</p>
                        </div>
                        
                        <div className="trust-item">
                            <div className="trust-icon">🤝</div>
                            <h3>Professional Service</h3>
                            <p>From initial consultation to final delivery, I provide reliable, professional service with clear communication every step of the way.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
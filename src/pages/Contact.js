import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact(props) {
    // const [contactInfo, setContactInfo] = useState([]);
    const navigate = useNavigate();
    const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        feedback: "",
    })
    
    async function getContactInfo() {
        try {
            let myContactSubmissions = await fetch('http://localhost:4000/contact');
            myContactSubmissions = await myContactSubmissions.json();
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getContactInfo();
    }, [])

    const handleChange = (e) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            await fetch('http://localhost:4000/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactForm)
            })
            getContactInfo();
            e.target.reset();
            navigate('/contact/thank-you');
        } catch(err) {
            console.log(err);
        }
    }
    
    
    return (
        <>
            <h1>This is my contact page</h1>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" onChange={handleChange} placeholder="What's your first name?"/>
                <label>Last Name:</label>
                <input type="text" name="lastName" onChange={handleChange} placeholder="What's your last name?"/>
                <label>Email Address:</label>
                <input type="text" name="email" onChange={handleChange} placeholder="What's your email address?"/>
                <label>What do you want to share?</label>
                <input type="text" name="feedback" onChange={handleChange} placeholder="We'd love to hear from you"/>
                <button>Submit</button>
            
            </form>
        </>
    )
}

export default Contact;
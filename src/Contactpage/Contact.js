import { Form, Button } from 'react-bootstrap'
import Iframe from 'react-iframe'
import { ImLocation } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialTwitter } from 'react-icons/ti'

function Contact() {
    return (
        <div className="contact-container">
            <div className="form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                        {/* <Form.Label>Name:</Form.Label> */}
                        <Form.Control type="name" placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        {/* <Form.Label>Email address:</Form.Label> */}
                        <Form.Control type="email" placeholder="Email address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        {/* <Form.Label>Your message:</Form.Label> */}
                        <Form.Control as="textarea" rows={5} placeholder="Your message" />
                    </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Send
                    </Button>
                </div>
                <div className="icon-info-map">
                    <div>
                        <ImLocation />  Information Technology building
                        Some place, Some City, Some Country
                    </div>
                    <div>
                        <BsFillTelephoneFill />  +123 456-7890-1234
                    </div>
                    <div>
                        <MdEmail />  help@info.com
                    </div>
                    <div>
                        <AiFillGithub />
                        <FaFacebookF />
                        <TiSocialTwitter />
                    </div>
                    <div class="map-container">
                        <div class="map">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571289.733943155!2d76.08560099999998!3d29.058775699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e4a4b98404f57%3A0x75ffae70833e8448!2sShahbad%2C%20Haryana%20136135!5e0!3m2!1sen!2sin!4v1594195370933!5m2!1sen!2sin" style={{ width: "100%", height: "350", frameborder: "0", style: "border: 0;", allowfullscreen: "", tabindex: "0" }}></Iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

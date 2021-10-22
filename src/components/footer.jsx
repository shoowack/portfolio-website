import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter
} from "reactstrap";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function Footer() {
  const [modalShow, setModalShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "booking-info", ...form })
    })
      .then(() => setModalShow(true))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const { email, name, message } = form;

  return (
    <div class="footer">
      <Container fluid>
        <Container>
          <Form
            onSubmit={handleSubmit}
            className="px-md-5 pb-md-4"
            data-netlify-recaptcha="true"
          >
            <Row>
              <Col sm={{ offset: 1, size: 8 }}>
                <Row>
                  <Col sm={6} className=" text-right">
                    <Label className="ml-2">Your Name:</Label>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="text"
                      placeholder={"John Doe"}
                      required
                      name="name"
                      value={name}
                      onChange={(e) => handleChange(e)}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col sm={6} className=" text-right">
                    <Label className="ml-2">Your Email:</Label>
                  </Col>
                  <Col sm={6}>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="email@domain.com"
                      value={email}
                      onChange={(e) => handleChange(e)}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col sm={6} className=" text-right">
                    <Label className="ml-2">Your Message:</Label>
                  </Col>

                  <Col sm={6}>
                    <textarea
                      rows={3}
                      required
                      name="message"
                      className="form-control"
                      value={message}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm={{ offset: 5, size: 8 }}>
                <Button type="submit" className="ml-auto">
                  {/* <FontAwesomeIcon
                            icon={faPaperPlane}
                            size={"sm"}
                            className={"mr-2"}
                          /> */}
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    </div>
  );
}

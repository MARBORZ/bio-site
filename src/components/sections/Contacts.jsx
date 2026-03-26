import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
      company: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const [error, setError] = useState('')

  function handleChange(e){
    const { name, value } = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: value
    }));

    if(status !== 'idle'){
      setStatus('idle')
    }
  } 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      setStatus("error");
      setError(err.message || "Server error");
    }
};


  return (
    <section className="section section--compact contact" id="contact">
      <div className="container container--narrow">
        <div className="contact__content">
          <h2 className="contact__title">
            Contact
          </h2>

          <p className="contact__description">
            If you want to get in touch, feel free to send a message.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label className="contact__label" htmlFor="name">
                Name
              </label>
              <input
                className="contact__input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px" }}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <input
                className="contact__input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">
                Message
              </label>
              <textarea
                className="contact__textarea"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : "Send message"} 
            </button>
            <div className="contact__status">
                {status === "success" && (
                  <p className="contact__success">
                    Message sent successfully.
                  </p>
                )}

                {status === "error" && (
                  <p className="contact__error">
                    {error}
                  </p>
                )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

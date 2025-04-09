import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import './ContactForm.css';

const ContactForm = ({ formId }) => {
  const [state, handleSubmit] = useForm(formId);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  if (state.succeeded) {
    return (
      <div className="form-success">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>お問い合わせありがとうございます！</h3>
          <p>メッセージを受け付けました。近日中にご返信いたします。</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
              });
              window.location.reload();
            }}
          >
            新しいメッセージを送る
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">お名前 <span className="required">*</span></label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">メールアドレス <span className="required">*</span></label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">件名</label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">メッセージ <span className="required">*</span></label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={state.submitting}
      >
        {state.submitting ? '送信中...' : 'メッセージを送信'}
      </button>
      
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default ContactForm;

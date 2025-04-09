// src/pages/Contact.js
import React from 'react';
import ContactForm from '../components/ui/ContactForm'; // ContactFormコンポーネントをインポート

const Contact = () => {
  // あなたのFormspreeのフォームIDに置き換えてください
  const formId = 'YOUR_FORMSPREE_ID';

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">お問い合わせ</h1>
      <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        お仕事のご依頼やご質問など、お気軽にご連絡ください。
      </p>
      {/* ContactFormコンポーネントを表示 */}
      <ContactForm formId={formId} />
    </div>
  );
};

export default Contact; // ← デフォルトエクスポート
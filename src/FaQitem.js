import React, { useState } from 'react';
import './style.css';

const faqData = [
  {
    question: 'Si ti merrni biletat e tuaja?',
    answer: 'Ju mund të blini biletat online përmes faqes sonë të internetit ose direkt në vendngjarje.',
  },
  {
    question: 'Pse ne?',
    answer: 'Ne ofrojm cmimet me te mira dhe ekperiencen me te bukur.',
  },
  {
    question: 'Bashkohu komunitetit tonë?',
    answer: 'Regjistrohuni në faqen tonë për të qëndruar të informuar mbi ngjarjet e fundit.',
  },
  {
    question: 'Platforma Jone?',
    answer: 'Shkarkoni aplikacionin tonë për një përvojë më të mirë në lëvizje.',
  },
];

function FAQ(){
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#x25BC;</span>
          </div>
          <div
            className="faq-answer"
            style={{ display: openIndex === index ? 'block' : 'none' }}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

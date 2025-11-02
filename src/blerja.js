import './blerja.css';
import { useState } from 'react';

function TicketPurchase({ event, onClose }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });

  const seatPrice = 10;
  const total = selectedSeats.length * seatPrice;
  const seats = Array.from({ length: 20 }, (_, i) => `A${i + 1}`);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  };

  const handleContinue = () => {
    if (selectedSeats.length === 0) {
      alert("Zgjidh një ulëse.");
      return;
    }
    setStep(2);
  };

  const handleSelectPayment = (method) => {
    setPaymentMethod(method);
    setStep(3);
  };

  const handleConfirm = () => {
    if (!userInfo.name || !userInfo.email) {
      alert("Shkruaj emrin dhe emailin.");
      return;
    }
    alert("Pagesa u krye me sukses!");
    onClose();
  };

  return (
    <div className="purchase-modal-overlay">
      <div className="purchase-modal-content">
        <h2>{event.title}</h2>
          <p>Data: {event.date}</p>
          <p>Ora: {event.time}</p>
          <p>Vendi: {event.venue}</p>
        <img className='imazhi-ne-blerje' src={event.image} alt={event.title} />

        {step === 1 && (
          <>
            <h3 className='text'>Zgjedh ulëset:</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
              {seats.map(seat => (
                <button
                  key={seat}
                  onClick={() => toggleSeat(seat)}
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    background: selectedSeats.includes(seat) ? '#4caf50' : '#555',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {seat}
                </button>
              ))}
            </div>
            {selectedSeats.length > 0 && (
              <>
                <p style={{ marginTop: '20px' }}>Çmimi total: {total}€</p>
                <button className='btn btn-primary btn-lg mt-4 me-3' onClick={handleContinue}>Paguaj</button>
              </>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h3>Zgjedh mënyrën e pagesës:</h3>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
              {['paypal', 'bank', 'crypto'].map(method => (
                <button className="btn btn-outline-light btn-lg" key={method} onClick={() => handleSelectPayment(method)}>
                  {method.toUpperCase()}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3>Shkruaj informacionin:</h3>
            <input
             
              type="text"
              placeholder="Emrin"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
            <input
             
              type="email"
              placeholder="Email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
            <button className='btn btn-success btn-lg mt-4 me-3' onClick={handleConfirm}>Konfirmo</button>
          </>
        )}

        <button className='btn btn-danger btn-lg mt-4' onClick={onClose}>Mbyll</button>
      </div>
    </div>
  );
}

export default TicketPurchase;

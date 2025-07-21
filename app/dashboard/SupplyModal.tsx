// SupplyModal.tsx
// Modal for Supply action (Approve/Register) - based on user-provided screenshots
// Usage: <SupplyModal show={show} onClose={fn} assetName="Bitcoin" assetSymbol="BTC" />

import React, { useState } from 'react';

interface SupplyModalProps {
  show: boolean;
  onClose: () => void;
  assetName: string;
  assetSymbol: string;
}

const SupplyModal: React.FC<SupplyModalProps> = ({ show, onClose, assetName, assetSymbol }) => {
  const [step, setStep] = useState<'approve' | 'register'>('approve');
  const [amount, setAmount] = useState('');

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{background:'rgba(0,0,0,0.4)', zIndex:1060}} onClick={onClose}>
      <div className="modal-dialog modal-dialog-centered" onClick={e=>e.stopPropagation()}>
        <div className="modal-content lendora-card p-0" style={{minWidth:340, maxWidth:400, borderRadius:'1.5rem'}}>
          <div className="modal-body p-4">
            <div className="fw-bold fs-4 mb-4">Register</div>
            {/* Stepper */}
            <div className="d-flex align-items-center justify-content-center mb-4">
              <div className="d-flex flex-column align-items-center" style={{width:90}}>
                <div style={{width:18, height:18, borderRadius:'50%', background: step==='approve' ? '#2A3AFF' : '#B0B8D9', border:'2px solid #2A3AFF'}}></div>
                <span className="small mt-2" style={{color:'#B0B8D9'}}>Approve</span>
              </div>
              <div style={{height:2, width:60, background:'#B0B8D9'}}></div>
              <div className="d-flex flex-column align-items-center" style={{width:90}}>
                <div style={{width:18, height:18, borderRadius:'50%', background: step==='register' ? '#2A3AFF' : '#B0B8D9', border:'2px solid #2A3AFF'}}></div>
                <span className="small mt-2" style={{color:'#B0B8D9'}}>Register</span>
              </div>
            </div>
            {/* Approve Step */}
            {step==='approve' && (
              <>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Amount in USD</label>
                  <div className="input-group">
                    <input type="number" className="form-control" placeholder="0" value={amount} onChange={e=>setAmount(e.target.value)} min={0} />
                    <span className="input-group-text">USDT</span>
                  </div>
                </div>
                <button className="btn btn-primary w-100 lendora-btn" style={{height:48, fontSize:18}} onClick={()=>setStep('register')} disabled={!amount || Number(amount)<=0}>Approve</button>
              </>
            )}
            {/* Register Step */}
            {step==='register' && (
              <>
                <button className="btn btn-success w-100 lendora-btn" style={{height:48, fontSize:18}} onClick={onClose}>Register</button>
              </>
            )}
          </div>
          <button type="button" className="btn-close position-absolute end-0 top-0 m-3" aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
};

export default SupplyModal; 
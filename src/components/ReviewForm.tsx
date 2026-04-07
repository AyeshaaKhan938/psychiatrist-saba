'use client';

import { useActionState, useEffect, useRef, useState } from 'react';
import { submitReview } from '@/app/actions/review';
import toast from 'react-hot-toast';

export default function ReviewForm() {
  const [state, formAction, isPending] = useActionState(submitReview, null);
  const formRef = useRef<HTMLFormElement>(null);
  const [rating, setRating] = useState(5);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      formRef.current?.reset();
      setRating(5);
      setIsOpen(false);
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  if (!isOpen) {
    return (
      <div style={{ textAlign: 'center', marginTop: '56px' }}>
        <button onClick={() => setIsOpen(true)} className="btn-white" style={{ border: '1px solid var(--border)', fontSize: '13.5px', padding: '12px 28px' }}>
          Leave a Review
        </button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '56px', background: 'white', padding: '40px 36px', borderRadius: '4px', border: '0.5px solid var(--border)', maxWidth: '640px', margin: '56px auto 0', boxShadow: '0 10px 40px rgba(0,0,0,0.03)' }}>
      <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '26px', marginBottom: '8px', color: 'var(--charcoal)', fontWeight: 400 }}>Share your experience</h3>
      <p style={{ fontSize: '13.5px', color: 'var(--muted)', marginBottom: '24px' }}>Your feedback helps others take the first step towards healing.</p>
      
      <form action={formAction} ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12.5px', marginBottom: '8px', color: 'var(--charcoal)', letterSpacing: '0.03em' }}>Rating</label>
          <div style={{ display: 'flex', gap: '8px', fontSize: '28px', color: '#c9a84c', cursor: 'pointer', lineHeight: 1 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} onClick={() => setRating(star)}>{star <= rating ? '★' : '☆'}</span>
            ))}
          </div>
          <input type="hidden" name="rating" value={rating} />
        </div>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 200px' }}>
            <label htmlFor="name" style={{ display: 'block', fontSize: '12px', marginBottom: '6px', color: 'var(--charcoal)' }}>Display Name (Required)</label>
            <input type="text" id="name" name="name" required placeholder="e.g. Ayesha F." style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: '2px', fontSize: '14px', outline: 'none' }} />
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <label htmlFor="location" style={{ display: 'block', fontSize: '12px', marginBottom: '6px', color: 'var(--charcoal)' }}>Location (Optional)</label>
            <input type="text" id="location" name="location" placeholder="e.g. Lahore / Online" style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: '2px', fontSize: '14px', outline: 'none' }} />
          </div>
        </div>
        
        <div>
          <label htmlFor="issue" style={{ display: 'block', fontSize: '12px', marginBottom: '6px', color: 'var(--charcoal)' }}>Treatment / Issue (Optional)</label>
          <input type="text" id="issue" name="issue" placeholder="e.g. Anxiety, Depression" style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: '2px', fontSize: '14px', outline: 'none' }} />
        </div>
        
        <div>
          <label htmlFor="comment" style={{ display: 'block', fontSize: '12px', marginBottom: '6px', color: 'var(--charcoal)' }}>Your Review (Required)</label>
          <textarea id="comment" name="comment" required placeholder="Tell us about your experience..." style={{ width: '100%', padding: '12px 14px', border: '1px solid var(--border)', borderRadius: '2px', fontSize: '14px', minHeight: '120px', outline: 'none', resize: 'vertical' }}></textarea>
        </div>
        
        <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
          <button type="submit" className="btn-primary" disabled={isPending}>{isPending ? 'Submitting...' : 'Submit Review'}</button>
          <button type="button" onClick={() => setIsOpen(false)} className="btn-white" style={{ border: '1px solid var(--border)' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

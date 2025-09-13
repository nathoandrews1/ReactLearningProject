import { useState, useEffect } from 'react';
import CartItem from './CartItem';

export interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode[];
  zIndex?: number;
  width?: number | string;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose, title, children, zIndex, width }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {        
        if (open) {
            setIsVisible(true);
            // Small delay to trigger enter animation
            setTimeout(() => setIsAnimating(true), 50); // Increased delay
        } else {
            setIsAnimating(false);
            // Keep visible during exit animation, then hide
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [open]);

    // Clean up any Bootstrap backdrops when component unmounts or closes
    useEffect(() => {
        return () => {
            const backdrops = document.querySelectorAll('.modal-backdrop, .offcanvas-backdrop');
            backdrops.forEach(backdrop => backdrop.remove());
        };
    }, []);

    // Don't render if not visible
    if (!isVisible) return null;

    return (
        <>
            {/* Custom backdrop */}
            <div
                className="offcanvas-backdrop fade show"
                onClick={onClose}
                style={{ zIndex: (zIndex || 1050) - 1 }}
            />
            
            {/* Drawer */}
            <div
                className="offcanvas offcanvas-end show"
                style={{
                    width: width || 400,
                    zIndex: zIndex || 1050,
                    transform: isAnimating ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.3s ease-in-out',
                    visibility: 'visible' // Force visibility
                }}
                role="dialog"
                aria-modal="true"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">{title || 'Cart'}</h5>
                    <button 
                        type="button" 
                        className="btn-close" 
                        aria-label="Close" 
                        onClick={onClose}
                    ></button>
                </div>

                {/* Cart body for items */}
                <div className="offcanvas-body">
                    <div className="cart-items">
                        <ul className="list-group mb-3">
                            {/* Example cart item */}
                            <CartItem />
                            {/* More items... */}
                        </ul>
                    </div>
                    {children || <p>Your cart is empty</p>}
                </div>
            </div>
        </>
    );
};
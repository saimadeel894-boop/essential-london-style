import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, X, ChevronLeft, Lock, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postcode: '',
    country: 'United Kingdom',
    phone: '',
  });

  const shippingCost = totalPrice >= 100 ? 0 : 9.99;
  const orderTotal = totalPrice + shippingCost;

  const handleSubmitOrder = async () => {
    setIsProcessing(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your order. You will receive a confirmation email shortly.",
    });
    clearCart();
    setIsProcessing(false);
  };

  if (items.length === 0 && step === 'cart') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-display text-2xl mb-4">Your bag is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any items yet.</p>
          <Link to="/shop" className="btn-luxury-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container-luxury py-4 flex items-center justify-between">
          <Link to="/shop" className="nav-link flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            Secure Checkout
          </div>
        </div>
      </div>

      <div className="container-luxury py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-12">
            {['Cart', 'Shipping', 'Payment'].map((label, index) => {
              const stepIndex = ['cart', 'shipping', 'payment'].indexOf(step);
              const currentIndex = index;
              
              return (
                <div key={label} className="flex items-center gap-2">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    currentIndex <= stepIndex 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary text-muted-foreground'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`text-sm hidden sm:block transition-colors ${
                    currentIndex <= stepIndex ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {label}
                  </span>
                  {index < 2 && (
                    <div className={`w-8 md:w-16 h-px mx-2 ${
                      currentIndex < stepIndex ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {step === 'cart' && (
                <div className="space-y-6">
                  <h2 className="text-display text-2xl font-light">Shopping Bag ({items.length})</h2>
                  
                  {items.map((item) => (
                    <div 
                      key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                      className="flex gap-4 py-6 border-b border-border"
                    >
                      <div className="w-24 h-32 flex-shrink-0 bg-secondary overflow-hidden">
                        <img 
                          src={item.selectedColor.image || item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{item.product.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.selectedColor.name} / {item.selectedSize}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.selectedColor.name, item.selectedSize)}
                            className="p-2 hover:opacity-70 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-border">
                            <button
                              onClick={() => updateQuantity(
                                item.product.id, 
                                item.selectedColor.name, 
                                item.selectedSize, 
                                item.quantity - 1
                              )}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-4 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(
                                item.product.id, 
                                item.selectedColor.name, 
                                item.selectedSize, 
                                item.quantity + 1
                              )}
                              className="p-2 hover:bg-secondary transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <p className="font-medium">£{item.product.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => setStep('shipping')}
                    className="btn-luxury-primary w-full"
                  >
                    Continue to Shipping
                  </button>
                </div>
              )}

              {step === 'shipping' && (
                <div className="space-y-6">
                  <h2 className="text-display text-2xl font-light">Shipping Information</h2>
                  
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Email address *"
                      required
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name *"
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                        className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last Name *"
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                        className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Address *"
                      required
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="City *"
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Postcode *"
                        required
                        value={shippingInfo.postcode}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, postcode: e.target.value })}
                        className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone (for delivery updates)"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep('cart')}
                      className="btn-luxury-outline flex-1"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep('payment')}
                      className="btn-luxury-primary flex-1"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </div>
              )}

              {step === 'payment' && (
                <div className="space-y-6">
                  <h2 className="text-display text-2xl font-light">Payment</h2>
                  
                  <div className="p-4 bg-secondary/50 border border-border flex items-center gap-3">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      This is a demo checkout. No real payment will be processed.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                    
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Name on Card"
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setStep('shipping')}
                      className="btn-luxury-outline flex-1"
                      disabled={isProcessing}
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmitOrder}
                      disabled={isProcessing}
                      className="btn-luxury-primary flex-1 disabled:opacity-50"
                    >
                      {isProcessing ? 'Processing...' : `Place Order - £${orderTotal.toFixed(2)}`}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-secondary p-6 sticky top-32">
                <h3 className="text-display text-lg font-medium mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div 
                      key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                      className="flex gap-3"
                    >
                      <div className="w-14 h-18 flex-shrink-0 bg-background overflow-hidden">
                        <img 
                          src={item.selectedColor.image || item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-sm">
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-muted-foreground">
                          {item.selectedColor.name} / {item.selectedSize} × {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">£{item.product.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 py-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>£{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shippingCost === 0 ? 'text-green-600' : ''}>
                      {shippingCost === 0 ? 'Free' : `£${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between py-4 border-t border-border">
                  <span className="font-medium">Total</span>
                  <span className="font-medium text-lg">£{orderTotal.toFixed(2)}</span>
                </div>

                {totalPrice < 100 && (
                  <div className="mt-4 p-3 bg-background border border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      Add £{(100 - totalPrice).toFixed(2)} more for <strong>free shipping</strong>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

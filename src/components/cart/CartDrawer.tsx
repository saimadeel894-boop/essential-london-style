import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="text-display text-xl font-medium">Shopping Bag</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <p className="text-muted-foreground">Your bag is empty</p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-luxury-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-6">
              {items.map((item) => (
                <div 
                  key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}`}
                  className="flex gap-4"
                >
                  <div className="w-20 h-24 bg-secondary rounded-sm overflow-hidden flex-shrink-0">
                    <div 
                      className="w-full h-full"
                      style={{ backgroundColor: item.selectedColor.hex }}
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-sm font-medium">{item.product.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.selectedColor.name} / {item.selectedSize}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor.name, item.selectedSize)}
                        className="p-1 hover:opacity-70 transition-opacity"
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
                      <p className="text-sm font-medium">£{item.product.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">£{totalPrice}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-luxury-primary w-full text-center"
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-sm text-center text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

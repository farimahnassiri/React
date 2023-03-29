import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const fetchCartData = (cart) => {
    return async (dispatch) => {
        const fetchData = async () => {
            //we're sending a GET and its the default!
            const response = await fetch(
                'https://react-http-15f97-default-rtdb.firebaseio.com/cart.json'
            );
            if(!response.ok){
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            
            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch(error){
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Fetching cart data failed!'
               })
            ); 
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!'
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          'https://react-http-15f97-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify({
                items: cart.items,
                totalQuantity: cart.totalQuantity
            })
          }
        );
    
        if (!response.ok){
          throw new Error('Sending cart data failed.');
        }
      };
      //nesting is require if we want to try and catch errors because of the nature of fetch
      try{
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data Successfully!'
          })
        );
      } catch(error){
        sendCartData().catch((error) => {
          dispatch(
            uiActions.showNotification({
              status: 'error',
              title: 'Error!',
              message: 'Sending cart data failed!'
           })
          ); 
        });
      }
  
    };
  };
  
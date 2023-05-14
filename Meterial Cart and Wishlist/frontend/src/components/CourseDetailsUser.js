//data fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import Swal from 'sweetalert2'

const CourseDetails = ({ course }) => {
  const handleClick = async (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Check if the item is already in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingCartItem) {
      // If the item is already in the cart, do not add it again
      console.log('Item already in cart!');
    } else {
      // Otherwise, add the item to the cart
      cartItems.push(item);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      console.log('Item added to cart!');

      Swal.fire({
        title: 'Success',
        text: 'Item added to cart',
        icon: 'success',
        showConfirmButton: false,
        timer:2000,
        timerProgressBar: true
      })
    }
    
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const existingWishlistItem = wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);
  
    if (existingWishlistItem) {
      // If the item is already in the Wishlist, remove it
      const updatedItems = wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id);
      localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
      console.log('Item removed from Wishlist!');
    } else {
      // Otherwise, add the item to the Wishlist
      wishlistItems.push(item);
      localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
      console.log('Item added to Wishlist!');
    }
  };
  const handleClickWishlist = async (item) => {const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
  const existingWishlistItem = wishlistItems.find((wishlistItem) => wishlistItem.id === item.id);

  if (existingWishlistItem) {
    // If the item is already in the Wishlist, remove it
    const updatedItems = wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
    console.log('Item removed from Wishlist!');
  } else {
    // Otherwise, add the item to the Wishlist
    wishlistItems.push(item);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    console.log('Item added to Wishlist!');

    Swal.fire({
      title: 'Success',
      text: 'Item added to wish list',
      icon: 'success',
      showConfirmButton: false,
      timer:2000,
      timerProgressBar: true
    })
  }}

  return (
    <div className="course-details">
      <h4>{course.title}</h4>
      <p><strong>Duration (months):</strong> {course.duration}</p>
      <p><strong>Day:</strong> {course.day}</p>
      <p><strong>Price ($):</strong> {course.price}</p>
      <p>{formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })}</p>
      <span className="" onClick={() => handleClick({ id: course._id, title: course.title, duration: course.duration, price: course.price })}>Add to cart</span>
      <button className="wishList" onClick={() => handleClickWishlist({ id: course._id, title: course.title, duration: course.duration, price: course.price })}>Wishlist</button>
    </div>
  );
};

export default CourseDetails;

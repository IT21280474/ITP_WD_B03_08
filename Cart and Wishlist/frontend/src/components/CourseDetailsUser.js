
import { useCoursesContext } from '../hooks/useCoursesContext'

//data fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CourseDetails = ({course}) =>{
    const { dispatch } = useCoursesContext()

    const handleClick = async (item) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      
        // Check if the item is already in the cart
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
      
        if (existingItem) {
          // If the item is already in the cart, do not add it again
          console.log('Item already in cart!');
        } else {
          // Otherwise, add the item to the cart
          cartItems.push(item);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
          console.log('Item added to cart!');
        }
      }
    return(
    <div className="course-details">
        <h4>{course.title}</h4>
        <p><strong>Duration (months) :</strong> {course.duration}</p>
        <p><strong>Day :</strong>{course.day}</p>
        <p><strong>Price ($) :</strong> {course.price}</p>
        <p>{formatDistanceToNow(new Date(course.createdAt),{addSuffix: true})}</p>
        <span className="" onClick={() => handleClick({ id: course._id, title:course.title , duration: course.duration, price: course.price })}>Add to cart</span>
        
        
    </div>
    )
}
export default CourseDetails
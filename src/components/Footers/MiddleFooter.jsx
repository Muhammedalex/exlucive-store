import PropTypes from 'prop-types';
import { arr_1 } from './data';
import { Link } from 'react-router-dom';
const MiddleFooter = ({items=arr_1 , title='Support'}) => {
  return (
    <div className='flex flex-col max-w-[175px] items-start justify-start gap-6'>
        <h3 className='text-[20px] font-medium'>
          {title}
        </h3>
        <ul className='flex flex-col items-start justify-center gap-4 '>
            {items.map((item , index) => (
               <li key={index}>
               <Link  to={item.path} className='text-[16px] font-normal'>
                {item.name}
              </Link>
              </li>
            ))}
    </ul>
    </div>
  )
}

MiddleFooter.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,

};
export default MiddleFooter

/* eslint-disable react/prop-types */

const Rating = ({rate:rate}) => {
        const inputs = [];
      
        // Generate checked radio inputs
        for (let i = 0; i < rate; i++) {
          inputs.push(
            <input
              key={i}
              type="radio"
              name="rating-5"
              className="bg-orange-500 mask mask-star-2"
              readOnly
              checked
            />
          );
        }
      
        // Generate unchecked radio inputs
        for (let i = rate; i < 5; i++) {
          inputs.push(
            <input
              key={i}
              type="radio"
              name="rating-5"
              className="bg-orange-300/25 mask mask-star-2"
              readOnly
            />
          );
        }
        return <>{inputs}</>;
}

export default Rating

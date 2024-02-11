const CountFormatter = ({ count, name }) => {
  // Convert the view count to a number
  let formattedViewCount = parseFloat(count);

  // Check if the view count is in millions or thousands and format accordingly
  if (formattedViewCount >= 1000000) {
    formattedViewCount = (formattedViewCount / 1000000).toFixed(1) + "m"; // Divide by 1 million and add 'm'
  } else if (formattedViewCount >= 1000) {
    formattedViewCount = (formattedViewCount / 1000).toFixed(1) + "k"; // Divide by 1 thousand and add 'k'
  }

  return (
    <span>
      {formattedViewCount} {name}
    </span>
  );
};

export default CountFormatter;

import "../assets/css/Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <div className="container">
        <h1>404</h1>
        <h2>Oops! This Page Could Not Be Found</h2>
        <p>
          The page {`you're`} looking for is unavailable. You might find what{" "}
          {`you're`}
          looking for by using our menu or search options.
        </p>
      </div>
    </div>
  );
};

export default Error;

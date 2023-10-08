const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <h2>
          <i className="fa-solid fa-envelope"></i>
          Sign Up To Newsletter
        </h2>
        <p>Subscribe to our newsletter.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;

import { reviews } from "../reviews";
import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    // Manually initialize the carousel if needed (in case auto-sliding doesn't work automatically)
    const myCarousel = new window.bootstrap.Carousel(
      document.getElementById("carouselExampleAutoplaying"),
      {
        interval: 3000, // Set to your desired interval
        ride: "carousel", // Start the carousel autoplay immediately
      }
    );
  }, []);

  const reviewCardElements = reviews.map((review, index) => (
    <div
      key={review.id}
      className={`carousel-item ${index === 0 ? "active" : ""}`}
      data-bs-interval="1000"
    >
      <div className="card" style={{ width: "18rem", margin: "0 auto" }}>
        <div className="card-body">
          <h5 className="card-title">{review.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">{review.review}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="card-reviews">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel" // Ensure this sets the autoplay interval
      >
        <div className="carousel-inner">{reviewCardElements}</div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </section>
  );
}

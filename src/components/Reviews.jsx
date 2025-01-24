import { reviews } from "../reviews";

export default function Reviews() {
  const reviewCardElements = reviews.map((review) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{review.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">{review.review}</p>
        </div>
      </div>
    );
  });

  return <section className="card-reviews">{reviewCardElements}</section>;
}

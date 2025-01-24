export default function PictureCarrossel() {
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ zIndex: 1 }}>
            <img
              src="https://vippets.net/wp-content/uploads/2018/02/helena-lopes-u4uGoUBxmCE-unsplash-1080x675.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://animalmedicinesaustralia.org.au/wp-content/uploads/2019/10/Pet-Report-Cover-1120x630.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1060529042/photo/young-woman-with-dog.jpg?s=612x612&w=0&k=20&c=s0AlJrCZUUX4EXzwpwxobfUbeqUnghp0FpdHXHx3mpk="
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

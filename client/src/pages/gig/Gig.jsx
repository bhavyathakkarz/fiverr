import React from "react";
import "./gig.scss";
import { Slider } from "infinite-react-carousel";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">fiverr | GRAPHICS & DESIGN </span>
          <h1>I will create ai art character from your images and prompts</h1>
          <div className="user">
            <img src="/img/man.png" alt="" className="pp" />
            <span>Anna Bell</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img src="/img/man.png" alt="" />
            <img src="/img/man.png" alt="" />
            <img src="/img/man.png" alt="" />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Please message me before ordering !!
            <br />
            <br />
            We will create awesome AI artwork in various styles using Mid
            Journey and Stable Diffusion.
            <br />
            <br />
            Are you annoyed with so many different flaws created by A.I.? You
            can't create your fantastic artwork because of complex ideas which
            A.I. does not understand well? We are the designers who can achieve
            your special ideas with the help of different A.I. tools and
            professional photo editing skills.
            <br />
            <br />
            Please look carefully, there are so many ideas can't be solely
            created by A.I. with one click. You need an artist who can
            understand your concepts deeply, know the limitation of A.I. tools
            well, and create your awesome artwork thoughtfully and skilfully.
            <br />
            <br />
            Designing multiple characters is a complex project that requires
            each of them to adhere to a unified artistic style and to be
            detailed precisely. Usually, this type of project falls under our
            Platinum Package or requires a Custom Offer. Please contact us prior
            to placing your order.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img src="/img/man.png" alt="" />
              <div className="info">
                <span>Anna Bell</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Members since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Hello! My name is Wing, and I am a skilled digital illustrator
                with a passion for producing high-quality designs. My areas of
                expertise include creating portraits, original characters, and
                cover art. I am proficient in using both Mid Journey and
                Photoshop software to bring your unique ideas to life. With Mid
                Journey, I am able to generate dynamic and abstract concepts
                through prompts, ensuring that your artwork stands out from the
                rest. If you're in need of quick and top-notch design work,
                don't hesitate to get in touch with me.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="/img/man.png" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="/img/flag.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis deserunt pariatur cum illum eligendi sapiente
                asperiores dolore tenetur sed odit, nesciunt aperiam quisquam
                laudantium repudiandae maiores nobis at amet. Amet.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>no</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="/img/man.png" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="/img/flag.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis deserunt pariatur cum illum eligendi sapiente
                asperiores dolore tenetur sed odit, nesciunt aperiam quisquam
                laudantium repudiandae maiores nobis at amet. Amet.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>no</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img src="/img/man.png" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="/img/flag.png" alt="" />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis deserunt pariatur cum illum eligendi sapiente
                asperiores dolore tenetur sed odit, nesciunt aperiam quisquam
                laudantium repudiandae maiores nobis at amet. Amet.
              </p>
              <div className="helpful">
                <span className="help">Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>no</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>&#8377; 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Generated Image Example</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork Delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image Upscaling</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;

import React , {useEffect} from 'react';
import "../styles/CertificatePage.css"; 

const CertificatePage = () => {
    useEffect(() => {
        const items = document.querySelectorAll("#carousel div");
        let current = 3; 

        const updateCarousel = () => {
            items.forEach((item) => {
                item.className = "hideRight"; 
            });

            items[(current - 2 + items.length) % items.length].className = "prevLeftSecond";
            items[(current - 1 + items.length) % items.length].className = "prev";
            items[current].className = "selected";
            items[(current + 1) % items.length].className = "next";
            items[(current + 2) % items.length].className = "nextRightSecond";
        };

        const nextSlide = () => {
            current = (current + 1) % items.length;
            updateCarousel();
        };

        updateCarousel();
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval); 
    }, []);

  return (
    <div className="certificate-container">
      <h1>What we do?</h1>
      <div id="carousel" className="carousel">
        <div id="item_1" className="hideLeft">
          <img
            src="https://img.freepik.com/free-vector/cartoon-web-design-landing-page_52683-70880.jpg?uid=R140822190&semt=ais_hybrid"
            alt="Certificate 1"
          />
        </div>

        <div id="item_2" className="prevLeftSecond">
          <img
            src="https://img.freepik.com/free-psd/design-agency-landing-page_23-2148975465.jpg?uid=R140822190&semt=ais_hybrid"
            alt="Certificate 2"
          />
        </div>

        <div id="item_3" className="prev">
          <img
            src="https://img.freepik.com/free-vector/flat-design-web-designer-landing-page_23-2150333314.jpg?uid=R140822190&semt=ais_hybrid"
            alt="Certificate 3"
          />
        </div>

        <div id="item_4" className="selected">
          <img
            src="https://img.freepik.com/free-vector/colorful-gradient-landing-page_52683-9586.jpg?uid=R140822190&semt=ais_hybrid"
            alt="Certificate 4"
          />
        </div>

        <div id="item_5" className="next">
          <img
            src="https://img.freepik.com/free-vector/technology-landing-page-with-photo-fading-copy-space-line_23-2148271378.jpg?uid=R140822190&semt=ais_hybrid"
            alt="Certificate 5"
          />
        </div>

        <div id="item_6" className="nextRightSecond">
          <img
            src="https://img.freepik.com/free-vector/landing-page-with-laptop_23-2148337745.jpg?uid=R140822190"
            alt="Certificate 6"
          />
        </div>

        <div id="item_7" className="hideRight">
          <img
            src="https://img.freepik.com/free-vector/creative-business-landing-page_52683-60295.jpg?uid=R140822190&semt=ais_hybrid"
            alt="Certificate 7"
          />
        </div>

        <div id="item_8" className="hideRight">
          <img
            src="https://img.freepik.com/free-vector/landing-page-template-with-laptop_23-2148336172.jpg?t=st=1733866235~exp=1733869835~hmac=f366c09b93ed9592dedb198e6cc6db83c339b107cab9493963d14a369394b9b4&w=996"
            alt="Certificate 8"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;

import React from "react";

const PageSection = () => {
  return (
    <>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              Copyright 2014 | All Rights Reserved -- Template by{" "}
              <a href="http://webThemez.com">WebThemez.com</a>
            </div>
          </div>
        </div>
      </section>
      <a href="#top" className="topHome">
        <i className="fa fa-chevron-up fa-2x"></i>
      </a>
    </>
  );
};

export default PageSection;

import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import Refund from "../elements/refund/Refund";

const FocusCorpLanding = () => {
      return (
        <div className="active-dark">
            <Helmet pageTitle="FocusCorp Landing" />

            {/* Start Refund Area */}
            <div id="refund" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <Refund/>
                </div>
            </div>
            {/* End Refund Area */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

        </div>
    )
}

export default FocusCorpLanding;

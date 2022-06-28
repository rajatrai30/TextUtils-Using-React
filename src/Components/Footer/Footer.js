import React, { Component } from 'react';
import { Facebook, Instagram,Twitter, YouTube, LinkedIn } from '@material-ui/icons';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <>
          <footer className="footer">
            <div className="footerContainer">
                <div>
                    <p>Follow us on:</p>
                    <p>
                        <a href="https://www.instagram.com/csiphcet/" target="_blank">
                            <Instagram className="icons instagram"  fontSize="large"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCkHWjnKBwknZDWEb9YSIRzA" target="_blank">
                            <YouTube className="icons youtube" fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/Csi_phcet-103845324878108" target="_blank">
                            <Facebook className="icons linkedin"  fontSize="large"/>
                        </a>
                        <a href="https://twitter.com/csiphcet?s=20" target="_blank">
                            <Twitter className="icons twitter"  fontSize="large"/>
                        </a>
                        <a href="https://www.linkedin.com/company/csi-phcet/" target="_blank">
                            <LinkedIn className="icons linkedin"  fontSize="large"/>
                        </a>
                       
                    </p>
                </div>
                <div>
                    <p>© 2022 CSI PHCET Developer Club</p>
                    <p> <a href="mailto:csi.phcet@mes.ac.in">Email: csi.phcet@mes.ac.in</a></p>
                </div>
            </div>
        </footer>
    
      </>
    )
  }
}

export default Footer
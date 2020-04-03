import React from 'react';
import './Footer.css';
import '../Contacts/Contacts'

class Footer extends React.Component {

  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title">2020 &copy; TGK</h1>
                <p> All Rights Reserved</p>

              </div>

              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/contacts" tooltip="Контакты">Contacts</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/terms">Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;

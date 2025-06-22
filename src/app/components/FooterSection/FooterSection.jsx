import styles from "./FooterSection.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.newsletter}>
            <h3>STAY UPDATED</h3>
            <p>Sign up for updates from LOGO Marketplace.</p>
            <div className={styles.inputGroup}>
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <hr className={styles.divider2} />

          <div className={styles.contact}>
            <h3>CONTACT US</h3>
            <div className={styles.contactDetails}>
              <p>+44 221 133 5360</p>
              <p>support@logocare.com</p>
            </div>

            <hr className={styles.divider2} />

            <h3 className={styles.currencyHead}>CURRENCY</h3>
            <div className={styles.currency}>
              <Image src="/icons/USA.svg" alt="USD" width={24} height={24} />
              <span className={styles.currentFormat}>USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.column}>
              <h4>LOGO</h4>
              <ul>
                <li>Our Story</li>
                <li>Collections</li>
                <li>Designers</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>Legal Documents</li>
              </ul>
            </div>

            <div className={styles.column}>
              <h4>CUSTOMER CARE</h4>
              <ul>
                <li>Shipping & Delivery</li>
                <li>Become a Seller</li>
                <li>Payment Options</li>
                <li>Returns Policy</li>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <h4>CONNECT WITH US</h4>
            <div className={styles.socialIcons}>
              <Image
                src="/icons/insta.svg"
                alt="Instagram"
                width={32}
                height={32}
              />
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </div>

            <h4 className={styles.paymentsHead}>WE ACCEPT</h4>
            <div className={styles.payments}>
              <Image src="/icons/Gpay.svg" alt="GPay" width={56} height={35} />
              <Image
                src="/icons/MasterCard.svg"
                alt="MasterCard"
                width={56}
                height={35}
              />
              <Image
                src="/icons/PayPal.svg"
                alt="Paypal"
                width={56}
                height={35}
              />
              <Image
                src="/icons/Amex.svg"
                alt="American Express"
                width={56}
                height={35}
              />
              <Image
                src="/icons/ApplePay.svg"
                alt="Apple Pay"
                width={56}
                height={35}
              />
              <Image
                src="/icons/SomethingPay.svg"
                alt="Other Payment"
                width={56}
                height={35}
              />
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2023 LOGO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
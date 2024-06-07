import Link from "next/link";
import "@/app/styles/Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__navigation">
        <h3 className="footer__title">INFORMATION</h3>
        <Link
          href="/about"
          className="footer__navigation__link"
        >
          About us
        </Link>
        <Link
          href="/contacts"
          className="footer__navigation__link"
        >
          Contacts
        </Link>
      </nav>

      <div className="footer__details">
        <h3 className="footer__title">FIND US</h3>
        <p>
          <strong>Store Name:</strong> Bride&apos;s Charm
        </p>
        <p>
          <strong>Address:</strong> 123 Wedding Lane, Bridal City, BC 12345
        </p>
      </div>

      <div className="footer__contacts">
        <h3 className="footer__title">WORKING HOURS</h3>
        <p>
          <strong>Monday - Saturday:</strong> 10:00 AM - 7:00 PM
        </p>
        <p>
          <strong>Sunday:</strong> 10:00 AM - 5:00 PM
        </p>
      </div>
    </footer>
  );
}

import PageTitle from "../../components/PageTitle";

export default function Contacts() {
  return (
    <div className="contacts">
      <PageTitle title="Contact Us" />
      <hr />

      <div className="contacts__details">
        <p>
          <strong>Store Name:</strong> Bride&apos;s Charm
        </p>
        <p>
          <strong>Address:</strong> 123 Wedding Lane, Bridal City, BC 12345
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> bridescharm@gmail.com
        </p>
      </div>

      <div className="contacts__workingHours">
        <h3 className="contacts__title">Working Hours</h3>
        <p>
          <strong>Monday - Saturday:</strong> 10:00 AM - 7:00 PM
        </p>
        <p>
          <strong>Sunday:</strong> 10:00 AM - 5:00 PM
        </p>
      </div>

      <div className="contacts__map">
        <h3 className="contacts__title">Find Us Here</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086530379467!2d-122.41941548467897!3d37.77492977975967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5d1f4b%3A0xa5b4d2c4a23b0a0!2s123%20Wedding%20Ln%2C%20San%20Francisco%2C%20CA%2094123%2C%20USA!5e0!3m2!1sen!2sus!4v1627344559342!5m2!1sen!2sus"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

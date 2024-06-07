import Image from "next/image";
import aboutUsPhoto from "@/app/assets/images/about_us.png";
import aboutUsPhoto2 from "@/app/assets/images/owner.png";
import caruselPhoto1 from "@/app/assets/images/carusel1.png";
import caruselPhoto2 from "@/app/assets/images/carusel2.png";
import caruselPhoto3 from "@/app/assets/images/carusel3.png";
import PageTitle from "@/app/components/PageTitle";

export default function About() {
  return (
    <div className="about">
      <PageTitle title="About us" />
      <hr />

      <div className="about__container">
        <h3 className="about__intro">
          MADE WITH LOVE IS AN AUSTRALIAN LUXURY BRIDAL BRAND, KNOWN FOR IT’S
          EFFORTLESSLY CHIC, QUALITY MADE AND DISTINCTLY PERSONABLE BRIDAL
          EXPERIENCE.
        </h3>
        <p className="about__text">
          Designed by Carla Jenkins, Made with Love has revolutionised the
          bridal world by creating beautiful and modern dresses for everyday,
          natural beauties. We are known for our daring V necklines and plunging
          low backs as well as our luxurious French crepe dresses. Our designs
          can be found in exclusive MWL boutiques and retailers worldwide.
        </p>
        <Image
          src={aboutUsPhoto}
          width={700}
          height={500}
          alt="Picture of the author"
          className="about__image"
        />
        <p className="about__text">
          “I am constantly inspired by the women around me, whether that be my
          family, friends, team or brides! Owning a family run business means
          constantly being surrounded by the women closest to me who offer
          endless support and are forever a huge source of inspiration.” – Carla
          Jenkins, Creative Director & Designer
        </p>

        <div className="about__content">
          <div className="about__wrapper">
            <Image
              src={aboutUsPhoto2}
              width={500}
              height={600}
              alt="Picture of the author"
              className="about__image"
            />
          </div>

          <div className="about__text__container">
            <h4 className="about__titleStory">OUR BEGINNINGS</h4>
            <p className="about__text">
              Made with Love is an Australian luxury bridal brand, known for
              it’s effortlessly chic, quality made and distinctly personable
              bridal experience. Founded by designer and director Carla Jenkins
              in 2013, MWL started from humble beginnings on the Gold Coast
              after discovering the underwhelming selection of bridal available
              while on her own journey to find the perfect dress. Fast forward
              to today, MWL is now an internationally recognised family owned
              and operated business. MWL has carved the way for a modern,
              inclusive and down to earth experience for all brides.
            </p>
            <h4 className="about__titleStory">OUR MISSION</h4>
            <p className="about__text">
              To make every bride’s dreams come true and empower them to feel
              their most beautiful, confident selves through a down to earth yet
              elegantly refined experience.
            </p>
          </div>
        </div>

        <h4 className="about__titleStory">OUR COMMITMENT</h4>
        <p className="about__text">
          Made with Love designs are carefully considered at every stage of
          production, from conceptualisation to completion our experienced team
          and designer meticulously perfect MWL designs to ensure our brides’
          dream dresses exceed their expectations for their most special day.
          Made With Love are committed to designing and producing the highest
          quality unique dresses and bridal accessories, as well as the highest
          quality experience for our brides.
        </p>
      </div>

      <div className="about__images__container">
        <Image
          src={caruselPhoto1}
          width={300}
          height={400}
          alt="Dress"
          className="about__carousel__image"
        />
        <Image
          src={caruselPhoto2}
          width={300}
          height={400}
          alt="Dress"
          className="about__carousel__image"
        />
        <Image
          src={caruselPhoto3}
          width={300}
          height={400}
          alt="Dress"
          className="about__carousel__image"
        />
      </div>
    </div>
  );
}

import Image from 'next/image';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/manu.jpg"
          alt="An image showing Manu"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Manu</h1>
      <p>I enjoy working as a Frontend Developer / Software Engineer.</p>
      <p>Currently focusing on React.js and it's modern ecosystem.</p>
    </section>
  );
};

export default Hero;

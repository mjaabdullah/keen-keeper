import facebookLogo from "../../assets/facebook.png";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
const Footer = () => {
  return (
    <footer className="bg-[#244D3F]">
      <div className="container mx-auto">
        <section className="footer footer-horizontal footer-center text-primary-content px-2.5 pt-8 gap-3">
          <aside>
            <h2 className="text-3xl sm:text-5xl font-bold">KeenKeeper</h2>
            <p>
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </aside>
          <nav>
            <h4 className=" text-lg">Social Links</h4>
            <div className="grid grid-flow-col gap-4">
              <a>
                <img src={instagramLogo} alt="Instagram" />
              </a>
              <a>
                <img src={facebookLogo} alt="Facebook" />
              </a>
              <a>
                <img src={twitterLogo} alt="Twitter" />
              </a>
            </div>
          </nav>
        </section>
        <div className="divider"></div>
        <section className="footer sm:footer-horizontal text-gray-400 items-center justify-center sm:justify-between px-3 py-8 pt-1 gap-2">
          <aside className="grid-flow-col items-center">
            <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookies</a>
          </nav>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

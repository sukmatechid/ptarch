import { useEffect, useState, type SyntheticEvent, type FC } from "react";
import LogoImage from "../assets/logo.png";
import HeroImage from "../assets/hero.jpg";
import MoringaImage from "../assets/moringa.jpg";
import DaunPisanPanjangImage from "../assets/daun-pisang-panjang.jpg";
import PapayaLeavesImage from "../assets/papaya-leaves.jpg";
import BabyOctopusImage from "../assets/baby-octopus.jpg";
import KeongImage from "../assets/keong.jpg";
import CengkehImage from '../assets/cengkeh.jpeg'

interface NavLink {
  label: string;
  href: string;
}

interface Product {
  name: string;
  src: string;
  emoji: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about"},
  { label: "Products", href: "#products" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

const AGRICULTURE: Product[] = [
  { name: "Moringa", src: MoringaImage, emoji: "🌿" },
  { name: "Banana Leaves", src: DaunPisanPanjangImage, emoji: "🍌" },
  { name: "Papaya Leaves", src: PapayaLeavesImage, emoji: "🌱" },
  { name: "Indonesian Spices", src: CengkehImage, emoji: "🌶️" },
];

const MARINE: Product[] = [
  { name: "Baby Octopus", src: BabyOctopusImage, emoji: "🐙" },
  { name: "Babylon Snail", src: KeongImage, emoji: "🐚" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-emerald-950/95 backdrop-blur-md shadow-lg shadow-emerald-900/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            <img
              src={LogoImage}
              alt="PT ARCH"
              className="w-8 h-8 object-contain rounded-full"
              onError={(e: SyntheticEvent<HTMLImageElement>): void => {
                const target = e.currentTarget;
                target.style.display = "none";
                if (target.parentNode instanceof HTMLElement) {
                  target.parentNode.innerHTML =
                    '<span class="text-white font-black text-sm">PT</span>';
                }
              }}
            />
          </div>
          <span className="font-black tracking-widest text-white uppercase text-md" >
            PT ARCH
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.label}
              href={link.href}
              className="text-emerald-200/80 hover:text-emerald-300 text-sm tracking-widest transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-emerald-950/80"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #1b5e4b, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-block border border-emerald-400/40 rounded-full px-4 py-1 mb-8">
            <span className="text-emerald-300 text-xs tracking-[0.3em] uppercase font-semibold">
              Indonesia · Est. Global Export
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            PT ARCHINUS
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">UNIEX NOER</span>
          </h1>

          <p className="text-emerald-200/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide">
            Exporter of Agricultural Leaves &amp; Marine Products for Global Markets
          </p>

          <a
            href="#products"
            className="inline-block bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-black px-10 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl hover:shadow-emerald-400/30 hover:-translate-y-0.5"
          >
            Explore Products
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-950 to-transparent" />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="bg-emerald-950 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
          Who We Are
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          About PT ARCH
        </h2>
        <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-8" />
        <p className="text-emerald-200/70 text-lg leading-relaxed">
          PT ARCHINUS UNIEX NOER (PT ARCH) is committed to delivering
          high-quality agricultural and marine products through sustainable
          sourcing and professional global partnerships.
        </p>
      </div>
    </section>
  );
};

const ProductCard: FC<Product> = ({ name, src, emoji }) => {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget;
    target.style.display = "none";
    if (target.parentNode instanceof HTMLElement) {
      target.parentNode.innerHTML = `<span class="text-6xl select-none">${emoji}</span>`;
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-emerald-900/40 border border-emerald-700/30 hover:border-emerald-400/50 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/50 cursor-pointer">
      <div className="aspect-square overflow-hidden bg-emerald-900/60 flex items-center justify-center">
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
        />
      </div>
      <div className="p-4">
        <h3
          className="text-white font-bold text-center tracking-wide"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {name}
        </h3>
      </div>
    </div>
  );
};

interface ProductCategoryProps {
  icon: string;
  label: string;
  products: Product[];
}

const ProductCategory: FC<ProductCategoryProps> = ({
  icon,
  label,
  products,
}) => (
  <div className="mb-16 last:mb-0">
    <div className="flex items-center gap-4 mb-8">
      <span className="text-2xl">{icon}</span>
      <h3 className="text-emerald-300 text-sm tracking-[0.25em] uppercase font-bold">
        {label}
      </h3>
      <div className="flex-1 h-px bg-emerald-800" />
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product: Product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  </div>
);

const Products: FC = () => {
  return (
    <section id="products" className="bg-emerald-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Our Offerings
          </p>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Our Products
          </h2>
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mt-6" />
        </div>

        <ProductCategory icon="🌾" label="Agriculture" products={AGRICULTURE} />
        <ProductCategory icon="🌊" label="Marine" products={MARINE} />
      </div>
    </section>
  );
};

interface VisionCardProps {
  icon: string;
  title: string;
  description: string;
  titleClassName: string;
  iconBgClassName: string;
}

const VisionCard: FC<VisionCardProps> = ({
  icon,
  title,
  description,
  titleClassName,
  iconBgClassName,
}) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
    <div
      className={`w-12 h-12 rounded-2xl ${iconBgClassName} flex items-center justify-center mb-6`}
    >
      <span className="text-2xl">{icon}</span>
    </div>
    <h3
      className={`${titleClassName} font-black text-xl mb-4 tracking-wide`}
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
    >
      {title}
    </h3>
    <p className="text-emerald-100/80 leading-relaxed">{description}</p>
  </div>
);

const Vision: FC = () => {
  return (
    <section
      id="vision"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #064e3b 0%, #022c22 50%, #0d9488 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Vision &amp; Mission
          </h2>
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <VisionCard
            icon="🌍"
            title="Vision"
            description="To become a trusted global supplier from Indonesia."
            titleClassName="text-emerald-300"
            iconBgClassName="bg-emerald-400/20"
          />
          <VisionCard
            icon="🤝"
            title="Mission"
            description="Deliver quality products sustainably and build long-term partnerships."
            titleClassName="text-teal-300"
            iconBgClassName="bg-teal-400/20"
          />
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const ContactItem: FC<ContactItemProps> = ({ icon, label, value, href }) => {
  const inner = (
    <>
      <span className="text-2xl">{icon}</span>
      <div className="text-left">
        <p className="text-emerald-400 text-xs tracking-widest uppercase mb-1">
          {label}
        </p>
        <p className="text-white font-medium group-hover:text-emerald-300 transition-colors">
          {value}
        </p>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 bg-emerald-900/40 border border-emerald-700/30 hover:border-emerald-400/50 rounded-2xl px-6 py-4 transition-all duration-300 group";

  return href ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <div className={`${className} cursor-pointer`}>{inner}</div>
  );
};

const Contact: FC = () => {
  return (
    <section id="contact" className="bg-emerald-950 py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-emerald-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">
          Get In Touch
        </p>
        <h2
          className="text-4xl md:text-5xl font-black text-white mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Contact Us
        </h2>
        <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-12" />

        <div className="space-y-4">
          <ContactItem
            icon="✉️"
            label="Email"
            value="contact@example.com"
            href="mailto:contact@example.com"
          />
          <ContactItem icon="💬" label="WhatsApp" value="+62 xxx xxxx" />
        </div>
      </div>
    </section>
  );
};

const Footer: FC = () => {
  const thisYear = new Date().getFullYear()
  return (
    <footer className="bg-black py-8 px-6 text-center border-t border-emerald-900/50">
      <p className="text-white text-sm tracking-widest">
        © {thisYear} PT Archinus Uniex Noer. All rights reserved.
      </p>
    </footer>
  );
};

const Home: FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

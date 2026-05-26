"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { CalendarDays, Sparkles, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Reviews",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Marhaba Cafe & Restaurant"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Experience Authentic Flavors at Marhaba Cafe & Restaurant"
      description="Savor delicious Indian cuisine in a cozy and inviting ambiance. Perfect for dine-in or a quick takeaway meal with friends and family."
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg",
          imageAlt: "Cozy restaurant interior with warm lighting",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pakistan-meal-composition-with-copy-space_23-2148821532.jpg",
          imageAlt: "Delicious Biryani served on a plate",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-high-protein-meal-composition_23-2149089634.jpg",
          imageAlt: "Paneer Tikka skewers grilled to perfection",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-shot-hummus-wooden-bowl-with-wooden-spoon-garlic-pieces-black-table_181624-31971.jpg",
          imageAlt: "Creamy Butter Chicken with fresh naan bread",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-asian-girl-barista-working-cafe-brewing-coffee-v-preparing-order-counter_1258-199495.jpg",
          imageAlt: "Friendly staff serving food in restaurant",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-little-cookie-cake-with-lemon-slices-candies-dark-background-cake-biscuit-fruit-citrus-sweet-cookies_140725-110230.jpg",
          imageAlt: "Assortment of traditional Indian sweets",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Our Story & Your Favorite Spot"
      description="Marhaba Cafe & Restaurant welcomes you to a culinary journey through authentic Indian flavors. Located in the heart of New Delhi, we pride ourselves on serving delicious, freshly prepared meals in a warm and attentive environment. Whether you're dining in, grabbing a takeaway, or planning a special event, we ensure every visit is a memorable one. Our doors are open until 3 AM for your late-night cravings!"
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-taking-food-photos_23-2149294502.jpg"
      imageAlt="Elegant interior of Marhaba Cafe & Restaurant"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Authentic Indian Cuisine",
          tags: [
            "Taste",
            "Tradition",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-stuffed-eggplant-rolls-white-oval-plate-different-spices-small-bowls-grey-free-place_140725-105825.jpg",
          imageAlt: "Spices and ingredients for Indian cuisine",
        },
        {
          id: "2",
          title: "Cozy & Welcoming Ambiance",
          tags: [
            "Comfort",
            "Relaxation",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/latte-coffee-cup-table_1203-7315.jpg",
          imageAlt: "Cozy cafe interior with warm lighting",
        },
        {
          id: "3",
          title: "Exceptional Service & Staff",
          tags: [
            "Hospitality",
            "Care",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-receptionist-helps-retired-old-man-with-hotel-checkin-verifying-identity-retrieving-reservation-details-female-concierge-holds-checks-passport-male-tourist-focus-background_482257-75152.jpg",
          imageAlt: "Friendly waiter serving a dish",
        },
      ]}
      title="Why Choose Marhaba?"
      description="Discover what makes Marhaba Cafe & Restaurant a beloved spot for food lovers across New Delhi. We're dedicated to quality, comfort, and an unforgettable dining experience."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Marhaba Special",
          name: "Butter Chicken",
          price: "₹550",
          rating: 5,
          reviewCount: "120 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-butter-chicken-black-bowl-wooden-table_123827-20593.jpg",
          imageAlt: "Classic Butter Chicken",
        },
        {
          id: "2",
          brand: "Traditional Delight",
          name: "Chicken Biryani",
          price: "₹600",
          rating: 4.5,
          reviewCount: "95 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-pakistan-meal-arrangement_23-2148821513.jpg",
          imageAlt: "Fragrant Chicken Biryani",
        },
        {
          id: "3",
          brand: "Vegetarian Favorite",
          name: "Paneer Tikka",
          price: "₹450",
          rating: 4.8,
          reviewCount: "80 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-tofu-healthy-food_1339-8240.jpg",
          imageAlt: "Grilled Paneer Tikka",
        },
        {
          id: "4",
          brand: "Comfort Food",
          name: "Dal Makhani",
          price: "₹380",
          rating: 4.2,
          reviewCount: "70 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/freshly-cooked-vegetarian-pumpkin-soup-with-cilantro-garnish-generated-by-ai_188544-43097.jpg",
          imageAlt: "Creamy Dal Makhani",
        },
        {
          id: "5",
          brand: "Rich & Flavorful",
          name: "Chicken Korma",
          price: "₹580",
          rating: 4.7,
          reviewCount: "65 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/indian-food-frame-top-view_23-2148723467.jpg",
          imageAlt: "Mughlai Chicken Korma",
        },
        {
          id: "6",
          brand: "Perfect Accompaniment",
          name: "Assorted Naan Bread",
          price: "₹150",
          rating: 4.9,
          reviewCount: "110 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/bottom-view-cable-knit-breadsticks-wood-board-small-white-flowers-table_179666-43671.jpg",
          imageAlt: "Freshly baked Naan Bread",
        },
      ]}
      title="Our Delicious Menu"
      description="Explore a variety of mouth-watering dishes, from traditional favorites to Marhaba specials. Each dish is prepared with fresh ingredients and authentic recipes."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Tarannum Khan",
          date: "6 months ago",
          title: "Wonderful Experience!",
          quote: "Visited Marhaba Café recently, and honestly, it was such a wonderful experience! The food was absolutely delicious — full of flavor and perfectly cooked. The service was warm and attentive, making us feel truly welcomed. The ambiance was wonderful!",
          tag: "Dine-in",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",
          avatarAlt: "Tarannum Khan",
          imageSrc: "http://img.b2bpic.net/free-photo/rustic-chandelier-made-bulbs-ropes-dining-table-vintage-kitchen_181624-9173.jpg",
          imageAlt: "indian woman portrait smiling happy",
        },
        {
          id: "2",
          name: "Mohammad Noman",
          date: "3 months ago",
          title: "Decent Food, Room for Improvement",
          quote: "Visited Marhaba Cafe recently. The food was decent and had some good flavors, but the service was a bit slow. It's an okay spot if you aren't in a rush, but there is definitely room for improvement in terms of efficiency.",
          tag: "Local Guide",
          avatarSrc: "http://img.b2bpic.net/free-photo/black-businessman-sad-expression_1194-2739.jpg",
          avatarAlt: "Mohammad Noman",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pakistan-meal-composition-with-copy-space_23-2148821532.jpg",
          imageAlt: "indian woman portrait smiling happy",
        },
        {
          id: "3",
          name: "Khatoon Hoon",
          date: "5 months ago",
          title: "Beautiful Café with Cozy Vibes",
          quote: "Such a beautiful café with a calm, aesthetic ambience. The food quality was really good and everything tasted fresh. Loved the cozy vibes and the prices are totally affordable.",
          tag: "Ambiance",
          avatarSrc: "http://img.b2bpic.net/free-photo/selfie-portrait-videocall_23-2149186144.jpg",
          avatarAlt: "Khatoon Hoon",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-high-protein-meal-composition_23-2149089634.jpg",
          imageAlt: "indian woman portrait smiling happy",
        },
        {
          id: "4",
          name: "Rahul Sharma",
          date: "2 months ago",
          title: "Exceptional Food & Warm Hospitality",
          quote: "I really like the place, food and service. The owner is also very good. They made us feel right at home! Highly recommend for an authentic Indian meal.",
          tag: "Customer",
          avatarSrc: "http://img.b2bpic.net/free-photo/enthusiastic-asian-female-entrepreneur-cafe-owner-with-tablet-wearing-shop-uniform-standing-with_1258-203446.jpg",
          avatarAlt: "Rahul Sharma",
          imageSrc: "http://img.b2bpic.net/free-photo/overhead-shot-hummus-wooden-bowl-with-wooden-spoon-garlic-pieces-black-table_181624-31971.jpg",
          imageAlt: "indian woman portrait smiling happy",
        },
        {
          id: "5",
          name: "Priya Devi",
          date: "1 month ago",
          title: "Menu is 10/10!",
          quote: "The staff makes you feel right at home, and the menu is 10/10. Every dish we tried was delicious and fresh. Definitely coming back for more Marhaba magic!",
          tag: "Regular",
          avatarSrc: "http://img.b2bpic.net/free-photo/chef-standing-by-counter-serving-salad-from-cabbage-holding-chilli-pepper_1303-32139.jpg",
          avatarAlt: "Priya Devi",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-asian-girl-barista-working-cafe-brewing-coffee-v-preparing-order-counter_1258-199495.jpg",
          imageAlt: "indian woman portrait smiling happy",
        },
      ]}
      title="What Our Guests Say"
      description="Hear from our happy customers about their experiences at Marhaba Cafe & Restaurant. Your satisfaction is our greatest reward!"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          icon: Sparkles,
          title: "Happy Customers",
          value: "130+",
        },
        {
          id: "2",
          icon: CalendarDays,
          title: "Years in Business",
          value: "7",
        },
        {
          id: "3",
          icon: Utensils,
          title: "Dishes Served Daily",
          value: "200+",
        },
      ]}
      title="Marhaba by the Numbers"
      description="Proud of the journey and the community we serve, constantly striving for culinary excellence and guest satisfaction."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Do you take reservations?",
          content: "Yes, we highly recommend making a reservation, especially for dinner and weekend visits, to ensure you get a table. You can book through Swiggy Dining or by calling us directly.",
        },
        {
          id: "2",
          title: "What are your operating hours?",
          content: "We are open daily from 11 AM to 3 AM. Please note that hours may vary on public holidays like Eid al-Adha. Check our latest timings on Google Maps or call us.",
        },
        {
          id: "3",
          title: "Do you offer vegetarian/vegan options?",
          content: "Absolutely! Our menu features a wide range of delicious vegetarian dishes. While we have many vegan-friendly options, please inform our staff about your dietary preferences, and we will guide you through the best choices.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cook-is-fry-vegetables-with-spices-sauce-wok-cooking-process-asian-restaurant_613910-4977.jpg"
      imageAlt="Chef preparing food in a professional kitchen"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about Marhaba Cafe & Restaurant, from reservations to dietary needs."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Visit Us or Make a Reservation"
      description="Located in Shaheen Bagh, New Delhi, Marhaba Cafe & Restaurant is ready to welcome you. Drop by for a delicious meal or send us a message for special inquiries."
      inputPlaceholder="Your Name / Email"
      buttonText="Send Message"
      termsText="By sending a message, you agree to our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Menu",
              href: "#menu",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Swiggy",
              href: "https://www.swiggy.com",
            },
            {
              label: "Zomato",
              href: "https://www.zomato.com",
            },
            {
              label: "Google Maps",
              href: "https://www.google.com/maps/place/Marhaba+Cafe+%26+Restaurant",
            },
          ],
        },
      ]}
      logoText="Marhaba Cafe & Restaurant"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

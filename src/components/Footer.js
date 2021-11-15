import React from 'react'
import SimpleReactFooter from "simple-react-footer";


const Footer = () => {

    const description = "Shop designer fashion. Fast shipping & easy returns. Trending & sought-after styles. Enjoy access to limited-release streetwear collections and rare sneaker drops. More Than 500 Designers. Exclusive Collections. Secure & Easy Checkout.";
    const title = "SANGHWA STUDIO";
    const columns = [
      {
          title: "Resources",
          resources: [
              {
                  name: "About",
                  link: "/about"
              },
              {
                  name: "Careers",
                  link: "/careers"
              },
              {
                  name: "Contact",
                  link: "/contact"
              },
              {
                  name: "Admin",
                  link: "/admin"
              }
          ]
      },
      {
          title: "Legal",
          resources: [
              {
                  name: "Privacy",
                  link: "/privacy"
              },
              {
                  name: "Terms",
                  link: "/terms"
              }
          ]
      },
      {
          title: "Visit",
          resources: [
              {
                  name: "Locations",
                  link: "/locations"
              },
              {
                  name: "Culture",
                  link: "/culture"
              }
          ]
      }
   ];
   return <SimpleReactFooter 
      description={description} 
      title={title}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="black"
      iconColor="black"
      backgroundColor="bisque"
      fontColor="black"
      copyrightColor="darkgrey"
   />
    
}

export default Footer

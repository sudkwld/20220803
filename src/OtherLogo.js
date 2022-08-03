import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imagedata: {
    width: "100%"
  },
  mainSlider: {
    backgroundColor: "black"
  },
  componentsection: {
    height: "175px",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    borderRadius: "20px"
  },
  titledesc: {
    position: "relative",
    top: "100%",
    padding: "20px",
    textAlign: "center",
    color: "white",
    fontSize: "14px",
    fontFamily: "ProximaNovaA"
  },
  contentitems: {
    padding: "10px",
    maxWidth: "90%"
  }
}));

var dataitems = {
  Datadescription: [
    {
      ctaUrl: "CTAurl 1",
      subTitle: "",
      backgroundImage: "https://i.ibb.co/YfSYBN9/Flight-2.png",
      logo: "logo 1",
      title: "Electronics",
      type: "offer",
      ctaLabel: "CTA label 1"
    },
    {
      ctaUrl: "CTAurl 2",
      subTitle: "",
      backgroundImage: "https://i.ibb.co/KjHHHGd/Luxury.png",
      logo: "logo 2",
      title: "Fashion",
      type: "offer",
      ctaLabel: "CTA label 2"
    },
    {
      ctaUrl: "CTAurl 3",
      subTitle: "",
      backgroundImage: "https://i.ibb.co/0257jjS/Hotel-2.png",
      logo: "logo 3",
      title: "Beauty",
      type: "offer",
      ctaLabel: "CTA label 3"
    },
    {
      ctaUrl: "CTAurl 4",
      subTitle: "",
      backgroundImage: "https://i.ibb.co/2yfsrhc/Group-23603.png",
      logo: "logo 4",
      title: "Luxury",
      type: "offer",
      ctaLabel: "CTA label 4"
    },
    {
      ctaUrl: "CTAurl 5",
      subTitle: "",
      backgroundImage: "https://i.ibb.co/dKSYVwm/Group-23599.png",
      logo: "logo 5",
      title: "Airline",
      type: "offer",
      ctaLabel: "CTA label 5"
    },
    {
      ctaUrl: "CTAurl 6",
      subTitle: "",
      backgroundImage: "https://i.ibb.co/47xBDJN/Shape.png",
      logo: "logo 6",
      title: "Essentials",
      type: "offer",
      ctaLabel: "CTA label 6"
    },
    {
      ctaUrl: "CTAurl 7",
      subTitle: "",
      backgroundImage: "https://i.ibb.co/0257jjS/Hotel-2.png",
      logo: "logo 7",
      title: "Travel",
      type: "offer",
      ctaLabel: "CTA label 7"
    }
  ]
};

const SliderComponent = (props) => {
  const classes = useStyles(props);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings} className={classes.mainSlider}>
        {dataitems.Datadescription &&
          dataitems.Datadescription.map((maincontent, index) => (
            <Grid key={index} className={classes.contentitems}>
              <Grid
                className={classes.componentsection}
                style={{
                  backgroundImage: "url('" + maincontent.backgroundImage + "')"
                }}
              ></Grid>
              <Grid className={classes.titledesc}>{maincontent.title}</Grid>
            </Grid>
          ))}
      </Slider>
    </div>
  );
};
export default SliderComponent;

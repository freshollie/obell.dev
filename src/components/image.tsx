import React, { ReactNode } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import { ImageSharpQuery } from "../../graphql-types";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface ImageProps {
  imgName: string;
}

const Image: React.FC<ImageProps> = ({ imgName }) => (
  <StaticQuery
    query={graphql`
      query ImageSharp {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data: ImageSharpQuery): ReactNode => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName
      );
      if (!image) {
        return null;
      }

      return <Img fluid={image.node.fluid as FluidObject} />;
    }}
  />
);

export default Image;

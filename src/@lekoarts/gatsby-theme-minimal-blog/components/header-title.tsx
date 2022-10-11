/** @jsx jsx */
import { Link, graphql, useStaticQuery } from "gatsby";
import { jsx } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          siteImage
        }
      }
    }
  `);

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{
        color: `heading`,
        textDecoration: `none`,
        display: `flex`,
        flexDirection: `row`,
      }}
    >
      <StaticImage
        width={30}
        objectFit="contain"
        src="../../../imgs/pedlar-logo-black.svg"
        alt="Pedlar Logo"
      />
      <div
        sx={{
          my: 0,
          fontWeight: `semibold`,
          fontSize: [3, 4],
          paddingLeft: `10px`,
        }}
      >
        {siteTitle}
      </div>
    </Link>
  );
};

export default HeaderTitle;

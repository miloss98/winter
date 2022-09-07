import { useState, useEffect } from "react";
import { linksData } from "../../data/links";
import { Link } from "native-base";
interface LinksInterface {
  id: number;
  title: string;
  href: string;
}
export const NavLinks = () => {
  const [links, setLinks] = useState<LinksInterface[]>([]);

  useEffect(() => {
    setLinks(linksData);
  }, []);
  return (
    <>
      {links.map((link) => {
        const { id, title, href } = link;
        return (
          <Link
            key={id}
            mr="30px"
            _text={{
              color: "white",
              fontSize: "1.2rem",
              textTransform: "capitalize",
              textDecoration: "none",
            }}
            _hover={{
              borderBottomWidth: "2px",
              borderBottomColor: "orange.500",
            }}
            textDecorationLine="none"
            href={href}
          >
            {title}
          </Link>
        );
      })}
    </>
  );
};

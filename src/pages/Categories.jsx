import CategoryCard from "../components/CategoryCard";
import svcs from "../assets/data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container } from "react-bootstrap";
function Categories() {
  const categories = [...new Set(svcs.map((o) => o.category))];
  const services = [];

  categories.map((category) => {
    services.push(svcs.filter((service) => service.category === category));
  });

  return (
    <Container>
      <p>Explore Categories</p>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {categories.map(function (category, i) {
            return (
              <div style={{ padding: "20px" }} key={i}>
                <CategoryCard name={categories[i]} services={services[i]} />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
}
export default Categories;

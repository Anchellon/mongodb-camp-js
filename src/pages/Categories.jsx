import CategoryCard from "../components/CategoryCard";
// import svcs from "../assets/data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router";
export async function loader() {
  const res = await fetch("http://localhost:3000/tools");
  if (!res.ok) {
    throw {
      message: "Failed to fetch services",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.tools;
}
function Categories() {
  const tools = useLoaderData();
  const categories = [...new Set(tools.map((o) => o.category))];
  const services = [];

  categories.map((category) => {
    services.push(tools.filter((service) => service.category === category));
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

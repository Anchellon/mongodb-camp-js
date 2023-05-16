import CategoryCard from "../components/CategoryCard";
import svcs from "../assets/data";
function Categories() {
  const categories = [...new Set(svcs.map((o) => o.category))];
  const services = [];

  categories.map((category) => {
    services.push(svcs.filter((service) => service.category === category));
  });

  return (
    <>
      <p>Explore Categories</p>
      <div className="row">
        <div className="col-3 mb-3">
          {categories.map(function (category, i) {
            return (
              <CategoryCard
                name={categories[i]}
                services={services[i]}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Categories;

import CategoryCard from "../components/CategoryCard";
import svcs from "../assets/data";
function Categories() {
  let categories = ["AI", "cat2"];
  const services = svcs.filter((service) => service.category === categories[0]);
  return (
    <>
      <p>Explore Categories</p>
      <div className="row">
        <div className="col-3 mb-3">
          <CategoryCard name={"hi"} services={services} />
        </div>
        {/* <div className="col-3 mb-3">
          <CategoryCard />
        </div>
        <div className="col-3 mb-3">
          <CategoryCard />
        </div>
        <div className="col-3 mb-3">
          <CategoryCard />
        </div>
        <div className="col-3 mb-3">
          <CategoryCard />
        </div>
        <div className="col-3 mb-3">
          <CategoryCard />
        </div>
        <div className="col-3 mb-3">
          <CategoryCard />
        </div> */}
      </div>
    </>
  );
}
export default Categories;

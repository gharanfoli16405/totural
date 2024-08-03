import {
  useParams,
  createSearchParams,
  useSearchParams,
  Link,
} from "react-router-dom";
import { users } from "constant/users";

const ProductList = () => {
  let { id } = useParams();
  // console.log("🚀 ~ useLocation:", useLocation());
  // console.log("🚀 ~ useParams:", useParams());
  // console.log("useSearchParams", useSearchParams());
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(); //get queryItem
  console.log(Object.fromEntries([...searchParams])); //Object list
  const paramsList = Object.fromEntries([...searchParams]);
  // console.log(users);
  const favoriteRole = searchParams.get("role");
  const favoriteGender = searchParams.get("gender");

  return (
    <>
      <Link to="/" replace>
        relative
      </Link>
      {["customer", "admin"].map((role) => (
        <p key={role}>
          <label htmlFor={`id_${role}`}>{role}</label>
          <input
            type="radio"
            name="role"
            value={role}
            checked={favoriteRole === role}
            onChange={(event) => {
              setSearchParams(
                { ...paramsList, role: event.target.value },
                false
              );
            }}
          />
        </p>
      ))}

      {["man", "woman"].map((gender) => (
        <p key={gender}>
          <label htmlFor={`id_${gender}`}>{gender}</label>
          <input
            type="radio"
            name="gender"
            value={gender}
            checked={favoriteGender === gender}
            onChange={(event) => {
              setSearchParams(
                { ...paramsList, gender: event.target.value },
                false
              );
            }}
          />
        </p>
      ))}

      <div className="flex flex-wrap">
        {users.map((item) => (
          <div key={item.id} className="border border-blue-600 me-4 mb-20">
            <figure className="w-30 h-30">
              <img className="w-full h-full" src={item.avatar} alt="" />
              <figcaption className="text-center py-5">{item.role}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;

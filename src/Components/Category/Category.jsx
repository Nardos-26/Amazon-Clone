import { categoryInfos } from "./Categoryfullinfos";
import CategoryCard from "./CategoryCard";
import styles from "./Category.module.css";

function Category() {
  return (
    <section className={styles.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Category;

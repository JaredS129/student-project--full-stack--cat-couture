import { useEffect, useState } from "react";
import api from "../../api";
import ProductList from "./ProductList";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import PaginationControls from "./PaginationControls";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    // We use AbortController (https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
    // to clean up so that we don’t introduce a memory leak
    // (https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup)
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await api.getProducts(limit, page);
        if (!result.ok) {
          throw new Error("API Error");
        }
        const data = await result.json();
        if (!abortController.signal.aborted) {
          setProducts(data.products);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(true);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [limit, page]);

  const onPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <main>
      <PaginationControls
        onPrev={onPrev}
        onNext={onNext}
        page={page}
        totalPages={totalPages}
      />
      {loading && <Loader />}
      {error && <ErrorMessage message="Error fetching products" />}
      <ProductList products={products} className="main-content" />
      <PaginationControls
        onPrev={onPrev}
        onNext={onNext}
        page={page}
        totalPages={totalPages}
      />
    </main>
  );
};

export default ProductPage;

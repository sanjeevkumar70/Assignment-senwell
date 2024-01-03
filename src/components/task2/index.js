
import { useApiData } from './customHooks';

const FetchApi = () => {

    const endpoint = 'https://dummyjson.com/products/1'
    const { data, loading, error, refetchData } = useApiData(endpoint);
    if (loading) {
        return <p>Loading...</p>;
    }


    console.log(data, "i am not sure");

    return (
        <div>
            <h2> API Data</h2>
            {error ? (
                <p>Error: {error.message}</p>
            ) : (
                <div>
                    <h3>  BrandName:  {data.brand}</h3>
                    <h3>  Category:  {data.category}</h3>
                    <p>  Description:  {data.description}</p>
                    <h3>  Model name:  {data.title}</h3>
                    {data?.images.map((item) => {
                        return (
                            <>
                                <img src={item} width="100px" height={"100px"} style={{ marginRight: 20, border: "5px solid gray", borderRadius: 10 }} />
                            </>
                        )
                    })}

                </div>
            )}
            <button onClick={refetchData}>Fetch Api</button>
        </div>
    );
};

export default FetchApi
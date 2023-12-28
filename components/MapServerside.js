
import dynamic from "next/dynamic";
const Map = dynamic(()=> import('./Map'),{
    loading: () => <p>loading...</p>,
    ssr:false
});
export default Map;

const FetchApi = async (changeDeath) => {
    const res = await fetch('https://breakingbadapi.com/api/random-death');
    const json = await res.json();
    
    changeDeath(json);
};

export default FetchApi;

//,{ cache: "no-cache"}


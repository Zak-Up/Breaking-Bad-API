const FetchApi = async (changeDeath) => {
    const res = await fetch('https://breakingbadapi.com/api/random-death',{ cache: "reload"});
    const json = await res.json();
    
    changeDeath(json);
};

export default FetchApi;


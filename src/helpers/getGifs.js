export const getGifs = async (category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=rQQ01BXx9gUkGCp97oNficzIT74cgghP&q=${category}
    &limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images.downsized_large.url
        }
    })

    return gifs;
    
}
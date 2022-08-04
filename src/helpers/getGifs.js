export const getGifs = async (nameCategory) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=eNIPr7Kp89VelYeZYmtegNiFF7zHeCaD&q=${nameCategory}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
}; 

 
  
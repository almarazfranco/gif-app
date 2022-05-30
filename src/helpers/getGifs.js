const getGifs = async (category) => {

  try {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=54mJifc3nvupFr99mg9FytBiLHqRawZ3&q=${encodeURI(category)}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( element => {

      return {
        id: element.id,
        url: element.images.downsized_medium.url,
        title: element.title,
      }

    });
    
    return gifs;  

  } catch (err) {
    console.warn(err)
  }

};

export default getGifs;
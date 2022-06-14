import {backend} from "../BackendUrl";

export const fetchInfo = async (value: string, mode: string) => {
  const myHeader = new Headers();
  myHeader.append('Access-Control-Allow-Origin', '*');
  myHeader.append('Content-Type', 'application/json');

  const url = value === "" || value === "empty" ?
    `${backend}/api/products/` :
    `${backend}/api/products/search?q=${value} &type=${(Number)(mode!=="name")}`;


  const response = await fetch(url,{
    mode: "cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });

  const json = await response.json();

  const tmp = json.map((item: any) => ({
    id: item.id ? item.id : -1,
    title: item.name ? item.name : "empty",
    image: item.img ? item.img : "empty"
  }));
  return tmp;
}

export const fetchItem = async (id: string) => {

  const myHeader = new Headers();
  myHeader.append('Access-Control-Allow-Origin', '*');
  myHeader.append('Content-Type', 'application/json');

  const url = `${backend}/api/products/${id}`;

  const response = await fetch(url,{
    mode: "no-cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });

  const json = await response.json();

  const data = {
    img: json.img,
    name: json.name,
    aroma: json.aroma,
    description: json.description,
    usage: json.usage.split(';').map((item: string) => {
      const t = item.split(':');
      return {
        title: t[0],
        text: t[1]
      }
    }),
    benefits: json.benefits.split(';'),
    warnings: json.warnings
  }
  return data;
}

export const fetchSimilarCards = async (id: string) => {
  const myHeader = new Headers();
  myHeader.append('Access-Control-Allow-Origin', '*');
  myHeader.append('Content-Type', 'application/json');

  const url = `${backend}/api/products/${id}/similar`;

  const response = await fetch(url,{
    mode: "no-cors",
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });

  const json = await response.json();

  const data = json.map((item: any) => ({
    id: item.id ? item.id : -1,
    name: item.name ? item.name : "empty",
    img: item.img ? item.img : "empty"
  }));

  return data;

  // const wait = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(1);
  //   }, 1000);
  // });
  // await wait;
  //
  // const arr:Array<{id: number, img:string, name:string}> = [];
  // for (let i = 0; i < 10; i++) {
  //   arr.push({
  //     img: i%2 ? "https://www.doterra.com/medias/2x3-5ml-arbovitae.png?context=bWFzdGVyfHJvb3R8Mzg2MTN8aW1hZ2UvcG5nfGgzYy9oMTQvMjc5OTAzOTMxMjY5NDIucG5nfGZlZjI5ZTU1NjA5NjJlODg1ODg0OGRiNGI1Zjk3ZDRiZjYzMjY4YTc3NTUwNDlkYWNhYjczM2I5YWEyYWQzODM"
  //       : "https://www.doterra.com/medias/2x3-10ml-frankincense.png?context=bWFzdGVyfHJvb3R8MzM0OTV8aW1hZ2UvcG5nfGg4My9oMjEvMjc5OTAzOTY3MzE0MjIucG5nfGM4NDhmYjU5OGI2ZjUwNTZmY2E0NDdkNmFmYjFiOGRkNzU3ZjkzMWVmZWE3Yjk3M2NiYjdmODRkYzNmZWUzN2E",
  //     name: i % 2 ? "Arborvitae Oil" : "Frankincense Touch",
  //     id: i
  //   })
  // }
  // arr[4].img = "sdasda";
  // return arr;
}

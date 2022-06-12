export const fetchCards = async (value: string, mode: string) => {
  const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  await wait;

  const arr:Array<{image:string, title:string}> = [];
  for (let i = 0; i < 10; i++) {
    arr.push({
      image: i%2 ? "https://www.doterra.com/medias/2x3-5ml-arbovitae.png?context=bWFzdGVyfHJvb3R8Mzg2MTN8aW1hZ2UvcG5nfGgzYy9oMTQvMjc5OTAzOTMxMjY5NDIucG5nfGZlZjI5ZTU1NjA5NjJlODg1ODg0OGRiNGI1Zjk3ZDRiZjYzMjY4YTc3NTUwNDlkYWNhYjczM2I5YWEyYWQzODM"
        : "https://www.doterra.com/medias/2x3-10ml-frankincense.png?context=bWFzdGVyfHJvb3R8MzM0OTV8aW1hZ2UvcG5nfGg4My9oMjEvMjc5OTAzOTY3MzE0MjIucG5nfGM4NDhmYjU5OGI2ZjUwNTZmY2E0NDdkNmFmYjFiOGRkNzU3ZjkzMWVmZWE3Yjk3M2NiYjdmODRkYzNmZWUzN2E",
      title: i % 2 ? "Arborvitae Oil" : "Frankincense Touch"
    })
  }
  arr[4].image = "sdasda";
  return arr;
}

export const fetchItem = async (id: string) => {
  const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  await wait;
  const textt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam atque commodi consectetur dolor eius, ex, explicabo fuga id impedit, maxime molestiae nam necessitatibus odio officia perspiciatis provident quas quidem quisquam quos repellendus repudiandae saepe similique temporibus unde vel voluptatibus. Adipisci amet architecto assumenda aut blanditiis consequatur dicta dolorum, ea et eveniet fugiat harum id impedit incidunt ipsam iure magni mollitia numquam odio optio perspiciatis porro possimus provident quae quas quo quod temporibus tenetur, veritatis voluptatum. Aspernatur autem commodi deserunt doloribus et fugit itaque minus nemo nihil, nobis nostrum numquam odio pariatur perferendis quae, quia repellat suscipit tempora velit voluptate"

  const res = {
    img:"img",
    name:`name with id ${id}`,
    aroma:"aroma",
    description:textt,
    usage:textt,
    benefits:textt.split('.')
  };

  console.log(res);

  return res;

}

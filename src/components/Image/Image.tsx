import {FC, useState, useEffect} from "react";
import notFoundImg from "./404.png"
import "./Image.scss"

type ImageSmartProps = React.HTMLAttributes<HTMLImageElement> & {
  src: string;
}

export const ImageSmart:FC<ImageSmartProps> = ({src, ...props}) => {
  const [img, setImg] = useState(src);

  const set404 = () => {
    setImg(notFoundImg);
  }

  useEffect(()=>{
    setImg(src);
  }, [src]);

  return (
    <div className="smart-img">
      <img {...props} src={img} onError={set404}/>
    </div>);
}

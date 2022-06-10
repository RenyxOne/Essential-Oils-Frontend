import React, {FC} from "react";
import {Header} from "../../components/Header/Header";
import {Item} from "../../components/Item/Item";
import {Footer} from "../../components/Footer/Footer";

const textt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam atque commodi consectetur dolor eius, ex, explicabo fuga id impedit, maxime molestiae nam necessitatibus odio officia perspiciatis provident quas quidem quisquam quos repellendus repudiandae saepe similique temporibus unde vel voluptatibus. Adipisci amet architecto assumenda aut blanditiis consequatur dicta dolorum, ea et eveniet fugiat harum id impedit incidunt ipsam iure magni mollitia numquam odio optio perspiciatis porro possimus provident quae quas quo quod temporibus tenetur, veritatis voluptatum. Aspernatur autem commodi deserunt doloribus et fugit itaque minus nemo nihil, nobis nostrum numquam odio pariatur perferendis quae, quia repellat suscipit tempora velit voluptate."


export const ItemPage:FC = () => {
  return (
    <div>
      <Header/>
      <main>
        <Item img={"img"} name={"name"} aroma={"aroma"} description={textt} usage={textt} benefits={textt.split('.')}/>
      </main>
      <Footer/>
    </div>
  );
}

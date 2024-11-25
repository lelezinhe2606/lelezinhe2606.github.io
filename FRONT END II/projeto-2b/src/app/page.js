import styles from "./page.module.css";
import Image  from "next/image";
// import album from "../../public/images/"

export default function Home() {
  return (
    <div>
      <h1>Olivia Rodrigo1</h1>
      <Image className={styles.img} src='/images/oliviashow.jpg' 
      alt="Imagem do Música" width={300} height={450}/>    
 
   
      
    </div>
  );
}




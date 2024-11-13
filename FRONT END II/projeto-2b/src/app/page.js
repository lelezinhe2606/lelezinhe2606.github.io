import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Meu titulo</h1>
      <Image className = {styles.img} src= '/Images/flor.png' alt="imagem flor lilas" width={400} height={400} />
    </div>
  );
  }

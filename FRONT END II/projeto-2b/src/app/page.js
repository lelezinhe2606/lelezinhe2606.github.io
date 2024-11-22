import styles from "./page.module.css";
import Image from "next/image";
// import album from "../../public/images/"

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>𝕠𝕝𝕚𝕧𝕚𝕒 𝕣𝕠𝕕𝕣𝕚𝕘𝕠</h1>
      <Image
        className={styles.img}
        src='/images/fogoolivia.gif'
        alt="Imagem do Show"
        width={300}
        height={450}
      />
    </div>
  );
}

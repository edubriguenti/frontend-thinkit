import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Think IT
                </h1>
                <p className={styles.paragrafo}>
                    Testando 123
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} alt='Imagem' src={circuloColorido} aria-hidden={true} />
                <img className={styles.minhaFoto} alt='Foto' src={minhaFoto} />

            </div>
        </div>
    )
}
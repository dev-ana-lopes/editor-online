import "./header.scss"
import Image from "next/image";


export function Header(){
    return(
        <div className="header">
            <div className="logo">
                <Image
                    src="/Logo.svg"
                    alt="logotipo do site"
                    width={146}
                    height={34}
                    priority
                /> 
            </div>
            <div className="campo-pesquisa">
                <p>Busque por algo</p>
            </div>
            
            <div className="perfil">
                <div>
                    <Image className="img"
                        src="/Photo.svg"
                        alt="foto do Harry"
                        width={32}
                        height={32}
                        priority
                    /> 

                </div>

                <div>
                    <a href="">Harry</a>
                </div>
                
                
            </div>
      </div>
    )
}
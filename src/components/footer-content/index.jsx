import React from 'react'
import "./index.css"
import Button from "../button"
import image1 from "../../assets/img/img6.png"

const FooterContent = () => {
  return (
    <div className='_container'> 
        <div className='footer-content'>
            <div className='footer-title'>
                <h1>Empresas que acreditam em nossas solução!</h1>
                <Button text="Quero fazer parte!" variant="info" />
                <div className='footer-assets'>
                    <img src={image1} alt="" />
                </div>
                <h2>Além da Dragon Pharma, oferecemos uma ampla gama de serviços para atender a todas as suas necessidades empresariais. <strong>Se você deseja saber mais sobre como podemos ajudar com seu negócio a prosperar, entre em contato conosco.</strong> Estamos prontos para fornecer as informações e o suporte necessários para você alcançar o sucesso.
                </h2>
                <h3>
                    Entender como a Dragon pode ajudar minha empresa
                </h3>
            </div>
        </div>
    </div>
  )
}

export default FooterContent
import React from 'react'

import Image1 from "../../assets/img/img1.png"
import Image2 from "../../assets/img/img2.png"
import Image3 from "../../assets/img/img3.png"
import Image4 from "../../assets/img/img4.png"
import Image5 from "../../assets/img/img5.png"
import FoldIcon from "../../assets/icons/fold_icon.svg"
import ScanIcon from "../../assets/icons/scan_icon.svg"
import MoneyIcon from "../../assets/icons/money_icon.svg"

import "./main-content.css"

import Button from "../button"
import CallToAction from "../call-to-action";
import ModuleInfo from "../module-info";
import GridItem from "../grid";

const MainContent = () => {
  return (
    <div className="main-content">
      <section className="grid-container">
        <div className="section-heading">
          <h1 className="section-text">Módulos que Dev. oferece!</h1>
          <h2 className="section-description">
            Todas as soluções essenciais que vamos te entregar para você controlar
            100% a sua importação.
          </h2>

          <Button
            text="Eu quero!"
            variant="info"
          />
        </div>
        
        <div className="section-grid">
          <GridItem title="Financeiro" description="Tudo que precisa para controlar o dinheiro da sua empresa."/>
          <GridItem title="Fabricantes" description="Cadastre e registre todos os seus fabricantes"/>
          <GridItem title="Fornecedor" description="Cadastre e registre todos os seus fornecedores."/>
          <GridItem title="Orçamento"
                    description="Envie orçamentos para seus clientes aprovarem todas as informações."/>
          <GridItem title="Pedidos"
                    description="O seu orçamento vira um pedido com todas as informações necessárias."/>
          <GridItem title="Ordem de compra" description="O seu pedido vira uma ordem de compra."/>
          <GridItem title="Cadastros" description="Cadastre todos os produtos de forma muito detalhada."/>
          <GridItem title="Usuário" description="Cadastre e faça uma hierarquia entre os usuários."/>
        </div>
      </section>

      <CallToAction
        title="Módulo de Financeiro"
        image={Image1}
        content={[
          "Nosso módulo financeiro simplifica o gerenciamento de despesas e receitas, categorizando por centros de custo. Controle contas a pagar e a receber, faça lançamentos detalhados e cadastre centros de custo e contas.",
          <strong> Mantenha a organização financeira da sua empresa de forma fácil e eficiente!</strong>,
          <Button text="Quero aderir" variant="info"/>
        ]}
      />

      <CallToAction
        orientation="right"
        image={Image2}
        title="Módulo de Fabricantes"
        content={[
          <strong>Mantenha todos os seus fornecedores ao alcance com nosso módulo de fabricantes!</strong>,
          "Cadastre informações detalhadas, como CNPJ, endereço, pais de origem, telefone, celular, e-mail e site. Tudo em um único lugar para facilitar a gestão.",
          <Button text="Quero aderir" variant="info"/>
        ]}
      />

      <section className="modules-container">
        <ModuleInfo
          icon={MoneyIcon}
          title="Módulo de Orçamento"
          content={[
            <p>Este módulo permite <strong>criar orçamentos para clientes, incluindo informações como Itens, produtos,
              quantidades, fabricantes, temperaturas, origens, fornecedores e cotações em dólares.</strong></p>,
            <p>Também é possivel especificar o custo do despachante, imposto de importação, ICMS, armazenagem, além de
              calcular o valor total em dólares e em reais.</p>,
            <p>O status do orçamento pode ser acompanhado até se tornar um pedido.</p>
          ]}
        />


        <ModuleInfo
          icon={FoldIcon}
          title="Módulo de Pedidos"
          content={[
            <p>
              Após o orçamento, se inicia o módulo de pedido.
              <strong> Onde todas as informações do módulo anterior são passadas para esse com intuito de informar que o
                orçamento foi aprovado e então pode seguir com a linha do tempo.</strong>
            </p>,
            <p>O status do pedido pode ser acompanhato até se tornar uma ordem de compra.</p>,
          ]}
        />

        <ModuleInfo
          icon={ScanIcon}
          title="Módulo de Ordem de Compra"
          content={[
            <p>O módulo de ordem de compra gerencia o processo em que um pedido se transforma em uma ordem de
              compra.</p>,
            <p>Permite acompanhar o status da ordem, que pode estar aberta, enviada para o fornecedor, entregue ao
              cliente,
              faturada, paga, além de possibilitar anexar a nota fiscal correspondente.</p>,
            <strong>*Ao enviar a ordem de compra, o processo de checkout é feito pela Dragon</strong>
          ]}
        />
      </section>

      <CallToAction
        backdrop={true}
        image={Image3}
        title="Cadastros"
        subtitle="Organize seu catálogo com perfeição usando nosso módulo de produtos!"
        content={[
          <ul>
            <li>Cadastro completo</li>
            <li>Automatização de variaçõe</li>
            <li>Opções diversificadas</li>
          </ul>,
          <Button text="Quero aderir" variant="info"/>
        ]}
      />

      <CallToAction
        backdrop={true}
        image={Image4}
        orientation="right"
        title="Usuários"
        subtitle="Organize sua equipe de forma eficiente com nosso módulo de usuários"
        content={[
          <ul>
            <li>Cadastro de usuários</li>
            <li>Hierarquia estruturada</li>
            <li>Gestão simplificada</li>
          </ul>,
          <Button text="Quero aderir" variant="info"/>
        ]}
      />

      <CallToAction
        backdrop={true}
        image={Image5}
        title="Fornecedor"
        subtitle="Gerencie seus fornecedores com facilidade usando nosso módulo de fornecedor"
        content={[
          <ul>
            <li>Cadastro completo</li>
            <li>Contatos detalhado</li>
            <li>Informação de frete</li>
          </ul>,
          <Button text="Quero aderir" variant="info"/>
        ]}
      />
    </div>
  )
}

export default MainContent
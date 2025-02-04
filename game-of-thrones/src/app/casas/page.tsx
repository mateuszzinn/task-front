import Cards from "@/components/card/Card";

export default function Casas() {
    return (
        <div className="bg-gray-900">
            <div className="flex flex-wrap justify-center">
                <div className="w-1/3 p-4">
                    <Cards 
                        src="/stark.webp" 
                        alt="" 
                        titulo="Stark" 
                        descripcion="A Casa Stark de Winterfell é uma Grande Casa de Westeros, responsável pelo governo do Reino do Norte. Por anos os Reis do Inverno governaram o vasto deserto gelado do Norte com soberania absoluta, mas durante a Guerra da Conquista, a Casa Stark se tornou submissa ao Trono de Ferro. Depois de mais de trezentos anos, após o fim da Guerra dos Cinco Reis e da Invasão de Westeros por Daenerys Targaryen, a Rainha Sansa Stark convenceu seu irmão e recém-eleito Rei dos Ândalos e dos Primeiros Homens, Bran I, o Quebrado, a permitir que o Norte voltasse a ser um reino separado como era antes da conquista de Aegon I Targaryen." 
                    />
                </div>
                <div className="w-1/3 p-4">
                    <Cards 
                        src="/Lannister.webp" 
                        alt="" 
                        titulo="Lannister" 
                        descripcion="Os Lannister governam as Terras Ocidentais e têm como sede Rochedo Casterly. São os Senhores Supremos das Terras Ocidentais e Protetores do Oeste. Como a nova casa real, também governam as Terras da Coroa diretamente a partir da Fortaleza Vermelha, em Porto Real. A heráldica da Casa Lannister consiste em um leão dourado sobre fundo carmesim e seu lema oficial é  'Ouça-me Rugir' Seu lema não oficial, tão conhecido quanto, é 'Um Lannister sempre paga suas dívidas'." 
                    />
                </div>
                <div className="w-1/3 p-4">
                    <Cards 
                        src="/targaryen.webp" 
                        alt="" 
                        titulo="Targaryen" 
                        descripcion="A Casa Targaryen era uma antiga e exilada Grande Casa de Westeros e antiga regente dos Sete Reinos. Criada em Valíria, foi a única a escapar da Destruição. A Casa Targaryen foi responsável pela conquista e unificação dos Sete Reinos de Westeros, usando principalmente de dragões como força principal para manter o reinado. Após a guerra civil da conhecida como Dança dos Dragões, a Casa Targaryen enfraqueceu em números e foi aos poucos perdendo seus dragões, e por consequência seu poder. Durante o reinado do Rei Aerys II, o Louco, a monarquia Targaryen foi deposta pela Casa Baratheon e seus herdeiros foram exilados além do Mar Estreito." 
                    />
                </div>
            </div> 
        </div>
    );
}
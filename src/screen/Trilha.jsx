import { View, StyleSheet, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Timeline from 'react-native-timeline-flatlist'

export default function Trilha() {
    const data = [
        { time: '4 sem.', title: '1º mês de gestação', description: 'Escolher seu médico: escolher um obstetra deve ser o seu primeiro passo. Este profissional vai te acompanhar por todos os meses desta jornada. Para escolher um, você pode pedir recomendações de outras mães.' },
        { time: '8 sem.', title: '2º mês de gestação', description: 'Comece a cuidar da sua pele: usar cremes e óleos hidratantes ajudam a deixar a pele da gestante mais bonita. Especialmente, aliás, se considerarmos a grande mudança pela qual o corpo passa nessa fase. Sobre a frequência, é indicado que você hidrate a pele toda manhã e após o banho.' },
        { time: '12 sem.', title: '3º mês de gestação', description: 'Descubra o sexo do bebê: esta é uma fase pela qual mãe e familiares geralmente esperam muito! No ultrassom morfológico, é possível analisar os órgãos da criança. A revelação sobre o sexo, porém, depende da posição em que ele está na barriga. Se preferir, você pode fazer, também, o exame de sexagem fetal, que indica o sexo da criança com quase 100% de certeza.' },
        { time: '16 sem.', title: '4º mês de gestação', description: 'Comece a preparar o enxoval do bebê: nessa fase, a sua barriga ainda não está tão grande e o cansaço físico ainda não incomoda. Por isso, é o melhor momento para começar a pensar no enxoval. Para que não falte nada, que tal fazer uma lista de tudo o que precisa? Nós temos algumas dicas do que não pode faltar:' },
        { time: '18 sem.', title: '5º mês de gestação', description: 'Faça uma consulta pré-natal pediátrica: nesta consulta com o médico pediatra, você recebe todas as orientações das quais precisa.  Além disso, envolve, ainda, as melhores práticas para se ter desde a gestação até o futuro, com seu bebê nos braços.' },
        { time: '22 sem.', title: '6º mês de gestação', description: 'Escolha o hospital onde o bebê vai nascer: aqui, mais uma vez você pode acionar o seu obstetra para te ajudar na escolha.' },
        { time: '26 sem.', title: '7º mês de gestação', description: 'Faça um curso de gestante: ao contrário do que se diz por aí, a maternidade não é um dom feminino, nem as mulheres nascem sabendo como ser mãe.' },
        { time: '30 sem.', title: '8º mês de gestação', description: 'Lave todas as roupas do bebê: parece algo rotineiro, mas essa primeira lavagem é muito importante para a saúde do bebê.' },
        { time: '32 sem.', title: '9º mês de gestação', description: 'Passe a visitar o seu obstetra semanalmente: com o dia do nascimento chegando, é hora de ver o seu obstetra todas as semanas.' }
    ]

    return (
        <View style={styles.container}>
            <SafeAreaView style={{width: "100%"}}>
                <ScrollView style={{width: "100%", marginStart: 20}}>
                    <View style={{width: 300,}}>
                        <Timeline
                            data={data}
                            innerCircle={'dot'}
                            circleColor='#C95AC4'
                            lineColor='#C95AC4'
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%"
    },

});
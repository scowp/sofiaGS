import { View, StyleSheet, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userArea}>
                    <Image
                        style={styles.userPic}
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        }}
                    />
                    <View>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: 700 }}>Bem-vinda,</Text>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: 700 }}>USER</Text>
                    </View>
                </View>
                <Icon
                    name='bell'
                    type='font-awesome'
                    color='#fff'
                />
            </View>
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body}>

                        <View style={styles.semanas}>
                            <Icon
                                name='caret-back'
                                type='ionicon'
                                color='#C95AC4'
                                size={40}
                            />
                            <Text style={{ color: "#C95AC4", fontSize: 22, fontWeight: 700 }}>12 Semanas</Text>
                            <Icon
                                name='caret-back'
                                type='ionicon'
                                color='#C95AC4'
                                iconStyle={{ transform: [{ rotate: '180deg' }] }}
                                size={40}
                            />
                        </View>
                        <View style={styles.barra}>
                            <View style={styles.barraCompleta}></View>
                        </View>
                        <Text style={{ marginTop: 40, color: "#484848", fontSize: 20, fontWeight: 700, width: "95%" }}>Para você</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                            <View style={{ flexDirection: "column", alignItems: "flex-start", gap: 15 }}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../assets/Card1.png')}
                                />
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../assets/Card3.png')}
                                />
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "flex-end", gap: 15 }}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../assets/Card2.png')}
                                />
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../../assets/Card4.png')}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 20, width: "95%" }}>
                            <Text style={{ color: "#484848", fontSize: 20, fontWeight: 700, marginBottom: 15 }}>Atalhos</Text>
                            <TouchableOpacity style={styles.button}>
                                <Icon
                                    name='medical'
                                    type='ionicon'
                                    color='#D078D4'
                                    size={20}
                                />
                                <Text style={{ color: "#D078D4", fontSize: 16, fontWeight: 700, }}>Trilha</Text>
                                
                            </TouchableOpacity>
                        </View>
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

    header: {
        backgroundColor: "#C95AC4",
        width: "100%",
        height: "14%",
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 40
    },

    userPic: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginEnd: 10
    },

    userArea: {
        justifyContent: "start",
        flexDirection: "row",
        alignItems: "center",
    },

    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
        paddingTop: 30,
        padding: 10
    },

    semanas: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        width: "95%",
        marginBottom: 20
    },

    barra: {
        backgroundColor: "#FFEBEB",
        width: "90%",
        height: 10,
        borderRadius: 50
    },

    barraCompleta: {
        backgroundColor: "#C95AC4",
        width: "30%",
        height: 10,
        borderRadius: 50
    },
    button: {
        backgroundColor: "#FFEBEB",
        padding: 15,
        borderRadius: 10,
        width: 150,
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    }


});
import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { generateShades } from '../../../utils/ConvertData'
import FoodTable from '../../common/FoodTable'

function ProbioticTable({ data }) {
    const shades = generateShades('#177DC0', Object.keys(data.probiotic).length)

    const Food =  data.probioticFoodRecomendation?(data.probioticFoodRecomendation.length?data.probioticFoodRecomendation.join(", "):""):""

    return (
        <View style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', gap: "5px", border: "1px solid black", fontFamily: 'NunitoBold', fontSize: "9px", height: "21.45px", padding: "0 5px" }}>
                <Text style={{ width: "150px" }}>PROBIOTICS DETECTED</Text>
                <Text style={{ width: "120px" }}>RELATIVE ABUNDANCE</Text>
                <Text style={{ width: "257px" }}>MAJOR CHARACTERISTICS</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: "0.5px" }}>
                {data.probiotic.map((obj, i) => {
                    return (
                        <View key={i} style={{ padding: "2px 5px", display: "flex", flexDirection: "row", alignItems: 'center', gap: "5px", fontFamily: 'NunitoBold', fontSize: "9px", backgroundColor: shades[i] }}>
                            <Text style={{ width: "150px" }}>{obj.bacteria.replace(/_/g, " ")}</Text>
                            <Text style={{ width: "120px", textAlign: "center" }}>{obj.abundance}</Text>
                            <Text style={{ width: "257px", fontFamily: "NunitoSBold" }}>
                                {obj.interpretation||"N.A"}
                            </Text>
                        </View>
                    )
                })}
            </View>
            <FoodTable Food={Food} />
        </View>
    )
}

export default ProbioticTable

import OrderTracking from "@/components/orderTrack"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const orders = () => {
    return(
        <SafeAreaView>
            <Text>Recent Orders</Text>
           <View className="w-[100%] flex justify-center items-center">
           <OrderTracking />
           </View>
        </SafeAreaView>
    )
}

export default orders
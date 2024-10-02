import DownloadWall from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Explore() {
  const [showImage, setShowImage] = useState(false)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Button title="open bottom sheet" onPress={()=> {
          setShowImage(true)
        }}>
        </Button>
        {showImage && <DownloadWall onClose={() => setShowImage(false)}/>}
        
      </View>
    </SafeAreaView>

  );
}



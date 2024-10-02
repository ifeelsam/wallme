import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DownloadWall from "@/components/BottomSheet";
import { Link, Stack } from "expo-router";
export default function accounts() {
  const [showImage, setShowImage] = useState(false)
  return (
    <SafeAreaView>
      <Link href={"/accinfo"}>
        <Text>hellow</Text>
      </Link>
    </SafeAreaView>
  )
}

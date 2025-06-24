import React, { useState, useRef, useEffect } from "react"; 
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet, 
  Keyboard, 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import BackButton from "@/components/BackButton"; 

type Message = {
  id: string;
  text: string;
  sender: "user" | "support";
};

const ChatSupport = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! How can I help you today?",
      sender: "support",
    },
    
    { id: "2", text: "I have a question about my order.", sender: "user" },
    { id: "3", text: "Sure, please provide your order number.", sender: "support" },
    { id: "4", text: "It's #123456789.", sender: "user" },
    { id: "5", text: "Thank you. Let me check that for you.", sender: "support" },
    { id: "6", text: "Okay, thanks!", sender: "user" },
    { id: "7", text: "Hi! How can I help you today?", sender: "support" },
    { id: "8", text: "I have a question about my order.", sender: "user" },
    { id: "9", text: "Sure, please provide your order number.", sender: "support" },
    { id: "10", text: "It's #123456789.", sender: "user" },
    { id: "11", text: "Thank you. Let me check that for you.", sender: "support" },
    { id: "12", text: "Okay, thanks!", sender: "user" },
  ]);

  const flatListRef = useRef<FlatList>(null);

  
  useEffect(() => {
    
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]); 

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.sender === "user";
    return (
     
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userMessage : styles.supportMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
        <Text className="font-urbanist ml-4 text-xl" >Chat Support</Text>
      </View>

      {/* KeyboardAvoidingView  */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
       
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        style={styles.keyboardAvoidingView}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />

        {/* Input area */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Type your message..."
              style={styles.textInput}
            />
            <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
              <MaterialIcons name="send" size={24} color="#4F46E5" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  backButtonContainer: {
    height: 48, 
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18, 
    fontFamily: "urbanist",
    marginLeft: 16,
    color: "#1F2937",
  },
  keyboardAvoidingView: {
    flex: 1, 
  },
  flatListContent: {
    padding: 16,
    flexGrow: 1, 
    justifyContent: 'flex-end', 
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12, 
    marginVertical: 4, 
    borderRadius: 12, 
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#EEF2FF", 
  },
  supportMessage: {
    alignSelf: "flex-start", 
    backgroundColor: "#E5E7EB", 
  },
  messageText: {
    color: "#374151",
    
  },
  inputContainer: {
    padding: 16, 
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB", 
    backgroundColor: "white",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 9999, 
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textInput: {
    flex: 1, 
    fontSize: 16, 
    minHeight: 20, 
  },
  sendButton: {
    marginLeft: 8,
  },
});

export default ChatSupport;
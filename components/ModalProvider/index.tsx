import React, {
    createContext,
    PropsWithChildren,
    ReactNode,
    useContext,
    useState,
  } from "react";
  import { Modal, View } from "react-native";
  
  import styles from "./styles";
  
  // Step 1:  Define Context Props
  interface ModalContextProps {
    show: (content: ReactNode) => void;
    hide: () => void;
  }
  
  // Step 2: Create the Context
  const ModalContext = createContext<ModalContextProps | undefined>(undefined);
  
  // Step 3: Define a Provider component with context values/functions
  export default function ModalProvider({ children }: PropsWithChildren) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);
  
    const contextValue = {
      show: (content: ReactNode) => {
        setModalContent(content);
        setModalVisible(true);
      },
      hide: () => setModalVisible(false),
    };
  
    return (
      <ModalContext.Provider value={contextValue}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // this callback runs when device "back" button is pressed
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.container}>
            <View style={styles.content}>{modalContent}</View>
          </View>
        </Modal>
  
        {/* Render context children (your Page or App) */}
        {children}
      </ModalContext.Provider>
    );
  }
  
  // Step 4: Define a Consumer hook to access modal context
  export function useModal() {
    const context = useContext(ModalContext);
  
    if (!context)
      throw new Error("useModal must be called inside ModalProvider!");
  
    return context;
  }
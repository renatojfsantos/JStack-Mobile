import { View, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView
      // style={{ backgroundColor: '#111' }}
      persistentScrollbar // * Android only
      indicatorStyle='black' // * iOS only
      showsVerticalScrollIndicator={false}
      // scrollEventThrottle={16}
      // onScroll={(event) => {
      //   console.log(event.nativeEvent.contentOffset.y)
      // }}
      // onScrollBeginDrag={() => console.log('BeginDrag')}
      // onScrollEndDrag={() => console.log('EndDrag')}
      onScrollToTop={() => console.log('ScrollToTop')} // * iOS only
    >
      <ScrollView
        horizontal
        style={{ marginTop: 150 }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={(event) => {
          console.log(event.nativeEvent.contentOffset.x)
        }}
      >
        <Text style={{ fontSize: 32 }}>
          Oi tudo bem
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
      </ScrollView>

      <Text style={{ marginTop: 50, fontSize: 32 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
      
      
    </ScrollView>
  )
}
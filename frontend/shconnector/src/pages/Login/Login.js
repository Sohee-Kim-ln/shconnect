import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import char9 from '../../../assets/character9.png';
import Button from '../../components/common/Button';
import {
  updateAccessToken,
  updateRefreshToken,
} from '../../reducers/TokenSlice';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  const handlePressLogin = (response) => {
    if ('로그인 성공했으면') {
      dispatch(updateAccessToken('엑세스 토큰'));
      dispatch(updateRefreshToken('리프레시 토큰'));
      //메인 이동
      navigation.navigate('Home');
    }
    else{
      // 아이디와 비밀번호를 확인해주세요 안내 메세지
    }
    
  };

  return (
    <View style={styles.container}>
      <Text>{password}</Text>
      <View style={styles.upper}>
        <View style={styles.titleCon}>
          <Image source={char9} resizeMode='contain' style={styles.imgEach} />
          <View style={styles.textCon}>
            <Text style={styles.boldtext}>로그인</Text>
            <Text style={styles.subtext}>
              아이디와 비밀번호를 입력해주세요.
            </Text>
          </View>
        </View>
        <View style={styles.inputCon}>
          <TextInput
            style={styles.input}
            placeholder='아이디'
            keyboardType='text'
            onChangeText={(text) => setId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='비밀번호'
            keyboardType='password'
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.btnCon}>
          <Button
            title='로그인'
            backgroundColor='#2B70CC'
            color='white'
            onPress={handlePressLogin}
          />
        </View>
        <View></View>
      </View>
      <View style={styles.lower}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upper: {
    flex: 3,
  },
  lower: {
    flex: 2,
  },
  titleCon: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  inputCon: {
    flex: 1,
    alignItems: 'center',
  },
  imgEach: {
    height: '35%',
    width: '35%',
  },
  boldtext: {
    fontWeight: '600',
    fontSize: 24,
  },
  subtext: {
    fontSize: 16,
    color: 'gray',
  },
  textCon: {
    alignItems: 'center',
    gap: 10,
  },
  input: {
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#DCDCDC',
    height: 50,
    width: 300,
    padding: 10,
    paddingLeft: 15,
    marginBottom: 10,
  },
  btnCon: {
    justifyContent: 'center',
    textAlign: 'center',
    width: 325,
  },
});

import React from 'react';
import { Text, View, StatusBar, Image, ScrollView } from 'react-native';
import colors from '../../../styles/colors';
import { useDispatch, useSelector } from 'react-redux';
import {
    checkSmsCode,
} from '../../../redux/actions';

import { homeStyle } from '../components';
import PhoneCodesButton from '../../common/PhoneCode/PhoneCodesButton';
import authStyle from './authStyle';
import { Strings } from '../../../utils/Strings';



export default function VerifyPhoneNumberScreen({ route, navigation }) {
    const dispatch = useDispatch();
    const { phoneNumber, verification_id } = route.params;
    const { userLoading } = useSelector((state: { User: { userLoading: any; user: any; } }) => state.User);
    const { navigate } = navigation;



    function submit(number: string) {
        let data = {
            code: number,
            verification_id,
            phone: phoneNumber
        }

        dispatch(checkSmsCode(data, () => navigate('Signup', { phoneNumber, verification_id: verification_id }), (err) => console.log("err", err)))

    }



    return (
        <View style={authStyle.container}>
            <StatusBar />
            <View style={authStyle.coverContainer}>
                <Image source={require('../../../../assets/slogan.png')} resizeMode="contain"  style={authStyle.coverImage} ></Image>

            </View>

            <ScrollView style={{ flex: 0.2, marginHorizontal: 10, }} showsVerticalScrollIndicator={false}>

                <View style={{ flex: 1, marginTop: 30 }}>
                    <View style={{ margin: 20 }}>

                        <Text style={homeStyle.description}>{Strings.phoneVerify}</Text>
                        <Text style={[homeStyle.title, { fontSize: 25, color: colors.black, fontWeight: "bold" }]}>{Strings.enterDigit}</Text>
                        <Text style={homeStyle.description}>{Strings.sentToYou}{phoneNumber}</Text>
                    </View>
                    <View style={authStyle.digitInput}>
                        <PhoneCodesButton
                            showPhoneCode={false}
                            textContentType='none'
                            keyboardType="numeric"
                            title={Strings.enterDigit}
                            loading={userLoading}
                            submit={(number: string) => submit(number)}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* {showPopUp && <PopUpComponent
                showPopUp={showPopUp}
                popUpContent={<ErrorPopUp close={() => setShowPopUp(false)} errorText={error} />}
            />}
            {showInternetPopUp && <PopUpComponent showPopUp={showInternetPopUp} popUpContent={<ErrorPopUp close={() => setShowInternetPopUp(false)} errorText={"Please check your internet connection and try again"} />} />} */}
        </View>
    );
}
// );


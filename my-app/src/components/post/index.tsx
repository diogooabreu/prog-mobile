import { View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const showLogin = () => {
        console.log("Username: ", username);
        console.log("Password: ", password);
    };

    return (
        <View>
            <TextInput
                placeholder='Username'
                value={username}
                onChangeText={setUserName}
            />

            <TextInput
                placeholder='Password'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <Button title="Submit" onPress={showLogin} />
        </View>
    );
};

export default Login;
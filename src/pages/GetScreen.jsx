import React, {useEffect} from 'react';
import {API} from "aws-amplify";

const GetScreen = () => {

    const getData = async() => {
        const data = await API.get('cryptoapi','/item');
        console.log(data)
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <h1>Hello get</h1>
        </div>
    );
};

export default GetScreen;

/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';

import { InferenceSession } from "onnxruntime-react-native";

// async function runModel(preprocessedData: any) {

async function runModel() {
    // Create session and set options. See the docs here for more options: 
    //https://onnxruntime.ai/docs/api/js/interfaces/InferenceSession.SessionOptions.html#graphOptimizationLevel
    console.log('Inference session started');
    const modelPath = './mnist.ort'
    await InferenceSession.create('mnist.ort');

    console.log('Inference session created');
    // Run inference and get results.
    // var [results, inferenceTime] =  await runInference(session, preprocessedData);
    // return [results, inferenceTime];
  }
const T1 = () => {
    runModel()
    return (
        <Text>Happy Sugar Life</Text>

    )
}


export default T1;
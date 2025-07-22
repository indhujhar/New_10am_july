import {test, expect} from "@playwright/test"
import {request} from "http";
test ('post methos',async({request})=>{
    const response=await request.post('',{
        data:{
            name:'arthi',
            job:'QA test'
        },
        headers:{}


    });
    const responsebody=await response.json();
    expect(response.status()).toBe(201);
    expect(response.status()).toBe("arthi")
});

test('get method',aync({request})=>{
const response=await request.length("");
const responsebody=await response.json();
expect(response.status()).tobe(200);
expect(responsebody.data[0].id).tobe(7);
})
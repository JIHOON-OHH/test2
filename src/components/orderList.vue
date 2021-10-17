<template>
    <div>
        <h1>주문내역</h1>
        <table border="1">
            <tr>
                <td>주문번호</td>
                <td>상품명</td>
                <td>온습도</td>
                <td>주문상태</td>
                <td>주문자</td>
            </tr>
            <tr v-for="i in orederList.length" :key="i">
                <td>{{orderList[i-1].orderId}}</td>
                <td>{{orderList[i-1].customerName}}</td>
                <td>{{orderList[i-1].productName}}</td>
                <td>{{orderList[i-1].condition}}</td>
                <td>{{orderList[i-1].state}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import http from "../service/http-common.js"

 export default {
     name: 'orderList',
    
     data() {
        return {
            orderList : [],
            orderId : '',
            customerName : '',
            productName : '',
            condition : '',
            state : ''
        }
    },
    methods: {
        orderLists() {
        http
            .get("/orders")
            .then(res => (this.orderList = res.data))
            .catch(error => {
                console.log(error);
            });
        }
        
    },
    mounted() { 
      if (this.orderLists()){
          console.log('f');
      }else{
          console.log('t');
      }
        
    }
    
 }
 


</script>
<style>
    
</style>
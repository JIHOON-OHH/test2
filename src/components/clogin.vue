<template>
    <div>
        <h1>생산자 로그인</h1>
        <table>
            <tr>
                <td>ID</td>
                <td><input type="text" id="userId"></td>
            </tr>
            <tr>
                <td>PW</td>
                <td><input type="password" id="userPw"></td>
            </tr>
        </table>
        <button @click="login">로그인</button>
        <button @click="cjoin">회원가입</button>
    </div>
</template>
<script>
import data from '@/data'
export default {
    name: 'clogin',
    data(){
        return {
            data: data
        }
    },
    methods: {
         login() {
             const id = document.getElementById('userId').value;
             const pw = document.getElementById('userPw').value;
             if(data.id == id && data.pw == pw){
                this.$router.push({
                path: 'signup'
                })

             }else {
                 alert('로그인 실패!');
             }
        },
        cjoin() {
            this.$router.push({
                path: 'cjoin'
            })
        }
    }
}
</script>
<style>
    h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
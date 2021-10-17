<template>
  <div>
    <h1>상품 등록</h1>
    <table>
      <tr>
        <td>생산자명</td>
        <td><input type="text" class="name"></td>
      </tr>
      <tr>
        <td>생산자 연락처</td>
        <td><input type="text" class="id"></td>
      </tr>
      <tr>
        <td>상품명</td>
        <td><input type="password" class="pw"></td>
      </tr>
      <tr>
        <td>소비자 연락처</td>
        <td><input type="text" class="cphone"></td>
      </tr>
      <tr>
        <td>주소</td>
        <td><input type="text" class="caddress"></td>
      </tr>
    </table>
    <button>등록</button>
  </div>
</template>

<script>
export default {
  name: 'signup'
}
</script>

<style>
div { margin-top: auto;
margin-bottom: auto;}
table {
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  text-align: center;
}
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
  margin-top: 40%;
}
.name {
  border-radius: 5px;
  border: 2px solid #0d62fd;
  width : 200px;
}
.id {
  border-radius: 5px;
  border: 2px solid #0d62fd;
  width : 200px;
}
.pw {
  border-radius: 5px;
  border: 2px solid #0d62fd;
  width : 200px;
}
.cphone {
  border-radius: 5px;
  border: 2px solid #0d62fd;
  width : 200px;
}
.caddress {
  border-radius: 5px;
  border: 2px solid #0d62fd;
  width : 200px;
}
button {
  border-radius: 20px;
  border: 2px solid #0d62fd;
  width: 70px;
  height: 40px;
  color: #2F3B52;
  margin-top: 7%;
}
</style>

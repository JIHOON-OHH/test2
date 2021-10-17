<template>
  <div>
  <h1>유통업체 회원가입</h1>
  <table>
    <tr>
      <td>이름</td>
      <td><input type="text" class="name"></td>
    </tr>
    <tr>
      <td>ID</td>
      <td><input type="text" class="id"></td>
    </tr>
    <tr>
      <td>PW</td>
      <td><input type="password" class="pw"></td>
    </tr>
    <tr>
      <td>연락처</td>
      <td><input type="text" class="cphone"></td>
    </tr>
  </table>
  <input type="submit" class="button" value="등록">
</div>
</template>

<script>
export default {
  name: 'djoin'
}
</script>

<style>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
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
  border-radius: 10px;
  border: 2px solid #0d62fd;
  width : 210px;
}
.id {
  border-radius: 10px;
  border: 2px solid #0d62fd;
  width : 210px;
}
.pw {
  border-radius: 10px;
  border: 2px solid #0d62fd;
  width : 210px;
}
.cphone {
  border-radius: 10px;
  border: 2px solid #0d62fd;
  width : 210px;
}

</style>

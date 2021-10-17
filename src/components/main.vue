<template>
  <div>
    <h1>상품 배송 조회</h1>
    <table>
        <tr>
            <td><input type="text"></td>
            <td><button>조회</button></td>
        </tr>
    </table>
    <button @click="consumer">생산자</button>
    <button @click="distribute">유통업체</button>
  </div>
</template>

<script>
export default {
    name: 'main',
    methods : {
        consumer() {
            this.$router.push({
                path: 'clogin'
            })
        },
        distribute() {
            this.$router.push({
                path: 'dlogin'
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
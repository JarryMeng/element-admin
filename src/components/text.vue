
<script>
export default {
  render(h) {
    var protocol = ("https:" == document.location.protocol) ? "https://" : "https://";
    return h(
      'span', {
        attrs: {
          id: 'cnzz_stat_icon_5764980'
        }
      },
      [
        h(
          'script', {
            attrs: {
              src: `${protocol}s6.cnzz.com/stat.php?id=5764980&show=pic`
            }
          }
        )
      ]
    )
  }
}
</script>

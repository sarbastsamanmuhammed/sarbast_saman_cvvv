import comp from "C:/Users/sarba/sarbast_saman_cvv/docs/.vuepress/.temp/pages/cv.html.vue"
const data = JSON.parse("{\"path\":\"/cv.html\",\"title\":\"Curriculum Vitae\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Curriculum Vitae\",\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"cv.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

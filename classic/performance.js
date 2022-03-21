function perTiming(timing = window.performance.timing) {
  var per = {
    beforedns: ["domainLookupStart", "navigationStart"],
    // dns - DNS查询耗时
    dns: ["domainLookupEnd", "domainLookupStart"],
    // tcp - TCP链接耗时
    tcp: ["connectEnd", "connectStart"],
    // rsp - request请求耗时
    rsp: ["responseEnd", "requestStart"],
    // domInteractive 表示浏览器完成对所有 HTML 的解析并且 DOM 构建完成的时间点
    domActive: ["domInteractive", "domLoading"],
    active2loadStart: ["loadEventStart", "domInteractive"],
    loadEvent: ["loadEventEnd", "loadEventStart"],
    fp: ["loadEventEnd", "navigationStart"],
  };
  Object.entries(per).forEach(([key, [end, start]]) => {
    console.log(`${key}: ${timing[end] - timing[start]}ms`);
  });
}

const middleware = [
  async function middleware1(ctx, next) {
    console.log('1 start');
    await next();
    console.log('1 end');
  },
  async function middleware2(ctx, next) {
    console.log('2 start');
    await next();
    console.log('2 end');
  },
  async function middleware3(ctx, next) {
    console.log('3 start');
    await next();
    console.log('3 end');
  },
];

function compose(middleware) {
  return function (context, next) {
    let index = -1;
    return dispatch(0);

    function dispatch(i) {
      if (index >= i)
        return Promise.reject(new Error('next() called multiple times'));
      // 当前执行中间件
      let fn = middleware[i];
      index = i;
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (error) {
        return Promise.reject(error);
      }
    }
  };
}

const m = compose(middleware);
m('ctx', async (ctx, next) => {
  console.log('===>');
}).then(() => {
  console.log('handle response');
});

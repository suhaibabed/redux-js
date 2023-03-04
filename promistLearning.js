let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")
  resolve("done");
  reject(new Error("_"));
  setTimeout(() => resolve("_"));
});

console.log(promise);

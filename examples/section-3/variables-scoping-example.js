// Variable scoping: var, let, const
function demo() {
  if (true) {
    var x = 1;   // function-scoped
    let y = 2;   // block-scoped
    const z = 3; // block-scoped, read-only binding
  }
  console.log(x); // 1
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
}


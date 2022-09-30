const callbackFunc = () => {
  console.log("This is callback function..");
};

function myFunc(name, cb) {
  console.log(name);
  console.log("http Request");
  cb();
}

myFunc("sam", callbackFunc);

const promise = new Promise((resolve, reject) => {
  let success = true;
  console.log("Sending Request to server");
  if (success) {
    const obj = {
      message: "Hey You Succeeded",
      data: {
        name: "Sam",
        email: "prakashamtara07@gmail.com",
      },
    };
    resolve(obj);
  } else {
    reject("Operation Failed");
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Oops Error Occured");
    console.log(error);
  });

const getPostsUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(getPostsUrl, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    console.log(posts);
  })
  .catch((error) => {
    console.log("Error Occured!", error);
  });

const data = {
  title: "A Sample Title",
  description: "A Sample Description",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((post) => {
    console.log(post);
  })
  .catch((error) => {
    console.log(error);
  });

const myFunc2 = async () => {
  try {
    const res = await fetch(getPostsUrl, {
      method: "GET",
    });
    const responseData = await res.json();
    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
  console.log("Dead End");
};

myFunc2();

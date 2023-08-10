
const btn = document.querySelectorAll(".delete")
btn.forEach((button, i) => {
  button.addEventListener("click", async () => {
    await fetch(`/${button.classList[1]}`, { method: "DELETE" })
    window.location.href = "/"
      .catch((err) => {
        console.log(err);
      })
  })
})

const bt = document.querySelector(".delete-all")
bt.addEventListener("click", async () => {
  const endp = `/`
  const response = await fetch(endp, { method: "DELETE" })
    .then((response) => window.location.href = "/")
    .catch((error) => console.log(error))
})


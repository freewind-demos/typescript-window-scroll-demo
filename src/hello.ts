const button = document.getElementById('button')!;
const input = document.getElementById('input') as HTMLInputElement;

button.addEventListener('click', () => {
    console.log("### input.value", input.value)
    window.scroll({
        top: parseInt(input.value ?? 0)
    })
})
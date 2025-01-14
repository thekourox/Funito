async function getFal() {
    try {
        const response = await fetch('/api/fal');
        const data = await response.json();
        setTimeout(() => {
            document.getElementById('waitText').style.display = 'none';
            document.getElementById('falTitle').innerHTML = data.title;
            document.getElementById('falText').innerHTML = data.interpreter;
            document.getElementById('getFal').style.display = 'none';
            document.getElementById('backButton').style.display = 'inline-block';
            document.getElementById('backButton').style.background = '#3291fc';
        }, 1500);
    } catch (err) {
        if (err) {
            setTimeout(() => {
                
                document.getElementById('waitText').innerHTML = "خطا در برقراری ارتباط با سرور !"
            }, 4000);
        }
    }
}

document.getElementById('getFal').addEventListener('click', () => {
    document.getElementById('waitText').style.display = 'inline-block';
    document.getElementById('waitText').innerHTML = "لطفا صبر نمایید ...";
    document.getElementById('footer').style.display = 'inline-block';
})

document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('falTitle').innerHTML = null;
    document.getElementById('falText').innerHTML = null;
    document.getElementById('getFal').style.display = 'inline-block';
    document.getElementById('backButton').style.display = 'none';
}) 
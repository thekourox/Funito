async function getFal() {
    try {
        const response = await fetch('http://localhost:3000/api/fal');
        const data = await response.json();
        document.getElementById('falTitle').innerHTML = data.title;
        document.getElementById('falText').innerHTML = data.interpreter;
        document.getElementById('getFal').style.display = 'none';
        document.getElementById('backButton').style.display = 'inline-block';
        document.getElementById('backButton').style.background = '#3291fc';
    } catch (err) {
        if (err) {
            setTimeout(() => {
                alert("خطا در برقراری ارتباط با سرور");
            }, 4000);
        }
    }
}

document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('falTitle').innerHTML = null;
    document.getElementById('falText').innerHTML = null;
    document.getElementById('getFal').style.display = 'inline-block';
    document.getElementById('backButton').style.display = 'none';
}) 
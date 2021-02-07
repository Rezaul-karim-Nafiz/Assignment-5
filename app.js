fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => console.log(data) )



git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Rezaul-karim-Nafiz/Assignment-5.git
git push -u origin main
const handleChange = () => {
    document.body.classList.toggle('dark-theme')
    document.querySelector('.App-header').classList.toggle('header-dark');
    document.querySelector('.search').classList.toggle('dark-input');
}

function MovieSort() {

    return (
        <div className="checkBox"> 
        <input
        type="checkbox"
        onClick={handleChange}
        />
        Dark theme
        </div>
    )
}

export default MovieSort

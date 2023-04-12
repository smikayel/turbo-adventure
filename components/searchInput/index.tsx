import style from './index.module.scss'


export default function SearchBar() {
    return (
        <div className="box">
            <input
                type="text" 
                className={style.text} 
                name="txt" 
                onMouseOut={(e) => {
                    console.log(e)
                    // "this.value = ''; this.placeholder =''; this.blur();" 
                }}
                placeholder="Type to search..."
            />
        <i className="fas fa-search"></i>
        </div>
    )
}
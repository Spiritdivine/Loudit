import SearchIcon from '@mui/icons-material/Search';

const searching = {

}

const Search = () => {
    return ( 
        <div className='search' >
            <div style={{height:40, width:383, flexWrap:'wrap'}}>
                <input className="searchbar" typeof="text" placeholder="Search Loudit" style={{fontFamily:'Poppins', fontSize:'14px', fontWeight:'400', position:'relative', bottom:'2px'}}/>
                <button ><SearchIcon fontSize='large'/></button>
            </div>
        </div>
     );
}
 
export default Search;
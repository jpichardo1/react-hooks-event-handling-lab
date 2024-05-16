// Code EyesOnMe Component Here
function EyesOnMe(){

function handleFocus(event){
    console.log('Good!')
}
  function handleBlur(event){
    console.log('Hey! Eyes on me!')
  }  

return (
    <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on meq</button>
)

}

export default EyesOnMe;